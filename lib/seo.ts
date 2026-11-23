import type { Metadata } from "next";
import { SITE } from "@/data/site";
import { BRANCHES, type Branch } from "@/data/branches";

type MetaInput = { title: string; description: string; path: string; keywords?: string[]; absoluteTitle?: boolean };

export function meta({ title, description, path, keywords, absoluteTitle }: MetaInput): Metadata {
  const url = SITE.url + (path === "/" ? "" : path);
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: { type: "website", url, title, description, siteName: SITE.name, locale: "en_IN", images: [{ url: "/images/logo-full.png" }] },
    twitter: { card: "summary_large_image", title, description },
  };
}

export const orgLd = () => ({
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "@id": `${SITE.url}/#org`,
  name: SITE.name,
  legalName: SITE.legalName,
  alternateName: ["Catch 25", "Catch25 Classes"],
  url: SITE.url,
  logo: `${SITE.url}/images/logo-full.png`,
  slogan: SITE.tagline,
  foundingDate: String(SITE.founded),
  founder: { "@type": "Person", name: "Prof. Saurabh Patel", jobTitle: "Founder and Director" },
  telephone: SITE.phoneRaw,
  email: SITE.email,
  award: SITE.award,
  sameAs: Object.values(SITE.social),
  areaServed: ["Kandivali", "Borivali", "Dahisar", "Malad", "Goregaon", "Andheri", "Vile Parle", "Santacruz", "Bandra", "Mira Road", "Mumbai"],
});

export const branchLd = (b: Branch) => ({
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "@id": `${SITE.url}/branches/${b.slug}#branch`,
  name: `${SITE.name}, ${b.name}`,
  url: `${SITE.url}/branches/${b.slug}`,
  parentOrganization: { "@id": `${SITE.url}/#org` },
  telephone: SITE.phoneRaw,
  address: { "@type": "PostalAddress", streetAddress: b.street, addressLocality: b.locality, addressRegion: "Maharashtra", postalCode: b.pincode, addressCountry: "IN" },
  geo: { "@type": "GeoCoordinates", latitude: b.lat, longitude: b.lng },
  hasMap: b.maps,
  openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "07:00", closes: "20:00" }],
});

export const allBranchesLd = () => BRANCHES.map(branchLd);

export const faqLd = (items: [string, string][]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
});

export const crumbsLd = (trail: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [{ name: "Home", path: "/" }, ...trail].map((c, i) => ({
    "@type": "ListItem", position: i + 1, name: c.name, item: SITE.url + (c.path === "/" ? "" : c.path),
  })),
});
