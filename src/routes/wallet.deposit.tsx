import { createFileRoute } from "@tanstack/react-router";
import { DepositPage } from "@/components/rentbrown-pages";

export const Route = createFileRoute("/wallet/deposit")({
  head: () => ({
    meta: [
      { title: "Add funds — RentBrown" },
      { name: "description", content: "Fund your wallet by bank transfer or card and review the reference details." },
      { property: "og:title", content: "Add funds — RentBrown" },
      { property: "og:description", content: "Fund your wallet by bank transfer or card and review the reference details." },
    ],
  }),
  component: DepositPage,
});
