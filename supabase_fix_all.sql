-- ============================================================
-- NevGenç — Kapsamlı Düzeltme & Eksik Kurulum
-- Supabase SQL Editor'da çalıştırın.
-- Bu dosya tek başına tüm eksiklikleri giderir.
-- ============================================================

-- ── 1. Eksik sütunlar (tüm migration'lardan) ─────────────────
ALTER TABLE public.communities
  ADD COLUMN IF NOT EXISTS contact_info        TEXT,
  ADD COLUMN IF NOT EXISTS vice_chairman_name  TEXT,
  ADD COLUMN IF NOT EXISTS secretary_name      TEXT,
  ADD COLUMN IF NOT EXISTS social_instagram    TEXT,
  ADD COLUMN IF NOT EXISTS social_twitter      TEXT,
  ADD COLUMN IF NOT EXISTS social_linkedin     TEXT,
  ADD COLUMN IF NOT EXISTS member3_name        TEXT,
  ADD COLUMN IF NOT EXISTS member4_name        TEXT;

-- ── 2. community_applications tablosu (yoksa oluştur) ────────
CREATE TABLE IF NOT EXISTS public.community_applications (
  id               BIGSERIAL PRIMARY KEY,
  applicant_name   TEXT NOT NULL,
  email            TEXT NOT NULL,
  phone            TEXT,
  community_name   TEXT NOT NULL,
  category         TEXT NOT NULL,
  description      TEXT,
  message          TEXT,
  status           TEXT NOT NULL DEFAULT 'pending',
  created_at       TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.community_applications ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "applications_insert"        ON public.community_applications;
DROP POLICY IF EXISTS "applications_admin_select"  ON public.community_applications;
DROP POLICY IF EXISTS "applications_admin_update"  ON public.community_applications;

CREATE POLICY "applications_insert" ON public.community_applications
  FOR INSERT WITH CHECK (true);

CREATE POLICY "applications_admin_select" ON public.community_applications
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
  );

CREATE POLICY "applications_admin_update" ON public.community_applications
  FOR UPDATE USING (
    EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
  );

-- ── 3. RLS: Başkanlar kendi topluluklarını güncelleyebilir ────
DROP POLICY IF EXISTS "communities_chairman_update" ON public.communities;
CREATE POLICY "communities_chairman_update"
  ON public.communities FOR UPDATE
  USING (auth.uid() = chairman_id);

-- ── 4. RLS: Başkanlar kendi topluluklarını oluşturabilir ──────
DROP POLICY IF EXISTS "communities_chairman_insert" ON public.communities;
CREATE POLICY "communities_chairman_insert"
  ON public.communities FOR INSERT
  WITH CHECK (
    chairman_id = auth.uid() AND
    EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role IN ('admin', 'chairman'))
  );

-- ── 5. RLS: Başkanlar etkinlik ekleyebilir/silebilir ─────────
DROP POLICY IF EXISTS "events_chairman_insert" ON public.events;
CREATE POLICY "events_chairman_insert"
  ON public.events FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.communities
      WHERE communities.id = community_id
        AND communities.chairman_id = auth.uid()
    )
  );

DROP POLICY IF EXISTS "events_chairman_delete" ON public.events;
CREATE POLICY "events_chairman_delete"
  ON public.events FOR DELETE
  USING (
    EXISTS (
      SELECT 1 FROM public.communities
      WHERE communities.id = community_id
        AND communities.chairman_id = auth.uid()
    )
  );

-- ── 6. RLS: Başkanlar kendi topluluk gönderilerini silebilir ──
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

