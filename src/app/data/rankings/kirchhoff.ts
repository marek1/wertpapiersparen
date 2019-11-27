import { Ranking } from '../../interfaces/ranking';
import { ResponsibilityType } from '../../enums/responsibility';
import { freseniusCompany } from '../companies/dax/fresenius';
import { siemensCompany } from '../companies/dax/siemens';
import { sapCompany } from '../companies/dax/sap';
import { adidasCompany } from '../companies/dax/adidas';
import { lindeCompany } from '../companies/dax/linde';
import { henkelCompany } from '../companies/dax/henkel';
import { continentalCompany } from '../companies/dax/continental';
import { fmcCompany } from '../companies/dax/fmc';
import { lufthansaCompany } from '../companies/dax/lufthansa';
import { allianzCompany } from '../companies/dax/allianz';
import { deutschePostCompany } from '../companies/dax/deutschePost';
import { thyssenKruppCompany } from '../companies/mdax/thyssenKrupp';
import { munichReCompany } from '../companies/dax/munichRe';
import { heidelbergCementCompany } from '../companies/dax/heidelbergCement';
import { merckKgCompany } from '../companies/dax/merckKg';
import { rweCompany } from '../companies/dax/rwe';
import { beiersdorfCompany } from '../companies/dax/beiersdorf';
import { eonCompany } from '../companies/dax/eon';
import { infineonCompany } from '../companies/dax/infineon';
import { bmwCompany } from '../companies/dax/bmw';
import { basfCompany } from '../companies/dax/basf';
import { deutscheTelekomCompany } from '../companies/dax/deutscheTelekom';
import { bayerCompany } from '../companies/dax/bayer';
import { deutschBoerseCompany } from '../companies/dax/deutscheBoerse';
import { commerzbankCompany } from '../companies/mdax/commerzbank';
import { covestroCompany } from '../companies/dax/covestro';
import { daimlerCompany } from '../companies/dax/daimler';
import { vonoviaCompany } from '../companies/dax/vonovia';
import { deutscheBankCompany } from '../companies/dax/deutscheBank';
import { vwCompany } from '../companies/dax/vw';

export const kirchhoff: Ranking = {
  name: 'GOOD COMPANY RANKING 2018 (Punkte für Gesellschaft)',
  year: 2018,
  responsibilityType: ResponsibilityType.Ethik,
  issuer: 'Kirchhoff',
  link: 'https://www.kirchhoff.de/fileadmin/20_Download/Studien/20180924_CGR_final.pdf',
  maxResult: 25,
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
