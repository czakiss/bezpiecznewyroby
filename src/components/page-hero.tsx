import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function PageHero({ title, lead, crumbs }: { title: string; lead?: string; crumbs: { href?: string; label: string }[] }) {
  return (
    <section className="bg-slices bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <nav aria-label="Okruszki" className="mb-4 flex flex-wrap items-center gap-1 text-sm text-white/70">
          <Link href="/" className="hover:text-white">Strona główna</Link>
          {crumbs.map((c) => (
            <span key={c.label} className="flex items-center gap-1">
              <ChevronRight className="size-3.5" />
              {c.href ? <Link href={c.href} className="hover:text-white">{c.label}</Link> : <span className="text-white">{c.label}</span>}
            </span>
          ))}
        </nav>
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h1>
        {lead && <p className="mt-3 max-w-2xl text-lg text-white/80">{lead}</p>}
      </div>
    </section>
  );
}
