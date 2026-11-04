"use client";

import * as React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getProduct } from "@/lib/products";
import { certificateSvg, downloadFile } from "@/lib/certificate";
import { formatPrice } from "@/lib/utils";

type Order = { id: string; name: string; email: string; items: { slug: string; qty: number }[]; total: number };

export function OrderView() {
  const nr = useSearchParams().get("nr") ?? "";
  const [order, setOrder] = React.useState<Order | null | undefined>(undefined);

  React.useEffect(() => {
    try {
      const v = sessionStorage.getItem(`bw-zamowienie-${nr}`);
      setOrder(v ? JSON.parse(v) : null);
    } catch {
      setOrder(null);
    }
  }, [nr]);

  if (order === undefined) return null;
  if (!order)
    return (
      <div className="py-20 text-center">
        <p className="text-lg font-semibold">Nie znaleźliśmy tego zamówienia w tej karcie przeglądarki.</p>
        <Button asChild variant="accent" className="mt-4"><Link href="/sklep">Wróć do sklepu</Link></Button>
      </div>
    );

  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <div className="flex flex-col items-center gap-3 text-center">
        <CheckCircle2 className="size-16 text-emerald-600" />
        <h2 className="text-3xl font-extrabold">Dziękujemy, {order.name}!</h2>
        <p className="text-muted-foreground">
          Zamówienie <strong className="text-foreground">#{order.id}</strong> na kwotę {formatPrice(order.total)} zostało uwędzone i dostarczone. Pobierz swoje certyfikaty poniżej.
        </p>
      </div>
      <Card>
        <CardContent>
          <ul className="divide-y">
            {order.items.map((i) => {
              const p = getProduct(i.slug);
              if (!p) return null;
              return (
                <li key={i.slug} className="flex items-center gap-4 py-4">
                  <div className="flex size-14 items-center justify-center rounded-lg bg-cream text-3xl">{p.emoji}</div>
                  <div className="flex-1">
                    <p className="font-bold">{p.name}</p>
                    <p className="text-sm text-muted-foreground">{i.qty} szt. · {p.format}</p>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => downloadFile(`certyfikat-${p.slug}.svg`, certificateSvg(p, order.id, order.name))}>
                    <Download /> Certyfikat
                  </Button>
                </li>
              );
            })}
          </ul>
        </CardContent>
      </Card>
      <div className="flex justify-center">
        <Button asChild variant="accent" size="lg"><Link href="/sklep">Kontynuuj zakupy</Link></Button>
      </div>
    </div>
  );
}
