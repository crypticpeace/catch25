"use client";

import Link from "next/link";
import { useState } from "react";
import { COURSES } from "@/data/courses";

export function CourseTabs() {
  const [active, setActive] = useState(COURSES[0].slug);
  return (
    <div>
      <div className="mb-7 flex flex-wrap gap-2" role="tablist" aria-label="Courses">
        {COURSES.map((c) => (
          <button key={c.slug} role="tab" id={`t-${c.slug}`} aria-controls={`p-${c.slug}`} aria-selected={active === c.slug} className="tab" onClick={() => setActive(c.slug)}>
            {c.tab}
          </button>
        ))}
      </div>
      {COURSES.map((c) => (
        <div key={c.slug} role="tabpanel" id={`p-${c.slug}`} aria-labelledby={`t-${c.slug}`} hidden={active !== c.slug} className="grid gap-7 rounded-[26px] border border-line bg-white p-[clamp(22px,4vw,40px)] md:grid-cols-[1.2fr_.8fr]">
          <div className="grid min-w-0 content-start gap-4">
            <div className="flex flex-wrap gap-2">
              {c.boards.map((b) => <span key={b} className="pill">{b}</span>)}
              <span className="pill !bg-brand-blush !text-[#B00D15]">Offline</span>
            </div>
            <h3 className="text-[1.6rem]">{c.h1.replace(" in Mumbai", "")}</h3>
            <p className="text-muted">{c.summary}</p>
            <ul className="ticks">
              <li>Daily classes with a test every Sunday</li>
              <li>Study material, books and test series included</li>
              <li>One-to-one doubt sessions and personal mentoring</li>
              <li>Performance reports and parent-teacher meetings</li>
            </ul>
            <div className="flex flex-wrap gap-3.5">
              <Link className="btn btn-navy" href={`/courses/${c.slug}`}>View course details</Link>
              <Link className="btn btn-ghost" href="/contact">Ask about fees</Link>
            </div>
          </div>
          <div className="grid min-w-0 content-start gap-3">
            {c.programmes.map((p, i) => (
              <div key={p.title} className="grid grid-cols-[auto_1fr] items-center gap-3.5 rounded-[14px] bg-mist px-4 py-3.5">
                <span className="hex-sm grid h-10 w-11 place-items-center bg-navy font-display text-[.9rem] font-extrabold text-white">{i + 1}</span>
                <span><b className="block">{p.title}</b><small className="text-muted">{p.who}</small></span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
