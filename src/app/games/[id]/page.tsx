// src/app/games/[id]/page.tsx
import { games } from "@/data/games";
import { notFound } from "next/navigation";
import Image from "next/image";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const game = games.find((g) => g.id === id);
  if (!game) return notFound();

  function getRankImagePath(gameId: string, tier: string, division?: string) {
    const formattedTier = tier.toLowerCase();
    const formattedDivision = division?.toLowerCase().replace("iv", "4").replace("iii", "3").replace("ii", "2").replace("i", "1");
    const fullName = formattedDivision ? `${formattedTier}${formattedDivision}` : formattedTier;
    return `/games/${gameId}/rank/${formattedTier}/${fullName}.png`;
  }

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
        <aside className="col-span-1">
          <h2 className="text-2xl font-bold text-primary mb-4">Services</h2>
          <ul className="space-y-3">
            {game.services.map((service, idx) => (
              <li
                key={idx}
                className="bg-surface rounded px-4 py-2 hover:bg-primary hover:text-background cursor-pointer transition flex items-center gap-3"
              >
                <Image
                  src={`/games/${game.id}/services/${service.toLowerCase().replace(/\s+/g, "-")}.png`}
                  alt={service}
                  width={24}
                  height={24}
                />
                {service}
              </li>
            ))}
          </ul>
        </aside>

        {/* Main panel: rank selectors */}
        <section className="col-span-1 md:col-span-3 space-y-6">
          <h2 className="text-2xl font-bold text-glow">Select Your Rank</h2>

          <div className="bg-surface rounded-xl p-6 shadow flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-1/2">
              <h3 className="text-lg font-semibold mb-2">Current Rank</h3>
              <div className="bg-[#00000033] rounded-xl p-4 relative">
                <div className="grid grid-cols-2 gap-4">
                  <select className="bg-background border border-surface rounded p-2">
                    {game.ranks.map((rank, i) => (
                      <option key={i} value={rank.tier}>{rank.tier}</option>
                    ))}
                  </select>
                  <select className="bg-background border border-surface rounded p-2">
                    {game.ranks.find(r => r.tier === game.ranks[0].tier)?.divisions.map((div, i) => (
                      <option key={i}>{div}</option>
                    ))}
                  </select>
                  <select className="bg-background border border-surface rounded p-2">
                    {game.points.map((p, i) => (
                      <option key={i} value={p}>{p} LP</option>
                    ))}
                  </select>
                  <select className="bg-background border border-surface rounded p-2">
                    {game.modes.map((mode, i) => (
                      <option key={i} value={mode}>{mode}</option>
                    ))}
                  </select>
                </div>
                <div className="mt-6 flex justify-center">
                  <Image
                    src={getRankImagePath(game.id, game.ranks[0].tier, game.ranks[0].divisions[0])}
                    alt="Current Rank Icon"
                    width={80}
                    height={80}
                    className="drop-shadow"
                  />
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <h3 className="text-lg font-semibold mb-2">Desired Rank</h3>
              <div className="bg-[#00000033] rounded-xl p-4 relative">
                <div className="grid grid-cols-2 gap-4">
                  <select className="bg-background border border-surface rounded p-2">
                    {game.ranks.map((rank, i) => (
                      <option key={i} value={rank.tier}>{rank.tier}</option>
                    ))}
                  </select>
                  <select className="bg-background border border-surface rounded p-2">
                    {game.ranks.find(r => r.tier === game.ranks[0].tier)?.divisions.map((div, i) => (
                      <option key={i}>{div}</option>
                    ))}
                  </select>
                  <select className="bg-background border border-surface rounded p-2">
                    {game.points.map((p, i) => (
                      <option key={i} value={p}>{p} LP</option>
                    ))}
                  </select>
                  <select className="bg-background border border-surface rounded p-2">
                    {game.regions.map((region, i) => (
                      <option key={i} value={region}>{region}</option>
                    ))}
                  </select>
                </div>
                <div className="mt-6 flex justify-center">
                  <Image
                    src={getRankImagePath(game.id, game.ranks[0].tier, game.ranks[0].divisions[0])}
                    alt="Desired Rank Icon"
                    width={80}
                    height={80}
                    className="drop-shadow"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
