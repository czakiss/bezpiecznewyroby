# Branding: logo, sygnet, favicon, OG

Paczka promptów do wygenerowania grafik dla sklepu **Bezpieczne Wyroby** (wirtualne wędliny).

## Jak używać
1. Otwórz plik z folderu `prompts/` (jeden plik = jedna grafika).
2. Skopiuj sekcję **Midjourney** (gotowy `--ar`) albo **Uniwersalny** (DALL·E, Ideogram, Flux, SD, Gemini…).
3. W narzędziach z polem „negative prompt” wklej sekcję **Negatywny**.
4. Zapisz wynik pod nazwą z pola `file` w `manifest.json` / `manifest.csv` i przeskaluj do `size`.
5. Wrzuć do repo w `public/images/branding/`.

## Wspólny styl
- Kolory: granat #12263F, czerwień #D7263D, krem #FFF8EE, różowy #F2A7A0, złoto #E9B44C
- Ilustracje: płaskie wektory z miękkimi gradientami, dużo światła
- Produkty: studyjne packshoty z delikatnym „cyfrowym” połyskiem (to produkty wirtualne)
- AI słabo pisze tekst: napisy (poza logo) dodawaj w HTML/CSS, nie na grafice.
  Logo najlepiej potraktować jako szkic i dopracować wektorowo.

## Zawartość (5 grafik)
| Plik | Rozmiar | Zastosowanie |
|---|---|---|
| `logo-main.png` | 1600x480 | Logo w nagłówku (jasne tło) |
| `logo-mark.png` | 1024x1024 | Sygnet (avatar, mobile header) |
| `logo-mono-white.png` | 1600x480 | Logo na ciemnym tle (stopka) |
| `favicon.png` | 512x512 | Favicon / app icon (zmniejszyć do 32/180/192) |
| `og-image.png` | 1200x630 | Obrazek Open Graph do udostępnień |
