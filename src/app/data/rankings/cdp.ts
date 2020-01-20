import { Ranking } from '../../interfaces/ranking';
import { ResponsibilityType } from '../../enums/responsibility';
import { basfCompany } from '../companies/dax/basf';
import { bayerCompany } from '../companies/dax/bayer';
import { bouyguesCompany } from '../companies/cac40/bouygues';
import { carrefourCompany } from '../companies/cac40/carrefour';
import { danoneCompany } from '../companies/eurostoxx50/danone';
import { deutscheTelekomCompany } from '../companies/dax/deutscheTelekom';
import { electroluxCompany } from '../companies/other/electrolux';
import { engieCompany } from '../companies/eurostoxx50/engie';
import { peugeotCompany } from '../companies/cac40/peugeot';
import { ingCompany } from '../companies/eurostoxx50/ing';
import { intesaCompany } from '../companies/eurostoxx50/intesa';
import { keringCompany } from '../companies/eurostoxx50/kering';
import { philipsCompany } from '../companies/eurostoxx50/philips';
import { lorealCompany } from '../companies/eurostoxx50/loreal';
import { michelinCompany } from '../companies/cac40/michelin';
import { schneiderCompany } from '../companies/eurostoxx50/schneider';
import { siemensCompany } from '../companies/dax/siemens';
import { telefonicaCompany } from '../companies/eurostoxx50/telefonica';
import { thyssenKruppCompany } from '../companies/mdax/thyssenKrupp';
import { unileverCompany } from '../companies/eurostoxx50/unilever';
import { accentureCompany } from '../companies/other/accenture';

export const cdp: Ranking = {
  name: 'Our annual A List names the world\'s businesses leading on environmental performance.',
  year: 2018,
  responsibilityType: ResponsibilityType.Umweltbewusstsein,
  issuer: 'CDP',
  link: 'https://www.cdp.net/en/companies/companies-scores',
  maxResult: 1,
  unit: '',
  results: [
    {
      id: accentureCompany.id,
      name: accentureCompany.name,
      isin: accentureCompany.isin,
      points: 1
    },
    {
      id: basfCompany.id,
      name: basfCompany.name,
      isin: basfCompany.isin,
      points: 1
    },
    {
      id: bayerCompany.id,
      name: bayerCompany.name,
      isin: bayerCompany.isin,
      points: 1
    },
    {
      id: bouyguesCompany.id,
      name: bouyguesCompany.name,
      isin: bouyguesCompany.isin,
      points: 1
    },
    {
      id: carrefourCompany.id,
      name: carrefourCompany.name,
      isin: carrefourCompany.isin,
      points: 1
    },
    {
      id: danoneCompany.id,
      name: danoneCompany.name,
      isin: danoneCompany.isin,
      points: 1
    },
    {
      id: deutscheTelekomCompany.id,
      name: deutscheTelekomCompany.name,
      isin: deutscheTelekomCompany.isin,
      points: 1
    },
    {
      id: electroluxCompany.id,
      name: electroluxCompany.name,
      isin: electroluxCompany.isin,
      points: 1
    },
    {
      id: engieCompany.id,
      name: engieCompany.name,
      isin: engieCompany.isin,
      points: 1
    },
    {
      id: peugeotCompany.id,
      name: peugeotCompany.name,
      isin: peugeotCompany.isin,
      points: 1
    },
    {
      id: ingCompany.id,
      name: ingCompany.name,
      isin: ingCompany.isin,
      points: 1
    },
    {
      id: intesaCompany.id,
      name: intesaCompany.name,
      isin: intesaCompany.isin,
      points: 1
    },
    {
      id: keringCompany.id,
      name: keringCompany.name,
      isin: keringCompany.isin,
      points: 1
    },
    {
      id: philipsCompany.id,
      name: philipsCompany.name,
      isin: philipsCompany.isin,
      points: 1
    },
    {
      id: lorealCompany.id,
      name: lorealCompany.name,
      isin: lorealCompany.isin,
      points: 1
    },
    {
      id: michelinCompany.id,
      name: michelinCompany.name,
      isin: michelinCompany.isin,
      points: 1
    },
    {
      id: schneiderCompany.id,
      name: schneiderCompany.name,
      isin: schneiderCompany.isin,
      points: 1
    },
    {
      id: siemensCompany.id,
      name: siemensCompany.name,
      isin: siemensCompany.isin,
      points: 1
    },
    {
      id: telefonicaCompany.id,
      name: telefonicaCompany.name,
      isin: telefonicaCompany.isin,
      points: 1
    },
    {
      id: thyssenKruppCompany.id,
      name: thyssenKruppCompany.name,
      isin: thyssenKruppCompany.isin,
      points: 1
    },
    {
      id: unileverCompany.id,
      name: unileverCompany.name,
      isin: unileverCompany.isin,
      points: 1
    }
  ]
};
