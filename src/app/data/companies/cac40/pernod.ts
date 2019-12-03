import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { SecurityType } from '../../../enums/securityType';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';

const dividends = [
  {year: 2018, rate: 2.36, yield: 1.69}, {year: 2017, rate: 2.02}, {year: 2016, rate: 1.88}, {
    year: 2015,
    rate: 1.80,
    yield: 1.70
  }, {year: 2014, rate: 1.64, yield: 1.86}, {year: 2013, rate: 1.64, yield: 1.87}, {year: 2012, rate: 1.58, yield: 1.88}, {
    year: 2011,
    rate: 1.44,
    yield: 2.12
  }, {year: 2010, rate: 1.34, yield: 2.09}, {year: 2009, rate: 0.50, yield: 1.11}, {year: 2008, rate: 1.32, yield: 2.02}, {
    year: 2007,
    rate: 1.26
  }
];
const prices = {
  '2019-12-30': {'1. open': '142.25', '4. close': '164.30'},
  '2018-12-30': {'1. open': '131.90', '4. close': '141.55'},
  '2017-12-30': {'1. open': '102.51', '4. close': '131.24'},
  '2016-12-30': {'1. open': '102.67', '4. close': '102.98'},
  '2015-12-30': {'1. open': '92.06', '4. close': '105.88'},
  '2014-12-30': {'1. open': '82.52', '4. close': '92.91'},
  '2013-12-30': {'1. open': '87.67', '4. close': '82.61'},
  '2012-12-30': {'1. open': '71.43', '4. close': '87.36'},
  '2011-12-30': {'1. open': '71.05', '4. close': '70.89'},
  '2010-12-30': {'1. open': '59.88', '4. close': '71.65'},
  '2009-12-30': {'1. open': '52.34', '4. close': '60.24'},
  '2008-12-30': {'1. open': '77.08', '4. close': '51.72'},
  '2007-12-30': {'1. open': '70.48', '4. close': '77.64'},
  '2006-12-30': {'1. open': '59.95', '4. close': '70.48'},
  '2005-12-30': {'1. open': '45.97', '4. close': '60.03'},
  '2004-12-30': {'1. open': '35.59', '4. close': '45.93'},
  '2003-12-30': {'1. open': '29.41', '4. close': '35.59'},
  '2002-12-30': {'1. open': '28.27', '4. close': '29.41'},
  '2001-12-30': {'1. open': '26.80', '4. close': '28.27'}
};

