"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV, SITE } from "@/data/site";

/**
 * Header: logo | nav (centred) | CTA, all on one 76px row.
 * Every nav link shares one style and one height so the labels sit on the same baseline.
 */
export function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [path]);
  const isActive = (href: string) => (href === "/" ? path === "/" : path.startsWith(href));

  const link = (active: boolean) =>
    `inline-flex h-10 items-center whitespace-nowrap rounded-full px-3.5 text-[.94rem] font-bold leading-none transition-colors ${
      active ? "bg-brand-sky text-navy" : "text-ink hover:bg-mist hover:text-navy"
    }`;

  return (
    <>
      <div className="bg-brand-sun py-2 text-center text-[.88rem] font-semibold leading-snug">
        <div className="wrap">
          Admissions open for JEE, NEET, MHT CET and Class 11-12 Science.{" "}
          <Link href="/contact" className="whitespace-nowrap font-extrabold text-navy underline">Book free counselling</Link>
        </div>
      </div>
      <header className="sticky z-50 border-b border-line bg-white/95 backdrop-blur" style={{ top: "env(safe-area-inset-top, 0px)" }}>
        <div className="wrap relative flex h-[76px] items-center gap-4 xl:grid xl:grid-cols-[auto_1fr_auto]">
          <Link href="/" className="flex flex-none items-center gap-3" aria-label={`${SITE.name} home`}>
            <Image src="/images/logo-mark.png" alt="Catch25 Science Academy logo" width={59} height={46} priority className="h-[46px] w-auto" />
            <span className="grid gap-1 leading-none">
              <b className="font-display text-[1.15rem] font-extrabold leading-none text-navy">Catch25</b>
              <small className="text-[.66rem] font-bold uppercase leading-none tracking-[.14em] text-muted">Science Academy</small>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Main" className="hidden justify-center xl:flex">
            <ul className="flex items-center gap-0.5">
              {NAV.map((n) => (
                <li key={n.href} className="flex">
                  <Link href={n.href} aria-current={isActive(n.href) ? "page" : undefined} className={link(isActive(n.href))}>{n.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="ml-auto flex flex-none items-center gap-2.5 xl:ml-0">
            <Link href="/contact" className="btn btn-navy hidden h-11 px-5 py-0 text-[.92rem] sm:inline-flex">Enquire now</Link>
            <button
              className="grid h-11 w-11 place-items-center rounded-xl border-2 border-line xl:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((o) => !o)}
            >
              <span className="grid gap-1">
                <span className={`block h-0.5 w-5 rounded bg-ink transition ${open ? "translate-y-1.5 rotate-45" : ""}`} />
                <span className={`block h-0.5 w-5 rounded bg-ink transition ${open ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 w-5 rounded bg-ink transition ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
              </span>
            </button>
          </div>
        </div>

        {/* Mobile / tablet menu */}
        <nav id="mobile-menu" aria-label="Main" hidden={!open} className="border-t border-line bg-white shadow-lift xl:hidden">
          <ul className="wrap grid gap-1 py-3 sm:grid-cols-2">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link href={n.href} aria-current={isActive(n.href) ? "page" : undefined} className={`${link(isActive(n.href))} h-12 w-full rounded-xl px-4`}>{n.label}</Link>
              </li>
            ))}
            <li className="pt-2 sm:col-span-2"><Link href="/contact" className="btn btn-navy w-full">Enquire now</Link></li>
          </ul>
        </nav>
      </header>
    </>
  );
}
