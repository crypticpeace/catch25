import Link from "next/link";
import { notFound } from "next/navigation";
import { EnquirySection, Faq, PageHero, SectionHead } from "@/components/Blocks";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { MumbaiMap } from "@/components/MumbaiMap";
import { AREAS } from "@/data/areas";
import { BRANCHES, getBranch } from "@/data/branches";
import { COURSES } from "@/data/courses";
import { SITE, waLink } from "@/data/site";
import { branchLd, crumbsLd, faqLd, meta } from "@/lib/seo";

export const dynamicParams = false;
export const generateStaticParams = () => BRANCHES.map((b) => ({ slug: b.slug }));

export function generateMetadata({ params }: { params: { slug: string } }) {
  const b = getBranch(params.slug);
  if (!b) return {};
  return meta({
    title: `JEE, NEET & MHT CET Coaching in ${b.name} | Catch25 ${b.tag}`,
    absoluteTitle: true,
    description: `Catch25 Science Academy, ${b.name}: ${b.address}. IIT JEE, NEET, MHT CET and Class 11-12 Science coaching, open ${b.hours}.`,
    path: `/branches/${b.slug}`,
    keywords: [`JEE coaching ${b.name}`, `NEET coaching ${b.name}`, `MHT CET classes ${b.name}`, `coaching classes ${b.name}`, `Catch25 ${b.name}`],
  });
}

export default function BranchPage({ params }: { params: { slug: string } }) {
  const b = getBranch(params.slug);
  if (!b) notFound();
  const nearby = AREAS.filter((a) => a.nearest === b.slug);
  const faqs: [string, string][] = [
    [`Where is the Catch25 ${b.name} centre?`, `${b.address}. Landmark: ${b.landmark}.`],
    [`What are the timings at ${b.name}?`, `The centre is open ${SITE.hours}, including the study area.`],
    [`Which courses are taught at ${b.name}?`, `IIT JEE (Main and Advanced), NEET UG, MHT CET and Class 11-12 Science board coaching.`],
    ["How do I book a visit or demo class?", `Call ${SITE.phone}, WhatsApp ${SITE.whatsappDisplay} or use the enquiry form on this page.`],
  ];
  return (
    <>
      <PageHero eyebrow={`Catch25 ${b.tag}`} title={`JEE, NEET and MHT CET coaching in ${b.name}`} lead={`Small-batch coaching for Class 11, Class 12 and repeater students in ${b.name}, ${b.landmark.charAt(0).toLowerCase() + b.landmark.slice(1)}.`} crumbs={[{ name: "Branches", href: "/branches" }, { name: b.name }]}>
        <div className="flex flex-wrap gap-3.5">
          <a className="btn btn-navy" href={b.maps} target="_blank" rel="noopener">Get directions</a>
          <a className="btn btn-wa" href={waLink(`Hi Catch25, I want to visit the ${b.name} centre.`)} target="_blank" rel="noopener">WhatsApp this centre</a>
        </div>
      </PageHero>

      <section className="section">
        <div className="wrap grid items-start gap-12 md:grid-cols-[.9fr_1.1fr]">
          <div className="grid min-w-0 gap-4">
            <SectionHead eyebrow="Centre details" title={`Catch25 ${b.name}`} />
            {[["pin", "Address", b.address], ["train", "Nearest station", b.station], ["pin", "Landmark", b.landmark], ["clock", "Open", SITE.hours], ["phone", "Phone", b.phone]].map(([i, k, v]) => (
              <div key={k} className="grid grid-cols-[40px_1fr] items-start gap-3">
                <span className="ico !h-10 !w-10 bg-brand-sky text-navy"><Icon name={i} /></span>
                <span><small className="block text-[.78rem] font-bold uppercase tracking-[.08em] text-muted">{k}</small><b className="select-all">{v}</b></span>
              </div>
            ))}
            <div className="mt-2"><b>Facilities</b><div className="mt-2 flex flex-wrap gap-2">{[b.classrooms, ...b.facilities].filter(Boolean).map((f) => <span key={f} className="pill">{f}</span>)}</div></div>
          </div>
          <div className="min-w-0"><MumbaiMap only={b.slug} hideList /></div>
        </div>
      </section>

      <section className="section bg-mist">
        <div className="wrap">
          <SectionHead eyebrow="Courses at this centre" title={`Courses at ${b.name}`} />
          <div className="grid gap-[22px] sm:grid-cols-2 lg:grid-cols-4">
            {COURSES.map((c) => (
              <Link key={c.slug} href={`/courses/${c.slug}`} className="card hover:shadow-card"><h3>{c.name}</h3><p>{c.summary}</p></Link>
            ))}
          </div>
          {nearby.length > 0 && (
            <div className="mt-10">
              <h3 className="mb-3">Students at this centre travel from</h3>
              <div className="flex flex-wrap gap-2">{nearby.map((a) => <Link key={a.slug} href={`/coaching/${a.slug}`} className="rounded-full border border-line bg-white px-3.5 py-2 text-[.88rem] font-bold hover:border-navy">{a.name}</Link>)}</div>
            </div>
          )}
        </div>
      </section>

      <section className="section"><div className="wrap"><SectionHead center eyebrow="FAQ" title={`About the ${b.name} centre`} /><Faq items={faqs} /></div></section>
      <EnquirySection title={`Visit Catch25 ${b.name}`} />
      <JsonLd data={[branchLd(b), faqLd(faqs), crumbsLd([{ name: "Branches", path: "/branches" }, { name: b.name, path: `/branches/${b.slug}` }])]} />
    </>
  );
}
