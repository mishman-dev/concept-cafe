import { useEffect, useMemo, useState } from "react";
import { api, sortBySortOrder, type HeroSlide } from "../lib/api";

export function useHeroCarousel(fallbackSlides: HeroSlide[]) {
  const [slides, setSlides] = useState<HeroSlide[]>(fallbackSlides);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    api
      .getHeroCarousel()
      .then((data) => {
        const published = data.filter((slide) => slide.isPublished !== false && slide.imageUrl);
        if (active) setSlides(published.length ? sortBySortOrder(published) : fallbackSlides);
      })
      .catch((err) => {
        if (active) setError(err instanceof Error ? err.message : "Failed to load hero carousel");
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  return useMemo(() => ({ slides, loading, error }), [slides, loading, error]);
}
