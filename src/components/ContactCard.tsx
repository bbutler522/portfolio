interface ContactCardProps {
  href: string;
  label: string;
  value: string;
  external?: boolean;
}

export function ContactCard({
  href,
  label,
  value,
  external = false,
}: ContactCardProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="flex flex-col gap-2 rounded-[var(--radius)] border border-line bg-bg-elev p-6 transition hover:border-accent hover:shadow-sm"
    >
      <span className="text-xs font-medium uppercase tracking-wide text-ink-mute">
        {label}
      </span>
      <span className="text-lg font-medium text-ink">{value}</span>
    </a>
  );
}
