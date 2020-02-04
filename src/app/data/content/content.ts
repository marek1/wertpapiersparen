import { ROUTES_IN_AKTIEN_INVESTIEREN, ROUTES_RISIKO_INVESTITION, ROUTES_WAS_SIND_AKTIEN } from '../../routes';

export interface HeadlineBodySource {
  route: string;
  headline: string;
  body: string;
  source: string;
  more: string;
}

export const content: HeadlineBodySource[] = [
  {
    route: ROUTES_WAS_SIND_AKTIEN,
    headline: 'Was sind Aktien',
    body: 'Die Aktie ist ein Wertpapier, das den Anteil an einer Aktiengesellschaft oder einer Kommanditgesellschaft auf Aktien verbrieft. [..]' +
      'Die Aktie ist ein Finanzierungsinstrument für die Kapitalgesellschaften der Aktiengesellschaft (AG), Kommanditgesellschaft auf Aktien' +
      '(KGaA) oder Europäischen Gesellschaft (SE). Mit ihm können sich diese Rechtsformen Eigenkapital (Grundkapital oder Kommanditkapital)' +
      'beschaffen, indem sie diese Aktien auf dem Aktienmarkt an Aktionäre veräußern.',
    source: 'https://de.wikipedia.org/wiki/Aktie',
    more: 'https://www.finanzfluss.de/was-sind-aktien/'
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
    source: '',
    more: '',
  },
  {
    route: ROUTES_IN_AKTIEN_INVESTIEREN,
    headline: 'Richtig an der Börse agieren',
    body: 'Risiken minimieren (LINK), Blue Chips, ',
    source: '',
    more: ''
  }
];
