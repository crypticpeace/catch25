/**
 * Local landing pages: /coaching/[slug]
 * One page per area students travel from. Each page names the nearest centre
 * and the Western line journey, so it answers a real local question.
 */
export type Area = {
  slug: string;
  name: string;
  lat: number;
  lng: number;
  nearest: "kandivali-west" | "borivali-west" | "andheri-west" | "kandivali-east" | "vile-parle-east";
  stationsAway: number;
  direction: "north" | "south";
  note: string;
};

/* Western line order (Churchgate end to Virar end) for the journey copy */
export const WESTERN_LINE = [
  "Bandra", "Khar Road", "Santacruz", "Vile Parle", "Andheri", "Jogeshwari", "Ram Mandir",
  "Goregaon", "Malad", "Kandivali", "Borivali", "Dahisar", "Mira Road",
];

export const AREAS: Area[] = [
  { slug: "dahisar", name: "Dahisar", lat: 19.25, lng: 72.86, nearest: "borivali-west", stationsAway: 1, direction: "north", note: "Dahisar students usually choose our Borivali West centre, one station away on S.V. Road." },
  { slug: "borivali", name: "Borivali", lat: 19.229, lng: 72.857, nearest: "borivali-west", stationsAway: 0, direction: "north", note: "Our Borivali West centre is on S.V. Road in Pai Nagar, near the Daulat Nagar railway crossing." },
  { slug: "kandivali", name: "Kandivali", lat: 19.204, lng: 72.8505, nearest: "kandivali-west", stationsAway: 0, direction: "north", note: "Kandivali has two Catch25 centres: Kandivali West on S.V. Road, Parekh Nagar, and Kandivali East in Thakur Village." },
  { slug: "malad", name: "Malad", lat: 19.187, lng: 72.8484, nearest: "kandivali-west", stationsAway: 1, direction: "south", note: "Malad students reach our Kandivali West centre in one station on the Western line." },
  { slug: "goregaon", name: "Goregaon", lat: 19.1645, lng: 72.8493, nearest: "kandivali-west", stationsAway: 2, direction: "south", note: "From Goregaon, our Kandivali West centre is two stations north." },
  { slug: "ram-mandir", name: "Ram Mandir", lat: 19.151, lng: 72.85, nearest: "andheri-west", stationsAway: 2, direction: "north", note: "Ram Mandir students reach our Andheri West centre, opposite Andheri station, in two stations." },
  { slug: "andheri", name: "Andheri", lat: 19.1197, lng: 72.8468, nearest: "andheri-west", stationsAway: 0, direction: "south", note: "Our Andheri West centre is in the NADCO Super Shopping Center, opposite Andheri station (West)." },
  { slug: "vile-parle", name: "Vile Parle", lat: 19.1, lng: 72.8436, nearest: "vile-parle-east", stationsAway: 0, direction: "south", note: "Our Vile Parle East centre is on Nehru Road, near Parle Book Store." },
  { slug: "santacruz", name: "Santacruz", lat: 19.081, lng: 72.8416, nearest: "vile-parle-east", stationsAway: 1, direction: "south", note: "Santacruz students reach our Vile Parle East centre one station north on the Western line." },
  { slug: "bandra", name: "Bandra", lat: 19.055, lng: 72.84, nearest: "vile-parle-east", stationsAway: 3, direction: "south", note: "Bandra students reach our Vile Parle East centre three stations north on the Western line." },
  { slug: "mira-road", name: "Mira Road", lat: 19.281, lng: 72.871, nearest: "borivali-west", stationsAway: 2, direction: "north", note: "Mira Road students reach our Borivali West centre two stations south on the Western line." },
];

export const getArea = (slug: string) => AREAS.find((a) => a.slug === slug);
