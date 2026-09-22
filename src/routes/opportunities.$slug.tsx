import { createFileRoute } from "@tanstack/react-router";
import { OpportunityDetailsPage } from "@/components/rentbrown-pages";

export const Route = createFileRoute("/opportunities/$slug")({
  head: () => ({
    meta: [
      { title: "Opportunity terms — RentBrown" },
      { name: "description", content: "Review slot price, fixed ROI, duration, maturity value, and property evidence." },
      { property: "og:title", content: "Opportunity terms — RentBrown" },
      { property: "og:description", content: "Review slot price, fixed ROI, duration, maturity value, and property evidence." },
    ],
  }),
  component: OpportunityDetailsPage,
});
