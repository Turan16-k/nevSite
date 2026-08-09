-- ============================================================
-- NevGenç — auth.identities Düzeltmesi
-- Supabase SQL Editor'da çalıştırın.
-- Direkt SQL ile oluşturulan kullanıcılar için gerekli
-- identity kaydını ekler (email girişi için zorunlu).
-- ============================================================

INSERT INTO auth.identities (provider_id, id, user_id, identity_data, provider, created_at, updated_at)
SELECT
  u.email,
  u.id,
  u.id,
  jsonb_build_object('sub', u.id::text, 'email', u.email),
  'email',
  NOW(),
  NOW()
FROM auth.users u
WHERE u.email IN (
  'admin@nevgenc.com',
  '23010404022@subu.edu.tr',
  'ibrahim.gece@ogr.sakarya.edu.tr',
  'melik.celik@ogr.sakarya.edu.tr',
  'aygulaladi82@gmail.com'
)
AND NOT EXISTS (
  SELECT 1 FROM auth.identities i
  WHERE i.user_id = u.id AND i.provider = 'email'
);

-- Kontrol: 5 satır görünmeli
SELECT u.email, i.provider, i.created_at
FROM auth.identities i
JOIN auth.users u ON u.id = i.user_id
WHERE u.email IN (
  'admin@nevgenc.com',
  '23010404022@subu.edu.tr',
  'ibrahim.gece@ogr.sakarya.edu.tr',
  'melik.celik@ogr.sakarya.edu.tr',
  'aygulaladi82@gmail.com'
)
ORDER BY u.email;
