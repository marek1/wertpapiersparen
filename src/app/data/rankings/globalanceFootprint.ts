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
  name: 'Globalance Footprint',
  year: 2019,
  responsibilityType: ResponsibilityType.Nachhaltigkeit,
  issuer: 'Globalance Bank',
  link: 'https://www.handelsblatt.com/finanzen/anlagestrategie/trends/globalance-footprint-so-nachhaltig-sind-die-dax-unternehmen/24245144.html',
  results: [
    {
      id: allianzCompany.id,
      points: 89
    },
    {
      id: munichReCompany.id,
      points: 86,
    },
    {
      id: deutschBoerseCompany.id,
      points: 85,
    },
    {
      id: infineonCompany.id,
      points: 75,
    },
    {
      id: sapCompany.id,
      points: 74,
    },
    {
      id: beiersdorfCompany.id,
      points: 74,
    },
    {
      id: siemensCompany.id,
      points: 66,
    },
    {
      id: henkelCompany.id,
      points: 64,
    },
    {
      id: merckKgCompany.id,
      points: 64,
    },
    {
      id: wirecardCompany.id,
      points: 64,
    },
    {
      id: deutscheTelekomCompany.id,
      points: 61,
    },
    {
      id: deutschePostCompany.id,
      points: 61,
    },
    {
      id: adidasCompany.id,
      points: 58,
    },
    {
      id: fmcCompany.id,
      points: 56,
    },
    {
      id: bmwCompany.id,
      points: 46,
    },
    {
      id: continentalCompany.id,
      points: 43,
    },
    {
      id: covestroCompany.id,
      points: 43,
    },
    {
      id: daimlerCompany.id,
      points: 41,
    },
    {
      id: lindeCompany.id,
      points: 40,
    },
    {
      id: basfCompany.id,
      points: 39,
    },
    {
      id: deutscheBankCompany.id,
      points: 39,
    },
    {
      id: bayerCompany.id,
      points: 38,
    },
    {
      id: lufthansaCompany.id,
      points: 38,
    },
    {
      id: vonoviaCompany.id,
      points: 37,
    },
    {
      id: eonCompany.id,
      points: 36,
    },
    {
      id: thyssenKruppCompany.id,
      points: 36
    },
    {
      id: heidelbergCementCompany.id,
      points: 35,
    },
    {
      id: freseniusCompany.id,
      points: 35,
    },
    {
      id: rweCompany.id,
      points: 31,
    },
    {
      id: vwCompany.id,
      points: 31,
    }
  ]
};
