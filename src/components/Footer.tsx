import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-line-soft py-10">
      <div className="shell flex flex-col gap-4 text-sm text-ink-mute md:flex-row md:items-center md:justify-between">
        <div>© {year} Brennan Butler</div>
        <div className="flex flex-wrap gap-4">
          <a
            href="https://linkedin.com/in/butlerbrennan/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-ink"
          >
            LinkedIn
          </a>
          <a
            href="https://instagram.com/brennanrome"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-ink"
          >
            Instagram
          </a>
          <Link href="/contact" className="transition hover:text-ink">
            Email
          </Link>
        </div>
        <div className="text-xs">Built with Next.js and care.</div>
      </div>
    </footer>
  );
}
