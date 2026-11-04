"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Loader2, Lock, Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { PageHero } from "@/components/page-hero";
import { useCart } from "@/components/cart-provider";
import { cn, formatPrice } from "@/lib/utils";

const methods = [
  { id: "plasterki", label: "Plasterki lojalnościowe", emoji: "🍖" },
  { id: "uscisk", label: "Wirtualny uścisk dłoni", emoji: "🤝" },
  { id: "kupon", label: "Kupon od babci", emoji: "👵" },
];

export default function KoszykPage() {
  const { lines, total, setQty, remove, clear } = useCart();
  const router = useRouter();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [method, setMethod] = React.useState(methods[0].id);
  const [busy, setBusy] = React.useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!lines.length) return;
    setBusy(true);
    const id = Math.random().toString(36).slice(2, 8).toUpperCase();
    const order = { id, name, email, items: lines.map((l) => ({ slug: l.slug, qty: l.qty })), total, method };
    try {
      sessionStorage.setItem(`bw-zamowienie-${id}`, JSON.stringify(order));
    } catch {}
    setTimeout(() => {
      clear();
      router.push(`/zamowienie?nr=${id}`);
    }, 1200);
  }

  return (
    <>
      <PageHero title="Koszyk i kasa" crumbs={[{ href: "/sklep", label: "Sklep" }, { label: "Koszyk" }]} />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        {lines.length === 0 ? (
          <div className="flex flex-col items-center gap-4 rounded-2xl border border-dashed py-20 text-center">
            <span className="text-6xl">🧺</span>
            <h2 className="text-2xl font-extrabold">Twój koszyk jest pusty</h2>
            <p className="text-muted-foreground">Wirtualna lodówka czeka na napełnienie.</p>
            <Button asChild variant="accent" size="lg">
              <Link href="/sklep">Przejdź do sklepu</Link>
            </Button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="grid gap-8 lg:grid-cols-[1fr_400px]">
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Wyroby w koszyku</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="divide-y">
                    {lines.map((l) => (
                      <li key={l.slug} className="flex items-center gap-4 py-4">
                        <div className="flex size-16 shrink-0 items-center justify-center rounded-lg bg-cream text-3xl">{l.product.emoji}</div>
                        <div className="flex-1">
                          <Link href={`/produkt/${l.slug}`} className="font-bold hover:text-accent">{l.product.name}</Link>
                          <p className="text-sm text-muted-foreground">{l.product.format}</p>
                        </div>
                        <div className="flex items-center rounded-md border">
                          <button type="button" className="p-2" onClick={() => setQty(l.slug, l.qty - 1)} aria-label="Mniej"><Minus className="size-4" /></button>
                          <span className="w-8 text-center font-semibold">{l.qty}</span>
                          <button type="button" className="p-2" onClick={() => setQty(l.slug, l.qty + 1)} aria-label="Więcej"><Plus className="size-4" /></button>
                        </div>
                        <span className="hidden w-24 text-right font-bold sm:block">{formatPrice(l.qty * l.product.price)}</span>
                        <button type="button" onClick={() => remove(l.slug)} className="text-muted-foreground hover:text-accent" aria-label="Usuń"><Trash2 className="size-4" /></button>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Dane do certyfikatu</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Imię na certyfikacie</Label>
                    <Input id="name" required placeholder="np. Kamil" value={name} onChange={(e) => setName(e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail (opcjonalnie)</Label>
                    <Input id="email" type="email" placeholder="ty@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Metoda płatności</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-3 sm:grid-cols-3">
                  {methods.map((m) => (
                    <button
                      type="button"
                      key={m.id}
                      onClick={() => setMethod(m.id)}
                      className={cn("flex flex-col items-center gap-2 rounded-xl border-2 p-4 text-sm font-semibold transition-colors", method === m.id ? "border-accent bg-accent/5" : "hover:border-primary/30")}
                    >
                      <span className="text-3xl">{m.emoji}</span>
                      {m.label}
                    </button>
                  ))}
                  <p className="text-xs text-muted-foreground sm:col-span-3">Płatność jest symulowana. Nie pobieramy pieniędzy ani danych kart.</p>
                </CardContent>
              </Card>
            </div>
            <Card className="h-fit lg:sticky lg:top-32">
              <CardHeader>
                <CardTitle className="text-xl">Podsumowanie</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between text-sm"><span className="text-muted-foreground">Wartość wyrobów</span><span>{formatPrice(total)}</span></div>
                <div className="flex justify-between text-sm"><span className="text-muted-foreground">Dostawa cyfrowa</span><span className="font-semibold text-emerald-700">0,00 zł</span></div>
                <div className="flex justify-between text-sm"><span className="text-muted-foreground">Łańcuch chłodniczy</span><span>niepotrzebny</span></div>
                <Separator />
                <div className="flex justify-between text-xl font-extrabold"><span>Do zapłaty</span><span>{formatPrice(total)}</span></div>
                <Button type="submit" variant="accent" size="lg" className="w-full" disabled={busy}>
                  {busy ? <Loader2 className="animate-spin" /> : <Lock />} {busy ? "Wędzimy zamówienie…" : "Zamawiam i pobieram"}
                </Button>
              </CardContent>
            </Card>
          </form>
        )}
      </div>
    </>
  );
}
