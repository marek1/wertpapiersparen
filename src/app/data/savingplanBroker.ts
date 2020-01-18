import { SavingPlanBroker } from '../interfaces/broker';
import { Comdirect } from './broker/comdirect';
import { Consors } from './broker/consors';
import { Dkb } from './broker/dkb';
import { Flatex } from './broker/flatex';

export const SavingplanBroker: SavingPlanBroker[] = [
  Comdirect,
  Consors,
  Dkb,
  Flatex
];

