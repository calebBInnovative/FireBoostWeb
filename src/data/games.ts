// data/games.ts
export const games = [
  {
    id: "lol",
    name: "League of Legends",
    icon: "/games/lol/navbarIcon.png",
    cover: "/games/lol/cover.jpg",
    services: ["Games", "Division Boost", "Leveling", "Net Wins", "Normal Wins", "Placements"],
    regions: ["NA", "EUW"],
    modes: ["Solo/Duo", "Flex"],
    ranks: [
      { tier: "Iron", divisions: ["IV", "III", "II", "I"] },
      { tier: "Bronze", divisions: ["IV", "III", "II", "I"] },
      { tier: "Silver", divisions: ["IV", "III", "II", "I"] },
      { tier: "Gold", divisions: ["IV", "III", "II", "I"] },
      { tier: "Platinum", divisions: ["IV", "III", "II", "I"] },
      { tier: "Emerald", divisions: ["IV", "III", "II", "I"] },
      { tier: "Diamond", divisions: ["IV", "III", "II", "I"] },
      { tier: "Master", divisions: [] },
    ],
    points: Array.from({ length: 5 }, (_, i) => i * 20),
    useTierOnlyIcons: true, // 👈 Esto indica que solo se usa la imagen del tier, sin división
  },
  {
    id: "valorant",
    name: "Valorant", 
    icon: "/games/valorant/navbarIcon.png",
    cover: "/games/valorant/cover.avif",
    services: ["Duo Games", "Net Wins", "Placements", "Rank Boost", "Unrated Wins"],
    regions: ["NA", "EUW"],
    modes: ["Solo/Duo"],
    ranks: [
      { tier: "Iron", divisions: ["I", "II", "III"] },
      { tier: "Bronze", divisions: ["I", "II", "III"] },
      { tier: "Silver", divisions: ["I", "II", "III"] },
      { tier: "Gold", divisions: ["I", "II", "III"] },
      { tier: "Platinum", divisions: ["I", "II", "III"] },
      { tier: "Diamond", divisions: ["I", "II", "III"] },
      { tier: "Ascendant", divisions: ["I", "II", "III"] },
      { tier: "Immortal", divisions: ["I", "II", "III"] },
      { tier: "Radiant", divisions: [] },
    ],
    points: Array.from({ length: 5 }, (_, i) => i * 20),
    useTierOnlyIcons: false, // 👈 Valorant sí tiene imágenes por división
  },
];
