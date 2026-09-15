type StickerWordmarkProps = {
  className?: string;
};

/**
 * "GroveStreet" in the club logo's sticker treatment: bone fill, heavy ink
 * outline, then a bone outer rim. Drawn as SVG text so paint-order and the
 * double stroke render identically everywhere, and so textLength can pin the
 * word edge to edge at any width. Decorative: pair it with a real heading.
 */
export function StickerWordmark({ className = "" }: StickerWordmarkProps) {
  const text = {
    x: 20,
    y: 214,
    textLength: 1060,
    lengthAdjust: "spacingAndGlyphs" as const,
    fontSize: 262,
    style: { fontFamily: "var(--font-anton)" },
  };

  return (
    <svg
      viewBox="0 0 1100 236"
      aria-hidden="true"
      focusable="false"
      className={`block h-auto w-full overflow-visible ${className}`}
    >
      {/* Outer rim */}
      <text
        {...text}
        fill="#f2f0ea"
        stroke="#f2f0ea"
        strokeWidth={34}
        strokeLinejoin="round"
      >
        GroveStreet
      </text>
      {/* Ink outline */}
      <text
        {...text}
        fill="#f2f0ea"
        stroke="#050505"
        strokeWidth={18}
        strokeLinejoin="round"
      >
        GroveStreet
      </text>
      {/* Face */}
      <text {...text} fill="#f2f0ea">
        GroveStreet
      </text>
    </svg>
  );
}
