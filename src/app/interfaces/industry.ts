export interface Industry {
  id: number;
  description: string;
  imageName?: string;
  subIndustries: Industry[]|null;
  includeIndustries?: number[];
}
