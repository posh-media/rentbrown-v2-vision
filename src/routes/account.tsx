import { createFileRoute } from "@tanstack/react-router";
import { AccountPage } from "@/components/rentbrown-pages";

export const Route = createFileRoute("/account")({
  head: () => ({
    meta: [
      { title: "Account — RentBrown" },
      { name: "description", content: "Manage your profile, verification, security, preferences, and support." },
      { property: "og:title", content: "Account — RentBrown" },
      { property: "og:description", content: "Manage your profile, verification, security, preferences, and support." },
    ],
  }),
  component: AccountPage,
});
