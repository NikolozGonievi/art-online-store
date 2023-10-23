import { notFound } from "next/navigation";
import { NextRequest } from "next/server";

export const locales = ["en", "ka", "ru"];

const defaultLocale = "ka";

// Get the preferred locale, similar to the above or using a library
export function getLocale(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const activeLocale = locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // console.log("middleware getLocale", pathname, activeLocale);
  return activeLocale /* ?? defaultLocale */;
}

export default function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocale(request);
  // console.log("middleware", locale, pathname , request.nextUrl);
  if (locale) {
    request.nextUrl.pathname = `/${locale}${pathname}`;
  } else {
    // request.nextUrl.pathname = `/${defaultLocale}/not-found`;
    request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
  }
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return Response.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
