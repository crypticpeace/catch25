/**
 * RESULTS
 * Source: Catch25 "Toppers 2026" slide deck and the Catch25 brochure (Feb 2026).
 * Every published result must be backed by the student's scorecard and a signed
 * parent consent form (questionnaire Appendix A).
 *
 * year:  leave out for results the brochure lists without a year (shown as "Past toppers")
 * photo: file name in /public/images/results (without .webp)
 * also:  a second result shown under the main score
 * star:  order on the homepage rail and the results podium (1 = top)
 */
export type ExamKey = "jee-main" | "jee-adv" | "neet" | "mht-cet" | "class12" | "nata";

export type Result = {
  name: string;
  exam: ExamKey;
  year?: number;
  score: string;
  unit?: string;
  college?: string;
  also?: string;
  photo?: string;
  star?: number;
};

export const RESULTS_ARE_SAMPLE = false;

export const EXAM_LABEL: Record<ExamKey, string> = {
  "jee-main": "JEE Main",
  "jee-adv": "JEE Advanced",
  neet: "NEET UG",
  "mht-cet": "MHT CET",
  class12: "HSC Boards",
  nata: "NATA",
};

export const EXAM_SUB: Record<ExamKey, string> = {
  "jee-main": "NIT, IIIT, GFTI",
  "jee-adv": "IIT admissions",
  neet: "MBBS and BDS",
  "mht-cet": "Maharashtra colleges",
  class12: "Class 12 Science",
  nata: "Architecture",
};

import { CET_PREV } from "./showcase";

const p = (s: string) => `/images/results/${s}.webp`;

