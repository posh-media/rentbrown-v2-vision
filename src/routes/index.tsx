import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/components/rentbrown-pages";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RentBrown — Property-backed investing in Nigeria" },
      { name: "description", content: "Fixed-term Nigerian property investment opportunities with clear terms, evidence, and maturity tracking." },
      { property: "og:title", content: "RentBrown — Property-backed investing in Nigeria" },
      { property: "og:description", content: "Fixed-term Nigerian property investment opportunities with clear terms, evidence, and maturity tracking." },
    ],
  }),
  component: LandingPage,
});
