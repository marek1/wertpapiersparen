import { ResponsibilityType } from '../enums/responsibility';

interface ShareRank {
  id: number;
  points: number;
}

export interface Ranking {
  name: string;
  year: number;
  responsibilityType: ResponsibilityType;
  issuer: string;
  link: string;
  results: ShareRank[];
}
