import { IProductListItemResponse } from "@/app/api/home/latest-products-list/models/route.model";
import { apiGET, apiPOST } from "../api/api.service";

export async function getLatestProductsList() /* :Promise<IProductListItemResponse> */ {
  return apiGET("home/latest-products-list", { });
}

export async function postProductTest() {
  return apiPOST("home/latest-products-list", { test: "data" });
}
