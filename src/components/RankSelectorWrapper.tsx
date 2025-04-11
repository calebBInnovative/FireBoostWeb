// src/components/RankSelectorWrapper.tsx
"use client";

import dynamic from "next/dynamic";
import type { Game } from "@/type/game";

const RankSelectorClient = dynamic(() => import("./RankSelectorClient"));

export default function RankSelectorWrapper({ game }: { game: Game }) {
    return <RankSelectorClient game={game} />;
}