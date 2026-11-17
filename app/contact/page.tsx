import { EnquirySection, MapSection, PageHero } from "@/components/Blocks";
import { Icon, WhatsAppIcon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { SITE, waLink } from "@/data/site";
import { allBranchesLd, crumbsLd, meta } from "@/lib/seo";

export const metadata = meta({
  title: "Contact Catch25 Science Academy | Admissions in Mumbai",
  absoluteTitle: true,
  description: "Contact Catch25 Science Academy for JEE, NEET and MHT CET admissions. Call +91 88980 08898, WhatsApp +91 86570 91821 or visit our five centres in Mumbai.",
  path: "/contact",
  keywords: ["Catch25 contact number", "Catch25 admission enquiry", "coaching class contact Mumbai", "JEE NEET admission Mumbai"],
});

export default function Contact() {
  const cards = [
    { icon: <Icon name="phone" />, tone: "bg-brand-sky text-navy", title: "Call admissions", value: SITE.phone, note: <>Also: <span className="select-all font-bold text-ink">{SITE.phone2}</span><br />{SITE.hours}</> },
    { icon: <WhatsAppIcon />, tone: "bg-brand-mint text-[#11724A]", title: "WhatsApp", value: SITE.whatsappDisplay, note: <a className="font-extrabold text-navy underline" href={waLink()} target="_blank" rel="noopener">Start a chat</a> },
    { icon: <Icon name="mail" />, tone: "bg-brand-blush text-brand-red", title: "Email", value: SITE.email, note: "We reply within one working day." },
  ];
  return (
    <>
      <PageHero eyebrow="Contact" title="Talk to the Catch25 admissions team" lead="Call, WhatsApp or send an enquiry. Our counsellors help you choose the right course, batch timing and scholarship." crumbs={[{ name: "Contact" }]} />
      <section className="section !pb-0">
        <div className="wrap grid gap-[22px] md:grid-cols-3">
          {cards.map((c) => (
            <div key={c.title} className="card">
              <span className={`ico ${c.tone}`}>{c.icon}</span>
              <h3>{c.title}</h3>
              <b className="select-all break-all text-ink">{c.value}</b>
              <p>{c.note}</p>
            </div>
          ))}
        </div>
      </section>
      <EnquirySection title="Send an admissions enquiry" />
      <MapSection />
      <JsonLd data={[crumbsLd([{ name: "Contact", path: "/contact" }]), ...allBranchesLd()]} />
    </>
  );
}
