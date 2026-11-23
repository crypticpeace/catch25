import { PageHero } from "@/components/Blocks";
import { SITE } from "@/data/site";
import { meta } from "@/lib/seo";

export const metadata = meta({ title: "Terms of Use", description: `Terms of use for the ${SITE.name} website.`, path: "/terms" });

export default function Terms() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of use" lead={`Terms for using the ${SITE.name} website.`} crumbs={[{ name: "Terms of use" }]} />
      <section className="section">
        <div className="wrap prose-c25">
          <h2>About this website</h2>
          <p>This website is operated by {SITE.legalName}. It provides information about our courses, centres, results and admissions.</p>
          <h2>Accuracy of information</h2>
          <p>We keep course details, timings and exam information up to date, but they may change. Exam dates, patterns and eligibility are set by the conducting bodies (NTA and the Maharashtra State CET Cell); always confirm them on the official websites.</p>
          <h2>Fees and admission</h2>
          <p>Fees, scholarships, instalments and refund terms are confirmed in writing at the time of admission. Information on this website does not form an offer of admission.</p>
          <h2>Intellectual property</h2>
          <p>The Catch25 name and logo are registered trademarks. Content on this website may not be copied or reused without permission.</p>
          <h2>Contact</h2>
          <p>Questions about these terms can be sent to {SITE.email}.</p>
        </div>
      </section>
    </>
  );
}
