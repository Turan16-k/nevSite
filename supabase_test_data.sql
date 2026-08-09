-- ============================================================
-- NevGenç — Test Verisi (Etkinlikler + Gönderiler)
-- Supabase SQL Editor'da çalıştırın.
-- Önce supabase_seed_sample_communities.sql çalıştırılmış olmalı.
-- ============================================================

-- ── Test Etkinlikleri ────────────────────────────────────────

INSERT INTO public.events (community_id, title, description, event_date, location)
VALUES

-- Girişimci Mühendisler
(
  (SELECT id FROM public.communities WHERE name = 'Girişimci Mühendisler Topluluğu' LIMIT 1),
  'Fikir Atölyesi: MVP Nasıl Yapılır?',
  'Kendi iş fikrinizi 1 günde prototipe dönüştüreceğimiz yoğun bir atölye. Mentorluk, ekip oluşturma ve sunum aşamaları içerir.',
  NOW() + INTERVAL '4 days',
  'A Blok – Konferans Salonu'
),
(
  (SELECT id FROM public.communities WHERE name = 'Girişimci Mühendisler Topluluğu' LIMIT 1),
  'Başarılı Girişimcilerle Kahvaltı',
  'Sektörün önde gelen isimlerinden birebir deneyim ve mentorluk fırsatı.',
  NOW() + INTERVAL '12 days',
  'Öğrenci Kafeteryası'
),

-- Tarih Öğrenci Topluluğu
(
  (SELECT id FROM public.communities WHERE name = 'Tarih Öğrenci Topluluğu' LIMIT 1),
  'Şehir Tarihi Yürüyüşü',
  'Rehber eşliğinde şehrin tarihi dokusunu keşfedeceğimiz ücretsiz gezi. Kayıt zorunludur.',
  NOW() + INTERVAL '6 days',
  'Ana Kapı – Buluşma Noktası'
),
(
  (SELECT id FROM public.communities WHERE name = 'Tarih Öğrenci Topluluğu' LIMIT 1),
  'Belgesel Gösterimi: Osmanlı Mimarisi',
  'İzleme ve tartışma etkinliği. Giriş serbesttir.',
  NOW() + INTERVAL '9 days',
  'B Blok – 105 Amfi'
),

-- Bilişim Sistemleri
(
  (SELECT id FROM public.communities WHERE name = 'Bilişim Sistemleri Mühendisliği Topluluğu' LIMIT 1),
  'Flutter ile Mobil Uygulama Workshop',
  'Sıfırdan çalışan bir mobil uygulama yapacağız. Dizüstü bilgisayarınızı getirmeyi unutmayın.',
  NOW() + INTERVAL '3 days',
  'Bilgisayar Lab – C201'
),
(
  (SELECT id FROM public.communities WHERE name = 'Bilişim Sistemleri Mühendisliği Topluluğu' LIMIT 1),
  'Siber Güvenlik Semineri',
  'Etik hackleme ve siber güvenlik kariyer yolları üzerine uzman konuşmacı sunumu.',
  NOW() + INTERVAL '15 days',
  'D Blok – Amfi 1'
),

-- Damla Sosyal Sorumluluk
(
  (SELECT id FROM public.communities WHERE name = 'Damla Öğrenci Topluluğu' LIMIT 1),
  'Kitap Bağışı Kampanyası Başlıyor',
  'Köy okullarına kitap ulaştırma kampanyamız başlıyor. Bağış noktaları ve gönüllü başvurusu için etkinliğe katılın.',
  NOW() + INTERVAL '2 days',
  'Öğrenci Merkezi – Giriş Holü'
),
(
  (SELECT id FROM public.communities WHERE name = 'Damla Öğrenci Topluluğu' LIMIT 1),
  'Gönüllülük Buluşması',
  'Yeni üyelerimizle tanışıyor, bu dönemin sosyal sorumluluk projelerini paylaşıyoruz.',
  NOW() + INTERVAL '8 days',
  'Öğrenci Merkezi – Toplantı Odası'
);

-- ── Test Gönderileri ─────────────────────────────────────────

INSERT INTO public.posts (community_id, community_name, content)
VALUES

(
  (SELECT id FROM public.communities WHERE name = 'Girişimci Mühendisler Topluluğu' LIMIT 1),
  'Girişimci Mühendisler Topluluğu',
  '🚀 MVP Atölyemize başvurular açıldı! 4 gün sonra gerçekleşecek etkinliğimizde kendi iş fikrinizi prototipe dönüştürme şansı yakalayabilirsiniz. Kontenjan sınırlı, hemen topluluğumuza katılın!'
),
(
  (SELECT id FROM public.communities WHERE name = 'Bilişim Sistemleri Mühendisliği Topluluğu' LIMIT 1),
  'Bilişim Sistemleri Mühendisliği Topluluğu',
  '💻 Flutter Workshop''umuz 3 gün sonra! Uygulama geliştirmeyi öğrenmek istiyorsanız bu fırsatı kaçırmayın. Herhangi bir ön bilgi gerekmez, sadece merakınızı getirin.'
),
(
  (SELECT id FROM public.communities WHERE name = 'Damla Öğrenci Topluluğu' LIMIT 1),
  'Damla Öğrenci Topluluğu',
  '📚 Kitap Bağışı Kampanyamız yarın başlıyor! Okunmuş kitaplarınızı köy çocuklarına ulaştırmak için bize verebilirsiniz. Her kitap bir umut, her umut bir gelecek. ❤️'
),
(
  (SELECT id FROM public.communities WHERE name = 'Tarih Öğrenci Topluluğu' LIMIT 1),
  'Tarih Öğrenci Topluluğu',
  '🏛️ Şehir Tarihi Yürüyüşümüz için kayıtlar başladı! Rehberimiz eşliğinde şehrin yüzyıllık hikayesine ortak olacaksınız. Kayıt için Instagram sayfamızı ziyaret edin.'
);
