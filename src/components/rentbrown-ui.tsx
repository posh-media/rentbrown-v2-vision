import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Clock3, MapPin } from "lucide-react";
import type { Opportunity } from "@/lib/rentbrown-data";
import type { ReactNode } from "react";

export function Page({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`rb-container py-8 sm:py-12 ${className}`}>{children}</div>;
}

export function PageHeader({ eyebrow, title, copy, action }: { eyebrow?: string; title: string; copy?: string; action?: ReactNode }) {
  return <div className="mb-8 grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4"><div className="min-w-0">{eyebrow && <p className="mb-2 text-xs font-extrabold uppercase text-secondary">{eyebrow}</p>}<h1 className="text-3xl font-extrabold text-foreground sm:text-4xl">{title}</h1>{copy && <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">{copy}</p>}</div>{action && <div className="shrink-0">{action}</div>}</div>;
}

export function StatCard({ label, value, note, emphasis }: { label: string; value: string; note?: string; emphasis?: boolean }) {
  return <div className={`financial-card p-5 ${emphasis ? "bg-primary text-primary-foreground" : ""}`}><p className={`text-xs font-bold uppercase ${emphasis ? "text-primary-foreground/75" : "text-muted-foreground"}`}>{label}</p><p className="mt-3 text-2xl font-extrabold sm:text-3xl">{value}</p>{note && <p className={`mt-2 text-xs ${emphasis ? "text-primary-foreground/75" : "text-muted-foreground"}`}>{note}</p>}</div>;
}

export function StatusPill({ children, tone = "neutral" }: { children: ReactNode; tone?: "neutral" | "success" | "warning" | "danger" }) {
  const tones = { neutral: "bg-muted text-muted-foreground", success: "bg-success-soft text-success", warning: "bg-warning-soft text-warning", danger: "bg-destructive/10 text-destructive" };
  return <span className={`inline-flex rounded-full px-2.5 py-1 text-[11px] font-extrabold ${tones[tone]}`}>{children}</span>;
}

export function OpportunityCard({ item }: { item: Opportunity }) {
  const tone = item.status === "Sold out" ? "neutral" : item.status === "Nearing capacity" ? "warning" : "success";
  return <article className="financial-card overflow-hidden"><img src={item.image} alt={`${item.name} fictional property`} width={1408} height={912} loading="lazy" className="aspect-[16/10] w-full object-cover"/><div className="p-5"><div className="flex items-start justify-between gap-3"><div className="min-w-0"><p className="text-xs font-bold text-secondary">{item.plan}</p><h3 className="mt-1 truncate text-lg font-extrabold">{item.name}</h3><p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground"><MapPin className="size-3"/>{item.location}</p></div><StatusPill tone={tone}>{item.status}</StatusPill></div><div className="mt-5 grid grid-cols-3 gap-3 border-y border-border py-4"><Metric label="Slot price" value={item.slotPrice}/><Metric label="Fixed ROI" value={item.roi}/><Metric label="Duration" value={item.duration}/></div><div className="mt-4"><div className="mb-2 flex justify-between text-xs"><span className="text-muted-foreground">Capacity allocated</span><strong>{item.capacity}%</strong></div><div className="h-1.5 overflow-hidden rounded-full bg-muted"><div className="h-full rounded-full bg-secondary" style={{ width: `${item.capacity}%` }}/></div></div><Link to="/opportunities/$slug" params={{ slug: item.slug }} className="mt-5 flex items-center justify-between text-sm font-extrabold text-primary">View terms <ArrowRight className="size-4"/></Link></div></article>;
}

export function Metric({ label, value }: { label: string; value: string }) { return <div className="min-w-0"><p className="text-[10px] font-bold uppercase text-muted-foreground">{label}</p><p className="mt-1 truncate text-sm font-extrabold">{value}</p></div>; }

export function SectionTitle({ title, copy }: { title: string; copy?: string }) { return <div className="mb-5"><h2 className="text-xl font-extrabold sm:text-2xl">{title}</h2>{copy && <p className="mt-1 text-sm text-muted-foreground">{copy}</p>}</div>; }

export function StatePanel({ title, copy, tone = "success", action }: { title: string; copy: string; tone?: "success" | "warning" | "danger"; action?: ReactNode }) {
  const Icon = tone === "success" ? CheckCircle2 : Clock3;
  return <div className={`rounded-lg border p-5 ${tone === "danger" ? "border-destructive/25 bg-destructive/5" : tone === "warning" ? "border-warning/25 bg-warning-soft" : "border-success/25 bg-success-soft"}`}><div className="flex gap-3"><Icon className={`mt-0.5 size-5 shrink-0 ${tone === "danger" ? "text-destructive" : tone === "warning" ? "text-warning" : "text-success"}`}/><div><h3 className="font-extrabold">{title}</h3><p className="mt-1 text-sm leading-6 text-muted-foreground">{copy}</p>{action && <div className="mt-4">{action}</div>}</div></div></div>;
}

export function DataRow({ label, value, strong }: { label: string; value: string; strong?: boolean }) { return <div className="flex items-center justify-between gap-4 border-b border-border py-3 last:border-0"><span className="text-sm text-muted-foreground">{label}</span><span className={`text-right text-sm ${strong ? "font-extrabold text-foreground" : "font-semibold"}`}>{value}</span></div>; }