import { Ranking } from '../../interfaces/ranking';
import { ResponsibilityType } from '../../enums/responsibility';
import { freseniusCompany } from '../companies/dax/fresenius';
import { continentalCompany } from '../companies/dax/continental';
import { osramCompany } from '../companies/mdax/osram';
import { siemensCompany } from '../companies/dax/siemens';

export const hwwi: Ranking = {
  name: 'Welche deutsche Firmen liefern "den größten ökologischen, sozialen und ökonomischen Mehrwert für die Menschen"?',
  year: 2018,
  responsibilityType: ResponsibilityType.Nachhaltigkeit,
  issuer: 'Hamburgische WeltWirtschaftsInstitut (HWWI)',
  link: 'https://www.kirchhoff.de/fileadmin/20_Download/Studien/20180924_CGR_final.pdf',
  results: [
    {
      id: continentalCompany.id,
      points: 100
    },
    {
      id: osramCompany.id,
      points: 92
    },
    {
      id: siemensCompany.id,
      points: 88.6
    },
    {
      id: normaCompany.id,
      points: 84.7
    },
    {
      id: suedZucker.id,
      points: 84.4
    },
    {
      id:,
      points:
    },
    {
      id:,
      points:
    }
  ]
}
