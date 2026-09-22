import { createFileRoute } from "@tanstack/react-router";
import { PortfolioPage } from "@/components/rentbrown-pages";

export const Route = createFileRoute("/portfolio/")({
  head: () => ({
    meta: [
      { title: "Portfolio — RentBrown" },
      { name: "description", content: "Track principal, expected profit, and projected maturity value across investments." },
      { property: "og:title", content: "Portfolio — RentBrown" },
      { property: "og:description", content: "Track principal, expected profit, and projected maturity value across investments." },
    ],
  }),
  component: PortfolioPage,
});
