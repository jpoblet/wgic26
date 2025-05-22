import "./globals.css";
import { ReactNode } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "WGIC26 Barcelona",
  description: "World Green Infrastructure Congress 2026 - Barcelona",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-monstera text-white font-light">
        <Navigation />
        <main className="flex flex-col gap-10 mt-28 lg:mt-40 mb-24 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
