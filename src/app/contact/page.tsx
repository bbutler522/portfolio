import type { Metadata } from "next";
import { ContactCard } from "@/components/ContactCard";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch. Email, LinkedIn, Instagram — whatever's easiest.",
};

export default function ContactPage() {
  return (
    <>
      <section className="shell border-b border-line-soft pb-10 pt-14 md:pt-16">
        <p className="eyebrow mb-2">Get in touch</p>
        <h1 className="display text-4xl text-ink md:text-5xl">Say hi.</h1>
        <p className="mt-4 max-w-2xl text-lg text-ink-soft">
          I read everything. I reply to most things. The fastest way to reach
          me is email — but if you&apos;re more of a LinkedIn person,
          I&apos;m there too.
        </p>
      </section>

      <section className="shell py-14 pb-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <ContactCard
            href="mailto:hello@brennanbutler.com"
            label="Email — fastest"
            value="hello@brennanbutler.com"
          />
          <ContactCard
            href="https://linkedin.com/in/butlerbrennan/"
            label="LinkedIn"
            value="butlerbrennan"
            external
          />
          <ContactCard
            href="https://instagram.com/brennanrome"
            label="Instagram"
            value="@brennanrome"
            external
          />
          <ContactCard
            href="https://github.com/brennanbutler"
            label="GitHub"
            value="brennanbutler"
            external
          />
        </div>
      </section>
    </>
  );
}
