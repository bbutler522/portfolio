import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeader } from "@/components/SectionHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { getProjectsByCategory } from "@/lib/content";
import type { ProjectCategory } from "@/lib/types";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Work at Squarespace, Launch by NTT Data, PBS NewsHour, and personal projects.",
};

const sections: {
  category: ProjectCategory;
  eyebrow: string;
  title: string;
  description?: string;
}[] = [
  {
    category: "professional",
    eyebrow: "01 · Professional",
    title: "Squarespace, Launch & PBS",
  },
  {
    category: "side",
    eyebrow: "02 · Side projects",
    title: "On my own time",
  },
];

export default async function ProjectsPage() {
  const professional = await getProjectsByCategory("professional");
  const side = await getProjectsByCategory("side");

  const byCategory: Record<ProjectCategory, typeof professional> = {
    professional,
    side,
    music: [],
  };

  return (
    <>
      <section className="shell border-b border-line-soft pb-10 pt-14 md:pt-16">
        <p className="eyebrow mb-2">All work</p>
        <h1 className="display text-4xl text-ink md:text-5xl">Projects</h1>
        <p className="mt-4 max-w-2xl text-lg text-ink-soft">
          A few years of work, organized by who I was building it for. Click
          through for case studies on the ones with the most behind them.
        </p>
      </section>

      {sections.map((section) => {
        const projects = byCategory[section.category];
        if (projects.length === 0) return null;

        return (
          <section key={section.category} className="shell py-14">
            <SectionHeader
              eyebrow={section.eyebrow}
              title={section.title}
            />
            <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </ul>
          </section>
        );
      })}

      <section className="shell border-t border-line-soft py-14 pb-20">
        <SectionHeader eyebrow="03 · Off-keyboard" title="Music" />
        <p className="max-w-2xl text-lg text-ink-soft">
          I produce records under my own name. It&apos;s the part of my work
          that has nothing to do with shipping software, which is exactly the
          point.{" "}
          <Link href="/contact" className="text-accent hover:underline">
            Ask me about it
          </Link>{" "}
          if you&apos;re curious.
        </p>
      </section>
    </>
  );
}
