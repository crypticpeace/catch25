import Link from "next/link";
import type { ReactNode } from "react";
import { SITE } from "@/data/site";
import { Doodle } from "./Doodle";
import { Icon, WhatsAppIcon } from "./Icon";
import { EnquiryForm } from "./EnquiryForm";
import { MumbaiMap } from "./MumbaiMap";
import { BRANCHES } from "@/data/branches";

export function SectionHead({ eyebrow, title, lead, center = false, as: As = "h2", children }: { eyebrow: string; title: ReactNode; lead?: ReactNode; center?: boolean; as?: "h1" | "h2"; children?: ReactNode }) {
  return (
    <div className={`mb-11 grid max-w-[760px] gap-3.5 ${center ? "mx-auto justify-items-center text-center" : ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <As>{title}</As>
      {lead && <p className="lead">{lead}</p>}
      {children}
    </div>
  );
}

export function PageHero({ eyebrow, title, lead, crumbs, children }: { eyebrow: string; title: ReactNode; lead: ReactNode; crumbs: { name: string; href?: string }[]; children?: ReactNode }) {
  return (
    <section className="hide-sm-doodle relative overflow-hidden bg-mist" style={{ paddingBlock: "clamp(48px,7vw,84px)" }}>
      <Doodle kind="atom" tone="sky" className="animate-float-slow" style={{ width: 110, right: "6%", top: "18%" }} />
      <Doodle kind="squiggle" tone="red" style={{ width: 110, right: "22%", bottom: "16%" }} />
      <Doodle kind="tri" tone="sun" className="animate-float" style={{ width: 46, right: "12%", bottom: "22%" }} />
      <div className="wrap relative z-[1]">
        <div className="grid max-w-[780px] gap-4">
          <nav aria-label="Breadcrumb" className="flex flex-wrap gap-2 text-[.85rem] font-bold text-muted">
            <Link href="/" className="text-navy">Home</Link>
            {crumbs.map((c) => (
              <span key={c.name} className="flex gap-2"><span>/</span>{c.href ? <Link href={c.href} className="text-navy">{c.name}</Link> : <span>{c.name}</span>}</span>
            ))}
          </nav>
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p className="lead">{lead}</p>
          {children}
        </div>
      </div>
    </section>
  );
}

export function Faq({ items }: { items: [string, string][] }) {
  return (
    <div className="mx-auto grid max-w-[860px] gap-3">
      {items.map(([q, a]) => (
        <details key={q} className="faq-item">
          <summary>{q}</summary>
          <p>{a}</p>
        </details>
      ))}
    </div>
  );
}

export function EnquirySection({ title = "Book a free counselling session", sub = "Share a few details and our admissions team will call you back to suggest the right batch, timings and scholarship options.", defaultCourse, id = "enquire" }: { title?: string; sub?: string; defaultCourse?: string; id?: string }) {
  return (
    <section className="section" id={id}>
      <div className="wrap">
        <div className="relative grid gap-10 overflow-hidden rounded-[32px] bg-navy p-[clamp(26px,5vw,56px)] text-white lg:grid-cols-[.9fr_1.1fr]">
          <Doodle kind="atom" tone="sun" className="animate-float-slow opacity-25" style={{ width: 120, right: -20, top: -20 }} />
          <div className="relative z-[1] grid min-w-0 content-start gap-4">
            <span className="eyebrow !text-brand-sun">Admissions enquiry</span>
            <h2 className="!text-white">{title}</h2>
            <p className="lead !text-[#CFD0F3]">{sub}</p>
            <div className="mt-6 grid gap-3.5">
              {[
                { icon: <Icon name="phone" />, label: "Call admissions", value: SITE.phone },
                { icon: <WhatsAppIcon />, label: "WhatsApp", value: SITE.whatsappDisplay },
                { icon: <Icon name="clock" />, label: "Open", value: SITE.hours },
              ].map((c) => (
                <div key={c.label} className="grid grid-cols-[44px_1fr] items-center gap-3">
                  <span className="ico !h-11 !w-11 bg-white/10 text-white">{c.icon}</span>
                  <span><small className="block text-[.8rem] font-bold uppercase tracking-[.06em] text-[#B8B9E8]">{c.label}</small><b className="select-all text-[1.05rem]">{c.value}</b></span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative z-[1] min-w-0"><EnquiryForm defaultCourse={defaultCourse} /></div>
        </div>
      </div>
    </section>
  );
}

export function MapSection({ heading = "Find a Catch25 centre near you", detailed = false, tint = true }: { heading?: string; detailed?: boolean; tint?: boolean }) {
  return (
    <section className={`section ${tint ? "bg-mist" : ""}`} id="centres">
      <div className="wrap">
        <SectionHead eyebrow="Our centres in Mumbai" title={heading} lead={`Five centres across Mumbai: ${BRANCHES.map((b) => b.name).join(", ").replace(/, ([^,]*)$/, " and $1")}. Hover or tap a pin to see the address and directions.`} />
        <MumbaiMap detailed={detailed} />
      </div>
    </section>
  );
}

export function CtaBand({ title, text, primary, secondary }: { title: string; text: string; primary: { label: string; href: string }; secondary?: { label: string; href: string } }) {
  return (
    <section className="section bg-mist">
      <div className="wrap">
        <div className="relative flex flex-wrap items-center justify-between gap-6 overflow-hidden rounded-[28px] bg-brand-sun p-[clamp(26px,4vw,44px)]">
          <Doodle kind="star" tone="navy" className="animate-float" style={{ width: 44, right: "22%", top: 14 }} />
          <div className="relative z-[1] grid gap-2"><h2 className="text-[clamp(1.5rem,3vw,2.1rem)]">{title}</h2><p>{text}</p></div>
          <div className="relative z-[1] flex flex-wrap gap-3.5">
            <Link className="btn btn-navy" href={primary.href}>{primary.label}</Link>
            {secondary && <Link className="btn btn-white" href={secondary.href}>{secondary.label}</Link>}
          </div>
        </div>
      </div>
    </section>
  );
}

export function FeatureCard({ icon, tone, title, children }: { icon: string; tone: "sky" | "blush" | "sun" | "mint"; title: string; children: ReactNode }) {
  const tones = { sky: "bg-brand-sky text-navy", blush: "bg-brand-blush text-brand-red", sun: "bg-[#FFEDB8] text-[#8A5B00]", mint: "bg-brand-mint text-[#11724A]" };
  return (
    <div className="card">
      <span className={`ico ${tones[tone]}`}><Icon name={icon} /></span>
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}
