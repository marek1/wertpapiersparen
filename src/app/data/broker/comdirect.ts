import { SecurityType } from '../../enums/securityType';
import { Broker } from '../../interfaces/broker';
import { SavingFrequency } from '../../enums/savingFrequency';

export const Comdirect: Broker = {
  name: 'Comdirect',
  url: 'https://www.comdirect.de/geldanlage/wertpapier-sparplan.html',
  logo: 'https://www.comdirect.de/cms/img/comdirect-logo-lg-2x.jpg',
  securityTypesIncluded: [SecurityType.ETF, SecurityType.Aktie],
  maxNumberPerSavingPlan: 1,
  minAmountToBeSaved: 25,
  frequencies: [SavingFrequency.monatlich, SavingFrequency.zweimonatlich, SavingFrequency.vierteljaehrlich],
  costs: 1.5,
  fixAmountOrPercent: '%'
};
