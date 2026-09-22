import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/rentbrown-pages";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — RentBrown" },
      { name: "description", content: "Answers about slots, returns, maturity, withdrawals, and verification." },
      { property: "og:title", content: "FAQ — RentBrown" },
      { property: "og:description", content: "Answers about slots, returns, maturity, withdrawals, and verification." },
    ],
  }),
  component: () => <InfoPage kind="faq" />,
});
