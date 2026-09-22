import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/rentbrown-pages";

export const Route = createFileRoute("/settings")({
  head: () => ({
    meta: [
      { title: "Settings — RentBrown" },
      { name: "description", content: "Choose how RentBrown notifies you and how your information appears." },
      { property: "og:title", content: "Settings — RentBrown" },
      { property: "og:description", content: "Choose how RentBrown notifies you and how your information appears." },
    ],
  }),
  component: () => <InfoPage kind="settings" />,
});
