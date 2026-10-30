import Link from "next/link";
import { EnquirySection, FeatureCard, PageHero, SectionHead } from "@/components/Blocks";
import { JsonLd } from "@/components/JsonLd";
import { Avatar } from "@/components/Results";
import { LEADERSHIP } from "@/data/faculty";
import { SITE } from "@/data/site";
import { crumbsLd, meta } from "@/lib/seo";

export const metadata = meta({
  title: "About Catch25 Science Academy | Coaching Institute in Mumbai since 2013",
  absoluteTitle: true,
  description: "Founded in 2013 by Prof. Saurabh Patel, Catch25 Science Academy in Mumbai has guided 10,000+ JEE, NEET and MHT CET students with small batches and personal attention.",
  path: "/about",
  keywords: ["about Catch25", "Catch25 Science Academy founder", "Saurabh Patel Catch25", "coaching institute Mumbai"],
});

const TIMELINE = [
  ["2013", "Catch25 opens in Mumbai with a first batch of 16 students."],
  ["2019", `Catch25 students win ${SITE.award.replace(", ", " at the ")}.`],
  ["Growing", "Catch25 grows to five centres across Mumbai: Borivali West, Kandivali West, Kandivali East, Andheri West and Vile Parle East."],
  ["Today", `${SITE.studentsGuided} students guided and ${SITE.enrolledNow} currently enrolled.`],
];

export default function About() {
  return (
    <>
      <PageHero eyebrow="About Catch25" title="Founded on the idea of a batch of 25" lead="Catch25 Science Academy has prepared students for JEE, NEET and MHT CET in Mumbai's western suburbs since 2013, with small batches and teachers who know every student by name." crumbs={[{ name: "About" }]} />

      <section className="section">
        <div className="wrap grid items-start gap-14 md:grid-cols-2">
          <div className="grid min-w-0 gap-[18px]">
            <span className="eyebrow">Our story</span>
            <h2>Why we started</h2>
            <p>Prof. Saurabh Patel, a former professor at D.J. Sanghvi College of Engineering and Bhagubhai Mafatlal Polytechnic, watched students struggle in coaching batches of a hundred or more, where doubts went unsolved and no one noticed who was falling behind.</p>
            <p>In 2013 he founded Catch25 Science Academy in Mumbai, with a first batch of just 16 students and the idea that gave the academy its name: batches of 25, small enough for every teacher to know every student.</p>
            <p>That focus on small batches and personal attention remains at the heart of Catch25 today, which has since guided more than 10,000 students through JEE, NEET and MHT CET preparation.</p>
          </div>
          <div className="grid gap-[18px] rounded-[28px] bg-mist p-[clamp(22px,4vw,40px)]">
            <span className="font-hand text-[1.6rem] font-bold leading-none text-brand-red">how we got here</span>
            <ol className="ml-3 border-l-[3px] border-dashed border-line">
              {TIMELINE.map(([t, d], i) => (
                <li key={t} className={`relative grid gap-1.5 pl-8 ${i < TIMELINE.length - 1 ? "pb-8" : ""}`}>
                  <span className="hex-sm absolute -left-[12px] top-0.5 h-5 w-[22px] bg-brand-red" />
                  <b className="font-display text-[1.3rem] text-navy">{t}</b>
                  <p className="text-muted">{d}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section bg-mist">
        <div className="wrap">
          <SectionHead eyebrow="Leadership" title="The people behind Catch25" />
          <div className="grid gap-[22px] md:grid-cols-2">
            {LEADERSHIP.map((p, i) => (
              <div key={p.name} className="card !grid-cols-[auto_1fr] items-start !gap-5">
                <Avatar name={p.name} i={i} size={96} />
                <div className="grid gap-2">
                  <h3>{p.name}</h3>
                  <span className="pill justify-self-start">{p.role}</span>
                  <p><b className="text-ink">{p.qualification}</b>{p.experience ? `. ${p.experience}.` : "."} {p.bio}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6"><Link href="/faculty" className="font-extrabold text-navy underline">Meet our faculty</Link></p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead center eyebrow="How we teach" title="What makes Catch25 different" lead="Compared with large institutes, Catch25 is built for attention: smaller rooms, more questions answered, and teachers who track each student's progress." />
          <div className="grid gap-[22px] sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard icon="seat" tone="sky" title="Small batch size">Every student is seen, heard and tracked by name in each class.</FeatureCard>
            <FeatureCard icon="chat" tone="blush" title="One-to-one doubt solving">Faculty are available for individual doubts outside lecture hours.</FeatureCard>
            <FeatureCard icon="chart" tone="sun" title="Performance reports">Weekly Sunday tests with reports that parents can read and act on.</FeatureCard>
            <FeatureCard icon="book" tone="mint" title="Library and study area">Students can study at the centre from 7 am to 8 pm, seven days a week.</FeatureCard>
            <FeatureCard icon="users" tone="sky" title="Mentoring and PTMs">Personal mentoring plus regular parent-teacher meetings through the year.</FeatureCard>
            <FeatureCard icon="medal" tone="blush" title="Competitive environment">Motivated peers and regular rankings push every student to do their best.</FeatureCard>
          </div>
        </div>
      </section>

      <section className="section bg-mist">
        <div className="wrap grid items-center gap-14 md:grid-cols-2">
          <div className="grid min-w-0 gap-[18px]">
            <span className="eyebrow">Our centres</span>
            <h2>Facilities at our centres</h2>
            <p className="text-muted">Every Catch25 centre is built for small batches and focused study. Our largest centre has 9 air-conditioned classrooms seating 450 students.</p>
            <ul className="ticks"><li>Air-conditioned classrooms with smart boards</li><li>Library and dedicated self-study area</li><li>CCTV-monitored premises</li><li>Open Monday to Sunday, 7 am to 8 pm</li></ul>
            <div><Link className="btn btn-navy" href="/branches">See our centres on the map</Link></div>
          </div>
          <div className="grid grid-cols-2 gap-3.5">
            {[["9", "AC classrooms"], ["450", "seats"], ["13 hrs", "open daily"], ["7", "days a week"]].map(([n, l]) => (
              <div key={l} className="card text-center"><b className="font-display text-[2.4rem] text-navy">{n}</b><span className="text-muted">{l}</span></div>
            ))}
          </div>
        </div>
      </section>

      <EnquirySection title="Visit Catch25 and meet our faculty" />
      <JsonLd data={crumbsLd([{ name: "About", path: "/about" }])} />
    </>
  );
}
