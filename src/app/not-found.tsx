import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center gap-4 px-4 py-32 text-center">
      <span className="text-7xl">🌭</span>
      <h1 className="text-4xl font-extrabold">404: kiełbasa nie znaleziona</h1>
      <p className="text-muted-foreground">Ten plasterek gdzieś się zawieruszył.</p>
      <Button asChild variant="accent"><Link href="/">Wróć na stronę główną</Link></Button>
    </div>
  );
}
