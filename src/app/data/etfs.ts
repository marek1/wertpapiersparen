import { Etf } from '../interfaces/etf';
import { isharesMsciEuropeSriThesaurierend } from './etfs/ishares/isharesMsciEuropeSriThesaurierend';
import { isharesMsciEuropeSriAusschuettend } from './etfs/ishares/isharesMsciEuropeSriAusschuettend';
import { isharesTecdax } from './etfs/ishares/isharesTecdax';
import { isharesEurostoxx50 } from './etfs/ishares/isharesEurostoxx50';
import { isharesDax } from './etfs/ishares/isharesDax';
import { isharesMdax } from './etfs/ishares/isharesMdax';
import { isharesMsciWorldUsd } from './etfs/ishares/isharesMsciWorldUsd';

export const Etfs: Etf[] = [
  isharesMsciEuropeSriThesaurierend,
  isharesMsciEuropeSriAusschuettend,
  isharesTecdax,
  isharesEurostoxx50,
  isharesDax,
  isharesMdax,
  isharesMsciWorldUsd
];
