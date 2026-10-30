import Link from "next/link";
import { CtaBand, SectionHead } from "@/components/Blocks";
import { Doodle } from "@/components/Doodle";
import { JsonLd } from "@/components/JsonLd";
import { Podium } from "@/components/Results";
import { ResultsExplorer, YearSummary } from "@/components/ResultsExplorer";
import { ADMISSIONS, HIGHLIGHTS } from "@/data/results";
import { crumbsLd, meta } from "@/lib/seo";

export const metadata = meta({
  title: "Catch25 Results 2026 | NEET, JEE Main, MHT CET & HSC Toppers",
  absoluteTitle: true,
  description: "Catch25 Science Academy results 2026: NEET 582 (GMC Solapur), MHT CET 99.82 percentile (SPIT), JEE Main 99.72 percentile (NIT Rourkela) and HSC 94.17%. Toppers from Mumbai.",
  path: "/results",
  keywords: ["Catch25 results 2026", "NEET toppers Mumbai", "MHT CET toppers Mumbai", "JEE Main toppers Mumbai coaching", "HSC toppers Mumbai"],
});

export default function Results() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy text-white" style={{ paddingBlock: "clamp(56px,8vw,96px)" }}>
        <Doodle kind="star" tone="sun" className="animate-float" style={{ width: 50, right: "8%", top: "16%" }} />
        <Doodle kind="atom" tone="sky" className="animate-float-slow opacity-40" style={{ width: 120, left: -30, bottom: "10%" }} />
        <Doodle kind="squiggle" tone="sun" className="opacity-60" style={{ width: 120, right: "14%", bottom: "30%" }} />
        <div className="wrap relative z-[1]">
          <nav aria-label="Breadcrumb" className="flex gap-2 text-[.85rem] font-bold text-[#B8B9E8]"><Link href="/" className="text-white">Home</Link><span>/</span><span>Results</span></nav>
          <div className="mt-4 grid max-w-[760px] gap-4">
            <span className="eyebrow !text-brand-sun">Catch25 Results 2026</span>
            <h1 className="!text-white">Results that small batches make possible</h1>
            <p className="lead !text-[#CFD0F3]">NEET, JEE Main, MHT CET and HSC board toppers from Catch25 Science Academy, Mumbai.</p>
          </div>
          <Podium />
          <div className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {HIGHLIGHTS.map((h) => (
              <div key={h.label} className="rounded-[18px] bg-white/10 p-5">
                <b className="block font-display text-[2rem] font-extrabold leading-none text-brand-sun">{h.value}</b>
                <span className="mt-1.5 block text-[.9rem] text-[#CFD0F3]">{h.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ResultsExplorer />

      <section className="section">
        <div className="wrap">
          <SectionHead eyebrow="Admissions" title="Where our students study" lead="IIT, NIT and IIIT admissions of Catch25 students, alongside the colleges listed with each result above." />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {ADMISSIONS.map((a) => (
              <div key={a.name} className="flex items-center justify-between gap-3 rounded-[16px] border border-line bg-white px-4 py-3.5">
                <div><b className="block font-display text-[1.05rem] text-navy">{a.college}</b><span className="text-[.9rem] text-muted">{a.name}</span></div>
                <span className="pill">{a.type === "Other" ? "Top college" : a.type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-mist">
        <div className="wrap">
          <SectionHead eyebrow="Summary" title="Results at a glance" lead="Toppers listed and the top result in each exam, by year." />
          <YearSummary />
          <p className="mt-3.5 text-[.88rem] text-muted">Results are published with the consent of each student and parent.</p>
        </div>
      </section>

      <CtaBand title="Want to see your name here next year?" text="Book a free counselling session and find the right batch for JEE, NEET or MHT CET." primary={{ label: "Book counselling", href: "/contact" }} secondary={{ label: "Scholarship test", href: "/scholarships" }} />
      <JsonLd data={crumbsLd([{ name: "Results", path: "/results" }])} />
    </>
  );
}
