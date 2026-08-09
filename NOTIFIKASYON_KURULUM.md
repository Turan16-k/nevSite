# NevGenç — E-posta Bildirim Sistemi Kurulumu

Bildirim sistemi Supabase Edge Function + Resend kullanır.
Tüm e-postalar **nevgenc54@gmail.com** adresine gönderilir.

---

## Adım 1 — Resend API Key

1. [resend.com](https://resend.com) adresine git ve ücretsiz hesap aç
2. Dashboard → **API Keys** → **Create API Key**
3. Key'i kopyala (bir kez gösterilir)

> Ücretsiz plan: ayda 3.000 e-posta, günde 100 e-posta

---

## Adım 2 — Edge Function'ı deploy et

### Yöntem A — Supabase Dashboard (kolay)

1. [supabase.com](https://supabase.com) → Projen → **Edge Functions**
2. **New Function** → İsim: `send-notification`
3. `supabase/functions/send-notification/index.ts` dosyasının içeriğini yapıştır
4. **Deploy** butonuna bas

### Yöntem B — Supabase CLI

```bash
# CLI kurulumu
npm install -g supabase

# Login
supabase login

# Deploy
supabase functions deploy send-notification --project-ref wbitzhuvvanhqayiiaux
```

---

## Adım 3 — Resend API Key'i Secret olarak ekle

Supabase Dashboard → **Edge Functions** → **send-notification** → **Secrets** sekmesi:

| Secret Adı       | Değer                     |
|-----------------|---------------------------|
| `RESEND_API_KEY` | Adım 1'de aldığın API key |

Veya CLI ile:
```bash
supabase secrets set RESEND_API_KEY=re_xxxxxxxxxx --project-ref wbitzhuvvanhqayiiaux
```

---

## Bildirim gönderildiği anlar

| Olay | Tetikleyen sayfa |
|------|-----------------|
| Yeni topluluk başvurusu | index.html |
| Admin girişi | admin.html |
| Başkan girişi | admin.html |
| Topluluk oluşturuldu | admin.html |
| Etkinlik eklendi | admin.html |
| Gönderi yayınlandı | admin.html |
| Başvuru onaylandı | admin.html |
| Başvuru reddedildi | admin.html |

---

## Not — "From" adresi

Şu an `onboarding@resend.dev` kullanılıyor (domain doğrulaması gerekmez).
İleride kendi domain'ini bağlamak istersen:
- Resend → **Domains** → domain ekle → DNS kayıtlarını yapılandır
- `index.ts` içindeki `from` satırını güncelle:
  ```
  from: 'NevGenç <bildirim@nevgenc.app>',
  ```