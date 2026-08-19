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
    abbreviation: "GMT",
    category: "Girişimcilik",
    member_count: 10,
    // ŞABLON: Misyon — "Ne yapıyoruz, neden varız, kime değer katıyoruz?"
    mission: "Mühendislik disiplini ve girişimci zihniyeti birleştirerek, öğrencilerin hayali ürünü prototype'a, prototype'ını da pazara taşıyabilmesi için gerekli ekosistemi (mentorluk, ağ, finansman, beceri) kurarız.",
    // ŞABLON: Vizyon — "5 yıl sonra nerede olacağız?"
    vision: "SUBÜ & SAÜ'den çıkarak Türkiye'nin girişim ekosisteminde 'arayan değil, aranan' mühendis-girişimciler yetiştirmek ve en az 5 scalable startup'a imza atmak.",
    // ŞABLON: Değerler — 3-5 maddede kültür
    values: [
      "Yaparak öğrenmek", "Paylaşıp büyümek", "Erken hata yapıp hızlı düzeltmek",
      "Müşteri odaklı düşünmek", "Şeffaf ve dürüst olmak"
    ],
    // ŞABLON: Yönetim ekibi — her rol için: isim + 1 cümlelik bio + uzmanlık etiketleri
    team: [
      { role: "Başkan", name: "Ahmet Safa Zengin", bio: "Yapay zeka odaklı SaaS girişimi kurucusu, 2 hackathon ödülü. Ürün stratejisi ve büyüme odaklı.", tags: ["AI", "SaaS", "Product"] },
      { role: "Başkan Yardımcısı", name: "Elif İkier", bio: "Finans ve iş geliştirme odaklı, yatırımcı ilişkileri ve pitch deck uzmanı. 3 startup'ta advisory.", tags: ["Fundraising", "BizDev", "Pitch"] },
      { role: "Sosyal Medya Sorumlusu", name: "Görkem Mutlu", bio: "İçerik stratejisi ve topluluk büyümesi uzmanı. LinkedIn'de 5K+ takipçi yönetimi.", tags: ["Content", "Growth", "LinkedIn"] },
      { role: "Haber & Bilgilendirme", name: "Yavuz Selim Eviş", bio: "Etkinlik organizasyonu ve üye iletişimi. Hackathon & workshop operasyon deneyimi.", tags: ["Events", "Ops", "Community"] },
      { role: "İletişim Sorumlusu", name: "İclal Tezcan", bio: "Kurumsal iletişim ve sponsorluk pazarlığı. Sektör ağını kampüse taşıma odaklı.", tags: ["PR", "Partnerships", "Networking"] }
    ],
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
    abbreviation: "TOT",
    category: "Kültür & Sanat",
    member_count: 9,
    mission: "Şehrin ve üniversitenin hafızasını canlı tutmak; tarihî mekanları, olayları ve kültürel mirası akademik olmayan, hissiyatlı ve erişilebilir dille yeni nesillere aktarmak.",
    vision: "Sakarya'nın 'tarih markası' olma yolunda gençlik tarafından sürdürülen en aktif kültür platformu olmak; yıllık 10+ şehir tarihi yürüyüşü ve 5+ ortak proje imzalamak.",
    values: [
      "Hakikat ve belgeye saygı", "Hikaye anlatma gücü", "Toplumsal belleği paylaşmak",
      "Yerel kimliği koruyup evrenselleştirmek"
    ],
    team: [
      { role: "Başkan", name: "İbrahim Gece", bio: "Tarih bölümü son sınıf, arkeoloji kazı deneyimli. Şehir tarihi yürüyüşü rehberliği ve oral history projeleri.", tags: ["Arkeoloji", "Rehberlik", "Oral History"] },
      { role: "Başkan Yardımcısı", name: "Bayram Dağdaş", bio: "Kültürel miras koruma ve müze işleri ilgilisi. Belge arşivleme ve dijitalleştirme projeleri.", tags: ["Arşiv", "Dijitalleştirme", "Miras"] },
      { role: "Sosyal Medya Sorumlusu", name: "Zeynep Yılmaz", bio: "Tarih hikayelerini Instagram Reels/karuşel formatında anlatan içerik üreticisi. Görsel arşiv araştırmacısı.", tags: ["Content", "Visual Archive", "Storytelling"] },
      { role: "Haber & Bilgilendirme", name: "Sıla Gündüzer", bio: "Etkinlik takvimi ve üye duyuru yönetimi. Konferans & panel organizasyon deneyimi.", tags: ["Events", "Comms", "Coordination"] },
      { role: "İletişim Sorumlusu", name: "Yiğit Efe Alkan", bio: "Belediye, müze ve sivil toplum kuruluşlarıyla iş birliği protokolleri. Harici ilişkiler.", tags: ["Partnerships", "Protocol", "NGO"] }
    ],
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
    abbreviation: "BSMT",
    category: "Teknoloji",
    member_count: 17,
    mission: "Bilgisayar/BSM öğrencilerini 'sadece ders geçen' değil, 'gerçek dünya kod yazan' geliştiricilere dönüştüren pratik atölyeler, mentorluk ve proje tabanlı öğrenme ortamı sağlamak.",
    vision: "Bölüm mezunlarının %80'inin staj/işe başlamadan önce en az 1 production-ready projeye imza atmış, GitHub profili güçlü, takım çalışması deneyimli geliştirici olarak mezun olması.",
    values: [
      "Clean code > hızlı kod", "Açık kaynak katkısı", "Mentor-mentee zinciri",
      "Teknoloji agnostik yaklaşım", "Ürün odaklı düşünce"
    ],
    team: [
      { role: "Başkan", name: "Melik Mirza Çelik", bio: "Full-stack developer (React/Node/PostgreSQL), 2 production proje sahibi. Açık kaynak katkıcısı. Sistem mimarisi ve ölçeklenebilirlik odaklı.", tags: ["Full-stack", "Architecture", "Open Source"] },
      { role: "Başkan Yardımcısı", name: "Emirhan Hasan Aydın", bio: "Mobil geliştirme (Flutter/React Native) ve CI/CD pipeline uzmanı. Hackathon mentorluğu ve workshop eğitmenliği.", tags: ["Mobile", "Flutter", "DevOps", "Mentoring"] },
      { role: "Sosyal Medya Sorumlusu", name: "Eda Görpüz", bio: "Tech content creator — kodlama yolculuğu, hata paylaşımları, kaynak önerileri. Öğrenci perspektifinden teknik yazarlık.", tags: ["Tech Writing", "Content", "DX"] },
      { role: "Haber & Bilgilendirme", name: "Ebrar Ergül", bio: "Workshop/bootcamp operasyonları, eğitmen koordinasyonu, katılımcı deneyimi. Sprint planlama ve takip.", tags: ["Education", "Ops", "Agile"] },
      { role: "İletişim Sorumlusu", name: "Şeymanur Aras", bio: "Şirket iş birlikleri (staj, mentor, sponsor), kariyer günü organizasyonu. Alumni ağı yönetimi.", tags: ["Career", "Partnerships", "Alumni"] }
    ],
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
    abbreviation: "DOT",
    category: "Sosyal Sorumluluk",
    member_count: 8,
    mission: "Köy okulları, yoksul aileler, hayvan koruma ve çevre alanında somut yardım projeleri yürüterek; gönüllülüğü 'ödev' değil 'yaşam tarzı' haline getiren, empati odaklı gençlik yaratmak.",
    vision: "Yıllık 1000+ kitap, 500+ sıcak yemek, 50+ hayvan sterilizasyonu ve 10+ köy okuluna ulaşan; gönüllü sayısı 50'yi bulan, sürdürülebilir proje döngüsü kuran kampüsün kalbi olmak.",
    values: [
      "Küçük dokunuş, büyük etki", "Şeffaf yardım akışı", "Gönüllü güvenliği ve büyümesi",
      "İhtiyaç odaklı, gösteri değil"
    ],
    team: [
      { role: "Başkan", name: "Aygül Aladı", bio: "Sosyal sorumluluk projeleri deneyimli (Kızılçay, TEGV). Proje yazımı, bütçe yönetimi ve gönüllü koordinasyonu.", tags: ["Proje Yönetimi", "Fundraising", "Volunteer Coord."] },
      { role: "Başkan Yardımcısı", name: "Sıla Paraltı", bio: "Lojistik ve alan operasyonları — dağıtım rotaları, envanter, ekip yönetimi. Krizi yönetme deneyimi.", tags: ["Operations", "Logistics", "Field Ops"] },
      { role: "Sosyal Medya Sorumlusu", name: "Çiğdem Bahadu", bio: "Etki hikayelerini (before/after, röportaj) anlatan belgeci yaklaşım. Şeffaf raporlama ve hikaye anlatımı.", tags: ["Impact Storytelling", "Transparency", "Video"] },
      { role: "Haber & Bilgilendirme", name: "Ebrar Yazıcı", bio: "Gönüllü onboarding, eğitim programları, motivasyon sürdürme. İç iletişim ve etkinlik hatırlatmaları.", tags: ["Onboarding", "Training", "Retention"] },
      { role: "İletişim Sorumlusu", name: "Hatice Altıntaş", bio: "Kurum bağışçıları, belediyeler, STK'larla protokol. Resmi yazışma ve izin süreçleri.", tags: ["Institutional Relations", "Grants", "Compliance"] }
    ],
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
