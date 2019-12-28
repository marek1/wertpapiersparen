import { Country } from '../../../enums/country';
import { asmlCompany } from '../../companies/eurostoxx50/asml';
import { Etf } from '../../../interfaces/etf';
import { Currency } from '../../../enums/currencies';
import { rocheCompany } from '../../companies/other/roche';
import { allianzCompany } from '../../companies/dax/allianz';
import { siemensCompany } from '../../companies/dax/siemens';
import { novoNordiskCompany } from '../../companies/other/novo';
import { sapCompany } from '../../companies/dax/sap';
import { unileverCompany } from '../../companies/eurostoxx50/unilever';
import { lorealCompany } from '../../companies/eurostoxx50/loreal';
import { adidasCompany } from '../../companies/dax/adidas';
import { schneiderCompany } from '../../companies/eurostoxx50/schneider';
import { axaCompany } from '../../companies/eurostoxx50/axa';
import { danoneCompany } from '../../companies/eurostoxx50/danone';
import { essilorLuxotticaCompany } from '../../companies/eurostoxx50/essilor';
import { munichReCompany } from '../../companies/dax/munichRe';
import { intesaCompany } from '../../companies/eurostoxx50/intesa';
import { inditexCompany } from '../../companies/eurostoxx50/inditex';
import { bbvaCompany } from '../../companies/eurostoxx50/bbva';
import { deutschePostCompany } from '../../companies/dax/deutschePost';
import { crhCompany } from '../../companies/eurostoxx50/crh';
import { deutschBoerseCompany } from '../../companies/dax/deutscheBoerse';
import { orangeCompany } from '../../companies/eurostoxx50/orange';
import { henkelCompany } from '../../companies/dax/henkel';
import { merckKgCompany } from '../../companies/dax/merckKg';
import { beiersdorfCompany } from '../../companies/dax/beiersdorf';
import { electroluxCompany } from '../../companies/other/electrolux';
import { metroCompany } from '../../companies/mdax/metro';

export const isharesMsciEuropeSri: Etf = {
  name: 'iShares MSCI Europe SRI UCITS',
  url: 'https://www.ishares.com/de/privatanleger/de/produkte/251767/ishares-dow-jones-europe-sustainability-screened-ucits-etf#/',
  isin: 'IE00B52VJ196',
  currency: Currency.EUR,
  manager: 'BlackRock Asset Management Ireland Limited',
  issuer: 'iShares II plc',
  country: Country.Irland,
  gewinn: 'thesaurierend',
  ter: 0.3,
  yields: [
    20.57, 11.38, 6.99
  ],
  lastUpdate: '2019-12-26',
  shares: [
    asmlCompany.id,
    rocheCompany.id,
    allianzCompany.id,
    siemensCompany.id,
    novoNordiskCompany.id,
    sapCompany.id,
    unileverCompany.id,
    lorealCompany.id,
    adidasCompany.id,
    schneiderCompany.id,
    axaCompany.id,
    danoneCompany.id,
    essilorLuxotticaCompany.id,
    munichReCompany.id,
    intesaCompany.id,
    inditexCompany.id,
    bbvaCompany.id,
    deutschePostCompany.id,
    crhCompany.id,
    deutschBoerseCompany.id,
    orangeCompany.id,
    henkelCompany.id,
    merckKgCompany.id,
    beiersdorfCompany.id,
    electroluxCompany.id,
    metroCompany.id,
  ],
};
