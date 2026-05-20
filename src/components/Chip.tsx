export function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex rounded-full border border-line bg-bg-elev px-3 py-1 text-xs text-ink-soft">
      {children}
    </span>
  );
}
