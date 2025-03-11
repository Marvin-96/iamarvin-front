import { NextResponse } from 'next/server';

export function middleware(request) {
  const lang = request.cookies.get('lang') || 'fr'; // Remplace 'fr' par ta langue par défaut
  const url = request.nextUrl.clone();
  url.locale = lang; // Définit la locale en fonction du cookie ou d'une valeur par défaut
  return NextResponse.rewrite(url);
}
