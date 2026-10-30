import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/data/site";
import { BRANCHES } from "@/data/branches";
import { AREAS } from "@/data/areas";
import { COURSES } from "@/data/courses";
import { EXAMS } from "@/data/exams";

export function Footer() {
  return (
    <footer className="bg-navy-deep pb-7 pt-16 text-navy-soft">
      <div className="wrap">
        <div className="grid gap-9 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <span className="mb-3.5 inline-block rounded-2xl bg-white px-3.5 py-2.5">
              <Image src="/images/logo-full.png" alt="Catch25 Science Academy, Vision to Reality" width={51} height={52} className="h-[52px] w-auto" />
            </span>
            <p className="text-[.95rem]">
              Catch25 Science Academy coaches students for IIT JEE (Main and Advanced), NEET, MHT CET and Class 11-12 Science in Mumbai. Small batches and personal attention since {SITE.founded}.
            </p>
            <div className="mt-3.5 flex gap-2.5">
              <a href={SITE.social.instagram} target="_blank" rel="noopener" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-xl bg-white/10">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="#fff" strokeWidth={2}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="#fff" /></svg>
              </a>
              <a href={SITE.social.youtube} target="_blank" rel="noopener" aria-label="YouTube" className="grid h-10 w-10 place-items-center rounded-xl bg-white/10">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="#fff"><path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12 31 31 0 0 0 1 16.8a3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8zM9.7 15.1V8.9L15.5 12z" /></svg>
              </a>
              <a href={SITE.social.facebook} target="_blank" rel="noopener" aria-label="Facebook" className="grid h-10 w-10 place-items-center rounded-xl bg-white/10">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="#fff"><path d="M14 8.5V6.6c0-.8.2-1.3 1.4-1.3H17V2.2C16.7 2.1 15.6 2 14.4 2 11.9 2 10.2 3.5 10.2 6.3v2.2H7.5v3.4h2.7V22H14V11.9h2.7l.4-3.4z" /></svg>
              </a>
            </div>
          </div>
          <div>
            <h4 className="mb-3.5 text-base text-white">Courses</h4>
            <ul className="grid gap-2 text-[.93rem]">
              {COURSES.map((c) => <li key={c.slug}><Link className="text-white hover:underline" href={`/courses/${c.slug}`}>{c.name}</Link></li>)}
              <li><Link className="text-white hover:underline" href="/scholarships">Scholarship test</Link></li>
            </ul>
            <h4 className="mb-3.5 mt-6 text-base text-white">Exam guides</h4>
            <ul className="grid gap-2 text-[.93rem]">
              {EXAMS.map((e) => <li key={e.slug}><Link className="text-white hover:underline" href={`/exams/${e.slug}`}>{e.name}</Link></li>)}
            </ul>
          </div>
          <div>
            <h4 className="mb-3.5 text-base text-white">Academy</h4>
            <ul className="grid gap-2 text-[.93rem]">
              {[["About us", "/about"], ["Results", "/results"], ["Faculty", "/faculty"], ["Blog", "/blog"], ["FAQ", "/faq"], ["Careers", "/careers"], ["Contact", "/contact"]].map(([l, h]) => (
                <li key={h}><Link className="text-white hover:underline" href={h}>{l}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-3.5 text-base text-white">Visit us</h4>
            <ul className="grid gap-3 text-[.93rem]">
              {BRANCHES.map((b) => (
                <li key={b.slug}>
                  <Link href={`/branches/${b.slug}`} className="font-bold text-white hover:underline">{b.name}{b.hq ? " (Head Office)" : ""}</Link>
                  <br />{b.address}
                </li>
              ))}
              <li>Call: <span className="select-all text-white">{SITE.phone}</span><br />WhatsApp: <span className="select-all text-white">{SITE.whatsappDisplay}</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/15 pt-6">
          <h4 className="mb-3 text-[.9rem] text-white">JEE, NEET and MHT CET coaching near you</h4>
          <p className="flex flex-wrap gap-x-4 gap-y-1.5 text-[.85rem]">
            {AREAS.map((a) => <Link key={a.slug} href={`/coaching/${a.slug}`} className="text-[#C9CAF0] hover:text-white hover:underline">Coaching in {a.name}</Link>)}
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-between gap-4 border-t border-white/15 pt-5 text-[.85rem]">
          <span>&copy; {new Date().getFullYear()} {SITE.legalName}. All rights reserved.</span>
          <span className="flex gap-4"><Link href="/privacy-policy" className="text-white hover:underline">Privacy policy</Link><Link href="/terms" className="text-white hover:underline">Terms of use</Link></span>
        </div>
      </div>
    </footer>
  );
}
