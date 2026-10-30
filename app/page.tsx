import Link from "next/link";
import { CourseTabs } from "@/components/CourseTabs";
import { ResultsShow } from "@/components/ResultsShow";
import { GoalPicker } from "@/components/GoalPicker";
import { Doodle, Underline } from "@/components/Doodle";
import { EnquirySection, Faq, FeatureCard, MapSection, SectionHead } from "@/components/Blocks";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { Avatar, ResultsRail, SampleFlag } from "@/components/Results";
import { TESTIMONIALS } from "@/data/testimonials";
import { HOME_FAQ } from "@/data/faq";
import { EXAM_LABEL, EXAM_SUB, examKeysWithResults } from "@/data/results";
import { POSTS } from "@/data/blog";
import { EXAMS } from "@/data/exams";
import { SITE } from "@/data/site";
import { allBranchesLd, faqLd, meta } from "@/lib/seo";

export const metadata = meta({
  title: "Catch25 Science Academy | JEE, NEET & MHT CET Coaching in Mumbai",
  absoluteTitle: true,
  description: "IIT JEE, NEET, MHT CET and Class 11-12 Science coaching in Mumbai. Small batches, one-to-one doubt solving and weekly tests since 2013.",
  path: "/",
  keywords: ["JEE coaching in Mumbai", "NEET coaching in Mumbai", "MHT CET classes Mumbai", "IIT JEE coaching Mumbai", "NEET classes Mumbai", "11th 12th science classes Mumbai", "best coaching classes in Mumbai", "Catch25 Science Academy"],
});

