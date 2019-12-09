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
  unit: 'Punkten',
  results: [
    {
      id: bmwCompany.id,
      points: 502
    },
    {
      id: deutscheTelekomCompany.id,
      points: 477
    },
    {
      id: commerzbankCompany.id,
      points: 456
    },
    {
      id: merckKgCompany.id,
      points: 426
    },
    {
      id: bayerCompany.id,
      points: 417
    },
    {
      id: vwCompany.id,
      points: 412
    },
    {
      id: siemensCompany.id,
      points: 387
    },
    {
      id: henkelCompany.id,
      points: 382
    },
    {
      id: evonikCompany.id,
      points: 374
    },
    {
      id: basfCompany.id,
      points: 370
    },
    {
      id: allianzCompany.id,
      points: 358
    },
    {
      id: hanoverReCompany.id,
      points: 357
    },
    {
      id: heidelbergCementCompany.id,
      points: 347
    },
    {
      id: talanxCompany.id,
      points: 347
    },
    {
      id: telefonicaDeutschlandCompany.id,
      points: 346
    },
    {
      id: innogyCompany.id,
      points: 343
    },
    {
      id: aurubisCompany.id,
      points: 339
    },
    {
      id: continentalCompany.id,
      points: 323
    },
    {
      id: covestroCompany.id,
      points: 323
    },
    {
      id: deutschePostCompany.id,
      points: 323
    },
    {
      id: lindeCompany.id,
      points: 321
    },
    {
      id: adidasCompany.id,
      points: 311
    },
    {
      id: baywaCompany.id,
      points: 309
    },
    {
      id: infineonCompany.id,
      points: 308
    },
    {
      id: schaefflerCompany.id,
      points: 306
    },
    {
      id: sapCompany.id,
      points: 304
    },
    {
      id: munichReCompany.id,
      points: 302
    },
    {
      id: hochtiefCompany.id,
      points: 301
    },
    {
      id: lanxessCompany.id,
      points: 298
    },
    {
      id: daimlerCompany.id,
      points: 285
    },
    {
      id: eonCompany.id,
      points: 283
    },
    {
      id: lufthansaCompany.id,
      points: 281
    },
    {
      id: rweCompany.id,
      points: 280
    }
  ]
};
