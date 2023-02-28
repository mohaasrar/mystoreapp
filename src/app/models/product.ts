export interface Product {
  id?: number;
  name: string;
  price: number;
  url: string;
  description: string;
  stockbalance: number;
  selectedqty?: number;
}