export default function Home() {
  return (
    <>
      {/* Results slideshow: the opener */}
      <ResultsShow />
      <GoalPicker />

      {/* Intro */}
      <section className="hide-sm-doodle relative overflow-hidden border-b border-line" style={{ paddingBlock: "clamp(40px,6vw,72px)" }}>
        <Doodle kind="star" tone="sun" className="animate-float" style={{ width: 34, right: "4%", top: 28 }} />
        <Doodle kind="squiggle" tone="sky" style={{ width: 110, left: "1%", bottom: 18 }} />
        <div className="wrap relative z-[1] grid items-center gap-10 lg:grid-cols-[1.15fr_.85fr]">
          <div className="grid min-w-0 gap-5">
            <span className="eyebrow">JEE · NEET · MHT CET · Class 11-12 Science</span>
            <h1 className="text-[clamp(2rem,4.2vw,3.1rem)]">
              Small batches. <span className="relative whitespace-nowrap">Big ranks.<Underline /></span> Coaching in Mumbai.
            </h1>
            <p className="lead">
              Catch25 Science Academy started in {SITE.founded} with one idea: a batch small enough for every teacher to know every student. Since then we have guided {SITE.studentsGuided} students through IIT JEE, NEET and MHT CET preparation.
            </p>
            <div className="flex flex-wrap items-center gap-3.5">
              <Link className="btn btn-sun" href="/contact">Book free counselling</Link>
              <Link className="btn btn-ghost" href="/results">See all results</Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[[String(SITE.founded), "Founded in Mumbai"], [SITE.studentsGuided, "Students guided"], ["500+", "In top engineering colleges"], ["500+", "In top medical colleges"]].map(([n, l], k) => (
              <div key={l} className={`rounded-[20px] p-5 ${k === 0 ? "bg-navy text-white" : "bg-mist"}`}>
                <b className={`block font-display text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold leading-tight ${k === 0 ? "text-white" : "text-navy"}`} style={{ fontVariantNumeric: "tabular-nums" }}>{n}</b>
                <span className={`text-[.92rem] font-semibold ${k === 0 ? "text-navy-soft" : "text-muted"}`}>{l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="section hide-sm-doodle">
        <div className="wrap relative">
          <Doodle kind="loop" tone="red" style={{ width: 100, right: "4%", top: 0 }} />
          <SectionHead center eyebrow="Why Catch25" title="What a small batch changes for your child" lead="Large coaching batches of a hundred or more leave doubts unsolved. At Catch25 the teacher notices who is falling behind, and acts on it." />
          <div className="grid gap-[22px] sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard icon="users" tone="sky" title="Small batches">Built around the batch-of-25 idea, so every student gets questions answered in class.</FeatureCard>
            <FeatureCard icon="chat" tone="blush" title="One-to-one doubts">Dedicated doubt-solving time with faculty, outside lecture hours, every day of the week.</FeatureCard>
            <FeatureCard icon="test" tone="sun" title="Sunday tests">A JEE, NEET or CET pattern test every Sunday, with a performance report for parents.</FeatureCard>
            <FeatureCard icon="book" tone="mint" title="Library and study area">A quiet place to self-study from 7 am to 8 pm, among motivated peers.</FeatureCard>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="section bg-mist" id="courses">
        <div className="wrap">
          <SectionHead eyebrow="Courses" title="JEE, NEET, MHT CET and Class 11-12 coaching" lead="Every programme runs offline at all five Catch25 centres in Mumbai, for CBSE, ICSE and Maharashtra State Board students." />
          <CourseTabs />
        </div>
      </section>

      {/* Results */}
      <section className="section">
        <div className="wrap">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div className="grid max-w-[760px] gap-3.5">
              <span className="eyebrow">Results</span>
              <h2>Our toppers</h2>
              <p className="lead">2026 results from Catch25 students in JEE Main, NEET, MHT CET and HSC boards.</p>
              <div><SampleFlag /></div>
            </div>
            <Link className="btn btn-navy" href="/results">View all results</Link>
          </div>
          <ResultsRail />
          <div className="mt-7 grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:grid-cols-5">
            {examKeysWithResults().map((k) => (
              <Link key={k} href={`/results#${k}`} className="grid gap-1 rounded-[18px] border border-line bg-white p-[18px] hover:border-navy">
                <b className="font-display text-[1.05rem]">{EXAM_LABEL[k]}</b><span className="text-[.85rem] text-muted">{EXAM_SUB[k]}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <MapSection />

      {/* Founder */}
      <section className="section">
        <div className="wrap grid items-center gap-14 md:grid-cols-2">
          <div className="relative mx-auto aspect-square w-full max-w-[460px]">
            <div className="hex absolute inset-[6%] grid place-items-center bg-brand-sky">
              <span className="font-display text-[clamp(4rem,9vw,6rem)] font-extrabold text-navy">SP</span>
            </div>
            <Doodle kind="spark" tone="red" className="animate-float" style={{ width: 60, left: 0, top: "4%" }} />
            <div className="absolute bottom-[6%] right-0 z-[2] grid max-w-[220px] gap-1 rounded-[18px] bg-white p-4 shadow-lift">
              <span className="ico !h-10 !w-10 bg-[#FFEDB8] text-[#8A5B00]"><Icon name="trophy" /></span>
              <b className="font-display leading-tight text-navy">{SITE.award}</b>
              <span className="text-[.8rem] text-muted">Catch25 students</span>
            </div>
          </div>
          <div className="grid min-w-0 gap-[18px]">
            <span className="eyebrow">From the founder</span>
            <h2>Prof. Saurabh Patel</h2>
            <p className="font-display text-[clamp(1.3rem,2.4vw,1.7rem)] font-semibold leading-snug">&ldquo;In batches of a hundred, nobody notices the student who stopped asking questions. I started Catch25 so that every student would be noticed.&rdquo;</p>
            <p className="text-muted">M.Tech (University of Mumbai) with 15+ years of teaching and 3 years of industry experience. A former professor at D.J. Sanghvi College of Engineering and Bhagubhai Mafatlal Polytechnic, he started Catch25 in 2013 with a first batch of 16 students.</p>
            <div className="flex flex-wrap gap-3.5"><Link className="btn btn-ghost" href="/about">Read our story</Link><Link className="btn btn-ghost" href="/faculty">Meet the faculty</Link></div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="wrap">
          <SectionHead center eyebrow="Student voices" title="What our students say" lead="In their own words, from Catch25 students now in medical and engineering colleges." />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((t, k) => (
              <figure key={t.name} className="relative grid content-between gap-5 rounded-[22px] border border-line bg-white p-6">
                <span aria-hidden="true" className="absolute right-5 top-1 font-display text-[4.5rem] leading-none text-brand-sun">&ldquo;</span>
                <blockquote className="relative text-[.98rem] text-ink">
                  {t.quote.split(/\[\[(.+?)\]\]/).map((part, j) =>
                    j % 2 ? <mark key={j} className="whitespace-nowrap rounded bg-brand-cream px-1 font-bold text-navy">{part}</mark> : part
                  )}
                </blockquote>
                {t.mentions && (
                  <p className="relative -mt-2 flex flex-wrap items-center gap-1.5 text-[.78rem] font-bold text-muted">
                    <span>Mentions</span>
                    {t.mentions.map((m) => <span key={m} className="pill !py-1 !text-[.76rem]">{m}</span>)}
                  </p>
                )}
                <figcaption className="flex items-center gap-3">
                  <Avatar name={t.name} i={k} size={52} />
                  <span><b className="block text-[.95rem]">{t.name}</b><small className="text-muted">{t.detail}</small></span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Exam guides + blog */}
      <section className="section bg-mist">
        <div className="wrap">
          <SectionHead eyebrow="Exam guides" title="Know your exam before you prepare for it" lead="Patterns, marking schemes, dates and preparation plans for JEE Main, NEET and MHT CET, kept up to date by our faculty." />
          <div className="grid gap-[22px] md:grid-cols-3">
            {EXAMS.map((e) => (
              <Link key={e.slug} href={`/exams/${e.slug}`} className="card transition hover:-translate-y-1 hover:shadow-card">
                <span className="pill justify-self-start">{e.conductedBy.includes("NTA") ? "NTA" : "State CET Cell"}</span>
                <h3>{e.name} guide</h3>
                <p>{e.summary.split(". ")[0]}.</p>
                <span className="inline-flex items-center gap-2 font-extrabold text-navy">Read the guide <Icon name="arrow" className="h-4 w-4" /></span>
              </Link>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
            <h3 className="text-[1.4rem]">From the Catch25 blog</h3>
            <Link href="/blog" className="font-extrabold text-navy underline">All articles</Link>
          </div>
          <div className="mt-5 grid gap-[22px] md:grid-cols-3">
            {POSTS.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="card hover:shadow-card">
                <span className="text-[.78rem] font-extrabold uppercase tracking-[.1em] text-brand-red">{p.category} · {p.readMins} min read</span>
                <h3 className="text-[1.1rem]">{p.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="wrap">
          <SectionHead center eyebrow="FAQ" title="Questions parents ask us" />
          <Faq items={HOME_FAQ} />
          <p className="mt-6 text-center"><Link href="/faq" className="font-extrabold text-navy underline">See all questions</Link></p>
        </div>
      </section>

      <EnquirySection />
      <JsonLd data={[faqLd(HOME_FAQ), ...allBranchesLd()]} />
    </>
  );
}
