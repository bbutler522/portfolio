import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/types";
import { Chip } from "./Chip";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <li className="flex flex-col rounded-[var(--radius)] border border-line bg-bg-elev p-5 transition hover:border-accent/40">
      <Link href={`/projects/${project.slug}`} className="flex h-full flex-col gap-4">
        {project.coverImage && (
          <div className="relative aspect-[16/10] overflow-hidden rounded-md border border-line-soft bg-line-soft">
            <Image
              src={project.coverImage}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        )}
        <div>
          <p className="text-xs text-ink-mute">
            {project.company} {project.featured && "· Case study"}
          </p>
          <h3 className="display mt-1 text-xl text-ink">{project.title}</h3>
          <p className="mt-2 text-sm text-ink-soft">{project.description}</p>
        </div>
        {project.tags.length > 0 && (
          <div className="mt-auto flex flex-wrap gap-2">
            {project.tags.slice(0, 4).map((tag) => (
              <Chip key={tag}>{tag}</Chip>
            ))}
          </div>
        )}
      </Link>
    </li>
  );
}
