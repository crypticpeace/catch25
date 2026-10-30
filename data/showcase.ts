/**
 * HOMEPAGE RESULTS SHOWCASE
 * Order: IIT → NIT → JEE → MHT CET → NEET → Boards.
 * Sources: Catch25 Toppers 2026 deck, Catch25 brochure (Feb 2026) and its printed results pages.
 *
 * Photos are matched automatically by name (see data/photos.json):
 *   /public/images/results  clean cut-outs from the 2026 deck
 *   /public/images/toppers  faces cropped from the printed brochure
 * A student without a photo shows their initials.
 *
 * Slide kinds:
 *   hero    one student, poster layout (IIT and NIT admissions)
 *   podium  the top three of an exam on pedestals, college on each pedestal
 *   finale  closing call to action
 */
import PHOTOS from "./photos.json";

export type Person = { name: string; score?: string; unit?: string; college?: string; tag?: string };
export type SectionKey = "IIT" | "NIT" | "JEE" | "MHT CET" | "NEET" | "Boards";
export type ShowSlide = {
  section: SectionKey | "Next";
  kind: "hero" | "podium" | "finale";
  kicker: string;
  title: string;
  people: Person[];
  /** big headline, one entry per line (lines are joined on desktop unless stack is set) */
  lines: string[];
  stack?: boolean;
  /** line under the headline */
  sub: string;
  /** pill, top right */
  pill?: string;
  /** hero only: gold box, middle cell [small, big, small?] */
  badge?: string;
  mid?: [string, string, string?];
  /** seconds on screen */
  seconds?: number;
};

export const SECTIONS: SectionKey[] = ["IIT", "NIT", "JEE", "MHT CET", "NEET", "Boards"];

const slug = (n: string) => n.toLowerCase().replace(/[^a-z]+/g, "-").replace(/^-|-$/g, "");
type PhotoRow = { src: string; cutout: boolean; face?: boolean };
export const photoFor = (name: string): PhotoRow | undefined => (PHOTOS as Record<string, PhotoRow>)[slug(name)];

/* Transparent cut-outs in the Catch25 uniform for the slideshow.
   The deck photos are already cut out; these four were upscaled and cut out from the brochure/posters. */
const UNIFORM = new Set(["keyur-jagad", "atharva-tambe", "ashish-singh", "maulik-sharma"]);
export const portraitFor = (name: string): PhotoRow | undefined =>
  UNIFORM.has(slug(name)) ? { src: `/images/uniform/${slug(name)}-cut.webp`, cutout: true, face: FACE_ONLY.has(slug(name)) } : photoFor(name);
/* only a head-and-shoulders photo exists for these two, so they are shown a little smaller */
const FACE_ONLY = new Set(["ashish-singh", "maulik-sharma"]);

/* helpers: P(name, score, unit, college) */
const P = (name: string, score?: string, unit?: string, college?: string, tag?: string): Person => ({ name, score, unit, college, tag });
const pct = (name: string, score: string, college?: string, tag?: string) => P(name, score, "%ile", college, tag);
const byScore = (a: Person, b: Person) => parseFloat(b.score ?? "0") - parseFloat(a.score ?? "0");

/* ------------------------------------------------------------------ JEE Main 2026 */
const JEE_2026: Person[] = [
  pct("Karan Chourasia", "99.72", "NIT Rourkela"),
  pct("Raghavendra Tiwari", "99.69", "NIT Allahabad"),
  pct("Krishna Shukla", "99.36"),
  pct("Banaj Sharma", "98.76", "COEP"),
  pct("Sujal Bagwe", "97.85", "DJ Sanghvi"),
  pct("Samarth Darji", "97.68", "IIIT Trichy"),
  pct("Bhaumik Mali", "97.66", "IIIT Kota"),
  pct("Ayan Khan", "97.62"),
  pct("Om Dave", "97.58", "SPIT"),
  pct("Mitesh Solanki", "96.75", "BITS Hyderabad"),
  pct("Murshid Shaikh", "96.52"),
  pct("Nishtha Patel", "96.43"),
  pct("Chandan Gupta", "96.34"),
  pct("Vyom Dave", "96.09", "DJ Sanghvi"),
  pct("Aarnav Gahlot", "96.09"),
  pct("Aryan Ashra", "95.92", "SPIT"),
  pct("Atharva Tambe", "95.77", "IIST"),
  pct("Jishan Patel", "95.68"),
  pct("Abdullah Shaikh", "95.02"),
  pct("Ayush Yadav", "94.65"),
  pct("Mohit Rao", "94.30"),
  pct("Rachit Shah", "93.89"),
  pct("Ayush Patel", "93.84"),
  pct("Pyanshu Vishwakarma", "93.56", "Thakur"),
];

