import { createFileRoute } from "@tanstack/react-router";
import { InvestmentRecordPage } from "@/components/rentbrown-pages";

export const Route = createFileRoute("/portfolio/active")({
  head: () => ({
    meta: [
      { title: "Active investment — RentBrown" },
      { name: "description", content: "Slots, principal, fixed ROI, dates, and reference for an active investment." },
      { property: "og:title", content: "Active investment — RentBrown" },
      { property: "og:description", content: "Slots, principal, fixed ROI, dates, and reference for an active investment." },
    ],
  }),
  component: () => <InvestmentRecordPage />,
});
