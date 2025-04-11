"use client";

import Image from "next/image";
import { useState } from "react";
import type { Game } from "@/types/game";

export default function RankSelectorClient({ game }: { game: Game }) {
  const [currentTier, setCurrentTier] = useState(game.ranks[0].tier);
  const [currentDivision, setCurrentDivision] = useState(game.ranks[0].divisions[0]);
  const [desiredTier, setDesiredTier] = useState(game.ranks[0].tier);
  const [desiredDivision, setDesiredDivision] = useState(game.ranks[0].divisions[0]);

  const getRankImagePath = (tier: string, division?: string) => {
    const formattedTier = tier.toLowerCase();
    const formattedDivision = division?.toLowerCase().replace("iv", "4").replace("iii", "3").replace("ii", "2").replace("i", "1");
    const folder = `/games/${game.id}/rank/${formattedTier}`;
    const fileName = game.useTierOnlyIcons || !formattedDivision
      ? `${formattedTier}.png`
      : `${formattedTier}${formattedDivision}.png`;
    return `${folder}/${fileName}`;
  };

  const getDivisions = (tier: string) => {
    return game.ranks.find((r) => r.tier === tier)?.divisions || [];
  };

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold text-glow">Select Your Rank</h2>

      <div className="bg-surface rounded-xl p-6 shadow flex flex-col md:flex-row gap-4">
        {/* Current Rank */}
        <div className="w-full md:w-1/2">
          <h3 className="text-lg font-semibold mb-2">Current Rank</h3>
          <div className="bg-[#00000033] rounded-xl p-4 relative">
            <div className="grid grid-cols-2 gap-4">
              <select
                className="bg-background border border-surface rounded p-2"
                value={currentTier}
                onChange={(e) => {
                  const tier = e.target.value;
                  setCurrentTier(tier);
                  setCurrentDivision(getDivisions(tier)[0]);
                }}
              >
                {game.ranks.map((rank, i) => (
                  <option key={i} value={rank.tier}>{rank.tier}</option>
                ))}
              </select>
              <select
                className="bg-background border border-surface rounded p-2"
                value={currentDivision}
                onChange={(e) => setCurrentDivision(e.target.value)}
              >
                {getDivisions(currentTier).map((div, i) => (
                  <option key={i}>{div}</option>
                ))}
              </select>
              <select className="bg-background border border-surface rounded p-2">
                {game.points.map((p, i) => (
                  <option key={i}>{p} LP</option>
                ))}
              </select>
              <select className="bg-background border border-surface rounded p-2">
                {game.modes.map((mode, i) => (
                  <option key={i}>{mode}</option>
                ))}
              </select>
            </div>
            <div className="mt-6 flex justify-center">
              <Image
                src={getRankImagePath(currentTier, currentDivision)}
                alt="Current Rank Icon"
                width={80}
                height={80}
              />
            </div>
          </div>
        </div>

        {/* Desired Rank */}
        <div className="w-full md:w-1/2">
          <h3 className="text-lg font-semibold mb-2">Desired Rank</h3>
          <div className="bg-[#00000033] rounded-xl p-4 relative">
            <div className="grid grid-cols-2 gap-4">
              <select
                className="bg-background border border-surface rounded p-2"
                value={desiredTier}
                onChange={(e) => {
                  const tier = e.target.value;
                  setDesiredTier(tier);
                  setDesiredDivision(getDivisions(tier)[0]);
                }}
              >
                {game.ranks.map((rank, i) => (
                  <option key={i} value={rank.tier}>{rank.tier}</option>
                ))}
              </select>
              <select
                className="bg-background border border-surface rounded p-2"
                value={desiredDivision}
                onChange={(e) => setDesiredDivision(e.target.value)}
              >
                {getDivisions(desiredTier).map((div, i) => (
                  <option key={i}>{div}</option>
                ))}
              </select>
              <select className="bg-background border border-surface rounded p-2">
                {game.points.map((p, i) => (
                  <option key={i}>{p} LP</option>
                ))}
              </select>
              <select className="bg-background border border-surface rounded p-2">
                {game.regions.map((region, i) => (
                  <option key={i}>{region}</option>
                ))}
              </select>
            </div>
            <div className="mt-6 flex justify-center">
              <Image
                src={getRankImagePath(desiredTier, desiredDivision)}
                alt="Desired Rank Icon"
                width={80}
                height={80}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}