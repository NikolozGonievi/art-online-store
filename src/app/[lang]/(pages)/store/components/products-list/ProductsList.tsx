import { getProductsList } from "@/core/services/store-products/store-products.service";

export default async function ProductsList() {

    const products  = await getProductsList()
    console.log('product', products);
    
  return <></>;
}
