// types/game.ts
export type Game = {
    id: string;
    name: string;
    icon: string;
    cover: string;
    services: string[];
    regions: string[];
    modes: string[];
    points: number[];
    ranks: {
        tier: string;
        divisions: string[];
    }[];
};