/* ------------------------------------------------------------------ MHT CET 2026 (incl. JEE students' CET scores) */
const CET_2026: Person[] = [
  /* Official 2026 list: Catch25 Hall of Fame poster */
  pct("Nidhi Vishwakarma", "99.88"),
  pct("Harsh Kumar", "99.82", "SPIT CS (TFWS)"),
  pct("Jishan Patel", "99.80"),
  pct("Banaj Sharma", "99.79", "COEP"),
  pct("Ashok Patel", "99.78"),
  pct("Raghavendra Tiwari", "99.76"),
  pct("Nakshtra Jain", "99.73", "DJ Sanghvi CS"),
  pct("Om Dave", "99.72", "SPIT"),
  pct("Murshid Shaikh", "99.68"),
  pct("Saloni Parab", "99.65"),
  pct("Hiya Dharia", "99.54", "ICT Mumbai"),
  pct("Aarnav Gahlot", "99.52"),
  pct("Krish Ranpura", "99.42"),
  pct("Samarth Darji", "99.39", "IIIT Trichy"),
  pct("Aryan Ashra", "99.36", "SPIT"),
  pct("Dheeraj Prajapati", "99.29", "VJTI"),
  pct("Manthan Vira", "99.21", "SPIT CS"),
  pct("Reva Dusa", "99.17", "VJTI Civil"),
  pct("Anish Gurav", "99.14"),
  pct("Bhavya Solanki", "99.05"),
  pct("Anushka Panchal", "98.99"),
  pct("Vedanshi Kakadia", "98.95"),
  pct("Veer Riziya", "98.81"),
  pct("Jai Patel", "98.70"),
  pct("Vyom Dave", "98.65", "DJ Sanghvi"),
  pct("Harshita Gauda", "98.58"),
  pct("Nishit Mohnani", "98.55"),
  pct("Ayush Patel", "98.48"),
  pct("Jash Satra", "98.41"),
  pct("Abdullah Shaikh", "98.37"),
  pct("Sujal Bagwe", "98.25", "DJ Sanghvi"),
  pct("Aryan Singal", "98.21"),
  pct("Chaitya Kariya", "98.21"),
  pct("Ezekeil Mahe", "98.15"),
  pct("Simran Pal", "98.13"),
  pct("Ayan Khan", "98.08"),
  pct("Ayesha Waghdare", "98.04"),
  pct("Tanmay Rapelli", "97.92"),
  pct("Krishna Tiwari", "97.75"),
  pct("Drashti Padia", "97.65"),
  pct("Anika Agarwal", "97.51"),
  pct("Shruti Bhosale", "97.42", "SPCE"),
  pct("Pyanshu Vishwakarma", "97.42", "Thakur"),
  pct("Harsh Gagat", "97.40"),
  pct("Mili Dube", "97.21"),
  pct("Rachit Shah", "97.11"),
  pct("Ayush Yadav", "97.02"),
  pct("Vaishnavi Thakur", "97.02"),
  pct("Nishtha Patel", "97.00"),
  pct("Mohit Rao", "97.00"),
];