// tslint:disable:max-line-length
export const pernodCompany: Company = {
  id: 1213,
  name: 'Pernod Ricard S.A.',
  country: Country.Frankreich,
  city: 'Paris',
  url: 'https://www.pernod-ricard.com/',
  description: 'Pernod Ricard ist ein französischer Spirituosenkonzern, der 1975 aus der Fusion der Unternehmen Pernod und Ricard, die die gleichnamigen Anisées vertrieben haben, entstanden ist.',
  link_wikipedia: 'https://de.wikipedia.org/wiki/Pernod_Ricard',
  logo: 'https://assets.pernod-ricard.com/theme-extra/age-gate-logo.png?u6QgJWWWbxssFde3m07RI0UMZivWnBKI',
  products: [
    {
      id: 121310,
      name: 'Martel',
      logo: 'https://assets.pernod-ricard.com/styles/portefeuille_bouteilles_marques_desktop_1x/s3/marque_image_portfolio/martel.png'
    },
    {
      id: 121311,
      name: 'Beefeater',
      logo: 'https://assets.pernod-ricard.com/styles/portefeuille_bouteilles_marques_desktop_1x/s3/marque_image_portfolio/beefeater.png'
    },
    {
      id: 121312,
      name: 'Chivas Regal',
      logo: 'https://assets.pernod-ricard.com/styles/portefeuille_bouteilles_marques_desktop_1x/s3/marque_image_portfolio/chivas.png'
    },
    {
      id: 121313,
      name: 'Absolut Wodka',
      logo: 'https://assets.pernod-ricard.com/styles/portefeuille_bouteilles_marques_desktop_1x/s3/marque_image_portfolio/absolut.png'
    },
    {
      id: 121314,
      name: 'Havanna Club',
      logo: 'https://assets.pernod-ricard.com/styles/portefeuille_bouteilles_marques_desktop_1x/s3/marque_image_portfolio/havana-club.png'
    },
    {
      id: 121315,
      name: 'Jameson',
      logo: 'https://assets.pernod-ricard.com/styles/portefeuille_bouteilles_marques_desktop_1x/s3/marque_image_portfolio/jameson.png'
    },
    {
      id: 121316,
      name: 'The Glenviet',
      logo: 'https://assets.pernod-ricard.com/styles/portefeuille_bouteilles_marques_desktop_1x/s3/marque_image_portfolio/the-glenlivet-foundersreserve.png'
    },
    {
      id: 121317,
      name: 'Perrier-Jouet',
      logo: 'https://assets.pernod-ricard.com/styles/portefeuille_bouteilles_marques_desktop_1x/s3/marque_image_portfolio/perrier-jouet.png'
    },
    {
      id: 121318,
      name: 'Malibu',
      logo: 'https://assets.pernod-ricard.com/styles/portefeuille_bouteilles_marques_desktop_1x/s3/marque_image_portfolio/malibu.png'
    },
    {
      id: 121319,
      name: 'Ricard',
      logo: 'https://assets.pernod-ricard.com/styles/portefeuille_bouteilles_marques_desktop_1x/s3/marque_image_portfolio/ricard.png'
    },
    {
      id: 121320,
      name: 'Ballantines',
      logo: 'https://assets.pernod-ricard.com/styles/portefeuille_bouteilles_marques_desktop_1x/s3/marque_image_portfolio/ballantines-finest-70-cl.png'
    },
    {
      id: 121321,
      name: 'Royal Salute',
      logo: 'https://assets.pernod-ricard.com/styles/portefeuille_bouteilles_marques_desktop_1x/s3/marque_image_portfolio/royal_salut.png'
    },
    {
      id: 121322,
      name: 'Mumm',
      logo: 'https://assets.pernod-ricard.com/styles/portefeuille_bouteilles_marques_desktop_1x/s3/marque_image_portfolio/mumm.png'
    },
    {
      id: 121323,
      name: 'Kenwood',
      logo: 'https://assets.pernod-ricard.com/styles/portefeuille_bouteilles_marques_desktop_1x/s3/marque_image_portfolio/kenwood.png'
    },
    {
      id: 121324,
      name: 'Campo Viejo',
      logo: 'https://assets.pernod-ricard.com/styles/portefeuille_bouteilles_marques_desktop_1x/s3/marque_image_portfolio/campo-viejo.png'
    },
    {
      id: 121325,
      name: 'Brancott Estate',
      logo: 'https://assets.pernod-ricard.com/styles/portefeuille_bouteilles_marques_desktop_1x/s3/marque_image_portfolio/brancott-estate-portfolio.png'
    },
    {
      id: 121326,
      name: 'Jacobs Creek',
      logo: 'https://assets.pernod-ricard.com/styles/portefeuille_bouteilles_marques_desktop_1x/s3/marque_image_portfolio/jacobs_creek-small_1.png'
    },
    {
      id: 121327,
      name: 'Wyborowa',
      logo: 'https://assets.pernod-ricard.com/styles/portefeuille_bouteilles_marques_desktop_1x/s3/marque_image_portfolio/wyborowa.png'
    },
    {
      id: 121328,
      name: 'J.P.Wisers',
      logo: 'https://assets.pernod-ricard.com/styles/portefeuille_bouteilles_marques_desktop_1x/s3/marque_image_portfolio/jpwisers_deluxe.png'
    },
    {
      id: 121329,
      name: 'Royal Stag',
      logo: 'https://assets.pernod-ricard.com/styles/portefeuille_bouteilles_marques_desktop_1x/s3/marque_image_portfolio/royal_stag.png'
    },
    {
      id: 121330,
      name: 'Imperial Blue',
      logo: 'https://assets.pernod-ricard.com/styles/portefeuille_bouteilles_marques_desktop_1x/s3/marque_image_portfolio/imperial-blue-portfolio.png'
    },
    {
      id: 121331,
      name: '100 Pipers',
      logo: 'https://assets.pernod-ricard.com/styles/portefeuille_bouteilles_marques_desktop_1x/s3/marque_image_portfolio/100pipers.png'
    },
    {
      id: 121332,
      name: 'Imperial',
      logo: 'https://assets.pernod-ricard.com/styles/portefeuille_bouteilles_marques_desktop_1x/s3/marque_image_portfolio/imperial_0.png'
    },
    {
      id: 121333,
      name: 'Passport Scotch',
      logo: 'https://assets.pernod-ricard.com/styles/portefeuille_bouteilles_marques_desktop_1x/s3/marque_image_portfolio/passport.png'
    },
    {
      id: 121334,
      name: 'Clan Campell',
      logo: 'https://assets.pernod-ricard.com/styles/portefeuille_bouteilles_marques_desktop_1x/s3/marque_image_portfolio/clan-campbell.png'
    },
    {
      id: 121335,
      name: 'Seagram´s Gin',
      logo: 'https://assets.pernod-ricard.com/styles/portefeuille_bouteilles_marques_desktop_1x/s3/marque_image_portfolio/seagrams.png'
    },
    {
      id: 121336,
      name: 'Ramazzoti',
      logo: 'https://assets.pernod-ricard.com/styles/portefeuille_bouteilles_marques_desktop_1x/s3/marque_image_portfolio/ramazzotti.png'
    },
    {
      id: 121337,
      name: 'Pastis 51',
      logo: 'https://assets.pernod-ricard.com/styles/portefeuille_bouteilles_marques_desktop_1x/s3/marque_image_portfolio/pastis-51_520.png'
    },
    {
      id: 121338,
      name: 'Olmeca',
      logo: 'https://assets.pernod-ricard.com/styles/portefeuille_bouteilles_marques_desktop_1x/s3/marque_image_portfolio/olmeca.png'
    },
    {
      id: 121339,
      name: 'Ararat',
      logo: 'https://assets.pernod-ricard.com/styles/portefeuille_bouteilles_marques_desktop_1x/s3/marque_image_portfolio/ararat.png'
    },
    {
      id: 121340,
      name: 'Blenders Pride',
      logo: 'https://assets.pernod-ricard.com/styles/portefeuille_bouteilles_marques_desktop_1x/s3/marque_image_portfolio/blender-pride.png'
    },
    {
      id: 121341,
      name: 'Kahlua',
      logo: 'https://assets.pernod-ricard.com/styles/portefeuille_bouteilles_marques_desktop_1x/s3/marque_image_portfolio/khalua.png'
    }
  ],
  industries: [101314],
  securityType: SecurityType.ActionsPort,
  currency: Currency.EUR,
  isin: 'FR0000120693',
  wkn: '853373',
  symbol: 'PER.DE',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [Indices.CAC40],
  end_of_month_prices: prices,
  dividends,
  tags: ['Alkohol', 'Weine', 'Spirituosen', 'Whiskey', 'Rum', 'Branntweine', 'Anisprodukte', 'Liköre', 'Cognac', 'Brandy', 'Magenbitter']
};
// tslint:enable:max-line-length

