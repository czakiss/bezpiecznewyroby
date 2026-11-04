"use client";

import * as React from "react";
import { Loader2, ScanSearch, ShieldCheck, ShieldX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Result = { score: number; checks: { label: string; ok: boolean }[] };

function scan(text: string): Result {
  let h = 0;
  for (const ch of text.toLowerCase()) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  const ours = /bezpieczne ?wyroby|bw-/i.test(text);
  const score = ours ? 100 : 20 + (h % 70);
  const labels = [
    "Certyfikat pochodzenia z Wirtualnej Wędzarni",
    "Brak sztucznych pikseli i konserwantów JPEG",
    "Podpis cyfrowy Mistrza Wędzarni",
    "Zgodność z normą PN-404 „Wędlina nieistniejąca”",
    "Brak śladów kopiuj-wklej",
  ];
  return { score, checks: labels.map((label, i) => ({ label, ok: ours || ((h >> i) & 1) === 1 })) };
}

export function Kielbasometr() {
  const [value, setValue] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [result, setResult] = React.useState<Result | null>(null);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!value.trim()) return;
    setLoading(true);
    setResult(null);
    setTimeout(() => {
      setResult(scan(value));
      setLoading(false);
    }, 900);
  }

  const safe = result && result.score >= 80;

  return (
    <div className="rounded-2xl bg-white p-6 text-foreground shadow-xl sm:p-8">
      <form onSubmit={onSubmit} className="space-y-3">
        <Label htmlFor="kod">Nazwa lub kod wyrobu</Label>
        <div className="flex flex-col gap-2 sm:flex-row">
          <Input id="kod" placeholder="np. BW-KRAKOWSKA-2026 albo „kiełbasa od szwagra”" value={value} onChange={(e) => setValue(e.target.value)} />
          <Button type="submit" variant="accent" disabled={loading} className="sm:w-40">
            {loading ? <Loader2 className="animate-spin" /> : <ScanSearch />} Sprawdź
          </Button>
        </div>
        <p className="text-muted-foreground text-xs">Skaner działa w przeglądarce i niczego nigdzie nie wysyła. Ani kiełbasy.</p>
      </form>

      {result && (
        <div className="mt-6 space-y-4 border-t pt-6" aria-live="polite">
          <div className="flex items-center gap-4">
            <div className={`flex size-16 items-center justify-center rounded-full ${safe ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-accent"}`}>
              {safe ? <ShieldCheck className="size-8" /> : <ShieldX className="size-8" />}
            </div>
            <div>
              <p className="text-3xl font-extrabold">{result.score}/100</p>
              <p className="font-semibold">{safe ? "Wyrób bezpieczny. Smacznego (wirtualnie)!" : "Uwaga! Możliwa podróbka wędliny."}</p>
            </div>
          </div>
          <ul className="space-y-2 text-sm">
            {result.checks.map((c) => (
              <li key={c.label} className="flex items-center gap-2">
                <span className={c.ok ? "text-emerald-700" : "text-accent"}>{c.ok ? "✔" : "✖"}</span>
                {c.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
