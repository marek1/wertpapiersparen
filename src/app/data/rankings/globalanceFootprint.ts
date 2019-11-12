import { ResponsibilityType } from '../../enums/responsibility';
import { allianzCompany } from '../companies/allianz';
import { munichReCompany } from '../companies/munichRe';
import { deutschBoerseCompany } from '../companies/deutscheBoerse';
import { infineonCompany } from '../companies/infineon';
import { sapCompany } from '../companies/sap';
import { beiersdorfCompany } from '../companies/beiersdorf';
import { siemensCompany } from '../companies/siemens';
import { heidelbergCementCompany } from '../companies/heidelbergCement';
import { henkelCompany } from '../companies/henkel';
import { merckKgCompany } from '../companies/merckKg';
import { wirecardCompany } from '../companies/wirecard';
import { deutscheTelekomCompany } from '../companies/deutscheTelekom';
import { deutschePostCompany } from '../companies/deutschePost';
import { adidasCompany } from '../companies/adidas';
import { fmcCompany } from '../companies/fmc';
import { bmwCompany } from '../companies/bmw';
import { continentalCompany } from '../companies/continental';
import { covestroCompany } from '../companies/covestro';
import { daimlerCompany } from '../companies/daimler';
import { lindeCompany } from '../companies/linde';
import { basfCompany } from '../companies/basf';
import { deutscheBankCompany } from '../companies/deutscheBank';
import { bayerCompany } from '../companies/bayer';
import { lufthansaCompany } from '../companies/lufthansa';
import { vonoviaCompany } from '../companies/vonovia';
import { eonCompany } from '../companies/eon';
import { freseniusCompany } from '../companies/fresenius';
import { rweCompany } from '../companies/rwe';
import { vwCompany } from '../companies/vw';
import { Ranking } from '../../interfaces/ranking';
import { thyssenKruppCompany } from '../companies/thyssenKrupp';

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
