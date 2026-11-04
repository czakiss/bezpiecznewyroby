# Bezpieczne Wyroby

Żartobliwy sklep z **wirtualnymi wędlinami** (produkty cyfrowe). Next.js 15 (App Router) + Tailwind CSS v4 + komponenty w stylu shadcn/ui.

## Start

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # build produkcyjny
```

## Co jest w środku

| Ścieżka | Opis |
| --- | --- |
| `/` | Strona główna: hero, szybkie kafle, bestsellery, „Jak to działa”, Kiełbasometr (skaner), kalendarz wędzenia, poradnik, partnerzy, FAQ |
| `/sklep` | Katalog z kategoriami (`?kategoria=`), wyszukiwarką i sortowaniem |
| `/produkt/[slug]` | Karta produktu (statycznie generowana) |
| `/koszyk` | Koszyk + symulowana kasa |
| `/zamowienie?nr=` | Potwierdzenie i pobranie certyfikatu SVG |
| `/zglos` | Formularz zgłoszenia podróbki (demo) |

- Dane produktów: `src/lib/products.ts` (ceny w groszach).
- Koszyk: `src/components/cart-provider.tsx` (React Context + `localStorage`).
- Kolory marki: `src/app/globals.css` (granat `#12263F`, czerwień `#D7263D`, krem `#FFF8EE`, róż `#F2A7A0`, złoto `#E9B44C`).
- Komponenty UI: `src/components/ui/*` (zgodne z `components.json`, kolejne można dodać przez `npx shadcn add`).

## Grafiki produktów

Wrzuć pliki do `public/images/produkty/` jako `produkt-<slug>.png` (opcjonalnie `produkt-<slug>-lifestyle.png`).
Dopóki pliku nie ma, karta pokazuje zastępczy „plaster” z emoji.

Płatności i zgłoszenia są symulowane: nic nie jest wysyłane na serwer.
