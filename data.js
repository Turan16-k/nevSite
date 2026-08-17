// ═══════════════════════════════════════════════════════════════
// NevGenç — STATİK VERİ DOSYASI
// ═══════════════════════════════════════════════════════════════
// Tüm topluluk, etkinlik ve paylaşım verileri burada. Backend yok.
// Yeni topluluk eklemek / bilgi güncellemek → bu dosyayı düzenle
// ve siteyi tekrar yayınla (push). Hepsi bu kadar. 👍
//
// ── YENİ TOPLULUK NASIL EKLENİR? ──────────────────────────────
// COMMUNITIES dizisinin sonuna, virgülle ayrılmış yeni bir blok ekle:
//
//   {
//     id: 5,                            // sıradaki numara (1'den devam)
//     name: "Topluluk Adı",
//     category: "Kategori",             // Teknoloji, Kültür & Sanat, vb.
//     member_count: 0,                  // üye sayısı
//     description: "Kısa açıklama…",
//     chairman_name: "Başkan Adı",
//     vice_chairman_name: "Bşk. Yrd.",
//     secretary_name: "Sosyal Medya Sorumlusu",
//     member3_name: "Haber Sorumlusu",
//     member4_name: "İletişim Sorumlusu",
//     contact_info: "0555 000 00 00",
//     social_instagram: "@kullanici",   // yoksa null
//     social_twitter: null,
//     social_linkedin: null,
//     logo_path: "img/topluluklar/logo.png",  // yoksa null (harf gösterir)
//     score: 0
//   }
//
// Etkinlik eklemek → EVENTS dizisine: community_id = topluluğun id'si,
// event_date = "YYYY-AA-GGSS:DD" biçiminde ISO tarih.
// Gönderi eklemek → POSTS dizisine: created_at = ISO tarih.
// ═══════════════════════════════════════════════════════════════

// ── TOPLULUKLAR ───────────────────────────────────────────────
const COMMUNITIES = [
  {
    id: 1,
    name: "Girişimci Mühendisler Topluluğu",
    category: "Girişimcilik",
    member_count: 10,
    description: "Girişimci ve mühendislik bakış açısıyla insana değer veren özgün ve yenilikçi faaliyetler gerçekleştirerek üniversite öğrencilerini daha donanımlı ve daha yetkin birer bireyler olarak mezun olmalarını sağlamak ve bu sayede de sektörde arayan değil aranan elemanlar olmalarını sağlamak...",
    chairman_name: "Ahmet Safa Zengin",
    vice_chairman_name: "Elif İkier",
    secretary_name: "Görkem Mutlu",
    member3_name: "Yavuz Selim Eviş",
    member4_name: "İclal Tezcan",
    contact_info: "05314584361",
    social_instagram: "@subugirisimcimuhendisler",
    social_twitter: null,
    social_linkedin: null,
    logo_path: null,
    score: 0
  },
  {
    id: 2,
    name: "Tarih Öğrenci Topluluğu",
    category: "Kültür & Sanat",
    member_count: 9,
    description: "Her etkinlikte, her yolculukta, her konferansta ve her tartışmada aslında kendimizi de inşa ediyoruz çünkü biz sıradan bir öğrenci topluluğu değil; şehrin ve üniversitenin hafızasını taşıyan, kültürünü yaşatan ve geleceğe aktaran bir ruhuz. Ve tarih, bizim birlikte yazdığımız bugündür.",
    chairman_name: "İbrahim Gece",
    vice_chairman_name: "Bayram Dağdaş",
    secretary_name: "Zeynep Yılmaz",
    member3_name: "Sıla Gündüzer",
    member4_name: "Yiğit Efe Alkan",
    contact_info: "0545 528 2245",
    social_instagram: null,
    social_twitter: null,
    social_linkedin: null,
    logo_path: null,
    score: 0
  },
  {
    id: 3,
    name: "Bilişim Sistemleri Mühendisliği Topluluğu",
    category: "Teknoloji",
    member_count: 17,
    description: "Üniversite bünyesindeki nitelikli öğrencileri bulmak ve bir araya getirerek teknolojiyi birlikte keşfetmek.",
    chairman_name: "Melik Mirza Çelik",
    vice_chairman_name: "Emirhan Hasan Aydın",
    secretary_name: "Eda Görpüz",
    member3_name: "Ebrar Ergül",
    member4_name: "Şeymanur Aras",
    contact_info: "05530460814",
    social_instagram: null,
    social_twitter: null,
    social_linkedin: null,
    logo_path: null,
    score: 0
  },
  {
    id: 4,
    name: "Damla Öğrenci Topluluğu",
    category: "Sosyal Sorumluluk",
    member_count: 8,
    description: "Kalbimizin ulaşmadığı tek bir yer, tek bir canlı kalmasın diye çabalamakta; sevgi tohumları ekip güzel çiçeklerin filizleneceğine inanmakta ve sizlerle birlikte küçük tebessümlerle büyük umutlar bırakmayı hedeflemekte ve siz gönüllülerimizle birlikte gönüllülüğü yaşatma yolunda adım atmak istemekteyiz. Çünkü biliyoruz ki, tıpkı damlanın düştüğü yerde iz bırakması gibi, biz de dokunduğumuz her kalpte kalıcı ve anlamlı bir iz bırakabileceğimize inanmaktayız.",
    chairman_name: "Aygül Aladı",
    vice_chairman_name: "Sıla Paraltı",
    secretary_name: "Çiğdem Bahadu",
    member3_name: "Ebrar Yazıcı",
    member4_name: "Hatice Altıntaş",
    contact_info: "5454770985",
    social_instagram: null,
    social_twitter: null,
    social_linkedin: null,
    logo_path: null,
    score: 0
  }
];

