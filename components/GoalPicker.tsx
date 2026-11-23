"use client";

/**
 * "Select your goal" picker, shown under the homepage slideshow.
 * Goal → class → centre, then opens WhatsApp with the choices prefilled.
 */
import { useState } from "react";
import { BRANCHES } from "@/data/branches";
import { waLink } from "@/data/site";
import { WhatsAppIcon } from "./Icon";
import { Doodle, Underline } from "./Doodle";

type Goal = { key: string; label: string; sub: string; exam: string; tint: string; art: JSX.Element };

const Doctor = (
  <svg viewBox="0 0 120 120" aria-hidden="true" className="h-full w-full">
    <path d="M22 116c4-22 20-32 38-32s34 10 38 32z" fill="#FFFFFF" />
    <path d="M48 86l12 16 12-16" fill="#CDEBFF" />
    <path d="M36 100c6 6 14 8 20 6" fill="none" stroke="#2E2A84" strokeWidth="3" strokeLinecap="round" />
    <circle cx="56" cy="106" r="4" fill="#2E2A84" />
    <path d="M30 62c0-24 13-38 30-38s30 14 30 38c0 10-4 18-8 22H38c-4-4-8-12-8-22z" fill="#1E1B5E" />
    <ellipse cx="60" cy="62" rx="20" ry="23" fill="#F3B98C" />
    <path d="M40 54c4-12 12-18 20-18s16 6 20 18c-8-6-30-6-40 0z" fill="#1E1B5E" />
    <rect x="38" y="40" width="44" height="7" rx="3.5" fill="#2E2A84" />
    <circle cx="60" cy="43" r="7" fill="#FFC83D" stroke="#fff" strokeWidth="2" />
    <circle cx="52" cy="62" r="2.4" fill="#1B1A3A" /><circle cx="68" cy="62" r="2.4" fill="#1B1A3A" />
    <path d="M53 72c4 4 10 4 14 0" fill="none" stroke="#C2410C" strokeWidth="2.4" strokeLinecap="round" />
  </svg>
);
const Engineer = (
  <svg viewBox="0 0 120 120" aria-hidden="true" className="h-full w-full">
    <path d="M22 116c4-22 20-32 38-32s34 10 38 32z" fill="#2E2A84" />
    <path d="M50 86l10 12 10-12" fill="#CDEBFF" />
    <rect x="44" y="96" width="5" height="20" fill="#FFC83D" /><rect x="71" y="96" width="5" height="20" fill="#FFC83D" />
    <ellipse cx="60" cy="64" rx="20" ry="23" fill="#E8A97A" />
    <path d="M36 52c0-14 11-24 24-24s24 10 24 24z" fill="#FFC83D" />
    <rect x="32" y="50" width="56" height="7" rx="3.5" fill="#E5AB1C" />
    <rect x="57" y="28" width="6" height="22" rx="3" fill="#E5AB1C" />
    <circle cx="52" cy="66" r="2.4" fill="#1B1A3A" /><circle cx="68" cy="66" r="2.4" fill="#1B1A3A" />
    <path d="M53 76c4 4 10 4 14 0" fill="none" stroke="#9A3412" strokeWidth="2.4" strokeLinecap="round" />
  </svg>
);
const Boards = (
  <svg viewBox="0 0 120 120" aria-hidden="true" className="h-full w-full">
    <rect x="30" y="66" width="60" height="12" rx="3" fill="#2E2A84" />
    <rect x="34" y="54" width="52" height="12" rx="3" fill="#E1141E" />
    <rect x="28" y="78" width="64" height="12" rx="3" fill="#FFC83D" />
    <path d="M38 60h30M36 84h40M40 72h34" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" opacity=".8" />
    <path d="M60 22l30 12-30 12-30-12z" fill="#1E1B5E" />
    <path d="M44 40v8c8 6 24 6 32 0v-8" fill="#1E1B5E" />
    <path d="M88 34v14" stroke="#FFC83D" strokeWidth="3" strokeLinecap="round" /><circle cx="88" cy="50" r="3.5" fill="#FFC83D" />
  </svg>
);

const GOALS: Goal[] = [
  { key: "doctor", label: "Doctor", sub: "NEET", exam: "NEET UG", tint: "bg-brand-sky", art: Doctor },
  { key: "engineer", label: "Engineer", sub: "JEE · MHT CET", exam: "IIT JEE / MHT CET", tint: "bg-brand-cream", art: Engineer },
  { key: "boards", label: "Class 11-12", sub: "Board exams", exam: "Class 11-12 Science (Boards)", tint: "bg-brand-mint", art: Boards },
];
const CLASSES = ["10th", "11th", "12th", "12th pass"];
const STEPS = ["Goal", "Class", "Centre"];

