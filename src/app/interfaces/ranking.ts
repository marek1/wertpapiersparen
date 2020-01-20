import { ResponsibilityType } from '../enums/responsibility';

export interface ShareRank {
  id: number;
  name: string;
  isin: string;
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
