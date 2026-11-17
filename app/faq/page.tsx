import { EnquirySection, Faq, PageHero } from "@/components/Blocks";
import { JsonLd } from "@/components/JsonLd";
import { FAQ_GROUPS } from "@/data/faq";
import { crumbsLd, faqLd, meta } from "@/lib/seo";

export const metadata = meta({
  title: "FAQ | Admissions, Fees, Batches & Timings at Catch25",
  description: "Answers to common questions about Catch25 Science Academy admissions, fees, scholarships, batch sizes, tests and centre timings in Mumbai.",
  path: "/faq",
  keywords: ["Catch25 FAQ", "coaching class admission Mumbai", "JEE NEET coaching fees Mumbai", "Catch25 timings"],
});

export default function FaqPage() {
  return (
    <>
      <PageHero eyebrow="FAQ" title="Questions students and parents ask" lead="Admissions, fees, scholarships, teaching and centre timings, answered." crumbs={[{ name: "FAQ" }]}>
        <nav className="flex flex-wrap gap-2" aria-label="FAQ sections">
          {FAQ_GROUPS.map((g) => <a key={g.title} href={`#${g.title.toLowerCase().replace(/\W+/g, "-")}`} className="pill !bg-white">{g.title}</a>)}
        </nav>
      </PageHero>
      {FAQ_GROUPS.map((g, i) => (
        <section key={g.title} id={g.title.toLowerCase().replace(/\W+/g, "-")} className={`section ${i % 2 ? "bg-mist" : ""}`}>
          <div className="wrap">
            <h2 className="mx-auto mb-8 max-w-[860px] text-[1.8rem]">{g.title}</h2>
            <Faq items={g.items} />
          </div>
        </section>
      ))}
      <EnquirySection title="Still have a question?" sub="Send it with the form and a counsellor will call you back." />
      <JsonLd data={[faqLd(FAQ_GROUPS.flatMap((g) => g.items)), crumbsLd([{ name: "FAQ", path: "/faq" }])]} />
    </>
  );
}
