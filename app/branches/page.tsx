import Link from "next/link";
import { EnquirySection, MapSection, PageHero, SectionHead } from "@/components/Blocks";
import { JsonLd } from "@/components/JsonLd";
import { AREAS } from "@/data/areas";
import { BRANCHES } from "@/data/branches";
import { SCHOOLS } from "@/data/site";
import { allBranchesLd, crumbsLd, meta } from "@/lib/seo";

export const metadata = meta({
  title: "Catch25 Branches | Coaching Centres across Mumbai",
  absoluteTitle: true,
  description: "Catch25 Science Academy has five centres in Mumbai: Borivali West, Kandivali West, Kandivali East, Andheri West and Vile Parle East. Find addresses, directions and timings.",
  path: "/branches",
  keywords: ["coaching classes Mumbai", "JEE NEET coaching Andheri West", "coaching classes Vile Parle East", "JEE coaching near Mumbai station", "Catch25 Mumbai address", "Catch25 Mumbai"],
});

export default function Branches() {
  return (
    <>
      <PageHero eyebrow="Branches" title="Catch25 centres across Mumbai" lead="Five centres across Mumbai: Borivali West, Kandivali West, Kandivali East, Andheri West and Vile Parle East. Each is close to a Western line station." crumbs={[{ name: "Branches" }]} />
      <MapSection detailed tint={false} heading="Hover a pin to explore our centres" />

      <section className="section bg-mist">
        <div className="wrap">
          <SectionHead eyebrow="Nearby areas" title="Coaching for students across the western suburbs" lead="Most Catch25 students travel from within a few stations on the Western line." />
          <div className="mb-8 flex flex-wrap gap-2">
            {AREAS.map((a) => <Link key={a.slug} href={`/coaching/${a.slug}`} className="rounded-full border border-line bg-white px-3.5 py-2 text-[.88rem] font-bold hover:border-navy">Coaching in {a.name}</Link>)}
          </div>
          <div className="card"><h3>Schools our students come from</h3><p>{SCHOOLS.join(", ")}.</p></div>
        </div>
      </section>

      <EnquirySection title="Visit a centre this week" />
      <JsonLd data={[crumbsLd([{ name: "Branches", path: "/branches" }]), ...allBranchesLd()]} />
    </>
  );
}
