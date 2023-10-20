import {
  IProductListItemFull,
  IProductListItemResponse,
} from "../models/route.model";

export function getProductsListDataMapper(
  dataArray: IProductListItemFull[]
): IProductListItemResponse[] {
  const categories = ["electronics", "jewelery"];

  return categories.map((categoryName) => {
    const productsList = dataArray
      .filter((product) => product.category === categoryName)
      .map((product) => {
        const { id, title, image, price, rating } = product;
        return {
          id,
          title,
          image,
          price,
          rating,
        };
      });
    return {
      category: categoryName,
      products: productsList,
    };
  });
}
