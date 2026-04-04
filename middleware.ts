import createMiddleware from "next-intl/middleware";
import {routing} from "./i18n/routing";
import {NextRequest} from "next/server";

const intlMiddleware = createMiddleware(routing);

export default function middleware(req: NextRequest) {
	const {pathname} = req.nextUrl;

	if (
		pathname.startsWith("/_next") ||
		pathname.startsWith("/api") ||
		pathname.includes(".") 
	) {
		return;
	}

	return intlMiddleware(req);
}
