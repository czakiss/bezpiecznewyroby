import Link from "next/link";
import { Logo } from "@/components/logo";
import { categories } from "@/lib/products";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Logo light />
          <p className="text-sm text-white/70">
            Pierwszy w Polsce sklep z wirtualnymi wędlinami. Zero kalorii, zero konserwantów, 100% bezpieczeństwa cyfrowego.
          </p>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-bold tracking-wider text-gold uppercase">Asortyment</h3>
          <ul className="space-y-2 text-sm text-white/80">
            {categories.map((c) => (
              <li key={c.id}>
                <Link href={`/sklep?kategoria=${c.id}`} className="hover:text-white hover:underline">
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-bold tracking-wider text-gold uppercase">Dla klienta</h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link href="/#jak-to-dziala" className="hover:text-white hover:underline">Jak działa dostawa cyfrowa</Link></li>
            <li><Link href="/#poradnik" className="hover:text-white hover:underline">Jak rozpoznać podróbkę</Link></li>
            <li><Link href="/#faq" className="hover:text-white hover:underline">Najczęstsze pytania</Link></li>
            <li><Link href="/zglos" className="hover:text-white hover:underline">Zgłoś podejrzany wyrób</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-bold tracking-wider text-gold uppercase">Kontakt</h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li>Wirtualna Wędzarnia, ul. Chmurowa 404</li>
            <li>00-000 Internet</li>
            <li>kontakt@bezpiecznewyroby.example</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-white/60 sm:flex-row sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} Bezpieczne Wyroby. Wszystkie wędliny są fikcyjne i niejadalne.</p>
          <p>Projekt rozrywkowy. Produkty cyfrowe, nie stanowią żywności.</p>
        </div>
      </div>
    </footer>
  );
}
