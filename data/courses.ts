import type { ExamKey } from "./results";

export type Course = {
  slug: string;
  tab: string;
  name: string;
  h1: string;
  metaTitle: string;
  metaDesc: string;
  keywords: string[];
  summary: string;
  intro: string[];
  boards: string[];
  subjects: string[];
  programmes: { title: string; who: string; desc: string }[];
  approach: { title: string; desc: string }[];
  faqs: [string, string][];
  examGuide?: string;
  resultKeys: ExamKey[];
};

export const INCLUDED = [
  "Study material and books",
  "Weekly Sunday test series",
  "One-to-one doubt sessions",
  "Personal mentoring",
  "Performance report after every test",
  "Parent-teacher meetings",
  "Catch25 T-shirt and bag",
];

export const COURSES: Course[] = [
  {
    slug: "jee",
    tab: "IIT JEE",
    name: "IIT JEE Main and Advanced",
    h1: "IIT JEE coaching in Mumbai",
    metaTitle: "IIT JEE Coaching in Mumbai | JEE Main & Advanced Classes",
    metaDesc: "IIT JEE Main and Advanced coaching at Catch25 in Mumbai. Two-Year Integrated, One-Year and Repeater batches with small batch sizes and weekly JEE-pattern tests.",
    keywords: ["IIT JEE coaching in Mumbai", "JEE coaching Mumbai", "JEE Main classes Mumbai", "JEE Advanced coaching Mumbai western suburbs", "JEE dropper batch Mumbai"],
    summary: "Physics, Chemistry and Mathematics for JEE Main and JEE Advanced, aimed at IITs, NITs and IIITs.",
    intro: [
      "JEE rewards students who understand a concept well enough to apply it to a problem they have never seen. That takes time with a teacher, not just time in a lecture hall. Our JEE batches are kept small so faculty can follow how each student is solving, not only whether the final answer is right.",
      "Classes run daily at all five Catch25 centres in Mumbai, and every Sunday students sit a JEE-pattern test. Each test produces a performance report for the student and parents, and the mentor uses it to plan the next week's revision.",
    ],
    boards: ["CBSE", "ICSE", "SSC / HSC State Board"],
    subjects: ["Physics", "Chemistry", "Mathematics"],
    programmes: [
      { title: "Two-Year Integrated", who: "Students entering Class 11", desc: "Covers the full JEE Main and Advanced syllabus across Class 11 and 12, in step with board preparation." },
      { title: "One-Year Programme", who: "Students in Class 12", desc: "Completes and revises the syllabus with intensive JEE-pattern practice and full-length mocks." },
      { title: "Repeater / Dropper Batch", who: "12th-pass students", desc: "A dedicated year for another attempt, with targeted revision of weak chapters and a mock every week." },
    ],
    approach: [
      { title: "Concept first, then speed", desc: "Each chapter is taught from first principles before moving to timed problem sets." },
      { title: "Sunday JEE-pattern tests", desc: "MCQ and numerical-value questions in the current JEE Main format, every week." },
      { title: "Error log with your mentor", desc: "Mistakes from each test are reviewed one-to-one so the same error does not repeat." },
      { title: "Advanced-level problem sessions", desc: "Extra sessions for students targeting JEE Advanced and IIT admission." },
    ],
    faqs: [
      ["When should a student start JEE preparation?", "The best time is the start of Class 11, through the Two-Year Integrated programme. Students in Class 12 can join the One-Year programme, and 12th-pass students can join the Repeater batch."],
      ["Do you prepare students for both JEE Main and JEE Advanced?", "Yes. The course covers the JEE Main syllabus and pattern, with additional Advanced-level problem sessions for students targeting IITs."],
      ["Can I prepare for JEE and MHT CET together?", "Yes. The syllabus overlaps heavily, and our JEE + CET combined option adds CET-specific speed practice in Class 12."],
      ["Are fees shown on the website?", "Fees and instalment options are shared at a free counselling session, along with any scholarship you qualify for."],
    ],
    examGuide: "jee-main",
    resultKeys: ["jee-main", "jee-adv"],
  },
  {
    slug: "neet",
    tab: "NEET",
    name: "NEET UG",
    h1: "NEET coaching in Mumbai",
    metaTitle: "NEET Coaching in Mumbai | NEET UG Classes for MBBS",
    metaDesc: "NEET UG coaching at Catch25 in Mumbai. Two-Year Integrated, One-Year and Repeater batches in Physics, Chemistry and Biology with NEET-pattern Sunday tests.",
    keywords: ["NEET coaching in Mumbai", "NEET classes Mumbai", "NEET UG coaching Mumbai", "medical entrance coaching Mumbai", "NEET repeater batch Mumbai"],
    summary: "Physics, Chemistry and Biology for MBBS and BDS admissions, taught NCERT-first.",
    intro: [
      "NEET is a test of accuracy across a very large syllabus, with negative marking on every wrong answer. Students do best when they know NCERT thoroughly and have practised enough full-length papers to manage time and avoid careless errors.",
      "At Catch25, Biology is taught line by line from NCERT, while Physics and Chemistry get the problem-solving depth that most NEET aspirants find hardest. Every Sunday students take a NEET-pattern test, and the results go straight into their mentoring plan.",
    ],
    boards: ["CBSE", "ICSE", "SSC / HSC State Board"],
    subjects: ["Physics", "Chemistry", "Biology (Botany and Zoology)"],
    programmes: [
      { title: "Two-Year Integrated", who: "Students entering Class 11", desc: "Board and NEET preparation together across Class 11 and 12." },
      { title: "One-Year Programme", who: "Students in Class 12", desc: "Focused NEET preparation alongside Class 12 boards, with weekly full-length tests." },
      { title: "Repeater / Dropper Batch", who: "12th-pass students", desc: "A full year for a higher NEET score and a government medical seat." },
    ],
    approach: [
      { title: "NCERT line by line", desc: "Biology and Chemistry built on NCERT text, which forms the core of NEET questions." },
      { title: "Physics made manageable", desc: "Extra problem-solving time for the subject most NEET students lose marks in." },
      { title: "Weekly 720-mark practice", desc: "NEET-pattern tests every Sunday to build speed and accuracy." },
      { title: "Accuracy tracking", desc: "Mentors track wrong attempts so students learn when to skip a question." },
    ],
    faqs: [
      ["Is NEET coaching useful for board exams too?", "Yes. NEET is based on the Class 11 and 12 syllabus, so the same teaching supports board preparation."],
      ["What is the NEET exam pattern?", "NEET UG has 180 compulsory multiple-choice questions for 720 marks: 45 Physics, 45 Chemistry and 90 Biology. Each correct answer gets +4 and each wrong answer -1. See our NEET exam guide for details."],
      ["Do you offer a repeater batch for NEET?", "Yes. The Repeater batch is designed for 12th-pass students taking another attempt."],
    ],
    examGuide: "neet-ug",
    resultKeys: ["neet"],
  },
  {
    slug: "mht-cet",
    tab: "MHT CET",
    name: "MHT CET",
    h1: "MHT CET classes in Mumbai",
    metaTitle: "MHT CET Classes in Mumbai | PCM and PCB Coaching",
    metaDesc: "MHT CET coaching at Catch25 in Mumbai for PCM and PCB groups. State Board syllabus, CET speed practice and full-length mocks for Maharashtra engineering and pharmacy admissions.",
    keywords: ["MHT CET classes Mumbai", "MHT CET coaching Mumbai", "CET classes Mumbai", "MHT CET PCM coaching Mumbai", "MHT CET crash course Mumbai"],
    summary: "State Board syllabus coverage with CET-specific speed practice for PCM and PCB groups.",
    intro: [
      "MHT CET has no negative marking but gives only 90 minutes for 100 Physics and Chemistry questions, so speed decides rank. About 80 percent of the paper comes from the Class 12 State Board syllabus.",
      "Our CET programme covers the State Board textbooks thoroughly, then drills students in timed sets and full-length mocks in the CET format. It is offered on its own, with Class 12 boards, or combined with JEE preparation.",
    ],
    boards: ["SSC / HSC State Board", "CBSE", "ICSE"],
    subjects: ["Physics", "Chemistry", "Mathematics or Biology"],
    programmes: [
      { title: "CET with Class 12 Boards", who: "Class 12 State Board students", desc: "One timetable for HSC boards and MHT CET." },
      { title: "JEE + CET Combined", who: "Students keeping both routes open", desc: "JEE preparation with CET-specific speed practice added in Class 12." },
      { title: "CET Crash Course", who: "Students close to the exam", desc: "A short revision programme with daily timed mocks." },
    ],
    approach: [
      { title: "State Board textbook focus", desc: "Every chapter covered from the Maharashtra Board textbooks the paper is based on." },
      { title: "Speed drills", desc: "Timed sets of 25 and 50 questions to build the pace CET demands." },
      { title: "CET-format mocks", desc: "Full-length mocks with the same section timing as the real exam." },
      { title: "PCM and PCB groups", desc: "Mathematics for engineering aspirants, Biology for pharmacy and allied courses." },
    ],
    faqs: [
      ["Is there negative marking in MHT CET?", "No. MHT CET has no negative marking, so students should attempt every question."],
      ["Can CBSE students prepare for MHT CET?", "Yes. We cover the State Board topics that differ from the CBSE syllabus so CBSE and ICSE students are not caught out."],
      ["Do you offer a CET crash course?", "Yes. The crash course runs in the months before the exam with daily mocks. Ask our counsellors for the next batch dates."],
    ],
    examGuide: "mht-cet",
    resultKeys: ["mht-cet"],
  },
  {
    slug: "class-11-12",
    tab: "Class 11-12",
    name: "Class 11 and 12 Science",
    h1: "Class 11 and 12 Science coaching in Mumbai",
    metaTitle: "11th & 12th Science Classes in Mumbai | HSC, CBSE, ISC",
    metaDesc: "Class 11 and 12 Science coaching for HSC, CBSE and ISC boards at Catch25, Mumbai. Physics, Chemistry, Mathematics and Biology with board practice papers.",
    keywords: ["11th science classes Mumbai", "12th science tuition Mumbai", "HSC science coaching Mumbai", "CBSE 12th science classes Mumbai", "science tuition Mumbai"],
    summary: "Physics, Chemistry, Mathematics and Biology for HSC, CBSE and ISC boards.",
    intro: [
      "Class 11 is where most students first meet calculus, vectors, organic chemistry and the depth of Biology that entrance exams test. A weak Class 11 shows up later in both boards and entrance scores.",
      "Our board programme teaches each subject for the board exam and the entrance exam at the same time, so students do not have to choose between them. Board-pattern practice papers and school exam support are included.",
    ],
    boards: ["HSC", "CBSE", "ICSE / ISC"],
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology"],
    programmes: [
      { title: "Class 11 Science", who: "Students entering Class 11", desc: "Strong foundations in the year most of the entrance syllabus is introduced." },
      { title: "Class 12 Science", who: "Students in Class 12", desc: "Board-focused teaching with practice papers and school-exam support." },
      { title: "Boards + Entrance", who: "Students targeting JEE, NEET or CET", desc: "One timetable for boards and competitive preparation." },
    ],
    approach: [
      { title: "Board answer writing", desc: "Practice in writing complete, well-presented answers that score full marks." },
      { title: "School exam support", desc: "Revision ahead of unit tests, prelims and practical exams." },
      { title: "Board practice papers", desc: "Past papers and model papers in the latest board pattern." },
      { title: "Entrance-ready concepts", desc: "Topics taught to the depth JEE, NEET and CET require." },
    ],
    faqs: [
      ["Which boards do you teach?", "We teach Maharashtra State Board (HSC), CBSE and ICSE / ISC students."],
      ["Can my child join only for boards?", "Yes. Students can join for board preparation alone or combine it with JEE, NEET or MHT CET."],
      ["Do you help with practical exams?", "We support students with practical theory, viva preparation and journal guidance for board practicals."],
    ],
    resultKeys: ["class12"],
  },
];

export const getCourse = (slug: string) => COURSES.find((c) => c.slug === slug);
