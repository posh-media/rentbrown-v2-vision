import { createFileRoute } from "@tanstack/react-router";
import { ReferralsPage } from "@/components/rentbrown-pages";

export const Route = createFileRoute("/referrals/")({
  head: () => ({
    meta: [
      { title: "Referrals — RentBrown" },
      { name: "description", content: "Share your code and track invited, qualified, and rewarded referrals." },
      { property: "og:title", content: "Referrals — RentBrown" },
      { property: "og:description", content: "Share your code and track invited, qualified, and rewarded referrals." },
    ],
  }),
  component: ReferralsPage,
});
