type SectionShellProps = {
  eyebrow: string;
  title: string;
  intro: string;
  children: React.ReactNode;
};

export function SectionShell({
  eyebrow,
  title,
  intro,
  children,
}: SectionShellProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10 sm:px-8 sm:py-14 lg:px-10">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-strong">
          {eyebrow}
        </p>
        <h2 className="display-title balanced-copy mt-5 text-5xl leading-none text-foreground sm:text-6xl">
          {title}
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-8 text-muted sm:text-lg">
          {intro}
        </p>
      </div>
      <div className="mt-10">{children}</div>
    </section>
  );
}