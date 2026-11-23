"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { BRANCHES, type Branch } from "@/data/branches";
import { AREAS } from "@/data/areas";
import { waLink } from "@/data/site";

/* Projection for the western suburbs, Bandra to Mira Road */
const MAP = { w: 520, h: 720, lng0: 72.77, lng1: 72.95, lat0: 19.03, lat1: 19.28 };
const px = (lng: number, lat: number): [number, number] => [
  ((lng - MAP.lng0) / (MAP.lng1 - MAP.lng0)) * MAP.w,
  ((MAP.lat1 - lat) / (MAP.lat1 - MAP.lat0)) * MAP.h,
];
const line = (pts: number[][], close = false) =>
  pts.map((p, i) => { const [x, y] = px(p[0], p[1]); return `${i ? "L" : "M"}${x.toFixed(1)} ${y.toFixed(1)}`; }).join(" ") + (close ? " Z" : "");
const smooth = (pts: number[][]) => {
  const q = pts.map((p) => px(p[0], p[1]));
  let d = `M${q[0][0].toFixed(1)} ${q[0][1].toFixed(1)}`;
  for (let i = 1; i < q.length - 1; i++) {
    const mx = (q[i][0] + q[i + 1][0]) / 2, my = (q[i][1] + q[i + 1][1]) / 2;
    d += ` Q${q[i][0].toFixed(1)} ${q[i][1].toFixed(1)} ${mx.toFixed(1)} ${my.toFixed(1)}`;
  }
  const l = q[q.length - 1];
  return `${d} L${l[0].toFixed(1)} ${l[1].toFixed(1)}`;
};

const COAST = [[72.805, 19.285], [72.8, 19.262], [72.79, 19.24], [72.786, 19.215], [72.79, 19.198], [72.798, 19.178], [72.806, 19.16], [72.81, 19.145], [72.806, 19.132], [72.814, 19.118], [72.822, 19.1], [72.826, 19.082], [72.829, 19.066], [72.823, 19.052], [72.83, 19.038], [72.835, 19.025]];
const PARK = [[72.88, 19.282], [72.94, 19.282], [72.95, 19.24], [72.935, 19.19], [72.905, 19.168], [72.885, 19.178], [72.872, 19.205], [72.874, 19.245], [72.88, 19.282]];
const AAREY = [[72.866, 19.168], [72.89, 19.162], [72.896, 19.145], [72.88, 19.132], [72.864, 19.142], [72.866, 19.168]];
const WEH = [[72.868, 19.285], [72.866, 19.24], [72.862, 19.2], [72.858, 19.16], [72.855, 19.12], [72.853, 19.08], [72.851, 19.03]];
const CREEKS = [
  [[72.792, 19.236], [72.808, 19.232], [72.822, 19.236], [72.836, 19.228]],
  [[72.798, 19.18], [72.812, 19.183], [72.826, 19.18], [72.836, 19.186]],
  [[72.826, 19.048], [72.84, 19.044], [72.856, 19.05]],
];
const MAP_AREAS = AREAS.filter((a) => a.lat < MAP.lat1);
const RAIL = [[72.862, 19.285], ...MAP_AREAS.slice().sort((a, b) => b.lat - a.lat).map((a) => [a.lng + 0.002, a.lat]), [72.842, 19.03]];
const LAND = smooth(COAST) + ` L${MAP.w} ${MAP.h + 10} L${MAP.w} -10 Z`;

type Tip = { b: Branch; left: number; top: number } | null;

