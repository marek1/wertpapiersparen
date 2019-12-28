import { IndustryGroup } from '../enums/industryGroup';
import { IsharesIndustryNames } from '../enums/isharesIndustryNames';

export interface Industry {
  id: number;
  description: string;
  imageName?: string;
  industryGroup?: IndustryGroup;
  subIndustries: Industry[]|null;
  includeIndustries?: number[];
  isharesIndustryNames?: IsharesIndustryNames[];
}
