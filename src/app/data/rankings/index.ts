import { cdp } from './cdp';
import { globalanceFootprint } from './globalanceFootprint';
import { globalKnights } from './globalKnights';
import { hwwi } from './hwwi';
import { ioew } from './ioew';
import { kirchhoff } from './kirchhoff';
import { Ranking } from '../../interfaces/ranking';

export const AllRankings: Ranking[] = [
  cdp,
  globalanceFootprint,
  globalKnights,
  hwwi,
  ioew,
  kirchhoff
];
