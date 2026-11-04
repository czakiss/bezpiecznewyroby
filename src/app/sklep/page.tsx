import { Suspense } from "react";
import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ShopGrid } from "@/components/shop-grid";

export const metadata: Metadata = { title: "Sklep" };

export default function SklepPage() {
  return (
    <>
      <PageHero title="Sklep z wirtualnymi wędlinami" lead="Wszystkie wyroby są cyfrowe, certyfikowane i gotowe do pobrania od razu po zamówieniu." crumbs={[{ label: "Sklep" }]} />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <Suspense>
          <ShopGrid />
        </Suspense>
      </div>
    </>
  );
}
