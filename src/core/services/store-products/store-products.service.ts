import { apiGET } from "../api/api.service";

export async function getProductsList(){
    return apiGET('store/products-list')
}