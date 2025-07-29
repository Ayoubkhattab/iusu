import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Match only internationalized pathnames
  // matcher: ["/", "/(ar|en|tr)/:path*"],
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|images).*)",
    "/(ar|en|tr)/:path*",
  ], // Exclude api, static, image, favicon
};

// '/((?!_next|_vercel|.*\\..*).*)'
