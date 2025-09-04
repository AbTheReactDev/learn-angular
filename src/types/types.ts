export interface Hobby {
  id: number;
  name: string;
}

export interface Product {
  id: string;
  name: string;
  name_en: string;
  description: string;
  description_en: string;
  price: number;
  image: string;
  images: string[];
  category: string;
  category_en: string;
  stock: number;
  rating: number;
  reviews: number;
  featured: boolean;
  details: string;
  details_en: string;
  variants: {
    label: string;
    price: number;
  }[];
  reviewsList: {
    name: string;
    comment: string;
    rating: number;
  }[];
}
