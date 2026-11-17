import Link from "next/link";
import { Doodle } from "@/components/Doodle";

export default function NotFound() {
  return (
    <section className="section relative overflow-hidden">
      <Doodle kind="atom" tone="sky" className="animate-float-slow" style={{ width: 140, right: "10%", top: "10%" }} />
      <div className="wrap relative z-[1] grid max-w-[640px] gap-5">
        <span className="font-hand text-[2rem] font-bold text-brand-red">oops, wrong answer!</span>
        <h1>This page is not in the syllabus</h1>
        <p className="lead">The page you are looking for has moved or does not exist.</p>
        <div className="flex flex-wrap gap-3.5"><Link className="btn btn-navy" href="/">Go to home</Link><Link className="btn btn-ghost" href="/courses">View courses</Link></div>
      </div>
    </section>
  );
}
