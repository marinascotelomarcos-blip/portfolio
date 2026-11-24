import type { Lang } from './content';
export const ABOUTX = {
  en: {
    dossier: 'File',
    facts: [
      ['Studying', 'Business Engineering, UIE A Coruña · 2023–2027'],
      ['Abroad', 'California 2021–22 · Erasmus Poznań 2026'],
      ['Looking for', 'Curricular internship from January 2027'],
      ['Strong at', 'Operations, data, small systems that run daily'],
    ],
    work: 'Experience', study: 'Education',
    cred: 'Languages and credentials',
    tiles: [
      { id: 'es', name: 'Spanish', sub: 'Native' },
      { id: 'gl', name: 'Galician', sub: 'Native' },
      { id: 'en', name: 'English', sub: 'B2' },
      { id: 'ielts', name: 'IELTS Academic', sub: 'Band 6.0 · 2024', badge: '6.0' },
      { id: 'b', name: 'Driving licence B', sub: 'Car · since 2024', badge: 'B' },
    ],
  },
  es: {
    dossier: 'Ficha',
    facts: [
      ['Estudia', 'Ingeniería de la Empresa, UIE A Coruña · 2023–2027'],
      ['Fuera', 'California 2021–22 · Erasmus Poznań 2026'],
      ['Busca', 'Prácticas curriculares desde enero de 2027'],
      ['Se le da bien', 'Operaciones, datos y sistemas pequeños que funcionan a diario'],
    ],
    work: 'Experiencia', study: 'Formación',
    cred: 'Idiomas y acreditaciones',
    tiles: [
      { id: 'es', name: 'Español', sub: 'Nativo' },
      { id: 'gl', name: 'Gallego', sub: 'Nativo' },
      { id: 'en', name: 'Inglés', sub: 'B2' },
      { id: 'ielts', name: 'IELTS Academic', sub: 'Nota 6.0 · 2024', badge: '6.0' },
      { id: 'b', name: 'Permiso de conducir B', sub: 'Coche · desde 2024', badge: 'B' },
    ],
  },
} as const;
