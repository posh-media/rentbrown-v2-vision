import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/rentbrown-pages";

export const Route = createFileRoute("/legal")({
  head: () => ({
    meta: [
      { title: "Legal, terms & privacy — RentBrown" },
      { name: "description", content: "Terms, privacy, and risk disclosures for the RentBrown experience." },
      { property: "og:title", content: "Legal, terms & privacy — RentBrown" },
      { property: "og:description", content: "Terms, privacy, and risk disclosures for the RentBrown experience." },
    ],
  }),
  component: () => <InfoPage kind="legal" />,
});
