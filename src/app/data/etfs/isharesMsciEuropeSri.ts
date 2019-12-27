
// TODO : set

// https://www.ishares.com/de/privatanleger/de/produkte/251767/ishares-dow-jones-europe-sustainability-screened-ucits-etf#/

// unilever & loreal sind nichtzyklische Konsumgüter!


import { Country } from '../../enums/country';
import { asmlCompany } from '../companies/eurostoxx50/asml';
import { Etf } from '../../interfaces/etf';
import { Currency } from '../../enums/currencies';
import { rocheCompany } from '../companies/other/roche';
import { allianzCompany } from '../companies/dax/allianz';
import { siemensCompany } from '../companies/dax/siemens';
import { novoNordiskCompany } from '../companies/other/novo';
import { sapCompany } from '../companies/dax/sap';
import { unileverCompany } from '../companies/eurostoxx50/unilever';
import { lorealCompany } from '../companies/eurostoxx50/loreal';
import { adidasCompany } from '../companies/dax/adidas';
import { schneiderCompany } from '../companies/eurostoxx50/schneider';
import { axaCompany } from '../companies/eurostoxx50/axa';
import { danoneCompany } from '../companies/eurostoxx50/danone';
import { essilorLuxotticaCompany } from '../companies/eurostoxx50/essilor';
import { munichReCompany } from '../companies/dax/munichRe';
import { intesaCompany } from '../companies/eurostoxx50/intesa';
import { inditexCompany } from '../companies/eurostoxx50/inditex';
import { bbvaCompany } from '../companies/eurostoxx50/bbva';
import { deutschePostCompany } from '../companies/dax/deutschePost';
import { crhCompany } from '../companies/eurostoxx50/crh';
import { deutschBoerseCompany } from '../companies/dax/deutscheBoerse';
import { orangeCompany } from '../companies/eurostoxx50/orange';
import { henkelCompany } from '../companies/dax/henkel';
import { merckKgCompany } from '../companies/dax/merckKg';

export const isharesMsciEuropeSri: Etf = {
  name: 'iShares MSCI Europe SRI UCITS',
  isin: 'IE00B52VJ196',
  currency: Currency.EUR,
  manager: 'BlackRock Asset Management Ireland Limited',
  issuer: 'iShares II plc',
  country: Country.Irland,
  gewinn: 'thesaurierend',
  ter: 0.3,
  shares: [
    {
      companyId: asmlCompany.id,
      ratio: 4.73
    },
    {
      companyId: rocheCompany.id,
      ratio: 4.67
    },
    {
      companyId: allianzCompany.id,
      ratio: 4.42
    },
    {
      companyId: siemensCompany.id,
      ratio: 4.39
    },
    {
      companyId: novoNordiskCompany.id,
      ratio: 4.38
    },
    {
      companyId: sapCompany.id,
      ratio: 4.34
    },
    {
      companyId: unileverCompany.id,
      ratio: 3.68
    },
    {
      companyId: lorealCompany.id,
      ratio: 3.26
    },
    {
      companyId: adidasCompany.id,
      ratio: 2.56
    },
    {
      companyId: schneiderCompany.id,
      ratio: 2.48
    },
    {
      companyId: axaCompany.id,
      ratio: 2.38
    },
    {
      companyId: danoneCompany.id,
      ratio: 2.24
    },
    // TODO: RELX PLC, 2.13%
    {
      companyId: essilorLuxotticaCompany.id,
      ratio: 1.91
    },
    {
      companyId: munichReCompany.id,
      ratio: 1.87
    },
    {
      companyId: intesaCompany.id,
      ratio: 1.74
    },
    {
      companyId: inditexCompany.id,
      ratio: 1.66
    },
    {
      companyId: bbvaCompany.id,
      ratio: 1.64
    },
    {
      companyId: deutschePostCompany.id,
      ratio: 1.64
    },
    // TODO: SwissRe, 1.45%
    {
      companyId: crhCompany.id,
      ratio: 1.39
    },
    // TODO: London Stock Exchange, 1.38%
    {
      companyId: deutschBoerseCompany.id,
      ratio: 1.29
    },
    {
      companyId: orangeCompany.id,
      ratio: 1.29
    },
    // TODO: Givaudan, 1.25%
    // TODO: Lonza, 1.18%
    // TODO: STANDARD CHARTERED PLC, 1.18%
    // aso.
    {
      companyId: henkelCompany.id,
      ratio: 0.8
    },
    {
      companyId: merckKgCompany.id,
      ratio: 0.66
    }
    // continue with page 5
  ],
};
