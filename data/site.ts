export const SITE = {
  name: "Catch25 Science Academy",
  shortName: "Catch25",
  legalName: "Catch25 Edutech Pvt Ltd",
  tagline: "Vision To Reality",
  url: "https://www.catch25.com",
  founded: 2013,
  studentsGuided: "10,000+",
  enrolledNow: "1,500",
  phone: "+91 88980 08898",
  phoneRaw: "+918898008898",
  phone2: "+91 74000 67800",
  whatsapp: "918657091821",
  whatsappDisplay: "+91 86570 91821",
  email: "er.saurabhpatel01@gmail.com",
  hours: "Monday to Sunday, 7 am to 8 pm",
  social: {
    instagram: "https://www.instagram.com/catch25science/",
    youtube: "https://www.youtube.com/@Catch25ScienceAcademy_25",
    facebook: "https://www.facebook.com/Catch25ScienceAcademy/",
  },
  award: "3rd rank, NASA Ames Space Settlement Contest 2019",
};

export const waLink = (text = "Hi Catch25, I want to know about admissions.") =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/courses", label: "Courses" },
  { href: "/results", label: "Results" },
  { href: "/scholarships", label: "Scholarships" },
  { href: "/exams", label: "Exam guides" },
  { href: "/branches", label: "Branches" },
  { href: "/contact", label: "Contact" },
];

/* Schools students come from (questionnaire, section 2) */
export const SCHOOLS = [
  "Kapol Vidyanidhi International School", "Children's Academy", "SVIS", "Pancholia",
  "Our Lady", "Oxford", "Gundecha", "Thakur Shyamnarayan", "Thakur Vidya Mandir", "St. John's",
];
