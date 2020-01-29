// https://www.ranking-nachhaltigkeitsberichte.de/data/ranking/user_upload/2018/Ranking_Nachhaltigkeitsberichte_2018_Ergebnisbericht.pdf

import { Ranking } from '../../interfaces/ranking';
import { ResponsibilityType } from '../../enums/responsibility';
import { bmwCompany } from '../companies/dax/bmw';
import { deutscheTelekomCompany } from '../companies/dax/deutscheTelekom';
import { commerzbankCompany } from '../companies/mdax/commerzbank';
import { merckKgCompany } from '../companies/dax/merckKg';
import { bayerCompany } from '../companies/dax/bayer';
import { vwCompany } from '../companies/dax/vw';
import { siemensCompany } from '../companies/dax/siemens';
import { henkelCompany } from '../companies/dax/henkel';
import { evonikCompany } from '../companies/mdax/evonik';
import { basfCompany } from '../companies/dax/basf';
import { allianzCompany } from '../companies/dax/allianz';
import { hanoverReCompany } from '../companies/mdax/hanoverRe';
import { heidelbergCementCompany } from '../companies/dax/heidelbergCement';
import { talanxCompany } from '../companies/sdax/talanx';
import { telefonicaDeutschlandCompany } from '../companies/mdax/telefonica';
import { innogyCompany } from '../companies/sdax/innogy';
import { aurubisCompany } from '../companies/mdax/aurubis';
import { continentalCompany } from '../companies/dax/continental';
import { covestroCompany } from '../companies/dax/covestro';
import { deutschePostCompany } from '../companies/dax/deutschePost';
import { lindeCompany } from '../companies/dax/linde';
import { adidasCompany } from '../companies/dax/adidas';
import { baywaCompany } from '../companies/sdax/baywa';
import { infineonCompany } from '../companies/dax/infineon';
import { schaefflerCompany } from '../companies/sdax/schaeffler';
import { sapCompany } from '../companies/dax/sap';
import { munichReCompany } from '../companies/dax/munichRe';
import { hochtiefCompany } from '../companies/mdax/hochtief';
import { lanxessCompany } from '../companies/mdax/lanxess';
import { daimlerCompany } from '../companies/dax/daimler';
import { eonCompany } from '../companies/dax/eon';
import { lufthansaCompany } from '../companies/dax/lufthansa';
import { rweCompany } from '../companies/dax/rwe';

export const ioew: Ranking = {
  name: 'CSR-Reporting von Großunternehmen und KMU in Deutschland.',
  year: 2018,
  responsibilityType: ResponsibilityType.Nachhaltigkeit,
  issuer: 'IÖW und future',
  link: 'https://www.emas.de/aktuelles/2019/15-05-19-ranking-nachhaltigkeitsberichte/',
  maxResult: 700,
  unit: 'Punkte',
  results: [
    {
      id: bmwCompany.id,
      name: bmwCompany.name,
      isin: bmwCompany.isin,
      points: 502
    },
    {
      id: deutscheTelekomCompany.id,
      name: deutscheTelekomCompany.name,
      isin: deutscheTelekomCompany.isin,
      points: 477
    },
    {
      id: commerzbankCompany.id,
      name: commerzbankCompany.name,
      isin: commerzbankCompany.isin,
      points: 456
    },
    {
      id: merckKgCompany.id,
      name: merckKgCompany.name,
      isin: merckKgCompany.isin,
      points: 426
    },
    {
      id: bayerCompany.id,
      name: bayerCompany.name,
      isin: bayerCompany.isin,
      points: 417
    },
    {
      id: vwCompany.id,
      name: vwCompany.name,
      isin: vwCompany.isin,
      points: 412
    },
    {
      id: siemensCompany.id,
      name: siemensCompany.name,
      isin: siemensCompany.isin,
      points: 387
    },
    {
      id: henkelCompany.id,
      name: henkelCompany.name,
      isin: henkelCompany.isin,
      points: 382
    },
    {
      id: evonikCompany.id,
      name: evonikCompany.name,
      isin: evonikCompany.isin,
      points: 374
    },
    {
      id: basfCompany.id,
      name: basfCompany.name,
      isin: basfCompany.isin,
      points: 370
    },
    {
      id: allianzCompany.id,
      name: allianzCompany.name,
      isin: allianzCompany.isin,
      points: 358
    },
    {
      id: hanoverReCompany.id,
      name: hanoverReCompany.name,
      isin: hanoverReCompany.isin,
      points: 357
    },
    {
      id: heidelbergCementCompany.id,
      name: heidelbergCementCompany.name,
      isin: heidelbergCementCompany.isin,
      points: 347
    },
    {
      id: talanxCompany.id,
      name: talanxCompany.name,
      isin: talanxCompany.isin,
      points: 347
    },
    {
      id: telefonicaDeutschlandCompany.id,
      name: telefonicaDeutschlandCompany.name,
      isin: telefonicaDeutschlandCompany.isin,
      points: 346
    },
    {
      id: innogyCompany.id,
      name: innogyCompany.name,
      isin: innogyCompany.isin,
      points: 343
    },
    {
      id: aurubisCompany.id,
      name: aurubisCompany.name,
      isin: aurubisCompany.isin,
      points: 339
    },
    {
      id: continentalCompany.id,
      name: continentalCompany.name,
      isin: continentalCompany.isin,
      points: 323
    },
    {
      id: covestroCompany.id,
      name: covestroCompany.name,
      isin: covestroCompany.isin,
      points: 323
    },
    {
      id: deutschePostCompany.id,
      name: deutschePostCompany.name,
      isin: deutschePostCompany.isin,
      points: 323
    },
    {
      id: lindeCompany.id,
      name: lindeCompany.name,
      isin: lindeCompany.isin,
      points: 321
    },
    {
      id: adidasCompany.id,
      name: adidasCompany.name,
      isin: adidasCompany.isin,
      points: 311
    },
    {
      id: baywaCompany.id,
      name: baywaCompany.name,
      isin: baywaCompany.isin,
      points: 309
    },
    {
      id: infineonCompany.id,
      name: infineonCompany.name,
      isin: infineonCompany.isin,
      points: 308
    },
    {
      id: schaefflerCompany.id,
      name: schaefflerCompany.name,
      isin: schaefflerCompany.isin,
      points: 306
    },
    {
      id: sapCompany.id,
      name: sapCompany.name,
      isin: sapCompany.isin,
      points: 304
    },
    {
      id: munichReCompany.id,
      name: munichReCompany.name,
      isin: munichReCompany.isin,
      points: 302
    },
    {
      id: hochtiefCompany.id,
      name: hochtiefCompany.name,
      isin: hochtiefCompany.isin,
      points: 301
    },
    {
      id: lanxessCompany.id,
      name: lanxessCompany.name,
      isin: lanxessCompany.isin,
      points: 298
    },
    {
      id: daimlerCompany.id,
      name: daimlerCompany.name,
      isin: daimlerCompany.isin,
      points: 285
    },
    {
      id: eonCompany.id,
      name: eonCompany.name,
      isin: eonCompany.isin,
      points: 283
    },
    {
      id: lufthansaCompany.id,
      name: lufthansaCompany.name,
      isin: lufthansaCompany.isin,
      points: 281
    },
    {
      id: rweCompany.id,
      name: rweCompany.name,
      isin: rweCompany.isin,
      points: 280
    }
  ]
};
