/**
 * Centres shown on the Mumbai map, the branches page and each branch page.
 * To add a centre: add an object here. lat/lng come from Google Maps
 * (right-click the building > click the coordinates to copy them).
 */
export type Branch = {
  slug: string;
  name: string;
  tag: string;
  hq: boolean;
  lat: number;
  lng: number;
  street: string;
  locality: string;
  pincode: string;
  address: string;
  landmark: string;
  station: string;
  hours: string;
  phone: string;
  facilities: string[];
  classrooms?: string;
  maps: string;
  /** shown on the map and branch list; set false to hide a centre without deleting it */
  active?: boolean;
  /** which side of the pin the map label sits on (default left) */
  labelSide?: "left" | "right";
};

/* Kandivali West and Borivali West: client questionnaire (Oct 2026).
   Andheri West and Vile Parle East: Catch25 brochure (Feb 2026).
   Kandivali East (Thakur Village): new location from Prof. Saurabh Patel (Sep 2026). */
const ALL_BRANCHES: Branch[] = [
  {
    slug: "borivali-west",
    name: "Borivali West",
    tag: "Centre",
    hq: false,
    lat: 19.2215,
    lng: 72.8497,
    street: "401, Swami Vivekanand Rd, near Irani Petrol Pump, opp. Daulat Nagar Railway Crossing, Pai Nagar",
    locality: "Borivali West, Mumbai",
    pincode: "400092",
    address: "401, Swami Vivekanand Rd, near Irani Petrol Pump, opp. Daulat Nagar Railway Crossing, Pai Nagar, Borivali West, Mumbai 400092",
    landmark: "Near Irani Petrol Pump, S.V. Road",
    station: "Borivali (Western line)",
    hours: "Mon to Sun, 7 am to 8 pm",
    phone: "+91 88980 08898",
    facilities: ["AC classrooms", "Doubt-solving desk", "Weekly test centre"],
    maps: "https://www.google.com/maps/search/?api=1&query=Catch25+Science+Academy+Borivali+West",
  },
  {
    slug: "kandivali-west",
    name: "Kandivali West",
    tag: "Head Office",
    hq: true,
    lat: 19.2052,
    lng: 72.8452,
    street: "3rd Floor, Madhurima Society, C Wing, Swami Vivekanand Rd, above Bank of Baroda, Parekh Nagar",
    locality: "Kandivali West, Mumbai",
    pincode: "400067",
    address: "3rd Floor, Madhurima Society, C Wing, Swami Vivekanand Rd, above Bank of Baroda, Parekh Nagar, Kandivali West, Mumbai 400067",
    landmark: "Above Bank of Baroda, S.V. Road",
    station: "Kandivali (Western line)",
    hours: "Mon to Sun, 7 am to 8 pm",
    phone: "+91 88980 08898",
    facilities: ["AC classrooms", "Smart boards", "Library", "Self-study area", "CCTV"],
    classrooms: "9 classrooms · 450 seats",
    maps: "https://share.google/zofbqGTrrIaNjW6R5",
  },
  {
    slug: "kandivali-east",
    name: "Kandivali East",
    tag: "Centre",
    hq: false,
    labelSide: "right",
    lat: 19.2105,
    lng: 72.8772,
    street: "201, A Wing, 2nd Floor, New Laxmi Sadan, above Indian Bank, opp. Thakur Public School, Thakur Village",
    locality: "Kandivali East, Mumbai",
    pincode: "400101",
    address: "201, A Wing, 2nd Floor, New Laxmi Sadan, above Indian Bank, opp. Thakur Public School, Thakur Village, Kandivali East, Mumbai 400101",
    landmark: "Above Indian Bank, opposite Thakur Public School",
    station: "Kandivali (Western line)",
    hours: "Call for batch timings",
    phone: "+91 88980 08898",
    facilities: ["Thakur Village", "Opposite Thakur Public School"],
    maps: "https://maps.app.goo.gl/mku7cWhA1HA191KT7",
  },
  {
    slug: "andheri-west",
    name: "Andheri West",
    tag: "Centre",
    hq: false,
    lat: 19.1205,
    lng: 72.8442,
    street: "3rd Floor, Vivena Building, NADCO Super Shopping Center, opp. Andheri Station (West)",
    locality: "Andheri West, Mumbai",
    pincode: "400058",
    address: "3rd Floor, Vivena Building, NADCO Super Shopping Center, opp. Andheri Station (West), Mumbai 400058",
    landmark: "NADCO Super Shopping Center, opposite Andheri station",
    station: "Andheri (Western line)",
    hours: "Call for batch timings",
    phone: "+91 88980 08898",
    facilities: ["Opposite Andheri station (West)"],
    maps: "https://www.google.com/maps/search/?api=1&query=Vivena+Building+NADCO+Shopping+Centre+Andheri+West",
  },
  {
    slug: "vile-parle-east",
    name: "Vile Parle East",
    tag: "Centre",
    hq: false,
    lat: 19.0992,
    lng: 72.8498,
    street: "311/312, Nand Prem Building, near Parle Book Store, Nehru Road",
    locality: "Vile Parle East, Mumbai",
    pincode: "400057",
    address: "311/312, Nand Prem Building, near Parle Book Store, Nehru Road, Vile Parle East, Mumbai 400057",
    landmark: "Near Parle Book Store, Nehru Road",
    station: "Vile Parle (Western line)",
    hours: "Call for batch timings",
    phone: "+91 88980 08898",
    facilities: ["Near Parle Book Store, Nehru Road"],
    maps: "https://www.google.com/maps/search/?api=1&query=Nand+Prem+Building+Nehru+Road+Vile+Parle+East",
  },
];

export const BRANCHES: Branch[] = ALL_BRANCHES.filter((b) => b.active !== false);


export const getBranch = (slug: string) => BRANCHES.find((b) => b.slug === slug);
