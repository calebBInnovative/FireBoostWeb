// app/layout.tsx
import "@/app/globals.css";
import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import Header from "@/components/Header";

const rubik = Rubik({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Fireboost",
  description: "Boost your rank in the most competitive games.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${rubik.className} bg-background text-textBase`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
