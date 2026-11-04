import Link from "next/link";
import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  // Tarcza z plasterkiem kiełbasy – oryginalny znak marki
  return (
    <svg viewBox="0 0 40 44" className={cn("size-10", className)} aria-hidden>
      <path d="M20 2 37 8v13c0 10.5-7.2 18.7-17 21C10.2 39.7 3 31.5 3 21V8L20 2Z" fill="#12263F" />
      <path d="M20 5.5 34 10.4V21c0 8.7-5.8 15.6-14 17.7C11.8 36.6 6 29.7 6 21V10.4L20 5.5Z" fill="#D7263D" />
      <circle cx="20" cy="21" r="9.5" fill="#F2A7A0" stroke="#FFF8EE" strokeWidth="2" />
      <circle cx="16.5" cy="18" r="1.6" fill="#FFF8EE" />
      <circle cx="23" cy="19.5" r="1.3" fill="#FFF8EE" />
      <circle cx="18.5" cy="24.5" r="1.4" fill="#FFF8EE" />
      <circle cx="24" cy="25" r="1" fill="#FFF8EE" />
      <path d="m14 32 4 2.5 8-6" stroke="#E9B44C" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="Bezpieczne Wyroby – strona główna">
      <LogoMark />
      <span className={cn("flex flex-col leading-none", light ? "text-white" : "text-primary")}>
        <span className="text-lg font-extrabold tracking-tight">Bezpieczne</span>
        <span className="text-lg font-extrabold tracking-tight text-accent">Wyroby</span>
      </span>
    </Link>
  );
}
