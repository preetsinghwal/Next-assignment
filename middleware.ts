import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
    const token = req.cookies.get('auth_token')?.value
    const { pathname } = req.nextUrl;

    const isAuthRoute = pathname === '/login'
    const isProtected = ['/dashboard', '/profile'].includes(pathname)

    if(!token && isProtected) {
        const url = req.nextUrl.clone()
        url.pathname = '/login'
        return NextResponse.redirect(url)
    }

    if(token && isAuthRoute) {
        const url = req.nextUrl.clone()
        url.pathname = '/dashboard'
        return NextResponse.redirect(url)
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/dashboard', '/profile', '/login']
}