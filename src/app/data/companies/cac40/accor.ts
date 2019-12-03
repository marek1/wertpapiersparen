import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { SecurityType } from '../../../enums/securityType';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';

const dividends = [
  {year: 2018, rate: 1.05, yield: 2.89}, {year: 2017, rate: 1.05}, {year: 2016, rate: 1.05}, {
    year: 2015,
    rate: 1.00,
    yield: 2.22
  }, {year: 2014, rate: 0.95, yield: 2.54}, {year: 2013, rate: 0.80, yield: 2.33}, {year: 2012, rate: 0.76, yield: 2.85}, {
    year: 2011,
    rate: 1.15,
    yield: 5.87
  }, {year: 2010, rate: 0.62, yield: 1.86}, {year: 2009, rate: 1.05, yield: 2.75}, {year: 2008, rate: 1.65, yield: 4.70}, {
    year: 2007,
    rate: 1.65,
    yield: 3.02
  }
];
const prices = {
  '2019-11-30': {'1. open:': '37.03', '4. close:': '38.83'},
  '2018-12-30': {'1. open:': '42.94', '4. close:': '36.38'},
  '2017-12-30': {'1. open:': '35.45', '4. close:': '42.76'},
  '2016-12-30': {'1. open:': '39.50', '4. close:': '35.56'},
  '2015-12-30': {'1. open:': '37.29', '4. close:': '39.96'},
  '2014-12-30': {'1. open:': '34.22', '4. close:': '37.55'},
  '2013-12-30': {'1. open:': '26.56', '4. close:': '33.88'},
  '2012-12-30': {'1. open:': '19.55', '4. close:': '26.62'},
  '2011-12-30': {'1. open:': '33.43', '4. close:': '19.70'},
  '2010-12-30': {'1. open:': '38.31', '4. close:': '33.60'},
  '2009-12-30': {'1. open:': '35.14', '4. close:': '37.70'},
  '2008-12-30': {'1. open:': '55.00', '4. close:': '34.36'},
  '2007-12-30': {'1. open:': '59.39', '4. close:': '53.18'},
  '2006-12-30': {'1. open:': '46.00', '4. close:': '59.39'},
  '2005-12-30': {'1. open:': '32.10', '4. close:': '46.44'},
  '2004-12-30': {'1. open:': '35.50', '4. close:': '32.20'},
  '2003-12-30': {'1. open:': '28.00', '4. close:': '35.50'},
  '2002-12-30': {'1. open:': '40.00', '4. close:': '28.00'},
  '2001-12-30': {'1. open:': '44.00', '4. close:': '40.00'},
  '2000-12-30': {'1. open:': '48.00', '4. close:': '44.00'},
  '1999-12-30': {'1. open:': '36.10', '4. close:': '46.50'},
  '1998-12-30': {'1. open:': '33.75', '4. close:': '36.10'},
  '1997-12-30': {'1. open:': '26.38', '4. close:': '33.75'}
};

