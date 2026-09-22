import { createFileRoute } from "@tanstack/react-router";
import { WalletPage } from "@/components/rentbrown-pages";

export const Route = createFileRoute("/wallet/")({
  head: () => ({
    meta: [
      { title: "Wallet — RentBrown" },
      { name: "description", content: "Available, reserved, reward, and pending balances with recent transactions." },
      { property: "og:title", content: "Wallet — RentBrown" },
      { property: "og:description", content: "Available, reserved, reward, and pending balances with recent transactions." },
    ],
  }),
  component: WalletPage,
});
