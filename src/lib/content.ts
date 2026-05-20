import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { markdownToHtml } from "./markdown";
import type {
  AboutContent,
  Post,
  PostFrontmatter,
  Project,
  ProjectCategory,
  ProjectFrontmatter,
  SiteContent,
} from "./types";

const contentDir = path.join(process.cwd(), "content");

function readMdxFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"));
}

function sortByDate<T extends { publishedAt: string; order?: number }>(
  items: T[]
): T[] {
  return [...items].sort((a, b) => {
    if (a.order !== undefined && b.order !== undefined) {
      return a.order - b.order;
    }
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
  });
}

export async function getAllProjects(): Promise<Project[]> {
  const dir = path.join(contentDir, "projects");
  const files = readMdxFiles(dir);

  const projects = await Promise.all(
    files.map(async (file) => {
      const raw = fs.readFileSync(path.join(dir, file), "utf8");
      const { data, content } = matter(raw);
      const frontmatter = data as ProjectFrontmatter;
      const html = await markdownToHtml(content);

      return {
        ...frontmatter,
        content,
        html,
      };
    })
  );

  return sortByDate(projects);
}

export async function getProjectBySlug(
  slug: string
): Promise<Project | undefined> {
  const projects = await getAllProjects();
  return projects.find((project) => project.slug === slug);
}

export async function getFeaturedProjects(): Promise<Project[]> {
  const projects = await getAllProjects();
  return projects.filter((project) => project.featured);
}

export async function getProjectsByCategory(
  category: ProjectCategory
): Promise<Project[]> {
  const projects = await getAllProjects();
  return sortByDate(projects.filter((project) => project.category === category));
}

export function getProjectSlugs(): string[] {
  const dir = path.join(contentDir, "projects");
  return readMdxFiles(dir).map((file) => file.replace(/\.mdx?$/, ""));
}

export async function getAllPosts(): Promise<Post[]> {
  const dir = path.join(contentDir, "posts");
  const files = readMdxFiles(dir);

  return sortByDate(
    files.map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), "utf8");
      const { data, content } = matter(raw);
      return {
        ...(data as PostFrontmatter),
        content,
      };
    })
  );
}

export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  const posts = await getAllPosts();
  return posts.find((post) => post.slug === slug);
}

export function getPostSlugs(): string[] {
  const dir = path.join(contentDir, "posts");
  return readMdxFiles(dir).map((file) => file.replace(/\.mdx?$/, ""));
}

export function getSiteContent(): SiteContent {
  const raw = fs.readFileSync(
    path.join(contentDir, "site", "home.md"),
    "utf8"
  );
  const { data } = matter(raw);
  return data as SiteContent;
}

export function getAboutContent(): AboutContent {
  const raw = fs.readFileSync(
    path.join(contentDir, "site", "about.md"),
    "utf8"
  );
  const { data } = matter(raw);
  return data as AboutContent;
}
