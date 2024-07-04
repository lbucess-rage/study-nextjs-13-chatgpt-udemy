import { NextResponse } from 'next/server';

export function middleware(req, res, next) {
	// Middleware
	// console.log('middleware');

	// return Response.json({
	// 	msg: 'hello there'
	// });

	return NextResponse.redirect(new URL('/', req.url));
}

export const config = {
	matcher: ['/about/:path*']
};
