"use client";

import * as React from "react";
import { getProduct, type Product } from "@/lib/products";

type Line = { slug: string; qty: number };
type CartCtx = {
  lines: (Line & { product: Product })[];
  count: number;
  total: number;
  open: boolean;
  setOpen: (v: boolean) => void;
  add: (slug: string, qty?: number) => void;
  setQty: (slug: string, qty: number) => void;
  remove: (slug: string) => void;
  clear: () => void;
};

const Ctx = React.createContext<CartCtx | null>(null);
const KEY = "bw-koszyk";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [raw, setRaw] = React.useState<Line[]>([]);
  const [open, setOpen] = React.useState(false);
  const loaded = React.useRef(false);

  React.useEffect(() => {
    try {
      const v = localStorage.getItem(KEY);
      if (v) setRaw(JSON.parse(v));
    } catch {}
    loaded.current = true;
  }, []);

  React.useEffect(() => {
    if (!loaded.current) return;
    try {
      localStorage.setItem(KEY, JSON.stringify(raw));
    } catch {}
  }, [raw]);

  const lines = raw
    .map((l) => ({ ...l, product: getProduct(l.slug) }))
    .filter((l): l is Line & { product: Product } => !!l.product);

  const value: CartCtx = {
    lines,
    count: lines.reduce((s, l) => s + l.qty, 0),
    total: lines.reduce((s, l) => s + l.qty * l.product.price, 0),
    open,
    setOpen,
    add: (slug, qty = 1) => {
      setRaw((r) => {
        const ex = r.find((l) => l.slug === slug);
        return ex ? r.map((l) => (l.slug === slug ? { ...l, qty: l.qty + qty } : l)) : [...r, { slug, qty }];
      });
      setOpen(true);
    },
    setQty: (slug, qty) => setRaw((r) => (qty <= 0 ? r.filter((l) => l.slug !== slug) : r.map((l) => (l.slug === slug ? { ...l, qty } : l)))),
    remove: (slug) => setRaw((r) => r.filter((l) => l.slug !== slug)),
    clear: () => setRaw([]),
  };

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useCart() {
  const c = React.useContext(Ctx);
  if (!c) throw new Error("useCart poza CartProvider");
  return c;
}
