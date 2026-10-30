import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand, PageHero } from "@/components/Blocks";
import { JsonLd } from "@/components/JsonLd";
import { POSTS, getPost, type Block } from "@/data/blog";
import { SITE } from "@/data/site";
import { crumbsLd, meta } from "@/lib/seo";

export const dynamicParams = false;
export const generateStaticParams = () => POSTS.map((p) => ({ slug: p.slug }));

export function generateMetadata({ params }: { params: { slug: string } }) {
  const p = getPost(params.slug);
  if (!p) return {};
  return { ...meta({ title: p.metaTitle, description: p.description, path: `/blog/${p.slug}`, keywords: p.keywords }), openGraph: { type: "article", publishedTime: p.date, title: p.metaTitle, description: p.description, url: `${SITE.url}/blog/${p.slug}` } };
}

function Render({ b }: { b: Block }) {
  switch (b.t) {
    case "p": return <p>{b.text}</p>;
    case "h2": return <h2>{b.text}</h2>;
    case "h3": return <h3>{b.text}</h3>;
    case "ul": return <ul>{b.items.map((i) => <li key={i}>{i}</li>)}</ul>;
    case "ol": return <ol>{b.items.map((i) => <li key={i}>{i}</li>)}</ol>;
    case "table": return (
      <div className="overflow-x-auto"><table><thead><tr>{b.head.map((h, i) => <th key={i}>{h}</th>)}</tr></thead><tbody>{b.rows.map((r) => <tr key={r[0]}>{r.map((c, i) => <td key={i}>{c}</td>)}</tr>)}</tbody></table></div>
    );
  }
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const p = getPost(params.slug);
  if (!p) notFound();
  const more = POSTS.filter((x) => x.slug !== p.slug).slice(0, 2);
  return (
    <>
      <PageHero eyebrow={`${p.category} · ${p.readMins} min read`} title={p.title} lead={p.description} crumbs={[{ name: "Blog", href: "/blog" }, { name: p.category }]}>
        <p className="text-[.88rem] font-bold text-muted">By Catch25 faculty · <time dateTime={p.date}>{new Date(p.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</time></p>
      </PageHero>
      <article className="section">
        <div className="wrap"><div className="prose-c25">{p.body.map((b, i) => <Render key={i} b={b} />)}</div></div>
      </article>
      <section className="section bg-mist !pt-12">
        <div className="wrap">
          <h2 className="mb-6 text-[1.5rem]">Keep reading</h2>
          <div className="grid gap-[22px] md:grid-cols-2">
            {more.map((m) => <Link key={m.slug} href={`/blog/${m.slug}`} className="card hover:shadow-card"><span className="text-[.78rem] font-extrabold uppercase tracking-[.1em] text-brand-red">{m.category}</span><h3>{m.title}</h3></Link>)}
          </div>
        </div>
      </section>
      <CtaBand title="Want a plan made for you?" text="Our counsellors will suggest a batch and study plan for your class and target exam." primary={{ label: "Book free counselling", href: "/contact" }} />
      <JsonLd data={[
        { "@context": "https://schema.org", "@type": "BlogPosting", headline: p.title, description: p.description, datePublished: p.date, dateModified: p.date, author: { "@type": "Organization", name: SITE.name }, publisher: { "@id": `${SITE.url}/#org` }, mainEntityOfPage: `${SITE.url}/blog/${p.slug}`, keywords: p.keywords.join(", ") },
        crumbsLd([{ name: "Blog", path: "/blog" }, { name: p.title, path: `/blog/${p.slug}` }]),
      ]} />
    </>
  );
}
