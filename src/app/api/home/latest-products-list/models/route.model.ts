export type IProductListItemFull = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string /* "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg"; */;
  rating: { rate: number; count: number };
};

export type IProductListItemResponse = {
  category: string;
  products: Array<{
    id: number;
    title: string;
    price: number;
    image: string /* "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg"; */;
    rating: { rate: number; count: number };
  }>;
};
