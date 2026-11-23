import { FeatureCard, PageHero, SectionHead } from "@/components/Blocks";
import { JsonLd } from "@/components/JsonLd";
import { SITE } from "@/data/site";
import { crumbsLd, meta } from "@/lib/seo";

export const metadata = meta({
  title: "Careers | Teach Physics, Chemistry, Maths or Biology at Catch25",
  description: "Join Catch25 Science Academy in Mumbai as a Physics, Chemistry, Mathematics or Biology faculty member for JEE, NEET and MHT CET batches.",
  path: "/careers",
  keywords: ["teaching jobs Mumbai", "JEE faculty jobs Mumbai", "NEET faculty jobs Mumbai", "coaching teacher vacancy Mumbai"],
});

const ROLES = [
  ["Physics faculty", "JEE, NEET and CET batches"],
  ["Chemistry faculty", "JEE, NEET and CET batches"],
  ["Mathematics faculty", "JEE and CET batches"],
  ["Biology faculty", "NEET and CET (PCB) batches"],
  ["Academic counsellor", "Admissions and parent communication"],
];

export default function Careers() {
  return (
    <>
      <PageHero eyebrow="Careers" title="Teach at Catch25" lead="We look for teachers who explain from first principles and enjoy knowing every student in the room." crumbs={[{ name: "Careers" }]} />
      <section className="section">
        <div className="wrap">
          <SectionHead eyebrow="Why teach here" title="Small batches are better for teachers too" />
          <div className="grid gap-[22px] sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard icon="users" tone="sky" title="Teach, not lecture">Small batches mean you can see who is following and adjust as you teach.</FeatureCard>
            <FeatureCard icon="chart" tone="sun" title="See your impact">Weekly tests show how your students improve, chapter by chapter.</FeatureCard>
            <FeatureCard icon="pin" tone="mint" title="Western suburbs">Centres in Mumbai, each close to a Western line station.</FeatureCard>
          </div>
        </div>
      </section>
      <section className="section bg-mist">
        <div className="wrap grid items-start gap-14 md:grid-cols-2">
          <div className="grid min-w-0 gap-4">
            <span className="eyebrow">Roles we hire for</span>
            <h2>Open to applications</h2>
            <div className="grid gap-3">
              {ROLES.map(([r, d]) => <div key={r} className="flex flex-wrap items-center justify-between gap-2 rounded-[14px] bg-white px-5 py-4"><b>{r}</b><span className="text-[.9rem] text-muted">{d}</span></div>)}
            </div>
          </div>
          <div className="grid min-w-0 gap-4 rounded-[26px] bg-white p-[clamp(20px,3vw,32px)]">
            <h3>How to apply</h3>
            <p className="text-muted">Email your CV with the subject and exams you teach, years of experience and a short note on how you explain a difficult topic.</p>
            <p className="select-all break-all rounded-xl bg-mist px-4 py-3 font-bold">{SITE.email}</p>
            <p className="text-[.9rem] text-muted">Shortlisted candidates are invited for a demo lecture at one of our centres.</p>
          </div>
        </div>
      </section>
      <JsonLd data={crumbsLd([{ name: "Careers", path: "/careers" }])} />
    </>
  );
}