/* ------------------------------------------------------------------ MHT CET previous years ("Road to Success" + "Previous years" pages) */
export const CET_PREV: Person[] = [
  // Road to Success page 1
  pct("Parth Gada", "99.69", "VJTI"), pct("Darshan Davda", "99.46", "DJ Sanghvi"), pct("Kanav Patel", "99.45", "SPIT"), pct("Maulik Sharma", "99.41", "NIT Shibpur"),
  pct("Sagar Sharma", "99.39", "NIT Jalandhar"), pct("Yug Deshmukh", "99.37", "SPIT"), pct("Aman Gupta", "99.32", "DJ Sanghvi"), pct("Pankit Vora", "99.30", "DJ Sanghvi"),
  pct("Parth Shibe", "99.23", "DJ Sanghvi"), pct("Vedant Parab", "99.03", "DJ Sanghvi"), pct("Gaurang Gohil", "98.97", "COEP"), pct("Kavya Rane", "98.94", "DJ Sanghvi"),
  pct("Bhumi Dangodra", "98.82", "DJ Sanghvi"), pct("Nityananda Upadhyay", "98.82", "NIT Trichy"), pct("Swarda Nakashe", "98.73", "MIT Pune"), pct("Ibrahim Shirazi", "98.62", "MIT Pune"),
  pct("Surabhi Pandey", "98.72", "IIIT Pune"), pct("Vandan Jethwa", "98.60", "SPIT"), pct("Mahavir Kacha", "98.50", "DJ Sanghvi"), pct("Dhruvil Sarvaiya", "98.49", "DJ Sanghvi"),
  pct("Lakshya Sudrik", "98.28", "DJ Sanghvi"), pct("Aditya Hamirani", "98.26", "DJ Sanghvi"), pct("Ashok Devda", "98.18", "DJ Sanghvi"), pct("Vikramaditya Gupta", "98.11", "Thakur"),
  pct("Rupesh Yadav", "98.10", "Thakur"), pct("Aditya Shaw", "98.09", "Thakur"), pct("Shivani Pandit", "98.06", "DJ Sanghvi"), pct("Harsh Prabhu", "97.96", "DJ Sanghvi"),
  pct("Bhavya Solanki", "97.89", "SPIT"), pct("Saad Parkar", "97.73", "Thadomal Shahani"), pct("Kriti Shah", "97.71", "DJ Sanghvi"), pct("Anand Dangi", "97.63", "Thakur"),
  pct("Dhruva Panmand", "97.60", "Thakur"), pct("Krish Maurya", "97.60", "Thakur"), pct("Kirtan Rathod", "97.56", "DJ Sanghvi"), pct("Kunal Sawant", "97.53", "Thadomal Shahani"),
  // Road to Success page 2
  pct("Durvesh Ghawali", "97.51", "DJ Sanghvi"), pct("Karthik Poojari", "97.48", "Thakur"), pct("Shivam Singh", "97.46", "VJTI"), pct("Parshva Shah", "97.44", "Thakur"),
  pct("Gaurav Lohati", "97.34", "Thadomal Shahani"), pct("Vishakha Samant", "97.21", "DJ Sanghvi"), pct("Prathmesh Baldkar", "97.19", "Thakur"), pct("Bhumi Shah", "97.17", "DJ Sanghvi"),
  pct("Akisha Yadav", "97.12", "Fr. Agnel"), pct("Gaurang Ajgoankar", "97.09", "RGIT"), pct("Ashwini Yadav", "97.09", "Fr. Agnel"), pct("Atharva Bhurke", "97.04", "SPIT"),
  pct("Zeon Dsouza", "97.03", "Fr. Agnel"), pct("Aditya Tirthkar", "96.97", "St. Francis"), pct("Poornam Singhal", "96.86", "DJ Sanghvi"), pct("Jay Chandrani", "96.82", "Thadomal Shahani"),
  pct("Tanishka Dhanudharmo", "96.82", "DJ Sanghvi"), pct("Ronak Hamirani", "96.69", "DJ Sanghvi"), pct("Vaibhav Pawar", "96.49", "TSDC"), pct("Adish Shah", "96.49", "DJ Sanghvi"),
  pct("Aayush Vengurlekar", "96.10", "Thakur"), pct("Dharmik Gada", "96.03", "Thakur"), pct("Jash Akhade", "96.00", "Don Bosco"), pct("Divyam Golambare", "96.00", "Vidyalankar"),
  pct("Taher Kanchwala", "95.98", "Fr. Agnel"), pct("Ronak Darji", "95.87", "DJ Sanghvi"), pct("Sagar Tiwari", "95.63", "Thakur"), pct("Arwa Vasaiwala", "95.60", "Thakur"),
  pct("Affan Ansari", "95.57", "TSDC"), pct("Nikhil Mishra", "95.40", "SAKEC"), pct("Akshar Chawda", "95.38", "DJ Sanghvi"), pct("Priyam Gala", "95.37", "DJ Sanghvi"),
  pct("Parth Pimple", "95.27", "RGIT"), pct("Tanusha Sawant", "95.24", "RGIT"), pct("Shreya Vishwakarma", "95.24", "RGIT"), pct("Saini Yadav", "95.23", "Thakur"),
  pct("Sarthak Gupta", "95.20", "Thakur"), pct("Shivam Yadav", "95.06", "Thakur"), pct("Aryan Bhalerao", "95.00", "Thakur"),
  // Previous years toppers page
  pct("Paresh Kshetri", "99.99"), pct("Mohammad Ali", "99.95"), pct("Mayank Gohil", "99.79"), pct("Khushal Dhanuka", "99.78"), pct("Samarth Dave", "99.78"),
  pct("Bhuvanesh Trivedi", "99.76"), pct("Tanush Sallan", "99.68"), pct("Shubham Pal", "99.67"), pct("Meet Patel", "99.65"),
  pct("Rajvi Vora", "99.65"), pct("Vidhi Shah", "99.65"), pct("Akhilesh Yadav", "99.65"), pct("Jay Dave", "99.58"), pct("Aniket Pethe", "99.56"),
  pct("Jayom Shingte", "99.56"), pct("Devansh Sanghvi", "99.52"), pct("Atharva Mahadik", "99.48"), pct("Tisha Parmar", "99.42"),
  pct("Hetvi Upadhyay", "99.41"), pct("Jigar Shah", "99.36"), pct("Kartik Jolapara", "99.36"), pct("Nikhil Sharma", "99.36"), pct("Bhavya Gada", "99.30"),
  pct("Om Patel", "99.26"), pct("Tanish Rane", "99.22"), pct("Sarthi Kanade", "99.18"), pct("Onkar Musale", "99.15"),
  pct("Manan Nandu", "99.08"), pct("Rameez Shaikh", "99.05"), pct("Jay Kale", "99.01"), pct("Ashwini Mukkan", "98.99"), pct("Aadi Purav", "98.98"),
  pct("Rebekah Dais", "98.92"), pct("Yash Kanjaria", "98.89"), pct("Gaurav Chudasama", "98.85"), pct("Rudraksh Mehta", "98.85"),
  pct("Anish Jaiswal", "98.75"), pct("Lavneesh Sharma", "98.70"), pct("Tanish Shah", "98.66"), pct("Mehul Kadam", "98.58"), pct("Vedanshi Tiwari", "98.54"),
  pct("Harsh Shah", "98.52"), pct("Mahesh Patel", "98.50"), pct("Bhushan Mundhe", "98.42"), pct("Akshat Chauhan", "98.33"),
  pct("Heer Shah", "98.37"), pct("Parth Waghela", "98.29"), pct("Khush Shah", "98.22"), pct("Krish Shetty", "98.03"), pct("Shubh Sarvaiya", "97.93"),
  pct("Chitra Pandey", "97.90"), pct("Jainam Mehta", "97.86"), pct("Vishal Gupta", "97.77"), pct("Nevan Panchal", "97.72"),
  pct("Hetam Patel", "97.71"), pct("Darshan Dushing", "97.57"), pct("Aayush Gupta", "97.51"), pct("Vanita Gogge", "97.27"), pct("Vaishnavi Tiwari", "97.17"),
  pct("Rajiv Shah", "97.15"), pct("Aditya Godwa", "97.15"), pct("Nabeel Parve", "97.06"), pct("Ronaldo Gonsalves", "97.01"),
  pct("Shreya Mane", "97.01"), pct("Ronak Parmar", "96.87"), pct("Diya Rughani", "96.71"), pct("Hetvi Lad", "96.69"), pct("Arya Shewale", "96.68"),
  pct("Kirtan Shah", "96.62"), pct("Sara Jawadvala", "96.57"), pct("Darshan Salunkhe", "96.54"), pct("Chirag Reihan", "96.33"), pct("Firdosh Shaikh", "96.28"),
  pct("Rushabh Kenia", "96.07"), pct("Sonal Sharma", "96.06"), pct("Taitil Chedda", "96.06"), pct("Ishita Yadav", "95.93"), pct("Garima Singh", "95.87"),
  pct("Sheldon Chettier", "95.85"), pct("Nirav Sallan", "95.84"), pct("Sahil Shikare", "95.69"), pct("Akshat Chawda", "95.69"), pct("Kevin Dedhia", "95.66"),
  pct("Pooja Swami", "95.66"), pct("Tarun Asthana", "95.49"), pct("Sachin Jangid", "95.39"), pct("Disha Kadave", "95.30"), pct("Aayush Gupta", "95.27"),
  pct("Pooja Chaurasia", "95.21"), pct("Sawmya Dadheech", "95.19"), pct("Mohit Parmar", "95.17"), pct("Jatin Vishwakarma", "95.08"), pct("Sujal Jhangam", "95.06"),
  pct("Shubham Banekar", "95.06"), pct("Devarsh Shah", "95.01"), pct("Suryodaya Pandey", "95.00"),
].sort(byScore);

