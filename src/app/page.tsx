import Link from "next/link";
import { SectionHeader } from "@/components/SectionHeader";
import { ProjectRow } from "@/components/ProjectRow";
import { getFeaturedProjects, getSiteContent } from "@/lib/content";
import { writingEnabled } from "@/lib/site-config";

export default async function HomePage() {
  const site = getSiteContent();
  const featuredProjects = await getFeaturedProjects();

  return (
    <>
      <section className="shell border-b border-line-soft pb-14 pt-14 md:pt-20">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-bg-elev px-4 py-1.5 text-sm text-ink-soft">
          <span className="h-2 w-2 rounded-full bg-accent" aria-hidden />
          {site.statusLine}
        </div>
        <h1 className="display max-w-4xl text-4xl leading-tight text-ink md:text-5xl lg:text-6xl">
          {site.heroTitle}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-ink-soft md:text-xl">
          {site.heroLede}
        </p>
      </section>

      <section className="shell py-14">
        <SectionHeader
          eyebrow="Selected work"
          title="Things I've built"
          href="/projects"
          linkLabel="See all projects →"
        />
        <ul>
          {featuredProjects.map((project) => (
            <ProjectRow key={project.slug} project={project} />
          ))}
        </ul>
      </section>

      <section className="shell border-t border-line-soft py-14 pb-20">
        <SectionHeader eyebrow="/now" title={site.nowTitle} />
        <div className="max-w-2xl space-y-4 text-ink-soft">
          <p>{site.nowBody}</p>
          <p className="text-sm text-ink-mute">
            Updated {site.nowUpdated} ·{" "}
            <Link href="/about" className="text-accent hover:underline">
              More about me →
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
