# Banery promocyjne i ilustracje stanów

Paczka promptów do wygenerowania grafik dla sklepu **Bezpieczne Wyroby** (wirtualne wędliny).

## Jak używać
1. Otwórz plik z folderu `prompts/` (jeden plik = jedna grafika).
2. Skopiuj sekcję **Midjourney** (gotowy `--ar`) albo **Uniwersalny** (DALL·E, Ideogram, Flux, SD, Gemini…).
3. W narzędziach z polem „negative prompt” wklej sekcję **Negatywny**.
4. Zapisz wynik pod nazwą z pola `file` w `manifest.json` / `manifest.csv` i przeskaluj do `size`.
5. Wrzuć do repo w `public/images/banery/`.

## Wspólny styl
- Kolory: granat #12263F, czerwień #D7263D, krem #FFF8EE, różowy #F2A7A0, złoto #E9B44C
- Ilustracje: płaskie wektory z miękkimi gradientami, dużo światła
- Produkty: studyjne packshoty z delikatnym „cyfrowym” połyskiem (to produkty wirtualne)
- AI słabo pisze tekst: napisy (poza logo) dodawaj w HTML/CSS, nie na grafice.
  Logo najlepiej potraktować jako szkic i dopracować wektorowo.

## Zawartość (8 grafik)
| Plik | Rozmiar | Zastosowanie |
|---|---|---|
| `baner-promocja.png` | 1920x600 | Baner promocji na stronie głównej |
| `baner-nowosci.png` | 1920x600 | Baner "Nowości" |
| `baner-swieta.png` | 1920x600 | Baner świąteczny (Wielkanoc/Boże Narodzenie) |
| `newsletter.png` | 1200x800 | Sekcja newslettera |
| `pusty-koszyk.png` | 800x800 | Stan: pusty koszyk |
| `404.png` | 1200x900 | Strona 404 |
| `zamowienie-sukces.png` | 800x800 | Potwierdzenie zamówienia |
| `certyfikat-tlo.png` | 2480x3508 | Tło certyfikatu zakupu (PDF dla klienta) |
