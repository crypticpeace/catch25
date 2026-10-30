export type FaqGroup = { title: string; items: [string, string][] };

export const HOME_FAQ: [string, string][] = [
  ["Which is the best JEE and NEET coaching class in Mumbai?", "Catch25 Science Academy has coached JEE, NEET and MHT CET aspirants since 2013. Small batches, one-to-one doubt solving, a weekly Sunday test and regular parent meetings set it apart from large coaching institutes."],
  ["How many students are there in one batch?", "Catch25 was founded on the idea of batches of 25, small enough for every teacher to know every student. Batches are kept deliberately small so doubts are solved and no one falls behind."],
  ["Do you offer integrated two-year JEE and NEET programmes for Class 11?", "Yes. We run Two-Year Integrated programmes from Class 11, One-Year programmes for Class 12 and a Repeater (dropper) batch, for CBSE, ICSE and Maharashtra State Board students."],
  ["Where are the Catch25 centres?", "Catch25 has five centres in Mumbai: Borivali West, Kandivali West (head office), Kandivali East, Andheri West and Vile Parle East. Addresses and directions for each are on the Branches page."],
  ["Are tests conducted regularly?", "Every Sunday students take a test in the JEE, NEET or CET pattern, followed by a performance report shared with parents."],
  ["Is there a scholarship for admission?", "Yes. Students can take the Catch25 Scholarship Test, and merit scholarships are also offered on Class 10 board marks."],
];

export const FAQ_GROUPS: FaqGroup[] = [
  { title: "Admissions", items: [
    ["How do I take admission at Catch25?", "Book a free counselling session by phone, WhatsApp or the enquiry form. A counsellor will understand your goals, suggest a batch and explain fees and scholarships. Admission is confirmed after counselling."],
    ["Is there an entrance test for admission?", "There is no compulsory entrance test. Students who want a scholarship can take the Catch25 Scholarship Test."],
    ["Can I attend a demo class?", "Yes. Ask our counsellors to arrange a demo class at your preferred centre before you decide."],
    ["When do new batches start?", "Batch start dates vary by programme and centre. Contact admissions for the next start date for your course."],
  ]},
  { title: "Fees and scholarships", items: [
    ["Why are fees not listed on the website?", "Fees depend on the programme, duration and any scholarship you qualify for. Our counsellors share the complete fee structure at the counselling session."],
    ["Can fees be paid in instalments?", "Yes. Instalment options are available for all programmes."],
    ["How does the scholarship test work?", "Register, take the test at one of our centres, and receive your scholarship percentage with your result. It applies to your course fee on admission."],
  ]},
  { title: "Teaching and tests", items: [
    ["How small are the batches?", "Catch25 is built on the batch-of-25 idea. Batches are kept small so faculty can follow each student's progress."],
    ["How are doubts solved?", "Students get one-to-one doubt sessions with faculty outside lecture hours, every day of the week."],
    ["How often are tests held?", "There is a test every Sunday in the JEE, NEET or CET pattern, with a performance report after each one."],
    ["Do parents get updates?", "Yes. Parents receive performance reports after tests and attend regular parent-teacher meetings."],
  ]},
  { title: "Centres and timings", items: [
    ["What are the centre timings?", "Classes run Monday to Sunday. Batch timings for each centre are shared at counselling."],
    ["Which centre should I choose?", "Choose the centre closest to home or school. Dahisar and Mira Road students usually choose Borivali West, Malad and Goregaon students Kandivali West, Thakur Village students Kandivali East, and Andheri to Bandra students Andheri West or Vile Parle East."],
    ["Can students study at the centre outside class?", "Yes. The library and self-study area are open during centre hours."],
  ]},
];
