import { Industry } from './industry';

export interface Product {
  id: number;
  name: string;
  image?: string;
  logo?: string;
  segment?: number;
}
