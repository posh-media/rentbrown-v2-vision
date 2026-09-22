import { createFileRoute } from "@tanstack/react-router";
import { CheckoutPage } from "@/components/rentbrown-pages";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Review your investment — RentBrown" },
      { name: "description", content: "Confirm slots, principal, expected profit, fees, and maturity before paying." },
      { property: "og:title", content: "Review your investment — RentBrown" },
      { property: "og:description", content: "Confirm slots, principal, expected profit, fees, and maturity before paying." },
    ],
  }),
  component: CheckoutPage,
});