export function GoalPicker() {
  const [step, setStep] = useState(0);
  const [goal, setGoal] = useState<Goal | null>(null);
  const [cls, setCls] = useState<string | null>(null);
  const [centre, setCentre] = useState<string | null>(null);

  const message = (c: string | null = centre) =>
    [
      "Hi Catch25, I would like to know about admissions.",
      goal && `Goal: ${goal.label} (${goal.exam})`,
      cls && `Class: ${cls}`,
      c && `Preferred centre: ${c}`,
    ].filter(Boolean).join("\n");

  const canNext = (step === 0 && goal) || (step === 1 && cls) || (step === 2 && centre);
  const reset = () => { setStep(0); setGoal(null); setCls(null); setCentre(null); };
  const next = () => {
    if (!canNext) return;
    if (step < 2) setStep(step + 1);
    else window.open(waLink(message()), "_blank", "noopener");
  };

  const choice = (active: boolean) =>
    `rounded-full border-2 px-6 py-3 text-[1.02rem] font-extrabold transition hover:-translate-y-0.5 ${active ? "border-navy bg-navy text-white shadow-navy" : "border-navy/25 bg-white text-ink hover:border-navy"}`;

  return (
    <section className="hide-sm-doodle relative overflow-hidden border-b border-line bg-mist" aria-labelledby="goal-title" style={{ paddingBlock: "clamp(44px,6vw,80px)" }}>
      <Doodle kind="atom" tone="sky" className="animate-float-slow" style={{ width: 96, left: "4%", top: 36 }} />
      <Doodle kind="star" tone="sun" className="animate-float" style={{ width: 38, right: "8%", top: 44 }} />
      <Doodle kind="squiggle" tone="red" style={{ width: 100, right: "5%", bottom: 40 }} />
      <Doodle kind="flask" tone="navy" style={{ width: 46, left: "7%", bottom: 46 }} />

      <div className="wrap relative z-[1]">
        <div className="mx-auto mb-8 max-w-[720px] text-center">
          <span className="eyebrow mb-3">Find your course</span>
          <h2 id="goal-title">
            Select <span className="relative inline-block">your goal<Underline /></span>
          </h2>
          <p className="mt-2 font-hand text-[clamp(1.6rem,3vw,2.1rem)] font-bold leading-none text-brand-red">to explore our courses</p>
        </div>

        {/* progress */}
        <ol className="mx-auto mb-9 flex max-w-[520px] items-center" aria-label={`Step ${step + 1} of 3: ${STEPS[step]}`}>
          {STEPS.map((s, i) => (
            <li key={s} className={`flex items-center ${i < 2 ? "flex-1" : ""}`}>
              <span className="grid justify-items-center gap-1">
                <span className={`hex-sm grid h-10 w-11 place-items-center text-[.95rem] font-extrabold transition ${i < step ? "bg-brand-sun text-ink" : i === step ? "bg-navy text-white" : "bg-white text-muted ring-1 ring-line"}`}>{i < step ? "✓" : i + 1}</span>
                <small className={`text-[.78rem] font-extrabold uppercase tracking-[.1em] ${i <= step ? "text-navy" : "text-muted"}`}>{s}</small>
              </span>
              {i < 2 && (
                <span className="relative mx-2 -mt-5 h-1 flex-1 rounded-full bg-line">
                  <span className="absolute inset-y-0 left-0 rounded-full bg-brand-sun transition-all duration-500" style={{ width: i < step ? "100%" : "0%" }} />
                </span>
              )}
            </li>
          ))}
        </ol>

        <div className="mx-auto max-w-[780px]">
          {step === 0 && (
            <div className="flex flex-wrap justify-center gap-4 sm:gap-7">
              {GOALS.map((g) => (
                <button
                  key={g.key}
                  onClick={() => { setGoal(g); setStep(1); }}
                  aria-pressed={goal?.key === g.key}
                  className={`group grid w-[150px] justify-items-center gap-1.5 rounded-[22px] border-2 bg-white p-3 pb-4 transition hover:-translate-y-1 sm:w-[190px] ${goal?.key === g.key ? "border-navy shadow-navy" : "border-navy/15 hover:border-navy hover:shadow-navy"}`}
                >
                  <span className={`hex mb-1 block aspect-[1.1] w-full ${g.tint} p-2 transition group-hover:scale-[1.04]`}>{g.art}</span>
                  <b className="font-display text-[1.25rem] font-extrabold text-ink">{g.label}</b>
                  <small className="pill !py-1 !text-[.78rem]">{g.sub}</small>
                </button>
              ))}
            </div>
          )}

          {step === 1 && (
            <div className="text-center">
              <p className="mb-5 font-display text-[1.3rem] font-bold text-ink">Which class are you in?</p>
              <div className="flex flex-wrap justify-center gap-3">
                {CLASSES.map((c) => <button key={c} className={choice(cls === c)} aria-pressed={cls === c} onClick={() => setCls(c)}>{c}</button>)}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="text-center">
              <p className="mb-1 font-display text-[1.3rem] font-bold text-ink">Pick your nearest centre</p>
              <p className="mb-5 flex items-center justify-center gap-1.5 text-[.92rem] font-bold text-[#128C4B]"><WhatsAppIcon className="h-4 w-4" /> Opens WhatsApp with your details filled in</p>
              <div className="flex flex-wrap justify-center gap-3">
                {BRANCHES.map((b) => (
                  <a key={b.slug} href={waLink(message(b.name))} target="_blank" rel="noopener" className={`${choice(centre === b.name)} inline-flex items-center gap-2`} onClick={() => setCentre(b.name)}>
                    {b.name}{b.hq && <small className="rounded-full bg-brand-sun px-2 py-0.5 text-[.7rem] font-extrabold text-ink">HQ</small>}
                  </a>
                ))}
              </div>
            </div>
          )}

          {step > 0 && (
            <div className="mx-auto mt-9 flex max-w-[520px] items-center justify-between gap-3">
              <button onClick={() => (step === 1 ? reset() : setStep(step - 1))} className="btn btn-ghost !py-3">
                {step === 1 ? "Cancel" : "Back"}
              </button>
              {step < 2 ? (
                <button onClick={next} disabled={!canNext} className="btn btn-sun !py-3 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0">Next</button>
              ) : <span />}
            </div>
          )}
          {step === 2 && goal && cls && (
            <p className="mt-5 text-center text-[.92rem] font-semibold text-muted">{goal.label} ({goal.exam}) · {cls}{centre ? ` · ${centre}` : ""}</p>
          )}
        </div>
      </div>
    </section>
  );
}
