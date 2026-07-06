export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ?? "http://127.0.0.1:8000/api";

export const API_ORIGIN = API_BASE_URL.replace(/\/api\/?$/, "");

export interface ProjectStat {
  icon: string;
  value: string;
  label: string;
}

export interface ProjectComparison {
  before: string;
  after: string;
}

export interface Project {
  id: string;
  category: string;
  title: string;
  description: string;
  fullDescription?: string;
  client?: string;
  location?: string;
  completionDate?: string;
  duration?: string;
  area?: string;
  teamSize?: number;
  budget?: string;
  gradient?: string;
  thumbnailUrl?: string;
  model3dUrl?: string;
  actualImages?: string[];
  comparison?: ProjectComparison[];
  stats?: ProjectStat[];
  features?: string[];
  challenges?: string[];
  solutions?: string[];
  technologies?: string[];
  images?: {
    thumbnail?: string;
    model3D?: string;
    actual?: string[];
    comparison?: ProjectComparison[];
  };
  sortOrder?: number;
  isPublished?: boolean;
}

export interface Service {
  id?: number | string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  color: string;
  sortOrder?: number;
  isPublished?: boolean;
}

export interface HeroSlide {
  id?: number | string;
  eyebrow?: string;
  title?: string;
  description?: string;
  ctaLabel?: string;
  ctaUrl?: string;
  imageUrl?: string;
  sortOrder?: number;
  isPublished?: boolean;
}

export interface TeamMember {
  id?: number | string;
  name: string;
  role: string;
  department?: string;
  description?: string;
  bio?: string;
  email?: string;
  phone?: string;
  linkedin?: string;
  imageUrl?: string;
  image?: string;
  expertise?: string[];
  sortOrder?: number;
  isPublished?: boolean;
}

export interface BrandLogo {
  id?: number | string;
  name: string;
  logoUrl?: string;
  websiteUrl?: string;
  sortOrder?: number;
  isPublished?: boolean;
}

export interface SiteContent {
  hero?: Record<string, unknown>;
  heroCarousel?: HeroSlide[];
  about?: Record<string, unknown>;
  contactInfo?: unknown[];
  projects?: Project[];
  services?: Service[];
  directors?: TeamMember[];
  team?: TeamMember[];
  brandLogos?: BrandLogo[];
}

export interface ContactPayload {
  fullName: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}

export interface QuotePayload {
  fullName: string;
  email: string;
  phone: string;
  projectType: string;
  details: string;
  attachmentUrl?: string;
}

function getHeaders(options?: RequestInit) {
  if (options?.body instanceof FormData) {
    return options.headers ?? {};
  }

  return {
    "Content-Type": "application/json",
    ...(options?.headers ?? {}),
  };
}

async function request<T>(path: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers: getHeaders(options),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || `Request failed with status ${response.status}`);
  }

  return response.json() as Promise<T>;
}

export const api = {
  getSiteContent: () => request<SiteContent>("/content"),
  getProjects: () => request<Project[]>("/projects"),
  getProject: (id: string) => request<Project>(`/projects/${id}`),
  getServices: () => request<Service[]>("/services"),
  getHeroCarousel: () => request<HeroSlide[]>("/hero-carousel"),
  getTeam: () => request<TeamMember[]>("/team"),
  getBrandLogos: () => request<BrandLogo[]>("/brand-logos"),
  submitContact: (payload: ContactPayload) =>
    request("/contact", {
      method: "POST",
      body: JSON.stringify(payload),
    }),
  uploadQuoteAttachment: async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch(`${API_BASE_URL}/quotes/upload`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error(await response.text());
    }

    return response.json() as Promise<{ url: string }>;
  },
  submitQuote: (payload: QuotePayload) =>
    request("/quotes", {
      method: "POST",
      body: JSON.stringify(payload),
    }),
};

export function toMediaUrl(url?: string) {
  if (!url) return "";
  if (url.startsWith("http")) return url;
  if (url.startsWith("/uploads")) return `${API_ORIGIN}${url}`;
  if (url.startsWith("uploads")) return `${API_ORIGIN}/${url}`;
  return url;
}

export function normalizeProject(project: Project): Project {
  const images = project.images ?? {};
  return {
    ...project,
    gradient: project.gradient || "from-blue-600 to-red-500",
    stats: project.stats ?? [],
    features: project.features ?? [],
    challenges: project.challenges ?? [],
    solutions: project.solutions ?? [],
    technologies: project.technologies ?? [],
    images: {
      thumbnail: project.thumbnailUrl ?? images.thumbnail ?? "",
      model3D: project.model3dUrl ?? images.model3D ?? "",
      actual: project.actualImages ?? images.actual ?? [],
      comparison: project.comparison ?? images.comparison ?? [],
    },
  };
}

export function sortBySortOrder<T extends { sortOrder?: number }>(items: T[]) {
  return [...items].sort((a, b) => (a.sortOrder ?? 9999) - (b.sortOrder ?? 9999));
}
