import Link from "next/link";
import { notFound } from "next/navigation";
import { EnquirySection, Faq, PageHero, SectionHead } from "@/components/Blocks";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { ResultsRail, SampleFlag } from "@/components/Results";
import { COURSES, INCLUDED, getCourse } from "@/data/courses";
import { getExam } from "@/data/exams";
import { RESULTS } from "@/data/results";
import { BRANCHES } from "@/data/branches";
import { SITE } from "@/data/site";
import { crumbsLd, faqLd, meta } from "@/lib/seo";

export const dynamicParams = false;
export const generateStaticParams = () => COURSES.map((c) => ({ slug: c.slug }));

export function generateMetadata({ params }: { params: { slug: string } }) {
  const c = getCourse(params.slug);
  if (!c) return {};
  return meta({ title: c.metaTitle, absoluteTitle: true, description: c.metaDesc, path: `/courses/${c.slug}`, keywords: c.keywords });
}

export default function CoursePage({ params }: { params: { slug: string } }) {
  const c = getCourse(params.slug);
  if (!c) notFound();
  const exam = c.examGuide ? getExam(c.examGuide) : undefined;
  const results = RESULTS.filter((r) => c.resultKeys.includes(r.exam)).slice(0, 8);
  const defaultCourse = { jee: "IIT JEE (Main + Advanced)", neet: "NEET UG", "mht-cet": "MHT CET", "class-11-12": "Class 11 Science (Boards)" }[c.slug];

  return (
    <>
      <PageHero eyebrow={c.name} title={c.h1} lead={c.summary} crumbs={[{ name: "Courses", href: "/courses" }, { name: c.name }]}>
        <div className="flex flex-wrap gap-2">{c.boards.map((b) => <span key={b} className="pill !bg-white">{b}</span>)}<span className="pill !bg-brand-blush !text-[#B00D15]">Offline · Mumbai</span></div>
        <div className="flex flex-wrap gap-3.5"><a href="#enquire" className="btn btn-sun">Ask about this course</a>{exam && <Link href={`/exams/${exam.slug}`} className="btn btn-ghost">{exam.name} exam guide</Link>}</div>
      </PageHero>

      <section className="section">
        <div className="wrap grid items-start gap-14 md:grid-cols-[1.1fr_.9fr]">
          <div className="grid min-w-0 gap-4">
            <span className="eyebrow">About the course</span>
            <h2>How we prepare students for {c.name}</h2>
            {c.intro.map((p) => <p key={p.slice(0, 20)} className="text-[1.04rem] text-[#33334F]">{p}</p>)}
            <div className="mt-2 flex flex-wrap gap-2"><b className="mr-1">Subjects:</b>{c.subjects.map((s) => <span key={s} className="pill">{s}</span>)}</div>
          </div>
          <div className="grid gap-3.5 rounded-[26px] bg-mist p-[clamp(20px,3vw,32px)]">
            <h3>Course at a glance</h3>
            {[["calendar", "Schedule", "Daily classes, test every Sunday"], ["pin", "Centres", BRANCHES.map((b) => b.name).join(" and ")], ["clock", "Timings", SITE.hours], ["users", "Batch", "Small batches built on the batch-of-25 idea"], ["test", "Fees", "Shared at counselling, instalments available"]].map(([i, k, v]) => (
              <div key={k} className="grid grid-cols-[40px_1fr] items-center gap-3">
                <span className="ico !h-10 !w-10 bg-white text-navy"><Icon name={i} /></span>
                <span><small className="block text-[.78rem] font-bold uppercase tracking-[.08em] text-muted">{k}</small><b>{v}</b></span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-mist">
        <div className="wrap">
          <SectionHead eyebrow="Programmes" title={`${c.name} programmes`} />
          <div className="grid gap-[22px] md:grid-cols-3">
            {c.programmes.map((p, i) => (
              <div key={p.title} className="card">
                <span className="hex-sm grid h-10 w-11 place-items-center bg-navy font-display font-extrabold text-white">{i + 1}</span>
                <h3>{p.title}</h3>
                <span className="pill justify-self-start">{p.who}</span>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid items-start gap-14 md:grid-cols-2">
          <div className="min-w-0">
            <SectionHead eyebrow="Teaching approach" title="What students do differently here" />
            <div className="grid gap-4">
              {c.approach.map((a) => (
                <div key={a.title} className="grid grid-cols-[28px_1fr] gap-3">
                  <Icon name="check" className="mt-1 h-6 w-6 text-brand-red" />
                  <div><b className="text-[1.05rem]">{a.title}</b><p className="text-muted">{a.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid min-w-0 gap-4 rounded-[26px] border border-line p-[clamp(20px,3vw,32px)]">
            <h3>Included in the course</h3>
            <ul className="ticks">{INCLUDED.map((x) => <li key={x}>{x}</li>)}</ul>
          </div>
        </div>
      </section>

      {results.length > 0 && (
        <section className="section bg-mist">
          <div className="wrap">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <div className="grid gap-3"><span className="eyebrow">Results</span><h2>{c.name} results</h2><div><SampleFlag /></div></div>
              <Link href={`/results#${c.resultKeys[0]}`} className="btn btn-navy">All {c.name} results</Link>
            </div>
            <ResultsRail items={results} />
          </div>
        </section>
      )}

      <section className="section">
        <div className="wrap">
          <SectionHead center eyebrow="FAQ" title={`${c.name} coaching questions`} />
          <Faq items={c.faqs} />
        </div>
      </section>

      <EnquirySection title={`Enquire about ${c.name} coaching`} defaultCourse={defaultCourse} />
      <JsonLd data={[
        crumbsLd([{ name: "Courses", path: "/courses" }, { name: c.name, path: `/courses/${c.slug}` }]),
        faqLd(c.faqs),
        { "@context": "https://schema.org", "@type": "Course", name: `${c.name} coaching`, description: c.metaDesc, provider: { "@id": `${SITE.url}/#org` },
          hasCourseInstance: c.programmes.map((p) => ({ "@type": "CourseInstance", name: p.title, courseMode: "onsite", location: BRANCHES.map((b) => b.address).join(" | ") })) },
      ]} />
    </>
  );
}
