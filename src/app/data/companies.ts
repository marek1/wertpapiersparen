import { Company } from '../interfaces/company';
import { Currency } from '../enums/currencies';
import { Indices } from '../enums/indices';
import { adidasShare } from './historical/adidas';
import { Country } from '../enums/country';
import { allianzShare } from './historical/allianz';
import { basfShare } from './historical/basf';
import { bayerShare } from './historical/bayer';
import { beiersdorfShare } from './historical/beiersdorf';
import { bmwShare } from './historical/bmw';
import { continentalDividends, continentalPrices } from './historical/continental';
import { covestroDividends, covestroPrices } from './historical/covestro';
import { ResponsibilityType } from '../enums/responsibility';
import { daimlerDividends, daimlerPrices } from './historical/daimler';
import { deutscheBankDividends, deutscheBankPrices } from './historical/deutscheBank';
import { deutscheBoerseDividends, deutscheBoersePrices } from './historical/deutscheBoerse';
import { deutschePostDividends, deutschePostPrices } from './historical/deutschePost';
import { deutscheTelekomDividends, deutscheTelekomPrices } from './historical/deutscheTelekom';
import { eonDividends, eonPrices } from './historical/eon';
import { fmcDividends, fmcPrices } from './historical/fmc';
import { freseniusDividends, freseniusPrices } from './historical/fresenius';
import { heidelbergCementDividends, heidelbergCementPrices } from './historical/heidelbergCement';
import { henkelDividends, henkelPrices } from './historical/henkel';


