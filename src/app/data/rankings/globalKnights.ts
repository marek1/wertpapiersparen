import { Ranking } from '../../interfaces/ranking';
import { ResponsibilityType } from '../../enums/responsibility';
import { keringCompany } from '../companies/eurostoxx50/kering';
import { sanofiCompany } from '../companies/eurostoxx50/sanofi';
import { ericcsonCompany } from '../companies/other/ericsson';
import { bnpCompany } from '../companies/eurostoxx50/bnp';
import { siemensCompany } from '../companies/dax/siemens';
import { ingCompany } from '../companies/eurostoxx50/ing';
import { electroluxCompany } from '../companies/other/electrolux';
import { koneCompany } from '../companies/other/kone';


export const globalKnights: Ranking = {
  name: 'Overview of 2019 Global 100 Most Sustainable Corporations in the World.',
  year: 2019,
  responsibilityType: ResponsibilityType.Nachhaltigkeit,
  issuer: 'Global Knights',
  link: 'https://www.corporateknights.com/reports/2019-global-100/2019-global-100-results-15481153/',
  maxResult: 100,
  unit: '%',
  results: [
    {
      id: keringCompany.id,
      points: 81.55,
    },
    {
      id: sanofiCompany.id,
      points: 75.16,
    },
    {
      id: ericcsonCompany.id,
      points: 74.92,
    },
    {
      id: bnpCompany.id,
      points: 74.14,
    },
    {
      id: siemensCompany.id,
      points: 71.35,
    },
    {
      id: ingCompany.id,
      points: 69.41,
    },
    {
      id: electroluxCompany.id,
      points: 69.22,
    },
    {
      id: koneCompany.id,
      points: 67.24,
    }
  ]
};
