import { cdp } from './rankings/cdp';
import { globalanceFootprint } from './rankings/globalanceFootprint';
import { globalKnights } from './rankings/globalKnights';
import { hwwi } from './rankings/hwwi';
import { ioew } from './rankings/ioew';
import { kirchhoff } from './rankings/kirchhoff';
import { Ranking } from '../interfaces/ranking';

export const Rankings: Ranking[] = [
  cdp,
  globalanceFootprint,
  globalKnights,
  hwwi,
  ioew,
  kirchhoff
];
