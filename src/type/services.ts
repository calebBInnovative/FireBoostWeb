// types/service.ts
export type BoostingService = {
    id: string;
    gameId: string;
    type: 'rankBoost' | 'winBoost' | 'leveling' | 'placementMatches';
    title: string;
    description: string;
    pricingModel: 'fixed' | 'perMatch' | 'perTier';
    formFields: string[];
};
