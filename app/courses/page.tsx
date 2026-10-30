import Link from "next/link";
import { CtaBand, PageHero, SectionHead } from "@/components/Blocks";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { COURSES, INCLUDED } from "@/data/courses";
import { crumbsLd, meta } from "@/lib/seo";

export const metadata = meta({
  title: "JEE, NEET, MHT CET & 11th-12th Science Courses in Mumbai",
  description: "Two-Year Integrated, One-Year and Repeater programmes for IIT JEE and NEET, plus MHT CET and Class 11-12 Science board coaching for CBSE, ICSE and HSC students in Mumbai.",
  path: "/courses",
  keywords: ["IIT JEE coaching Mumbai", "NEET coaching Mumbai", "MHT CET classes Mumbai", "11th science classes Mumbai", "JEE dropper batch Mumbai"],
});

const MATRIX = [
  ["Class 10 student", "Two-Year Integrated (JEE, NEET or CET)"],
  ["Class 11 student", "Two-Year Integrated, or Class 11 Science (Boards)"],
  ["Class 12 student", "One-Year programme, CET with Boards, or Class 12 Science (Boards)"],
  ["12th pass", "Repeater / Dropper batch (JEE or NEET), or CET Crash Course"],
];

export default function Courses() {
  return (
    <>
      <PageHero eyebrow="Courses" title="Courses for JEE, NEET, MHT CET and Class 11-12 Science" lead="Choose the programme that fits your class and goal. Every course is taught offline in small batches at all five Catch25 centres in Mumbai." crumbs={[{ name: "Courses" }]} />

      <section className="section">
        <div className="wrap grid gap-[22px] md:grid-cols-2">
          {COURSES.map((c, i) => (
            <Link key={c.slug} href={`/courses/${c.slug}`} className="card !gap-4 transition hover:-translate-y-1 hover:shadow-card">
              <span className={`hex-sm grid h-[52px] w-[58px] place-items-center font-display font-extrabold text-navy ${["bg-brand-sky", "bg-brand-blush", "bg-brand-sun", "bg-brand-mint"][i]}`}>{c.tab.split(" ")[0]}</span>
              <h2 className="text-[1.6rem]">{c.name}</h2>
              <p>{c.summary}</p>
              <div className="flex flex-wrap gap-2">{c.programmes.map((p) => <span key={p.title} className="pill">{p.title}</span>)}</div>
              <span className="inline-flex items-center gap-2 font-extrabold text-navy">View course <Icon name="arrow" className="h-4 w-4" /></span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section bg-mist">
        <div className="wrap grid items-start gap-14 md:grid-cols-2">
          <div className="min-w-0">
            <SectionHead eyebrow="Which programme?" title="Find your programme by class" />
            <div className="overflow-x-auto rounded-[18px] border border-line bg-white">
              <table className="data-table !min-w-0"><thead><tr><th>You are</th><th>Recommended</th></tr></thead>
                <tbody>{MATRIX.map(([a, b]) => <tr key={a}><td className="font-bold">{a}</td><td>{b}</td></tr>)}</tbody></table>
            </div>
          </div>
          <div className="grid min-w-0 gap-4">
            <span className="eyebrow">In every course</span>
            <h2>What is included</h2>
            <ul className="ticks">{INCLUDED.map((x) => <li key={x}>{x}</li>)}</ul>
            <p className="rounded-2xl bg-brand-cream p-4 text-[.92rem] text-[#5A4500]">Classes run daily with a test every Sunday at every Catch25 centre. Fees and instalment options are shared at counselling.</p>
          </div>
        </div>
      </section>

      <CtaBand title="Not sure which programme fits?" text="Tell us your class, board and target exam, and a counsellor will suggest the right batch." primary={{ label: "Book free counselling", href: "/contact" }} secondary={{ label: "Scholarship test", href: "/scholarships" }} />
      <JsonLd data={crumbsLd([{ name: "Courses", path: "/courses" }])} />
    </>
  );
}
