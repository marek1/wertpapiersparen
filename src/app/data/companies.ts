import { Company } from '../interfaces/company';
import { Currency } from '../enums/currencies';
import { Indices } from '../enums/indices';
import { adidasShare } from './historical/adidas';
import { Country } from '../enums/country';
import { allianzShare } from './historical/allianz';
import { basfShare } from './historical/basf';
import { bayerShare } from './historical/bayer';
import { beiersdorfShare } from './historical/beiersdorf';
import { bmwShare } from './historical/bmw';
import { continentalShare } from './historical/continental';
import { covestroShare } from './historical/covestro';
import { ResponsibilityType } from '../enums/responsibility';
import { daimlerShare } from './historical/daimler';
import { deutscheBankShare } from './historical/deutscheBank';
import { deutschBoerseShare} from './historical/deutscheBoerse';
import { deutschePostShare } from './historical/deutschePost';
import { deutscheTelekomShare } from './historical/deutscheTelekom';
import { eonShare } from './historical/eon';
import { fmcShare } from './historical/fmc';
import { freseniusShare } from './historical/fresenius';
import { heidelbergCementShare } from './historical/heidelbergCement';
import { henkelShare } from './historical/henkel';
import { infineonShare } from './historical/infineon';

// tslint:disable:max-line-length
export const daxCompanies: Company[] = [
  adidasShare,
  allianzShare,
  basfShare,
  bayerShare,
  beiersdorfShare,
  bmwShare,
  continentalShare,
  covestroShare,
  daimlerShare,
  deutscheBankShare,
  deutschBoerseShare,
  deutschePostShare,
  deutscheTelekomShare,
  eonShare,
  fmcShare,
  freseniusShare,
  heidelbergCementShare,
  henkelShare,
  infineonShare
];
// tslint:enable:max-line-length
