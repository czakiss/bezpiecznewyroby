"use client";

import Link from "next/link";
import { Minus, Plus, ShoppingBasket, Trash2, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/components/cart-provider";
import { formatPrice } from "@/lib/utils";

export function CartButton() {
  const { count, setOpen } = useCart();
  return (
    <Button variant="outline" size="icon" className="relative" onClick={() => setOpen(true)} aria-label={`Koszyk, produktów: ${count}`}>
      <ShoppingBasket className="size-5" />
      {count > 0 && (
        <span className="absolute -top-1.5 -right-1.5 flex size-5 items-center justify-center rounded-full bg-accent text-[11px] font-bold text-white">
          {count}
        </span>
      )}
    </Button>
  );
}

export function CartSheet() {
  const { lines, total, open, setOpen, setQty, remove } = useCart();
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent>
        <SheetHeader className="border-b">
          <SheetTitle>Twój koszyk</SheetTitle>
          <SheetDescription>Wszystkie wyroby są cyfrowe i dostarczamy je natychmiast.</SheetDescription>
        </SheetHeader>
        <div className="flex-1 overflow-y-auto px-4">
          {lines.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
              <span className="text-5xl">🧺</span>
              <p className="font-semibold">Koszyk jest pusty jak lodówka w poniedziałek.</p>
              <Button asChild variant="outline" onClick={() => setOpen(false)}>
                <Link href="/sklep">Przejdź do sklepu</Link>
              </Button>
            </div>
          ) : (
            <ul className="divide-y">
              {lines.map((l) => (
                <li key={l.slug} className="flex gap-3 py-4">
                  <div className="flex size-14 shrink-0 items-center justify-center rounded-lg bg-cream text-2xl">{l.product.emoji}</div>
                  <div className="flex flex-1 flex-col gap-2">
                    <div className="flex justify-between gap-2">
                      <span className="text-sm leading-tight font-semibold">{l.product.name}</span>
                      <button onClick={() => remove(l.slug)} className="text-muted-foreground hover:text-accent" aria-label="Usuń">
                        <Trash2 className="size-4" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center rounded-md border">
                        <button className="p-1.5" onClick={() => setQty(l.slug, l.qty - 1)} aria-label="Mniej">
                          <Minus className="size-3.5" />
                        </button>
                        <span className="w-7 text-center text-sm font-semibold">{l.qty}</span>
                        <button className="p-1.5" onClick={() => setQty(l.slug, l.qty + 1)} aria-label="Więcej">
                          <Plus className="size-3.5" />
                        </button>
                      </div>
                      <span className="text-sm font-bold">{formatPrice(l.qty * l.product.price)}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        {lines.length > 0 && (
          <SheetFooter className="border-t">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Dostawa cyfrowa</span>
              <span className="font-semibold text-emerald-700">0,00 zł</span>
            </div>
            <Separator />
            <div className="flex items-center justify-between text-lg font-extrabold">
              <span>Razem</span>
              <span>{formatPrice(total)}</span>
            </div>
            <Button asChild variant="accent" size="lg" onClick={() => setOpen(false)}>
              <Link href="/koszyk">
                <Zap /> Przejdź do kasy
              </Link>
            </Button>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
}
