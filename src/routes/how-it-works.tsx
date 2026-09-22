import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/rentbrown-pages";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How it works — RentBrown" },
      { name: "description", content: "Discover, review, invest, and track property-backed investments step by step." },
      { property: "og:title", content: "How it works — RentBrown" },
      { property: "og:description", content: "Discover, review, invest, and track property-backed investments step by step." },
    ],
  }),
  component: () => <InfoPage kind="how" />,
});
