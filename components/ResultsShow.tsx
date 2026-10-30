"use client";

/**
 * Homepage results showcase, poster style.
 * A coded slideshow (not images): every slide is laid out on a fixed canvas that keeps its
 * ratio (16:9 on desktop, 4:5 on phones) and scales with the frame via container units (--u = 1% of the width).
 * Data lives in data/showcase.ts.
 */
import Link from "next/link";
import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import { SECTIONS, SHOW, portraitFor, type Person, type ShowSlide } from "@/data/showcase";

const DEFAULT_SECONDS = 6.5;
const initials = (n: string) => n.split(" ").filter(Boolean).map((p) => p[0]).join("").slice(0, 2).toUpperCase();
const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

/* ---------------------------------------------------------------- pieces */

/** Headline sized so its longest line fills the width. Desktop joins the lines unless the slide asks to stack. */
function Headline({ s }: { s: ShowSlide }) {
  const desk = s.stack ? s.lines : [s.lines.join(" ")];
  const fit = (ls: string[], max: number, avail: number) => Math.min(max, avail / (Math.max(...ls.map((l) => l.length)) * 0.7)).toFixed(2);
  const Lines = ({ ls, cls }: { ls: string[]; cls: string }) => (
    <span className={cls} aria-hidden="true">
      {ls.map((l, i) => (
        <span key={l} className="ps-line"><span className="ps-in-up" style={d(120 + i * 140)}>{l}</span></span>
      ))}
    </span>
  );
  return (
    <h3 className="ps-head" style={{ "--hd": fit(desk, 12, 88), "--hm": fit(s.lines, s.kind === "podium" ? 14 : 21, 90) } as CSSProperties}>
      <span className="sr-only">{s.title}</span>
      <Lines ls={desk} cls="ps-hd" />
      <Lines ls={s.lines} cls="ps-hm" />
    </h3>
  );
}

function Top({ s }: { s: ShowSlide }) {
  return (
    <div className="ps-top">
      <span className="ps-kicker ps-in" style={d(0)}>
        {s.kicker}
      </span>
      {s.pill && <span className="ps-pill ps-in" style={d(80)}>{s.pill}</span>}
    </div>
  );
}

function Sub({ s }: { s: ShowSlide }) {
  return (
    <p className="ps-sub ps-in" style={d(420)}>
      <i aria-hidden="true" />
      <span>{s.sub}</span>
      <i aria-hidden="true" />
    </p>
  );
}

function Photo({ p, className = "", style }: { p: Person; className?: string; style?: CSSProperties }) {
  const ph = portraitFor(p.name);
  return (
    <div className={`ps-photo ${ph?.face ? "has-face" : ""} ${className}`} style={style}>
      <span className="ps-glow" aria-hidden="true" />
      <span className="ps-ring" aria-hidden="true" />
      {ph ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={ph.src} alt={`${p.name}, Catch25 student`} loading="eager" decoding="async" className={ph.cutout ? "is-cut" : "is-crop"} />
      ) : (
        <span className="ps-ini">{initials(p.name)}</span>
      )}
    </div>
  );
}

const Arrow = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8" /></svg>
);

function HeroSlide({ s }: { s: ShowSlide }) {
  const p = s.people[0];
  const [m0, m1, m2] = s.mid ?? ["", ""];
  return (
    <>
      <div className="ps-block">
        <Top s={s} />
        <Headline s={s} />
        <Sub s={s} />
      </div>
      <Photo p={p} className="ps-hero-photo ps-rise" style={d(250)} />
      <div className="ps-side ps-side-l ps-in" style={d(700)}>
        <small>Student</small>
        <b>{p.name}</b>
        <span className="ps-rule" aria-hidden="true" />
        <em>Catch25 Science Academy</em>
      </div>
      <div className="ps-side ps-side-r ps-in" style={d(800)}>
        <small>{m0}</small>
        <b className="ps-gold">{m1}</b>
        <span className="ps-rule" aria-hidden="true" />
        <em>{m2 ?? (p.tag || "Mumbai")}</em>
      </div>
      <div className="ps-bar ps-from-l" style={d(520)}>
        <span className="ps-badge">{s.badge}</span>
        <span className="ps-cell"><small>Admitted to</small><b>{p.college}</b></span>
        <span className="ps-sep" aria-hidden="true" />
        <span className="ps-cell ps-cell-r"><small>Coached at</small><b>Catch25, Mumbai</b></span>
      </div>
    </>
  );
}

const SUBLINE: Record<string, string> = { JEE: "JEE Main 2026", "MHT CET": "MHT CET 2026", NEET: "NEET UG 2026", Boards: "HSC 2026" };

