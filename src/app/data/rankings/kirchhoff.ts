import { Ranking } from '../../interfaces/ranking';
import { ResponsibilityType } from '../../enums/responsibility';
import { freseniusCompany } from '../companies/fresenius';
import { siemensCompany } from '../companies/siemens';
import { sapCompany } from '../companies/sap';
import { adidasCompany } from '../companies/adidas';
import { lindeCompany } from '../companies/linde';
import { henkelCompany } from '../companies/henkel';
import { continentalCompany } from '../companies/continental';
import { fmcCompany } from '../companies/fmc';
import { lufthansaCompany } from '../companies/lufthansa';
import { allianzCompany } from '../companies/allianz';
import { deutschePostCompany } from '../companies/deutschePost';
import { thyssenKruppCompany } from '../companies/thyssenKrupp';
import { munichReCompany } from '../companies/munichRe';
import { heidelbergCementCompany } from '../companies/heidelbergCement';
import { merckKgCompany } from '../companies/merckKg';
import { rweCompany } from '../companies/rwe';
import { beiersdorfCompany } from '../companies/beiersdorf';
import { eonCompany } from '../companies/eon';
import { infineonCompany } from '../companies/infineon';
import { bmwCompany } from '../companies/bmw';
import { basfCompany } from '../companies/basf';
import { deutscheTelekomCompany } from '../companies/deutscheTelekom';
import { bayerCompany } from '../companies/bayer';
import { deutschBoerseCompany } from '../companies/deutscheBoerse';
import { commerzbankCompany } from '../companies/commerzbank';
import { covestroCompany } from '../companies/covestro';
import { daimlerCompany } from '../companies/daimler';
import { vonoviaCompany } from '../companies/vonovia';
import { deutscheBankCompany } from '../companies/deutscheBank';
import { vwCompany } from '../companies/vw';

export const kirchhoff: Ranking = {
  name: 'GOOD COMPANY RANKING 2018 (Punkte für Gesellschaft)',
  year: 2018,
  responsibilityType: ResponsibilityType.Ethik,
  issuer: 'Kirchhoff',
  link: 'https://www.kirchhoff.de/fileadmin/20_Download/Studien/20180924_CGR_final.pdf',
  results: [
    {
      id: freseniusCompany.id,
      points: 16.8
    },
    {
      id: siemensCompany.id,
      points: 16.7
    },
    {
      id: sapCompany.id,
      points: 16.6
    },
    {
      id: adidasCompany.id,
      points: 16.5
    },
    {
      id: lindeCompany.id,
      points: 16.4
    },
    {
      id: henkelCompany.id,
      points: 16.3
    },
    {
      id: continentalCompany.id,
      points: 16.2
    },
    {
      id: fmcCompany.id,
      points: 16.1
    },
    {
      id:  lufthansaCompany.id,
      points: 16
    },
    {
      id: allianzCompany.id,
      points: 15.6
    },
    {
      id: thyssenKruppCompany.id,
      points: 15.5
    },
    {
      id: deutschePostCompany.id,
      points: 15.3
    },
    {
      id: munichReCompany.id,
      points: 15.3
    },
    {
      id: heidelbergCementCompany.id,
      points: 15.2
    },
    {
      id: merckKgCompany.id,
      points: 15.2
    },
    {
      id: rweCompany.id,
      points: 15.2
    },
    {
      id: beiersdorfCompany.id,
      points: 15.1
    },
    {
      id: eonCompany.id,
      points: 15.1
    },
    {
      id: infineonCompany.id,
      points: 15
    },
    {
      id: bmwCompany.id,
      points: 14.8
    },
    {
      id: basfCompany.id,
      points: 14.7
    },
    {
      id: deutscheTelekomCompany.id,
      points: 14.4
    },
    {
      id: bayerCompany.id,
      points: 14.3
    },
    {
      id: deutschBoerseCompany.id,
      points: 14.2
    },
    {
      id: commerzbankCompany.id,
      points: 14.1
    },
    {
      id: covestroCompany.id,
      points: 14
    },
    {
      id: daimlerCompany.id,
      points: 13.8
    },
    {
      id: vonoviaCompany.id,
      points: 12.6
    },
    {
      id: deutscheBankCompany.id,
      points: 11.8
    },
    {
      id: vwCompany.id,
      points: 11.2
    }
  ]
}
