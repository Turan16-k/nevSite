-- ============================================================
-- NevGenç — Mükerrer Topluluk Temizleme
-- Supabase SQL Editor'da çalıştırın.
-- Her topluluk adından sadece en eski (ilk eklenen) kaydı tutar.
-- ============================================================

-- 1. Mükerrer toplulukları sil (en küçük id'li kaydı koru)
DELETE FROM public.communities
WHERE id NOT IN (
  SELECT MIN(id)
  FROM public.communities
  GROUP BY name
);

-- 2. Tekrar oluşmasını önlemek için UNIQUE kısıt ekle
ALTER TABLE public.communities
  ADD CONSTRAINT communities_name_unique UNIQUE (name);

-- ── Sonuç kontrolü ───────────────────────────────────────────
SELECT id, name, chairman_name, chairman_id
FROM public.communities
ORDER BY id;
