-- ============================================================
-- NevGenç — Örnek Topluluklar Seed Verisi
-- Supabase SQL Editor'da çalıştırın.
-- ============================================================

-- Tüm eksik sütunları ekle (yoksa)
ALTER TABLE public.communities
  ADD COLUMN IF NOT EXISTS contact_info        TEXT,
  ADD COLUMN IF NOT EXISTS vice_chairman_name  TEXT,
  ADD COLUMN IF NOT EXISTS secretary_name      TEXT,
  ADD COLUMN IF NOT EXISTS social_instagram    TEXT,
  ADD COLUMN IF NOT EXISTS social_twitter      TEXT,
  ADD COLUMN IF NOT EXISTS social_linkedin     TEXT,
  ADD COLUMN IF NOT EXISTS member3_name        TEXT,
  ADD COLUMN IF NOT EXISTS member4_name        TEXT;

-- 4 örnek topluluğu ekle
INSERT INTO public.communities
  (name, category, member_count, description,
   chairman_name, vice_chairman_name, secretary_name, member3_name, member4_name,
   contact_info)
VALUES

-- 1. Girişimci Mühendisler Topluluğu
(
  'Girişimci Mühendisler Topluluğu',
  'Girişimcilik',
  10,
  'Girişimci ve mühendislik bakış açısıyla insana değer veren özgün ve yenilikçi faaliyetler gerçekleştirerek üniversite öğrencilerini daha donanımlı ve daha yetkin birer bireyler olarak mezun olmalarını sağlamak ve bu sayede de sektörde arayan değil aranan elemanlar olmalarını sağlamak...',
  'Ahmet Safa Zengin',
  'Elif İkier',
  'Görkem Mutlu',
  'Yavuz Selim Eviş',
  'İclal Tezcan',
  '05314584361'
),

-- 2. Tarih Öğrenci Topluluğu
(
  'Tarih Öğrenci Topluluğu',
  'Kültür & Sanat',
  9,
  'Her etkinlikte, her yolculukta, her konferansta ve her tartışmada aslında kendimizi de inşa ediyoruz çünkü biz sıradan bir öğrenci topluluğu değil; şehrin ve üniversitenin hafızasını taşıyan, kültürünü yaşatan ve geleceğe aktaran bir ruhuz. Ve tarih, bizim birlikte yazdığımız bugündür.',
  'İbrahim Gece',
  'Bayram Dağdaş',
  'Zeynep Yılmaz',
  'Sıla Gündüzer',
  'Yiğit Efe Alkan',
  '0545 528 2245'
),

-- 3. Bilişim Sistemleri Mühendisliği Topluluğu
(
  'Bilişim Sistemleri Mühendisliği Topluluğu',
  'Teknoloji',
  17,
  'Üniversite bünyesindeki nitelikli öğrencileri bulmak ve bir araya getirerek teknolojiyi birlikte keşfetmek.',
  'Melik Mirza Çelik',
  'Emirhan Hasan Aydın',
  'Eda Görpüz',
  'Ebrar Ergül',
  'Şeymanur Aras',
  '05530460814'
),

-- 4. Damla Öğrenci Topluluğu
(
  'Damla Öğrenci Topluluğu',
  'Sosyal Sorumluluk',
  8,
  'Kalbimizin ulaşmadığı tek bir yer, tek bir canlı kalmasın diye çabalamakta; sevgi tohumları ekip güzel çiçeklerin filizleneceğine inanmakta ve sizlerle birlikte küçük tebessümlerle büyük umutlar bırakmayı hedeflemekte ve siz gönüllülerimizle birlikte gönüllülüğü yaşatma yolunda adım atmak istemekteyiz. Çünkü biliyoruz ki, tıpkı damlanın düştüğü yerde iz bırakması gibi, biz de dokunduğumuz her kalpte kalıcı ve anlamlı bir iz bırakabileceğimize inanmaktayız.',
  'Aygül Aladı',
  'Sıla Paraltı',
  'Çiğdem Bahadu',
  'Ebrar Yazıcı',
  'Hatice Altıntaş',
  '5454770985'
);

-- ============================================================
-- Sütun → Rol eşleşmesi:
--   chairman_name      → Başkan
--   vice_chairman_name → Başkan Yardımcısı (1. yönetim üyesi)
--   secretary_name     → Sosyal Medya Sorumlusu (2. yönetim üyesi)
--   member3_name       → Haber/Bilgilendirme Sorumlusu (3. yönetim üyesi)
--   member4_name       → İletişim Sorumlusu (4. yönetim üyesi)
-- ============================================================
