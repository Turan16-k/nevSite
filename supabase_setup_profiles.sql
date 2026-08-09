-- ============================================================
-- NevGenç — Profil & Chairman Bağlantısı
-- Supabase SQL Editor'da çalıştırın.
-- ============================================================

-- 1. Profilleri ekle
INSERT INTO public.profiles (id, name, role) VALUES
  ('46d6ee90-ab43-4f85-986b-088acec9cee4', 'NevGenç Admin',      'admin'),
  ('0e4948c4-034c-4bf8-af86-7b57e07451bd', 'Ahmet Safa Zengin',  'chairman'),
  ('66ee1b99-b46b-4e92-8353-e82ac2c166ec', 'İbrahim Gece',       'chairman'),
  ('f2afbcbc-6b7f-4d41-bc46-5becf7109cac', 'Melik Mirza Çelik',  'chairman'),
  ('b8a91424-af18-4a77-97c0-dda6ecfda23d', 'Aygül Aladı',        'chairman')
ON CONFLICT (id) DO NOTHING;

-- 2. chairman_id bağlantılarını kur
UPDATE public.communities SET chairman_id = '0e4948c4-034c-4bf8-af86-7b57e07451bd'
WHERE name = 'Girişimci Mühendisler Topluluğu';

UPDATE public.communities SET chairman_id = '66ee1b99-b46b-4e92-8353-e82ac2c166ec'
WHERE name = 'Tarih Öğrenci Topluluğu';

UPDATE public.communities SET chairman_id = 'f2afbcbc-6b7f-4d41-bc46-5becf7109cac'
WHERE name = 'Bilişim Sistemleri Mühendisliği Topluluğu';

UPDATE public.communities SET chairman_id = 'b8a91424-af18-4a77-97c0-dda6ecfda23d'
WHERE name = 'Damla Öğrenci Topluluğu';

-- 3. Kontrol
SELECT c.name, c.chairman_name, c.chairman_id, p.role
FROM public.communities c
LEFT JOIN public.profiles p ON p.id = c.chairman_id
ORDER BY c.id;
