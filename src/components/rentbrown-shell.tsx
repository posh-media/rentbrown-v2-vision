import { Link, useRouterState } from "@tanstack/react-router";
import { Bell, Building2, CircleUserRound, Compass, Home, Menu, WalletCards } from "lucide-react";
import type { ReactNode } from "react";
import { Footer } from "@/components/rentbrown-pages";

const mainNav = [
  { label: "Home", to: "/dashboard", icon: Home },
  { label: "Explore", to: "/explore", icon: Compass },
  { label: "Portfolio", to: "/portfolio", icon: Building2 },
  { label: "Wallet", to: "/wallet", icon: WalletCards },
  { label: "Account", to: "/account", icon: CircleUserRound },
] as const;

export function Brand() {
  return (
    <Link to="/" className="flex items-center gap-2.5" aria-label="RentBrown home">
      <span className="grid size-8 place-items-center rounded-md bg-primary text-sm font-extrabold text-primary-foreground">RB</span>
      <span className="text-lg font-extrabold text-foreground">RentBrown</span>
    </Link>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const isPublic = ["/", "/how-it-works", "/property-proof", "/company", "/faq", "/legal"].includes(pathname);

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="rb-container grid h-16 grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
          <Brand />
          {isPublic ? (
            <>
              <nav className="hidden items-center gap-7 text-sm font-semibold text-muted-foreground lg:flex">
                <Link to="/explore" activeProps={{ className: "text-primary" }}>Explore</Link>
                <Link to="/how-it-works" activeProps={{ className: "text-primary" }}>How it works</Link>
                <Link to="/property-proof" activeProps={{ className: "text-primary" }}>Property proof</Link>
                <Link to="/company" activeProps={{ className: "text-primary" }}>Company</Link>
              </nav>
              <div className="flex items-center justify-end gap-2">
                <Link to="/dashboard" className="hidden h-10 items-center rounded-md px-4 text-sm font-bold text-primary sm:inline-flex">Sign in</Link>
                <Link to="/explore" className="inline-flex h-10 items-center rounded-md bg-primary px-4 text-sm font-bold text-primary-foreground">Explore opportunities</Link>
              </div>
            </>
          ) : (
            <>
              <nav className="hidden items-center gap-1 lg:flex">
                {mainNav.map(({ label, to }) => <Link key={to} to={to} activeProps={{ className: "bg-accent text-primary" }} inactiveProps={{ className: "text-muted-foreground" }} className="rounded-md px-3 py-2 text-sm font-semibold">{label}</Link>)}
              </nav>
              <div className="flex items-center justify-end gap-2">
                <Link to="/notifications" aria-label="Notifications" className="relative grid size-10 place-items-center rounded-md border border-border bg-card text-foreground"><Bell className="size-4"/><span className="absolute right-2 top-2 size-1.5 rounded-full bg-destructive" /></Link>
                <Link to="/account" className="hidden items-center gap-2 rounded-md bg-muted px-3 py-2 text-sm font-bold sm:flex"><span className="grid size-6 place-items-center rounded-full bg-primary text-[10px] text-primary-foreground">AO</span>Ada</Link>
                <button aria-label="Open menu" className="grid size-10 place-items-center rounded-md border border-border lg:hidden"><Menu className="size-4"/></button>
              </div>
            </>
          )}
        </div>
      </header>
      <main className={isPublic ? "" : "pb-20 lg:pb-0"}>{children}</main>
      {isPublic && <Footer />}
      {!isPublic && (
        <nav className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-5 border-t border-border bg-background px-1 pb-[max(.35rem,env(safe-area-inset-bottom))] pt-2 lg:hidden">
          {mainNav.map(({ label, to, icon: Icon }) => <Link key={to} to={to} activeProps={{ className: "text-primary" }} inactiveProps={{ className: "text-muted-foreground" }} className="flex min-w-0 flex-col items-center gap-1 text-[10px] font-bold"><Icon className="size-5"/><span className="truncate">{label}</span></Link>)}
        </nav>
      )}
    </div>
  );
}