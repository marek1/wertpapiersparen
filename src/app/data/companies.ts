import { Company } from '../interfaces/company';
import { Currency } from '../enums/currencies';
import { Indices } from '../enums/indices';
import { adidasDividends, adidasPrices } from './historical/adidas';
import { Country } from '../enums/country';
import { allianzDividends, allianzPrices } from './historical/allianz';
import { basfDividends, basfPrices } from './historical/basf';
import { bayerDividends, bayerPrices } from './historical/bayer';
import { beiersdorfDividends, beiersdorfPrices } from './historical/beiersdorf';
import { bmwDividends, bmwPrices } from './historical/bmw';
import { continentalDividends, continentalPrices } from './historical/continental';
import { covestroDividends, covestroPrices } from './historical/covestro';
import { ResponsibilityType } from '../enums/responsibility';
import { daimlerDividends, daimlerPrices } from './historical/daimler';
import { deutscheBankDividends, deutscheBankPrices } from './historical/deutscheBank';
import { deutscheBoerseDividends, deutscheBoersePrices } from './historical/deutscheBoerse';
import { deutschePostDividends, deutschePostPrices } from './historical/deutschePost';

export const companies: Company[] = [
  {
    id: 1000,
    name: 'Adidas AG',
    country: Country.Deutschland,
    city: 'München',
    description: 'Die Adidas AG ist ein international tätiger deutscher Sportartikelhersteller mit Sitz in Herzogenaurach',
    link_wikipedia: 'https://de.wikipedia.org/wiki/Adidas',
    logo: 'https://www.adidas-group.com/media/filer_public_thumbnails/filer_public/49/36/493649a2-ca5a-445d-b077-792bbf82c63c/core.jpg__243x0_q85_crop-smart_subsampling-2.jpg',
    products: [
      {
        id: 100010,
        name: 'Adidas Sportkleidung',
        logo: 'https://www.adidas-group.com/media/filer_public_thumbnails/filer_public/49/36/493649a2-ca5a-445d-b077-792bbf82c63c/core.jpg__243x0_q85_crop-smart_subsampling-2.jpg'
      },
      {
        id: 100011,
        name: 'Rebook',
        logo: 'https://www.adidas-group.com/media/filer_public_thumbnails/filer_public/3b/82/3b82d7a0-0303-4d35-9820-32b622a81f03/body_vector_logo_navy.png__243x0_q85_crop-smart_subsampling-2.png'
      },
      {
        id: 100012,
        name: 'Runtastic',
        logo: 'https://d1ki59phkeobjj.cloudfront.net/rt-ember/ember-cli-runtastic-commons/assets/adidas-runtastic-logo-4de5d4eff5d4a6f5d7fa07c5061f014c.png'
      }
    ],
    industries: [101110, 101111, 2010],
    currency: Currency.EUR,
    isin: 'DE000A1EWWW0',
    wkn: 'A1EWWW',
    symbol: 'ADS.DE',
    smallestTradeableUnit: 1,
    otherTradeableProducts: [
      {
        name: 'Adidas ADR',
        isin: 'US00687A1079'
      }
    ],
    current_indices: [Indices.DAX, Indices.EuroStoxx50],
    end_of_month_prices: adidasPrices,
    dividends: adidasDividends,
    tags: ['sportartikel', 'sportkleidung'],
    responsibilityAttributes: [
      {
        result: '58 / 100 Punkten (13.Platz)',
        responsibilityType: ResponsibilityType.Nachhaltigkeit,
        issuer: 'Globalance Bank',
        ranking: 'Globalance Footprint'
      },
      {
        result: '16,5 / 25 Punkte (4. Platz)',
        responsibilityType: ResponsibilityType.Ethik,
        issuer: 'Kirchhoff',
        ranking: 'GOOD COMPANY RANKING 2018 / Gesellschaft',
        link: 'https://www.kirchhoff.de/fileadmin/20_Download/Studien/20180924_CGR_final.pdf'
      }
    ]
  },
  {
    id: 1001,
    name: 'Allianz SE',
    country: Country.Deutschland,
    description: 'Die Allianz SE mit Sitz in München ist ein 1890 gegründeter, börsennotierter Versicherungskonzern und nach Umsatz einer der weltgrößten',
    link_wikipedia: 'https://de.wikipedia.org/wiki/Allianz_SE',
    logo: 'https://www.allianz.com/content/dam/onemarketing/azcom/Allianz_com/press/media-database/allianz_logo.jpg',
    products: [
      {
        id: 100110,
        name: 'Allianz Versicherungen',
        logo: 'https://www.allianz.com/content/dam/onemarketing/azcom/Allianz_com/press/media-database/allianz_logo.jpg'
      },
      {
        id: 100111,
        name: 'Allsecur / Allianz Direkt Versicherung',
      },
      {
        id: 100112,
        name: 'Pimco'
      },
      {
        id: 100113,
        name: 'Euler Hermes'
      }
    ],
    industries: [141210],
    currency: Currency.EUR,
    isin: 'DE0008404005',
    wkn: '840400',
    symbol: 'ALV.DE',
    smallestTradeableUnit: 1,
    otherTradeableProducts: [
      {
        name: 'Allianz S',
        isin: 'US0188051017'
      }
    ],
    current_indices: [Indices.DAX, Indices.EuroStoxx50],
    end_of_month_prices: allianzPrices,
    dividends: allianzDividends,
    tags: ['Versicherung', 'Versicherungen', 'Haftpflichversicherung', 'Lebensversicherung', 'Hausratversicherung'],
    responsibilityAttributes: [
      {
        result: '89 / 100 Punkten (1.Platz)',
        responsibilityType: ResponsibilityType.Nachhaltigkeit,
        issuer: 'Globalance Bank',
        ranking: 'Globalance Footprint'
      },
      {
        result: '15,6 / 25 Punkte (10. Platz)',
        responsibilityType: ResponsibilityType.Ethik,
        issuer: 'Kirchhoff',
        ranking: 'GOOD COMPANY RANKING 2018 / Gesellschaft',
        link: 'https://www.kirchhoff.de/fileadmin/20_Download/Studien/20180924_CGR_final.pdf'
      }
    ]
  },
  {
    id: 1002,
    name: 'BASF SE',
    country: Country.Deutschland,
    city: 'Ludwigshafen',
    description: 'Die BASF SE (ehemals Badische Anilin- & Soda-Fabrik) ist ein börsennotierter Chemiekonzern und der nach Umsatz weltweit größte Chemiekonzern.',
    link_wikipedia: 'https://de.wikipedia.org/wiki/BASF',
    logo: 'https://www.basf.com/global/images/news-media/multimedia/BASF-Logo.jpg.dynamic.1280w720h.3ec78282ee874c98c219fe271d56d2e00fffd423.jpeg',
    products: [
      {
        id: 100210,
        name: 'Oppanol B'
      },
      {
        id: 100211,
        name: 'Glysantin'
      },
      {
        id: 100212,
        name: 'AUS32 (Adblue)'
      },
      {
        id: 100213,
        name: 'Styropor'
      },
      {
        id: 100214,
        name: 'Amflora'
      },
      {
        id: 100215,
        name: 'Fortuna'
      },
      {
        id: 100216,
        name: 'Uvinul'
      },
      {
        id: 100217,
        name: 'Tinuvin®'
      },
      {
        id: 100218,
        name: 'Elastopir®'
      },
      {
        id: 100219,
        name: 'Neopor'
      },
      {
        id: 100220,
        name: 'Buna'
      }
    ],
    industries: [1510, 1512, 171011, 171310, 111315],
    currency: Currency.EUR,
    isin: 'DE000BASF111',
    wkn: 'BASF11',
    symbol: 'BAS.DE',
    smallestTradeableUnit: 1,
    otherTradeableProducts: [
      {
        name: 'BASF ADR',
        isin: 'US0552625057'
      }
    ],
    current_indices: [Indices.DAX, Indices.EuroStoxx50],
    end_of_month_prices: basfPrices,
    dividends: basfDividends,
    tags: ['Chemie', 'Spezialchemie', 'Industriechemikalien', 'Kunststoffe', 'Pflanzenschutzmittel', 'Öl', 'Gas'],
    responsibilityAttributes: [
      {
        result: '39 / 100 Punkten (20.Platz)',
        responsibilityType: ResponsibilityType.Nachhaltigkeit,
        issuer: 'Globalance Bank',
        ranking: 'Globalance Footprint'
      },
      {
        result: '14,7 / 25 Punkte (21. Platz)',
        responsibilityType: ResponsibilityType.Ethik,
        issuer: 'Kirchhoff',
        ranking: 'GOOD COMPANY RANKING 2018 / Gesellschaft',
        link: 'https://www.kirchhoff.de/fileadmin/20_Download/Studien/20180924_CGR_final.pdf'
      }
    ]
  },
  {
    id: 1003,
    name: 'Bayer AG',
    country: Country.Deutschland,
    city: 'Leverkusen',
    description: 'Die Bayer Aktiengesellschaft[1] (kurz Bayer AG) ist ein divisional gegliedertes Unternehmen, das aus 420 Gesellschaften[4] mit insgesamt 116.998 Mitarbeitern besteht (Stand: Jahresende 2018)',
    link_wikipedia: 'https://de.wikipedia.org/wiki/Bayer_AG',
    logo: 'https://shared.bayer.com/img/bayer-logo.svg',
    products: [
      {
        id: 100310,
        name: 'Xarelto'
      },
      {
        id: 100311,
        name: 'Eylea'
      },
      {
        id: 100312,
        name: 'Kogenate / Kovaltry,'
      },
      {
        id: 100313,
        name: 'Claritin'
      },
      {
        id: 100314,
        name: 'Aleve'
      },
      {
        id: 100315,
        name: 'Bepanthen / Bepanthol'
      },
      {
        id: 100316,
        name: 'Aspirin',
        logo: 'https://www.aspirin.de/static/media/images/product/aspirin_tablette_thumb.png'
      },
      {
        id: 100317,
        name: 'Glyphosat'
      }
    ],
    industries: [1510, 1512, 1513, 1514, 1610, 161210, 171011],
    currency: Currency.EUR,
    isin: 'DE000BAY0017',
    wkn: 'BAY001',
    symbol: 'BAYN.DE',
    smallestTradeableUnit: 1,
    otherTradeableProducts: [
      {
        name: 'Bayer ADR',
        isin: 'US0727303028'
      }
    ],
    current_indices: [Indices.DAX, Indices.EuroStoxx50],
    end_of_month_prices: bayerPrices,
    dividends: bayerDividends,
    tags: ['Chemie', 'Monsanto', 'Spezialchemie', 'Pharma', 'LifeScience', 'Kunststoffe', 'Medizinische Produkte', 'Medizintechnik', 'Biotechnologie'],
    responsibilityAttributes: [
      {
        result: '38 / 100 Punkten (22.Platz)',
        responsibilityType: ResponsibilityType.Nachhaltigkeit,
        issuer: 'Globalance Bank',
        ranking: 'Globalance Footprint'
      },
      {
        result: '14,3 / 25 Punkte (23. Platz)',
        responsibilityType: ResponsibilityType.Ethik,
        issuer: 'Kirchhoff',
        ranking: 'GOOD COMPANY RANKING 2018 / Gesellschaft',
        link: 'https://www.kirchhoff.de/fileadmin/20_Download/Studien/20180924_CGR_final.pdf'
      }
    ]
  },
  {
    id: 1004,
    name: 'Beiersdorf AG',
    country: Country.Deutschland,
    city: 'Hamburg',
    description: 'Die Beiersdorf AG ist ein börsennotierter weltweit tätiger deutscher Konsumgüterkonzern mit Sitz in Hamburg-Eimsbüttel, der sich im Mehrheitsbesitz der Maxingvest AG, eines Holdingunternehmens der Familie Herz, befindet. Unter anderem gehören Marken wie 8×4, Nivea, Tesa, Labello, Eucerin und Hansaplast zur Beiersdorf AG.',
    link_wikipedia: 'https://de.wikipedia.org/wiki/Beiersdorf_AG',
    logo: 'https://www.beiersdorf.de/~/images/MAM/Beiersdorf-Press-Center/Press_Information/Press_Releases_-_German/08.01.2014_Beiersdorf_Logo_in_neuem_Design/BDF_Logo_negativeWhite-77629-2.jpg?mw=320&mh=179',
    products: [
      {
        id: 100410,
        name: 'Nivea',
        logo: 'https://www.beiersdorf.de/~/media/Beiersdorf/local/de/brands/teaser/NIVEA-Produkte-Beiersdorf.png?mw=460&mh=260&highRes=1'
      },
      {
        id: 100411,
        name: 'Eucerin',
        logo: 'https://www.beiersdorf.de/~/media/Beiersdorf/local/de/brands/teaser/Eucerin-Creme-Beiersdorf.png?mw=460&mh=260&highRes=1'
      },
      {
        id: 100412,
        name: 'La Prairie',
        logo: 'https://www.beiersdorf.de/~/media/Beiersdorf/local/de/brands/teaser/La-Prairie-Produkte-Beiersdorf.png?mw=460&mh=260&highRes=1'
      },
      {
        id: 100413,
        name: 'Labello',
        logo: 'https://www.beiersdorf.de/~/media/Beiersdorf/brands/brands/labello/archive/labello-classic-5.jpg?mw=460&mh=260&highRes=1'
      },
      {
        id: 100414,
        name: 'Hansaplast',
        logo: 'https://www.beiersdorf.de/~/media/Beiersdorf/local/de/brands/brands/hansaplast/Hansaplast-Aqua-Protect-Teaser.png?mw=460&mh=260&highRes=1'
      },
      {
        id: 100415,
        name: '8X4',
        logo: 'https://www.beiersdorf.de/~/media/Beiersdorf/brands/brands/8x4/Beiersdorf-8X4-logo.png?mw=460&mh=260&highRes=1'
      },
      {
        id: 100416,
        name: 'Florena',
        logo: 'https://www.beiersdorf.de/~/media/Beiersdorf/local/de/brands/brands/florena/refresh-2016/Beiersdorf-teaser-Florena-Dose.jpg?mw=460&mh=260&highRes=1'
      },
      {
        id: 100417,
        name: 'Coppertone',
        logo: 'https://www.beiersdorf.de/~/media/Beiersdorf/brands/brands/coppertone/Beiersdorf-coppertone-logo-teaser.png?mw=460&mh=260&highRes=1'
      },
      {
        id: 100418,
        name: 'HIDROFUGAL',
        logo: 'https://www.beiersdorf.de/~/media/Beiersdorf/local/de/brands/overview/hidrofugal-logo.jpg?mw=460&mh=260&highRes=1'
      },
      {
        id: 100419,
        name: 'Tesa',
        logo: 'https://www.beiersdorf.de/~/media/Beiersdorf/local/de/brands/overview/tesa-ecoLogo-Handabroller-quer-Beiersdorf.jpg?mw=460&mh=260&highRes=1'
      },
      {
        id: 100420,
        name: 'GAMMON',
        logo: 'https://www.beiersdorf.de/~/media/Beiersdorf/local/de/brands/overview/Beiersdorf-gammon.png?mw=460&mh=260&highRes=1'
      }
    ],
    industries: [1010, 1911],
    currency: Currency.EUR,
    isin: 'DE0005200000',
    wkn: '520000',
    symbol: 'BEI.DE',
    smallestTradeableUnit: 1,
    otherTradeableProducts: [],
    current_indices: [Indices.DAX],
    end_of_month_prices: beiersdorfPrices,
    dividends: beiersdorfDividends,
    tags: ['Hautprodukte', 'Schönheitsprodukte', 'Pflegeprodukte'],
    responsibilityAttributes: [
      {
        result: '66 / 100 Punkten (5.Platz)',
        responsibilityType: ResponsibilityType.Nachhaltigkeit,
        issuer: 'Globalance Bank',
        ranking: 'Globalance Footprint'
      },
      {
        result: '15,1 / 25 Punkte (17. Platz)',
        responsibilityType: ResponsibilityType.Ethik,
        issuer: 'Kirchhoff',
        ranking: 'GOOD COMPANY RANKING 2018 / Gesellschaft',
        link: 'https://www.kirchhoff.de/fileadmin/20_Download/Studien/20180924_CGR_final.pdf'
      }
    ]
  },
  {
    id: 1005,
    name: 'Bayerische Motoren Werke Aktiengesellschaft (BMW AG)',
    country: Country.Deutschland,
    city: 'München',
    description: 'Die Bayerische Motoren Werke Aktiengesellschaft (BMW AG) ist ein weltweit operierender, börsennotierter Automobil- und Motorradhersteller mit Sitz in München. Die Produktpalette umfasst die Automobil- und Motorrad-Marke BMW, die Automarken Mini und Rolls-Royce sowie die BMW-Submarken BMW M und BMW i.',
    link_wikipedia: 'https://de.wikipedia.org/wiki/BMW',
    logo: 'https://www.bmwgroup.com/etc.clientlibs/bmwgroup/clientlibs/clientlib-site/resources/img/brands/group.png',
    products: [
      {
        id: 100510,
        name: 'BMW',
        logo: 'https://www.bmwgroup.com/etc.clientlibs/bmwgroup/clientlibs/clientlib-site/resources/img/brands/bmw_logo.png'
      },
      {
        id: 100511,
        name: 'MINI',
        logo: 'https://www.bmwgroup.com/etc.clientlibs/bmwgroup/clientlibs/clientlib-site/resources/img/brands/mini_logo.png'
      },
      {
        id: 100512,
        name: 'Rolls Royce',
        logo: 'https://www.bmwgroup.com/etc.clientlibs/bmwgroup/clientlibs/clientlib-site/resources/img/brands/rollsroyce_logo.png'
      },
      {
        id: 100513,
        name: 'DriveNow',
        logo: 'https://www.bmwgroup.com/etc.clientlibs/bmwgroup/clientlibs/clientlib-site/resources/img/brands/drivenow_logo.png'
      },
      {
        id: 100514,
        name: 'ReachNow',
        logo: 'https://www.bmwgroup.com/etc.clientlibs/bmwgroup/clientlibs/clientlib-site/resources/img/brands/ReachNow_Logo_positiv_RGB_farbiggrau_33px.png'
      },
      {
        id: 100515,
        name: 'ParkNow',
        logo: 'https://www.bmwgroup.com/etc.clientlibs/bmwgroup/clientlibs/clientlib-site/resources/img/brands/parknow_logo.png'
      },
      {
        id: 100516,
        name: 'ChargeNow',
        logo: 'https://www.bmwgroup.com/etc.clientlibs/bmwgroup/clientlibs/clientlib-site/resources/img/brands/chargenow_logo.png'
      },
      {
        id: 100517,
        name: 'Digital Energy Solutions',
        logo: 'https://www.bmwgroup.com/etc.clientlibs/bmwgroup/clientlibs/clientlib-site/resources/img/brands/DES_Logo.png'
      }
    ],
    industries: [121111, 121112, 121113, 121114, 141017],
    currency: Currency.EUR,
    isin: 'DE0005190003',
    wkn: '519000',
    symbol: 'BMW.DE',
    smallestTradeableUnit: 1,
    otherTradeableProducts: [
      {
        name: 'BMW ADR',
        isin: 'US0727432066'
      }
    ],
    current_indices: [Indices.DAX, Indices.EuroStoxx50],
    end_of_month_prices: bmwPrices,
    dividends: bmwDividends,
    tags: ['Automobile', 'Motorräder', 'BMW', 'Rolls-Royce', 'MINI', 'Finanzleistungen', 'Mobilität'],
    responsibilityAttributes: [
      {
        result: '46 / 100 Punkten (15.Platz)',
        responsibilityType: ResponsibilityType.Nachhaltigkeit,
        issuer: 'Globalance Bank',
        ranking: 'Globalance Footprint'
      },
      {
        result: '14,8 / 25 Punkte (20. Platz)',
        responsibilityType: ResponsibilityType.Ethik,
        issuer: 'Kirchhoff',
        ranking: 'GOOD COMPANY RANKING 2018 / Gesellschaft',
        link: 'https://www.kirchhoff.de/fileadmin/20_Download/Studien/20180924_CGR_final.pdf'
      }
    ]
  },
  {
    id: 1006,
    name: 'Continental AG',
    country: Country.Deutschland,
    city: 'Hannover',
    description: 'Continental hat sich von einem reinen Reifenhersteller zu einem der größten Automobilzulieferer entwickelt und ist nach der Robert Bosch GmbH der größte Automobilzulieferer der Welt.',
    link_wikipedia: 'https://de.wikipedia.org/wiki/Continental_AG',
    logo: 'https://www.ci-portal.de/wp-content/uploads/continental.jpg',
    products: [
      {
        id: 100610,
        name: 'Continental Reifen',
        logo: 'https://www.continental.com/resource/image/135608/landscape_ratio16x9/272/153/cec0521818777f2d2eab9ce80ece2073/YB/tire-teaser-ab-test-kandidat-6-aiba.jpg'
      },
      {
        id: 100611,
        name: 'ATE'
      },
      {
        id: 100612,
        name: 'Barum'
      },
      {
        id: 100613,
        name: 'Temic'
      },
      {
        id: 100614,
        name: 'Teves'
      },
      {
        id: 100615,
        name: 'VDO'
      }
    ],
    industries: [121110],
    currency: Currency.EUR,
    isin: 'DE0005439004',
    wkn: '543900',
    symbol: 'CON.DE',
    smallestTradeableUnit: 1,
    otherTradeableProducts: [
      {
        name: 'Continental AG  Bearer Shares',
        isin: 'US2107712000'
      }
    ],
    current_indices: [Indices.DAX],
    end_of_month_prices: continentalPrices,
    dividends: continentalDividends,
    tags: ['Reifen', 'Fahrzeugindustrie', 'Reifen', 'Bremssysteme', 'Fahrdynamikregelungen', 'Luftfedersysteme'],
    responsibilityAttributes: [
      {
        result: '43 / 100 Punkten (16.Platz)',
        responsibilityType: ResponsibilityType.Nachhaltigkeit,
        issuer: 'Globalance Bank',
        ranking: 'Globalance Footprint'
      },
      {
        result: '16,2 / 25 Punkte (7. Platz)',
        responsibilityType: ResponsibilityType.Ethik,
        issuer: 'Kirchhoff',
        ranking: 'GOOD COMPANY RANKING 2018 / Gesellschaft',
        link: 'https://www.kirchhoff.de/fileadmin/20_Download/Studien/20180924_CGR_final.pdf'
      }
    ]
  },
  {
    id: 1007,
    name: 'Covestro',
    country: Country.Deutschland,
    city: 'Leverkusen',
    description: 'Die Covestro AG ist ein börsennotierter Werkstoffhersteller mit Sitz in Leverkusen. Das Unternehmen ist 2015 aus der ehemaligen Kunststoffsparte der Bayer AG hervorgegangen und firmierte bis dahin unter Bayer MaterialScience; es entwickelt, produziert und vertreibt Polymer-Werkstoffe an etwa 30 Standorten in Europa, Asien und Amerika. 2018 erzielte das Unternehmen einen Jahresumsatz von 14,6 Milliarden Euro',
    link_wikipedia: 'https://de.wikipedia.org/wiki/Covestro',
    logo: 'https://www.covestro.com/-/media/covestro/shared-library/logo/covestro-logo.png?la=de&hash=07D75E282471081C7E0E2D1CE0EC9B5B651EE665',
    products: [
      {
        id: 100710,
        name: 'Makrolon'
      }
    ],
    industries: [171011, 171012],
    currency: Currency.EUR,
    isin: 'DE0006062144',
    wkn: '606214',
    symbol: '1COV.DE',
    smallestTradeableUnit: 1,
    otherTradeableProducts: [
      {
        name: 'COVESTRO AG SP.ADR 1/2',
        isin: 'US22304D2071'
      }
    ],
    current_indices: [Indices.DAX],
    end_of_month_prices: covestroPrices,
    dividends: covestroDividends,
    tags: ['Polymerwerkstoffe', 'Polycarbonat', 'Klebstoffe', 'Lacke', 'Bindemittel'],
    responsibilityAttributes: [
      {
        result: '43 / 100 Punkten (16.Platz)',
        responsibilityType: ResponsibilityType.Nachhaltigkeit,
        issuer: 'Globalance Bank',
        ranking: 'Globalance Footprint'
      },
      {
        result: '14,0 / 25 Punkte (26. Platz)',
        responsibilityType: ResponsibilityType.Ethik,
        issuer: 'Kirchhoff',
        ranking: 'GOOD COMPANY RANKING 2018 / Gesellschaft',
        link: 'https://www.kirchhoff.de/fileadmin/20_Download/Studien/20180924_CGR_final.pdf'
      }
    ]
  },
  {
    id: 1008,
    nnme: 'Daimler AG',
    country: Country.Deutschland,
    city: 'Stuttgart',
    description: 'Die Daimler AG mit Sitz in Stuttgart ist ein börsennotierter deutscher Hersteller von Personenkraftwagen und Nutzfahrzeugen. Ihre bekannteste Marke ist Mercedes-Benz. Das Unternehmen ist außerdem Anbieter von Mobilitäts- und Finanzdienstleistungen.',
    link_wikipedia: 'https://de.wikipedia.org/wiki/Daimler_AG',
    logo: 'https://designnavigator.daimler.com/img/template/brand_mark_daimler_x2.png',
    products: [
      {
        id: 100810,
        name: 'Mercedes Benz',
        logo: 'https://media.daimler.com/marsMediaSite/scr/cache/7517029v1tv3/D204359-Mercedes-Benz---Logo.jpg'
      },
      {
        id: 100811,
        name: 'Smart',
        logo: 'https://www.daimler.com/bilder/misc/markenlogos/smart-logo-w126xh70.png'
      },
      {
        id: 100812,
        name: 'Fuso',
        logo: 'https://www.daimler.com/bilder/misc/markenlogos/fuso-logo-w126xh70.png'
      },
      {
        id: 100813,
        name: 'AMG',
        logo: 'https://www.daimler.com/bilder/misc/markenlogos/mercedes-amg-logo-w126xh70.png'
      },
      {
        id: 100814,
        name: 'Maybach',
        logo: 'https://www.daimler.com/bilder/misc/markenlogos/mercedes-maybach-logo-w126xh70.png'
      },
      {
        id: 100815,
        name: 'EQ',
        logo: 'https://www.daimler.com/bilder/misc/markenlogos/mercedes-benz-eq-logo-w126xh70.png'
      },
      {
        id: 100816,
        name: 'Freightliner',
        logo: 'https://www.daimler.com/bilder/misc/markenlogos/freightliner-logo-w126xh70.png'
      },
      {
        id: 100817,
        name: 'Western Star',
        logo: 'https://www.daimler.com/bilder/misc/markenlogos/western-star-logo-w126xh70.png'
      },
      {
        id: 100818,
        name: 'Setra',
        logo: 'https://www.daimler.com/bilder/misc/markenlogos/setra-logo-w126xh70.png'
      },
      {
        id: 100819,
        name: 'ShareNow'
      },
      {
        id: 100820,
        name: 'ReachNow'
      },
      {
        id: 100821,
        name: 'FreeNow'
      }
    ],
    industries: [121111, 121113, 121114, 141017],
    currency: Currency.EUR,
    isin: 'DE0007100000',
    wkn: '710000',
    symbol: 'DAI.DE',
    smallestTradeableUnit: 1,
    otherTradeableProducts: [
      {
        name: 'DAIMLER AG ADRS/1',
        isin: 'US2338252073'
      }
    ],
    current_indices: [Indices.DAX, Indices.EuroStoxx50],
    end_of_month_prices: daimlerPrices,
    dividends: daimlerDividends,
    tags: ['Automobilhersteller', 'Personenkraftwagen', 'Nutzfahrzeuge', 'Finanzdienstleistungen'],
    responsibilityAttributes: [
      {
        result: '41 / 100 Punkten (18.Platz)',
        responsibilityType: ResponsibilityType.Nachhaltigkeit,
        issuer: 'Globalance Bank',
        ranking: 'Globalance Footprint'
      },
      {
        result: '13,8 / 25 Punkte (27. Platz)',
        responsibilityType: ResponsibilityType.Ethik,
        issuer: 'Kirchhoff',
        ranking: 'GOOD COMPANY RANKING 2018 / Gesellschaft',
        link: 'https://www.kirchhoff.de/fileadmin/20_Download/Studien/20180924_CGR_final.pdf'
      }
    ]
  },
  {
    id: 1009,
    name: 'Deutsche Bank AG',
    country: Country.Deutschland,
    city: 'Frankfurt',
    description: 'Die Deutsche Bank AG (Audio-Datei / Hörbeispiel Anhören?/i) ist das nach Bilanzsumme und Mitarbeiterzahl größte Kreditinstitut Deutschlands. Das Unternehmen mit Sitz in Frankfurt am Main ist als Universalbank tätig und unterhält bedeutende Niederlassungen in London, New York City, Singapur, Hongkong und Sydney.',
    link_wikipedia: 'https://de.wikipedia.org/wiki/Deutsche_Bank',
    logo:  'https://www.db.com/company/img/db_logo.gif',
    products: [
      {
        id: 100910,
        name: 'Deutsche Bank',
        logo:  'https://www.db.com/company/img/db_logo.gif'
      },
      {
        id: 100911,
        name: 'DWS',
        logo: 'https://www.dws.de/globalassets/media-gallery/images/logos/dws_logo_global.svg'
      },
      {
        id: 100912,
        name: 'Postbank',
        logo: 'https://www.postbank.de/postbank/images/PB_Zentrale_sRGB_219.jpg'
      },
      {
        id: 100913,
        name: 'Norisbank',
        logo: 'https://meine.norisbank.de/trxmcontent/19.42.0.0_PR41-76f6407a359/global/noris/images/logo.gif'
      }
    ],
    industries: [141010, 141011],
    currency: Currency.EUR,
    isin: 'DE0005140008',
    wkn: '514000',
    symbol: 'DBK.DE',
    smallestTradeableUnit: 1,
    otherTradeableProducts: [],
    current_indices: [Indices.DAX],
    end_of_month_prices: deutscheBankPrices,
    dividends: deutscheBankDividends,
    tags: ['Bank'],
    responsibilityAttributes: [
      {
        result: '39 / 100 Punkten (20.Platz)',
        responsibilityType: ResponsibilityType.Nachhaltigkeit,
        issuer: 'Globalance Bank',
        ranking: 'Globalance Footprint'
      },
      {
        result: '11,8 / 25 Punkte (29. Platz)',
        responsibilityType: ResponsibilityType.Ethik,
        issuer: 'Kirchhoff',
        ranking: 'GOOD COMPANY RANKING 2018 / Gesellschaft',
        link: 'https://www.kirchhoff.de/fileadmin/20_Download/Studien/20180924_CGR_final.pdf'
      }
    ]
  },
  {
    id: 1010,
    name: 'Deutsche Börse AG',
    country: Country.Deutschland,
    city: 'Frankfurt',
    description: 'Die Deutsche Börse AG ist eine deutsche Aktiengesellschaft mit Sitz in Frankfurt am Main. Kerngeschäft ist die Entwicklung und der Betrieb von Handelsplattformen, Teilnehmernetzwerken und Abwicklungssystemen für Börsen. ',
    link_wikipedia: 'https://de.wikipedia.org/wiki/Deutsche_B%C3%B6rse'
    logo: 'https://upload.wikimedia.org/wikipedia/de/thumb/8/87/Deutsche_B%C3%B6rse_Group_Logo.svg/500px-Deutsche_B%C3%B6rse_Group_Logo.svg.png',
    products: [
      {
        id: 101010,
        name: 'Börse Frankfurt',
        logo: 'https://www.deutsche-boerse.com/resource/blob/1597396/5488932901d7495eef60ae4b8a101e92/data/boerse-frankfurt.jpg'
      },
      {
        id: 101011,
        name: 'Xetra',
        logo: 'https://www.deutsche-boerse.com/resource/blob/1597408/3e98c9122af9d2b7885bc5fef5484c73/data/xetra.jpg'
      },
      {
        id: 101012,
        name: 'Eurex',
        logo: 'https://www.deutsche-boerse.com/resource/blob/1597402/18c1434414f2306965211d5aa04f99a2/data/eurex.jpg'
      },
      {
        id: 101013,
        name: 'Clearstream',
        logo: 'https://www.deutsche-boerse.com/resource/blob/1597398/008750264a71be93865988219f46941c/data/clearstream.jpg'
      },
      {
        id: 101014,
        name: 'EEX',
        logo: 'https://www.deutsche-boerse.com/resource/blob/1597400/9d7362a908ee0cac0198ed58ed3c58a0/data/eex.jpg'
      }
    ],
    industries: [1411],
    currency: Currency.EUR,
    isin: 'DE0005810055',
    wkn: '581005',
    symbol: 'DB1.DE',
    smallestTradeableUnit: 1,
    otherTradeableProducts: [],
    current_indices: [Indices.DAX, Indices.EuroStoxx50],
    end_of_month_prices: deutscheBoersePrices,
    dividends: deutscheBoerseDividends,
    tags: ['Börse', 'Börsenplatz'],
    responsibilityAttributes: [
      {
        result: '85 / 100 Punkten (3.Platz)',
        responsibilityType: ResponsibilityType.Nachhaltigkeit,
        issuer: 'Globalance Bank',
        ranking: 'Globalance Footprint'
      },
      {
        result: '14,2 / 25 Punkte (24. Platz)',
        responsibilityType: ResponsibilityType.Ethik,
        issuer: 'Kirchhoff',
        ranking: 'GOOD COMPANY RANKING 2018 / Gesellschaft',
        link: 'https://www.kirchhoff.de/fileadmin/20_Download/Studien/20180924_CGR_final.pdf'
      }
    ]
  },
  {
    id: 1011,
    name: 'Deutsche Post AG',
    country: Country.Deutschland,
    city: 'Bonn',
    description: 'Die Deutsche Post AG mit Sitz in Bonn ist ein deutsches Logistik- und Postunternehmen. Das Unternehmen entstand 1995 durch Privatisierung der früheren Behörde Deutsche Bundespost und ist seit 2000 Bestandteil des deutschen Leitindexes DAX an der Frankfurter Wertpapierbörse',
    link_wikipedia: 'https://de.wikipedia.org/wiki/Deutsche_Post_AG',
    logo: 'https://www.dpdhl.com/content/dam/dpdhl/en/logos/official_dpdhllogo.svg',
    products: [
      {
        id: 101110,
        name: 'Deutsche Post',
        logo: 'https://www.dpdhl.com/content/dam/dpdhl/en/logos/deutsche-post-logo.svg'
      },
      {
        id: 101111,
        name: 'DHL',
        logo: 'https://www.dpdhl.com/content/dam/dpdhl/en/logos/dhl-logo.svg'
      }
    ],
    industries: [1219],
    currency: Currency.EUR,
    isin: 'DE0005552004',
    wkn: '555200',
    symbol: 'DPW.DE',
    smallestTradeableUnit: 1,
    otherTradeableProducts: [
      {
        name: 'Deutsche Post ADR',
        isin: 'US25157Y2028'
      }
    ],
    current_indices: [Indices.DAX, Indices.EuroStoxx50],
    end_of_month_prices: deutschePostPrices,
    dividends: deutschePostDividends,
    tags: ['Post', 'Briefe', 'Pakete'],
    responsibilityAttributes: [
      {
        result: '61 / 100 Punkten (11.Platz)',
        responsibilityType: ResponsibilityType.Nachhaltigkeit,
        issuer: 'Globalance Bank',
        ranking: 'Globalance Footprint'
      },
      {
        result: '15,3 / 25 Punkte (12. Platz)',
        responsibilityType: ResponsibilityType.Ethik,
        issuer: 'Kirchhoff',
        ranking: 'GOOD COMPANY RANKING 2018 / Gesellschaft',
        link: 'https://www.kirchhoff.de/fileadmin/20_Download/Studien/20180924_CGR_final.pdf'
      }
    ]
  }
];


