import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/rentbrown-pages";

export const Route = createFileRoute("/referrals/history")({
  head: () => ({
    meta: [
      { title: "Referral history — RentBrown" },
      { name: "description", content: "Every referral reward with its status and reference." },
      { property: "og:title", content: "Referral history — RentBrown" },
      { property: "og:description", content: "Every referral reward with its status and reference." },
    ],
  }),
  component: () => <InfoPage kind="referral-history" />,
});
