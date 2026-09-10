/**
 * Studio credit. The chevron mark is inlined from the Fourthform brand kit
 * (public/brand/fourthform-mark-reversed.svg) with the fill swapped to
 * currentColor so it picks up the footer's hover state.
 */
export function FourthformCredit() {
  return (
    <p className="flex items-center gap-2">
      <span>Demo site by</span>
      <a
        href="https://www.fourthformstudios.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-bone transition-opacity hover:opacity-70"
      >
        <svg
          viewBox="15.05 10.825 69.899 78.349"
          aria-hidden="true"
          focusable="false"
          className="h-3.5 w-auto"
        >
          <path
            fill="currentColor"
            d="M24.950 51.175 L45.500 30.624 L45.500 10.825 L15.050 41.275 Z M84.950 41.275 L54.500 10.825 L54.500 30.624 L75.050 51.175 Z M24.950 89.175 L45.500 68.624 L45.500 48.825 L15.050 79.275 Z M84.950 79.275 L54.500 48.825 L54.500 68.624 L75.050 89.175 Z"
          />
        </svg>
        <span className="underline underline-offset-4">Fourthform</span>
      </a>
    </p>
  );
}
