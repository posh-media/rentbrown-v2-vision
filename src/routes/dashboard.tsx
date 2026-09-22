import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage } from "@/components/rentbrown-pages";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard — RentBrown" },
      { name: "description", content: "Your portfolio value, active principal, wallet balance, and next maturity at a glance." },
      { property: "og:title", content: "Dashboard — RentBrown" },
      { property: "og:description", content: "Your portfolio value, active principal, wallet balance, and next maturity at a glance." },
    ],
  }),
  component: DashboardPage,
});
