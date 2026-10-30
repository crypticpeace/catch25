import { EnquirySection, Faq, FeatureCard, PageHero, SectionHead } from "@/components/Blocks";
import { JsonLd } from "@/components/JsonLd";
import { crumbsLd, faqLd, meta } from "@/lib/seo";

export const metadata = meta({
  title: "Catch25 Scholarship Test | JEE, NEET & MHT CET Scholarships in Mumbai",
  absoluteTitle: true,
  description: "Reduce your course fee with the Catch25 Scholarship Test or your Class 10 board marks. Scholarships for JEE, NEET and MHT CET programmes in Mumbai.",
  path: "/scholarships",
  keywords: ["Catch25 scholarship test", "JEE scholarship test Mumbai", "NEET scholarship Mumbai", "coaching scholarship Mumbai", "merit scholarship 11th science Mumbai"],
});

const FAQS: [string, string][] = [
  ["Who can take the Catch25 Scholarship Test?", "Students in Class 10 or Class 11, and 12th-pass students joining the Repeater batch, can take the test for JEE, NEET and MHT CET programmes."],
  ["Is there a fee for the scholarship test?", "The test fee and dates are announced on this page and shared by our counsellors. Contact admissions for the current schedule."],
  ["Can the scholarship be combined with instalments?", "Yes. The scholarship reduces the course fee, and the remaining amount can be paid in instalments."],
  ["Can I take the test more than once?", "Ask our counsellors. Re-test rules depend on the session and programme."],
];

export default function Scholarships() {
  return (
    <>
      <PageHero eyebrow="Scholarships" title="Scholarships for JEE, NEET and MHT CET aspirants" lead="Catch25 offers fee scholarships through its own scholarship test and on board-exam marks, so a good student is not held back by fees." crumbs={[{ name: "Scholarships" }]}>
        <div><a href="#register" className="btn btn-sun">Register for the test</a></div>
      </PageHero>

      <section className="section">
        <div className="wrap">
          <SectionHead eyebrow="Ways to earn a scholarship" title="Three routes to a lower fee" />
          <div className="grid gap-[22px] md:grid-cols-3">
            <FeatureCard icon="test" tone="sun" title="Catch25 Scholarship Test">An objective test in Physics, Chemistry and Mathematics or Biology. Your score decides the scholarship on your course fee.</FeatureCard>
            <FeatureCard icon="cap" tone="sky" title="Board marks scholarship">Students with high Class 10 board marks (SSC, CBSE or ICSE) qualify for a merit scholarship on admission.</FeatureCard>
            <FeatureCard icon="trophy" tone="blush" title="Olympiad and competition achievers">Students with strong results in science Olympiads or national competitions can apply for special consideration.</FeatureCard>
          </div>
          <p className="mt-6 rounded-2xl bg-brand-cream p-4 text-[.92rem] text-[#5A4500]">Scholarship percentages, test dates and fee are confirmed by the admissions team and updated on this page each session.</p>
        </div>
      </section>

      <section className="section bg-mist">
        <div className="wrap">
          <SectionHead eyebrow="How it works" title="From registration to admission" />
          <ol className="grid gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
            {[["Register", "Fill the form below or message us on WhatsApp to book a test slot."], ["Take the test", "Appear at your nearest Catch25 centre on the scheduled date."], ["Get your result", "Your result and scholarship percentage are shared after the test."], ["Counselling and admission", "Meet a counsellor, choose your batch and confirm admission with the scholarship applied."]].map(([t, d], i) => (
              <li key={t} className="grid gap-2 rounded-[20px] border border-line bg-white p-[22px]">
                <span className="hex-sm grid h-[38px] w-[42px] place-items-center bg-brand-sun font-display font-extrabold">{i + 1}</span>
                <h3>{t}</h3>
                <p className="text-[.95rem] text-muted">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid items-start gap-14 md:grid-cols-2">
          <div className="grid min-w-0 gap-4">
            <span className="eyebrow">Test pattern</span>
            <h2>What the test covers</h2>
            <div className="overflow-x-auto rounded-[18px] border border-line bg-white">
              <table className="data-table !min-w-0">
                <thead><tr><th>Joining</th><th>Subjects</th><th>Syllabus</th></tr></thead>
                <tbody>
                  <tr><td>Class 11 (JEE / CET)</td><td>Physics, Chemistry, Maths</td><td>Class 9-10 Science and Maths</td></tr>
                  <tr><td>Class 11 (NEET)</td><td>Physics, Chemistry, Biology</td><td>Class 9-10 Science</td></tr>
                  <tr><td>Class 12 / Repeater</td><td>PCM or PCB</td><td>Class 11 syllabus</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="grid min-w-0 gap-4"><span className="eyebrow">FAQ</span><h2>Scholarship questions</h2><Faq items={FAQS} /></div>
        </div>
      </section>

      <EnquirySection id="register" title="Register for the scholarship test" sub="Choose Scholarship test in the form and our team will confirm your slot, test centre and date." defaultCourse="Scholarship test" />
      <JsonLd data={[crumbsLd([{ name: "Scholarships", path: "/scholarships" }]), faqLd(FAQS)]} />
    </>
  );
}
