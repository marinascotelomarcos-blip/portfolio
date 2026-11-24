// Cualquier dirección *.pages.dev redirige al dominio propio (2026-11-24).
const DOMINIO = 'marcosmarinascotelo.com';
export const onRequest = async ({ request, next }) => {
  const url = new URL(request.url);
  if (url.hostname.endsWith('.pages.dev')) {
    url.protocol = 'https:';
    url.hostname = DOMINIO;
    url.port = '';
    return Response.redirect(url.toString(), 301);
  }
  return next();
};
