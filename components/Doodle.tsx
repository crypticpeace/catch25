import type { CSSProperties } from "react";

type Kind = "atom" | "squiggle" | "tri" | "star" | "plane" | "flask" | "loop" | "dna" | "spark" | "hexo";
type Tone = "navy" | "red" | "sun" | "sky" | "green";

const SHAPES: Record<Kind, { vb: string; el: JSX.Element }> = {
  atom: { vb: "0 0 80 80", el: <><ellipse cx="40" cy="40" rx="34" ry="12" /><ellipse cx="40" cy="40" rx="34" ry="12" transform="rotate(60 40 40)" /><ellipse cx="40" cy="40" rx="34" ry="12" transform="rotate(120 40 40)" /><circle cx="40" cy="40" r="4" /></> },
  squiggle: { vb: "0 0 90 30", el: <path d="M3 18 q 8 -16 16 0 t 16 0 t 16 0 t 16 0 t 16 0" /> },
  tri: { vb: "0 0 60 60", el: <path d="M10 50 L30 8 L52 44 Z" /> },
  star: { vb: "0 0 60 60", el: <path d="M30 6 L35 24 L54 26 L39 37 L44 55 L30 44 L16 55 L21 37 L6 26 L25 24 Z" /> },
  plane: { vb: "0 0 90 60", el: <><path d="M4 30 L80 6 L58 54 L44 36 Z" /><path d="M44 36 L80 6" /><path d="M4 50 q 20 -4 30 -14" strokeDasharray="4 6" /></> },
  flask: { vb: "0 0 60 70", el: <><path d="M22 6h16M25 6v18L8 58a4 4 0 0 0 3.5 6h37a4 4 0 0 0 3.5-6L35 24V6" /><path d="M14 46h32" /><circle cx="26" cy="54" r="2" /><circle cx="36" cy="50" r="2.5" /></> },
  loop: { vb: "0 0 80 40", el: <path d="M4 30 c 10 -26 26 -26 22 -6 c -4 18 18 18 22 0 c 4 -18 22 -14 28 4" /> },
  dna: { vb: "0 0 50 90", el: <><path d="M10 4 C 40 24 40 34 10 46 S 40 70 10 86" /><path d="M40 4 C 10 24 10 34 40 46 S 10 70 40 86" /><path d="M16 14h18M14 34h22M16 56h18M14 76h22" /></> },
  spark: { vb: "0 0 50 50", el: <path d="M25 4v12M25 34v12M4 25h12M34 25h12M10 10l7 7M33 33l7 7M40 10l-7 7M17 33l-7 7" /> },
  hexo: { vb: "0 0 60 60", el: <path d="M17 5 H43 L57 30 L43 55 H17 L3 30 Z" /> },
};

export function Doodle({ kind, tone = "navy", className = "", style, inline = false }: { kind: Kind; tone?: Tone; className?: string; style?: CSSProperties; inline?: boolean }) {
  const s = SHAPES[kind];
  return (
    <svg viewBox={s.vb} aria-hidden="true" className={`${inline ? "" : "doodle"} d-${tone} ${className}`} style={style}>
      <g fill="none" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">{s.el}</g>
    </svg>
  );
}

export function Underline() {
  return (
    <svg viewBox="0 0 200 20" preserveAspectRatio="none" aria-hidden="true" className="absolute -bottom-[0.22em] left-[-2%] h-[.45em] w-[104%] overflow-visible">
      <path d="M3 13 C 50 3, 120 3, 197 11" fill="none" stroke="#FFC83D" strokeWidth={7} strokeLinecap="round" />
    </svg>
  );
}
