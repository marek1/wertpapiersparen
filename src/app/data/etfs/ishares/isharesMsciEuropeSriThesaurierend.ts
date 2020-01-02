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

// tslint:disable:max-line-length
export const isharesMsciEuropeSriThesaurierend: Etf = {
  name: 'iShares MSCI Europe SRI UCITS (thesaurierend)',
  description: 'Der Fonds ist bestrebt, die Performance eines Index nachzubilden, der sich aus europäischen ESG (umweltverträglich, sozial und staatlich)-überprüften Unternehmensanleihen zusammensetzt.',
  tracks: 'MSCI Europe SRI Select Reduced Fossil Fuel Index',
  url: 'https://www.ishares.com/de/privatanleger/de/produkte/251767/ishares-dow-jones-europe-sustainability-screened-ucits-etf#/',
  isin: 'IE00B52VJ196',
  currency: Currency.EUR,
  manager: 'BlackRock Asset Management Ireland Limited',
  issuer: 'iShares II plc',
  logo: 'https://www.ishares.com/uk-retail-assets/cache-1564149267000/images/media-bin/web/global/logos/logo-ishares.svg',
  country: Country.Irland,
  gewinn: 'thesaurierend',
  ter: 0.3,
  yields: [ // kumulativ
    20.57, 38.18, 40.19
  ],
  lastUpdate: '2019-12-26',
  shares: [
    {id: asmlCompany.id, name: asmlCompany.name},
    {id: rocheCompany.id, name: rocheCompany.name},
    {id: allianzCompany.id, name: allianzCompany.name},
    {id: siemensCompany.id, name: siemensCompany.name},
    {id: novoNordiskCompany.id, name: novoNordiskCompany.name},
    {id: sapCompany.id, name: sapCompany.name},
    {id: unileverCompany.id, name: unileverCompany.name},
    {id: lorealCompany.id, name: lorealCompany.name},
    {id: adidasCompany.id, name: adidasCompany.name},
    {id: schneiderCompany.id, name: schneiderCompany.name},
    {id: axaCompany.id, name: axaCompany.name},
    {id: danoneCompany.id, name: danoneCompany.name},
    {id: essilorLuxotticaCompany.id, name: essilorLuxotticaCompany.name},
    {id: munichReCompany.id, name: munichReCompany.name},
    {id: intesaCompany.id, name: intesaCompany.name},
    {id: inditexCompany.id, name: inditexCompany.name},
    {id: bbvaCompany.id, name: bbvaCompany.name},
    {id: deutschePostCompany.id, name: deutschePostCompany.name},
    {id: crhCompany.id, name: crhCompany.name},
    {id: deutschBoerseCompany.id, name: deutschBoerseCompany.name},
    {id: orangeCompany.id, name: orangeCompany.name},
    {id: henkelCompany.id, name: henkelCompany.name},
    {id: merckKgCompany.id, name: merckKgCompany.name},
    {id: beiersdorfCompany.id, name: beiersdorfCompany.name},
    {id: electroluxCompany.id, name: electroluxCompany.name},
    {id: metroCompany.id, name: metroCompany.name},
  ],
};
// tslint:enable:max-line-length

