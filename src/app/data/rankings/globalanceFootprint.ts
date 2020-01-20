import { ResponsibilityType } from '../../enums/responsibility';
import { allianzCompany } from '../companies/dax/allianz';
import { munichReCompany } from '../companies/dax/munichRe';
import { deutschBoerseCompany } from '../companies/dax/deutscheBoerse';
import { infineonCompany } from '../companies/dax/infineon';
import { sapCompany } from '../companies/dax/sap';
import { beiersdorfCompany } from '../companies/dax/beiersdorf';
import { siemensCompany } from '../companies/dax/siemens';
import { heidelbergCementCompany } from '../companies/dax/heidelbergCement';
import { henkelCompany } from '../companies/dax/henkel';
import { merckKgCompany } from '../companies/dax/merckKg';
import { wirecardCompany } from '../companies/dax/wirecard';
import { deutscheTelekomCompany } from '../companies/dax/deutscheTelekom';
import { deutschePostCompany } from '../companies/dax/deutschePost';
import { adidasCompany } from '../companies/dax/adidas';
import { fmcCompany } from '../companies/dax/fmc';
import { bmwCompany } from '../companies/dax/bmw';
import { continentalCompany } from '../companies/dax/continental';
import { covestroCompany } from '../companies/dax/covestro';
import { daimlerCompany } from '../companies/dax/daimler';
import { lindeCompany } from '../companies/dax/linde';
import { basfCompany } from '../companies/dax/basf';
import { deutscheBankCompany } from '../companies/dax/deutscheBank';
import { bayerCompany } from '../companies/dax/bayer';
import { lufthansaCompany } from '../companies/dax/lufthansa';
import { vonoviaCompany } from '../companies/dax/vonovia';
import { eonCompany } from '../companies/dax/eon';
import { freseniusCompany } from '../companies/dax/fresenius';
import { rweCompany } from '../companies/dax/rwe';
import { vwCompany } from '../companies/dax/vw';
import { Ranking } from '../../interfaces/ranking';
import { thyssenKruppCompany } from '../companies/mdax/thyssenKrupp';

export const globalanceFootprint: Ranking = {
  name: 'Globalance Footprint.',
  year: 2019,
  responsibilityType: ResponsibilityType.Nachhaltigkeit,
  issuer: 'Globalance Bank',
  link: 'https://www.handelsblatt.com/finanzen/anlagestrategie/trends/globalance-footprint-so-nachhaltig-sind-die-dax-unternehmen/24245144.html',
  maxResult: 100,
  unit: 'Punkten',
  results: [
    {
      id: allianzCompany.id,
      name: allianzCompany.name,
      isin: allianzCompany.isin,
      points: 89
    },
    {
      id: munichReCompany.id,
      name: munichReCompany.name,
      isin: munichReCompany.isin,
      points: 86,
    },
    {
      id: deutschBoerseCompany.id,
      name: deutschBoerseCompany.name,
      isin: deutschBoerseCompany.isin,
      points: 85,
    },
    {
      id: infineonCompany.id,
      name: infineonCompany.name,
      isin: infineonCompany.isin,
      points: 75,
    },
    {
      id: sapCompany.id,
      name: sapCompany.name,
      isin: sapCompany.isin,
      points: 74,
    },
    {
      id: beiersdorfCompany.id,
      name: beiersdorfCompany.name,
      isin: beiersdorfCompany.isin,
      points: 74,
    },
    {
      id: siemensCompany.id,
      name: siemensCompany.name,
      isin: siemensCompany.isin,
      points: 66,
    },
    {
      id: henkelCompany.id,
      name: henkelCompany.name,
      isin: henkelCompany.isin,
      points: 64,
    },
    {
      id: merckKgCompany.id,
      name: merckKgCompany.name,
      isin: merckKgCompany.isin,
      points: 64,
    },
    {
      id: wirecardCompany.id,
      name: wirecardCompany.name,
      isin: wirecardCompany.isin,
      points: 64,
    },
    {
      id: deutscheTelekomCompany.id,
      name: deutscheTelekomCompany.name,
      isin: deutscheTelekomCompany.isin,
      points: 61,
    },
    {
      id: deutschePostCompany.id,
      name: deutscheBankCompany.name,
      isin: deutscheBankCompany.isin,
      points: 61,
    },
    {
      id: adidasCompany.id,
      name: adidasCompany.name,
      isin: adidasCompany.isin,
      points: 58,
    },
    {
      id: fmcCompany.id,
      name: fmcCompany.name,
      isin: fmcCompany.isin,
      points: 56,
    },
    {
      id: bmwCompany.id,
      name: bmwCompany.name,
      isin: bmwCompany.isin,
      points: 46,
    },
    {
      id: continentalCompany.id,
      name: continentalCompany.name,
      isin: continentalCompany.isin,
      points: 43,
    },
    {
      id: covestroCompany.id,
      name: covestroCompany.name,
      isin: covestroCompany.isin,
      points: 43,
    },
    {
      id: daimlerCompany.id,
      name: daimlerCompany.name,
      isin: daimlerCompany.isin,
      points: 41,
    },
    {
      id: lindeCompany.id,
      name: lindeCompany.name,
      isin: lindeCompany.isin,
      points: 40,
    },
    {
      id: basfCompany.id,
      name: basfCompany.name,
      isin: basfCompany.isin,
      points: 39,
    },
    {
      id: deutscheBankCompany.id,
      name: deutscheBankCompany.name,
      isin: deutscheBankCompany.isin,
      points: 39,
    },
    {
      id: bayerCompany.id,
      name: bayerCompany.name,
      isin: bayerCompany.isin,
      points: 38,
    },
    {
      id: lufthansaCompany.id,
      name: lufthansaCompany.name,
      isin: lufthansaCompany.isin,
      points: 38,
    },
    {
      id: vonoviaCompany.id,
      name: vonoviaCompany.name,
      isin: vonoviaCompany.isin,
      points: 37,
    },
    {
      id: eonCompany.id,
      name: eonCompany.name,
      isin: eonCompany.isin,
      points: 36,
    },
    {
      id: thyssenKruppCompany.id,
      name: thyssenKruppCompany.name,
      isin: thyssenKruppCompany.isin,
      points: 36
    },
    {
      id: heidelbergCementCompany.id,
      name: heidelbergCementCompany.name,
      isin: heidelbergCementCompany.isin,
      points: 35,
    },
    {
      id: freseniusCompany.id,
      name: freseniusCompany.name,
      isin: freseniusCompany.isin,
      points: 35,
    },
    {
      id: rweCompany.id,
      name: rweCompany.name,
      isin: rweCompany.isin,
      points: 31,
    },
    {
      id: vwCompany.id,
      name: vwCompany.name,
      isin: vwCompany.isin,
      points: 31,
    }
  ]
};
