import NextAuth from "next-auth";

import authConfig from "./auth.config";
import {apiAuthPrefix, authRoutes, DEFAULT_LOGIN_REDIRECT, publicRoutes,} from "@/routes";
import {NextResponse} from "next/server";

const {auth} = NextAuth(authConfig);

export default auth((req) => {
    const {nextUrl} = req;
    const isLoggedIn = !!req.auth;

    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
    const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
    const isAuthRoute = authRoutes.includes(nextUrl.pathname);
    const headers = new Headers(req.headers);
    headers.set("x-current-path", req.nextUrl.pathname);


    if (isApiAuthRoute) {
        return;
    }

    if (isAuthRoute) {
        if (isLoggedIn) {
            const callbackUrl = nextUrl.searchParams.get("CallbackUrl") || DEFAULT_LOGIN_REDIRECT;
            return Response.redirect(new URL(callbackUrl, nextUrl));
        }
        return NextResponse.next({headers});
    }

    if (!isLoggedIn && !isPublicRoute) {
        let callbackUrl = nextUrl.pathname;
        if (nextUrl.search) {
            callbackUrl += nextUrl.search;
        }
        const encodedCallbackUrl = encodeURIComponent(callbackUrl);


        return Response.redirect(
            new URL(`/auth?callbackUrl=${encodedCallbackUrl}`, nextUrl)
        );
    }

    return NextResponse.next({headers});
});

// Optionally, don't invoke Middleware on some paths
export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/(api|trpc)(.*)"],
};