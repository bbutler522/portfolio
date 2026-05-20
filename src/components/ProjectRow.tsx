import Link from "next/link";
import type { Project } from "@/lib/types";
import { format } from "date-fns";

interface ProjectRowProps {
  project: Project;
}

export function ProjectRow({ project }: ProjectRowProps) {
  const year = format(new Date(project.publishedAt), "yyyy");

  return (
    <li className="border-b border-line-soft py-6 first:pt-0 last:border-b-0">
      <Link
        href={`/projects/${project.slug}`}
        className="group grid gap-2 transition md:grid-cols-[1fr_auto] md:gap-6"
      >
        <div>
          <h3 className="display text-xl text-ink transition group-hover:text-accent md:text-2xl">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-ink-mute">
            {year} · {project.company || "Personal"}
          </p>
          <p className="mt-2 text-ink-soft">{project.description}</p>
        </div>
        {project.featured && (
          <span className="self-start text-xs font-medium uppercase tracking-wide text-accent">
            Case study →
          </span>
        )}
      </Link>
    </li>
  );
}
