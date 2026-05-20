import Link from "next/link";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  href?: string;
  linkLabel?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  href,
  linkLabel = "See more →",
}: SectionHeaderProps) {
  return (
    <header className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        {eyebrow && <p className="eyebrow mb-2">{eyebrow}</p>}
        <h2 className="display text-3xl text-ink md:text-4xl">{title}</h2>
        {description && (
          <p className="mt-3 max-w-2xl text-lg text-ink-soft">{description}</p>
        )}
      </div>
      {href && (
        <Link
          href={href}
          className="shrink-0 text-sm font-medium text-accent transition hover:underline"
        >
          {linkLabel}
        </Link>
      )}
    </header>
  );
}
