"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/writing", label: "Writing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteNav() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 border-b border-line-soft bg-bg/90 backdrop-blur-md">
      <div className="shell flex items-center justify-between gap-6 py-4">
        <Link
          href="/"
          className="display text-lg tracking-tight text-ink transition hover:text-accent"
        >
          brennan butler
          <span className="text-accent">.</span>
        </Link>

        <ul className="flex flex-wrap items-center gap-4 text-sm md:gap-6">
          {links.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={
                    isActive
                      ? "font-medium text-ink"
                      : "text-ink-soft transition hover:text-ink"
                  }
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </nav>
  );
}
