import { createFileRoute } from "@tanstack/react-router";
import { ExplorePage } from "@/components/rentbrown-pages";

export const Route = createFileRoute("/explore")({
  head: () => ({
    meta: [
      { title: "Explore opportunities — RentBrown" },
      { name: "description", content: "Compare fixed-term property opportunities by slot price, ROI, duration, and capacity." },
      { property: "og:title", content: "Explore opportunities — RentBrown" },
      { property: "og:description", content: "Compare fixed-term property opportunities by slot price, ROI, duration, and capacity." },
    ],
  }),
  component: ExplorePage,
});
