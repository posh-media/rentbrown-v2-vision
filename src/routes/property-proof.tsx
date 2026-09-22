import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/rentbrown-pages";

export const Route = createFileRoute("/property-proof")({
  head: () => ({
    meta: [
      { title: "Property proof & trust — RentBrown" },
      { name: "description", content: "Title evidence, valuations, site reports, and disclosures presented for each opportunity." },
      { property: "og:title", content: "Property proof & trust — RentBrown" },
      { property: "og:description", content: "Title evidence, valuations, site reports, and disclosures presented for each opportunity." },
    ],
  }),
  component: () => <InfoPage kind="proof" />,
});
