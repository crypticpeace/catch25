import Link from "next/link";
import { CtaBand, PageHero } from "@/components/Blocks";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { EXAMS, REVIEWED } from "@/data/exams";
import { crumbsLd, meta } from "@/lib/seo";

export const metadata = meta({
  title: "JEE Main, NEET & MHT CET Exam Guides | Dates, Pattern, Marking",
  description: "Exam guides for JEE Main, NEET UG and MHT CET: dates, paper pattern, marking scheme, eligibility and preparation tips from Catch25 faculty.",
  path: "/exams",
  keywords: ["JEE Main exam pattern", "NEET exam pattern", "MHT CET exam pattern", "entrance exam dates 2027"],
});

export default function Exams() {
  return (
    <>
      <PageHero eyebrow="Exam guides" title="JEE Main, NEET and MHT CET exam guides" lead={`Dates, paper patterns, marking schemes and preparation tips, reviewed by Catch25 faculty. Last reviewed ${REVIEWED}.`} crumbs={[{ name: "Exam guides" }]} />
      <section className="section">
        <div className="wrap grid gap-[22px] md:grid-cols-3">
          {EXAMS.map((e) => (
            <Link key={e.slug} href={`/exams/${e.slug}`} className="card !gap-4 transition hover:-translate-y-1 hover:shadow-card">
              <span className="pill justify-self-start">{e.conductedBy}</span>
              <h2 className="text-[1.6rem]">{e.name}</h2>
              <p>{e.summary}</p>
              <dl className="grid grid-cols-2 gap-2 text-[.88rem]">
                {e.facts.slice(2, 6).map(([k, v]) => <div key={k}><dt className="text-muted">{k}</dt><dd className="font-bold">{v}</dd></div>)}
              </dl>
              <span className="inline-flex items-center gap-2 font-extrabold text-navy">Read the {e.name} guide <Icon name="arrow" className="h-4 w-4" /></span>
            </Link>
          ))}
        </div>
      </section>
      <CtaBand title="Preparing for one of these exams?" text="Our counsellors can suggest the right programme and batch for your target exam." primary={{ label: "Book free counselling", href: "/contact" }} secondary={{ label: "View courses", href: "/courses" }} />
      <JsonLd data={crumbsLd([{ name: "Exam guides", path: "/exams" }])} />
    </>
  );
}
