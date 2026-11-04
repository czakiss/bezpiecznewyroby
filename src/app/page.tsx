import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  CloudDownload,
  Eye,
  FileWarning,
  Fingerprint,
  Megaphone,
  ScanSearch,
  ShieldCheck,
  ShoppingBasket,
  Sparkles,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ProductCard } from "@/components/product-card";
import { Kielbasometr } from "@/components/kielbasometr";
import { SectionHeading } from "@/components/section-heading";
import { products } from "@/lib/products";

const tiles = [
  { icon: ShoppingBasket, title: "Sklep z wyrobami", text: "15 cyfrowych wędlin z certyfikatem, od kabanosa po deskę admina.", href: "/sklep" },
  { icon: ScanSearch, title: "Kiełbasometr", text: "Sprawdź, czy Twoja kiełbasa jest prawdziwie wirtualna.", href: "/#kielbasometr" },
  { icon: Megaphone, title: "Zgłoś podróbkę", text: "Widziałeś wędlinę ze sztucznymi pikselami? Daj nam znać.", href: "/zglos" },
  { icon: CalendarDays, title: "Kalendarz wędzenia", text: "Premiery, promocje i święta kiełbasy w jednym miejscu.", href: "/#kalendarz" },
];

const steps = [
  { icon: ShoppingBasket, title: "Wybierz wyrób", text: "Dodaj do koszyka szynkę, kiełbasę albo cały zestaw degustacyjny." },
  { icon: BadgeCheck, title: "Zapłać symbolicznie", text: "Płatność jest na niby, więc nikt nie traci prawdziwych złotówek." },
  { icon: CloudDownload, title: "Odbierz natychmiast", text: "Certyfikat i grafika wyrobu pobierają się od razu po zamówieniu." },
  { icon: Sparkles, title: "Ciesz się bez kalorii", text: "Ustaw jako tapetę, wyślij znajomym albo powieś w wirtualnej spiżarni." },
];

const calendar = [
  { date: "11 listopada", title: "Dzień Kiełbasy Niepodległej", text: "Biało-czerwone kabanosy w limitowanej edycji." },
  { date: "29 listopada", title: "Czarny Piątek Kaszanki", text: "Kaszanka Dark Mode za pół ceny. Bo jest najciemniejsza." },
  { date: "6 grudnia", title: "Mikołajkowa Deska Admina", text: "Zestaw degustacyjny z kartą podarunkową w prezencie." },
  { date: "20 grudnia", title: "Wielkie Wędzenie Świąteczne", text: "Premiera Szynki Świątecznej 8K. Zapisz się na powiadomienie." },
];

const guide = [
  { icon: Eye, title: "Spójrz na piksele", text: "Prawdziwy wyrób cyfrowy ma ostre krawędzie. Rozmazana szynka to sygnał ostrzegawczy." },
  { icon: Fingerprint, title: "Sprawdź podpis", text: "Każdy nasz plaster ma unikalny kod BW-… i podpis Mistrza Wędzarni na certyfikacie." },
  { icon: FileWarning, title: "Uważaj na „promocje”", text: "Kiełbasa za 0 zł z linku od nieznajomego? Prawdopodobnie to tylko zdjęcie z internetu." },
  { icon: ShieldCheck, title: "Kupuj u źródła", text: "Wirtualne wędliny kupuj tylko w sprawdzonych wirtualnych sklepach. Takich jak nasz." },
];

const partners = ["Wędzarnia Chmurowa", "Cech Pikselarzy", "Instytut Plasterka", "Fundacja Zero Kalorii", "Masarnia 404"];

const faq = [
  { q: "Czy te wędliny można zjeść?", a: "Nie. To produkty cyfrowe: grafiki, certyfikaty i odrobina humoru. Mają zero kalorii i zero wartości odżywczych, ale za to sporo wartości rozrywkowej." },
  { q: "Jak wygląda dostawa?", a: "Po złożeniu zamówienia od razu pobierasz certyfikat autentyczności wyrobu. Nie ma kuriera, paczkomatu ani łańcucha chłodniczego." },
  { q: "Czy płacę prawdziwymi pieniędzmi?", a: "W tej wersji sklepu płatność jest symulowana. Niczego nie pobieramy i nie zbieramy danych kart." },
  { q: "Czy wirtualna wędlina się psuje?", a: "Nigdy. Data przydatności to „do końca internetu”. Zalecamy jedynie kopię zapasową w chmurze." },
  { q: "Czy mogę podarować wyrób komuś bliskiemu?", a: "Tak! Certyfikat możesz wysłać mailem, w komunikatorze albo wydrukować i wręczyć z wielką powagą." },
];

