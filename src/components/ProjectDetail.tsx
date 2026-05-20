import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import type { Project } from "@/lib/types";
import { Chip } from "./Chip";
import { Prose } from "./Prose";

interface ProjectDetailProps {
  project: Project;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const year = format(new Date(project.publishedAt), "yyyy");

  return (
    <article>
      <header className="shell border-b border-line-soft pb-10 pt-12 md:pt-16">
        <nav className="mb-6 text-sm text-ink-mute">
          <Link href="/projects" className="hover:text-ink">
            ← Projects
          </Link>
        </nav>

        <p className="eyebrow mb-2">{project.company}</p>
        <h1 className="display text-4xl text-ink md:text-5xl">{project.title}</h1>
        <p className="mt-3 text-ink-mute">
          {year} · {project.role}
        </p>
        <p className="mt-4 max-w-2xl text-lg text-ink-soft">{project.description}</p>

        {project.tags.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Chip key={tag}>{tag}</Chip>
            ))}
          </div>
        )}
      </header>

      {project.coverImage && (
        <div className="shell py-10">
          <div className="relative aspect-[16/9] overflow-hidden rounded-[var(--radius)] border border-line">
            <Image
              src={project.coverImage}
              alt=""
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1080px) 100vw, 1080px"
            />
          </div>
        </div>
      )}

      <div className="shell max-w-[var(--content)] pb-16">
        <Prose html={project.html} />
      </div>

      <div className="shell flex flex-wrap justify-between gap-4 border-t border-line-soft py-8 text-sm">
        <Link href="/projects" className="text-ink-mute transition hover:text-ink">
          ← All projects
        </Link>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-accent transition hover:underline"
          >
            View live →
          </a>
        )}
      </div>
    </article>
  );
}
