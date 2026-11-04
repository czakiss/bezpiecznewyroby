import type { Product } from "@/lib/products";

function esc(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

/** Generuje certyfikat autentyczności wyrobu jako plik SVG. */
export function certificateSvg(product: Product, orderId: string, buyer: string) {
  const code = `BW-${product.slug.toUpperCase()}-${orderId}`;
  const date = new Date().toLocaleDateString("pl-PL");
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800" font-family="Inter, Arial, sans-serif">
  <rect width="1200" height="800" fill="#FFF8EE"/>
  <rect x="30" y="30" width="1140" height="740" fill="none" stroke="#12263F" stroke-width="6"/>
  <rect x="48" y="48" width="1104" height="704" fill="none" stroke="#E9B44C" stroke-width="2" stroke-dasharray="10 8"/>
  <text x="600" y="140" text-anchor="middle" font-size="28" font-weight="700" fill="#D7263D" letter-spacing="6">BEZPIECZNE WYROBY</text>
  <text x="600" y="210" text-anchor="middle" font-size="56" font-weight="800" fill="#12263F">Certyfikat Autentyczności</text>
  <text x="600" y="260" text-anchor="middle" font-size="22" fill="#5A6B82">Niniejszym zaświadcza się, że</text>
  <text x="600" y="320" text-anchor="middle" font-size="40" font-weight="700" fill="#12263F">${esc(buyer || "Szanowny Klient")}</text>
  <text x="600" y="370" text-anchor="middle" font-size="22" fill="#5A6B82">jest prawowitym właścicielem wirtualnego wyrobu</text>
  <text x="600" y="460" text-anchor="middle" font-size="120">${product.emoji}</text>
  <text x="600" y="540" text-anchor="middle" font-size="44" font-weight="800" fill="#D7263D">${esc(product.name)}</text>
  <text x="600" y="590" text-anchor="middle" font-size="20" fill="#12263F">Indeks bezpieczeństwa: ${product.safety}/100 · Kaloryczność: 0 kcal · Data przydatności: do końca internetu</text>
  <line x1="140" y1="680" x2="440" y2="680" stroke="#12263F" stroke-width="2"/>
  <text x="290" y="710" text-anchor="middle" font-size="18" fill="#5A6B82">Mistrz Wirtualnej Wędzarni</text>
  <text x="290" y="665" text-anchor="middle" font-size="30" font-style="italic" fill="#12263F">J. Plasterek</text>
  <text x="1060" y="680" text-anchor="end" font-size="18" fill="#5A6B82">Kod: ${esc(code)}</text>
  <text x="1060" y="710" text-anchor="end" font-size="18" fill="#5A6B82">Wydano: ${date}</text>
  <circle cx="600" cy="680" r="48" fill="#D7263D"/>
  <circle cx="600" cy="680" r="40" fill="none" stroke="#FFF8EE" stroke-width="2" stroke-dasharray="4 4"/>
  <text x="600" y="688" text-anchor="middle" font-size="22" font-weight="800" fill="#FFF8EE">100%</text>
</svg>`;
}

export function downloadFile(name: string, content: string, type = "image/svg+xml") {
  const url = URL.createObjectURL(new Blob([content], { type }));
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
