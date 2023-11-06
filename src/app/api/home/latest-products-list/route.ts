import { NextRequest, NextResponse } from "next/server";

import { getProductsListDataMapper } from "./mappers/response-mapper";

export async function GET(request: NextRequest) {
  try {
    const getElectronics = await fetch(
      "https://fakestoreapi.com/products/category/electronics?limit=2"
    ).then((res) => res.json());

    const getJewelery = await fetch(
      "https://fakestoreapi.com/products/category/jewelery?limit=2"
    ).then((res) => res.json());

    const promises = await Promise.all([getElectronics, getJewelery]);

    const productsGroupByCategory = getProductsListDataMapper(
      promises.flatMap((item) => item)
    );

    return NextResponse.json(productsGroupByCategory, {
      status: 200,
      statusText: "success",
    });
  } catch {
    return NextResponse.json(
      new Error("moxda error", {
        cause: "ragaca",
      }),
      {
        status: 500,
        statusText: "erroraa",
      }
    );
  }
}

export async function POST(request: NextRequest) {
  return NextResponse.json({}, { status: 201, statusText: "message" });
}