// tslint:disable:max-line-length
export const accorCompany: Company = {
  id: 1204,
  name: 'Accor S.A.',
  country: Country.Frankreich,
  city: 'Issy-les-Moulineaux',
  url: 'https://group.accor.com/en',
  description: 'Accor ist ein international tätiges französisches Unternehmen für Augmented Hospitality mit Sitz in Issy-les-Moulineaux. Es ist an der Euronext in Paris notiert und Bestandteil des Leitindex CAC 40. Das Unternehmen ist als Betreiber, Eigentümer und Investor von Hotels aktiv. 1967 wurde in Lille das erste Novotel-Hotel eröffnet, das den Grundstein für den Konzern bildete. In den 1970er Jahren expandierte das Unternehmen über Frankreich hinaus, und 2017 zählte Accor zu den größten Hotelketten weltweit mit 4.200 Hotels in 95 Ländern. In Europa ist das Unternehmen Marktführer.',
  link_wikipedia: 'https://de.wikipedia.org/wiki/Accor',
  link_stockPrices: 'https://www.boerse.de/historische-kurse/Accor-Aktie/FR0000120404',
  logo: 'https://group.accor.com/-/media/Corporate/Master-Page/Logos/logo-accor-group-header.png?h=46&w=252&la=en&hash=9C154357259AFA5BE010482A2FBECA43168618AE',
  products: [
    {
      id: 120410,
      name: 'Raffles',
      image: 'https://group.accor.com/-/media/Corporate/Hotel-development/Images/2016/10/17/logo-raffles.png'
    },
    {
      id: 120411,
      name: 'Orient Express',
      image: 'https://group.accor.com/-/media/Corporate/Group/Images-for-pages/Our-Brands-And-Services/Orient-Express/orientexpress_logo_carrousel_etagere.png'
    },
    {
      id: 120412,
      name: 'Banyan Tree',
      image: 'https://group.accor.com/-/media/Corporate/Hotel-development/Images/2017/09/21/logo-banyan-tree.png'
    },
    {
      id: 120413,
      name: 'Delano',
      image: 'https://group.accor.com/-/media/Corporate/Hotel-development/Images-for-pages/Powerful-Brands/Delano/logo_delano_neutralized.png'
    },
    {
      id: 120414,
      name: 'Sofitel Legend',
      image: 'https://group.accor.com/-/media/Corporate/Group/Images/2016/09/20/logo-sofitel-legend.png'
    },
    {
      id: 120415,
      name: 'Fairmont',
      image: 'https://group.accor.com/-/media/Corporate/Hotel-development/Images/2016/10/17/logo-fairmont.png'
    },
    {
      id: 120416,
      name: 'SLS',
      image: 'https://group.accor.com/-/media/Corporate/Group/Images-for-pages/Our-Brands-And-Services/SLS/logo_sls_neutralized.png'
    },
    {
      id: 120417,
      name: 'SO/',
      image: 'https://group.accor.com/-/media/Corporate/Group/Images-for-pages/Our-Brands-And-Services/So/so_logo_carrousel_etagere.png'
    },
    {
      id: 120418,
      name: 'Sofitel',
      image: 'https://group.accor.com/-/media/Corporate/Hotel-development/Images/2016/10/17/logo-sofitel.png'
    },
    {
      id: 120419,
      name: 'The house of originals',
      image: 'https://group.accor.com/-/media/Corporate/Group/Images-for-pages/Our-Brands-And-Services/The-House-Of-Originals/etagere-thehouseoforiginals.png'
    },
    {
      id: 120420,
      name: 'Rixos',
      image: 'https://group.accor.com/-/media/Corporate/Hotel-development/Images/2017/09/21/logo-rixos.png'
    },
    {
      id: 120421,
      name: 'onefinestay',
      image: 'https://group.accor.com/-/media/Corporate/Hotel-development/Images/2016/10/17/logo-onefinestay.png'
    },
    {
      id: 120422,
      name: 'mantis',
      image: 'https://group.accor.com/-/media/Corporate/Group/Images-for-pages/Our-Brands-And-Services/Mantis/mantis_logo_carrousel_etagere.png'
    },
    {
      id: 120423,
      name: 'M Gallery',
      image: 'https://group.accor.com/-/media/Corporate/Hotel-development/Images/2016/10/17/logo-m-gallery.png'
    },
    {
      id: 120424,
      name: 'Art Series',
      image: 'https://group.accor.com/-/media/Corporate/Group/Images-for-pages/Our-Brands-And-Services/Art-Series/artseries_logo_carrousel-etagere.png'
    },
    {
      id: 120425,
      name: 'Mondrian',
      image: 'https://group.accor.com/-/media/Corporate/Hotel-development/Images-for-pages/Powerful-Brands/Mondrian/logo_mondrian_neutralized.png'
    },
    {
      id: 120426,
      name: 'pullman',
      image: 'https://group.accor.com/-/media/Corporate/Hotel-development/Images/2016/10/17/logo-pullman.png'
    },
    {
      id: 120427,
      name: 'swissotel',
      image: 'https://group.accor.com/-/media/Corporate/Hotel-development/Images/2016/10/17/logo-swissotel.png'
    },
    {
      id: 120428,
      name: 'Angsana',
      image: 'https://group.accor.com/-/media/Corporate/Hotel-development/Images/2017/09/21/logo-angsana.png'
    },
    {
      id: 120429,
      name: 'twenty five hours hotels',
      image: 'https://group.accor.com/-/media/Corporate/Group/Images-for-pages/Our-Brands-And-Services/25hours/white-logo/25h_logo_blc.png'
    },
    {
      id: 120430,
      name: 'Hyde',
      image: 'https://group.accor.com/-/media/Corporate/Hotel-development/Images-for-pages/Powerful-Brands/Hyde/logo_hyde_neutralized.png'
    },
    {
      id: 120431,
      name: 'Mövenpick Hotel',
      image: 'https://group.accor.com/-/media/Corporate/Group/Images-for-pages/Our-Brands-And-Services/Movenpick/movenpick_logo_carrousel-etagere_def.png'
    },
    {
      id: 120432,
      name: 'Grand Mercure',
      image: 'https://group.accor.com/-/media/Corporate/Group/Images-for-pages/Our-Brands-And-Services/Grand-Mercure/grandmercure_logo_carrousel.png'
    },
    {
      id: 120433,
      name: 'Peppers',
      image: 'https://group.accor.com/-/media/Corporate/Group/Images-for-pages/Our-Brands-And-Services/Peppers/peppers_logo_carrousel_etagere.png'
    },
    {
      id: 120434,
      name: 'the Sebel',
      image: 'https://group.accor.com/-/media/Corporate/Group/Images/2016/09/20/logo-the-sebel.png'
    },
    {
      id: 120435,
      name: 'Mantra',
      image: 'https://group.accor.com/-/media/Corporate/Group/Images-for-pages/Our-Brands-And-Services/Mantra/mantra_logo_carrousel_etagere.png'
    },
    {
      id: 120436,
      name: 'Novotel',
      image: 'https://group.accor.com/-/media/Corporate/Group/Images/2016/09/20/logo-novotel.png'
    },
    {
      id: 120437,
      name: 'Mercure',
      image: 'https://group.accor.com/-/media/Corporate/Hotel-development/Images/2016/10/17/logo-mercure.png'
    },
    {
      id: 120438,
      name: 'adagio',
      image: 'https://group.accor.com/-/media/Corporate/Group/Images-for-pages/Our-Brands-And-Services/Adagio/logo-adagio-neutralise.png'
    },
    {
      id: 120439,
      name: 'Mama shelter',
      image: 'https://group.accor.com/-/media/Corporate/Hotel-development/Images/2016/10/17/logo-mama-shelter.png'
    },
    {
      id: 120440,
      name: 'Tribe',
      image: 'https://group.accor.com/-/media/Corporate/Group/Images-for-pages/Our-Brands-And-Services/Tribe/etagere-tribe.png'
    },
    {
      id: 120441,
      name: 'BreakFree',
      image: 'https://group.accor.com/-/media/Corporate/Group/Images-for-pages/Our-Brands-And-Services/BreakFree/breakfree_logo_carrousel_etagere.png'
    },
    {
      id: 120442,
      name: 'ibis',
      image: 'https://group.accor.com/-/media/Corporate/Hotel-development/Images/2016/10/17/logo-ibis.png'
    },
    {
      id: 120443,
      name: 'ibis styles',
      image: 'https://group.accor.com/-/media/Corporate/Hotel-development/Images/2016/10/17/logo-ibis-styles.png'
    },
    {
      id: 120444,
      name: 'ibis budget',
      image: 'https://group.accor.com/-/media/Corporate/Hotel-development/Images/2016/10/17/logo-ibis-budget.png'
    },
    {
      id: 120445,
      name: 'greet',
      image: 'https://group.accor.com/-/media/Corporate/our-brands/Images-for-pages/greet/greet-etagere.png'
    },
    {
      id: 120446,
      name: 'Jo&Joe',
      image: 'https://group.accor.com/-/media/Corporate/Group/Images-for-pages/Our-Brands-And-Services/Jo-And-Joe/white-logo/Jo_Joe_logo_Blc.png'
    },
    {
      id: 120447,
      name: 'hotelF1',
      image: 'https://group.accor.com/-/media/Corporate/Hotel-development/Images/2016/10/17/logo-hotel-f1.png'
    },
    {
      id: 120448,
      name: 'Mama works',
      image: 'https://group.accor.com/-/media/Corporate/Group/Images-for-pages/Our-Brands-And-Services/Mama-works/mamaworks_logo_carrousel.png'
    },
    {
      id: 120449,
      name: 'Potel Chabot',
      image: 'https://group.accor.com/-/media/Corporate/Group/Images-for-pages/Our-Brands-And-Services/Potel-et-Chabot/potel_chabot_logo_Blc_neutralise.png'
    },
    {
      id: 120450,
      name: 'Paris Society',
      image: 'https://group.accor.com/-/media/Corporate/Group/Images-for-pages/Our-Brands-And-Services/paris-society/parissociety.png'
    },
    {
      id: 120451,
      name: 'D-Edge',
      image: 'https://group.accor.com/-/media/Corporate/Group/Images-for-pages/Our-Brands-And-Services/D-EDGE/d-edge-carrousel.png'
    },
    {
      id: 120452,
      name: 'Very chic',
      image: 'https://group.accor.com/-/media/Corporate/Group/Images-for-pages/Our-Brands-And-Services/VeryChic/very-chic-carrousel-def.png'
    },
    {
      id: 120453,
      name: 'Gekko',
      image: 'https://group.accor.com/-/media/Corporate/Group/Images-for-pages/Our-Brands-And-Services/Gekko/gekko_logo_carrousel.png'
    },
    {
      id: 120454,
      name: 'ResDiary',
      image: 'https://group.accor.com/-/media/Corporate/Group/Images-for-pages/Our-Brands-And-Services/ResDiary/resdiary_logo_carrousel.png'
    },
    {
      id: 120455,
      name: 'John Paul',
      image: 'https://group.accor.com/-/media/Corporate/Group/Images-for-pages/Our-Brands-And-Services/John-Paul/white-logo/John_Paul_logo_neutralise.png'
    },
    {
      id: 120456,
      name: 'adoria',
      image: 'https://group.accor.com/-/media/Corporate/Group/Images-for-pages/Our-Brands-And-Services/Adoria/adoria_logo_carrousel.png'
    },
    {
      id: 120457,
      name: 'Thalassa',
      image: 'https://group.accor.com/-/media/Corporate/Group/Images-for-pages/Our-Brands-And-Services/Thalassa/Thalassa_etagere_carrousel.png'
    }
  ],
  industries: [101513],
  securityType: SecurityType.ActionsPort,
  currency: Currency.EUR,
  isin: 'FR0000120404',
  wkn: '860206',
  symbol: 'ACR.DE',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [Indices.CAC40],
  end_of_month_prices: prices,
  dividends,
  tags: ['Hotelgruppe']
};
// tslint:enable:max-line-length

