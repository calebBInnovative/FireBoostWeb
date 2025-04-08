// app/page.tsx
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