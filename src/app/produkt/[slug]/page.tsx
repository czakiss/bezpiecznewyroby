import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CloudDownload, FileBadge, Flame, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { AddToCart } from "@/components/add-to-cart";
import { PageHero } from "@/components/page-hero";
import { ProductCard } from "@/components/product-card";
import { ProductImage } from "@/components/product-image";
import { categories, getProduct, products } from "@/lib/products";
import { formatPrice } from "@/lib/utils";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const p = getProduct((await params).slug);
  return { title: p?.name ?? "Wyrób", description: p?.short };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const product = getProduct((await params).slug);
  if (!product) notFound();
  const cat = categories.find((c) => c.id === product.category)!;
  const related = products.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 3);

  return (
    <>
      <PageHero title={product.name} crumbs={[{ href: "/sklep", label: "Sklep" }, { href: `/sklep?kategoria=${cat.id}`, label: cat.label }, { label: product.name }]} />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <ProductImage product={product} className="rounded-2xl border" />
          <div className="space-y-6">
            <div className="flex flex-wrap gap-2">
              {product.tags.map((t) => (
                <Badge key={t} variant="secondary">{t}</Badge>
              ))}
            </div>
            <p className="text-lg text-muted-foreground">{product.description}</p>
            <div className="flex items-end gap-4">
              <span className="text-4xl font-extrabold">{formatPrice(product.price)}</span>
              <span className="pb-1 text-sm text-muted-foreground">brutto, dostawa cyfrowa 0 zł</span>
            </div>
            <AddToCart slug={product.slug} size="lg" />
            <Separator />
            <dl className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: ShieldCheck, k: "Indeks bezpieczeństwa", v: `${product.safety}/100` },
                { icon: Flame, k: "Kaloryczność", v: "0 kcal / 100 px" },
                { icon: CloudDownload, k: "Format", v: product.format },
                { icon: FileBadge, k: "Certyfikat", v: "Tak, z podpisem Mistrza Wędzarni" },
              ].map((r) => (
                <div key={r.k} className="flex gap-3 rounded-xl bg-secondary p-4">
                  <r.icon className="size-5 shrink-0 text-accent" />
                  <div>
                    <dt className="text-xs font-semibold text-muted-foreground">{r.k}</dt>
                    <dd className="font-bold">{r.v}</dd>
                  </div>
                </div>
              ))}
            </dl>
            <p className="rounded-lg border border-dashed p-4 text-sm text-muted-foreground">
              To produkt cyfrowy. Nie nadaje się do spożycia, ale świetnie nadaje się do pokazania znajomym.
            </p>
          </div>
        </div>
        {related.length > 0 && (
          <section className="pt-20">
            <h2 className="text-2xl font-extrabold">Z tej samej półki</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
