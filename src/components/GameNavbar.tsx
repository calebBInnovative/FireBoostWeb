// components/GameNavbar.tsx
"use client"
import { games } from "@/data/games";
import { useRouter } from "next/navigation";

export default function GameNavbar() {
  const router = useRouter();

  return (
    <div className="relative px-4 py-1 border-t border-surface z-0 overflow-visible backdrop-blur-sm" style={{ backgroundColor: "#04274305" }}>
      <div className="relative flex justify-center items-end gap-16 overflow-visible z-10">
        {games.map((game) => (
          <div
            key={game.id}
            onClick={() => router.push(`/games/${game.id}`)}
            className="relative flex-shrink-0 cursor-pointer group transition-transform z-20"
            style={{ width: "80px" }}
          >
            <div className="relative w-full h-auto transition-transform duration-200 group-hover:scale-[1.8] group-hover:-translate-y-4 z-30">
              <img
                src={game.icon}
                alt={game.name}
                className="w-full h-auto object-contain drop-shadow-xl"
              />
            </div>
            <div className="absolute left-1/2 top-full transform -translate-x-1/2 mt-6 z-40">
              <span className="bg-black/80 text-white text-lg px-6 py-3 rounded shadow-xl whitespace-nowrap">
                {game.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
