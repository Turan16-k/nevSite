# NevGenç — SUBÜ & SAÜ Kampüs Platformu

SUBÜ ve SAÜ öğrencileri için topluluk, etkinlik ve indirim platformu.

## 🚀 GitHub Pages Deploy

Repo Settings → Pages → **Deploy from branch** → `main` / `(root)` seç → Save.

Site: `https://<kullanici>.github.io/nevSite/`

> **Not:** GitHub Pages URL rewrite desteklemediği için temiz URL (`/Topluluklar/BSMT`) **çalışmaz**.
> Linkler `community.html?slug=BSMT` formatındadır.

## 🔗 URL Yapısı (GitHub Pages)

| Format | Örnek |
|--------|-------|
| ID ile | `community.html?id=3` |
| Kısaltma ile | `community.html?slug=BSMT` |

> Temiz URL (`/Topluluklar/BSMT`) için Vercel/Netlify/Cloudflare Pages kullanın.

## 📁 Proje Yapısı

```
nevSite/
├── index.html          # Ana sayfa
├── community.html      # Topluluk detay sayfası
├── style.css           # Tüm stiller
├── data.js             # Topluluk/etkinlik/gönderi verileri
├── themes.js           # Tema sistemi
├── logomuz.png         # Logo
├── favicon.png
├── gem.png
└── community.html
```

## 📝 Topluluk Ekleme

`data.js` dosyasında `COMMUNITIES` dizisine yeni nesne ekle:

```js
{
  id: 5,
  name: "Yeni Topluluk Adı",
  abbreviation: "YTA",  // URL için kısaltma: community.html?slug=YTA
  category: "Kategori",
  member_count: 0,
  description: "Açıklama...",
  chairman_name: "Başkan",
  vice_chairman_name: "Yardımcı",
  secretary_name: "Sosyal Medya",
  member3_name: "Haber",
  member4_name: "İletişim",
  contact_info: "0555 000 00 00",
  social_instagram: "@kullanici",
  social_twitter: null,
  social_linkedin: null,
  logo_path: "img/topluluklar/logo.png",
  score: 0
}
```

## 🎨 Özellikler

- ✅ Topluluk listesi (minimal liste görünümü)
- ✅ Arama & kategori filtresi
- ✅ Kısaltma bazlı URL: `community.html?slug=BSMT`
- ✅ Geometrik tema (canvas animasyonlu)
- ✅ Responsive / mobil uyumlu
- ✅ Lightbox görsel görüntüleyici
- ✅ İletişim FAB (WhatsApp + E-posta)
- ✅ Etkinlik & paylaşım takibi

## 📞 İletişim

- WhatsApp: 0553 883 26 57
- E-posta: nevgenc54@gmail.com