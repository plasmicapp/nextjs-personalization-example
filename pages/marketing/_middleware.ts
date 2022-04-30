import { NextRequest, NextResponse } from 'next/server';

function getPersonalizedRoute(
  url: string,
  cookies: Record<string, string>,
  geo?: {
    city?: string | undefined;
    country?: string | undefined;
    region?: string | undefined;
    latitude?: string | undefined;
    longitude?: string | undefined;
  },
  ua?: {
    isBot: boolean;
    ua: string;
    browser: {
      name?: string;
      version?: string;
    };
    device: {
      model?: string;
      type?: string;
      vendor?: string;
    };
    engine: {
      name?: string;
      version?: string;
    };
    os: {
      name?: string;
      version?: string;
    };
    cpu: {
      architecture?: string;
    };
  } | null,
): string | undefined {
  // Choose a random route for this example
  const MARKETING_ROUTES = ['/marketing/original', '/marketing/women', '/marketing/men'] as const;
  return MARKETING_ROUTES[Math.floor(Math.random() * MARKETING_ROUTES.length)];
}

export function middleware(req: NextRequest) {
  // Get the personalized route
  const newRoute = getPersonalizedRoute(
		req.url,
		req.cookies,
		req.geo,
		req.ua
  );
  
	// Bypass if not found
  if (!newRoute) {
	  return;
  }

  // Proxy to the appropriate variant
  const url = req.nextUrl.clone();
  url.pathname = newRoute;
  return NextResponse.rewrite(url);
}