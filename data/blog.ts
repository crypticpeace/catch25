export type Block =
  | { t: "p"; text: string }
  | { t: "h2"; text: string }
  | { t: "h3"; text: string }
  | { t: "ul"; items: string[] }
  | { t: "ol"; items: string[] }
  | { t: "table"; head: string[]; rows: string[][] };

export type Post = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  keywords: string[];
  date: string;
  readMins: number;
  category: "JEE" | "NEET" | "MHT CET" | "Parents" | "Study tips";
  body: Block[];
};

export const POSTS: Post[] = [
  {
    slug: "jee-main-2027-session-1-dates-pattern",
    title: "JEE Main 2027 Session 1: dates, pattern and a 100-day plan",
    metaTitle: "JEE Main 2027 Session 1 Dates, Pattern & 100-Day Plan",
    description: "JEE Main 2027 Session 1 is scheduled for late January 2027. Here are the tentative dates, the Paper 1 pattern and a 100-day plan for Class 12 students.",
    keywords: ["JEE Main 2027 session 1", "JEE Main 2027 dates", "JEE Main 100 day plan", "JEE Main preparation Class 12"],
    date: "2026-10-14",
    readMins: 6,
    category: "JEE",
    body: [
      { t: "p", text: "NTA's exam calendar places JEE Main 2027 Session 1 on 22 to 24 January and 28 to 30 January 2027, with 31 January held in reserve. The dates are tentative until the information bulletin is published, but they give Class 12 students roughly 100 days from mid-October to prepare." },
      { t: "h2", text: "The Paper 1 pattern" },
      { t: "p", text: "Paper 1 (B.E. and B.Tech) is a 3-hour computer-based test with 75 questions: 25 each in Physics, Chemistry and Mathematics. Each subject has 20 multiple-choice questions and 5 numerical-value questions, and all 75 are compulsory." },
      { t: "table", head: ["", "MCQ", "Numerical", "Marks"], rows: [["Physics", "20", "5", "100"], ["Chemistry", "20", "5", "100"], ["Mathematics", "20", "5", "100"], ["Total", "60", "15", "300"]] },
      { t: "p", text: "A correct answer earns 4 marks and a wrong answer loses 1, in both sections. That makes careless numerical answers as costly as wrong MCQs." },
      { t: "h2", text: "A 100-day plan" },
      { t: "h3", text: "Days 1 to 50: close the syllabus gaps" },
      { t: "ul", items: ["List every chapter you have not revised since Class 11 and schedule it.", "Spend about two hours a day on your weakest subject and one hour each on the others.", "Take one full-length mock a week to keep exam stamina."] },
      { t: "h3", text: "Days 51 to 85: practise in exam conditions" },
      { t: "ul", items: ["Move to two full mocks a week, at the same time of day as your exam slot.", "Keep an error log: for every wrong answer, note whether it was a concept, calculation or reading mistake.", "Practise numerical-value questions with a timer."] },
      { t: "h3", text: "Days 86 to 100: revise, do not learn new topics" },
      { t: "ul", items: ["Revise formula sheets and your error log daily.", "Take your last full mock three or four days before the exam.", "Sleep normally. Late nights in the final week cost more marks than they gain."] },
      { t: "h2", text: "Do not forget the boards" },
      { t: "p", text: "Board practicals and prelims often fall in the same months as Session 1. Plan school exams into your timetable now, so they do not take time from the final JEE revision weeks." },
      { t: "p", text: "Catch25 students follow this structure with a full-length JEE-pattern test every Sunday and a one-to-one review of each test with their mentor." },
    ],
  },
  {
    slug: "choosing-jee-neet-coaching-kandivali-borivali",
    title: "Choosing a JEE or NEET coaching class in Mumbai: 8 questions to ask",
    metaTitle: "How to Choose JEE / NEET Coaching in Mumbai",
    description: "Eight questions parents should ask before choosing a JEE, NEET or MHT CET coaching class across Mumbai.",
    keywords: ["best coaching class Mumbai", "JEE coaching Mumbai", "NEET coaching Mumbai", "how to choose coaching class"],
    date: "2026-10-10",
    readMins: 5,
    category: "Parents",
    body: [
      { t: "p", text: "Parents in Mumbai have dozens of coaching options, from national brands to local institutes. Advertisements look alike, so the useful comparison happens in the counselling room. These are the questions worth asking." },
      { t: "ol", items: [
        "How many students are in one batch? Ask for the actual number in the batch your child would join, not the average.",
        "Who will teach my child? Ask to meet the faculty for each subject, and how long they have taught at the institute.",
        "How are doubts solved? Find out whether there is scheduled one-to-one time or only questions at the end of a lecture.",
        "How often are tests held, and what happens after? A test is only useful if someone reviews the mistakes with the student.",
        "What do parents receive? Ask to see a sample performance report and how often parent meetings are held.",
        "Where will my child study outside class? A library or study area with long hours matters for students who cannot study well at home.",
        "How long is the commute? A shorter journey on the Western line adds up to hours of study time every week.",
        "Can we see verified results? Ask for results with names, exam and year, ideally with scorecards.",
      ] },
      { t: "h2", text: "Why batch size matters most" },
      { t: "p", text: "In a batch of a hundred, a teacher cannot tell who stopped following ten minutes ago. In a small batch, the teacher notices and slows down. This is why Catch25 was founded on the idea of batches small enough for every teacher to know every student." },
      { t: "p", text: "Whichever institute you choose, a demo class and a counselling session will answer most of these questions in under an hour." },
    ],
  },
  {
    slug: "class-11-study-plan-boards-and-entrance",
    title: "Class 11 Science: how to prepare for boards and JEE, NEET or CET together",
    metaTitle: "Class 11 Study Plan for Boards + JEE / NEET / CET",
    description: "A practical Class 11 Science study plan for students preparing for board exams and JEE, NEET or MHT CET at the same time.",
    keywords: ["class 11 study plan", "11th science JEE preparation", "11th science NEET preparation", "11th science classes Mumbai"],
    date: "2026-10-05",
    readMins: 5,
    category: "Study tips",
    body: [
      { t: "p", text: "Class 11 is where entrance preparation is won or lost. Most of the JEE and NEET syllabus begins here, and topics like calculus, vectors, mechanics and organic chemistry come back in every later chapter." },
      { t: "h2", text: "One syllabus, two depths" },
      { t: "p", text: "Boards and entrance exams cover mostly the same chapters. The difference is depth: boards reward complete, well-written answers, while JEE and NEET reward speed and the ability to apply a concept to an unfamiliar problem. Studying each chapter once, to entrance depth, and then practising board-style answers is faster than studying it twice." },
      { t: "h2", text: "A weekly rhythm that works" },
      { t: "ul", items: [
        "Revise the day's class within 24 hours, while it is fresh.",
        "Solve entrance-level problems on each chapter before moving to the next.",
        "Write one board-style answer set each weekend for a finished chapter.",
        "Take a weekly test and spend as long reviewing it as you spent writing it.",
      ] },
      { t: "h2", text: "Common Class 11 mistakes" },
      { t: "ul", items: [
        "Treating Class 11 as a warm-up year because the board exam is a year away.",
        "Skipping Mathematics practice in favour of theory reading.",
        "Leaving doubts unasked until they pile up before exams.",
      ] },
      { t: "p", text: "Catch25's Two-Year Integrated programmes are designed around this approach, with daily classes, a test every Sunday and one-to-one doubt sessions." },
    ],
  },
];

export const getPost = (slug: string) => POSTS.find((p) => p.slug === slug);