export const RESULTS: Result[] = [
  /* ---------- NEET UG 2026 ---------- */
  { name: "Murshid Shaikh", exam: "neet", year: 2026, score: "582", unit: "/720", college: "GMC Solapur", also: "JEE Main 96.52 %ile · MHT CET 99.68 %ile", photo: p("murshid-shaikh"), star: 1 },
  { name: "Deepak Kesarwani", exam: "neet", year: 2026, score: "562", unit: "/720", college: "GMC Nagpur", photo: p("deepak-kesarwani"), star: 8 },
  { name: "Shubham Yadav", exam: "neet", year: 2026, score: "554", unit: "/720", photo: p("shubham-yadav"), star: 9 },
  { name: "Chandan Gupta", exam: "neet", year: 2026, score: "544", unit: "/720", photo: p("chandan-gupta") },
  { name: "Samriddhi Yadav", exam: "neet", year: 2026, score: "541", unit: "/720", photo: p("samriddhi-yadav") },
  { name: "Anushka More", exam: "neet", year: 2026, score: "526", unit: "/720", photo: p("anushka-more") },
  { name: "Jyoti Jaiswar", exam: "neet", year: 2026, score: "518", unit: "/720", photo: p("jyoti-jaiswar") },
  { name: "Divyansh Pandey", exam: "neet", year: 2026, score: "513", unit: "/720", photo: p("divyansh-pandey") },
  { name: "Aarnav Gahlot", exam: "neet", year: 2026, score: "512", unit: "/720", photo: p("aarnav-gahlot") },
  { name: "Nidhi Vishwakarma", exam: "neet", year: 2026, score: "500", unit: "/720", photo: p("nidhi-vishwakarma") },
  { name: "Siddharth", exam: "neet", year: 2026, score: "498", unit: "/720", photo: p("siddharth") },
  { name: "Jishan Patel", exam: "neet", year: 2026, score: "490", unit: "/720", photo: p("jishan-patel") },
  { name: "Ritesh Waigqnkar", exam: "neet", year: 2026, score: "488", unit: "/720", photo: p("ritesh-waigqnkar") },
  { name: "Shreya Adawale", exam: "neet", year: 2026, score: "467", unit: "/720", photo: p("shreya-adawale") },
  { name: "Harshil Panchal", exam: "neet", year: 2026, score: "458", unit: "/720", photo: p("harshil-panchal") },
  { name: "Aakash Sharma", exam: "neet", year: 2026, score: "455", unit: "/720", photo: p("aakash-sharma") },

  /* ---------- JEE Main 2026 (Phase 1) ---------- */
  { name: "Karan Chourasia", exam: "jee-main", year: 2026, score: "99.72", unit: "%ile", college: "NIT Rourkela", photo: p("karan-chourasia"), star: 4 },
  { name: "Raghavendra Tiwari", exam: "jee-main", year: 2026, score: "99.69", unit: "%ile", college: "NIT Allahabad", photo: p("raghavendra-tiwari"), star: 7 },
  { name: "Krishna Shukla", exam: "jee-main", year: 2026, score: "99.36", unit: "%ile", photo: p("krishna-shukla"), star: 10 },
  { name: "Banaj Sharma", exam: "jee-main", year: 2026, score: "98.76", unit: "%ile", college: "COEP", also: "MHT CET 99.79 %ile", photo: p("banaj-sharma") },
  { name: "Sujal Bagwe", exam: "jee-main", year: 2026, score: "97.85", unit: "%ile", college: "DJ Sanghvi", also: "MHT CET 98.25 %ile", photo: p("sujal-bagwe") },
  { name: "Samarth Darji", exam: "jee-main", year: 2026, score: "97.68", unit: "%ile", college: "IIIT Trichy", also: "MHT CET 99.39 %ile", photo: p("samarth-darji") },
  { name: "Bhaumik Mali", exam: "jee-main", year: 2026, score: "97.66", unit: "%ile", college: "IIIT Kota", photo: p("bhaumik-mali") },
  { name: "Ayan Khan", exam: "jee-main", year: 2026, score: "97.62", unit: "%ile", also: "MHT CET 98.08 %ile", photo: p("ayan-khan") },
  { name: "Om Dave", exam: "jee-main", year: 2026, score: "97.58", unit: "%ile", college: "SPIT", also: "MHT CET 99.72 %ile", photo: p("om-dave") },
  { name: "Mitesh Solanki", exam: "jee-main", year: 2026, score: "96.75", unit: "%ile", college: "BITS Hyderabad", photo: p("mitesh-solanki") },
  { name: "Nishtha Patel", exam: "jee-main", year: 2026, score: "96.43", unit: "%ile", also: "MHT CET 97 %ile", photo: p("nishtha-patel") },
  { name: "Chandan Gupta", exam: "jee-main", year: 2026, score: "96.34", unit: "%ile", photo: p("chandan-gupta") },
  { name: "Vyom Dave", exam: "jee-main", year: 2026, score: "96.09", unit: "%ile", college: "DJ Sanghvi", also: "MHT CET 98.65 %ile", photo: p("vyom-dave") },
  { name: "Aarnav Gahlot", exam: "jee-main", year: 2026, score: "96.09", unit: "%ile", photo: p("aarnav-gahlot") },
  { name: "Aryan Ashra", exam: "jee-main", year: 2026, score: "95.92", unit: "%ile", college: "SPIT", also: "MHT CET 99.36 %ile", photo: p("aryan-ashra") },
  { name: "Atharva Tambe", exam: "jee-main", year: 2026, score: "95.77", unit: "%ile" },
  { name: "Jishan Patel", exam: "jee-main", year: 2026, score: "95.68", unit: "%ile", photo: p("jishan-patel") },
  { name: "Abdullah Shaikh", exam: "jee-main", year: 2026, score: "95.02", unit: "%ile", also: "MHT CET 98.37 %ile", photo: p("abdullah-shaikh") },
  { name: "Ayush Yadav", exam: "jee-main", year: 2026, score: "94.65", unit: "%ile", also: "MHT CET 97.02 %ile", photo: p("ayush-yadav") },
  { name: "Mohit Rao", exam: "jee-main", year: 2026, score: "94.30", unit: "%ile", also: "MHT CET 97 %ile", photo: p("mohit-rao") },
  { name: "Rachit Shah", exam: "jee-main", year: 2026, score: "93.89", unit: "%ile", also: "MHT CET 97.11 %ile", photo: p("rachit-shah") },
  { name: "Ayush Patel", exam: "jee-main", year: 2026, score: "93.84", unit: "%ile", also: "MHT CET 98.48 %ile", photo: p("ayush-patel") },
  { name: "Pyanshu Vishwakarma", exam: "jee-main", year: 2026, score: "93.56", unit: "%ile", college: "Thakur College of Engineering", also: "MHT CET 97.42 %ile", photo: p("pyanshu-vishwakarma") },

  /* ---------- MHT CET 2026 ---------- */
  /* Official MHT CET 2026 toppers: Catch25 Hall of Fame poster (Oct 2026) */
  { name: "Nidhi Vishwakarma", exam: "mht-cet", year: 2026, score: "99.88", unit: "%ile", photo: p("nidhi-vishwakarma"), star: 2 },
  { name: "Harsh Kumar", exam: "mht-cet", year: 2026, score: "99.82", unit: "%ile", college: "SPIT, Computer Science (TFWS)", photo: p("harsh-kumar"), star: 3 },
  { name: "Jishan Patel", exam: "mht-cet", year: 2026, score: "99.80", unit: "%ile", photo: p("jishan-patel"), star: 5 },
  { name: "Banaj Sharma", exam: "mht-cet", year: 2026, score: "99.79", unit: "%ile", college: "COEP", photo: p("banaj-sharma") },
  { name: "Ashok Patel", exam: "mht-cet", year: 2026, score: "99.78", unit: "%ile", also: "HSC 94.17%", photo: p("ashok-patel"), star: 6 },
  { name: "Raghavendra Tiwari", exam: "mht-cet", year: 2026, score: "99.76", unit: "%ile", photo: p("raghavendra-tiwari") },
  { name: "Nakshtra Jain", exam: "mht-cet", year: 2026, score: "99.73", unit: "%ile", college: "DJ Sanghvi, Computer Science", photo: p("nakshtra-jain") },
  { name: "Om Dave", exam: "mht-cet", year: 2026, score: "99.72", unit: "%ile", college: "SPIT", photo: p("om-dave") },
  { name: "Murshid Shaikh", exam: "mht-cet", year: 2026, score: "99.68", unit: "%ile", photo: p("murshid-shaikh") },
  { name: "Saloni Parab", exam: "mht-cet", year: 2026, score: "99.65", unit: "%ile", photo: p("saloni-parab") },
  { name: "Hiya Dharia", exam: "mht-cet", year: 2026, score: "99.54", unit: "%ile", college: "ICT Mumbai", photo: p("hiya-dharia") },
  { name: "Aarnav Gahlot", exam: "mht-cet", year: 2026, score: "99.52", unit: "%ile", photo: p("aarnav-gahlot") },
  { name: "Krish Ranpura", exam: "mht-cet", year: 2026, score: "99.42", unit: "%ile", photo: p("krish-ranpura") },
  { name: "Samarth Darji", exam: "mht-cet", year: 2026, score: "99.39", unit: "%ile", college: "IIIT Trichy", photo: p("samarth-darji") },
  { name: "Aryan Ashra", exam: "mht-cet", year: 2026, score: "99.36", unit: "%ile", college: "SPIT", photo: p("aryan-ashra") },
  { name: "Dheeraj Prajapati", exam: "mht-cet", year: 2026, score: "99.29", unit: "%ile", college: "VJTI", photo: p("dheeraj-prajapati") },
  { name: "Manthan Vira", exam: "mht-cet", year: 2026, score: "99.21", unit: "%ile", college: "SPIT, Computer Science", photo: p("manthan-vira") },
  { name: "Reva Dusa", exam: "mht-cet", year: 2026, score: "99.17", unit: "%ile", college: "VJTI, Civil Engineering", photo: p("reva-dusa") },
  { name: "Anish Gurav", exam: "mht-cet", year: 2026, score: "99.14", unit: "%ile", photo: p("anish-gurav") },
  { name: "Bhavya Solanki", exam: "mht-cet", year: 2026, score: "99.05", unit: "%ile", photo: p("bhavya-solanki") },
  { name: "Anushka Panchal", exam: "mht-cet", year: 2026, score: "98.99", unit: "%ile", photo: p("anushka-panchal") },
  { name: "Vedanshi Kakadia", exam: "mht-cet", year: 2026, score: "98.95", unit: "%ile", photo: p("vedanshi-kakadia") },
  { name: "Veer Riziya", exam: "mht-cet", year: 2026, score: "98.81", unit: "%ile", photo: p("veer-riziya") },
  { name: "Jai Patel", exam: "mht-cet", year: 2026, score: "98.70", unit: "%ile", photo: p("jai-patel") },
  { name: "Harshita Gauda", exam: "mht-cet", year: 2026, score: "98.58", unit: "%ile", photo: p("harshita-gauda") },
  { name: "Nishit Mohnani", exam: "mht-cet", year: 2026, score: "98.55", unit: "%ile", photo: p("nishit-mohnani") },
  { name: "Jash Satra", exam: "mht-cet", year: 2026, score: "98.41", unit: "%ile", photo: p("jash-satra") },
  { name: "Aryan Singal", exam: "mht-cet", year: 2026, score: "98.21", unit: "%ile", photo: p("aryan-singal") },
  { name: "Chaitya Kariya", exam: "mht-cet", year: 2026, score: "98.21", unit: "%ile", photo: p("chaitya-kariya") },
  { name: "Ezekeil Mahe", exam: "mht-cet", year: 2026, score: "98.15", unit: "%ile", photo: p("ezekeil-mahe") },
  { name: "Simran Pal", exam: "mht-cet", year: 2026, score: "98.13", unit: "%ile", photo: p("simran-pal") },
  { name: "Ayesha Waghdare", exam: "mht-cet", year: 2026, score: "98.04", unit: "%ile", photo: p("ayesha-waghdare") },
  { name: "Tanmay Rapelli", exam: "mht-cet", year: 2026, score: "97.92", unit: "%ile", photo: p("tanmay-rapelli") },
  { name: "Krishna Tiwari", exam: "mht-cet", year: 2026, score: "97.75", unit: "%ile", photo: p("krishna-tiwari") },
  { name: "Drashti Padia", exam: "mht-cet", year: 2026, score: "97.65", unit: "%ile", photo: p("drashti-padia") },
  { name: "Anika Agarwal", exam: "mht-cet", year: 2026, score: "97.51", unit: "%ile", photo: p("anika-agarwal") },
  { name: "Harsh Gagat", exam: "mht-cet", year: 2026, score: "97.40", unit: "%ile", photo: p("harsh-gagat") },
  { name: "Mili Dube", exam: "mht-cet", year: 2026, score: "97.21", unit: "%ile", photo: p("mili-dube") },
  { name: "Vaishnavi Thakur", exam: "mht-cet", year: 2026, score: "97.02", unit: "%ile" },

  /* ---------- HSC Boards 2026 ---------- */
  { name: "Ashok Patel", exam: "class12", year: 2026, score: "94.17", unit: "%", also: "MHT CET 99.78 %ile", photo: p("ashok-patel") },
  { name: "Shruti Bhosale", exam: "class12", year: 2026, score: "91.50", unit: "%", college: "SPCE", also: "MHT CET 97.42 %ile", photo: p("shruti-bhosale") },
  { name: "Gautam Chavda", exam: "class12", year: 2026, score: "91.33", unit: "%", photo: p("gautam-chavda") },
  { name: "Soham Rane", exam: "class12", year: 2026, score: "90.67", unit: "%", photo: p("soham-rane") },

  /* ---------- Past toppers (brochure, year not stated) ---------- */
  { name: "Nitin Goswami", exam: "neet", score: "675", unit: "/720", college: "LTMMC, Sion" },
  { name: "Paresh Kshetri", exam: "neet", score: "668", unit: "/720", college: "AIIMS Guwahati", also: "JEE Physics 100 %ile · MHT CET 99.99 %ile · Boards 92.33%" },
  { name: "Jyotika Jeganathan", exam: "neet", score: "663", unit: "/720", college: "KEM Hospital, Mumbai" },
  { name: "Sheetal Gupta", exam: "neet", score: "648", unit: "/720", college: "Grant Medical College (Sir JJ), Mumbai" },
  { name: "Vindhesh Mishra", exam: "neet", score: "638", unit: "/720", college: "GMC Solapur" },
  { name: "Pankaj Kandi", exam: "neet", score: "626", unit: "/720", college: "Vasantrao Pawar Medical College, Nashik" },
  { name: "Yogita Soni", exam: "neet", score: "625", unit: "/720", college: "Kashibai Navale Medical College, Pune" },
  { name: "Akshay Bajpai", exam: "neet", score: "618", unit: "/720", college: "GMC Ambernath" },
  { name: "Rajvi Vora", exam: "neet", score: "615", unit: "/720", college: "Dr. R.N. Cooper Hospital (HBT)" },
  { name: "Shubham Pal", exam: "neet", score: "614", unit: "/720", college: "GMC Baramati" },
  { name: "Sheetal Jha", exam: "neet", score: "612", unit: "/720", college: "GMC Baramati" },
  { name: "Harshika Lodha", exam: "neet", score: "609", unit: "/720", college: "SMBT Medical College, Igatpuri" },
  { name: "Rahul Lohar", exam: "neet", score: "606", unit: "/720", college: "Dr. Rajendra Gode Institute, Amravati" },
  { name: "Akhilesh Yadav", exam: "neet", score: "605", unit: "/720", college: "GMC Baramati" },
  { name: "Ashwini Mukkan", exam: "neet", score: "602", unit: "/720", college: "LTMMC, Sion" },

  { name: "Rajvi Vora", exam: "class12", score: "95.00", unit: "%" },
  { name: "Hetvi Upadhyay", exam: "class12", score: "94.50", unit: "%" },
  { name: "Kavya Rane", exam: "class12", score: "94.33", unit: "%" },
  { name: "Jeel Jain", exam: "class12", score: "94.33", unit: "%" },
  { name: "Ishita Yadav", exam: "class12", score: "94.16", unit: "%" },
  { name: "Bhuvanesh Trivedi", exam: "class12", score: "93.67", unit: "%" },
  { name: "Devarsh Shah", exam: "class12", score: "93.50", unit: "%" },
  { name: "Tanish Risham", exam: "class12", score: "93.33", unit: "%" },
  { name: "Aadit Khanna", exam: "class12", score: "93.00", unit: "%" },
  { name: "Krishaang Mody", exam: "class12", score: "92.80", unit: "%" },
  { name: "Ritika Nair", exam: "class12", score: "92.66", unit: "%" },
  { name: "Paresh Kshetri", exam: "class12", score: "92.33", unit: "%" },
  { name: "Stuti Shah", exam: "class12", score: "92.33", unit: "%" },
  { name: "Aditya Rathod", exam: "class12", score: "91.83", unit: "%" },

  { name: "Sudhanshu", exam: "nata", score: "149", unit: "/200" },
  { name: "Shrushti Mistry", exam: "nata", score: "149", unit: "/200" },
  { name: "Pratham Siddhapura", exam: "nata", score: "146", unit: "/200" },
  { name: "Dhruv Mewada", exam: "nata", score: "145", unit: "/200" },
  { name: "Mrunali", exam: "nata", score: "144", unit: "/200" },
  { name: "Yash Jasani", exam: "nata", score: "143", unit: "/200" },
  { name: "Chandresh Sawant", exam: "nata", score: "138", unit: "/200" },
  { name: "Sujit Gupta", exam: "nata", score: "136", unit: "/200" },
  { name: "Janhavi Chawda", exam: "nata", score: "132", unit: "/200" },
];

