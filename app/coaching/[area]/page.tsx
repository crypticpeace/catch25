import Link from "next/link";
import { notFound } from "next/navigation";
import { EnquirySection, Faq, FeatureCard, PageHero, SectionHead } from "@/components/Blocks";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { MumbaiMap } from "@/components/MumbaiMap";
import { ResultsRail, SampleFlag } from "@/components/Results";
import { AREAS, WESTERN_LINE, getArea } from "@/data/areas";
import { getBranch } from "@/data/branches";
import { COURSES } from "@/data/courses";
import { SITE, waLink } from "@/data/site";
import { crumbsLd, faqLd, meta } from "@/lib/seo";

export const dynamicParams = false;
export const generateStaticParams = () => AREAS.map((a) => ({ area: a.slug }));

export function generateMetadata({ params }: { params: { area: string } }) {
  const a = getArea(params.area);
  if (!a) return {};
  return meta({
    title: `JEE, NEET & MHT CET Coaching in ${a.name}, Mumbai | Catch25`,
    absoluteTitle: true,
    description: `Small-batch IIT JEE, NEET, MHT CET and Class 11-12 Science coaching for students in ${a.name}. ${a.note}`,
    path: `/coaching/${a.slug}`,
    keywords: [`JEE coaching in ${a.name}`, `NEET coaching in ${a.name}`, `MHT CET classes in ${a.name}`, `11th 12th science classes ${a.name}`, `best coaching classes near ${a.name}`],
  });
}

function journey(areaName: string, centreArea: string) {
  const from = WESTERN_LINE.indexOf(areaName), to = WESTERN_LINE.indexOf(centreArea);
  if (from < 0 || to < 0 || from === to) return null;
  const stops = from < to ? WESTERN_LINE.slice(from, to + 1) : WESTERN_LINE.slice(to, from + 1).reverse();
  return stops;
}

export default function AreaPage({ params }: { params: { area: string } }) {
  const a = getArea(params.area);
  if (!a) notFound();
  const b = getBranch(a.nearest)!;
  const stops = journey(a.name, b.name.replace(/ (West|East)$/, ""));
  const faqs: [string, string][] = [
    [`Is there a Catch25 centre near ${a.name}?`, a.stationsAway === 0 ? `Yes. Our ${b.name} centre is in ${a.name}: ${b.address}.` : `The nearest centre is Catch25 ${b.name}, ${a.stationsAway} ${a.stationsAway === 1 ? "station" : "stations"} ${a.direction === "north" ? "south" : "north"} of ${a.name} on the Western line. Address: ${b.address}.`],
    [`Which courses can students from ${a.name} join?`, "IIT JEE (Main and Advanced), NEET UG, MHT CET and Class 11-12 Science for HSC, CBSE and ICSE boards, in Two-Year, One-Year and Repeater formats."],
    ["What are the class timings?", `The ${b.name} centre: ${b.hours}. Batch timings are planned around school and college hours.`],
    [`How do ${a.name} students book a demo class?`, `Call ${SITE.phone}, message ${SITE.whatsappDisplay} on WhatsApp, or fill the enquiry form on this page.`],
  ];

  return (
    <>
      <PageHero eyebrow={`Coaching near ${a.name}`} title={`JEE, NEET and MHT CET coaching for students in ${a.name}`} lead={a.note} crumbs={[{ name: "Branches", href: "/branches" }, { name: a.name }]}>
        <div className="flex flex-wrap gap-3.5">
          <a href="#enquire" className="btn btn-sun">Book free counselling</a>
          <a href={waLink(`Hi Catch25, I live in ${a.name} and want to know about admissions.`)} target="_blank" rel="noopener" className="btn btn-ghost">WhatsApp us</a>
        </div>
      </PageHero>

      <section className="section">
        <div className="wrap grid items-start gap-12 md:grid-cols-[.9fr_1.1fr]">
          <div className="grid min-w-0 gap-5">
            <SectionHead eyebrow="Your nearest centre" title={`Catch25 ${b.name}`} />
            <p className="text-muted">{b.address}</p>
            {stops ? (
              <div className="rounded-[22px] bg-mist p-5">
                <b className="mb-3 flex items-center gap-2"><Icon name="train" className="h-5 w-5 text-navy" /> By Western line: {a.stationsAway} {a.stationsAway === 1 ? "station" : "stations"}</b>
                <ol className="flex flex-wrap items-center gap-1.5 text-[.88rem] font-bold">
                  {stops.map((s, i) => (
                    <li key={s} className="flex items-center gap-1.5">
                      <span className={`rounded-full px-2.5 py-1 ${i === 0 ? "bg-brand-sun" : i === stops.length - 1 ? "bg-navy text-white" : "bg-white"}`}>{s}</span>
                      {i < stops.length - 1 && <span aria-hidden="true" className="text-muted">→</span>}
                    </li>
                  ))}
                </ol>
              </div>
            ) : (
              <p className="rounded-[22px] bg-mist p-5 font-bold">The centre is in {a.name}, near {b.landmark}.</p>
            )}
            <div className="flex flex-wrap gap-3.5"><a className="btn btn-navy" href={b.maps} target="_blank" rel="noopener">Get directions</a><Link className="btn btn-ghost" href={`/branches/${b.slug}`}>Centre details</Link></div>
          </div>
          <div className="min-w-0"><MumbaiMap hideList /></div>
        </div>
      </section>

      <section className="section bg-mist">
        <div className="wrap">
          <SectionHead eyebrow={`Why ${a.name} families choose Catch25`} title="Small batches worth the journey" />
          <div className="grid gap-[22px] sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard icon="users" tone="sky" title="Small batches">Built on the batch-of-25 idea, so every student is known by name.</FeatureCard>
            <FeatureCard icon="chat" tone="blush" title="One-to-one doubts">Doubt sessions with faculty outside lecture hours, every day.</FeatureCard>
            <FeatureCard icon="test" tone="sun" title="Sunday tests">A JEE, NEET or CET pattern test every week, with reports for parents.</FeatureCard>
            <FeatureCard icon="book" tone="mint" title="Study at the centre">Library and study area open 7 am to 8 pm, so travel time is not wasted.</FeatureCard>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead eyebrow="Courses" title={`Courses for ${a.name} students`} />
          <div className="grid gap-[22px] sm:grid-cols-2 lg:grid-cols-4">
            {COURSES.map((c) => <Link key={c.slug} href={`/courses/${c.slug}`} className="card hover:shadow-card"><h3>{c.name}</h3><p>{c.summary}</p></Link>)}
          </div>
          <div className="mt-12 mb-6 flex flex-wrap items-end justify-between gap-4"><div className="grid gap-2"><h3 className="text-[1.4rem]">Recent Catch25 results</h3><div><SampleFlag /></div></div><Link href="/results" className="font-extrabold text-navy underline">All results</Link></div>
          <ResultsRail />
        </div>
      </section>

      <section className="section bg-mist"><div className="wrap"><SectionHead center eyebrow="FAQ" title={`Coaching near ${a.name}: common questions`} /><Faq items={faqs} /></div></section>
      <EnquirySection title={`Enquire from ${a.name}`} />
      <JsonLd data={[faqLd(faqs), crumbsLd([{ name: "Branches", path: "/branches" }, { name: `Coaching in ${a.name}`, path: `/coaching/${a.slug}` }])]} />
    </>
  );
}
