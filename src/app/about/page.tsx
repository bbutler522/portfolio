import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeader } from "@/components/SectionHeader";
import { Chip } from "@/components/Chip";
import { getAboutContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Senior software engineer in Brooklyn, open to opportunities. Squarespace, Launch by NTT Data, PBS NewsHour, and side projects.",
};

export default function AboutPage() {
  const about = getAboutContent();

  return (
    <>
      <section className="shell border-b border-line-soft pb-10 pt-14 md:pt-16">
        <p className="eyebrow mb-2">About</p>
        <h1 className="display text-4xl text-ink md:text-5xl">{about.intro}</h1>
        <div className="mt-8 max-w-2xl space-y-4 text-lg text-ink-soft">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="shell py-14">
        <SectionHeader eyebrow="Career" title="Where I've worked" />
        <ul className="space-y-10">
          {about.experience.map((item) => (
            <li
              key={item.title}
              className="grid gap-4 border-b border-line-soft pb-10 last:border-0 md:grid-cols-[140px_1fr]"
            >
              <div className="text-sm font-medium text-ink-mute">{item.when}</div>
              <div>
                <h3 className="display text-xl text-ink">{item.title}</h3>
                <p className="mt-1 text-sm text-accent">{item.role}</p>
                <p className="mt-3 text-ink-soft">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {about.awards && about.awards.length > 0 && (
        <section className="shell border-t border-line-soft py-14">
          <SectionHeader eyebrow="Recognition" title="Awards & nominations" />
          <ul className="space-y-4">
            {about.awards.map((award) => (
              <li
                key={`${award.title}-${award.detail}`}
                className="border-b border-line-soft pb-4 last:border-0"
              >
                <p className="font-medium text-ink">{award.title}</p>
                {award.detail && (
                  <p className="mt-1 text-sm text-ink-soft">{award.detail}</p>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}

      {about.education && (
        <section className="shell border-t border-line-soft py-14">
          <SectionHeader eyebrow="Education" title="University of Pittsburgh" />
          <p className="max-w-2xl text-ink-soft">{about.education}</p>
        </section>
      )}

      <section className="shell border-t border-line-soft py-14 pb-20">
        <SectionHeader eyebrow="Stack" title="What I tend to reach for" />
        <p className="mb-6 max-w-2xl text-ink-soft">{about.stackIntro}</p>
        <div className="flex flex-wrap gap-2">
          {about.stack.map((item) => (
            <Chip key={item}>{item}</Chip>
          ))}
        </div>
        <p className="mt-10 text-sm text-ink-mute">
          <Link href="/contact" className="text-accent hover:underline">
            Get in touch →
          </Link>
        </p>
      </section>
    </>
  );
}
