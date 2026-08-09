-- ============================================================
-- Adım 1: SQL ile oluşturulmuş hatalı kullanıcıları sil
-- communities.chairman_id → SET NULL olur (ON DELETE SET NULL)
-- profiles → CASCADE silinir
-- ============================================================

DELETE FROM auth.users
WHERE email IN (
  'admin@nevgenc.com',
  '23010404022@subu.edu.tr',
  'ibrahim.gece@ogr.sakarya.edu.tr',
  'melik.celik@ogr.sakarya.edu.tr',
  'aygulaladi82@gmail.com'
);

-- Kontrol: 0 satır görünmeli
SELECT email FROM auth.users
WHERE email IN (
  'admin@nevgenc.com',
  '23010404022@subu.edu.tr',
  'ibrahim.gece@ogr.sakarya.edu.tr',
  'melik.celik@ogr.sakarya.edu.tr',
  'aygulaladi82@gmail.com'
);
