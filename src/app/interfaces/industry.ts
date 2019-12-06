import { ISharesIndustryNames } from '../enums/isharesIndustryNames';

export interface Industry {
  id: number;
  description: string;
  imageName?: string;
  subIndustries: Industry[]|null;
  includeIndustries?: number[];
  isharesIndustryNames?: ISharesIndustryNames[];
}