/* ------------------------------------------------------------------ NEET */
const neet = (name: string, score: string, college?: string) => P(name, score, "/720", college);
const NEET_2026: Person[] = [
  neet("Murshid Shaikh", "582", "GMC Solapur"), neet("Deepak Kesarwani", "562", "GMC Nagpur"), neet("Shubham Yadav", "554"),
  neet("Chandan Gupta", "544"), neet("Samriddhi Yadav", "541"), neet("Anushka More", "526"), neet("Jyoti Jaiswar", "518"),
  neet("Divyansh Pandey", "513"), neet("Aarnav Gahlot", "512"), neet("Nidhi Vishwakarma", "500"), neet("Siddharth", "498"),
  neet("Jishan Patel", "490"), neet("Ritesh Waigqnkar", "488"), neet("Shreya Adawale", "467"), neet("Harshil Panchal", "458"), neet("Aakash Sharma", "455"),
];
const NEET_PREV: Person[] = [
  neet("Nitin Goswami", "675", "LTMMC Sion"), neet("Paresh Kshetri", "668", "AIIMS Guwahati"), neet("Jyotika Jeganathan", "663", "KEM Mumbai"),
  neet("Sheetal Gupta", "648", "Grant Medical (JJ)"), neet("Vindhesh Mishra", "638", "GMC Solapur"), neet("Pankaj Kandi", "626", "VPMC Nashik"),
  neet("Yogita Soni", "625", "Kashibai Navale, Pune"), neet("Akshay Bajpai", "618", "GMC Ambernath"), neet("Rajvi Vora", "615", "Cooper Hospital"),
  neet("Shubham Pal", "614", "GMC Baramati"), neet("Sheetal Jha", "612", "GMC Baramati"), neet("Harshika Lodha", "609", "SMBT Igatpuri"),
  neet("Rahul Lohar", "606", "Dr. Rajendra Gode, Amravati"), neet("Akhilesh Yadav", "605", "GMC Baramati"), neet("Ashwini Mukkan", "602", "LTMMC Sion"),
];

