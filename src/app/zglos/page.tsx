import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ReportForm } from "./report-form";

export const metadata: Metadata = { title: "Zgłoś podróbkę" };

export default function ZglosPage() {
  return (
    <>
      <PageHero title="Zgłoś podróbkę wędliny" lead="Pomóż nam chronić rynek wirtualnych wyrobów przed fałszywymi kiełbasami." crumbs={[{ label: "Zgłoś podróbkę" }]} />
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <ReportForm />
      </div>
    </>
  );
}
