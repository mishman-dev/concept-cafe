import { useEffect, useMemo, useState } from "react";
import { api, sortBySortOrder, type TeamMember } from "../lib/api";

export function useTeam(fallbackTeam: TeamMember[]) {
  const [team, setTeam] = useState<TeamMember[]>(fallbackTeam);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    api
      .getTeam()
      .then((data) => {
        const published = data.filter((member) => member.isPublished !== false);
        if (active) setTeam(published.length ? sortBySortOrder(published) : fallbackTeam);
      })
      .catch((err) => {
        if (active) setError(err instanceof Error ? err.message : "Failed to load team");
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  return useMemo(() => ({ team, loading, error }), [team, loading, error]);
}
