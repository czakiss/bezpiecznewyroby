"use client";

import * as React from "react";
import { productImage, type Product } from "@/lib/products";
import { cn } from "@/lib/utils";

/**
 * Pokazuje grafikę produktu z /public/images/produkty, a gdy jej jeszcze nie ma,
 * rysuje zastępczy "plaster" z emoji w kolorach marki.
 */
export function ProductImage({ product, variant = "main", className }: { product: Product; variant?: "main" | "lifestyle"; className?: string }) {
  const [failed, setFailed] = React.useState(false);
  const ref = React.useRef<HTMLImageElement>(null);
  // Błąd ładowania mógł wystąpić przed hydratacją – sprawdzamy stan obrazka po montażu.
  React.useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);
  return (
    <div className={cn("relative aspect-square overflow-hidden bg-cream", className)}>
      {!failed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          ref={ref}
          src={productImage(product.slug, variant)}
          alt={product.name}
          className="size-full object-cover text-transparent"
          onError={() => setFailed(true)}
          loading="lazy"
        />
      ) : (
        <div className="flex size-full items-center justify-center">
          <div className="absolute inset-[12%] rounded-full bg-pink/50" />
          <div className="absolute inset-[24%] rounded-full border-4 border-dashed border-white/80" />
          <span className="relative text-[clamp(3rem,10vw,6rem)] drop-shadow-sm">{product.emoji}</span>
        </div>
      )}
    </div>
  );
}
