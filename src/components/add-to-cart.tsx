"use client";

import { ShoppingBasket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/components/cart-provider";

export function AddToCart({ slug, size = "default", full = false }: { slug: string; size?: "default" | "sm" | "lg"; full?: boolean }) {
  const { add } = useCart();
  return (
    <Button variant="accent" size={size} className={full ? "w-full" : undefined} onClick={() => add(slug)}>
      <ShoppingBasket /> Do koszyka
    </Button>
  );
}
