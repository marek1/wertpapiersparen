import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { SecurityType } from '../../../enums/securityType';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';

const dividends = [
  {year: 2018, rate: 2.04, yield: 1.86}, {year: 2017, rate: 1.53}, {year: 2016, rate: 1.50}, {
    year: 2015,
    rate: 1.11,
    yield: 0.95
  }, {year: 2014, rate: 1.02, yield: 1.12}, {year: 2013, rate: 0.94, yield: 1.22}, {year: 2012, rate: 0.88, yield: 1.16}, {
    year: 2011,
    rate: 0.85,
    yield: 1.56
  }, {year: 2010, rate: 0.83, yield: 1.72}, {year: 2009, rate: 0.70, yield: 1.68}, {year: 2008, rate: 0.66, yield: 1.97}, {
    year: 2007,
    rate: 0.62,
    yield: 1.42
  }
];
const prices = {};

// tslint:disable:max-line-length
export const essilorLuxotticaCompany: Company = {
  id: 1183,
  name: 'EssilorLuxottica S.A.',
  country: Country.Frankreich,
  city: 'Charenton-le-Pont',
  url: 'http://essilor-luxottica.com/',
  description: 'EssilorLuxottica entstand im Oktober 2018 aus der Fusion der Essilor International S.A. mit der Luxottica S.p.A. Es ist ein weltweit operierendes augenoptisches Unternehmen mit Hauptsitz in Charenton-le-Pont am Südrand von Paris. Seine Aktien werden Pariser Börse als Teil des CAC40 gehandelt.',
  link_wikipedia: 'https://de.wikipedia.org/wiki/EssilorLuxottica',
  logo: 'https://www.essilorluxottica.com/sites/default/files/images/2018-03/Essilorluxottica_Logo_Col_RGB.svg',
  products: [
    {
      id: 118310,
      name: 'Crizal',
      logo: 'https://www.essilorluxottica.com/sites/default/files/images/2018-03/img_EL_LT_Crizal.png'
    },
    {
      id: 118311,
      name: 'essilor',
      logo: 'https://www.essilorluxottica.com/sites/default/files/images/2018-03/img_EL_LT_Essilor.png'
    },
    {
      id: 118312,
      name: 'essilor sun solutions',
      logo: 'https://www.essilorluxottica.com/sites/default/files/images/2018-03/img_EL_LT_Essilor_Sun_Solution.png'
    },
    {
      id: 118313,
      name: 'Eyezen',
      logo: 'https://www.essilorluxottica.com/sites/default/files/images/2018-03/img_EL_LT_Eyezen.png'
    },
    {
      id: 118314,
      name: 'Kodak Lens',
      logo: 'https://www.essilorluxottica.com/sites/default/files/images/2018-03/img_EL_LT_Kodak_Lens.png'
    },
    {
      id: 118315,
      name: 'Oakley',
      logo: 'https://www.essilorluxottica.com/sites/default/files/images/2018-03/img_EL_DtC_Oakley_0.png'
    },
    {
      id: 118316,
      name: 'Optifog',
      logo: 'https://www.essilorluxottica.com/sites/default/files/images/2018-03/img_EL_LT_Optifog.png'
    },
    {
      id: 118317,
      name: 'Ray Ban',
      logo: 'https://www.essilorluxottica.com/sites/default/files/images/2018-07/img_EL_DtC_Ray_Ban_1.png'
    },
    {
      id: 118318,
      name: 'Transitions',
      logo: 'https://www.essilorluxottica.com/sites/default/files/images/2018-03/img_EL_LT_Transitions.png'
    },
    {
      id: 118319,
      name: 'Varilux',
      logo: 'https://www.essilorluxottica.com/sites/default/files/images/2018-03/img_EL_LT_Varilux.png'
    },
    {
      id: 118320,
      name: 'Xperio',
      logo: 'https://www.essilorluxottica.com/sites/default/files/images/2019-01/img_EL_LT_Xperio_0.png'
    }
  ],
  industries: [101412],
  securityType: SecurityType.ActionsPort,
  currency: Currency.EUR,
  isin: 'FR0000121667',
  wkn: '863195',
  symbol: 'ESL.DE ',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [Indices.EuroStoxx50],
  end_of_month_prices: prices,
  dividends,
  tags: ['Linsen', 'Brillengläser', 'Brillen']
};
// tslint:enable:max-line-length

