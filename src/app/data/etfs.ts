import { Etf } from '../interfaces/etf';
import { isharesMsciEuropeSriThesaurierend } from './etfs/ishares/isharesMsciEuropeSriThesaurierend';
import { isharesMsciEuropeSriAusschuettend } from './etfs/ishares/isharesMsciEuropeSriAusschuettend';
import { isharesTecdax } from './etfs/ishares/isharesTecdax';

export const Etfs: Etf[] = [
  isharesMsciEuropeSriThesaurierend,
  isharesMsciEuropeSriAusschuettend,
  isharesTecdax
];
