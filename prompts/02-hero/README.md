# Hero i sekcje strony głównej

Paczka promptów do wygenerowania grafik dla sklepu **Bezpieczne Wyroby** (wirtualne wędliny).

## Jak używać
1. Otwórz plik z folderu `prompts/` (jeden plik = jedna grafika).
2. Skopiuj sekcję **Midjourney** (gotowy `--ar`) albo **Uniwersalny** (DALL·E, Ideogram, Flux, SD, Gemini…).
3. W narzędziach z polem „negative prompt” wklej sekcję **Negatywny**.
4. Zapisz wynik pod nazwą z pola `file` w `manifest.json` / `manifest.csv` i przeskaluj do `size`.
5. Wrzuć do repo w `public/images/hero/`.

## Wspólny styl
- Kolory: granat #12263F, czerwień #D7263D, krem #FFF8EE, różowy #F2A7A0, złoto #E9B44C
- Ilustracje: płaskie wektory z miękkimi gradientami, dużo światła
- Produkty: studyjne packshoty z delikatnym „cyfrowym” połyskiem (to produkty wirtualne)
- AI słabo pisze tekst: napisy (poza logo) dodawaj w HTML/CSS, nie na grafice.
  Logo najlepiej potraktować jako szkic i dopracować wektorowo.

## Zawartość (5 grafik)
| Plik | Rozmiar | Zastosowanie |
|---|---|---|
| `hero-desktop.png` | 2400x1200 | Hero strony głównej (desktop) |
| `hero-mobile.png` | 1080x1350 | Hero (mobile) |
| `how-it-works.png` | 1800x900 | Sekcja "Jak to działa" |
| `about-us.png` | 1600x1200 | Sekcja "O nas" |
| `trust-section-bg.png` | 2400x800 | Tło sekcji zaufania / gwarancji |
