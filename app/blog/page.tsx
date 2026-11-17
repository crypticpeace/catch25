import Link from "next/link";
import { PageHero } from "@/components/Blocks";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { POSTS } from "@/data/blog";
import { crumbsLd, meta } from "@/lib/seo";

export const metadata = meta({
  title: "Catch25 Blog | JEE, NEET & MHT CET Preparation Tips",
  description: "Preparation advice, exam updates and study plans for JEE, NEET and MHT CET from Catch25 Science Academy faculty in Mumbai.",
  path: "/blog",
  keywords: ["JEE preparation tips", "NEET preparation tips", "MHT CET tips", "class 11 study plan"],
});

const fmt = (d: string) => new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });

export default function Blog() {
  const posts = [...POSTS].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <>
      <PageHero eyebrow="Blog" title="Preparation advice from Catch25 faculty" lead="Exam updates, study plans and guidance for students and parents." crumbs={[{ name: "Blog" }]} />
      <section className="section">
        <div className="wrap grid gap-[22px] md:grid-cols-3">
          {posts.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="card !gap-4 transition hover:-translate-y-1 hover:shadow-card">
              <span className="text-[.78rem] font-extrabold uppercase tracking-[.1em] text-brand-red">{p.category} · {p.readMins} min read</span>
              <h2 className="text-[1.3rem]">{p.title}</h2>
              <p>{p.description}</p>
              <span className="mt-auto flex items-center justify-between text-[.85rem] text-muted"><time dateTime={p.date}>{fmt(p.date)}</time><Icon name="arrow" className="h-4 w-4 text-navy" /></span>
            </Link>
          ))}
        </div>
      </section>
      <JsonLd data={crumbsLd([{ name: "Blog", path: "/blog" }])} />
    </>
  );
}