/* ------------------------------------------------------------------ Boards (HSC) */
const hsc = (name: string, score: string, college?: string) => P(name, score, "%", college);
const HSC_2026: Person[] = [hsc("Ashok Patel", "94.17"), hsc("Shruti Bhosale", "91.50", "SPCE"), hsc("Gautam Chavda", "91.33"), hsc("Soham Rane", "90.67")];
const HSC_PREV: Person[] = [
  hsc("Rajvi Vora", "95.00"), hsc("Hetvi Upadhyay", "94.50"), hsc("Kavya Rane", "94.33"), hsc("Jeel Jain", "94.33"), hsc("Ishita Yadav", "94.16"),
  hsc("Bhuvanesh Trivedi", "93.67"), hsc("Devarsh Shah", "93.50"), hsc("Tanish Risham", "93.33"), hsc("Aadit Khanna", "93.00"), hsc("Krishaang Mody", "92.80"),
  hsc("Ritika Nair", "92.66"), hsc("Paresh Kshetri", "92.33"), hsc("Stuti Shah", "92.33"), hsc("Aditya Rathod", "91.83"),
];

/* ------------------------------------------------------------------ IIT and NIT admissions */
const IIT: Person[] = [
  P("Keyur Jagad", undefined, undefined, "IIT Kanpur"),
  P("Ashish Singh", undefined, undefined, "IIT Delhi"),
  P("Atharva Tambe", undefined, undefined, "IIST", "Thiruvananthapuram"),
];
const NIT: Person[] = [
  P("Karan Chourasia", "99.72", "%ile", "NIT Rourkela"),
  P("Raghavendra Tiwari", "99.69", "%ile", "NIT Allahabad"),
  P("Maulik Sharma", "99.41", "%ile", "NIT Shibpur"),
  P("Sagar Sharma", "99.39", "%ile", "NIT Jalandhar"),
  P("Nikhil Sharma", "99.36", "%ile", "NIT Shibpur"),
  P("Nityananda Upadhyay", "98.82", "%ile", "NIT Trichy"),
  P("Lavneesh Sharma", "98.70", "%ile", "NIT Shibpur"),
];
const IIIT: Person[] = [
  P("Samarth Darji", "97.68", "%ile", "IIIT Trichy"),
  P("Bhaumik Mali", "97.66", "%ile", "IIIT Kota"),
  P("Surabhi Pandey", "98.72", "%ile", "IIIT Pune"),
];


