import { Ranking } from '../../interfaces/ranking';
import { ResponsibilityType } from '../../enums/responsibility';
import { continentalCompany } from '../companies/dax/continental';
import { osramCompany } from '../companies/mdax/osram';
import { siemensCompany } from '../companies/dax/siemens';
import { normaCompany } from '../companies/sdax/norna';
import { suedzuckerCompany } from '../companies/sdax/suedzucker';

export const hwwi: Ranking = {
  name: 'Welche deutsche Firmen liefern "den größten ökologischen, sozialen und ökonomischen Mehrwert für die Menschen"?',
  year: 2018,
  responsibilityType: ResponsibilityType.Nachhaltigkeit,
  issuer: 'Hamburgische WeltWirtschaftsInstitut (HWWI)',
  link: '',
  maxResult: 100,
  unit: 'Punkte',
  results: [
    {
      id: continentalCompany.id,
      name: continentalCompany.name,
      isin: continentalCompany.isin,
      points: 100
    },
    {
      id: osramCompany.id,
      name: osramCompany.name,
      isin: osramCompany.isin,
      points: 92
    },
    {
      id: siemensCompany.id,
      name: siemensCompany.name,
      isin: siemensCompany.isin,
      points: 88.6
    },
    {
      id: normaCompany.id,
      name: normaCompany.name,
      isin: normaCompany.isin,
      points: 84.7
    },
    {
      id: suedzuckerCompany.id,
      name: suedzuckerCompany.name,
      isin: suedzuckerCompany.isin,
      points: 84.4
    }
  ]
};
