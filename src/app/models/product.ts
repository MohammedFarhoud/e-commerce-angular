import { Category } from './category';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  is_in_cart: boolean;
  is_in_wishlist: boolean;
  images: string[];
  category: Category;
}
