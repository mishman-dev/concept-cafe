import { useEffect, useState } from "react";
import { projects as fallbackProjects } from "../data/projects";
import { api, normalizeProject, sortBySortOrder, type Project } from "../lib/api";

export function useProjects() {
  const fallback = (fallbackProjects as Project[]).map(normalizeProject);
  const [projects, setProjects] = useState<Project[]>(fallback);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    api
      .getProjects()
      .then((data) => {
        const published = data.filter((project) => project.isPublished !== false).map(normalizeProject);
        if (active) setProjects(published.length ? sortBySortOrder(published) : fallback);
      })
      .catch((err) => {
        if (active) setError(err instanceof Error ? err.message : "Failed to load projects");
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  return { projects, loading, error };
}
