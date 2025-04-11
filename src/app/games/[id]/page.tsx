// src/app/games/[id]/page.tsx
import { games } from "@/data/games";
import { notFound } from "next/navigation";
import Image from "next/image";
import dynamic from "next/dynamic";

import RankSelectorWrapper from "@/components/RankSelectorWrapper";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const game = games.find((g) => g.id === id);
  if (!game) return notFound();

  return (
    <div className="relative min-h-screen text-textBase overflow-hidden">
      {/* Imagen de fondo */}
      <Image
        src={game.cover}
        alt={`${game.name} Cover`}
        fill
        priority
        className="object-cover absolute z-[-10]"
      />
      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-8 px-6 py-12 md:px-12 lg:px-24">
        {/* Sidebar: services */}
        <aside className="col-span-1 flex flex-col items-center gap-6">
          {game.services.map((service, idx) => (
            <div
              key={idx}
              className="relative flex flex-col items-center cursor-pointer group transition-transform"
              style={{ width: "80px" }}
            >
              <div className="relative w-full h-auto transition-transform duration-300 group-hover:scale-125 group-hover:-translate-y-2 z-30">
                <Image
                  src={`/games/${game.id}/services/${service.toLowerCase().replace(/\s+/g, "")}.png`}
                  alt={service}
                  width={100}
                  height={100}
                  className="object-contain drop-shadow-xl"
                />
              </div>
              <h2 className="text-center">{service}</h2>
            </div>
          ))}
        </aside>

        {/* Main panel: rank selector client */}
        <section className="col-span-1 md:col-span-3">
          <RankSelectorWrapper game={game} />
        </section>
      </div>
    </div>
  );
}