import { createFileRoute } from "@tanstack/react-router";
import { WithdrawalPage } from "@/components/rentbrown-pages";

export const Route = createFileRoute("/wallet/withdraw")({
  head: () => ({
    meta: [
      { title: "Withdraw to bank — RentBrown" },
      { name: "description", content: "Send available funds to your bank account and follow the request status." },
      { property: "og:title", content: "Withdraw to bank — RentBrown" },
      { property: "og:description", content: "Send available funds to your bank account and follow the request status." },
    ],
  }),
  component: WithdrawalPage,
});
