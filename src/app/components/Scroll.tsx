// src/components/scroll-hint.tsx
type Props = {
  href?: string; // âncora da próxima seção
  className?: string;
};

export function Scroll({ href = "#proxima-secao", className = "" }: Props) {
  return (
    <a
      href={href}
      aria-label="Rolar para baixo"
      className={`inline-block animate-bounce text-white/80 transition-colors hover:text-white motion-reduce:animate-none ${className}`}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-24 w-24 drop-shadow-[0_0_12px_rgba(0,0,0,0.5)]"
        aria-hidden="true"
      >
        <path d="M4 8l8 8 8-8" />
      </svg>
    </a>
  );
}