import { NextRequest, NextResponse } from "next/server";
import { AUTH, DASHBOARD } from "@/components/constants/routes.constants";
import { tokenService } from "@/services/token";

export async function middleware(req: NextRequest, res: NextResponse) {
	const { url, cookies } = req;

	const refreshToken = cookies.get(tokenService.REFRESH_TOKEN_NAME)?.value;

	if (refreshToken && url.includes(AUTH.BASE_URL)) {
		return NextResponse.redirect(new URL(DASHBOARD.BASE_URL, url));
	}

	if (!refreshToken && url.includes(DASHBOARD.BASE_URL)) {
		return NextResponse.redirect(new URL(AUTH.REGISTER, url));
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/auth/:path*", "/tasks/:path*"],
};
//
