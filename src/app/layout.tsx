import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/cart-provider";
import { CartSheet } from "@/components/cart-sheet";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const inter = Inter({ subsets: ["latin", "latin-ext"], variable: "--font-sans-pl" });

export const metadata: Metadata = {
  title: { default: "Bezpieczne Wyroby – sklep z wirtualnymi wędlinami", template: "%s · Bezpieczne Wyroby" },
  description: "Cyfrowe wędliny z certyfikatem bezpieczeństwa. Zero kalorii, natychmiastowa dostawa.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl">
      <body className={`${inter.variable} font-sans`}>
        <CartProvider>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
          <CartSheet />
        </CartProvider>
      </body>
    </html>
  );
}