export function MumbaiMap({ detailed = false, only, stack = false, hideList = false }: { detailed?: boolean; only?: string; stack?: boolean; hideList?: boolean }) {
  const boxRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const tipRef = useRef<HTMLDivElement>(null);
  const [tip, setTip] = useState<Tip>(null);
  const branches = only ? BRANCHES.filter((b) => b.slug === only) : BRANCHES;

  const show = (b: Branch) => {
    const box = boxRef.current, svg = svgRef.current;
    if (!box || !svg) return;
    const scale = svg.getBoundingClientRect().width / MAP.w;
    const [x, y] = px(b.lng, b.lat).map((v) => v * scale);
    const tw = Math.min(290, box.clientWidth - 24), th = 210;
    let left = x + 26;
    if (left + tw > box.clientWidth - 12) left = x - tw - 26;
    if (left < 12) left = Math.max(12, (box.clientWidth - tw) / 2);
    const top = Math.max(12, Math.min(y - th / 2 - 20, box.clientHeight - th - 12));
    setTip({ b, left, top });
  };
  const hide = () => setTip(null);

  const sp = px(72.905, 19.235);
  const wl = px(72.872, 19.112);

  return (
    <div className={`grid items-start gap-6 ${stack || hideList ? "" : "lg:grid-cols-[1.15fr_.85fr]"}`}>
      <div ref={boxRef} className="relative min-w-0 overflow-hidden rounded-[28px] border border-line bg-[#EAF6FF]" onPointerLeave={hide}>
        <svg ref={svgRef} className="mumbai block h-auto w-full" viewBox={`0 0 ${MAP.w} ${MAP.h}`} role="img" aria-labelledby="mapTitle mapDesc" onClick={hide}>
          <title id="mapTitle">Map of Catch25 Science Academy centres in Mumbai</title>
          <desc id="mapDesc">Western suburbs of Mumbai from Bandra to Dahisar with Catch25 centres at {BRANCHES.map((b) => b.name).join(" and ")}.</desc>
          <rect width={MAP.w} height={MAP.h} fill="#EAF6FF" />
          {[[40, 200], [70, 330], [30, 470], [90, 560], [50, 640], [110, 120]].map(([x, y]) => (
            <path key={`${x}-${y}`} className="wave" d={`M${x} ${y} q 10 -8 20 0 t 20 0 t 20 0`} />
          ))}
          <path className="land" d={LAND} />
          <path className="park" d={line(PARK, true)} />
          <path className="park" d={line(AAREY, true)} />
          {CREEKS.map((c, i) => <path key={i} className="creek" d={smooth(c)} />)}
          <path className="road" d={smooth(WEH)} />
          <path className="rail-line" d={smooth(RAIL)} />
          <text className="park-label" x={sp[0]} y={sp[1]} textAnchor="middle">Sanjay Gandhi</text>
          <text className="park-label" x={sp[0]} y={sp[1] + 22} textAnchor="middle">National Park</text>
          <text className="sea-label" x="18" y="410" transform="rotate(-8 18 410)">Arabian Sea</text>
          <text className="area-label" x={wl[0]} y={wl[1]} style={{ fontSize: 11, fill: "#B38418" }}>W. Express Hwy</text>
          {MAP_AREAS.map((a) => {
            const [x, y] = px(a.lng + 0.002, a.lat);
            return (
              <g key={a.slug}>
                <circle className="area-dot" cx={x} cy={y} r={4} />
                {detailed ? (
                  <Link href={`/coaching/${a.slug}`}><text className="area-label" x={x + 12} y={y + 4}>{a.name}</text></Link>
                ) : (
                  <text className="area-label" x={x + 12} y={y + 4}>{a.name}</text>
                )}
              </g>
            );
          })}
          <text className="hint" x="300" y="300">hover a pin!</text>
          <path d="M296 292 q -30 -20 -50 -60" fill="none" stroke="#E1141E" strokeWidth={2.5} strokeLinecap="round" />
          <path d="M244 236 l 2 12 l 9 -7" fill="none" stroke="#E1141E" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
          <g transform="translate(470 650)">
            <circle r={22} fill="#fff" stroke="#2E2A84" strokeWidth={2} />
            <path d="M0 -15 L6 4 L0 0 L-6 4 Z" fill="#E1141E" />
            <text y={-26} textAnchor="middle" style={{ font: "800 12px var(--font-display)", fill: "#2E2A84" }}>N</text>
          </g>
          {branches.map((b) => {
            const [x, y] = px(b.lng, b.lat);
            return (
              <g
                key={b.slug}
                className={`pin ${b.hq ? "hq" : ""} ${tip?.b.slug === b.slug ? "active" : ""}`}
                transform={`translate(${x.toFixed(1)} ${y.toFixed(1)})`}
                tabIndex={0}
                role="button"
                aria-label={`Catch25 ${b.name} centre, ${b.address}`}
                onPointerEnter={() => show(b)}
                onFocus={() => show(b)}
                onClick={(e) => { e.stopPropagation(); show(b); }}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); show(b); } }}
              >
                <circle className="halo" r={16} />
                <path className="body" d="M0 0 C -4 -10 -14 -14 -14 -26 A 14 14 0 1 1 14 -26 C 14 -14 4 -10 0 0 Z" />
                <circle className="core" cy={-26} r={5.5} />
                <text x={b.labelSide === "right" ? 22 : -22} y={-20} textAnchor={b.labelSide === "right" ? "start" : "end"}>{b.name}</text>
              </g>
            );
          })}
        </svg>

        {tip && (
          <div ref={tipRef} className="absolute z-[5] grid w-[min(290px,calc(100%-24px))] gap-1.5 rounded-[18px] bg-white p-4 shadow-lift" style={{ left: tip.left, top: tip.top }}>
            <h4 className="text-[1.05rem] text-navy">Catch25 {tip.b.name} · {tip.b.tag}</h4>
            <p className="text-[.86rem] leading-normal text-muted">{tip.b.address}</p>
            <p className="text-[.86rem] leading-normal text-muted"><b className="text-ink">{tip.b.hours}</b><br />{[tip.b.classrooms, ...tip.b.facilities].filter(Boolean).join(" · ")}</p>
            <div className="mt-1 flex flex-wrap gap-2">
              <a className="rounded-full bg-navy px-3 py-1.5 text-[.8rem] font-extrabold text-white" href={tip.b.maps} target="_blank" rel="noopener">Directions</a>
              <a className="rounded-full bg-wa px-3 py-1.5 text-[.8rem] font-extrabold text-white" href={waLink(`Hi Catch25, I want to visit your ${tip.b.name} centre. Please share details.`)} target="_blank" rel="noopener">WhatsApp</a>
              <Link className="rounded-full bg-mist px-3 py-1.5 text-[.8rem] font-extrabold text-navy" href={`/branches/${tip.b.slug}`}>Centre page</Link>
            </div>
          </div>
        )}

        <div className="absolute bottom-3.5 left-3.5 grid gap-1 rounded-xl bg-white/90 px-3 py-2 text-[.78rem] font-bold">
                    <span className="flex items-center gap-2"><i className="inline-block h-3 w-3 rounded-full bg-navy" />Head office</span>
          <span className="flex items-center gap-2"><i className="inline-block h-3 w-3 rounded-full bg-brand-red" />Branch</span>
          <span className="flex items-center gap-2"><i className="inline-block h-3 w-3 rounded-full bg-navy opacity-35" />Areas our students come from</span>
        </div>
      </div>

      {!hideList && <div className="grid min-w-0 content-start gap-3.5">
        {branches.map((b) => (
          <div
            key={b.slug}
            tabIndex={0}
            onPointerEnter={() => show(b)}
            onFocus={() => show(b)}
            onPointerLeave={hide}
            className={`grid gap-2 rounded-[20px] border-2 bg-white p-5 transition ${tip?.b.slug === b.slug ? "border-navy shadow-card" : "border-line hover:border-navy"}`}
          >
            <h3 className="flex flex-wrap items-center gap-2.5">
              <Link href={`/branches/${b.slug}`}>Catch25 {b.name}</Link>
              <span className="rounded-full bg-navy px-2.5 py-1 font-body text-[.7rem] font-extrabold uppercase tracking-[.1em] text-white">{b.tag}</span>
            </h3>
            <p className="text-[.93rem] text-muted">{b.address}</p>
            {detailed ? (
              <p className="text-[.93rem] text-muted">
                <b className="text-ink">Landmark:</b> {b.landmark}<br />
                <b className="text-ink">Nearest station:</b> {b.station}<br />
                <b className="text-ink">Timings:</b> {b.hours}<br />
                <b className="text-ink">Facilities:</b> {[b.classrooms, ...b.facilities].filter(Boolean).join(" · ")}
              </p>
            ) : (
              <p className="text-[.93rem] font-bold text-ink">{b.hours}</p>
            )}
            <div className="flex flex-wrap gap-3.5 text-[.9rem] font-extrabold text-navy">
              <a href={b.maps} target="_blank" rel="noopener" className="underline">Get directions</a>
              <a href={waLink(`Hi Catch25, I want details about the ${b.name} centre.`)} target="_blank" rel="noopener" className="underline">WhatsApp this centre</a>
            </div>
          </div>
        ))}
      </div>}
    </div>
  );
}
