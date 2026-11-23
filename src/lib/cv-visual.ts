import type { Lang } from './content';

/** Short, visual copy for the Cinco Vidas page. Every figure comes from the project's own files or from Marcos. */
export const CVV: Record<Lang, {
  stats: { n: number; plus?: boolean; l: string }[];
  phonesTitle: string;
  originTitle: string; origin: { i: string; t: string; d: string }[];
  rulesTitle: string; chips: string[]; roundsLabel: string; blind: string;
  steps: { i: string; t: string; d: string }[];
  modesTitle: string;
  decTitle: string; dec: { i: string; t: string; d: string }[];
  hoodTitle: string; hood: { i: string; t: string }[];
  who: string;
  futureTitle: string; future: string;
}> = {
  en: {
    stats: [
      { n: 201, l: 'commits in six weeks' },
      { n: 7, l: 'game modes' },
      { n: 0, l: 'dependencies' },
      { n: 200, plus: true, l: 'games played by some friends' },
    ],
    phonesTitle: 'On the phone',
    originTitle: 'Where it comes from',
    origin: [
      { i: 'loop', t: 'Back to tradition', d: 'We wanted to play the old card games again.' },
      { i: 'nocards', t: 'No cards in bars', d: 'In more and more bars there is no deck any more.' },
      { i: 'phonecard', t: 'Old meets new', d: 'The Spanish deck on the phone, the way young people play now.' },
    ],
    rulesTitle: 'How it plays',
    chips: ['48 cards', '2 to 9 players', '3 or 5 lives'],
    roundsLabel: 'Cards per round',
    blind: 'Blind round: you cannot see your own card',
    steps: [
      { i: 'bet', t: 'Bet', d: 'Say how many tricks you will win. The dealer goes last.' },
      { i: 'play', t: 'Play', d: 'The highest card takes the trick and leads the next.' },
      { i: 'pay', t: 'Pay', d: 'Miss your bet and lose as many lives as the gap.' },
    ],
    modesTitle: 'Seven games, one engine',
    decTitle: 'Decisions that shaped it',
    dec: [
      { i: 'gear', t: 'One engine', d: 'Each game only changes its rules.' },
      { i: 'shield', t: 'Server decides', d: 'It never trusts the client.' },
      { i: 'db', t: 'Rooms survive', d: 'A deploy no longer ends a game.' },
      { i: 'zero', t: 'Free first', d: 'Free tiers; I deploy when nobody is playing.' },
      { i: 'scale', t: 'Closed economy', d: 'Bets never create coins.' },
    ],
    hoodTitle: 'Under the hood',
    hood: [
      { i: 'cube', t: 'Node.js only, no libraries' },
      { i: 'bell', t: 'Web push (RFC 8291 and VAPID)' },
      { i: 'check', t: 'End-to-end tests with bots' },
      { i: 'knight', t: 'Chess engine in its own thread' },
    ],
    who: 'Built by directing Claude Code. Card art generated with ChatGPT. The rules, decisions and testing are mine.',
    futureTitle: 'Next: the App Store',
    future: 'From a web app you install to a real iOS app.',
  },
  es: {
    stats: [
      { n: 201, l: 'commits en seis semanas' },
      { n: 7, l: 'modos de juego' },
      { n: 0, l: 'dependencias' },
      { n: 200, plus: true, l: 'partidas jugadas por algunos amigos' },
    ],
    phonesTitle: 'En el móvil',
    originTitle: 'De dónde sale',
    origin: [
      { i: 'loop', t: 'Volver a lo tradicional', d: 'Queríamos jugar otra vez a los juegos de cartas de siempre.' },
      { i: 'nocards', t: 'Sin cartas en los bares', d: 'En cada vez más bares ya no hay baraja.' },
      { i: 'phonecard', t: 'Lo antiguo y lo nuevo', d: 'La baraja española en el móvil, como juega la juventud de hoy.' },
    ],
    rulesTitle: 'Cómo se juega',
    chips: ['48 cartas', 'De 2 a 9 jugadores', '3 o 5 vidas'],
    roundsLabel: 'Cartas por ronda',
    blind: 'Ronda a ciegas: no ves tu propia carta',
    steps: [
      { i: 'bet', t: 'Apuesta', d: 'Di cuántas bazas ganarás. Quien reparte va el último.' },
      { i: 'play', t: 'Juega', d: 'La carta más alta se lleva la baza y abre la siguiente.' },
      { i: 'pay', t: 'Paga', d: 'Si fallas, pierdes tantas vidas como la diferencia.' },
    ],
    modesTitle: 'Siete juegos, un motor',
    decTitle: 'Decisiones que lo moldearon',
    dec: [
      { i: 'gear', t: 'Un motor', d: 'Cada juego solo cambia sus reglas.' },
      { i: 'shield', t: 'Manda el servidor', d: 'Nunca se fía del cliente.' },
      { i: 'db', t: 'Las salas sobreviven', d: 'Una subida ya no acaba la partida.' },
      { i: 'zero', t: 'Primero, gratis', d: 'Planes gratuitos; publico si no hay nadie jugando.' },
      { i: 'scale', t: 'Economía cerrada', d: 'Las apuestas nunca crean monedas.' },
    ],
    hoodTitle: 'Por dentro',
    hood: [
      { i: 'cube', t: 'Solo Node.js, sin librerías' },
      { i: 'bell', t: 'Notificaciones push (RFC 8291 y VAPID)' },
      { i: 'check', t: 'Pruebas de extremo a extremo con bots' },
      { i: 'knight', t: 'Motor de ajedrez en un hilo aparte' },
    ],
    who: 'Lo construyo dirigiendo a Claude Code. El arte de las cartas lo generé con ChatGPT. Las reglas, las decisiones y las pruebas son mías.',
    futureTitle: 'Lo siguiente: la App Store',
    future: 'De una web que se instala a una app de iOS de verdad.',
  },
};

