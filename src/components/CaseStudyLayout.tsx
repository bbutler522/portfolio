import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import type { Project } from "@/lib/types";
import { Chip } from "./Chip";
import { Prose } from "./Prose";

interface CaseStudyLayoutProps {
  project: Project;
}

export function CaseStudyLayout({ project }: CaseStudyLayoutProps) {
  const year = format(new Date(project.publishedAt), "yyyy");

  return (
    <article>
      <header className="shell border-b border-line-soft pb-10 pt-12 md:pt-16">
        <nav className="mb-6 text-sm text-ink-mute">
          <Link href="/" className="hover:text-ink">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/projects" className="hover:text-ink">
            Projects
          </Link>
          <span className="mx-2">/</span>
          <span>{project.title}</span>
        </nav>

        <h1 className="display max-w-3xl text-4xl text-ink md:text-5xl">
          {project.title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-ink-soft">
          {project.summary || project.description}
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-xs uppercase tracking-wide text-ink-mute">Role</p>
            <p className="mt-1 text-sm text-ink">{project.role}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-ink-mute">Year</p>
            <p className="mt-1 text-sm text-ink">{year}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-ink-mute">Company</p>
            <p className="mt-1 text-sm text-ink">{project.company}</p>
          </div>
          {project.tags.length > 0 && (
            <div>
              <p className="text-xs uppercase tracking-wide text-ink-mute">Stack</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Chip key={tag}>{tag}</Chip>
                ))}
              </div>
            </div>
          )}
        </div>
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

      <div className="shell flex flex-wrap justify-between gap-4 border-t border-line-soft py-8 text-sm text-ink-mute">
        <Link href="/projects" className="transition hover:text-ink">
          ← All projects
        </Link>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-accent"
          >
            View live project →
          </a>
        )}
        <Link href="/contact" className="transition hover:text-ink">
          Questions? Email me →
        </Link>
      </div>
    </article>
  );
}
