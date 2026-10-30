import Image from "next/image";
import { EXAM_LABEL, RESULTS_ARE_SAMPLE, starred, yearLabel, type Result } from "@/data/results";
import { photoFor } from "@/data/showcase";

export const TINTS = ["#CDEBFF", "#FFE7A6", "#D3F2E2", "#E4E2FF"];
const initials = (n: string) => n.split(" ").map((p) => p[0]).join("").slice(0, 2).toUpperCase();

/** Hexagon portrait. Student photos are transparent cut-outs, so they sit on a brand tint. */
export function Avatar({ name, photo, i = 0, size = 88 }: { name: string; photo?: string; i?: number; size?: number }) {
  return (
    <div
      className="hex relative grid flex-none place-items-center overflow-hidden font-display font-extrabold text-navy"
      style={{ width: size, aspectRatio: "1.12", background: TINTS[i % TINTS.length], fontSize: size * 0.27 }}
    >
      {photo ? (
        <Image src={photo} alt={`${name}, Catch25 student`} fill sizes={`${size * 2}px`} className="object-cover object-top" style={{ objectPosition: "50% 8%" }} />
      ) : (
        initials(name)
      )}
    </div>
  );
}

export function Score({ r, big = false }: { r: Result; big?: boolean }) {
  return (
    <div className={`font-display font-extrabold leading-none text-navy ${big ? "text-[2rem]" : "text-[1.55rem]"}`} style={{ fontVariantNumeric: "tabular-nums" }}>
      {r.score}
      {r.unit && <small className="ml-0.5 text-[.85rem] font-bold text-muted">{r.unit}</small>}
    </div>
  );
}

export function ResultCard({ r, i }: { r: Result; i: number }) {
  return (
    <article className="grid h-full content-start justify-items-center gap-1.5 rounded-[20px] border border-line bg-white px-4 pb-5 pt-4 text-center transition hover:-translate-y-1 hover:shadow-card">
      <div className="mb-1.5"><Avatar name={r.name} photo={r.photo ?? photoFor(r.name)?.src} i={i} /></div>
      <span className="rounded-full bg-mist px-2.5 py-1 text-[.7rem] font-extrabold uppercase tracking-[.08em] text-navy">{EXAM_LABEL[r.exam]} · {yearLabel(r)}</span>
      <b className="text-[1.02rem] leading-tight">{r.name}</b>
      <Score r={r} />
      {r.college && <div className="text-[.82rem] font-semibold text-ink">{r.college}</div>}
      {r.also && <div className="text-[.76rem] text-muted">{r.also}</div>}
    </article>
  );
}

export function SampleFlag({ dark = false, text = "Sample results for layout preview" }: { dark?: boolean; text?: string }) {
  if (!RESULTS_ARE_SAMPLE) return null;
  return (
    <span className={`inline-flex items-center gap-2 rounded-full border border-dashed px-3 py-1.5 text-[.82rem] font-bold ${dark ? "border-brand-sun bg-brand-sun/15 text-brand-sun" : "border-[#D9A21A] bg-brand-cream text-[#7A5600]"}`}>{text}</span>
  );
}

export function ResultsRail({ items }: { items?: Result[] }) {
  const list = items ?? starred();
  return (
    <div className="grid auto-cols-[minmax(210px,1fr)] grid-flow-col gap-4 overflow-x-auto pb-3" style={{ scrollSnapType: "x mandatory" }}>
      {list.map((r, i) => (
        <div key={r.name + r.exam + (r.year ?? "")} style={{ scrollSnapAlign: "start" }}><ResultCard r={r} i={i} /></div>
      ))}
    </div>
  );
}

export function Podium() {
  const top = starred().slice(0, 3);
  const order = [top[1], top[0], top[2]].filter(Boolean);
  return (
    <div className="mt-11 grid items-end gap-5 md:grid-cols-[1fr_1.15fr_1fr]">
      {order.map((r, i) => {
        const first = r === top[0];
        return (
          <article key={r.name} className={`relative grid justify-items-center gap-2 rounded-3xl bg-white px-[22px] pb-[22px] text-center text-ink ${first ? "pt-9 ring-4 ring-brand-sun" : "pt-[26px]"}`}>
            {first && <span className="absolute -top-[14px] rounded-full bg-brand-sun px-3 py-1 text-[.8rem] font-extrabold">Top result {r.year}</span>}
            <Avatar name={r.name} photo={r.photo} i={i} size={first ? 132 : 108} />
            <span className="text-[.82rem] font-extrabold uppercase tracking-[.08em] text-navy">{EXAM_LABEL[r.exam]} {r.year}</span>
            <b className="text-[1.1rem]">{r.name}</b>
            <Score r={r} big />
            {r.college && <span className="text-[.9rem] font-semibold">{r.college}</span>}
            {r.also && <span className="text-[.82rem] text-muted">{r.also}</span>}
          </article>
        );
      })}
    </div>
  );
}
