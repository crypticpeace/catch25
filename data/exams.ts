/**
 * Exam guides. Facts last reviewed: October 2026.
 * Re-check against the official bulletins each session before updating:
 *   JEE Main: https://jeemain.nta.nic.in   NEET UG: https://neet.nta.nic.in   MHT CET: https://cetcell.mahacet.org
 */
export type ExamGuide = {
  slug: string;
  name: string;
  h1: string;
  metaTitle: string;
  metaDesc: string;
  keywords: string[];
  conductedBy: string;
  officialSite: string;
  summary: string;
  facts: [string, string][];
  pattern: { head: string[]; rows: string[][] };
  marking: string[];
  dates: { title: string; body: string };
  eligibility: string[];
  tips: { title: string; body: string }[];
  faqs: [string, string][];
  course: string;
};

export const REVIEWED = "October 2026";

export const EXAMS: ExamGuide[] = [
  {
    slug: "jee-main",
    name: "JEE Main",
    h1: "JEE Main 2027: exam dates, pattern and preparation",
    metaTitle: "JEE Main 2027 Exam Date, Pattern & Marking Scheme | Catch25 Guide",
    metaDesc: "JEE Main 2027 session 1 dates, Paper 1 exam pattern, marking scheme, eligibility and a preparation plan from Catch25 Science Academy, Mumbai.",
    keywords: ["JEE Main 2027 exam date", "JEE Main 2027 pattern", "JEE Main marking scheme", "JEE Main session 1 2027", "JEE Main preparation Mumbai"],
    conductedBy: "National Testing Agency (NTA)",
    officialSite: "https://jeemain.nta.nic.in",
    summary: "JEE Main is the national entrance exam for NITs, IIITs and other centrally funded technical institutes, and the qualifying exam for JEE Advanced (IIT admissions). It is held in two sessions each year, and a candidate's better score counts.",
    facts: [
      ["Conducted by", "National Testing Agency (NTA)"],
      ["Sessions", "Two (January and April)"],
      ["Mode", "Computer-based test"],
      ["Duration", "3 hours"],
      ["Questions", "75 (25 per subject)"],
      ["Total marks", "300"],
    ],
    pattern: {
      head: ["Subject", "Section A (MCQ)", "Section B (numerical)", "Marks"],
      rows: [
        ["Physics", "20", "5", "100"],
        ["Chemistry", "20", "5", "100"],
        ["Mathematics", "20", "5", "100"],
        ["Total", "60", "15", "300"],
      ],
    },
    marking: [
      "+4 for every correct answer",
      "-1 for every incorrect answer",
      "0 for questions not attempted",
      "All 75 questions are compulsory; there are no optional numerical questions",
    ],
    dates: {
      title: "JEE Main 2027 dates",
      body: "NTA's exam calendar lists JEE Main 2027 Session 1 on 22 to 24 January and 28 to 30 January 2027, with 31 January as a reserve day. These dates are tentative until the official information bulletin is released. Session 2 is usually held in April.",
    },
    eligibility: [
      "Passed or appearing in Class 12 (or equivalent) with Physics, Chemistry and Mathematics",
      "No age limit to appear in JEE Main",
      "For NIT, IIIT and IIT admission, candidates also need 75 percent in Class 12 (65 percent for SC/ST) or a place in the top 20 percentile of their board",
    ],
    tips: [
      { title: "Finish the syllabus by December", body: "Session 1 is in late January. Aim to complete the syllabus by December and use January only for mocks and revision." },
      { title: "Practise numericals under time", body: "Section B questions carry negative marking and need exact answers. Practise them with a timer, not just for accuracy." },
      { title: "Take a mock every week", body: "Full-length 3-hour mocks build stamina and show which subject to attempt first. Catch25 students take one every Sunday." },
      { title: "Use Session 1 as a real attempt", body: "Treat January seriously. A good Session 1 score takes pressure off April and the board exams in between." },
    ],
    faqs: [
      ["How many times can I appear for JEE Main?", "JEE Main is held in two sessions each year, and candidates can appear in the year they pass Class 12 and the two following years. The better of the two session scores is used for ranking."],
      ["Is there negative marking in the numerical section?", "Yes. In the current pattern, wrong answers in both Section A and Section B lose one mark."],
      ["Is JEE Main needed for IIT admission?", "Yes. Candidates must qualify JEE Main to be eligible to sit JEE Advanced, which decides IIT admission."],
    ],
    course: "jee",
  },
  {
    slug: "neet-ug",
    name: "NEET UG",
    h1: "NEET UG: exam pattern, marking scheme and preparation",
    metaTitle: "NEET UG Exam Pattern, Marking Scheme & Preparation | Catch25 Guide",
    metaDesc: "NEET UG exam pattern (180 questions, 720 marks), marking scheme, eligibility and a preparation plan for MBBS and BDS aspirants from Catch25, Mumbai.",
    keywords: ["NEET exam pattern", "NEET 2027", "NEET marking scheme", "NEET UG 720 marks", "NEET preparation Mumbai"],
    conductedBy: "National Testing Agency (NTA)",
    officialSite: "https://neet.nta.nic.in",
    summary: "NEET UG is the single national entrance exam for MBBS, BDS, AYUSH and other medical undergraduate courses in India. It is a pen-and-paper test held once a year.",
    facts: [
      ["Conducted by", "National Testing Agency (NTA)"],
      ["Held", "Once a year, usually in May"],
      ["Mode", "Pen and paper (OMR)"],
      ["Questions", "180, all compulsory"],
      ["Total marks", "720"],
      ["Languages", "13, including English, Hindi and Marathi"],
    ],
    pattern: {
      head: ["Subject", "Questions", "Marks"],
      rows: [
        ["Physics", "45", "180"],
        ["Chemistry", "45", "180"],
        ["Biology (Botany 45 + Zoology 45)", "90", "360"],
        ["Total", "180", "720"],
      ],
    },
    marking: [
      "+4 for every correct answer",
      "-1 for every incorrect answer",
      "0 for questions not attempted",
      "There is no optional section; all 180 questions are compulsory",
    ],
    dates: {
      title: "NEET 2027 date",
      body: "NTA has not yet announced the NEET UG 2027 date. The exam is usually held on a Sunday in May, with registration opening a few months earlier. We update this page when the information bulletin is released.",
    },
    eligibility: [
      "Passed or appearing in Class 12 with Physics, Chemistry, Biology and English",
      "Minimum age of 17 years by 31 December of the admission year",
      "No upper age limit",
    ],
    tips: [
      { title: "Read NCERT more than once", body: "Most Biology questions come straight from NCERT lines and diagrams. Read the text several times, not just once." },
      { title: "Do not neglect Physics", body: "Physics separates good NEET scores from great ones. Practise numericals daily even when Biology feels more urgent." },
      { title: "Respect negative marking", body: "Each wrong answer costs a mark. Track how many of your guesses are right in mocks before deciding when to guess." },
      { title: "Practise on OMR sheets", body: "NEET is pen and paper. Filling an OMR sheet takes time, so practise full papers the same way." },
    ],
    faqs: [
      ["Is NEET held more than once a year?", "No. NEET UG is held once a year."],
      ["How much weight does Biology carry?", "Biology has 90 of the 180 questions, which is 360 of the 720 marks."],
      ["Can I prepare for NEET along with Class 12 boards?", "Yes. NEET is based on the Class 11 and 12 syllabus, so preparation overlaps with boards."],
    ],
    course: "neet",
  },
  {
    slug: "mht-cet",
    name: "MHT CET",
    h1: "MHT CET: exam pattern, marking scheme and preparation",
    metaTitle: "MHT CET Exam Pattern, Marking Scheme & Preparation | Catch25 Guide",
    metaDesc: "MHT CET exam pattern for PCM and PCB, marking scheme, syllabus weightage and a preparation plan for Maharashtra engineering and pharmacy admissions from Catch25.",
    keywords: ["MHT CET exam pattern", "MHT CET 2027", "MHT CET marking scheme", "MHT CET PCM pattern", "MHT CET preparation Mumbai"],
    conductedBy: "State Common Entrance Test Cell, Maharashtra",
    officialSite: "https://cetcell.mahacet.org",
    summary: "MHT CET is Maharashtra's entrance exam for engineering, pharmacy and agriculture degree courses in the state. It is held separately for the PCM and PCB groups.",
    facts: [
      ["Conducted by", "State CET Cell, Maharashtra"],
      ["Mode", "Computer-based test"],
      ["Duration", "180 minutes (90 per section)"],
      ["Questions", "150 (PCM), 200 (PCB)"],
      ["Total marks", "200"],
      ["Negative marking", "None"],
    ],
    pattern: {
      head: ["Subject", "Questions", "Marks per question", "Marks"],
      rows: [
        ["Physics", "50", "1", "50"],
        ["Chemistry", "50", "1", "50"],
        ["Mathematics (PCM) or Biology (PCB)", "50 or 100", "2 or 1", "100"],
        ["Total", "150 (PCM) / 200 (PCB)", "", "200"],
      ],
    },
    marking: [
      "Physics, Chemistry and Biology: 1 mark per correct answer",
      "Mathematics: 2 marks per correct answer",
      "No negative marking, so every question should be attempted",
      "Physics and Chemistry form the first 90-minute section; it closes before the second section opens",
    ],
    dates: {
      title: "MHT CET 2027 dates",
      body: "The CET Cell has not yet confirmed MHT CET 2027 dates. Reports in September and October 2026 indicate the schedule of attempts is under review. Check the CET Cell website for the official notice; we update this page when it is published.",
    },
    eligibility: [
      "Passed or appearing in Class 12 Science with Physics and Chemistry, plus Mathematics (PCM) or Biology (PCB)",
      "Maharashtra state quota seats have domicile requirements set by the CET Cell",
    ],
    tips: [
      { title: "Speed is everything", body: "Physics and Chemistry give 90 minutes for 100 questions. Practise timed sets until you average under a minute per question." },
      { title: "Master the State Board textbook", body: "Around 80 percent of the paper is from Class 12. The Maharashtra Board textbooks are the main source." },
      { title: "Attempt every question", body: "With no negative marking, an unanswered question is a lost chance. Make an educated guess when time runs short." },
      { title: "Mathematics carries double marks", body: "For PCM students, each Mathematics question is worth 2 marks, so it decides rank more than any other subject." },
    ],
    faqs: [
      ["Is there negative marking in MHT CET?", "No. There is no negative marking in MHT CET."],
      ["How much of MHT CET is from Class 11?", "About 20 percent of the paper is from Class 11 and 80 percent from Class 12."],
      ["Can I take MHT CET with JEE Main?", "Yes. Many students take both. The syllabus overlaps, though MHT CET needs more speed and follows the State Board textbooks."],
    ],
    course: "mht-cet",
  },
];

export const getExam = (slug: string) => EXAMS.find((e) => e.slug === slug);