/** 24x24 stroke icons drawn for this page. */
export const ICONS: Record<string, string> = {
  loop: 'M4 12a8 8 0 0 1 13.5-5.8M20 4v4h-4M20 12a8 8 0 0 1-13.5 5.8M4 20v-4h4',
  nocards: 'M7 4h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM4 4l16 16',
  phonecard: 'M8 3h8a1.5 1.5 0 0 1 1.5 1.5v15A1.5 1.5 0 0 1 16 21H8a1.5 1.5 0 0 1-1.5-1.5v-15A1.5 1.5 0 0 1 8 3zM10 8h4v6h-4z',
  bet: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v10M9.5 9.5h4a1.7 1.7 0 0 1 0 3.5h-3a1.7 1.7 0 0 0 0 3.5h4',
  play: 'M5 6h8v12H5zM13 8l6 2-2.5 9-6-2',
  pay: 'M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10zM9 12h6',
  gear: 'M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1',
  shield: 'M12 3l7 3v5c0 5-3 8.5-7 10-4-1.5-7-5-7-10V6zM9 12l2 2 4-4',
  db: 'M5 6c0-1.7 3.1-3 7-3s7 1.3 7 3-3.1 3-7 3-7-1.3-7-3zM5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6',
  zero: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM9.5 9.5a2.5 2.5 0 0 1 5 0v5a2.5 2.5 0 0 1-5 0z',
  scale: 'M12 4v16M5 8h14M7 8l-3 6a3 3 0 0 0 6 0zM17 8l-3 6a3 3 0 0 0 6 0z',
  cube: 'M12 3l8 4.5v9L12 21l-8-4.5v-9zM12 12l8-4.5M12 12v9M12 12L4 7.5',
  bell: 'M6 16v-5a6 6 0 0 1 12 0v5l1.5 2h-15zM10 20a2 2 0 0 0 4 0',
  check: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM8.5 12.5l2.5 2.5 4.5-5',
  knight: 'M8 20h9M9 20c0-4 1-5 1-7-2 1-4 0-5-2l4-7c4-1 8 1 8 6 0 3-2 4-2 10',
  store: 'M8 3h8a1.5 1.5 0 0 1 1.5 1.5v15A1.5 1.5 0 0 1 16 21H8a1.5 1.5 0 0 1-1.5-1.5v-15A1.5 1.5 0 0 1 8 3zM12 8v6M9.5 11.5L12 14l2.5-2.5',
  eyeoff: 'M3 12s3.5-6 9-6 9 6 9 6-3.5 6-9 6-9-6-9-6zM12 9.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4 4l16 16',
};

/** The seven modes: own drawn glyphs, one colour each (suit colours of the game). */
export const MODES: { name: string; color: string; d: string }[] = [
  { name: 'Cinco Vidas', color: '#d8322c', d: 'M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z' },
  { name: 'Brisca', color: '#c58b00', d: 'M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z' },
  { name: 'Culo', color: '#2f9b4a', d: 'M12 4v13M7 12l5 5 5-5M6 20h12' },
  { name: 'Chinchón', color: '#2c63c8', d: 'M4 8l4-1.5 2.6 7.5-4 1.5zM9 6.5h5l2 8.5h-5zM15 7l4 1.5-2.6 7.5-4-1.5z' },
  { name: 'Mus', color: '#d8322c', d: 'M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM16 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM3 20c0-3 2.2-5 5-5s5 2 5 5M11 20c0-3 2.2-5 5-5s5 2 5 5' },
  { name: 'Escoba', color: '#2f9b4a', d: 'M14 3l-3 9M8 12h8l2 8H6zM9 15v5M12 15v5M15 15v5' },
  { name: 'Ajedrez', color: '#44525c', d: 'M12 6a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM10 11l-1 5h6l-1-5M7 20h10M8 16l-1 4M16 16l1 4' },
];
