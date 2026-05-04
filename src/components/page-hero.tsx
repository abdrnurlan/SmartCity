type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
};

export function PageHero({ eyebrow, title, intro }: PageHeroProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-6 pt-10 sm:px-8 sm:pb-10 sm:pt-14 lg:px-10 lg:pt-18">
      <div className="max-w-4xl">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-strong">
          {eyebrow}
        </p>
        <h1 className="display-title balanced-copy mt-5 text-5xl leading-none text-foreground sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-muted sm:text-lg">
          {intro}
        </p>
      </div>
    </section>
  );
}