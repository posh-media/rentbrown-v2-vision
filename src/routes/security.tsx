import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/rentbrown-pages";

export const Route = createFileRoute("/security")({
  head: () => ({
    meta: [
      { title: "Security — RentBrown" },
      { name: "description", content: "Transaction PIN, device protection, and account safety settings." },
      { property: "og:title", content: "Security — RentBrown" },
      { property: "og:description", content: "Transaction PIN, device protection, and account safety settings." },
    ],
  }),
  component: () => <InfoPage kind="security" />,
});
