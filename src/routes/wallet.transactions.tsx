import { createFileRoute } from "@tanstack/react-router";
import { TransactionsPage } from "@/components/rentbrown-pages";

export const Route = createFileRoute("/wallet/transactions")({
  head: () => ({
    meta: [
      { title: "Transaction history — RentBrown" },
      { name: "description", content: "A complete record of deposits, investments, rewards, and withdrawals." },
      { property: "og:title", content: "Transaction history — RentBrown" },
      { property: "og:description", content: "A complete record of deposits, investments, rewards, and withdrawals." },
    ],
  }),
  component: TransactionsPage,
});
