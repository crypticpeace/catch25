import { CtaBand, PageHero, SectionHead } from "@/components/Blocks";
import { JsonLd } from "@/components/JsonLd";
import { Avatar } from "@/components/Results";
import { DEPARTMENTS, FACULTY, LEADERSHIP, type Person } from "@/data/faculty";
import { SITE } from "@/data/site";
import { crumbsLd, meta } from "@/lib/seo";

export const metadata = meta({
  title: "Faculty | Physics, Chemistry, Maths & Biology Teachers at Catch25",
  description: "Meet the Catch25 Science Academy faculty in Mumbai: experienced Physics, Chemistry, Mathematics and Biology teachers for JEE, NEET and MHT CET.",
  path: "/faculty",
  keywords: ["Catch25 faculty", "JEE teachers Mumbai", "NEET teachers Mumbai", "physics teacher Mumbai"],
});

function PersonCard({ p, i }: { p: Person; i: number }) {
  return (
    <div className="card !grid-cols-[auto_1fr] items-start !gap-5">
      <Avatar name={p.name} photo={p.photo} i={i} size={96} />
      <div className="grid gap-2">
        <h3>{p.name}</h3>
        <span className="pill justify-self-start">{p.subject ? `${p.subject} · ` : ""}{p.role}</span>
        <p><b className="text-ink">{p.qualification}</b>{p.experience ? ` · ${p.experience}` : ""}</p>
        <p>{p.bio}</p>
      </div>
    </div>
  );
}

export default function Faculty() {
  const people = [...LEADERSHIP, ...FACULTY];
  return (
    <>
      <PageHero eyebrow="Faculty" title="The teachers who know every student by name" lead="Catch25 faculty teach small batches and stay with students through doubt sessions, weekly tests and mentoring." crumbs={[{ name: "Faculty" }]} />
      <section className="section">
        <div className="wrap">
          <SectionHead eyebrow="Leadership" title="Founders" />
          <div className="grid gap-[22px] md:grid-cols-2">{LEADERSHIP.map((p, i) => <PersonCard key={p.name} p={p} i={i} />)}</div>
          {FACULTY.length > 0 && (
            <>
              <div className="mt-16"><SectionHead eyebrow="Subject faculty" title="Our teachers" /></div>
              <div className="grid gap-[22px] md:grid-cols-2">{FACULTY.map((p, i) => <PersonCard key={p.name} p={p} i={i + 2} />)}</div>
            </>
          )}
        </div>
      </section>
      <section className="section bg-mist">
        <div className="wrap">
          <SectionHead eyebrow="Departments" title="How each subject is taught" />
          <div className="grid gap-[22px] sm:grid-cols-2 lg:grid-cols-4">
            {DEPARTMENTS.map((d, i) => (
              <div key={d.subject} className="card">
                <span className={`hex-sm grid h-[52px] w-[58px] place-items-center font-display text-[1.1rem] font-extrabold text-navy ${["bg-brand-sky", "bg-brand-blush", "bg-brand-sun", "bg-brand-mint"][i]}`}>{d.subject.slice(0, 2)}</span>
                <h3>{d.subject}</h3><p>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand title="Meet the faculty in person" text="Book a demo class at any Catch25 centre and sit in on a real lecture." primary={{ label: "Book a demo class", href: "/contact" }} />
      <JsonLd data={[crumbsLd([{ name: "Faculty", path: "/faculty" }]), ...people.map((p) => ({ "@context": "https://schema.org", "@type": "Person", name: p.name, jobTitle: p.role, worksFor: { "@id": `${SITE.url}/#org` } }))]} />
    </>
  );
}