/* One slide per IIT / NIT student, then the top three of each exam on a podium. */
const hero = (p: Person, lines: string[], sub: string, badge: string, mid: [string, string, string?], section: SectionKey): ShowSlide => ({
  section, kind: "hero", kicker: section === "IIT" ? "IIT admissions" : "NIT admissions", pill: "Proud moment",
  title: `${p.name}, ${p.college}`, people: [p], lines, sub, badge, mid, seconds: 6,
});
const [KEYUR, ASHISH, ATHARVA] = IIT;
const [KARAN, RAGHAV, MAULIK] = NIT;

export const SHOW: ShowSlide[] = [
  hero(KEYUR, ["IIT", "KANPUR"], "Indian Institute of Technology Kanpur", "IIT", ["Result", "Qualified", "JEE Advanced"], "IIT"),
  hero(ASHISH, ["IIT", "DELHI"], "Indian Institute of Technology Delhi", "IIT", ["Result", "Qualified", "JEE Advanced"], "IIT"),
  hero(ATHARVA, ["IIST"], "Indian Institute of Space Science and Technology, Thiruvananthapuram", "IIST", ["Result", "Qualified", "JEE Advanced"], "IIT"),
  hero(KARAN, ["NIT", "ROURKELA"], "National Institute of Technology Rourkela", "NIT", ["Result", "99.72 %ile", "JEE Main 2026"], "NIT"),
  hero(RAGHAV, ["NIT", "ALLAHABAD"], "Motilal Nehru National Institute of Technology", "NIT", ["Result", "99.69 %ile", "JEE Main 2026"], "NIT"),
  hero(MAULIK, ["NIT", "SHIBPUR"], "IIEST Shibpur, Kolkata", "NIT", ["Result", "99.41 %ile", "MHT CET"], "NIT"),
  { section: "JEE", kind: "podium", kicker: "JEE Main 2026", pill: "Toppers 2026", title: "JEE Main toppers 2026", lines: ["JEE MAIN", "TOPPERS"], sub: "30+ students qualified for JEE Advanced in Phase 1", people: JEE_2026.slice(0, 3), seconds: 7 },
  { section: "MHT CET", kind: "podium", kicker: "MHT CET 2026", pill: "Toppers 2026", title: "MHT CET toppers 2026", lines: ["MHT CET", "TOPPERS"], sub: "Three students at 99.8 percentile and above", people: CET_2026.slice(0, 3), seconds: 7 },
  { section: "NEET", kind: "podium", kicker: "NEET UG 2026", pill: "Toppers 2026", title: "NEET toppers 2026", lines: ["NEET UG", "TOPPERS"], sub: "Top scores out of 720", people: NEET_2026.slice(0, 3), seconds: 7 },
  { section: "Boards", kind: "podium", kicker: "HSC Boards 2026", pill: "Toppers 2026", title: "Board toppers 2026", lines: ["HSC BOARD", "TOPPERS"], sub: "Class 12 Science, Maharashtra State Board", people: HSC_2026.slice(0, 3), seconds: 7 },
  { section: "Next", kind: "finale", kicker: "Admissions open", pill: "JEE · NEET · MHT CET", title: "Your name could be next", lines: ["YOUR NAME", "COULD BE NEXT"], stack: true, sub: "Small batches. Big ranks. Coaching in Mumbai since 2013.", people: [], seconds: 7 },
];

export const SHOW_COUNTS = {
  jee: JEE_2026.length,
  cet: CET_2026.length + CET_PREV.length,
  neet: NEET_2026.length + NEET_PREV.length,
  boards: HSC_2026.length + HSC_PREV.length,
  nit: NIT.length,
};
