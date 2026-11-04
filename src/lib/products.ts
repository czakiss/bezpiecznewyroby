export type Category = "szynki" | "kielbasy" | "wedzonki" | "podroby" | "zestawy";

export type Product = {
  slug: string;
  name: string;
  category: Category;
  price: number; // w groszach
  emoji: string;
  short: string;
  description: string;
  /** Wymyślony "certyfikat" bezpieczeństwa – 0..100 */
  safety: number;
  calories: 0;
  format: string;
  tags: string[];
  bestseller?: boolean;
  isNew?: boolean;
};

export const categories: { id: Category; label: string }[] = [
  { id: "szynki", label: "Szynki i polędwice" },
  { id: "kielbasy", label: "Kiełbasy" },
  { id: "wedzonki", label: "Wędzonki" },
  { id: "podroby", label: "Pasztety i podroby" },
  { id: "zestawy", label: "Zestawy" },
];

export const products: Product[] = [
  {
    slug: "szynka-wiejska",
    name: "Szynka Wiejska 4K",
    category: "szynki",
    price: 1499,
    emoji: "🍖",
    short: "Wędzona na dymie z serwerowni, w rozdzielczości 3840×2160.",
    description:
      "Nasz flagowy plaster. Każdy piksel tej szynki przeszedł 7-stopniową weryfikację autentyczności. Zero konserwantów, zero kalorii, zero mięsa. Idealna jako tapeta śniadaniowa lub awatar na spotkania o 8:00.",
    safety: 99,
    calories: 0,
    format: "PNG 4K + certyfikat PDF",
    tags: ["bestseller", "bez glutenu", "bez mięsa"],
    bestseller: true,
  },
  {
    slug: "kielbasa-krakowska",
    name: "Kiełbasa Krakowska Sucha",
    category: "kielbasy",
    price: 1299,
    emoji: "🌭",
    short: "Sucha jak dowcip informatyka. Wersja premium, bez wody.",
    description:
      "Klasyka w formie cyfrowej. Krakowska suszona algorytmicznie przez 128 epok treningowych. Pakiet zawiera 12 plasterków w formacie wektorowym, które możesz kroić w nieskończoność bez utraty jakości.",
    safety: 97,
    calories: 0,
    format: "SVG (nieskończone krojenie)",
    tags: ["wektor", "klasyk"],
    bestseller: true,
  },
  {
    slug: "kabanosy",
    name: "Kabanosy Bajtowe",
    category: "kielbasy",
    price: 799,
    emoji: "🥢",
    short: "Pakiet 8 kabanosów po 1 bajcie każdy. Chrupią w słuchawkach.",
    description:
      "Cienkie, chrupiące i lekkie jak plik tekstowy. Do pakietu dołączamy dźwięk chrupania w formacie WAV, żeby doświadczenie było pełne. Idealne na długie code review.",
    safety: 95,
    calories: 0,
    format: "PNG + WAV (chrup)",
    tags: ["przekąska", "audio"],
    isNew: true,
  },
  {
    slug: "salami",
    name: "Salami Pikantne Pepperoni.exe",
    category: "kielbasy",
    price: 1099,
    emoji: "🍕",
    short: "Ostre jak deadline w piątek po 16:00.",
    description:
      "Pikantne salami w wersji instalowalnej (spokojnie, to tylko obrazek). Poziom ostrości: 404 Scoville. Rekomendowane do wirtualnej pizzy i memów na kanale #random.",
    safety: 93,
    calories: 0,
    format: "PNG + naklejki do komunikatora",
    tags: ["ostre", "naklejki"],
  },
  {
    slug: "boczek-wedzony",
    name: "Boczek Wędzony w Chmurze",
    category: "wedzonki",
    price: 1199,
    emoji: "🥓",
    short: "Wędzony w chmurze obliczeniowej, chrupie bez tłuszczu.",
    description:
      "Boczek wędzony przez 48 godzin w trzech regionach chmurowych dla redundancji smaku. Synchronizuje się na wszystkich Twoich urządzeniach. Brak skwarek na klawiaturze gwarantowany.",
    safety: 98,
    calories: 0,
    format: "PNG + animacja skwierczenia (GIF)",
    tags: ["chmura", "animowany"],
    bestseller: true,
  },
  {
    slug: "poledwica-sopocka",
    name: "Polędwica Sopocka Retina",
    category: "szynki",
    price: 1599,
    emoji: "🥩",
    short: "Delikatna, różowa i ostra jak ekran Retina.",
    description:
      "Polędwica z nadmorskim klimatem i gęstością 460 pikseli na cal. Kolor kalibrowany w przestrzeni Display P3, żeby róż był różowy dokładnie tak, jak trzeba.",
    safety: 99,
    calories: 0,
    format: "PNG HDR",
    tags: ["premium", "HDR"],
  },
  {
    slug: "kielbasa-slaska",
    name: "Kiełbasa Śląska z Grilla 3D",
    category: "kielbasy",
    price: 1399,
    emoji: "🔥",
    short: "Model 3D, można obracać i podziwiać nacięcia.",
    description:
      "Pierwsza w Polsce kiełbasa w pełnym 3D. Obróć ją, przybliż, podziwiaj idealne nacięcia z grilla. Nie kapie tłuszczem na węgiel, bo węgla też nie ma.",
    safety: 94,
    calories: 0,
    format: "GLB (model 3D) + PNG",
    tags: ["3D", "grill"],
    isNew: true,
  },
  {
    slug: "kielbasa-mysliwska",
    name: "Kiełbasa Myśliwska Offline",
    category: "kielbasy",
    price: 1199,
    emoji: "🌲",
    short: "Działa bez internetu. Na wyprawy do lasu i w pociągu.",
    description:
      "Myśliwska, która nie wymaga zasięgu. Pobierz raz, ciesz się zawsze. Pachnie jałowcem (w wyobraźni). W zestawie mapa grzybowych miejsc, które również nie istnieją.",
    safety: 96,
    calories: 0,
    format: "PNG + tryb offline",
    tags: ["offline", "turystyczna"],
  },
  {
    slug: "baleron",
    name: "Baleron Bezstratny",
    category: "wedzonki",
    price: 1299,
    emoji: "🍥",
    short: "Kompresja bezstratna: każdy marmurek na swoim miejscu.",
    description:
      "Baleron zapisany w formacie bezstratnym, bo marmurkowanie to sztuka. Otwierasz plik i widzisz każdą żyłkę smaku dokładnie tak, jak zaprojektował ją nasz Mistrz Wędzarni.",
    safety: 97,
    calories: 0,
    format: "PNG (lossless)",
    tags: ["lossless"],
  },
  {
    slug: "schab-pieczony",
    name: "Schab Pieczony Niedzielny",
    category: "szynki",
    price: 1399,
    emoji: "🍽️",
    short: "Smak niedzieli u babci, dostępny 24/7.",
    description:
      "Schab, który pachnie (umownie) majerankiem i rodzinnym obiadem. Pobierz w niedzielę, odtwarzaj w poniedziałek, kiedy najbardziej potrzebujesz.",
    safety: 98,
    calories: 0,
    format: "PNG + przepis PDF",
    tags: ["rodzinny", "przepis"],
  },
  {
    slug: "mortadela",
    name: "Mortadela Retro 8-bit",
    category: "wedzonki",
    price: 699,
    emoji: "👾",
    short: "Pikselowa klasyka z czasów dyskietek.",
    description:
      "Mortadela w rozdzielczości 64×64 i palecie 16 kolorów. Dla koneserów retro i fanów chiptune. W zestawie ikonka na pulpit.",
    safety: 91,
    calories: 0,
    format: "PNG 8-bit + ICO",
    tags: ["retro", "pixel art"],
  },
  {
    slug: "pasztet",
    name: "Pasztet z Pamięci Podręcznej",
    category: "podroby",
    price: 899,
    emoji: "🥫",
    short: "Smarowny jak cache, ładuje się błyskawicznie.",
    description:
      "Pasztet przechowywany w pamięci podręcznej dla natychmiastowej dostawy. Rozsmaruj go na wirtualnej kromce w dowolnym edytorze graficznym.",
    safety: 92,
    calories: 0,
    format: "PNG + pędzel do edytora",
    tags: ["smarowny"],
  },
  {
    slug: "salceson",
    name: "Salceson Mozaikowy",
    category: "podroby",
    price: 799,
    emoji: "🧩",
    short: "Puzzle z 500 elementów. Wersja dla wytrwałych.",
    description:
      "Salceson, który jest jednocześnie układanką. Zgadnij, z czego się składa (podpowiedź: z pikseli). Plik zawiera wersję ułożoną i rozsypaną.",
    safety: 90,
    calories: 0,
    format: "PNG + puzzle JPG",
    tags: ["puzzle"],
  },
  {
    slug: "kaszanka",
    name: "Kaszanka Dark Mode",
    category: "podroby",
    price: 899,
    emoji: "🌑",
    short: "Najciemniejszy produkt w ofercie. Oszczędza baterię OLED.",
    description:
      "Kaszanka zaprojektowana z myślą o trybie ciemnym. Dzięki czarnym pikselom zużywa mniej energii na ekranach OLED. Ekologia i tradycja w jednym.",
    safety: 95,
    calories: 0,
    format: "PNG (dark) + PNG (light)",
    tags: ["dark mode", "eko"],
    isNew: true,
  },
  {
    slug: "zestaw-degustacyjny",
    name: "Zestaw Degustacyjny „Deska Admina”",
    category: "zestawy",
    price: 4999,
    emoji: "🧺",
    short: "6 bestsellerów na jednej wirtualnej desce. Oszczędzasz 30%.",
    description:
      "Szynka Wiejska 4K, Krakowska Sucha, Boczek w Chmurze, Kabanosy Bajtowe, Polędwica Retina i Kaszanka Dark Mode, ułożone na desce z dębu wygenerowanego proceduralnie. Idealny prezent dla kogoś, kto ma już wszystko oprócz lodówki.",
    safety: 100,
    calories: 0,
    format: "Paczka ZIP (6 produktów) + karta podarunkowa",
    tags: ["prezent", "-30%"],
    bestseller: true,
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function productImage(slug: string, variant: "main" | "lifestyle" = "main") {
  return `/images/produkty/produkt-${slug}${variant === "lifestyle" ? "-lifestyle" : ""}.png`;
}
