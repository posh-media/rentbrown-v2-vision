import { createFileRoute } from "@tanstack/react-router";
import { KycPage } from "@/components/rentbrown-pages";

export const Route = createFileRoute("/kyc")({
  head: () => ({
    meta: [
      { title: "Identity verification — RentBrown" },
      { name: "description", content: "Complete identity verification to enable withdrawals." },
      { property: "og:title", content: "Identity verification — RentBrown" },
      { property: "og:description", content: "Complete identity verification to enable withdrawals." },
    ],
  }),
  component: KycPage,
});
