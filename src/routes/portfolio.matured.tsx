import { createFileRoute } from "@tanstack/react-router";
import { InvestmentRecordPage } from "@/components/rentbrown-pages";

export const Route = createFileRoute("/portfolio/matured")({
  head: () => ({
    meta: [
      { title: "Matured investment — RentBrown" },
      { name: "description", content: "See how principal and profit were credited at maturity." },
      { property: "og:title", content: "Matured investment — RentBrown" },
      { property: "og:description", content: "See how principal and profit were credited at maturity." },
    ],
  }),
  component: () => <InvestmentRecordPage matured />,
});