function useCountUp(target: string | undefined, run: boolean) {
  const [v, setV] = useState(target ?? "");
  useEffect(() => {
    if (!target || !run) { setV(target ?? ""); return; }
    const end = parseFloat(target);
    if (Number.isNaN(end) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setV(target); return; }
    const dec = (target.split(".")[1] ?? "").length;
    const start = performance.now(), dur = 1300;
    let raf = 0;
    const tick = (t: number) => {
      const k = Math.min(1, (t - start) / dur), e = 1 - Math.pow(1 - k, 3);
      setV((end * e).toFixed(dec));
      if (k < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, run]);
  return v;
}

const MEDAL = ["gold", "silver", "bronze"];

/** One step of the podium: the student stands on a pedestal that carries their college, name and score. */
function Step({ s, p, rank, active, delay }: { s: ShowSlide; p: Person; rank: number; active: boolean; delay: number }) {
  const v = useCountUp(p.score, active);
  const ph = portraitFor(p.name);
  return (
    <div className={`ps-step r${rank}`}>
      <div className="ps-step-ph ps-rise" style={d(delay + 250)}>
        <span className="ps-glow" aria-hidden="true" />
        {ph ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={ph.src} alt={`${p.name}, Catch25 student`} loading="eager" decoding="async" className={ph.cutout ? "is-cut" : "is-crop"} />
        ) : (
          <span className="ps-ini">{initials(p.name)}</span>
        )}
      </div>
      <div className="ps-ped ps-grow" style={d(delay)}>
        <span className={`ps-medal ${MEDAL[rank - 1]}`}>{rank}</span>
        <div className="ps-ped-body ps-in" style={d(delay + 450)}>
          <span className={`ps-ped-col ${p.college ? "" : "is-none"}`}>{p.college ?? SUBLINE[s.section]}</span>
          {p.score && <span className="ps-ped-score"><b>{v}</b><small>{p.unit}</small></span>}
          <b className="ps-ped-name">{p.name}</b>
        </div>
      </div>
    </div>
  );
}

function PodiumSlide({ s, active }: { s: ShowSlide; active: boolean }) {
  const [first, second, third] = s.people;
  return (
    <>
      <div className="ps-block">
        <Top s={s} />
        <Headline s={s} />
        <Sub s={s} />
      </div>
      <div className="ps-podium">
        <span className="ps-spot" aria-hidden="true" />
        <span className="ps-floor" aria-hidden="true" />
        {second && <Step s={s} p={second} rank={2} active={active} delay={250} />}
        <Step s={s} p={first} rank={1} active={active} delay={100} />
        {third && <Step s={s} p={third} rank={3} active={active} delay={400} />}
      </div>
    </>
  );
}

function FinaleSlide({ s }: { s: ShowSlide }) {
  const stats = [["500+", "Top engineering colleges"], ["500+", "Top medical colleges"], ["30+", "JEE Advanced, 2026"], ["10,000+", "Students since 2013"]];
  return (
    <>
      <div className="ps-block">
        <Top s={s} />
        <Headline s={s} />
        <Sub s={s} />
      </div>
      <div className="ps-bar ps-stats ps-from-l" style={d(560)}>
        {stats.map(([v, l], i) => (
          <span key={l} className="ps-stat">
            {i > 0 && <span className="ps-sep" aria-hidden="true" />}
            <span className="ps-cell"><b>{v}</b><small>{l}</small></span>
          </span>
        ))}
      </div>
      <div className="ps-cta ps-in" style={d(800)}>
        <Link href="/contact" className="ps-btn ps-btn-gold">Book free counselling <Arrow /></Link>
        <Link href="/results" className="ps-btn">See all results</Link>
      </div>
    </>
  );
}

function SlideBody({ s, active }: { s: ShowSlide; active: boolean }) {
  if (s.kind === "hero") return <HeroSlide s={s} />;
  if (s.kind === "podium") return <PodiumSlide s={s} active={active} />;
  return <FinaleSlide s={s} />;
}

/** Quiet light and hairlines that stay put while slides change. */
function Deco() {
  return (
    <div className="ps-deco" aria-hidden="true">
      <span className="ps-light" />
      <span className="ps-corner ps-corner-tl" /><span className="ps-corner ps-corner-br" />
    </div>
  );
}

/* ---------------------------------------------------------------- show */

export function ResultsShow() {
  const n = SHOW.length;
  const [cur, setCur] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [hover, setHover] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [hidden, setHidden] = useState(false);
  const touch = useRef<number | null>(null);

  const go = useCallback((to: number) => {
    setCur((c) => {
      const next = ((to % n) + n) % n;
      if (next !== c) setPrev(c);
      return next;
    });
  }, [n]);

  useEffect(() => {
    if (prev === null) return;
    const t = window.setTimeout(() => setPrev(null), 700);
    return () => window.clearTimeout(t);
  }, [prev, cur]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const on = () => setReduced(mq.matches);
    mq.addEventListener("change", on);
    const vis = () => setHidden(document.hidden);
    document.addEventListener("visibilitychange", vis);
    return () => { mq.removeEventListener("change", on); document.removeEventListener("visibilitychange", vis); };
  }, []);

  const playing = !hover && !userPaused && !reduced && !hidden;
  const secs = SHOW[cur].seconds ?? DEFAULT_SECONDS;

  useEffect(() => {
    if (!playing) return;
    const t = window.setTimeout(() => go(cur + 1), secs * 1000);
    return () => window.clearTimeout(t);
  }, [cur, playing, secs, go]);

  /* preload the next slide's photos */
  useEffect(() => {
    SHOW[(cur + 1) % n].people.forEach((p) => { const ph = portraitFor(p.name); if (ph) { const i = new Image(); i.src = ph.src; } });
  }, [cur, n]);

  const sectionStart = (k: string) => SHOW.findIndex((s) => s.section === k);
  const curSection = SHOW[cur].section;

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Catch25 results showcase"
      className="ps-root"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onKeyDown={(e) => { if (e.key === "ArrowRight") go(cur + 1); if (e.key === "ArrowLeft") go(cur - 1); }}
      onTouchStart={(e) => { touch.current = e.touches[0].clientX; }}
      onTouchEnd={(e) => {
        if (touch.current === null) return;
        const dx = e.changedTouches[0].clientX - touch.current;
        if (Math.abs(dx) > 40) go(cur + (dx < 0 ? 1 : -1));
        touch.current = null;
      }}
    >
      <h2 className="sr-only">Catch25 results: IIT, NIT, JEE, MHT CET, NEET and board toppers</h2>
      <div className="ps-bg" aria-hidden="true" />
      <div className="ps-outer">
        <div className="ps-frame">
          <Deco />
          {[prev, cur].map((k) =>
            k === null ? null : (
              <div
                key={`${k}-${k === cur ? "in" : "out"}`}
                className={`ps-slide ps-kind-${SHOW[k].kind} ${k === cur ? "is-active" : "is-leaving"}`}
                role="group"
                aria-roledescription="slide"
                aria-label={`${k + 1} of ${n}: ${SHOW[k].title}`}
                aria-hidden={k !== cur}
              >
                <SlideBody s={SHOW[k]} active={k === cur} />
              </div>
            )
          )}
          <button onClick={() => go(cur - 1)} aria-label="Previous slide" className="ps-nav ps-nav-l">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 6l-6 6 6 6" /></svg>
          </button>
          <button onClick={() => go(cur + 1)} aria-label="Next slide" className="ps-nav ps-nav-r">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg>
          </button>
        </div>
      </div>

      <div className="ps-progress" aria-hidden="true">
        <span key={`${cur}-${playing}`} style={playing ? { animation: `psprog ${secs}s linear forwards` } : { width: "100%" }} />
      </div>

      {/* Section tabs + controls */}
      <div className="wrap relative z-[2] flex items-center gap-3 py-3">
        <button
          onClick={() => setUserPaused((v) => !v)}
          aria-label={userPaused ? "Play slideshow" : "Pause slideshow"}
          className="grid h-9 w-9 flex-none place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
        >
          {userPaused || reduced ? (
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true"><path d="M7 5l12 7-12 7z" /></svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true"><path d="M6 5h4v14H6zM14 5h4v14h-4z" /></svg>
          )}
        </button>
        <div className="flex min-w-0 flex-1 gap-1.5 overflow-x-auto" role="tablist" aria-label="Jump to section">
          {SECTIONS.map((k) => (
            <button
              key={k}
              role="tab"
              aria-selected={curSection === k}
              onClick={() => go(sectionStart(k))}
              className={`whitespace-nowrap rounded-full px-3.5 py-1.5 text-[.82rem] font-extrabold transition ${curSection === k ? "bg-[#E3B341] text-[#050C33]" : "bg-white/10 text-white/80 hover:bg-white/20"}`}
            >
              {k}
            </button>
          ))}
        </div>
        <span className="hidden flex-none text-[.82rem] font-bold text-white/70 sm:inline" style={{ fontVariantNumeric: "tabular-nums" }}>
          {String(cur + 1).padStart(2, "0")} / {n}
        </span>
        <Link href="/results" className="hidden flex-none rounded-full bg-[#FFC83D] px-4 py-2 text-[.82rem] font-extrabold text-[#06103F] md:inline-block">All results</Link>
      </div>
    </section>
  );
}
