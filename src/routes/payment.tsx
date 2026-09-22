import { createFileRoute } from "@tanstack/react-router";
import { PaymentPage } from "@/components/rentbrown-pages";

export const Route = createFileRoute("/payment")({
  head: () => ({
    meta: [
      { title: "Payment status — RentBrown" },
      { name: "description", content: "Follow your payment through pending, successful, and failed states." },
      { property: "og:title", content: "Payment status — RentBrown" },
      { property: "og:description", content: "Follow your payment through pending, successful, and failed states." },
    ],
  }),
  component: PaymentPage,
});
