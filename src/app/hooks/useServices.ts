import { useEffect, useState } from "react";
import { api, sortBySortOrder, type Service } from "../lib/api";

export function useServices(fallbackServices: Service[]) {
  const [services, setServices] = useState<Service[]>(fallbackServices);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    api
      .getServices()
      .then((data) => {
        const published = data.filter((service) => service.isPublished !== false);
        if (active) setServices(published.length ? sortBySortOrder(published) : fallbackServices);
      })
      .catch((err) => {
        if (active) setError(err instanceof Error ? err.message : "Failed to load services");
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  return { services, loading, error };
}
