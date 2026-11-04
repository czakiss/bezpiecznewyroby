"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, ShieldAlert } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { CartButton } from "@/components/cart-sheet";
import { cn } from "@/lib/utils";

export const nav = [
  { href: "/sklep", label: "Sklep" },
  { href: "/#jak-to-dziala", label: "Jak to działa" },
  { href: "/#kielbasometr", label: "Kiełbasometr" },
  { href: "/#kalendarz", label: "Kalendarz wędzenia" },
  { href: "/#poradnik", label: "Poradnik" },
  { href: "/#faq", label: "FAQ" },
];

export function SiteHeader() {
  const path = usePathname();
  return (
    <header className="sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      {/* Pasek informacyjny */}
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-1.5 text-xs sm:px-6">
          <p className="truncate">
            <span className="mr-2 inline-block size-2 rounded-full bg-gold align-middle" />
            Wirtualne wędliny z certyfikatem. Dostawa cyfrowa w 0,3 sekundy, 7 dni w tygodniu.
          </p>
          <a href="tel:000000000" className="hidden items-center gap-1.5 whitespace-nowrap hover:underline sm:flex">
            <Phone className="size-3.5" /> Infolinia Wędliniarska 0 800 KIEŁBASA
          </a>
        </div>
      </div>
      <div className="border-b">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6">
          <Logo />
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Główna nawigacja">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-semibold transition-colors hover:bg-secondary",
                  path === n.href && "text-accent"
                )}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild variant="accent" className="hidden md:inline-flex">
              <Link href="/zglos">
                <ShieldAlert /> Zgłoś podróbkę
              </Link>
            </Button>
            <CartButton />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Menu">
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="p-6">
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <Logo />
                <nav className="mt-6 flex flex-col gap-1">
                  {nav.map((n) => (
                    <Link key={n.href} href={n.href} className="rounded-md px-3 py-2.5 font-semibold hover:bg-secondary">
                      {n.label}
                    </Link>
                  ))}
                  <Link href="/zglos" className="rounded-md px-3 py-2.5 font-semibold text-accent hover:bg-secondary">
                    Zgłoś podróbkę
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
