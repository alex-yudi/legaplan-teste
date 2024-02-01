import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";

import Header from "./components/Header";

// TODO: Corrigir a fonte para inter-tight
const interTight = Inter_Tight({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Legaplan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={interTight.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
