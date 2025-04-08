// app/page.tsx
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import GameNavbar from "@/components/GameNavbar";

export default function HomePage() {
  return (
    <main className="bg-background text-textBase font-sans">
      <Hero />
      <GameNavbar />
    </main>
  );
}