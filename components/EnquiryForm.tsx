"use client";

import { useState, type FormEvent } from "react";
import { SCHOOLS, SITE, waLink } from "@/data/site";
import { BRANCHES } from "@/data/branches";
import { WhatsAppIcon } from "./Icon";

/**
 * Enquiry form.
 * If NEXT_PUBLIC_FORM_ENDPOINT is set (Formspree, Google Apps Script, a CRM webhook),
 * the enquiry is POSTed there as JSON. In every case the student also gets a
 * one-tap WhatsApp message with their details prefilled.
 */
const ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

export const COURSE_OPTIONS = [
  "IIT JEE (Main + Advanced)", "NEET UG", "MHT CET", "Class 11 Science (Boards)",
  "Class 12 Science (Boards)", "Repeater / Dropper batch", "Scholarship test", "Demo class",
];

type Errors = Partial<Record<"name" | "phone" | "course" | "school", string>>;

export function EnquiryForm({ defaultCourse = "", source = "website" }: { defaultCourse?: string; source?: string }) {
  const [errors, setErrors] = useState<Errors>({});
  const [done, setDone] = useState<{ first: string; text: string } | null>(null);
  const [sending, setSending] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const v = (k: string) => String(f.get(k) ?? "").trim();
    const name = v("name"), phone = v("phone"), course = v("course"), school = v("school");
    const digits = phone.replace(/\D/g, "").slice(-10);
    const errs: Errors = {};
    if (name.length < 2) errs.name = "Enter the student's name.";
    if (!/^[6-9]\d{9}$/.test(digits)) errs.phone = "Enter a 10-digit mobile number.";
    if (!course) errs.course = "Choose a course.";
    if (school.length < 2) errs.school = "Enter the school or junior college name.";
    setErrors(errs);
    if (Object.keys(errs).length) return;

    const data = { name, phone: digits, course, school, cls: v("cls"), branch: v("branch"), message: v("msg"), source };
    const text = [
      "Hi Catch25, I would like to enquire about admission.",
      `Name: ${name}`, `Phone: ${digits}`, `School / college: ${school}`, `Course: ${course}`,
      data.cls && `Currently in: ${data.cls}`, data.branch && `Preferred centre: ${data.branch}`, data.message && `Message: ${data.message}`,
    ].filter(Boolean).join("\n");

    if (ENDPOINT) {
      setSending(true);
      try { await fetch(ENDPOINT, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) }); } catch { /* WhatsApp fallback below */ }
      setSending(false);
    }
    setDone({ first: name.split(" ")[0], text });
  }

  const err = (k: keyof Errors) => errors[k] && <span className="text-[.8rem] font-bold text-brand-red">{errors[k]}</span>;

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-3.5 rounded-3xl bg-white p-5 text-ink sm:grid-cols-2 sm:p-7">
      <div className="grid min-w-0 gap-1.5">
        <label htmlFor="f-name" className="text-[.82rem] font-extrabold text-navy">Student name</label>
        <input id="f-name" name="name" autoComplete="name" placeholder="Full name" className="field-input" aria-invalid={!!errors.name} />
        {err("name")}
      </div>
      <div className="grid min-w-0 gap-1.5">
        <label htmlFor="f-phone" className="text-[.82rem] font-extrabold text-navy">Mobile number</label>
        <input id="f-phone" name="phone" inputMode="tel" autoComplete="tel" placeholder="10-digit mobile" className="field-input" aria-invalid={!!errors.phone} />
        {err("phone")}
      </div>
      <div className="grid min-w-0 gap-1.5">
        <label htmlFor="f-course" className="text-[.82rem] font-extrabold text-navy">Course</label>
        <select id="f-course" name="course" defaultValue={defaultCourse} className="field-input" aria-invalid={!!errors.course}>
          <option value="">Select a course</option>
          {COURSE_OPTIONS.map((c) => <option key={c}>{c}</option>)}
        </select>
        {err("course")}
      </div>
      <div className="grid min-w-0 gap-1.5">
        <label htmlFor="f-cls" className="text-[.82rem] font-extrabold text-navy">Currently in</label>
        <select id="f-cls" name="cls" className="field-input" defaultValue="">
          <option value="">Select</option><option>Class 9</option><option>Class 10</option><option>Class 11</option><option>Class 12</option><option>12th pass (repeater)</option>
        </select>
      </div>
      <div className="grid min-w-0 gap-1.5">
        <label htmlFor="f-school" className="text-[.82rem] font-extrabold text-navy">School / junior college</label>
        <input id="f-school" name="school" list="f-school-list" autoComplete="organization" placeholder="e.g. Thakur Vidya Mandir" className="field-input" aria-invalid={!!errors.school} />
        <datalist id="f-school-list">{SCHOOLS.map((sc) => <option key={sc} value={sc} />)}</datalist>
        {err("school")}
      </div>
      <div className="grid min-w-0 gap-1.5">
        <label htmlFor="f-branch" className="text-[.82rem] font-extrabold text-navy">Preferred centre</label>
        <select id="f-branch" name="branch" className="field-input">
          {BRANCHES.map((b) => <option key={b.slug}>{b.name}{b.hq ? " (Head Office)" : ""}</option>)}
          <option>Either centre</option>
        </select>
      </div>
      <div className="grid min-w-0 gap-1.5 sm:col-span-2">
        <label htmlFor="f-msg" className="text-[.82rem] font-extrabold text-navy">Anything you&apos;d like to ask? (optional)</label>
        <textarea id="f-msg" name="msg" rows={3} placeholder="Board, preferred timings, questions about fees or scholarships" className="field-input min-h-[92px] resize-y" />
      </div>
      <div className="sm:col-span-2"><button className="btn btn-sun" type="submit" disabled={sending}>{sending ? "Sending..." : "Request a call back"}</button></div>
      <p className="text-[.82rem] text-muted sm:col-span-2">We only use your number to contact you about admissions.</p>
      {done && (
        <div className="grid gap-2.5 sm:col-span-2" role="status">
          <div className="rounded-[14px] bg-brand-mint px-4 py-3.5 text-[.95rem] font-bold text-[#0E5C3B]">
            Thanks, {done.first}. {ENDPOINT ? "Our admissions team will call you shortly. " : ""}Tap below to send your details to our admissions desk on WhatsApp, or call <span className="select-all">{SITE.phone}</span>.
          </div>
          <a className="btn btn-wa justify-self-start" target="_blank" rel="noopener" href={waLink(done.text)}><WhatsAppIcon /> Send on WhatsApp</a>
        </div>
      )}
    </form>
  );
}
