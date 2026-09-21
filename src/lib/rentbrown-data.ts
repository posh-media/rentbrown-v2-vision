import ikoyiImage from "@/assets/ikoyi-residences.jpg";
import lekkiImage from "@/assets/lekki-courts.jpg";
import wuseImage from "@/assets/wuse-square.jpg";

export type Opportunity = {
  slug: string;
  name: string;
  location: string;
  plan: string;
  slotPrice: string;
  roi: string;
  duration: string;
  maturity: string;
  capacity: number;
  minimum: string;
  image: string;
  status: "Open" | "Nearing capacity" | "Sold out";
};

export const opportunities: Opportunity[] = [
  {
    slug: "the-terraces-ikoyi",
    name: "The Terraces, Ikoyi",
    location: "Ikoyi, Lagos",
    plan: "Residential income note",
    slotPrice: "₦100,000",
    roi: "16.5%",
    duration: "12 months",
    maturity: "30 Sep 2027",
    capacity: 68,
    minimum: "1 slot",
    image: ikoyiImage,
    status: "Open",
  },
  {
    slug: "palm-court-lekki",
    name: "Palm Court, Lekki",
    location: "Lekki Phase 1, Lagos",
    plan: "Development finance note",
    slotPrice: "₦50,000",
    roi: "14.0%",
    duration: "9 months",
    maturity: "30 Jun 2027",
    capacity: 91,
    minimum: "2 slots",
    image: lekkiImage,
    status: "Nearing capacity",
  },
  {
    slug: "wuse-square-residences",
    name: "Wuse Square Residences",
    location: "Wuse II, Abuja",
    plan: "Rental yield note",
    slotPrice: "₦10,000",
    roi: "12.5%",
    duration: "6 months",
    maturity: "31 Mar 2027",
    capacity: 100,
    minimum: "5 slots",
    image: wuseImage,
    status: "Sold out",
  },
];

export const transactions = [
  { title: "Wallet deposit", date: "20 Sep 2026 · RB-DP-260920-1842", amount: "+₦250,000", status: "Successful" },
  { title: "The Terraces — 2 slots", date: "18 Sep 2026 · RB-IV-260918-7201", amount: "−₦200,000", status: "Successful" },
  { title: "Referral reward", date: "15 Sep 2026 · RB-RF-260915-0821", amount: "+₦5,000", status: "Qualified" },
  { title: "Bank withdrawal", date: "11 Sep 2026 · RB-WD-260911-4410", amount: "−₦25,000", status: "Pending" },
];