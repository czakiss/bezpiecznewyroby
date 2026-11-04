"use client";

import * as React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ProductCard } from "@/components/product-card";
import { categories, products, type Category } from "@/lib/products";
import { cn } from "@/lib/utils";

const sorts = [
  { id: "popularne", label: "Popularne" },
  { id: "cena-rosnaco", label: "Cena rosnąco" },
  { id: "cena-malejaco", label: "Cena malejąco" },
] as const;

export function ShopGrid() {
  const params = useSearchParams();
  const router = useRouter();
  const cat = params.get("kategoria") as Category | null;
  const [q, setQ] = React.useState("");
  const [sort, setSort] = React.useState<(typeof sorts)[number]["id"]>("popularne");

  const list = React.useMemo(() => {
    let l = products.filter((p) => (!cat || p.category === cat) && p.name.toLowerCase().includes(q.toLowerCase()));
    if (sort === "cena-rosnaco") l = [...l].sort((a, b) => a.price - b.price);
    if (sort === "cena-malejaco") l = [...l].sort((a, b) => b.price - a.price);
    if (sort === "popularne") l = [...l].sort((a, b) => Number(!!b.bestseller) - Number(!!a.bestseller));
    return l;
  }, [cat, q, sort]);

  const setCat = (c: Category | null) => router.replace(c ? `/sklep?kategoria=${c}` : "/sklep", { scroll: false });

  return (
    <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
      <aside className="space-y-6">
        <div className="relative">
          <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Szukaj wyrobu…" className="pl-9" value={q} onChange={(e) => setQ(e.target.value)} />
        </div>
        <div>
          <h2 className="mb-3 text-sm font-bold tracking-wider text-muted-foreground uppercase">Kategorie</h2>
          <ul className="flex flex-wrap gap-2 lg:flex-col lg:gap-1">
            {[{ id: null, label: "Wszystkie wyroby" } as { id: Category | null; label: string }, ...categories].map((c) => (
              <li key={c.label}>
                <button
                  onClick={() => setCat(c.id)}
                  className={cn(
                    "w-full rounded-md px-3 py-2 text-left text-sm font-semibold transition-colors",
                    cat === c.id ? "bg-primary text-primary-foreground" : "bg-secondary hover:bg-secondary/70 lg:bg-transparent lg:hover:bg-secondary"
                  )}
                >
                  {c.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </aside>
      <div>
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-muted-foreground">
            Znaleziono <strong className="text-foreground">{list.length}</strong> wyrobów
          </p>
          <div className="flex gap-1 rounded-lg bg-secondary p-1">
            {sorts.map((s) => (
              <button
                key={s.id}
                onClick={() => setSort(s.id)}
                className={cn("rounded-md px-3 py-1.5 text-xs font-semibold", sort === s.id ? "bg-white shadow-sm" : "text-muted-foreground")}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
        {list.length === 0 ? (
          <p className="rounded-xl border border-dashed p-10 text-center text-muted-foreground">Brak wyrobów. Może kiełbasa poszła na spacer?</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {list.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