// tslint:disable:max-line-length
export const daxCompanies: Company[] = [
  adidasShare,
  allianzShare,
  basfShare,
  bayerShare,
  beiersdorfShare,
  bmwShare,
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
        ranking: 'Globalance Footprint',
        isTopTwentyPercent: false,
        isBottomTwentyPercent: false
      },
      {
        result: '16,2 / 25 Punkte (7. Platz)',
        responsibilityType: ResponsibilityType.Ethik,
        issuer: 'Kirchhoff',
        ranking: 'GOOD COMPANY RANKING 2018 / Gesellschaft',
        link: 'https://www.kirchhoff.de/fileadmin/20_Download/Studien/20180924_CGR_final.pdf',
        isTopTwentyPercent: false,
        isBottomTwentyPercent: false
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
        ranking: 'Globalance Footprint',
        isTopTwentyPercent: false,
        isBottomTwentyPercent: false
      },
      {
        result: '14,0 / 25 Punkte (26. Platz)',
        responsibilityType: ResponsibilityType.Ethik,
        issuer: 'Kirchhoff',
        ranking: 'GOOD COMPANY RANKING 2018 / Gesellschaft',
        link: 'https://www.kirchhoff.de/fileadmin/20_Download/Studien/20180924_CGR_final.pdf',
        isTopTwentyPercent: false,
        isBottomTwentyPercent: true
      }
    ]
  },
  {
    id: 1008,
    name: 'Daimler AG',
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
        ranking: 'Globalance Footprint',
        isTopTwentyPercent: false,
        isBottomTwentyPercent: false
      },
      {
        result: '13,8 / 25 Punkte (27. Platz)',
        responsibilityType: ResponsibilityType.Ethik,
        issuer: 'Kirchhoff',
        ranking: 'GOOD COMPANY RANKING 2018 / Gesellschaft',
        link: 'https://www.kirchhoff.de/fileadmin/20_Download/Studien/20180924_CGR_final.pdf',
        isTopTwentyPercent: false,
        isBottomTwentyPercent: true
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
        ranking: 'Globalance Footprint',
        isTopTwentyPercent: false,
        isBottomTwentyPercent: false
      },
      {
        result: '11,8 / 25 Punkte (29. Platz)',
        responsibilityType: ResponsibilityType.Ethik,
        issuer: 'Kirchhoff',
        ranking: 'GOOD COMPANY RANKING 2018 / Gesellschaft',
        link: 'https://www.kirchhoff.de/fileadmin/20_Download/Studien/20180924_CGR_final.pdf',
        isTopTwentyPercent: false,
        isBottomTwentyPercent: true
      }
    ]
  },
  {
    id: 1010,
    name: 'Deutsche Börse AG',
    country: Country.Deutschland,
    city: 'Frankfurt',
    description: 'Die Deutsche Börse AG ist eine deutsche Aktiengesellschaft mit Sitz in Frankfurt am Main. Kerngeschäft ist die Entwicklung und der Betrieb von Handelsplattformen, Teilnehmernetzwerken und Abwicklungssystemen für Börsen. ',
    link_wikipedia: 'https://de.wikipedia.org/wiki/Deutsche_B%C3%B6rse',
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
        ranking: 'Globalance Footprint',
        isTopTwentyPercent: true,
        isBottomTwentyPercent: false
      },
      {
        result: '14,2 / 25 Punkte (24. Platz)',
        responsibilityType: ResponsibilityType.Ethik,
        issuer: 'Kirchhoff',
        ranking: 'GOOD COMPANY RANKING 2018 / Gesellschaft',
        link: 'https://www.kirchhoff.de/fileadmin/20_Download/Studien/20180924_CGR_final.pdf',
        isTopTwentyPercent: false,
        isBottomTwentyPercent: false
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
        ranking: 'Globalance Footprint',
        isTopTwentyPercent: false,
        isBottomTwentyPercent: false
      },
      {
        result: '15,3 / 25 Punkte (12. Platz)',
        responsibilityType: ResponsibilityType.Ethik,
        issuer: 'Kirchhoff',
        ranking: 'GOOD COMPANY RANKING 2018 / Gesellschaft',
        link: 'https://www.kirchhoff.de/fileadmin/20_Download/Studien/20180924_CGR_final.pdf',
        isTopTwentyPercent: false,
        isBottomTwentyPercent: false
      }
    ]
  },
  {
    id: 1012,
    name: 'Deutsche Telekom AG',
    country: Country.Deutschland,
    city: 'Bonn',
    description: 'Die Deutsche Telekom AG (Audio-Datei / Hörbeispiel Anhören?/i) ist Europas größtes Telekommunikationsunternehmen[4] mit Hauptsitz in Bonn',
    link_wikipedia: 'https://de.wikipedia.org/wiki/Deutsche_Telekom',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Telekom_Logo_2013.svg/500px-Telekom_Logo_2013.svg.png',
    products: [
      {
        id: 101210,
        name: 'Deutsche Telekom',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Telekom_Logo_2013.svg/500px-Telekom_Logo_2013.svg.png'
      },
      {
        id: 101211,
        name: 'T-Mobile',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/T-Mobile_logo2.svg/500px-T-Mobile_logo2.svg.png'
      },
      {
        id: 101212,
        name: 'T-Systems'
      }
    ],
    industries: [131010, 131214],
    currency: Currency.EUR,
    isin: 'DE0005557508',
    wkn: '555750',
    symbol: 'DTE.DE',
    smallestTradeableUnit: 1,
    otherTradeableProducts: [
      {
        name: 'Deutsche Telekom ADR',
        isin: 'US2515661054'
      }
    ],
    current_indices: [Indices.DAX, Indices.EuroStoxx50],
    end_of_month_prices: deutscheTelekomPrices,
    dividends: deutscheTelekomDividends,
    tags: ['Telekommunikation', 'Informationstechnologie', 'Festnetztelefonie', 'Breitbandinternet', 'Mobilfunk', 'TV'],
    responsibilityAttributes: [
      {
        result: '61 / 100 Punkten (11.Platz)',
        responsibilityType: ResponsibilityType.Nachhaltigkeit,
        issuer: 'Globalance Bank',
        ranking: 'Globalance Footprint',
        isTopTwentyPercent: false,
        isBottomTwentyPercent: false
      },
      {
        result: '14,4 / 25 Punkte (22. Platz)',
        responsibilityType: ResponsibilityType.Ethik,
        issuer: 'Kirchhoff',
        ranking: 'GOOD COMPANY RANKING 2018 / Gesellschaft',
        link: 'https://www.kirchhoff.de/fileadmin/20_Download/Studien/20180924_CGR_final.pdf',
        isTopTwentyPercent: false,
        isBottomTwentyPercent: false
      }]
  },
  {
    id: 1013,
    name: 'E.ON SE',
    country: Country.Deutschland,
    city: 'Essen',
    description: 'Die börsennotierte E.ON SE ist die Holdinggesellschaft eines deutschen Energiekonzerns mit Sitz in Essen. Das Unternehmen ist hauptsächlich in den Bereichen Energienetze, Energiedienstleistungen, erneuerbare Energien und dem Betrieb und Rückbau deutscher Atomkraftwerke tätig.',
    link_wikipedia: 'https://de.wikipedia.org/wiki/E.ON',
    logo: 'https://www.eon.com/etc/designs/eon/eon-com/images/logo-red.svg',
    products: [
      {
        id: 101310,
        name: 'Eon Gas'
      },
      {
        id: 101311,
        name: 'Eon Strom'
      },
      {
        id: 101312,
        name: 'Eon Solaranlagen'
      }
    ],
    industries: [111310, 111314, 111315],
    currency: Currency.EUR,
    isin: 'DE000ENAG999',
    wkn: 'ENAG99',
    symbol: 'EOAN.DE',
    smallestTradeableUnit: 1,
    otherTradeableProducts: [
      {
        name: 'E.ON ADR',
        isin: 'US2687801033'
      }
    ],
    current_indices: [Indices.DAX],
    end_of_month_prices: eonPrices,
    dividends: eonDividends,
    tags: ['Energieunternehmen', 'Stromerzeugung', 'Erdgasförderung', 'Stromhandel', 'Gashandel'],
    responsibilityAttributes: [
      {
        result: '36 / 100 Punkten (25.Platz)',
        responsibilityType: ResponsibilityType.Nachhaltigkeit,
        issuer: 'Globalance Bank',
        ranking: 'Globalance Footprint'
      },
      {
        result: '15,1 / 25 Punkte (18. Platz)',
        responsibilityType: ResponsibilityType.Ethik,
        issuer: 'Kirchhoff',
        ranking: 'GOOD COMPANY RANKING 2018 / Gesellschaft',
        link: 'https://www.kirchhoff.de/fileadmin/20_Download/Studien/20180924_CGR_final.pdf'
      }
    ]
  },
  {
    id: 1014,
    name: 'Fresenius Medical Care AG & Co. KGaA',
    country: Country.Deutschland,
    city: 'Hof',
    description: 'Die Fresenius Medical Care AG & Co. KGaA mit rechtlichem Sitz in Hof (Saale) und operativem Sitz in Bad Homburg vor der Höhe ist ein weltweit führender deutscher Anbieter von Dialyseprodukten und Dialysedienstleistungen zur überlebensnotwendigen medizinischen Versorgung von Menschen mit chronischem und akutem Nierenversagen.',
    link_wikipedia: 'https://de.wikipedia.org/wiki/Fresenius_Medical_Care',
    logo: 'https://upload.wikimedia.org/wikipedia/de/thumb/b/b8/Fresenius_Medical_Care_20xx_logo.svg/500px-Fresenius_Medical_Care_20xx_logo.svg.png',
    products: [
      {
        id: 101410,
        name: 'Fresenius Medical Care Heimdialyse-Geräte'
      },
      {
        id: 101411,
        name: 'Fresenius Medical Care Zentrumsdialyse-Geräte'
      },
      {
        id: 101412,
        name: 'Fresenius Medical Care Heim-Hämodialyse | Therapiesystem NxStage'
      },
      {
        id: 101413,
        name: 'Fresenius Medical Care | Akuttherapie multiFiltrate-System'
      },
      {
        id: 101414,
        name: 'NxStage | Akuttherapie-System'
      }
    ],
    industries: [161210],
    currency: Currency.EUR,
    isin: 'DE0005785802',
    wkn: '578580',
    symbol: 'FME.DE',
    smallestTradeableUnit: 1,
    otherTradeableProducts: [
      {
        name: 'Fresenius Medical Care ADR',
        isin: 'US3580291066'
      }
    ],
    current_indices: [Indices.DAX],
    end_of_month_prices: fmcPrices,
    dividends: fmcDividends,
    tags: ['Dialysetechnik'],
    responsibilityAttributes: [
      {
        result: '56 / 100 Punkten (14.Platz)',
        responsibilityType: ResponsibilityType.Nachhaltigkeit,
        issuer: 'Globalance Bank',
        ranking: 'Globalance Footprint'
      },
      {
        result: '16,1 / 25 Punkte (8. Platz)',
        responsibilityType: ResponsibilityType.Ethik,
        issuer: 'Kirchhoff',
        ranking: 'GOOD COMPANY RANKING 2018 / Gesellschaft',
        link: 'https://www.kirchhoff.de/fileadmin/20_Download/Studien/20180924_CGR_final.pdf'
      }
    ]
  },
  {
    id: 1015,
    name: 'Fresenius SE & Co. KGaA',
    country: Country.Deutschland,
    city: 'Bad Homburg',
    description: 'Die Fresenius SE & Co. KGaA ist ein deutsches Medizintechnik- und Gesundheitsunternehmen mit Sitz im hessischen Bad Homburg vor der Höhe. Das Unternehmen ist einer der größten privaten Krankenhausbetreiber Deutschlands sowie im Pharma- und Gesundheitsdienstleistungsbereich tätig',
    link_wikipedia: 'https://de.wikipedia.org/wiki/Fresenius_(Unternehmen)',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Fresenius.svg/500px-Fresenius.svg.png',
    products: [
      {
        id: 101510,
        name: 'Fresenius Helios Kliniken'
      },
      {
        id: 101511,
        name: 'Fresenius Krabi'
      },
      {
        id: 101512,
        name: 'Fresenius Vamed'
      },
      {
        id: 101513,
        name: 'Fresenius Medical Care'
      }
    ],
    industries: [161210, 161110],
    currency: Currency.EUR,
    isin: 'DE0005785604',
    wkn: '578560',
    symbol: 'FRE.DE',
    smallestTradeableUnit: 1,
    otherTradeableProducts: [
      {
        name: 'FRESENIUS SE S/ADR',
        isin: 'US35804M1053'
      }
    ],
    current_indices: [Indices.DAX, Indices.EuroStoxx50],
    end_of_month_prices: freseniusPrices,
    dividends: freseniusDividends,
    tags: ['Gesundheitskonzern', 'Krankenhäuser', 'Dialyse'],
    responsibilityAttributes: [
      {
        result: '35 / 100 Punkten (27.Platz)',
        responsibilityType: ResponsibilityType.Nachhaltigkeit,
        issuer: 'Globalance Bank',
        ranking: 'Globalance Footprint',
        isTopTwentyPercent: false,
        isBottomTwentyPercent: true
      },
      {
        result: '16,8 / 25 Punkte (1. Platz)',
        responsibilityType: ResponsibilityType.Ethik,
        issuer: 'Kirchhoff',
        ranking: 'GOOD COMPANY RANKING 2018 / Gesellschaft',
        link: 'https://www.kirchhoff.de/fileadmin/20_Download/Studien/20180924_CGR_final.pdf',
        isTopTwentyPercent: true,
        isBottomTwentyPercent: false
      }]
  },
  {
    id: 1016,
    name: 'HeidelbergCement AG'
    country: Country.Deutschland,
    city:  'Heidelberg',
    description: 'Die HeidelbergCement AG mit Sitz in Heidelberg ist ein börsennotierter Baustoffkonzern. Das Unternehmen ist weltweit die Nummer 1 bei Zuschlagstoffen, Nummer 2 bei Zement und Nummer 3 bei Transportbeton.',
    link_wikipedia: 'https://de.wikipedia.org/wiki/HeidelbergCement',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/HeidelbergCement_Logo.svg/500px-HeidelbergCement_Logo.svg.png',
    products: [
      {
        id: 101610,
        name: 'Zement'
      }
    ],
    industries: [111111],
    currency: Currency.EUR,
    isin: 'DE0006047004',
    wkn: '604700',
    symbol: 'HEI.DE',
    smallestTradeableUnit: 1,
    otherTradeableProducts: [
      {
        name: 'HeidelbergCement ADR',
        isin: 'US42281P2056'
      }
    ],
    current_indices: [Indices.DAX],
    end_of_month_prices: heidelbergCementPrices,
    dividends: heidelbergCementDividends,
    tags: ['Zement'],
    responsibilityAttributes: [
      {
        result: '35 / 100 Punkten (27.Platz)',
        responsibilityType: ResponsibilityType.Nachhaltigkeit,
        issuer: 'Globalance Bank',
        ranking: 'Globalance Footprint',
        isTopTwentyPercent: false,
        isBottomTwentyPercent: true
      },
      {
        result: '15,2 / 25 Punkte (14. Platz)',
        responsibilityType: ResponsibilityType.Ethik,
        issuer: 'Kirchhoff',
        ranking: 'GOOD COMPANY RANKING 2018 / Gesellschaft',
        link: 'https://www.kirchhoff.de/fileadmin/20_Download/Studien/20180924_CGR_final.pdf',
        isTopTwentyPercent: false,
        isBottomTwentyPercent: false
      }
    ]
  },
  {
    id: 1017,
    name: 'Henkel AG & Co. KGaA',
    country: Country.Deutschland,
    city: 'Düsseldorf',
    description: 'Die Henkel AG & Co. KGaA mit Hauptsitz in Düsseldorf-Holthausen ist ein börsennotierter deutscher Hersteller der Konsumgüterindustrie mit weltweiten Marken und Techniken in den drei Geschäftsfeldern Laundry & Home Care (Wasch-/Reinigungsmittel), Beauty Care (Schönheitspflege) und Adhesive Technologies (Klebstoffe). ',
    link_wikipedia: 'https://de.wikipedia.org/wiki/Henkel_(Unternehmen)',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Henkel-Logo.svg/443px-Henkel-Logo.svg.png',
    products: [
      {
        id: 101710,
        name: 'Schwarzkopf',
        logo: 'https://www.henkel.com/resource/image/214622/1x1/670/670/6aac5b37116440b0eb2c8b883ea367f4/Vr/schwarzkopf-corporate.png'
      },
      {
        id: 101711,
        name: 'Dial',
        logo: 'https://www.henkel.com/resource/image/30724/1x1/670/670/bef12de71a131f2a3ecc892dab14b624/ZY/dial-logo.png'
      },
      {
        id: 101712,
        name: 'syoss',
        logo: 'https://www.henkel.com/resource/image/35476/1x1/670/670/453ca39ebfefb6dbaab095dd4ca07747/fS/syoss-logo.png'
      },
      {
        id: 101713,
        name: 'all',
        logo: 'https://www.henkel.com/resource/image/740914/1x1/670/670/7512b9a2e57ca51548413566ec3ee36d/fh/all-logo.png'
      },
      {
        id: 101714,
        name: 'Bref',
        logo: 'https://www.henkel.de/resource/image/210826/1x1/670/670/b35171eb8e0552a07a626f4f77867ab8/FT/bref-de-logo.png'
      },
      {
        id: 101715,
        name: 'Persil',
        logo: 'https://www.henkel.com/resource/image/32556/1x1/670/670/c364671fdb46ad51f587c6c6e161ffc9/FH/persil-logo.png'
      },
      {
        id: 101716,
        name: 'Aquence',
        logo: 'https://www.henkel.com/resource/image/22592/1x1/670/670/574ddf7148acc14ba684ecb961f25a76/tB/aquence-logo.png'
      },
      {
        id: 101717,
        name: 'Authentic Beauty Concept',
        logo: 'https://www.henkel.com/resource/image/922452/1x1/670/670/d04750f78b39e3c6c83045c1be9cb789/aG/authentic-beauty-concept-logo-jpg.jpg'
      },
      {
        id: 101718,
        name: 'BC Bonacure',
        logo: 'https://www.henkel.com/resource/image/841248/1x1/670/670/7743320fdd596d47756f86def00c3380/mt/uk-hu-bonacure-logo.jpg'
      },
      {
        id: 101719,
        name: 'biff',
        logo: 'https://www.henkel.com/resource/image/54706/1x1/670/670/b5ba64a87ce8548baf1bf5b0f22421ed/OE/biff-logo.png'
      },
      {
        id: 101720,
        name: 'Blonde',
        logo: 'https://www.henkel.com/resource/image/37176/1x1/670/670/7655c4053492427513b0a593f92c7a5/CL/blonde-logo.png'
      },
      {
        id: 101721,
        name: 'BlondMe',
        logo: 'https://www.henkel.com/resource/image/845298/1x1/670/670/baa38cbf0a3ca72eb23e9926a27d9db7/mo/hu-blondme-logo.png'
      },
      {
        id: 101722,
        name: 'Bonderite',
        logo: 'https://www.henkel.com/resource/image/22594/1x1/670/670/4e6ffaf1e4e79a3e93cba64bc5d29fe5/II/bonderite-logo.png'
      },
      {
        id: 101723,
        name: 'Brillance',
        logo: 'https://www.henkel.com/resource/image/870684/1x1/670/670/d508112a0e445bd6f072d907c4f4b949/VQ/brillance-logo.png'
      },
      {
        id: 101724,
        name: 'Der General',
        logo: 'https://www.henkel.com/resource/image/27592/1x1/670/670/b6a9391245b782ab9491470170b96621/uC/der-general-logo.png'
      },
      {
        id: 101725,
        name: 'Diadem',
        logo: 'https://www.henkel.com/resource/image/32434/1x1/670/670/846d68d873fd535e152a02ea09594404/Rh/diadem-logo.png'
      },
      {
        id: 101726,
        name: 'Diadermine',
        logo: 'https://www.henkel.com/resource/image/30202/1x1/670/670/e05a758e22d8143d4ae96e019e8392c6/WE/diadermine-logo.png'
      },
      {
        id: 101727,
        name: 'Dylon',
        logo: 'https://www.henkel.com/resource/image/623030/1x1/670/670/c381820e697b80cf62bb2551295de684/Ba/dylon-logo-de-png.png'
      },
      {
        id: 101728,
        name: 'Essensity',
        logo: 'https://www.henkel.com/resource/image/33588/1x1/670/670/f48bc0dcbf3f57fae2d713593ae6b10f/pz/essensity-logo.png'
      },
      {
        id: 101729,
        name: 'Fa',
        logo: 'https://www.henkel.com/resource/image/32432/1x1/670/670/f3099b998d78353a53fab804b511f7b0/mP/fa-logo.png'
      },
      {
        id: 101730,
        name: 'Fibreplex',
        logo: 'https://www.henkel.com/resource/image/611646/1x1/670/670/c42fa2a6629aa70e33d78641d1b1ff9/IL/fibreplex-logo-png.png'
      },
      {
        id: 101731,
        name: 'Freshlight',
        logo: 'https://www.henkel.com/resource/image/30716/1x1/670/670/42f6d6a0f95c13d5ccf5afbd435594a6/sM/freshlight-logo.png'
      },
      {
        id: 101732,
        name: 'Gliss Kur',
        logo: 'https://www.henkel.com/resource/image/368076/1x1/670/670/35e2caec58de41ca53c28310b03dcc4b/Bm/gliss-kur-logo-de-de.png'
      },
      {
        id: 101733,
        name: 'got2b',
        logo: 'https://www.henkel.com/resource/image/33842/1x1/670/670/6776265a2fb2eacba87aebbe3266d10f/mw/got2b-us-logo.png'
      },
      {
        id: 101734,
        name: 'Hawaii',
        logo: 'https://www.henkel.com/resource/image/953168/1x1/670/670/30583754628aa9f33c7dc95b7aa871a9/Qo/hawaii-logo.png'
      },
      {
        id: 101735,
        name: 'Igora',
        logo: 'https://www.henkel.com/resource/image/33844/1x1/670/670/706a85c6cca5c2d006aa6d179d732bfe/wo/igora-logo.png'
      },
      {
        id: 101736,
        name: 'Indola',
        logo: 'https://www.henkel.com/resource/image/30828/1x1/670/670/e939b6a3e6dca2aa429eeebaac67d509/Ws/indola-logo.png'
      },
      {
        id: 101737,
        name: 'LIVE',
        logo: 'https://www.henkel.com/resource/image/870700/1x1/670/670/ddfe12cd3713004ebb408df6c16edec3/FL/live-logo.png'
      },
      {
        id: 101738,
        name: 'Loctite',
        logo: 'https://www.henkel.com/resource/image/22588/1x1/670/670/36a0a800ff0a8d70961a0e927eb58837/ZR/loctite-logo.png'
      },
      {
        id: 101739,
        name: 'Lovables',
        logo: 'https://www.henkel.com/resource/image/820348/1x1/670/670/801d1b4a3601c50c0178d861a8e069fc/NX/lovables-logo.png'
      },
      {
        id: 101740,
        name: 'Luminance',
        logo: 'https://www.henkel.com/resource/image/953186/1x1/670/670/94a1e5ffe9214b3bf2abbfb642d2409d/ZD/sk-luminance-logo.png'
      },
      {
        id: 101741,
        name: 'Metylan',
        logo: 'https://www.henkel.com/resource/image/26256/1x1/670/670/fb25638086755d132995ea07c32583e3/rH/metylan-logo.png'
      },
      {
        id: 101742,
        name: 'Nectra Color',
        logo: 'https://www.henkel.com/resource/image/32442/1x1/670/670/646e607663d6c05bee2a4b38bed49189/rE/nectra-logo.png'
      },
      {
        id: 101743,
        name: 'Osis+',
        logo: 'https://www.henkel.com/resource/image/33608/1x1/670/670/bcc6c3a21edb13f0d6d8b1c8d65dbd3e/Tv/osis-logo.png'
      },
      {
        id: 101744,
        name: 'Poly Color',
        logo: 'https://www.henkel.com/resource/image/492414/1x1/670/670/ec65c6a596dee9a21afb383b382bf185/XN/poly-color-logo-at.png'
      },
      {
        id: 101745,
        name: 'Perfect Mousse',
        logo: 'https://www.henkel.com/resource/image/32440/1x1/670/670/3d07ff16103e30ab3f2131fbb3d87a25/la/perfect-mousse-logo.png'
      },
      {
        id: 101746,
        name: 'Palette',
        logo: 'https://www.henkel.com/resource/image/417906/1x1/670/670/b37a9a9aeb4fb5b8a0b1d7fbeccdc2ff/uS/schwarzkopf-palette-logo.png'
      },
      {
        id: 101747,
        name: 'Pattex',
        logo: 'https://www.henkel.com/resource/image/26250/1x1/670/670/1d5aa3367f5abf063fb8d39c617ebeaf/ks/pattex-logo.png'
      },
      {
        id: 101748,
        name: 'Perwoll',
        logo: 'https://www.henkel.com/resource/image/27810/1x1/670/670/b709fb199f80a683fe4a2e53bd36141/cv/perwoll-logo.png'
      },
      {
        id: 101749,
        name: 'Ponal',
        logo: 'https://www.henkel.com/resource/image/26272/1x1/670/670/3b1fccf26f13b3b40889b0bc0559099/KG/ponal-logo.png'
      },
      {
        id: 101750,
        name: 'Pril',
        logo: 'https://www.henkel.com/resource/image/27228/1x1/670/670/bc7906bfb15a76f6a5e1f53704067b6d/ye/pril-logo.png'
      },
      {
        id: 101751,
        name: 'Pritt',
        logo: 'https://www.henkel.com/resource/image/26290/1x1/670/670/da3528027188840b23ecbba30911d5bb/Lt/pritt-logo.png'
      },
      {
        id: 101752,
        name: 'Purex',
        logo: 'https://www.henkel.com/resource/image/50408/1x1/670/670/304bf8f83c912dd7b3c92746c6b0db38/US/purex-logo.png'
      },
      {
        id: 101753,
        name: 'Right Guard',
        logo: 'https://www.henkel.com/resource/image/35622/1x1/670/670/323d34172be23599273a4cd964f2f7b/Mp/right-guard-logo.png'
      },
      {
        id: 101754,
        name: 'Re-Nature',
        logo: 'https://www.henkel.com/resource/image/35762/1x1/670/670/613363abc48e05e6eada6f243415d57e/SF/re-nature-logo.png'
      },
      {
        id: 101755,
        name: 'Supreme Keratin',
        logo: 'https://www.henkel.com/resource/image/33830/1x1/670/670/6cbbff6359f955294871cbc01fe7f0c5/cF/supreme-keratin-logo.png'
      },
      {
        id: 101756,
        name: 'Schauma',
        logo: 'https://www.henkel.com/resource/image/35432/1x1/670/670/469267fce9cef60d4ea93675563cd6a6/MV/schauma-logo.png'
      },
      {
        id: 101757,
        name: 'Seah',
        logo: 'https://www.henkel.com/resource/image/32446/1x1/670/670/daa8781bee1d3648689dabec7be796a0/yi/seah-logo.png'
      },
      {
        id: 101758,
        name: 'Seborin',
        logo: 'https://www.henkel.com/resource/image/35430/1x1/670/670/aed96b7abf67e7049b9660b2bc208584/fo/seborin-logo.png'
      },
      {
        id: 101759,
        name: 'Sidol',
        logo: 'https://www.henkel.com/resource/image/64764/1x1/670/670/68cb6c108ca228dbf8426345fa33eb28/Gk/sidol-logo.png'
      },
      {
        id: 101760,
        name: 'Sidolin',
        logo: 'https://www.henkel.com/resource/image/64738/1x1/670/670/b00ede296b971f425bb1dd3d5cf4cb23/ca/sidolin-logo.png'
      },
      {
        id: 101761,
        name: 'Sil',
        logo: 'https://www.henkel.com/resource/image/62040/1x1/670/670/2d0f0e2eaff366830f5643803eaceebb/TI/sil-logo.png'
      },
      {
        id: 101762,
        name: 'Silhouette',
        logo: 'https://www.henkel.com/resource/image/33848/1x1/670/670/e89b4ec31c8eac4ef98ba24ebc3b0a2c/Wp/silhouette-logo.png'
      },
      {
        id: 101763,
        name: 'Sista',
        logo: 'https://www.henkel.com/resource/image/26252/1x1/670/670/35e7789ba4c604c7a77e0acf74f9d79a/sz/sista-logo.png'
      },
      {
        id: 101764,
        name: 'Sofix',
        logo: 'https://www.henkel.com/resource/image/64682/1x1/670/670/97696b25eeaba52c5158771fe9c6979f/we/sofix-logo.png'
      },
      {
        id: 101765,
        name: 'Somat',
        logo: 'https://www.henkel.com/resource/image/30920/1x1/670/670/1e265e9b9cc51b8eae325df5a5531329/PQ/somat-logo.png'
      },
      {
        id: 101766,
        name: 'Spee',
        logo: 'https://www.henkel.com/resource/image/27990/1x1/670/670/dbddac550191b6096a48fde12b674154/SB/spee-logo.png'
      },
      {
        id: 101767,
        name: 'Taft',
        logo: 'https://www.henkel.com/resource/image/191508/1x1/670/670/a48cc9fb11afce2ab4341a8c4de9661e/xt/3-weather-taft-logo-com.png'
      },
      {
        id: 101768,
        name: 'Tangit',
        logo: 'https://www.henkel.com/resource/image/26336/1x1/670/670/c06db771c3e11692cb57ac11e48ad38/AG/tangit-logo.png'
      },
      {
        id: 101769,
        name: 'Technomelt',
        logo: 'https://www.henkel.com/resource/image/22596/1x1/670/670/e063cab28acfbcf46b172e583b1e474e/vg/technomelt-logo.png'
      },
      {
        id: 101770,
        name: 'Teroson',
        logo: 'https://www.henkel.com/resource/image/22598/1x1/670/670/a710b5a3f8f9d3e1aeedcf0fe7bf4433/aR/teroson-logo.png'
      },
      {
        id: 101771,
        name: 'Theramed',
        logo: 'https://www.henkel.com/resource/image/33834/1x1/670/670/dac1248940448d4426239346e1252140/DB/theramed-logo.png'
      },
      {
        id: 101772,
        name: 'Vernel',
        logo: 'https://www.henkel.com/resource/image/27898/1x1/670/670/32d163598da4237c509c2d5ac88dc865/kg/vernel-logo.png'
      },
      {
        id: 101773,
        name: 'WC Frisch',
        logo: 'https://www.henkel.com/resource/image/27648/1x1/670/670/6c963facf8a56bf717770c695ff52412/vB/wc-frisch-logo.png'
      },
      {
        id: 101774,
        name: 'Weißer Riese',
        logo: 'https://www.henkel.com/resource/image/33504/1x1/670/670/3ce2fa4aecaef6dffed2fc0a0ee20676/XI/weisser-riese-logo.png'
      },
      {
        id: 101775,
        name: '[3D]Men',
        logo: 'https://www.henkel.com/resource/image/30126/1x1/670/670/ef6e6e1febeca7cddc8ecebb04b3228c/pE/3dmen-logo.png'
      }
    ],
    industries: [1010, 171012],
    currency: Currency.EUR,
    isin: 'DE0006048432',
    wkn: '604843',
    symbol: 'HEN3.DE',
    smallestTradeableUnit: 1,
    otherTradeableProducts: [
      {
        name: 'Henkel ADR',
        isin: 'US42550U1097'
      }
    ],
    current_indices: [Indices.DAX],
    end_of_month_prices: henkelPrices,
    dividends: henkelDividends,
    tags: ['Haushalt', 'Handwerk', 'Körperpflege', 'Kosmetik', 'Büro', 'Schule', 'Hobby'],
    responsibilityAttributes: [
      {
        result: '64 / 100 Punkten (7.Platz)',
        responsibilityType: ResponsibilityType.Nachhaltigkeit,
        issuer: 'Globalance Bank',
        ranking: 'Globalance Footprint',
        isTopTwentyPercent: false,
        isBottomTwentyPercent: false
      },
      {
        result: '16,3 / 25 Punkte (6. Platz)',
        responsibilityType: ResponsibilityType.Ethik,
        issuer: 'Kirchhoff',
        ranking: 'GOOD COMPANY RANKING 2018 / Gesellschaft',
        link: 'https://www.kirchhoff.de/fileadmin/20_Download/Studien/20180924_CGR_final.pdf',
        isTopTwentyPercent: true,
        isBottomTwentyPercent: false
      }
    ]
  }
];
// tslint:enable:max-line-length
