import Link from "next/link";
import { notFound } from "next/navigation";
import { EnquirySection, Faq, PageHero, SectionHead } from "@/components/Blocks";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { EXAMS, REVIEWED, getExam } from "@/data/exams";
import { getCourse } from "@/data/courses";
import { SITE } from "@/data/site";
import { crumbsLd, faqLd, meta } from "@/lib/seo";

export const dynamicParams = false;
export const generateStaticParams = () => EXAMS.map((e) => ({ slug: e.slug }));

export function generateMetadata({ params }: { params: { slug: string } }) {
  const e = getExam(params.slug);
  if (!e) return {};
  return meta({ title: e.metaTitle, absoluteTitle: true, description: e.metaDesc, path: `/exams/${e.slug}`, keywords: e.keywords });
}

export default function ExamPage({ params }: { params: { slug: string } }) {
  const e = getExam(params.slug);
  if (!e) notFound();
  const course = getCourse(e.course);
  return (
    <>
      <PageHero eyebrow={`${e.name} guide`} title={e.h1} lead={e.summary} crumbs={[{ name: "Exam guides", href: "/exams" }, { name: e.name }]}>
        <p className="text-[.88rem] font-bold text-muted">Last reviewed {REVIEWED} by Catch25 faculty · Official site: <a href={e.officialSite} target="_blank" rel="noopener" className="text-navy underline">{e.officialSite.replace("https://", "")}</a></p>
      </PageHero>

      <section className="section">
        <div className="wrap">
          <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
            {e.facts.map(([k, v]) => (
              <div key={k} className="rounded-[18px] border border-line bg-white p-5"><small className="block text-[.78rem] font-bold uppercase tracking-[.08em] text-muted">{k}</small><b className="font-display text-[1.2rem] text-navy">{v}</b></div>
            ))}
          </div>

          <div className="mt-14 grid items-start gap-14 md:grid-cols-[1.1fr_.9fr]">
            <div className="min-w-0">
              <SectionHead eyebrow="Paper pattern" title={`${e.name} exam pattern`} />
              <div className="overflow-x-auto rounded-[18px] border border-line bg-white">
                <table className="data-table">
                  <thead><tr>{e.pattern.head.map((h) => <th key={h}>{h}</th>)}</tr></thead>
                  <tbody>{e.pattern.rows.map((r) => <tr key={r[0]} className={r[0] === "Total" ? "font-extrabold" : ""}>{r.map((c, i) => <td key={i}>{c}</td>)}</tr>)}</tbody>
                </table>
              </div>
            </div>
            <div className="grid min-w-0 gap-4 rounded-[26px] bg-mist p-[clamp(20px,3vw,32px)]">
              <h3>Marking scheme</h3>
              <ul className="ticks">{e.marking.map((m) => <li key={m}>{m}</li>)}</ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-mist">
        <div className="wrap grid items-start gap-14 md:grid-cols-2">
          <div className="grid min-w-0 gap-4">
            <span className="eyebrow">Key dates</span>
            <h2>{e.dates.title}</h2>
            <p className="text-[1.04rem] text-[#33334F]">{e.dates.body}</p>
            <p className="rounded-2xl bg-brand-cream p-4 text-[.92rem] text-[#5A4500]">Always confirm dates on the official website, <a href={e.officialSite} target="_blank" rel="noopener" className="font-bold underline">{e.officialSite.replace("https://", "")}</a>.</p>
          </div>
          <div className="grid min-w-0 gap-4">
            <span className="eyebrow">Eligibility</span>
            <h2>Who can appear</h2>
            <ul className="ticks">{e.eligibility.map((x) => <li key={x}>{x}</li>)}</ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead eyebrow="Preparation" title={`How to prepare for ${e.name}`} lead="Advice from Catch25 faculty, based on how our students prepare." />
          <div className="grid gap-[22px] sm:grid-cols-2">
            {e.tips.map((t, i) => (
              <div key={t.title} className="card">
                <span className="hex-sm grid h-10 w-11 place-items-center bg-brand-sun font-display font-extrabold">{i + 1}</span>
                <h3>{t.title}</h3><p>{t.body}</p>
              </div>
            ))}
          </div>
          {course && (
            <div className="mt-10 flex flex-wrap items-center justify-between gap-5 rounded-[26px] border-2 border-navy p-[clamp(20px,3vw,32px)]">
              <div className="grid gap-1.5"><h3>Prepare for {e.name} at Catch25</h3><p className="text-muted">{course.summary} Small batches at all five Catch25 centres in Mumbai.</p></div>
              <Link href={`/courses/${course.slug}`} className="btn btn-navy">View {course.name} course <Icon name="arrow" /></Link>
            </div>
          )}
        </div>
      </section>

      <section className="section bg-mist"><div className="wrap"><SectionHead center eyebrow="FAQ" title={`${e.name} questions`} /><Faq items={e.faqs} /></div></section>
      <EnquirySection title={`Get a ${e.name} preparation plan`} sub="Tell us your class and target, and a counsellor will suggest the right batch and study plan." />
      <JsonLd data={[
        faqLd(e.faqs),
        crumbsLd([{ name: "Exam guides", path: "/exams" }, { name: e.name, path: `/exams/${e.slug}` }]),
        { "@context": "https://schema.org", "@type": "Article", headline: e.h1, description: e.metaDesc, dateModified: "2026-10-14", author: { "@id": `${SITE.url}/#org` }, publisher: { "@id": `${SITE.url}/#org` }, mainEntityOfPage: `${SITE.url}/exams/${e.slug}` },
      ]} />
    </>
  );
}
