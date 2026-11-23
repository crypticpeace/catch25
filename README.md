# Catch25 Science Academy website

Next.js 14 (App Router) + Tailwind CSS + TypeScript. Builds to a fully static site (`output: "export"`), so every page is pre-rendered HTML for SEO.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static site in ./out
```

Deploy on Vercel: import the repo, no settings needed. Any static host also works (upload `out/`).

## Pages (42 at build)

| Route | What it is |
|---|---|
| `/` | Home: hero, stats, why Catch25, course tabs, toppers rail, Mumbai map, founder, exam guides, blog, FAQ, enquiry |
| `/about` | Story, timeline, leadership, teaching approach, facilities |
| `/courses` + `/courses/[jee, neet, mht-cet, class-11-12]` | Course hub and one SEO page per exam |
| `/results` | Podium, category tiles, filterable results (exam + year), year-wise table. Deep links: `/results#neet` |
| `/scholarships` | Routes to a scholarship, process, test pattern, registration form |
| `/branches` + `/branches/[kandivali-west, borivali-west]` | Interactive Mumbai map and one local-SEO page per centre |
| `/coaching/[area]` | 11 local landing pages (Dahisar, Malad, Goregaon, Andheri, Bandra, Mira Road ...) with the Western line journey to the nearest centre |
| `/exams` + `/exams/[jee-main, neet-ug, mht-cet]` | Exam guides: dates, pattern, marking, eligibility, prep tips |
| `/faculty`, `/faq`, `/blog` (+3 articles), `/careers`, `/contact` | Supporting pages |
| `/privacy-policy`, `/terms` | Draft legal pages |
| `/sitemap.xml`, `/robots.txt` | Generated from the data files |

## Homepage results showcase

The opener on the homepage is a coded slideshow (`components/ResultsShow.tsx`), not images. It runs IIT → NIT → JEE → MHT CET → NEET → Boards and keeps a fixed ratio: 16:9 on desktop, 4:5 on phones.

- Edit students and slides in `data/showcase.ts` (lists are sorted by score where it matters).
- Photos are matched by name from `data/photos.json`: clean cut-outs in `public/images/results`, faces cropped from the printed brochure in `public/images/toppers`. To add a photo, save `firstname-lastname.webp` in `public/images/toppers` and add one line to `photos.json`.
- Each section shows its top 3 students (`kind: "top3"`) with uniform-visible portraits; `ranked: false` shows them as equals (IIT, NIT). Portraits come from `public/images/results` or `public/images/uniform`.

## Editing content

Everything editable lives in `data/`. No component changes needed.

| File | Edit to |
|---|---|
| `data/branches.ts` | Add a centre. It appears on the map, branch list, footer, forms and gets its own page |
| `data/results.ts` | Replace sample results. Set `RESULTS_ARE_SAMPLE = false` to remove the "sample" labels. Add `photo: "/images/results/name.jpg"` for photos and `star: 1..n` to feature on the home page |
| `data/faculty.ts` | Add subject teachers to `FACULTY` |
| `data/courses.ts` | Course copy, programmes, FAQs |
| `data/exams.ts` | Exam dates and patterns. Re-check each session against NTA / CET Cell bulletins |
| `data/blog.ts` | Add articles |
| `data/areas.ts` | Add local landing pages |
| `data/site.ts` | Phone, WhatsApp, email, social links, navigation |

## Enquiry form

The form validates name, mobile and course, then gives a one-tap WhatsApp message with the details prefilled (to +91 86570 91821).
To also store enquiries, set `NEXT_PUBLIC_FORM_ENDPOINT` (Formspree, Google Apps Script web app, or a CRM webhook). The form POSTs JSON:
`{ name, phone, course, cls, branch, message, source }`.

## SEO built in

- Unique title, description, keywords and canonical per page (`lib/seo.ts`)
- JSON-LD: EducationalOrganization, both branches with geo + opening hours, Course, FAQPage, BreadcrumbList, Article/BlogPosting, Person
- Local pages for every catchment area, internal links from footer and map
- Static HTML, `next/font` (no layout shift), compressed logo images

## Before launch

1. Replace sample results and testimonials with verified data (scorecard + Appendix A consent form for each student).
2. Borivali: Google Maps link, phone, exact coordinates in `data/branches.ts`.
3. Faculty profiles and photos.
4. Scholarship percentages, test dates and fee.
5. Confirm batch size wording (brand story says 25; JEE section of the questionnaire says max 35).
6. Review the draft privacy policy and terms.
7. Add the site to Google Search Console and submit `/sitemap.xml`.
