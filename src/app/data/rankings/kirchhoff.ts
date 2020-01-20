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
  name: 'GOOD COMPANY RANKING 2018.',
  year: 2018,
  responsibilityType: ResponsibilityType.Ethik,
  issuer: 'Kirchhoff',
  link: 'https://www.kirchhoff.de/fileadmin/20_Download/Studien/20180924_CGR_final.pdf',
  maxResult: 25,
  unit: 'Punkten',
  results: [
    {
      id: freseniusCompany.id,
      name: freseniusCompany.name,
      isin: freseniusCompany.isin,
      points: 16.8
    },
    {
      id: siemensCompany.id,
      name: siemensCompany.name,
      isin: siemensCompany.isin,
      points: 16.7
    },
    {
      id: sapCompany.id,
      name: sapCompany.name,
      isin: sapCompany.isin,
      points: 16.6
    },
    {
      id: adidasCompany.id,
      name: adidasCompany.name,
      isin: adidasCompany.isin,
      points: 16.5
    },
    {
      id: lindeCompany.id,
      name: lindeCompany.name,
      isin: lindeCompany.isin,
      points: 16.4
    },
    {
      id: henkelCompany.id,
      name: henkelCompany.name,
      isin: henkelCompany.isin,
      points: 16.3
    },
    {
      id: continentalCompany.id,
      name: continentalCompany.name,
      isin: continentalCompany.isin,
      points: 16.2
    },
    {
      id: fmcCompany.id,
      name: fmcCompany.name,
      isin: fmcCompany.isin,
      points: 16.1
    },
    {
      id:  lufthansaCompany.id,
      name:  lufthansaCompany.name,
      isin:  lufthansaCompany.isin,
      points: 16
    },
    {
      id: allianzCompany.id,
      name: allianzCompany.name,
      isin: allianzCompany.isin,
      points: 15.6
    },
    {
      id: thyssenKruppCompany.id,
      name: thyssenKruppCompany.name,
      isin: thyssenKruppCompany.isin,
      points: 15.5
    },
    {
      id: deutschePostCompany.id,
      name: deutschePostCompany.name,
      isin: deutschePostCompany.isin,
      points: 15.3
    },
    {
      id: munichReCompany.id,
      name: munichReCompany.name,
      isin: munichReCompany.isin,
      points: 15.3
    },
    {
      id: heidelbergCementCompany.id,
      name: heidelbergCementCompany.name,
      isin: heidelbergCementCompany.isin,
      points: 15.2
    },
    {
      id: merckKgCompany.id,
      name: merckKgCompany.name,
      isin: merckKgCompany.isin,
      points: 15.2
    },
    {
      id: rweCompany.id,
      name: rweCompany.name,
      isin: rweCompany.isin,
      points: 15.2
    },
    {
      id: beiersdorfCompany.id,
      name: beiersdorfCompany.name,
      isin: beiersdorfCompany.isin,
      points: 15.1
    },
    {
      id: eonCompany.id,
      name: eonCompany.name,
      isin: eonCompany.isin,
      points: 15.1
    },
    {
      id: infineonCompany.id,
      name: infineonCompany.name,
      isin: infineonCompany.isin,
      points: 15
    },
    {
      id: bmwCompany.id,
      name: bmwCompany.name,
      isin: bmwCompany.isin,
      points: 14.8
    },
    {
      id: basfCompany.id,
      name: basfCompany.name,
      isin: basfCompany.isin,
      points: 14.7
    },
    {
      id: deutscheTelekomCompany.id,
      name: deutscheTelekomCompany.name,
      isin: deutscheTelekomCompany.isin,
      points: 14.4
    },
    {
      id: bayerCompany.id,
      name: bayerCompany.name,
      isin: bayerCompany.isin,
      points: 14.3
    },
    {
      id: deutschBoerseCompany.id,
      name: deutschBoerseCompany.name,
      isin: deutschBoerseCompany.isin,
      points: 14.2
    },
    {
      id: commerzbankCompany.id,
      name: commerzbankCompany.name,
      isin: commerzbankCompany.isin,
      points: 14.1
    },
    {
      id: covestroCompany.id,
      name: covestroCompany.name,
      isin: covestroCompany.isin,
      points: 14
    },
    {
      id: daimlerCompany.id,
      name: daimlerCompany.name,
      isin: daimlerCompany.isin,
      points: 13.8
    },
    {
      id: vonoviaCompany.id,
      name: vonoviaCompany.name,
      isin: vonoviaCompany.isin,
      points: 12.6
    },
    {
      id: deutscheBankCompany.id,
      name: deutscheBankCompany.name,
      isin: deutscheBankCompany.isin,
      points: 11.8
    },
    {
      id: vwCompany.id,
      name: vwCompany.name,
      isin: vwCompany.isin,
      points: 11.2
    }
  ]
};
