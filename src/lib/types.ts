export type ProjectCategory = "professional" | "side" | "music";

export type PostStatus = "published" | "draft";

export interface ProjectFrontmatter {
  title: string;
  slug: string;
  description: string;
  category: ProjectCategory;
  featured: boolean;
  company: string;
  role: string;
  publishedAt: string;
  coverImage?: string;
  link?: string;
  tags: string[];
  order?: number;
  summary?: string;
}

export interface Project extends ProjectFrontmatter {
  content: string;
  html: string;
}

export interface PostFrontmatter {
  title: string;
  slug: string;
  description: string;
  publishedAt: string;
  status: PostStatus;
  readingTime?: string;
}

export interface Post extends PostFrontmatter {
  content: string;
}

export interface SiteContent {
  heroTitle: string;
  heroLede: string;
  statusLine: string;
  nowTitle: string;
  nowBody: string;
  nowUpdated: string;
}

export interface ExperienceItem {
  when: string;
  title: string;
  role: string;
  description: string;
}

export interface AwardItem {
  title: string;
  detail?: string;
}

export interface AboutContent {
  intro: string;
  paragraphs: string[];
  experience: ExperienceItem[];
  awards?: AwardItem[];
  education?: string;
  stackIntro: string;
  stack: string[];
}
