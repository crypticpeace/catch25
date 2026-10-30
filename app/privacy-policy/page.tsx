import { PageHero } from "@/components/Blocks";
import { SITE } from "@/data/site";
import { meta } from "@/lib/seo";

export const metadata = meta({ title: "Privacy Policy", description: `How ${SITE.name} collects and uses information submitted through this website.`, path: "/privacy-policy" });

export default function Privacy() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy policy" lead={`How ${SITE.legalName} handles information you share through this website.`} crumbs={[{ name: "Privacy policy" }]} />
      <section className="section">
        <div className="wrap prose-c25">
          <h2>Information we collect</h2>
          <p>When you submit an enquiry, we collect the student&apos;s name, mobile number, course of interest, current class, preferred centre and any message you write. When you contact us on WhatsApp, the details you send are received by our admissions team.</p>
          <h2>How we use it</h2>
          <ul>
            <li>To call or message you about admissions, counselling, demo classes and scholarship tests.</li>
            <li>To recommend a suitable programme and batch.</li>
            <li>To improve our website and services.</li>
          </ul>
          <p>We do not sell or rent your information to anyone.</p>
          <h2>Student results and photographs</h2>
          <p>Student names, photographs and results appear on this website only with the written consent of a parent or guardian, or of the student if 18 or older. Consent can be withdrawn at any time by writing to us, and the details will be removed.</p>
          <h2>Cookies and analytics</h2>
          <p>This website may use analytics tools such as Google Analytics to understand how visitors use it. These tools may set cookies. You can block cookies in your browser settings.</p>
          <h2>Contact</h2>
          <p>For any privacy request, write to {SITE.email} or visit any Catch25 centre.</p>
        </div>
      </section>
    </>
  );
}
