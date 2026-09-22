import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/rentbrown-pages";

export const Route = createFileRoute("/company")({
  head: () => ({
    meta: [
      { title: "About RentBrown" },
      { name: "description", content: "A Nigerian-first property investment experience built for everyday investors." },
      { property: "og:title", content: "About RentBrown" },
      { property: "og:description", content: "A Nigerian-first property investment experience built for everyday investors." },
    ],
  }),
  component: () => <InfoPage kind="company" />,
});
