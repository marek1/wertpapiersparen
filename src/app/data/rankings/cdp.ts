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

export const cdp: Ranking = {
  name: 'Our annual A List names the world\'s businesses leading on environmental performance"?',
  year: 2018,
  responsibilityType: ResponsibilityType.Umweltbewusstsein,
  issuer: 'CDP',
  link: 'https://www.cdp.net/en/companies/companies-scores',
  maxResult: 1,
  results: [
    {
      id: basfCompany.id,
      points: 1
    },
    {
      id: bayerCompany.id,
      points: 1
    },
    {
      id: bouyguesCompany.id,
      points: 1
    },
    {
      id: carrefourCompany.id,
      points: 1
    },
    {
      id: danoneCompany.id,
      points: 1
    },
    {
      id: deutscheTelekomCompany.id,
      points: 1
    },
    {
      id: electroluxCompany.id,
      points: 1
    },
    {
      id: engieCompany.id,
      points: 1
    },
    {
      id: peugeotCompany.id,
      points: 1
    },
    {
      id: ingCompany.id,
      points: 1
    },
    {
      id: intesaCompany.id,
      points: 1
    },
    {
      id: keringCompany.id,
      points: 1
    },
    {
      id: philipsCompany.id,
      points: 1
    },
    {
      id: lorealCompany.id,
      points: 1
    },
    {
      id: michelinCompany.id,
      points: 1
    },
    {
      id: schneiderCompany.id,
      points: 1
    },
    {
      id: siemensCompany.id,
      points: 1
    },
    {
      id: telefonicaCompany.id,
      points: 1
    },
    {
      id: thyssenKruppCompany.id,
      points: 1
    },
    {
      id: unileverCompany.id,
      points: 1
    }
  ]
};
