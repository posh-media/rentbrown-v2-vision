import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/rentbrown-pages";

export const Route = createFileRoute("/help")({
  head: () => ({
    meta: [
      { title: "Help & tutorials — RentBrown" },
      { name: "description", content: "Guides, tutorials, and support for investing with RentBrown." },
      { property: "og:title", content: "Help & tutorials — RentBrown" },
      { property: "og:description", content: "Guides, tutorials, and support for investing with RentBrown." },
    ],
  }),
  component: () => <InfoPage kind="help" />,
});
