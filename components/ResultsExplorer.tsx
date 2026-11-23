"use client";

import { useEffect, useMemo, useState } from "react";
import { EXAM_LABEL, EXAM_SUB, RESULTS, examKeysWithResults, type ExamKey } from "@/data/results";
import { ResultCard } from "./Results";

const PAGE = 24;

export function ResultsExplorer() {
  const KEYS = useMemo(examKeysWithResults, []);
  const [exam, setExam] = useState<ExamKey | "all">("all");
  const [year, setYear] = useState<string>("all");
  const [shown, setShown] = useState(PAGE);
  const years = useMemo(() => {
    const ys = Array.from(new Set(RESULTS.filter((r) => r.year).map((r) => String(r.year)))).sort().reverse();
    return RESULTS.some((r) => !r.year) ? [...ys, "past"] : ys;
  }, []);

  /* Deep link: /results#neet opens the NEET filter */
  useEffect(() => {
    const h = window.location.hash.replace("#", "") as ExamKey;
    if (KEYS.includes(h)) setExam(h);
  }, [KEYS]);
  useEffect(() => setShown(PAGE), [exam, year]);

  const list = RESULTS.filter(
    (r) => (exam === "all" || r.exam === exam) && (year === "all" || (year === "past" ? !r.year : String(r.year) === year))
  );

  const pick = (k: ExamKey) => {
    setExam(k);
    document.getElementById("all-results")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className="section">
        <div className="wrap">
          <div className="mb-8 grid gap-3.5"><span className="eyebrow">Browse by exam</span><h2>Results by category</h2></div>
          <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:grid-cols-5">
            {KEYS.map((k) => (
              <button key={k} onClick={() => pick(k)} className={`grid gap-1 rounded-[18px] border bg-white p-[18px] text-left transition hover:border-navy ${exam === k ? "border-navy ring-2 ring-navy/20" : "border-line"}`}>
                <b className="font-display text-[1.05rem]">{EXAM_LABEL[k]}</b>
                <span className="text-[.85rem] text-muted">{EXAM_SUB[k]}</span>
                <span className="text-[.78rem] font-bold text-navy">{RESULTS.filter((r) => r.exam === k).length} toppers listed</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-mist" id="all-results">
        <div className="wrap">
          <div className="mb-7 flex flex-wrap items-center justify-between gap-3.5">
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by exam">
              <button className="tab" aria-selected={exam === "all"} onClick={() => setExam("all")}>All</button>
              {KEYS.map((k) => (
                <button key={k} className="tab" aria-selected={exam === k} onClick={() => setExam(k)}>{EXAM_LABEL[k].replace(" UG", "")}</button>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <label htmlFor="resYear" className="text-[.9rem] font-bold text-muted">Year</label>
              <select id="resYear" value={year} onChange={(e) => setYear(e.target.value)} className="rounded-full border-2 border-line bg-white px-4 py-2.5 font-bold">
                <option value="all">All years</option>
                {years.map((y) => <option key={y} value={y}>{y === "past" ? "Past toppers" : y}</option>)}
              </select>
              <span className="pill whitespace-nowrap">{list.length} {list.length === 1 ? "result" : "results"}</span>
            </div>
          </div>
          {list.length ? (
            <>
              <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))" }}>
                {list.slice(0, shown).map((r, i) => <ResultCard key={r.name + r.exam + (r.year ?? "p")} r={r} i={i} />)}
              </div>
              {shown < list.length && (
                <div className="mt-8 text-center">
                  <button className="btn btn-navy" onClick={() => setShown((s) => s + PAGE)}>Show more results ({list.length - shown} more)</button>
                </div>
              )}
            </>
          ) : (
            <div className="rounded-[20px] border-2 border-dashed border-line p-10 text-center text-muted">No results listed for this selection yet.</div>
          )}
        </div>
      </section>
    </>
  );
}

export function YearSummary() {
  const KEYS = examKeysWithResults();
  const groups = Array.from(new Set(RESULTS.map((r) => r.year ?? 0))).sort((a, b) => b - a);
  const rows = groups.flatMap((y) =>
    KEYS.map((k) => {
      const l = RESULTS.filter((r) => (r.year ?? 0) === y && r.exam === k);
      return l.length ? { y, k, n: l.length, top: l[0] } : null;
    }).filter(Boolean) as { y: number; k: ExamKey; n: number; top: (typeof RESULTS)[number] }[]
  );
  return (
    <div className="overflow-x-auto rounded-[18px] border border-line bg-white">
      <table className="data-table">
        <thead><tr><th>Year</th><th>Exam</th><th>Toppers listed</th><th>Top result</th></tr></thead>
        <tbody>
          {rows.map((r) => (
            <tr key={`${r.y}-${r.k}`}>
              <td>{r.y || "Past"}</td><td>{EXAM_LABEL[r.k]}</td><td>{r.n}</td>
              <td><b>{r.top.score}{r.top.unit ? ` ${r.top.unit}` : ""}</b> ({r.top.name}{r.top.college ? `, ${r.top.college}` : ""})</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
