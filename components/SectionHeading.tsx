type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  id?: string;
};

export function SectionHeading({ eyebrow, title, id }: SectionHeadingProps) {
  return (
    <header className="mb-10 md:mb-14">
      <p
        data-reveal="up"
        className="font-display text-[0.7rem] uppercase tracking-[0.4em] text-blood"
      >
        {eyebrow}
      </p>
      <h2
        id={id}
        data-reveal="up"
        style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
        className="mt-4 whitespace-pre-line font-display text-4xl uppercase leading-[0.9] tracking-tight text-bone sm:text-5xl md:text-6xl"
      >
        {title}
      </h2>
      <div
        data-reveal="rule"
        style={{ "--reveal-delay": "220ms" } as React.CSSProperties}
        className="rule-heavy mt-6 w-28 opacity-70"
      />
    </header>
  );
}
