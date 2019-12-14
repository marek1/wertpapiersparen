import { ISharesIndustryNames } from '../enums/isharesIndustryNames';
import { IndustryGroup } from '../enums/industryGroup';

export interface Industry {
  id: number;
  description: string;
  imageName?: string;
  industryGroup?: IndustryGroup;
  subIndustries: Industry[]|null;
  includeIndustries?: number[];
  isharesIndustryNames?: ISharesIndustryNames[];
}
