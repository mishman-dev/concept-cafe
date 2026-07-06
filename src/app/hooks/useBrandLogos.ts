import { useEffect, useMemo, useState } from "react";
import { api, sortBySortOrder, type BrandLogo } from "../lib/api";

export function useBrandLogos(fallbackLogos: BrandLogo[]) {
  const [brandLogos, setBrandLogos] = useState<BrandLogo[]>(fallbackLogos);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    api
      .getBrandLogos()
      .then((data) => {
        const usable = data.filter((brand) => brand.isPublished !== false && brand.logoUrl);
        if (active) setBrandLogos(usable.length ? sortBySortOrder(usable) : fallbackLogos);
      })
      .catch((err) => {
        if (active) setError(err instanceof Error ? err.message : "Failed to load brand logos");
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  return useMemo(() => ({ brandLogos, loading, error }), [brandLogos, loading, error]);
}
