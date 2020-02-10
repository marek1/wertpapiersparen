import { Etf } from '../interfaces/etf';
import { isharesMsciEuropeSriThesaurierend } from './etfs/ishares/isharesMsciEuropeSriThesaurierend';
import { isharesMsciEuropeSriAusschuettend } from './etfs/ishares/isharesMsciEuropeSriAusschuettend';
import { isharesTecdax } from './etfs/ishares/isharesTecdax';
import { isharesEurostoxx50 } from './etfs/ishares/isharesEurostoxx50';
import { isharesDax } from './etfs/ishares/isharesDax';
import { isharesMdax } from './etfs/ishares/isharesMdax';
import { isharesMsciWorldUsd } from './etfs/ishares/isharesMsciWorldUsd';
import { isharesDowJonesEurozoneSustainability } from './etfs/ishares/isharesDowJonesEurozoneSustainability';
import { isharesEuroGovtBonds } from './etfs/ishares/isharesEuroGovtBonds';
import { isharesEuroCorpBonds } from './etfs/ishares/isharesEuroCorpBonds';
import { isharesCOREMsciWorldUSDThesaurierend } from './etfs/ishares/isharesCOREMsciWorldUSDThesaurierend';
import { isharesCOREMsciWorldUSDAusschuettend } from './etfs/ishares/isharesCOREMsciWorldUSDAusschuettend';

export const standardSparplanSum = 0;

export const Etfs: Etf[] = [
  isharesDax, // 5001
  isharesDowJonesEurozoneSustainability,  // 5002
  isharesEurostoxx50, // 5003
  isharesMdax, // 5004
  isharesMsciEuropeSriThesaurierend, // 5006
  isharesMsciEuropeSriAusschuettend, // 5005
  isharesMsciWorldUsd,  // 5007
  isharesTecdax, // 5008
  isharesEuroGovtBonds, // 5009
  isharesEuroCorpBonds, // 5010
  isharesCOREMsciWorldUSDThesaurierend, // 5011
  isharesCOREMsciWorldUSDAusschuettend // 5012
];
