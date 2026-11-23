import type { Lang } from './content';
export const CREDS = {
  en: {
    title: 'Languages and credentials',
    sub: 'What I can work in, and what I can prove.',
    langs: [
      { id: 'es', name: 'Spanish', level: 'Native', bars: 5 },
      { id: 'gl', name: 'Galician', level: 'Native', bars: 5 },
      { id: 'en', name: 'English', level: 'B2 · IELTS 6.0', bars: 3 },
    ],
    ielts: { label: 'Certificate', name: 'IELTS Academic', score: '6.0', meta: 'June 2024 · valid until June 2035', band: 'Overall band' },
    licence: { label: 'Driving licence', cat: 'B', meta: 'Car · since May 2024', hint: 'Own car, free to move' },
    portalAbout: { k: '01', t: 'About me', d: 'Story, experience, education, tools.' },
    portalContact: { k: '02', t: 'Contact', d: 'Internship from January 2027. Write or call.' },
    portalTitle: 'Start here',
  },
  es: {
    title: 'Idiomas y acreditaciones',
    sub: 'En qué puedo trabajar y qué puedo demostrar.',
    langs: [
      { id: 'es', name: 'Español', level: 'Nativo', bars: 5 },
      { id: 'gl', name: 'Gallego', level: 'Nativo', bars: 5 },
      { id: 'en', name: 'Inglés', level: 'B2 · IELTS 6.0', bars: 3 },
    ],
    ielts: { label: 'Certificado', name: 'IELTS Academic', score: '6.0', meta: 'junio 2024 · válido hasta junio 2035', band: 'Puntuación global' },
    licence: { label: 'Permiso de conducir', cat: 'B', meta: 'Coche · desde mayo de 2024', hint: 'Coche propio, movilidad total' },
    portalAbout: { k: '01', t: 'Sobre mí', d: 'Historia, experiencia, formación, herramientas.' },
    portalContact: { k: '02', t: 'Contacto', d: 'Prácticas desde enero de 2027. Escríbeme o llámame.' },
    portalTitle: 'Empieza aquí',
  },
} as const;
export const c = (l: Lang) => CREDS[l];
