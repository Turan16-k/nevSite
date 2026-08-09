-- NevGenç v2 — Topluluk Başvuru Sistemi & Yönetim Ekibi Alanları
-- Supabase SQL Editor'da çalıştırın.
-- =============================================================

-- 1. Başvuru tablosu (community_applications)
-- -------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.community_applications (
  id               BIGSERIAL PRIMARY KEY,
  applicant_name   TEXT NOT NULL,
  email            TEXT NOT NULL,
  phone            TEXT,
  community_name   TEXT NOT NULL,
  category         TEXT NOT NULL,
  description      TEXT,
  message          TEXT,
  status           TEXT NOT NULL DEFAULT 'pending',  -- 'pending' | 'approved' | 'rejected'
  created_at       TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.community_applications ENABLE ROW LEVEL SECURITY;

-- Herkes (giriş yapmadan) başvuru gönderebilir
DROP POLICY IF EXISTS "applications_insert" ON public.community_applications;
CREATE POLICY "applications_insert" ON public.community_applications
  FOR INSERT WITH CHECK (true);

-- Sadece admin rolündeki kullanıcılar başvuruları görebilir
DROP POLICY IF EXISTS "applications_admin_select" ON public.community_applications;
CREATE POLICY "applications_admin_select" ON public.community_applications
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
  );

-- Sadece admin başvuru durumunu güncelleyebilir
DROP POLICY IF EXISTS "applications_admin_update" ON public.community_applications;
CREATE POLICY "applications_admin_update" ON public.community_applications
  FOR UPDATE USING (
    EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
  );

-- 2. communities tablosuna yönetim ekibi ve sosyal medya alanları
-- -------------------------------------------------------------
ALTER TABLE public.communities
  ADD COLUMN IF NOT EXISTS vice_chairman_name  TEXT,
  ADD COLUMN IF NOT EXISTS secretary_name      TEXT,
  ADD COLUMN IF NOT EXISTS social_instagram    TEXT,
  ADD COLUMN IF NOT EXISTS social_twitter      TEXT,
  ADD COLUMN IF NOT EXISTS social_linkedin     TEXT;

-- 3. Onaylı başkanlar ('chairman' veya 'admin' rolü) kendi topluluklarını oluşturabilir
-- -------------------------------------------------------------
DROP POLICY IF EXISTS "communities_chairman_insert" ON public.communities;
CREATE POLICY "communities_chairman_insert"
  ON public.communities FOR INSERT
  WITH CHECK (
    chairman_id = auth.uid() AND
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role IN ('admin', 'chairman')
    )
  );

-- 4. Başkanlar kendi topluluk gönderilerini silebilir
-- -------------------------------------------------------------
DROP POLICY IF EXISTS "posts_chairman_delete" ON public.posts;
CREATE POLICY "posts_chairman_delete"
  ON public.posts FOR DELETE
  USING (
    EXISTS (
      SELECT 1 FROM public.communities
      WHERE communities.id = community_id
        AND communities.chairman_id = auth.uid()
    )
  );

-- =============================================================
-- ONAY AKIŞI (Manuel Süreç):
-- 1. Kişi index.html'deki "Topluluk Ekle" formuyla başvurur
--    → community_applications tablosuna 'pending' olarak eklenir
-- 2. Admin Supabase Dashboard > Table Editor > community_applications
--    tablosundan başvuruları inceler
-- 3. Onaylarsa:
--    a. Authentication > Users > "Add user" ile e-posta/şifre oluşturur
--    b. Aşağıdaki SQL'i kendi UUID'ini yazarak çalıştırır:
--       INSERT INTO public.profiles (id, name, role)
--       VALUES ('<auth-user-uuid>', 'Başkan Adı Soyadı', 'chairman');
--    c. Başkana e-posta + şifre bilgisini iletir
-- 4. Başkan admin.html'den giriş yapar
--    → "Topluluğunuzu Kurun" ekranı açılır
--    → Bilgileri doldurup topluluğunu oluşturur
-- 5. Artık tam yönetim paneline erişebilir, gönderi/etkinlik yönetebilir
-- =============================================================
