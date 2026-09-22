import { createFileRoute } from "@tanstack/react-router";
import { NotificationsPage } from "@/components/rentbrown-pages";

export const Route = createFileRoute("/notifications")({
  head: () => ({
    meta: [
      { title: "Notifications — RentBrown" },
      { name: "description", content: "Maturity reminders, reward updates, withdrawal status, and new opportunities." },
      { property: "og:title", content: "Notifications — RentBrown" },
      { property: "og:description", content: "Maturity reminders, reward updates, withdrawal status, and new opportunities." },
    ],
  }),
  component: NotificationsPage,
});
