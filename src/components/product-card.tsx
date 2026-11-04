import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { AddToCart } from "@/components/add-to-cart";
import { ProductImage } from "@/components/product-image";
import { formatPrice } from "@/lib/utils";
import type { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="group gap-0 overflow-hidden py-0 transition-shadow hover:shadow-md">
      <Link href={`/produkt/${product.slug}`} className="relative block">
        <ProductImage product={product} className="transition-transform duration-300 group-hover:scale-[1.03]" />
        <div className="absolute top-3 left-3 flex gap-1.5">
          {product.bestseller && <Badge variant="accent">Bestseller</Badge>}
          {product.isNew && <Badge variant="gold">Nowość</Badge>}
        </div>
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
          <ShieldCheck className="size-4" /> Indeks bezpieczeństwa {product.safety}/100
        </div>
        <Link href={`/produkt/${product.slug}`} className="text-lg leading-snug font-bold hover:text-accent">
          {product.name}
        </Link>
        <p className="text-muted-foreground line-clamp-2 text-sm">{product.short}</p>
        <div className="mt-auto flex items-center justify-between gap-3 pt-2">
          <span className="text-xl font-extrabold">{formatPrice(product.price)}</span>
          <AddToCart slug={product.slug} size="sm" />
        </div>
      </div>
    </Card>
  );
}