-- ── 7. RLS: Admin gönderi/etkinlik silebilir ─────────────────
DROP POLICY IF EXISTS "posts_admin_delete" ON public.posts;
CREATE POLICY "posts_admin_delete"
  ON public.posts FOR DELETE
  USING (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin'));

-- ── 8. 4 örnek topluluk (yoksa ekle) ─────────────────────────
INSERT INTO public.communities
  (name, category, member_count, description,
   chairman_name, vice_chairman_name, secretary_name, member3_name, member4_name, contact_info)
VALUES
(
  'Girişimci Mühendisler Topluluğu', 'Girişimcilik', 10,
  'Girişimci ve mühendislik bakış açısıyla insana değer veren özgün ve yenilikçi faaliyetler gerçekleştirerek üniversite öğrencilerini daha donanımlı ve daha yetkin birer bireyler olarak mezun olmalarını sağlamak ve bu sayede de sektörde arayan değil aranan elemanlar olmalarını sağlamak...',
  'Ahmet Safa Zengin', 'Elif İkier', 'Görkem Mutlu', 'Yavuz Selim Eviş', 'İclal Tezcan', '05314584361'
),
(
  'Tarih Öğrenci Topluluğu', 'Kültür & Sanat', 9,
  'Her etkinlikte, her yolculukta, her konferansta ve her tartışmada aslında kendimizi de inşa ediyoruz çünkü biz sıradan bir öğrenci topluluğu değil; şehrin ve üniversitenin hafızasını taşıyan, kültürünü yaşatan ve geleceğe aktaran bir ruhuz. Ve tarih, bizim birlikte yazdığımız bugündür.',
  'İbrahim Gece', 'Bayram Dağdaş', 'Zeynep Yılmaz', 'Sıla Gündüzer', 'Yiğit Efe Alkan', '0545 528 2245'
),
(
  'Bilişim Sistemleri Mühendisliği Topluluğu', 'Teknoloji', 17,
  'Üniversite bünyesindeki nitelikli öğrencileri bulmak ve bir araya getirerek teknolojiyi birlikte keşfetmek.',
  'Melik Mirza Çelik', 'Emirhan Hasan Aydın', 'Eda Görpüz', 'Ebrar Ergül', 'Şeymanur Aras', '05530460814'
),
(
  'Damla Öğrenci Topluluğu', 'Sosyal Sorumluluk', 8,
  'Kalbimizin ulaşmadığı tek bir yer, tek bir canlı kalmasın diye çabalamakta; sevgi tohumları ekip güzel çiçeklerin filizleneceğine inanmakta ve sizlerle birlikte küçük tebessümlerle büyük umutlar bırakmayı hedeflemekte ve siz gönüllülerimizle birlikte gönüllülüğü yaşatma yolunda adım atmak istemekteyiz.',
  'Aygül Aladı', 'Sıla Paraltı', 'Çiğdem Bahadu', 'Ebrar Yazıcı', 'Hatice Altıntaş', '5454770985'
)
ON CONFLICT DO NOTHING;

-- ── 9. chairman_id bağlantısı (hesaplar zaten oluşturuldu) ───
-- Accounts SQL'i seed'den önce çalıştığı için bağlantı kurulmamıştı.
UPDATE public.communities c
SET chairman_id = p.id
FROM public.profiles p
WHERE p.name = 'Ahmet Safa Zengin'
  AND c.name = 'Girişimci Mühendisler Topluluğu'
  AND c.chairman_id IS NULL;

UPDATE public.communities c
SET chairman_id = p.id
FROM public.profiles p
WHERE p.name = 'İbrahim Gece'
  AND c.name = 'Tarih Öğrenci Topluluğu'
  AND c.chairman_id IS NULL;

UPDATE public.communities c
SET chairman_id = p.id
FROM public.profiles p
WHERE p.name = 'Melik Mirza Çelik'
  AND c.name = 'Bilişim Sistemleri Mühendisliği Topluluğu'
  AND c.chairman_id IS NULL;

UPDATE public.communities c
SET chairman_id = p.id
FROM public.profiles p
WHERE p.name = 'Aygül Aladı'
  AND c.name = 'Damla Öğrenci Topluluğu'
  AND c.chairman_id IS NULL;

-- ── TAMAMLANDI ────────────────────────────────────────────────
-- Çalıştırıldıktan sonra:
-- ✓ 4 topluluk web sitesinde görünür
-- ✓ Başkanlar kendi topluluklarını yönetebilir
-- ✓ Admin başvuru paneli çalışır
-- ✓ Etkinlik/gönderi silme yetkisi aktif
-- ============================================================
