import { ResponsibilityType } from '../../enums/responsibility';
import { allianzCompany } from '../companies/allianz';

interface ShareRank {
  id: number;
  points: number;
}

interface Ranking {
  name: string;
  responsibilityType: ResponsibilityType;
  issuer: string;
  link: string;
  results: {number: ShareRank};
}

export const globalanceFootprint = {
  name: 'Globalance Footprint',
  responsibilityType: ResponsibilityType.Nachhaltigkeit,
  issuer: 'Globalance Bank',
  link: 'https://www.handelsblatt.com/finanzen/anlagestrategie/trends/globalance-footprint-so-nachhaltig-sind-die-dax-unternehmen/24245144.html',
  results: {
    1: {
      id: allianzCompany.id,
      points: 89
    }
  }
};
