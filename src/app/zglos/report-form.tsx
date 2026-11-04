"use client";

import * as React from "react";
import { CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const kinds = ["Rozmazane piksele", "Brak certyfikatu", "Podejrzanie niska cena", "Prawdziwe mięso (!)", "Inne"];

export function ReportForm() {
  const [kind, setKind] = React.useState(kinds[0]);
  const [sent, setSent] = React.useState(false);

  if (sent)
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border bg-emerald-50 p-10 text-center">
        <CheckCircle2 className="size-14 text-emerald-600" />
        <h2 className="text-2xl font-extrabold">Zgłoszenie przyjęte</h2>
        <p className="text-muted-foreground">Nasi inspektorzy plasterków już ostrzą noże (wirtualne). Dziękujemy za czujność!</p>
        <Button variant="outline" onClick={() => setSent(false)}>Zgłoś kolejną</Button>
      </div>
    );

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="space-y-6 rounded-2xl border p-6 sm:p-8"
    >
      <div className="space-y-3">
        <Label>Rodzaj nieprawidłowości</Label>
        <div className="flex flex-wrap gap-2">
          {kinds.map((k) => (
            <button
              type="button"
              key={k}
              onClick={() => setKind(k)}
              className={cn("rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors", kind === k ? "border-accent bg-accent text-white" : "hover:border-primary/40")}
            >
              {k}
            </button>
          ))}
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="gdzie">Gdzie widziałeś wyrób?</Label>
          <Input id="gdzie" required placeholder="np. link, sklep, grupa na komunikatorze" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="nazwa">Nazwa wyrobu</Label>
          <Input id="nazwa" placeholder="np. Szynka Wiejska 4K" />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="opis">Opis</Label>
        <Textarea id="opis" required placeholder="Opisz, co wzbudziło Twoje podejrzenia…" />
      </div>
      <p className="text-xs text-muted-foreground">Formularz jest demonstracyjny: zgłoszenie nie jest nigdzie wysyłane.</p>
      <Button type="submit" variant="accent" size="lg"><Send /> Wyślij zgłoszenie</Button>
    </form>
  );
}
