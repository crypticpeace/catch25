import type { MetadataRoute } from "next";
import { SITE } from "@/data/site";
import { COURSES } from "@/data/courses";
import { BRANCHES } from "@/data/branches";
import { AREAS } from "@/data/areas";
import { EXAMS } from "@/data/exams";
import { POSTS } from "@/data/blog";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const u = (path: string, priority: number, changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = "monthly", lastModified: Date = now) =>
    ({ url: SITE.url + path, lastModified, changeFrequency, priority });
  return [
    u("", 1, "weekly"),
    u("/results", 0.95, "weekly"),
    u("/courses", 0.9),
    ...COURSES.map((c) => u(`/courses/${c.slug}`, 0.9)),
    u("/scholarships", 0.8),
    u("/branches", 0.8),
    ...BRANCHES.map((b) => u(`/branches/${b.slug}`, 0.85)),
    ...AREAS.map((a) => u(`/coaching/${a.slug}`, 0.7)),
    u("/exams", 0.7, "weekly"),
    ...EXAMS.map((e) => u(`/exams/${e.slug}`, 0.75, "weekly")),
    u("/about", 0.6),
    u("/faculty", 0.6),
    u("/faq", 0.6),
    u("/blog", 0.6, "weekly"),
    ...POSTS.map((p) => u(`/blog/${p.slug}`, 0.5, "monthly", new Date(p.date))),
    u("/contact", 0.7),
    u("/careers", 0.3),
    u("/privacy-policy", 0.2, "yearly"),
    u("/terms", 0.2, "yearly"),
  ];
}
