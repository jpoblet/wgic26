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
      <body className="bg-monstera text-white font-regular">
        <Navigation />
        <main className="min-h-screen mt-32">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
