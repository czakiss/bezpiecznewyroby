import { cn } from "@/lib/utils";

export function SectionHeading({ eyebrow, title, lead, className, light }: { eyebrow?: string; title: string; lead?: string; className?: string; light?: boolean }) {
  return (
    <div className={cn("max-w-2xl space-y-3", className)}>
      {eyebrow && <p className={cn("text-sm font-bold tracking-wider uppercase", light ? "text-gold" : "text-accent")}>{eyebrow}</p>}
      <h2 className="text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">{title}</h2>
      {lead && <p className={cn("text-lg", light ? "text-white/80" : "text-muted-foreground")}>{lead}</p>}
    </div>
  );
}
