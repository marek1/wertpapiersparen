import { ResponsibilityType } from '../enums/responsibility';

export interface ShareRank {
  id: number;
  points: number;
}

export interface Ranking {
  name: string;
  year: number;
  responsibilityType: ResponsibilityType;
  issuer: string;
  link: string;
  maxResult: number;
  unit: string|null;
  results: ShareRank[];
}