export default function Home() {
  const featured = products.filter((p) => p.bestseller).slice(0, 4);

  return (
    <>
      {/* HERO */}
      <section className="bg-slices relative overflow-hidden bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2">
          <div className="space-y-6">
            <Badge variant="gold" className="px-3 py-1 text-sm">
              <ShieldCheck /> Certyfikowane wyroby cyfrowe
            </Badge>
            <h1 className="text-4xl font-extrabold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Bezpieczne wyroby. <span className="text-gold">Wirtualne</span> wędliny bez kompromisów.
            </h1>
            <p className="max-w-xl text-lg text-white/80">
              Szynka w 4K, kiełbasa w 3D i kaszanka w trybie ciemnym. Zero kalorii, zero konserwantów i natychmiastowa dostawa prosto na Twój ekran.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" variant="accent">
                <Link href="/sklep">
                  Zobacz asortyment <ArrowRight />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white">
                <Link href="/#kielbasometr">
                  <ScanSearch /> Sprawdź swoją kiełbasę
                </Link>
              </Button>
            </div>
            <dl className="grid max-w-md grid-cols-3 gap-4 pt-4">
              {[
                ["0 kcal", "w każdym plastrze"],
                ["0,3 s", "czas dostawy"],
                ["100%", "bez mięsa"],
              ].map(([v, l]) => (
                <div key={v}>
                  <dt className="text-2xl font-extrabold text-gold">{v}</dt>
                  <dd className="text-xs text-white/70">{l}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <div className="absolute inset-0 rounded-full bg-accent/90" />
            <div className="absolute inset-[8%] rounded-full bg-pink" />
            <div className="absolute inset-[8%] rounded-full border-[10px] border-dashed border-cream/70" />
            <div className="absolute inset-0 flex items-center justify-center text-[9rem] sm:text-[11rem]">🥓</div>
            <div className="absolute -bottom-2 -left-2 rounded-xl bg-white p-4 text-foreground shadow-xl sm:left-0">
              <p className="text-xs font-semibold text-muted-foreground">Indeks bezpieczeństwa</p>
              <p className="flex items-center gap-1.5 text-2xl font-extrabold text-emerald-700">
                <ShieldCheck className="size-6" /> 99/100
              </p>
            </div>
            <div className="absolute top-4 -right-2 rounded-xl bg-gold px-4 py-2 font-extrabold text-primary shadow-xl">Dostawa 0 zł</div>
          </div>
        </div>
      </section>

      {/* SZYBKIE KAFLE */}
      <section className="relative z-10 mx-auto -mt-10 max-w-7xl px-4 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tiles.map((t) => (
            <Link key={t.title} href={t.href} className="group">
              <Card className="h-full gap-3 border-0 shadow-lg transition-all group-hover:-translate-y-1 group-hover:shadow-xl">
                <CardHeader>
                  <div className="mb-2 flex size-12 items-center justify-center rounded-lg bg-secondary text-accent">
                    <t.icon className="size-6" />
                  </div>
                  <CardTitle className="flex items-center justify-between text-lg">
                    {t.title} <ArrowRight className="size-4 opacity-0 transition-opacity group-hover:opacity-100" />
                  </CardTitle>
                  <CardDescription>{t.text}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* BESTSELLERY */}
      <section className="mx-auto max-w-7xl px-4 pt-24 sm:px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow="Najchętniej pobierane" title="Bestsellery Wirtualnej Wędzarni" lead="Wyroby, które klienci pobierają najczęściej. Każdy z certyfikatem autentyczności." />
          <Button asChild variant="outline">
            <Link href="/sklep">
              Cały asortyment <ArrowRight />
            </Link>
          </Button>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* JAK TO DZIAŁA */}
      <section id="jak-to-dziala" className="scroll-mt-28 mx-auto max-w-7xl px-4 pt-24 sm:px-6">
        <SectionHeading eyebrow="Produkt cyfrowy" title="Jak działa dostawa wirtualnej wędliny?" lead="Bez lodówki, bez kuriera i bez okruszków. Cztery kroki i gotowe." />
        <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="relative rounded-xl border bg-cream/60 p-6">
              <span className="absolute top-4 right-5 text-5xl font-extrabold text-primary/10">{i + 1}</span>
              <s.icon className="size-8 text-accent" />
              <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* KIEŁBASOMETR */}
      <section id="kielbasometr" className="scroll-mt-28 mt-24 bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2">
          <div className="space-y-6">
            <SectionHeading light eyebrow="Darmowe narzędzie" title="Kiełbasometr: skaner bezpieczeństwa wędlin" lead="Wpisz nazwę lub kod wyrobu, a nasz skaner sprawdzi pięć kluczowych parametrów autentyczności. Za darmo, dla każdego." />
            <ul className="space-y-2 text-white/80">
              {["Weryfikacja certyfikatu pochodzenia", "Wykrywanie sztucznych pikseli", "Raport w mniej niż sekundę"].map((x) => (
                <li key={x} className="flex items-center gap-2">
                  <Zap className="size-4 text-gold" /> {x}
                </li>
              ))}
            </ul>
          </div>
          <Kielbasometr />
        </div>
      </section>

      {/* KALENDARZ */}
      <section id="kalendarz" className="scroll-mt-28 mx-auto max-w-7xl px-4 pt-24 sm:px-6">
        <SectionHeading eyebrow="Aktualności" title="Kalendarz wędzenia" lead="Najważniejsze daty w życiu każdej wirtualnej kiełbasy." />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {calendar.map((c) => (
            <div key={c.title} className="flex gap-5 rounded-xl border p-5 transition-colors hover:border-accent/40">
              <div className="flex w-20 shrink-0 flex-col items-center justify-center rounded-lg bg-accent px-2 py-3 text-center text-white">
                <span className="text-2xl leading-none font-extrabold">{c.date.split(" ")[0]}</span>
                <span className="text-xs uppercase">{c.date.split(" ")[1].slice(0, 3)}</span>
              </div>
              <div>
                <h3 className="font-bold">{c.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PORADNIK */}
      <section id="poradnik" className="scroll-mt-28 mx-auto max-w-7xl px-4 pt-24 sm:px-6">
        <SectionHeading eyebrow="Edukacja" title="Jak rozpoznać podróbkę wędliny?" lead="Cztery proste zasady, dzięki którym nie dasz się nabrać na fałszywą kiełbasę." />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {guide.map((g) => (
            <Card key={g.title} className="gap-3">
              <CardHeader>
                <div className="flex size-12 items-center justify-center rounded-full bg-pink/40 text-primary">
                  <g.icon className="size-6" />
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <h3 className="font-bold">{g.title}</h3>
                <p className="text-sm text-muted-foreground">{g.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* PARTNERZY */}
      <section className="mx-auto max-w-7xl px-4 pt-24 sm:px-6">
        <p className="text-center text-sm font-bold tracking-wider text-muted-foreground uppercase">Współpracujemy z (fikcyjnymi) partnerami</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {partners.map((p) => (
            <span key={p} className="text-lg font-extrabold text-primary/40 transition-colors hover:text-primary">
              {p}
            </span>
          ))}
        </div>
      </section>

      {/* FAQ + ZGŁOŚ */}
      <section id="faq" className="scroll-mt-28 mx-auto grid max-w-7xl gap-12 px-4 pt-24 sm:px-6 lg:grid-cols-[1fr_380px]">
        <div>
          <SectionHeading eyebrow="FAQ" title="Najczęściej zadawane pytania" />
          <Accordion type="single" collapsible className="mt-8">
            {faq.map((f, i) => (
              <AccordionItem key={f.q} value={`q${i}`}>
                <AccordionTrigger>{f.q}</AccordionTrigger>
                <AccordionContent>{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="h-fit rounded-2xl bg-accent p-8 text-accent-foreground">
          <Megaphone className="size-10" />
          <h3 className="mt-4 text-2xl font-extrabold">Widziałeś podejrzaną wędlinę?</h3>
          <p className="mt-2 text-white/85">Zgłoś nam podróbkę. Nasi inspektorzy plasterków sprawdzą ją w ciągu 24 godzin.</p>
          <Button asChild size="lg" className="mt-6 w-full bg-white text-accent hover:bg-cream">
            <Link href="/zglos">Zgłoś podróbkę</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
