import { ROUTES_IN_AKTIEN_INVESTIEREN, ROUTES_INVESTMENTFONDS, ROUTES_RISIKO_INVESTITION, ROUTES_WAS_SIND_AKTIEN } from '../../routes';

export interface HeadlineBodySource {
  route: string;
  headline: string;
  body: string;
  source?: MoreUrl;
  more?: MoreUrl;
}

interface MoreUrl {
  name: string;
  url: string;
}
export const content: HeadlineBodySource[] = [
  {
    route: ROUTES_WAS_SIND_AKTIEN,
    headline: 'Was sind Aktien',
    body: 'Die Aktie ist ein Wertpapier, das den Anteil an einer Aktiengesellschaft oder einer Kommanditgesellschaft auf Aktien verbrieft. [..]' +
      'Die Aktie ist ein Finanzierungsinstrument für die Kapitalgesellschaften der Aktiengesellschaft (AG), Kommanditgesellschaft auf Aktien' +
      '(KGaA) oder Europäischen Gesellschaft (SE). Mit ihm können sich diese Rechtsformen Eigenkapital (Grundkapital oder Kommanditkapital)' +
      'beschaffen, indem sie diese Aktien auf dem Aktienmarkt an Aktionäre veräußern.',
    source: {
      name: 'Wikipedia',
      url: 'https://de.wikipedia.org/wiki/Aktie'
    },
    more: {
      name: 'Finanzfluss.de',
      url: 'https://www.finanzfluss.de/was-sind-aktien/'
    }
  },
  {
    route: ROUTES_RISIKO_INVESTITION,
    headline: 'So können Risiken minimiert werden',
    body: 'Es gibt keine Investments ohne Risiko. Das Gut (z.B. Immobilie, Oldtimer, Aktie etc.), in das man investiert hat, kann im schlimmsten Falle wertlos werden. ' +
      'Finanzprodukte (wie Fonds) haben noch ein Emittentenrisiko, d.h. die Institutionen (eine Bank, der Staat etc.), die das Finanzprodukt auflegt, kann zahlungsunfähig werden. ' +
      '<div class="margin vertical top-bottom-20">Aber mit ein paar einfachen Regeln kann man das Risiko mindern.</div>' +
      '<ul class="list-group">' +
      '<li class="list-group-item">' +
        '<span class="font-weight-bold">Streuung (Diversifikation)</span>: Du streust deine Investments nach dem Motto - je unterschiedlicher bzw. diverser desto besser. ' +
        'Sollte ist eine einzelne "schlechte" Investition nicht ganz so "weh".' +
      '</li>' +
      '<li class="list-group-item">' +
        '<span class="font-weight-bold">Liquide Märkte</span>: Du solltest in Güter investieren für die es einen Markt gibt. Sprich, du solltest sie jederzeit verkaufen können,' +
        'so daß du die Verluste durch einen hoffentlich rechtzeitigen Verkauf eingrenzen kannst' +
      '</li>' +
      '</ul>',
  },
  {
    route: ROUTES_IN_AKTIEN_INVESTIEREN,
    headline: 'Richtig in Aktien investieren',
    body: 'Erstmal gibt es natürlich kein Richtig. Aber es gibt "Fehler", die immer wieder gemacht werden, und Geld kosten. ' +
      '<div class="margin vertical top-bottom-20"' +
      'Wenn du folgende Grundsätze befolgt, sollten deine Verluste klein bleiben, bzw. potentielle Gewinne nicht in Gefahr geraten.' +
      '</div>' +
      '<ul class="list-group">' +
        '<li class="list-group-item">' +
          '<span class="font-weight-bold">Blue Chips</span>: Wer in große, bekannte und bewährte Unternehmen investiert geht ein geringeres Risiko ein als bei der ' +
          'Investition in unbekannte Unternehmen aus der dritten oder vierten Reihe. Penny Stocks (Aktien unter 1 EUR) oder Aktien von Unternehmen aus Entwicklungsländern ' +
          'sollten ebenso vermieden werden. Es bieten sich daher besonders für "neue" Investoren vor Allem Aktien aus DAX, MDAX, EuroStoxx50 oder Stoxx Europe 600 an.' +
        '</li>' +
        '<li class="list-group-item">' +
          '<span class="font-weight-bold">Langfristiger Anlagehorizont</span>: Wichtig bei der Anlage in Aktien ist ein langfristiger Horizont, denn die meisten Aktien ' +
          'weisen erst echte positive Rendite bei Anlagefristen um die zehn bis fünfzehn Jahre auf. 54 von 60 Aktien im DAX und MDAX hatten eine positive Performace in den letzten 10 Jahren. ' +
          '<span class="font-weight-bold">Nutze also nur Geld, daß du entbehren kannst.</span> ' +
          'Kurzfristiges Trading auf der anderen Seite ist meist nur für Profis (und Maschinen), die dauerhaft im Markt tätig sind und bei kleinsten Veränderungen Geld machen. ' +
          'Für den Normalanleger bedeutet das Rein und Raus meist: "Hin und her macht Taschen leer", denn Handeln ist mit Kosten verbunden. ' +
        '</li>' +
        '<li class="list-group-item">' +
          '<span class="font-weight-bold">Streuung (Diversifikation)</span>: Investiere nicht in eine einzige Aktie sondern in verschiedenste Aktien. Am Besten aus verschiedensten Branchen. ' +
          'Somit verringerest du das Risiko, daß ein schlecht laufendes Investment deine Gesamtperformance arg negativ beeinflusst.' +
        '</li>' +
        '<li class="list-group-item">' +
          '<span class="font-weight-bold">Liquide Märkte</span>: Kaufe Aktien, die jederzeit am Markt verkauft werden können. Dazu gehören Blue Chips (siehe oben). Bei Penny Stocks' +
          '(Aktien unter 1 EUR) oder Aktien aus Entwicklungsländern kann es passieren, daß man keinen Abnehmer am Markt findet.' +
        '</li>' +
        '</ul>',
    more: {
      name: 'Sechs goldene Regeln (ARD)',
      url: 'https://boerse.ard.de/boersenwissen/boersenwissen-grundlagen/sechs-goldene-regeln-100.html'
    }
  },
  {
    route: ROUTES_INVESTMENTFONDS,
    headline: 'Was sind Investmentfonds',
    body: '<div class="margin vertical top-bottom-10">' +
      'Ein Investmentfonds oder Fonds ist eine Art Anlage-Pool, d.h. eine Zahl von Investoren geben einer Institution (genannt Kapitalanlagegesellschaft bzw. KAG) Geld und diese investiert ' +
      'das Geld. Ein einzelner Fonds hat natürlich ein klares Anlageziel bzw. eine Anlagestrategie, so daß Anleger vorher wissen auf was sie sich einlassen. So gibt es Fonds, die in ' +
      'Aktien (<span class="font-weight-bold">Aktienfonds</span>), ' +
      'Immobilien (<span class="font-weight-bold">Immobilienfonds</span>) oder ' +
      'Schiffe (<span class="font-weight-bold">Schiffsfonds</span>) investieren. ' +
      '</div>' +
      '<div class="margin vertical top-bottom-10">' +
      'Ein Fonds kann offen oder geschlossen sein. Die Entscheidung trifft die KAG. Offene Fonds können jederzeit gekauft und verkauft werden. ' +
      'Geschlossene Fonds wiederum können meist nur bei der Auflage erworben werden und sind vor Ende der festgelegten Laufzeit schwer verkaufbar oder ' +
      'gar nicht verkaufbar.' +
      '</div>' +
      '<div class="margin vertical top-bottom-10">' +
      'Eine KAG unterliegt strengen Regeln. Sie haben die Pflicht zur Transparenz (inbesondere in Sachen Kosten) und zur Erstellung eines Verkaufsprospekt. ' +
      'Apropos Kosten. Es versteht sich von selbst, daß eine KAG Kosten produziert, die sie den Anlegern berechnet, meist beim Kauf und dann jährlich). ' +
      'Dieser Kostenbetrag wird TER (Total Expense Ratio) genannt.' +
      '</div>' +
      '<div class="margin vertical top-bottom-10">' +
      'Die TER ist von KAG zu KAG unterschiedlich und sollte im Verkaufsprospekt klar ausgewiesen sein. Des Weiteren hängt sie davon ab, ob ein Fonds aktiv oder passiv gemanagt wird.' +
      '</div>' +
      '<ul class="list-group">' +
        '<li class="list-group-item">' +
          '<span class="font-weight-bold">Aktiv gemanagte Fonds</span>: Ein Team (um einen Fondsmanager herum) betreibt viel Arbeit um die vermeintlich besten Investments zu finden. ' +
          'Es trifft die Kauf- und Verkaufsentscheidungen. Dafür wird es meist mit einem TER zwischen 1 und 5% belohnt' +
        '</li>' +
        '<li class="list-group-item">' +
          '<span class="font-weight-bold">Passiv gemanagte Fonds (ETFs)</span>: Der Fonds bildet einen Index (z.B. den DAX) nach. Dafür ist meist nur eine entsprechende Software, die ' +
          '"die Arbeit" macht. Daher sind die Kosten meist viel günstiger als bei einem aktive gemanagten Fonds. Die TER liegt oft unter 1%.' +
        '</li>' +
      '</ul>',
    more: {
      name: 'Finanzfluss.de',
      url: 'https://www.finanzfluss.de/was-sind-investmentfonds/'
    }
  }
];
