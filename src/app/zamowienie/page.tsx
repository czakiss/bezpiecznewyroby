import { Suspense } from "react";
import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { OrderView } from "./order-view";

export const metadata: Metadata = { title: "Zamówienie" };

export default function ZamowieniePage() {
  return (
    <>
      <PageHero title="Zamówienie zrealizowane" crumbs={[{ href: "/sklep", label: "Sklep" }, { label: "Zamówienie" }]} />
      <div className="px-4 py-12 sm:px-6">
        <Suspense>
          <OrderView />
        </Suspense>
      </div>
    </>
  );
}