// ── ETKİNLİKLER ───────────────────────────────────────────────
// event_date: "YYYY-AA-GGTT:DD" biçiminde ISO tarih.
const EVENTS = [
  {
    id: 1,
    community_id: 3,
    title: "ProSitch Hackaton",
    description: "Staj ödüllü etkinlik ! Kaçırmayın \n(konteyjan sınırlıdır)",
    event_date: "2026-05-27T15:00:00",
    location: "Sakarya Teknokent",
    image_url: null
  },
  {
    id: 2,
    community_id: 1,
    title: "Fikir Atölyesi: MVP Nasıl Yapılır?",
    description: "Kendi iş fikrinizi 1 günde prototipe dönüştüreceğimiz yoğun bir atölye. Mentorluk, ekip oluşturma ve sunum aşamaları içerir.",
    event_date: "2026-08-13T10:00:00",
    location: "A Blok – Konferans Salonu",
    image_url: null
  },
  {
    id: 3,
    community_id: 1,
    title: "Başarılı Girişimcilerle Kahvaltı",
    description: "Sektörün önde gelen isimlerinden birebir deneyim ve mentorluk fırsatı.",
    event_date: "2026-08-21T09:00:00",
    location: "Öğrenci Kafeteryası",
    image_url: null
  },
  {
    id: 4,
    community_id: 2,
    title: "Şehir Tarihi Yürüyüşü",
    description: "Rehber eşliğinde şehrin tarihi dokusunu keşfedeceğimiz ücretsiz gezi. Kayıt zorunludur.",
    event_date: "2026-08-15T10:00:00",
    location: "Ana Kapı – Buluşma Noktası",
    image_url: null
  },
  {
    id: 5,
    community_id: 2,
    title: "Belgesel Gösterimi: Osmanlı Mimarisi",
    description: "İzleme ve tartışma etkinliği. Giriş serbesttir.",
    event_date: "2026-08-18T14:00:00",
    location: "B Blok – 105 Amfi",
    image_url: null
  },
  {
    id: 6,
    community_id: 3,
    title: "Flutter ile Mobil Uygulama Workshop",
    description: "Sıfırdan çalışan bir mobil uygulama yapacağız. Dizüstü bilgisayarınızı getirmeyi unutmayın.",
    event_date: "2026-08-12T13:00:00",
    location: "Bilgisayar Lab – C201",
    image_url: null
  },
  {
    id: 7,
    community_id: 3,
    title: "Siber Güvenlik Semineri",
    description: "Etik hackleme ve siber güvenlik kariyer yolları üzerine uzman konuşmacı sunumu.",
    event_date: "2026-08-24T14:00:00",
    location: "D Blok – Amfi 1",
    image_url: null
  },
  {
    id: 8,
    community_id: 4,
    title: "Kitap Bağışı Kampanyası Başlıyor",
    description: "Köy okullarına kitap ulaştırma kampanyamız başlıyor. Bağış noktaları ve gönüllü başvurusu için etkinliğe katılın.",
    event_date: "2026-08-11T10:00:00",
    location: "Öğrenci Merkezi – Giriş Holü",
    image_url: null
  },
  {
    id: 9,
    community_id: 4,
    title: "Gönüllülük Buluşması",
    description: "Yeni üyelerimizle tanışıyor, bu dönemin sosyal sorumluluk projelerini paylaşıyoruz.",
    event_date: "2026-08-17T15:00:00",
    location: "Öğrenci Merkezi – Toplantı Odası",
    image_url: null
  }
];

// ── GÖNDERİLER / PAYLAŞIMLAR ─────────────────────────────────
// created_at: ISO tarih. image_url/event_image: görsel varsa URL.
const POSTS = [
  {
    id: 1,
    community_id: 1,
    content: "🚀 MVP Atölyemize başvurular açıldı! 4 gün sonra gerçekleşecek etkinliğimizde kendi iş fikrinizi prototipe dönüştürme şansı yakalayabilirsiniz. Kontenjan sınırlı, hemen topluluğumuza katılın!",
    image_url: null,
    event_image: null,
    created_at: "2026-08-05T12:00:00",
    support_count: 0
  },
  {
    id: 2,
    community_id: 3,
    content: "💻 Flutter Workshop'umuz 3 gün sonra! Uygulama geliştirmeyi öğrenmek istiyorsanız bu fırsatı kaçırmayın. Herhangi bir ön bilgi gerekmez, sadece merakınızı getirin.",
    image_url: null,
    event_image: null,
    created_at: "2026-08-06T12:00:00",
    support_count: 0
  },
  {
    id: 3,
    community_id: 4,
    content: "📚 Kitap Bağışı Kampanyamız yarın başlıyor! Okunmuş kitaplarınızı köy çocuklarına ulaştırmak için bize verebilirsiniz. Her kitap bir umut, her umut bir gelecek. ❤️",
    image_url: null,
    event_image: null,
    created_at: "2026-08-07T12:00:00",
    support_count: 0
  },
  {
    id: 4,
    community_id: 2,
    content: "🏛️ Şehir Tarihi Yürüyüşümüz için kayıtlar başladı! Rehberimiz eşliğinde şehrin yüzyıllık hikayesine ortak olacaksınız. Kayıt için Instagram sayfamızı ziyaret edin.",
    image_url: null,
    event_image: null,
    created_at: "2026-08-08T12:00:00",
    support_count: 0
  }
];
