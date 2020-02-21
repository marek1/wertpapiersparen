import { RiskClasses } from '../enums/riskClasses';

export interface RiskDefinition {
  value: number;
  header: string;
  text: string;
}

export const RiskDefinitions: RiskDefinition[] = [
  {
    value: RiskClasses.Keine,
    header: 'Keine Risikobereitschaft',
    text: 'Kaum Risiko'
  },
  {
    value: RiskClasses.Gering,
    header: 'Geringe Risikobereitschaft',
    text: 'Wenig Risiko'
  },
  {
    value: RiskClasses.Gewisse,
    header: 'Gewisse Risikobereitschaft',
    text: 'Normales Risiko'
  },
  {
    value: RiskClasses.Hohe,
    header: 'Hohe Risikobereitschaft',
    text: 'Hohes Risiko'
  }
];
