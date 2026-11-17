/**
 * Faculty. Add each teacher once the questionnaire (section 5) is returned.
 * photo: path under /public, e.g. "/images/faculty/name.jpg"
 */
export type Person = {
  name: string;
  role: string;
  subject?: string;
  qualification: string;
  experience?: string;
  bio: string;
  initials: string;
  photo?: string;
};

export const LEADERSHIP: Person[] = [
  {
    name: "Prof. Saurabh Patel",
    role: "Founder and Director",
    qualification: "M.Tech, University of Mumbai",
    experience: "15+ years teaching, 3 years industry",
    bio: "A former professor at D.J. Sanghvi College of Engineering and Bhagubhai Mafatlal Polytechnic, he founded Catch25 in 2013 with a first batch of 16 students and the belief that every student should be known by their teacher.",
    initials: "SP",
  },
  {
    name: "Mrs. Yashika Patel",
    role: "Director",
    qualification: "B.E. Computer Science, Oxford Brookes University",
    bio: "Leads academic operations and the student experience at Catch25, from batch planning to parent communication.",
    initials: "YP",
  },
];

/* Subject faculty: empty until profiles are supplied. The faculty page shows departments meanwhile. */
export const FACULTY: Person[] = [];

export const DEPARTMENTS = [
  { subject: "Physics", desc: "Mechanics to modern physics, taught through derivation and problem-solving so formulas are understood, not memorised." },
  { subject: "Chemistry", desc: "Physical, organic and inorganic chemistry, with NCERT-based teaching for NEET and reaction-mechanism depth for JEE." },
  { subject: "Mathematics", desc: "Algebra, calculus, coordinate geometry and vectors, practised from board level up to JEE Advanced difficulty." },
  { subject: "Biology", desc: "Botany and Zoology taught line by line from NCERT, with diagram practice and NEET-pattern question drills." },
];