/* Previous years' MHT CET toppers from the brochure results pages (year not printed) */
RESULTS.push(...CET_PREV.map((x) => ({ name: x.name, exam: "mht-cet" as const, score: x.score!, unit: "%ile", college: x.college })));

/* College admissions listed in the brochure without a score */
export const ADMISSIONS: { name: string; college: string; type: "IIT" | "NIT" | "IIIT" | "Other" }[] = [
  { name: "Keyur Jagad", college: "IIT Kanpur", type: "IIT" },
  { name: "Ashish Singh", college: "IIT Delhi", type: "IIT" },
  { name: "Atharva Tambe", college: "IIST Thiruvananthapuram", type: "Other" },
  { name: "Nikhil Sharma", college: "NIT Shibpur", type: "NIT" },
  { name: "Lavneesh Sharma", college: "NIT Shibpur", type: "NIT" },
  { name: "Maulik Sharma", college: "NIT Shibpur", type: "NIT" },
  { name: "Sagar Sharma", college: "NIT Jalandhar", type: "NIT" },
  { name: "Nityananda U.", college: "NIT Tiruchirappalli", type: "NIT" },
  { name: "Surabhi Pandey", college: "IIIT Pune", type: "IIIT" },
  { name: "Devansh Sanghvi", college: "ICT (UDCT) Mumbai", type: "Other" },
];

/* Headline numbers from the brochure */
export const HIGHLIGHTS = [
  { value: "500+", label: "students in top engineering colleges of India" },
  { value: "500+", label: "students in top medical colleges of India" },
  { value: "30+", label: "qualified for JEE Advanced in JEE Main Phase 1, 2026" },
  { value: "500+", label: "times our students scored 90%+ in HSC boards" },
];

export const starred = () => RESULTS.filter((r) => r.star).sort((a, b) => (a.star ?? 99) - (b.star ?? 99));
export const yearLabel = (r: Result) => (r.year ? String(r.year) : "Past toppers");
export const examKeysWithResults = () => (Object.keys(EXAM_LABEL) as ExamKey[]).filter((k) => RESULTS.some((r) => r.exam === k));
