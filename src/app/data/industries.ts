import { Industry } from '../interfaces/industry';

export const industries: Industry[] = [
  {
    id: 10,
    description: 'Urlaub, Erholung, Freizeit und Pflege',
    imageName: 'tea-bag.svg',
    subIndustries: [
      {
        id: 1010,
        description: 'Pflegemittel und Kosmetik',
        imageName: 'jigsaws.svg',
        subIndustries: null
      },
      {
        id: 1011,
        description: 'Sportartikel und Sportvereine',
        imageName:  'exercise.svg',
        subIndustries: [
          {
            id: 101110,
            description: 'Sportartikel-Hersteller',
            imageName: 'basketball.svg',
            subIndustries: null
          },
          {
            id: 101111,
            description: 'Sportartikel-Verkäufer',
            imageName:  'shopping-bag.svg',
            subIndustries: null
          },
          {
            id: 101112,
            description: 'Sportvereine',
            imageName: 'exercise.svg',
            subIndustries: null,
            includeIndustries: [101113]
          },
          {
            id: 101113,
            description: 'Fussballvereine',
            imageName: 'football.svg',
            subIndustries: null
          }
        ]
      },
      {
        id: 1012,
        description: 'Lesen: Bücher, Zeitschriften und Co.',
        imageName:  'books.svg',
        subIndustries: [
          {
            id: 101210,
            description: 'Verlag',
            imageName:  'books.svg',
            subIndustries: null
          },
          {
            id: 101211,
            description: 'Buchhandlung',
            imageName:  'shopping-bag.svg',
            subIndustries: null
          },
          {
            id: 101212,
            description: 'Zeitungen und Zeitschriften',
            imageName: 'newspaper.svg',
            subIndustries: null
          },
          {
            id: 101213,
            description: 'Marketing: Print-Werbung',
            imageName: 'ads.svg',
            subIndustries: null
          }
        ]
      },
      {
        id: 1013,
        description: 'Ernährung und Lebensmittel',
        imageName: 'diet.svg',
        subIndustries: [
          {
            id: 101310,
            description: 'Lieferdienste (Lebensmittel und Essen)',
            imageName: 'shipped.svg',
            subIndustries: null
          },
          {
            id: 101311,
            description: 'Getränkehersteller',
            imageName: 'soda.svg',
            subIndustries: null
          },
          {
            id: 101312,
            description: 'Fastfood',
            imageName: 'fast-food.svg',
            subIndustries: null
          }
        ]
      },
      {
        id: 1014,
        description: 'Mode und Schmuck (inkl. Brillen)',
        imageName: 'fashion.svg',
        subIndustries: [
          {
            id: 101410,
            description: 'Modemarken (Hersteller von Mode) und Modehändler',
            imageName: 'fashion.svg',
            subIndustries: null
          },
          {
            id: 101411,
            description: 'Schmuck und Accessoires',
            imageName: 'rings.svg',
            subIndustries: null
          },
          {
            id: 101412,
            description: 'Brillen',
            imageName: 'glasses.svg',
            subIndustries: null
          }
        ]
      },
      {
        id: 1015,
        description: 'Urlaub, Verreisen und Erholung',
        imageName: 'sun-umbrella.svg',
        subIndustries: [
          {
            id: 101510,
            description: 'Flüge und Flugreisen',
            imageName: 'plane.svg',
            subIndustries: null,
            includeIndustries: [121010]
          },
          {
            id: 101511,
            description: 'Online Buchungsplattformen',
            imageName: 'online-booking.svg',
            subIndustries: null
          },
          {
            id: 101512,
            description: 'Reiseveranstalter',
            imageName: 'travel-company.svg',
            subIndustries: null
          },
          {
            id: 101513,
            description: 'Hotels, Herrbergen, Pensionen und Unterkünfte',
            imageName: 'bed.svg',
            subIndustries: null
          },
          {
            id: 101514,
            description: 'Schiffsreisen, Kreuzfahrten und Seereisen',
            imageName: 'journey.svg',
            subIndustries: null,
            includeIndustries: [121412]
          }
        ]
      },
      {
        id: 1016,
        description: 'Genussmittel inkl. Alkhol und Tabak',
        imageName: 'cocktail.svg',
        subIndustries: null
      },
      {
        id: 1017,
        description: 'Casino-Betreiber und Spielautomaten',
        imageName: 'slot-machine.svg',
        subIndustries: null
      },
      {
        id: 1018,
        description: 'Freizeit- und Erlebnisparks',
        imageName: 'ferris-wheel.svg',
        subIndustries: null
      }
    ]
  },
  {
    id: 11,
    description: 'Haus, Wohnung und Bau',
    imageName: 'construction.svg',
    subIndustries: [
      {
        id: 1110,
        description: 'Immobilien',
        imageName: 'apartments.svg',
        subIndustries: [
          {
            id: 111010,
            description: 'Vermieter von Wohnimmobilien',
            imageName: 'houses.svg',
            subIndustries: null
          },
          {
            id: 111011,
            description: 'Vermieter von Büros',
            imageName: 'building.svg',
            subIndustries: null,
            includeIndustries: [1910]
          },
          {
            id: 111012,
            description: 'Büroausstatter',
            imageName: 'desk.svg',
            subIndustries: null,
            includeIndustries: [1911]
          },
          {
            id: 111013,
            description: 'Vermieter von Gewerbeimmobilien',
            imageName: 'factory.svg',
            subIndustries: null,
            includeIndustries: []
          },
          {
            id: 111014,
            description: 'Projektentwickler',
            imageName: 'home-planning.svg',
            subIndustries: []
          },
          {
            id: 111015,
            description: 'Gebäudetechnik',
            imageName: 'building.svg',
            subIndustries: null
          }
        ]
      },
      {
        id: 1111,
        description: 'Alles rund um Bau und Baustellen',
        imageName: 'hook.svg',
        subIndustries: [
          {
            id: 111110,
            description: 'Hochbau und Tiefbau',
            imageName: 'bridge.svg',
            subIndustries: null
          },
          {
            id: 111111,
            description: 'Baustoffe inkl. Zement',
            imageName: 'cement.svg',
            subIndustries: null,
          },
          {
            id: 111112,
            description: 'Baumaschinen, Kräne und Baugeräte',
            imageName: 'crane.svg',
            subIndustries: null
          },
          {
            id: 111113,
            description: 'Baumärkte / Baumarkt, Gartencenter und Landhandel',
            imageName: 'wrench.svg',
            subIndustries: null
          },
          {
            id: 111114,
            description: 'Aufzüge und Treppen',
            imageName: 'stairs.svg',
            subIndustries: null
          },
          {
            id: 111115,
            description: 'Brandschutz und Sicherheitstechnik',
            imageName: 'helmet.svg',
            subIndustries: null
          }
        ]
      },
      {
        id: 1112,
        description: 'Hausinnenaustattung inkl. Haushaltsprodukte',
        subIndustries: [
          {
            id: 111210,
            description: 'Innenausstattung inkl. Möbel und Küchen',
            imageName: 'interior-design.svg',
            subIndustries: null
          },
          {
            id: 111211,
            description: 'Haushaltsprodukte inkl. Reinigungsmittel',
            imageName: 'cleaning.svg',
            subIndustries: null
          },
          {
            id: 111212,
            description: 'Haushaltsgeräte inkl. Beleuchtung',
            imageName: 'appliances.svg',
            subIndustries: null
          }
        ]
      },
      {
        id: 1113,
        description: 'Versorgung und Energie (inkl. Strom)',
        imageName: 'renewable-energy.svg',
        subIndustries: [
          {
            id: 111310,
            description: 'Strom - und Energieerzeuger',
            imageName: 'plug.svg',
            subIndustries: null
          },
          {
            id: 111311,
            description: 'Netzbetreiber / Strominfrastruktur',
            imageName: 'tower.svg',
            subIndustries: null
          },
          {
            id: 111312,
            description: 'Kraftwerksbau (außer Windkraftanlagen)',
            imageName: 'power-plant.svg',
            subIndustries: null
          },
          {
            id: 111313,
            description: 'Hersteller von Windkraftanlagen',
            imageName: 'eolic.svg',
            subIndustries: null
          },
          {
            id: 111314,
            description: 'Betreiber von Windkraftanlagen',
            imageName: 'eolic.svg',
            subIndustries: null
          },
          {
            id: 111315,
            description: 'Hersteller von Solaranlagen',
            imageName: 'ecology-and-environment.svg',
            subIndustries: null
          },
          {
            id: 111316,
            description: 'Hersteller von Windkraftanlagen',
            imageName: 'eolic.svg',
            subIndustries: null
          },
          {
            id: 111317,
            description: 'Zulieferer der Energieindustrie (inkl. Turbinen)',
            imageName: 'logistics.svg',
            subIndustries: null
          }
        ]
      }
    ]
  },
  {
    id : 12,
    description: 'Transport (inkl. Auto), Verkehr und Logistik',
    imageName: 'car-bike.svg',
    subIndustries: [
      {
        id: 1210,
        description: 'Fluggeräte',
        imageName: 'plane.svg',
        subIndustries: [
          {
            id: 121010,
            description: 'Fluggesellschaften (Passagierverkehr)',
            imageName: 'plane.svg',
            subIndustries: null,
            includeIndustries: [101510]
          },
          {
            id: 121011,
            description: 'Fluggesellschaften (Cargo)',
            imageName: 'plane.svg',
            subIndustries: null
          },
          {
            id: 121012,
            description: 'Flugzeughersteller',
            imageName: 'plane.svg',
            subIndustries: null
          },
          {
            id: 121013,
            description: 'Zulieferer der Flugzugindustrie',
            imageName: 'logistics.svg',
            subIndustries: null
          },
          {
            id: 121014,
            description: 'Helikopter- und Hubschrauberflüge',
            imageName: 'helicopter.svg',
            subIndustries: null
          },
          {
            id: 121015,
            description: 'Hersteller von Helikoptern und Hubschraubern',
            imageName: 'helicopter.svg',
            subIndustries: null
          },
          {
            id: 121016,
            description: 'Hersteller von Hubschrauber-/Helikopterteilen',
            imageName: 'helicopter.svg',
            subIndustries: null
          },
          {
            id: 121017,
            description: 'Hersteller anderer Fluggeräte',
            imageName: 'drone.svg',
            subIndustries: null
          },
          {
            id: 121018,
            description: 'Flughäfen und Flughafenbetreiber',
            imageName: 'airport.svg',
            subIndustries: null
          },
        ]
      },
      {
        id: 1211,
        description: 'Automobilhersteller und deren Zulieferer',
        imageName: 'car.svg',
        subIndustries: [
          {
            id: 121110,
            description: 'Zulieferer der Automobilindustrie',
            imageName: 'logistics.svg',
            subIndustries: null
          },
          {
            id: 121111,
            description: 'Automobilhersteller',
            imageName: 'car.svg',
            subIndustries: null
          },
          {
            id: 121112,
            description: 'Motorrad- und Mofahersteller',
            imageName: 'motorcycle.svg',
            subIndustries: null
          },
          {
            id: 121113,
            description: 'Carsharing und Autovermietung',
            imageName: 'carsharing.svg',
            subIndustries: null
          },
          {
            id: 121114,
            description: 'Digitale Mobilitätslösungen',
            imageName: 'programming.svg',
            subIndustries: null
          }
        ]
      },
      {
        id: 1212,
        description: 'Hersteller von LKWs und deren Zulieferer',
        imageName: 'truck.svg',
        subIndustries: [
          {
            id: 121210,
            description: 'Hersteller von LKWs',
            imageName: 'truck.svg',
            subIndustries: null
          },
          {
            id: 121211,
            description: 'Zulieferer von LKW-Herstellern',
            imageName: 'logistics.svg',
            subIndustries: null
          }
        ]
      },
      {
        id: 1213,
        description: 'Bahn, Züge und Schienenverkehr',
        imageName: 'train.svg ',
        subIndustries: [
          {
            id: 121310,
            description: 'Schienenverkehr und Bahngesellschaften (Personenschienenverkehr)',
            imageName: 'train.svg',
            subIndustries: null
          },
          {
            id: 121311,
            description: 'Hersteller von Bahnen und Zügen',
            imageName: 'tracks.svg',
            subIndustries: null
          },
          {
            id: 121312,
            description: 'Hersteller und Zulieferer im Schienenverkehr (ausgenommen Züge und Bahnen)',
            imageName: 'tracks.svg',
            subIndustries: null
          }
        ]
      },
      {
        id: 1214,
        description: 'Schiff',
        imageName: 'ship.svg',
        subIndustries: [
          {
            id: 121410,
            description: 'Schiffbauer und Werften',
            imageName: 'ship.svg',
            subIndustries: null
          },
          {
            id: 121411,
            description: 'Häfen und Hafenbetreiber',
            imageName: 'port.svg',
            subIndustries: null
          },
          {
            id: 121412,
            description: 'Schiffsreisen',
            imageName: 'journey.svg',
            subIndustries: null,
            includeIndustries: [101514]

          }
        ]
      },
      {
        id: 1215,
        description: 'Fahrradhersteller',
        imageName: 'bike.svg',
        subIndustries: null
      },
      {
        id: 1216,
        description: 'Bus, Bushersteller und deren Zulieferer',
        imageName: 'bus.svg',
        subIndustries: [
          {
            id: 121610,
            description: 'Bushersteller',
            imageName: 'bus.svg',
            subIndustries: null
          },
          {
            id: 121611,
            description: 'Zulieferer der Bushersteller',
            imageName: 'steering-wheel.svg',
            subIndustries: null
          }
        ]
      },
      {
        id: 1217,
        description: 'Verkehrsbetriebe und öffentlicher Nahverkehr',
        imageName: 'train-station.svg',
        subIndustries: null
      },
      {
        id: 1218,
        description: 'Verkehrstechnik',
        imageName: 'traffic-light.svg',
        subIndustries: null
      },
      {
        id: 1219,
        description: 'Betreiber von Autobahnen und Strassen',
        imageName: 'toll-road.svg',
        subIndustries: null
      },
      {
        id: 1220,
        description: 'Logistikunternehmen und Post',
        imageName: 'logistics.svg',
        subIndustries: null,
        includeIndustries: [121012, 121110, 121211]
      },
      {
        id: 1221,
        description: 'Militär: Flug- und Fahrzeuge',
        imageName: '',
        subIndustries: [
          {
            id: 122110,
            description: 'Militärflugzeuge und Zulieferer',
            imageName: 'military-plane.svg',
            subIndustries: null
          },
          {
            id: 122111,
            description: 'Militärfahrzeuge und Zulieferer ',
            imageName: 'tank.svg',
            subIndustries: null
          }
        ]
      },
      {
        id: 1222,
        description: 'Raumfahrt und Zulieferer',
        imageName: 'rocket.svg',
        subIndustries: null
      }
    ]
  },
  {
    id: 13,
    description: 'Elektronik & Entertainment inkl. TV und Musik',
    imageName: 'spotlights.svg',
    subIndustries: [
      {
        id: 1310,
        description: 'Mobilfunk, Handy und Handynetze',
        imageName: 'mobile-network.svg',
        subIndustries: [
          {
            id: 131010,
            description: 'Handynetzbetreiber',
            imageName: 'mobile-network.svg',
            subIndustries: null
          },
          {
            id: 131011,
            description: 'Netzausrüster',
            imageName: '5g.svg',
            subIndustries: null
          },
          {
            id: 131012,
            description: 'Hersteller von Mobiltelefonen (Handyhersteller)',
            imageName: 'smartphone.svg',
            subIndustries: null
          },
          {
            id: 131013,
            description: 'Mobilfunk-, Daten- und Handyverträge',
            imageName: 'smartphone.svg',
            subIndustries: null
          }
        ]
      },
      {
        id: 1311,
        description: 'TV, Film und Fernsehen',
        imageName: 'television.svg',
        subIndustries: [
          {
            id: 131110,
            description: 'TV-Kanäle / Fernsehsender',
            imageName: 'television.svg',
            subIndustries: null
          },
          {
            id: 131111,
            description: 'Produzenten von Filmen und TV-Serien',
            imageName: 'screenplay.svg',
            subIndustries: null
          },
          {
            id: 131112,
            description: 'Marketing: TV-Werbung',
            imageName: 'online-ads.svg',
            subIndustries: null
          }
        ]
      },
      {
        id: 1312,
        description: 'Internet: Online-Shops, Plattformen, Social Media und Streaming',
        imageName: 'internet.svg',
        subIndustries: [
          {
            id: 131210,
            description: 'Onlineshops, Onlinehandel, Internetshops, Ticketshops',
            imageName: 'online-booking.svg',
            subIndustries: null,
            includeIndustries: [101511]
          },
          {
            id: 131211,
            description: 'Social Media / Soziale Medien',
            imageName: 'social-media.svg',
            subIndustries: null
          },
          {
            id: 131212,
            description: 'Online-Plattformen, Plattformbetreiber, Onlinevermittlung',
            imageName: 'online-platform.svg',
            subIndustries: null
          },
          {
            id: 131213,
            description: 'Online-Streaming (Video und Audio)',
            imageName: 'video-player.svg',
            subIndustries: null
          },
          {
            id: 131214,
            description: 'Anbieter von DSL, Kabel, Internetverbindungen',
            imageName: 'ethernet.svg',
            subIndustries: null
          },
          {
            id: 131215,
            description: 'Infrastruktur, Serverbetreiber und Cloudbetrieber',
            imageName: 'server.svg',
            subIndustries: null
          },
          {
            id: 131216,
            description: 'Marketing: Online-Werbung',
            imageName: 'online-ads.svg',
            subIndustries: null
          }
        ]
      },
      {
        id: 1313,
        description: 'Computer, Konsolen und Spiele',
        subIndustries: [
          {
            id: 101510,
            description: 'Software inkl. Computerspiele',
            imageName: 'gameboy.svg',
            subIndustries: null
          },
          {
            id: 101511,
            description: 'Hardware inkl. Konsolen',
            imageName: 'gamepad-controller.svg',
            subIndustries: null
          }
        ]
      }
    ]
  },
  {
    id: 14,
    description: 'Banken, Börsen, Versicherungen',
    imageName: 'bank-building.svg',
    subIndustries: [
      {
        id: 1410,
        description: 'Banken, Zahlungsdienstleister, Finanzdienstleister',
        imageName: 'bank-building.svg',
        subIndustries: [
          {
            id: 141010,
            description: 'Banken (Retailbanken) und Kreditinstitute',
            imageName: 'bank-building.svg',
            subIndustries: null
          },
          {
            id: 141011,
            description: 'Immobilienfinanzierung / Baufinanzierung',
            imageName: 'mortgage.svg',
            subIndustries: null
          },
          {
            id: 141012,
            description: 'Fondsgesellschaften',
            imageName: 'investor.svg',
            subIndustries: null
          },
          {
            id: 141013,
            description: 'Kreditkarten',
            imageName: 'credit-cards.svg',
            subIndustries: null
          },
          {
            id: 141014,
            description: 'Zahlungsdienstleister',
            imageName: 'bill.svg',
            subIndustries: null
          },
          {
            id: 141015,
            description: 'Investmentbanken',
            imageName: 'banking.svg',
            subIndustries: null
          },
          {
            id: 141016,
            description: 'Vermögensverwalter und Finanzportfolioverwalter',
            imageName: 'hand.svg',
            subIndustries: null
          },
          {
            id: 141017,
            description: 'Finanzierungen /Diensleistungen rund um die Finanzierung',
            imageName: 'investor.svg',
            subIndustries: null
          }
        ]
      },
      {
        id: 1411,
        description: 'Börsen und Märkte',
        imageName: 'stocks.svg',
        subIndustries: null
      },
      {
        id: 1412,
        description: 'Versicherungen',
        imageName: 'insurance.svg',
        subIndustries: [
          {
            id: 141210,
            description: 'Versicherungen / Erstversicherer',
            imageName: 'insurance.svg',
            subIndustries: null,
            includeIndustries: [161113]
          },
          {
            id: 141211,
            description: 'Rückversicherungen / Rückversicherer',
            imageName: 'insurance-building.svg',
            subIndustries: null
          }
        ]
      }
    ]
  },
  {
    id: 15,
    description: 'Chemie, Bio, Biotechnologie und Agrar',
    subIndustries: [
      {
        id: 1510,
        description: 'Herstellung und Vertrieb von Chemikalien / Chemieprodukten',
        imageName: 'flask.svg',
        subIndustries: null
      },
      {
        id: 1511,
        description: 'Bio und Biotech-Unternehmen',
        imageName: 'biotech.svg',
        subIndustries: null
      },
      {
        id: 1512,
        description: 'Agrar und Saatgut-Hersteller',
        imageName: 'agronomy.svg',
        subIndustries: null
      },
      {
        id: 1513,
        description: 'Forschung und Entwicklung im Bereich Bio und Chemie',
        imageName: 'innovation.svg',
        subIndustries: null
      },
      {
        id: 1514,
        description: 'Düngemittel',
        imageName: 'watering.svg',
        subIndustries: null
      }
    ]
  },
  {
    id: 16,
    description: 'Gesundheit und Pharma',
    subIndustries: [
      {
        id: 1610,
        description: 'Pharma, Arznei und Medizin',
        imageName: 'medicine.svg',
        subIndustries: null
      },
      {
        id: 1611,
        description: 'Krankenversorgung, Gesundheit, Vorsorge',
        imageName: 'heart.svg',
        subIndustries: [
          {
            id: 161110,
            description: 'Krankenhäuser und Kliniken',
            imageName: 'heart.svg',
            subIndustries: null
          },
          {
            id: 161111,
            description: 'Software für Krankenhäuser und Kliniken',
            imageName: 'programming.svg',
            subIndustries: null
          },
          {
            id: 161112,
            description: 'Ausrüstung, Ausstattung und Logistik für Krankenhäuser und Kliniken',
            imageName: 'logistics.svg',
            subIndustries: null
          },
          {
            id: 161113,
            description: 'Krankenversicherungen',
            imageName: 'insurance.svg',
            subIndustries: null,
            includeIndustries: [141210]
          }
        ]
      },
      {
        id: 1612,
        description: 'Medizintechnik, Medizinische Geräte und Laborausrüstung',
        imageName: 'surgical-table.svg',
        subIndustries: [
          {
            id: 161210,
            description: 'Medizintechnik und Medizinische Geräte',
            imageName: 'medicine.svg',
            subIndustries: null
          },
          {
            id: 161211,
            description: 'Laborausrüstung',
            imageName: 'flask.svg',
            subIndustries: null
          }
        ]
      }
    ]
  },
  {
    id: 17,
    description: 'Industrie, Produktion, Produktionsanlagen, Werk- und Rohstoffe',
    subIndustries: [
      {
        id: 1710,
        description: 'Werkstoffe (inkl. Stahl) und Kunststoffe',
        imageName: 'beam.svg',
        subIndustries: [
          {
            id: 171010,
            description: 'Stahl',
            imageName: 'crucible.svg',
            subIndustries: null
          },
          {
            id: 171011,
            description: 'Kunststoffe  (inkl. Polymer)',
            imageName: 'nano-technology.svg',
            subIndustries: null
          },
          {
            id: 171012,
            description: 'Klebstoffe',
            imageName: 'tape.svg',
            subIndustries: null
          },
          {
            id: 171013,
            description: 'Farben und Lacke',
            imageName: 'drop-silhouette.svg',
            subIndustries: null
          }
        ]
      },
      {
        id: 1711,
        description: 'Rohstoffe und Rohstoffverarbeitende Betriebe',
        imageName: 'drop.svg',
        subIndustries: null
      },
      {
        id: 1712,
        description: 'Gewinning und Erzeugung von Gasen',
        imageName: 'tanker.svg',
        subIndustries: null
      },
      {
        id: 1713,
        description: 'Erzeugung vo Schmierstoffen und ölverarbeitende Betriebe',
        imageName: 'diesel.svg',
        subIndustries: [
          {
            id: 171310,
            description: 'Ölverarbeitende Betriebe',
            imageName: 'oil-rig.svg',
            subIndustries: null
          },
          {
            id: 171311,
            description: 'Schmierstoffe',
            imageName: 'change-car-oil.svg',
            subIndustries: null
          }
        ]
      },
      {
        id: 1714,
        description: 'Produktionsanlagen, Maschinenbau und Zulieferer',
        imageName: 'manufacture.svg',
        subIndustries: [
          {
            id: 171410,
            description: 'Maschinenbau',
            imageName: 'manufacture.svg',
            subIndustries: null
          },
          {
            id: 171411,
            description: 'Anlagenbau',
            imageName: 'manufacture.svg',
            subIndustries: null
          }
        ]
      },
      {
        id: 1715,
        description: 'Laser und UV',
        imageName: 'laser.svg',
        subIndustries: null
      },
      {
        id: 1716,
        description: 'Qualitätssicherung inkl. Oberflächeninspektion',
        imageName: 'gear.svg',
        subIndustries: null
      },
      {
        id: 1717,
        description: 'Optik: Optische Bauelemente für die Industrie',
        imageName: 'focus.svg',
        subIndustries: null
      },
      {
        id: 1718,
        description: 'Pumpen',
        imageName: 'pump.svg',
        subIndustries: null
      },
      {
        id: 1719,
        description: 'Fördertechnik inkl. Gabelstapler',
        imageName: 'conveyor.svg',
        subIndustries: null
      },
      {
        id: 1720,
        description: 'Motoren für die Industrie',
        imageName: 'pistons.svg',
        subIndustries: null
      },
      {
        id: 1721,
        description: 'Recycling und Wiederverwendung',
        imageName: 'recycle.svg',
        subIndustries: null
      },
      {
        id: 1722,
        description: 'Verpackungen',
        imageName: 'box.svg',
        subIndustries: null
      },
      {
        id: 1723,
        description: 'Industriebeteiligungen, Beteiligungsgesellschaften',
        imageName: 'investor.svg',
        subIndustries: null
      }
    ]
  },
  {
    id: 18,
    description: 'Informationstechnologie (IT)',
    subIndustries: [
      {
        id: 1810,
        description: 'Software',
        imageName: 'programming.svg',
        subIndustries: null,
        includeIndustries: [101510, 161111]
      },
      {
        id: 1811,
        description: 'Chiphersteller und Halbleiterindustrie',
        imageName:  'cpu.svg',
        subIndustries: null,
      },
      {
        id: 1812,
        description: 'IT-Dienstleistler',
        imageName: 'it.svg',
        subIndustries: null
      },
      {
        id: 1813,
        description: 'Computer- und Hardwarehersteller',
        imageName: 'computer.svg',
        subIndustries: [
          {
            id: 181310,
            description: 'Personal Computer (PCs)',
            imageName: 'computer.svg',
            subIndustries: null
          },
          {
            id: 181311,
            description: 'Hardware (ausser PCs)',
            imageName: '',
            subIndustries: null
          }
        ]
      },
      {
        id: 1814,
        description: 'Netzwerkausrüster, IT-Infrastruktur (inkl. Cloud)',
        imageName: 'server.svg',
        subIndustries: [
          {
            id: 181410,
            description: 'Netzwerkausrüster, Router, Kabel etc.',
            imageName: 'ethernet.svg',
            subIndustries: null
          },
          {
            id: 181411,
            description: 'IT-Infrastruktur, Server (inkl. Cloud) etc.',
            imageName: 'server.svg',
            subIndustries: null
          }
        ]
      },
      {
        id: 1815,
        description: 'IT-Leasing',
        imageName: 'investor.svg',
        subIndustries: null
      },
      {
        id: 1816,
        description: 'Beteiligungsgesellschaften, Inkubatoren und Investoren in der IT',
        imageName: 'investor.svg',
        subIndustries: null
      },
      {
        id: 1817,
        description: 'Internet',
        imageName: 'internet.svg',
        subIndustries: null,
        includeIndustries: [1312]
      }
    ]
  },
  {
    id: 19,
    description: 'Arbeit und Büro',
    imageName: 'work.svg',
    subIndustries: [
      {
        id: 1910,
        description: 'Büros und Bürovermieter',
        imageName: 'work.svg',
        subIndustries: []
      },
      {
        id: 1911,
        description: 'Büroausstattung und Büromaterialien',
        imageName: 'desk.svg',
        subIndustries: [],
      },
      {
        id: 1912,
        description: 'Arbeitsvermittler',
        imageName: 'agent.svg',
        subIndustries: []
      }
    ]
  },
  {
    id: 20,
    description: 'Handel',
    subIndustries: [
      {
        id: 2010,
        description: 'Einzelhandel (Retail)',
        imageName: 'retail.svg',
        subIndustries: null,
        includeIndustries: [101211, 101410, 111113, 131210]
      },
      {
        id: 2011,
        description: 'Großhandel (Wholesale) und Lagerei',
        imageName: 'storehouse.svg',
        subIndustries: null
      },
      {
        id: 2012,
        description: 'Kaufhaus und Mall-Betreiber',
        imageName: 'shopping-mall.svg',
        subIndustries: null
      }
    ]
  },
  {
    id: 21,
    description: 'Marketing, Werbung, Vermarktung, Vertrieb',
    imageName: 'estate-agent.svg',
    subIndustries: [
      {
        id: 2110,
        description: 'Außenwerbung',
        imageName: 'billboard.svg',
        subIndustries: null
      },
      {
        id: 2111,
        description: 'Marketing: Print-Werbung',
        imageName: 'ads.svg',
        subIndustries: null,
        includeIndustries: [101213]
      },
      {
        id: 2112,
        description: 'Marketing: TV-Werbung',
        imageName: 'online-ads.svg',
        subIndustries: null,
        includeIndustries: [131112]
      },
      {
        id: 2113,
        description: 'Marketing: Online-Werbung',
        imageName: 'online-ads.svg',
        subIndustries: null,
        includeIndustries: [131216]
      }
    ]
  }
];
