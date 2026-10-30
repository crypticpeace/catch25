/* Student testimonials from the Catch25 brochure (Feb 2026). Lightly edited for spelling only.
   Wrap a faculty name in [[ ]] to highlight it in the quote, and list it in `mentions`. */
export type Testimonial = { name: string; detail: string; quote: string; mentions?: string[] };

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Aadit Khanna",
    detail: "HSC 93.00%",
    mentions: ["Nirav Sir", "Ishita Ma'am", "Prof. Saurabh Patel"],
    quote: "They have a career counselling session in which the branch head [[Nirav Sir]] and [[Ishita Ma'am]] were kind enough to come to my house and conduct the session. It was an amazing session and everything fell into place. Catch25 also conducts Vedic Maths lectures by its esteemed professor [[Saurabh Sir]], and they were really fun to attend. I would recommend every student attend them to learn a few shortcuts and tricks.",
  },
  {
    name: "Khushvi Shah",
    detail: "Pursuing BPT at KJ Somaiya",
    mentions: ["Nirav Sir"],
    quote: "When I came across Catch25, I was very scared and nervous because I didn't know how to prepare for NEET. But when I met [[Nirav Sir]] in my first counselling session, he really helped me out and boosted my confidence. One of the best things about Catch25 is its small batches, only 20-30 students each, so we can ask our teachers anytime and they are always there to clear our doubts.",
  },
  {
    name: "Rajvi Vora",
    detail: "Pursuing MBBS at Cooper Hospital · NEET 615",
    quote: "Catch25 Science Academy has one of the most meticulous and knowledgeable professors I've ever come across. Weekly tests are conducted and detailed solutions are provided. I still remember studying hard but not getting the result in the tests. The professors not only motivated me but also showed me the correct way to approach and solve the questions.",
  },
  {
    name: "Bhuvanesh Trivedi",
    detail: "Pursuing IT at SPCE · HSC 93.67%",
    quote: "Catch25 provides quality education at affordable rates. The professors have an amazing way of breaking things down so they are understandable, and they are very patient with us. The printed notes are very helpful, the running notes from our professors even more, and the weekly test series works as a revision of each topic.",
  },
  {
    name: "Aditya Rathod",
    detail: "HSC 91.83%",
    quote: "My online lectures phase was quite challenging, but the way Catch25 professors helped me face it was great. Lectures were recorded on the Catch25 YouTube channel and every doubt was cleared personally. Regular test series helped me see where I stood before my final MHT CET exam.",
  },
  {
    name: "Samruddhi Dave",
    detail: "Pursuing MBBS at Terna Hospital",
    quote: "The professors were patient, understanding and highly skilled. The test series conducted by Catch25 brought out the best in me and kept me focused and disciplined throughout the journey. The faculty are extremely responsive to student questions and needs.",
  },
];
