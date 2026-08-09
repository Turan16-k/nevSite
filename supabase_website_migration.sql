-- NevGenç Web Sitesi için Gerekli Güncelleme
-- Supabase SQL Editor'da çalıştırın.

-- communities tablosuna iletişim bilgisi sütunu ekle
ALTER TABLE public.communities
  ADD COLUMN IF NOT EXISTS contact_info TEXT;

-- Başkanların kendi topluluk kayıtlarını güncelleyebilmesi için RLS politikası
-- (Mevcut "communities_write" admin-only politikasına ek)
CREATE POLICY IF NOT EXISTS "communities_chairman_update"
  ON public.communities FOR UPDATE
  USING (auth.uid() = chairman_id);

-- Etkinlikler: Başkanların kendi toplulukları için etkinlik oluşturabilmesi
-- (Mevcut events_write admin-only politikasının yanına ek politika)
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
