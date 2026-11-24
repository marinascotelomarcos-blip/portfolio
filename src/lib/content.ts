export type Lang = 'en' | 'es';
export const LANGS: Lang[] = ['en', 'es'];

export const EMAIL = 'marinascotelomarcos@gmail.com';
export const LINKEDIN = 'https://www.linkedin.com/in/marcos-mari%C3%B1as-cotelo-33035b299';
export const GITHUB = 'https://github.com/marinascotelomarcos-blip';
export const PHONE = '+34 603 014 514';
export const PHONE_TEL = 'tel:+34603014514';
/** Instagram handle not provided yet: the tile appears as soon as this has a URL. */
export const INSTAGRAM = '';
export const CV = '/cv/Marcos-Marinas-CV-ES.pdf';
export const GAME_URL = 'https://cinco-vidas.onrender.com';

/** Countries Marcos has actually been to (completed trips and stays). */
export const VISITED = ['AD','AL','AT','BE','CA','CZ','DE','DK','ES','GB','GR','HR','HU','IT','MA','MT','NL','NO','PL','PT','TR','US'];

type Project = {
  slug: 'cinco-vidas' | 'dashboard' | 'ciclo-watches';
  name: string;
  line: string;
  status: string;
  since: string;
};

type Dict = {
  htmlLang: string;
  meta: { title: string; description: string };
  nav: { projects: string; about: string; contact: string; home: string };
  bar: { commands: string; mode: string; reading: string; system: string; lang: string };
  palette: { placeholder: string; empty: string; groups: { go: string; do: string }; toggleMode: string; switchLang: string; cv: string; email: string };
  home: {
    name: string; headline: string; intro: string;
    projectsTitle: string; projects: Project[];
    routeTitle: string; route: { when: string; where: string; what: string; lat?: number; lon?: number }[];
    room: { id: string; label: string; status: string; href: string }[]; roomHint: string; smallTitle: string;
    routeUi: { study: string; work: string; next: string; play: string; pause: string; prev: string; nextStop: string; hint: string; stops: string };
    routeNext: { headline: string; lede: string; days: string; now: string; chips: string[]; write: string; cv: string };
    closeTitle: string; closeText: string; write: string; cv: string;
  };
  about: {
    title: string; lede: string;
    storyTitle: string; story: string[];
    expTitle: string; exp: { role: string; org: string; when: string; what: string }[];
    eduTitle: string; edu: { title: string; org: string; when: string }[];
    toolsTitle: string; tools: { label: string; items: string }[];
    marketsTitle: string; markets: string;
    mapTitle: string; mapText: string; mapNote: string;
    outsideTitle: string; outside: string;
    aiTitle: string; ai: string;
  };
  contact: { title: string; lede: string; email: string; linkedin: string; cv: string; cvNote: string; looking: string };
  common: { status: string; role: string; stack: string; since: string; live: string; back: string; private: string; built: string };
  cv: {
    title: string; lede: string;
    facts: { status: string; role: string; stack: string; since: string };
    shotsTitle: string;
    shots: { src: string; alt: string; cap: string }[];
    whatTitle: string; what: string[];
    decTitle: string; dec: { t: string; d: string }[];
    underTitle: string; under: string[];
    aiTitle: string; ai: string;
    play: string;
    origin: { title: string; text: string[] };
    future: { title: string; text: string[]; github: string };
    tryit: { title: string; lede: string; cards: string; others: string; you: string; bad: string; none: string; good: string; trick: string; tricks: string; again: string };
  };
  dash: {
    title: string; lede: string;
    facts: { status: string; role: string; stack: string; since: string };
    demoTitle: string; demoNote: string;
    fnTitle: string;
    fns: { id: string; name: string; line: string }[];
    howTitle: string; how: string[];
    privTitle: string; priv: string;
  };
  ciclo: {
    title: string; lede: string;
    facts: { status: string; role: string; stack: string; since: string };
    imgAlt: string; visit: string; repo: string;
    piecesTitle: string; piecesHint: string; pieces: { img: string; name: string; line: string }[];
    matsTitle: string; mats: { img: string; name: string }[];
    flowTitle: string; flowHint: string; replay: string; fallback: string; n8nNote: string;
    flows: { id: string; name: string; nodes: { t: string; s?: string }[]; alt?: { t: string; s?: string } }[];
    siteTitle: string; site: string[];
    decTitle: string; dec: string[];
    who: string;
  };
  eng: {
    title: string; lede: string; paras: string[];
    learnTitle: string; learn: { t: string; d: string }[];
    exTitle: string; ex: string;
  };
  homeEng: string;
};

export const T: Record<Lang, Dict> = {
  en: {
    htmlLang: 'en',
    meta: {
      title: 'Marcos Mariñas Cotelo — Business engineer',
      description: 'Business engineering student (UIE, A Coruña) who turns processes into systems that work. Projects, route and contact. Internship from January 2027.',
    },
    nav: { projects: 'Projects', about: 'About', contact: 'Contact', home: 'Home' },
    bar: { commands: 'Commands', mode: 'Mode', reading: 'Reading', system: 'System', lang: 'ES' },
    palette: {
      placeholder: 'Go to or do something…', empty: 'Nothing matches.',
      groups: { go: 'Go to', do: 'Do' },
      toggleMode: 'Switch Reading / System mode', switchLang: 'Cambiar a español', cv: 'Download CV (Spanish, PDF)', email: 'Write an email',
    },
    home: {
      name: 'Marcos Mariñas Cotelo',
      headline: 'I turn processes into systems that work.',
      intro: 'Business engineering student at UIE in A Coruña, finishing in 2027. I come from operations and data, and I build the software around them: a card game my friends play, and a personal system that organises my day.',
      projectsTitle: 'Things I have built',
      projects: [
        { slug: 'cinco-vidas', name: 'Cinco Vidas', line: 'An online card game with the Spanish deck. Seven game modes, accounts, a shop and rooms that survive restarts.', status: 'In production', since: 'Since Oct 2026' },
        { slug: 'dashboard', name: 'Personal Dashboard', line: 'One private app for my day: agenda, lists, money, health, trips, and a team of scheduled agents.', status: 'Private · in use', since: 'Since Oct 2026' },
        { slug: 'ciclo-watches', name: 'CICLO Watches', line: 'A made-up company that sells smart watches you repair piece by piece. A university group project, with its own website and n8n automations.', status: 'Course project', since: 'Nov 2026' },
      ],
      routeTitle: 'Route',
      route: [
        { when: '2021–22', where: 'California', what: 'School year at Monterey Bay Academy', lat: 36.93, lon: -121.85 },
        { when: '2022–23', where: 'Santiago', what: 'Baccalaureate, Colegio Peleteiro', lat: 42.88, lon: -8.54 },
        { when: '2023–27', where: 'A Coruña', what: 'Business Engineering, UIE', lat: 43.36, lon: -8.41 },
        { when: '2026', where: 'Poznań', what: 'Erasmus, Poznań University of Technology', lat: 52.41, lon: 16.93 },
        { when: '2027', where: 'Next', what: 'Internship, from January' },
      ],
      room: [
        { id: 'cards', label: 'Cinco Vidas', status: 'In production', href: '/en/projects/cinco-vidas/' },
        { id: 'phone', label: 'Personal Dashboard', status: 'Private · in use', href: '/en/projects/dashboard/' },
        { id: 'globe', label: 'Route', status: 'California to Poznań', href: '/en/#route' },
        { id: 'mail', label: 'Contact', status: 'Internship 2027', href: '/en/contact/' },
      ],
      roomHint: 'Drag to turn the objects. Click one to open it.',
      smallTitle: 'Small things you can touch',
      routeUi: { study: 'Study', work: 'Work', next: 'Next', play: 'Play the tour', pause: 'Pause the tour', prev: 'Previous stop', nextStop: 'Next stop', hint: 'Pick a stop, use the arrows, or let it travel.', stops: 'Stops of the tour' },
      routeNext: { headline: 'Next stop: January 2027', lede: 'A curricular internship in project management, finance or operations.', days: 'days to go', now: 'Now', chips: ['ERP, MRP and Lean', 'Builds real software', 'Erasmus in Poland'], write: 'Write to me', cv: 'CV (Spanish, PDF)' },
      closeTitle: "Let's talk",
      closeText: 'Write to me, or take the CV with you.',
      write: 'Write to me', cv: 'CV (Spanish, PDF)',
    },
    about: {
      title: 'About',
      lede: 'Operations and data are what I like. Building things people actually use is how I learn.',
      storyTitle: 'Story',
      story: [
        'I spent a school year in California (2021–22), finished the baccalaureate in Santiago, and since 2023 I study Business Engineering at UIE in A Coruña. In 2026 I did an Erasmus semester at Poznań University of Technology.',
        'My base is operations: ERP and MRP, Lean, demand forecasting, Excel with Solver, R. On top of that I learn by building. In October 2026 I started a card game for my friends and a personal dashboard, and both turned into real software that runs every day.',
        'I work with an AI coding assistant and I say so: I decide what gets built, the rules, the design and what ships, and I test it with real people. I am not a software engineer, and I do not pretend to be.',
      ],
      expTitle: 'Experience',
      exp: [
        { role: 'Accounting and administrative assistant', org: 'MAS Servicios GESTEMCO, S.L.', when: 'Jun–Jul 2026', what: 'Curricular internship. Basic accounting, VAT, payroll and simple reports for small companies and freelancers, with A3Con and A3Nom.' },
        { role: 'Management and coordination assistant', org: 'ALEXCLA Facility Mgmt, S.L.', when: 'May–Jul 2025', what: 'Hotel management and works coordination: materials supervision, supplier coordination and administrative support.' },
        { role: 'Supply manager', org: 'Pescados Océano Atlántico, S.L.U.', when: 'Sep 2024–Jan 2025', what: 'Order coordination and daily delivery of fresh fish, focused on punctuality and customer service.' },
        { role: 'Waiter', org: 'Paca Hostelería, S.C.', when: 'Jun–Sep 2024', what: 'Customer service, bar, restocking and kitchen support.' },
      ],
      eduTitle: 'Education',
      edu: [
        { title: 'Degree in Business Engineering', org: 'Universidad Intercontinental de la Empresa, A Coruña', when: '2023–2027' },
        { title: 'Erasmus exchange', org: 'Poznań University of Technology, Poland', when: 'Feb–Jun 2026' },
        { title: 'Baccalaureate, Social Sciences', org: 'Colegio Peleteiro, Santiago de Compostela', when: '2022–2023' },
        { title: 'First year of baccalaureate', org: 'Monterey Bay Academy, California', when: '2021–2022' },
      ],
      toolsTitle: 'Tools and methods',
      tools: [
        { label: 'Tools', items: 'Excel and Solver, Power BI, n8n, Microsoft Dynamics AX, A3Con, A3Nom, R' },
        { label: 'Methods', items: 'Process improvement (A3, Lean, 5S), MRP, Kanban, ABC/XYZ, EOQ/ROP, demand forecasting' },
        { label: 'Languages', items: 'Spanish and Galician (native), English B2 (IELTS Academic 6.0, June 2024)' },
      ],
      marketsTitle: 'Markets',
      markets: 'I have invested since I was 18, with monthly contributions to index funds, and I follow the markets every day.',
      mapTitle: 'Places',
      mapText: '22 countries so far, from a school year in the United States to an Interrail summer and an Erasmus in Poland.',
      mapNote: 'Highlighted: countries I have been to.',
      outsideTitle: 'Outside the screen',
      outside: 'Surfing, skiing and the mountains, training in the gym, cooking for friends, indie music, and Deportivo de La Coruña.',
      aiTitle: 'How I use AI',
      ai: 'My projects are built by directing Claude Code, and the card art was generated with ChatGPT. What is mine: the idea, the rules, the decisions, the testing and the priorities.',
    },
    contact: {
      title: 'Contact',
      lede: 'Looking for a curricular internship from January 2027, mainly in project management, finance or operations.',
      email: 'Email', linkedin: 'LinkedIn', cv: 'CV', cvNote: 'PDF in Spanish. English version on request.',
      looking: 'A coffee or a call is fine.',
    },
    common: { status: 'Status', role: 'Role', stack: 'Stack', since: 'Since', live: 'Live', back: 'All projects', private: 'Private', built: 'Built with' },
    ciclo: {
      title: 'CICLO Watches',
      lede: 'A smart watch you repair piece by piece. The company is made up; the website and its automations are real work.',
      facts: {
        status: 'Course project · website online',
        role: 'Group 6 (UIE). Website and n8n automations, built with AI',
        stack: 'HTML, CSS and JavaScript; n8n and Google Sheets behind the forms',
        since: '11 Nov 2026',
      },
      imgAlt: 'A modular CICLO watch with its pieces',
      visit: 'Visit the website', repo: 'Code on GitHub',
      piecesTitle: 'Five pieces, one watch', piecesHint: 'Break a strap, change the strap.',
      pieces: [
        { img: 'pieza-caja', name: 'Case', line: 'Recycled aluminium' },
        { img: 'pieza-esfera', name: 'Bezel and back', line: 'Six recycled finishes' },
        { img: 'pieza-correas', name: 'Strap', line: 'Cotton, vegan leather or neoprene' },
        { img: 'pieza-bateria', name: 'Battery', line: 'Swap it, keep the watch' },
      ],
      matsTitle: 'Materials',
      mats: [
        { img: 'material-aluminio', name: 'Aluminium' },
        { img: 'material-plastico', name: 'Plastic' },
        { img: 'material-madera', name: 'Wood' },
        { img: 'material-correa', name: 'Strap fabric' },
      ],
      flowTitle: 'The automations behind the forms',
      flowHint: 'Pick a flow and watch the request travel.',
      replay: 'Replay',
      fallback: 'If n8n takes over 6 s, the site uses its own file',
      n8nNote: 'n8n free trial ended: flows saved, forms off',
      flows: [
        { id: 'cita', name: 'Repair booking', nodes: [
          { t: 'Web form', s: 'Name, date, hour' },
          { t: 'Valid?', s: 'With consent' },
          { t: 'Slot free?', s: 'Reads the sheet' },
          { t: 'Saves it', s: 'Google Sheets' },
          { t: 'Confirms', s: 'Email via Gmail' },
        ], alt: { t: 'Slot taken', s: 'Asks for another hour' } },
        { id: 'stock', name: 'Stock', nodes: [
          { t: 'Configurator', s: 'Asks for stock' },
          { t: 'n8n', s: 'Reads the sheet' },
          { t: 'Builds the answer', s: 'Units per piece' },
          { t: 'On screen', s: 'Sold out marked' },
        ] },
      ],
      siteTitle: 'On the website',
      site: ['Models and prices', 'Configurator', 'Traceability by batch code', 'Repair booking', 'Contact and assistant'],
      decTitle: 'Details I cared about',
      dec: ['Fails soft', 'Invented data is labelled', 'No empty promises', 'Accessible, 360 to 1440 px'],
      who: 'Group project. The business case and the report are the group’s; I built the website and the automations with Claude Code.',
    },
    eng: {
      title: 'What is Business Engineering?',
      lede: 'Short version: engineering applied to how companies run.',
      paras: [
        'Engineering applied to how a company runs: how an order becomes a delivery, how much stock to keep, how to produce without waste. Half engineering, half business.',
        'It sits between engineering and business. Engineering brings method and numbers; business brings the question, which is what the company needs. The goal is simple: a company that works better, costs less and surprises nobody.',
      ],
      learnTitle: 'What I study, in plain words',
      learn: [
        { t: 'Processes', d: 'Drawing how work really flows (BPMN, VSM) and finding the root cause of a problem.' },
        { t: 'Inventory and warehouses', d: 'How much to hold and when to reorder (ABC/XYZ, EOQ), so nothing runs out and nothing piles up.' },
        { t: 'Production', d: 'Planning materials and flow with MRP, Lean and simulation.' },
        { t: 'Data and AI', d: 'SQL, forecasting and automation with n8n, including agents that ask a person before acting.' },
        { t: 'Innovation', d: 'Turning an idea into a business case, as with CICLO.' },
      ],
      exTitle: 'An example',
      ex: 'A shop keeps running out of fresh food and throwing some away. A business engineer looks at the sales data, forecasts demand, sets when to reorder and redesigns the process around it.',
    },
    homeEng: 'What is Business Engineering?',
    cv: {
      title: 'Cinco Vidas',
      lede: 'The Spanish deck as an online game, played from the phone.',
      facts: {
        status: 'In production',
        role: 'Idea, rules and design; code directed with AI',
        stack: 'Node.js with no dependencies, SQLite in the cloud (Turso), vanilla JS front end, Render',
        since: '8 Oct 2026',
      },
      shotsTitle: 'On the phone',
      shots: [
        { src: '/img/cv-home.jpg', alt: 'Cinco Vidas home screen with the logo and a Play button', cap: 'Home' },
        { src: '/img/cv-table.jpg', alt: 'A table during a practice game: three players, bets and the hand of cards', cap: 'A round: bet, then play' },
        { src: '/img/cv-games.jpg', alt: 'Menu announcing new games: chess, chinchón, mus and escoba', cap: 'New game modes' },
      ],
      whatTitle: 'What it is',
      what: [
        'Each player bets how many tricks they will win. The dealer bets last and cannot make the bets add up to the number of cards. If you miss your bet, you lose as many lives as the difference. Rounds go 5, 4, 3, 2 and 1 cards, and the one-card round is played blind.',
        'It started as a game I play with my friends. It now has accounts, friends by QR, a shop with a virtual coin (no real money), daily gift, chests, achievements and levels, and seven modes: Cinco Vidas, brisca, culo, chinchón, mus, escoba and chess. Some of my friends have already played more than 200 games each.',
      ],
      decTitle: 'Decisions that shaped it',
      dec: [
        { t: 'One engine, many games', d: 'A shared room class holds players, chat, voice and timers; each game only changes its rules. Adding a game means one file and one line.' },
        { t: 'Never trust the client', d: 'The server checks turn, phase and that the card is in your hand. In the blind round your own card is never sent to you.' },
        { t: 'Do not kick people out', d: 'Rooms are saved to the database every few seconds, so a deployment no longer ends a game. Players reconnect by themselves.' },
        { t: 'Free first', d: 'Everything runs on free tiers, and I deploy only when nobody is playing.' },
        { t: 'A virtual economy with limits', d: 'Bets never create coins: the pot is exactly what the losers paid. Purchases and chests are atomic in the database.' },
      ],
      underTitle: 'Under the hood',
      under: [
        'Standard Node.js only, no libraries.',
        'Turn notifications by web push, with the encryption and signing written against the standards (RFC 8291 and VAPID).',
        'Automated end-to-end tests with bots and accounts, which must pass before and after every change.',
        'A computer opponent that gets harder by level, and a chess engine that thinks in a separate thread.',
      ],
      aiTitle: 'Who did what',
      ai: 'I build it with Claude Code and the art was generated with ChatGPT. I wrote the rules and the brief, chose the art direction, tested on real phones with friends and decided what ships.',
      origin: { title: 'Where it comes from', text: [
        'It started with a simple problem. My friends and I wanted to go back to traditional games, but in more and more bars there are no cards any more.',
        'Cinco Vidas is an answer for that young crowd: the Spanish deck and its classic games, played from the phone. It joins what is old and traditional with how young people play today, so the tradition does not depend on whether the bar still has a deck.',
      ] },
      future: { title: 'What is next', text: [
        'The next goal is to take it to the App Store. Today it runs in the browser and can be installed on the home screen; the plan is a proper iOS app.',
        'The code lives on GitHub.',
      ], github: 'Code on GitHub' },
      play: 'Play it',
      tryit: { title: 'Try the rule', lede: 'A rule from Cinco Vidas: the dealer bets last and cannot make the bets add up to the number of cards. You are the dealer.', cards: 'Cards this round', others: 'The others bet', you: 'Your bet', bad: 'The {n} is blocked: the bets would add up to {c}, the number of cards.', none: 'Nothing is blocked this round: the others bet {s}, and {c} cards are dealt.', good: 'Allowed. Win exactly {b} {t} and you lose no lives.', trick: 'trick', tricks: 'tricks', again: 'New round' },
    },
    dash: {
      title: 'Personal Dashboard',
      lede: 'A private app that puts my day in one place, so I open one thing in the morning and know what is on, what is slipping and what to do next.',
      facts: {
        status: 'Private, in daily use',
        role: 'Product, information design and automation; development directed with AI',
        stack: 'Cloudflare Workers and KV behind Cloudflare Access, Python and shell on a Mac, scheduled Claude tasks',
        since: 'Oct 2026',
      },
      demoTitle: 'Every function, with invented data',
      demoNote: 'Demo data only. Names, amounts and dates are made up. The app is in Spanish, like the real one, which stays private.',
      fnTitle: 'Functions',
      fns: [
        { id: 'hoy', name: 'Today', line: 'What is on now, what is next and what is urgent, with a line of hours for today and tomorrow.' },
        { id: 'listas', name: 'Lists', line: 'Reminders by list, shopping by aisle, and what people owe me.' },
        { id: 'calendario', name: 'Calendar', line: 'Day, 15 days or a month, with deadlines and classes in their own colour.' },
        { id: 'dinero', name: 'Money', line: 'Accounts, spending and investments valued at the day price.' },
        { id: 'salud', name: 'Health', line: 'Daily habits, steps and meals, weekdays only.' },
        { id: 'entrenos', name: 'Training', line: 'What is on today, and the sessions logged in the gym app.' },
        { id: 'viajes', name: 'Trips', line: 'Upcoming and past trips, and a world map of where I have been.' },
        { id: 'deseos', name: 'Wishes', line: 'A wall of things I might want, with a few new ideas every night.' },
        { id: 'contactos', name: 'Contacts', line: 'People to follow up with.' },
        { id: 'apps', name: 'Apps', line: 'Shortcuts to my other apps, including Cinco Vidas.' },
        { id: 'equipo', name: 'Team', line: 'A room where scheduled agents report, and where I can ask them for something.' },
      ],
      howTitle: 'How it works',
      how: [
        'The Mac reads Apple Reminders and the calendar every fifteen minutes and uploads a snapshot. The phone app is a static site that reads it.',
        'Scheduled tasks run daily with Claude: a morning summary, an evening wrap-up, mailbox triage. They write the data the app shows.',
        'The app stays in the free tier, so I measure and cut how often it writes.',
      ],
      privTitle: 'Why you cannot open it',
      priv: 'It holds my money, health and email. It sits behind a one-time-code login, and what you see here is rebuilt with invented data.',
    },
  },

  es: {
    htmlLang: 'es',
    meta: {
      title: 'Marcos Mariñas Cotelo — Ingeniero de la Empresa',
      description: 'Estudiante de Ingeniería de la Empresa (UIE, A Coruña) que convierte procesos en sistemas que funcionan. Proyectos, ruta y contacto. Prácticas desde enero de 2027.',
    },
    nav: { projects: 'Proyectos', about: 'Sobre mí', contact: 'Contacto', home: 'Inicio' },
    bar: { commands: 'Comandos', mode: 'Modo', reading: 'Lectura', system: 'Sistema', lang: 'EN' },
    palette: {
      placeholder: 'Ir a o hacer algo…', empty: 'Nada coincide.',
      groups: { go: 'Ir a', do: 'Hacer' },
      toggleMode: 'Cambiar modo Lectura / Sistema', switchLang: 'Switch to English', cv: 'Descargar CV (PDF)', email: 'Escribir un correo',
    },
    home: {
      name: 'Marcos Mariñas Cotelo',
      headline: 'Convierto procesos en sistemas que funcionan.',
      intro: 'Estudio Ingeniería de la Empresa en la UIE, en A Coruña, y acabo en 2027. Vengo de las operaciones y los datos, y construyo el software que los rodea: un juego de cartas que juegan mis amigos y un sistema personal que organiza mi día.',
      projectsTitle: 'Lo que he construido',
      projects: [
        { slug: 'cinco-vidas', name: 'Cinco Vidas', line: 'Un juego de cartas online con baraja española. Siete modos de juego, cuentas, tienda y salas que sobreviven a los reinicios.', status: 'En producción', since: 'Desde oct. 2026' },
        { slug: 'dashboard', name: 'Dashboard personal', line: 'Una app privada para mi día: agenda, listas, dinero, salud, viajes y un equipo de agentes programados.', status: 'Privado · en uso', since: 'Desde oct. 2026' },
        { slug: 'ciclo-watches', name: 'CICLO Watches', line: 'Una empresa inventada que vende relojes inteligentes que se reparan por piezas. Proyecto de grupo de la universidad, con su web y sus automatizaciones en n8n.', status: 'Proyecto de clase', since: 'Nov 2026' },
      ],
      routeTitle: 'Ruta',
      route: [
        { when: '2021–22', where: 'California', what: 'Curso escolar en Monterey Bay Academy', lat: 36.93, lon: -121.85 },
        { when: '2022–23', where: 'Santiago', what: 'Bachillerato, Colegio Peleteiro', lat: 42.88, lon: -8.54 },
        { when: '2023–27', where: 'A Coruña', what: 'Ingeniería de la Empresa, UIE', lat: 43.36, lon: -8.41 },
        { when: '2026', where: 'Poznań', what: 'Erasmus, Politechnika Poznańska', lat: 52.41, lon: 16.93 },
        { when: '2027', where: 'Siguiente', what: 'Prácticas, desde enero' },
      ],
      room: [
        { id: 'cards', label: 'Cinco Vidas', status: 'En producción', href: '/es/projects/cinco-vidas/' },
        { id: 'phone', label: 'Dashboard personal', status: 'Privado · en uso', href: '/es/projects/dashboard/' },
        { id: 'globe', label: 'Ruta', status: 'De California a Poznań', href: '/es/#route' },
        { id: 'mail', label: 'Contacto', status: 'Prácticas 2027', href: '/es/contact/' },
      ],
      roomHint: 'Arrastra para girar los objetos. Pulsa uno para abrirlo.',
      smallTitle: 'Cosas pequeñas que se pueden tocar',
      routeUi: { study: 'Estudios', work: 'Trabajo', next: 'Siguiente', play: 'Reproducir la vuelta', pause: 'Pausar la vuelta', prev: 'Parada anterior', nextStop: 'Parada siguiente', hint: 'Elige una parada, usa las flechas o deja que viaje solo.', stops: 'Paradas de la vuelta' },
      routeNext: { headline: 'Siguiente parada: enero de 2027', lede: 'Unas prácticas curriculares en gestión de proyectos, finanzas u operaciones.', days: 'días por delante', now: 'Ahora', chips: ['ERP, MRP y Lean', 'Construyo software real', 'Erasmus en Polonia'], write: 'Escríbeme', cv: 'CV (PDF)' },
      closeTitle: 'Hablemos',
      closeText: 'Escríbeme, o llévate el CV.',
      write: 'Escríbeme', cv: 'CV (PDF)',
    },
    about: {
      title: 'Sobre mí',
      lede: 'Me gustan las operaciones y los datos. Aprendo construyendo cosas que la gente usa de verdad.',
      storyTitle: 'Historia',
      story: [
        'Pasé un curso escolar en California (2021–22), terminé el bachillerato en Santiago y desde 2023 estudio Ingeniería de la Empresa en la UIE, en A Coruña. En 2026 hice un semestre Erasmus en la Politechnika Poznańska.',
        'Mi base son las operaciones: ERP y MRP, Lean, previsión de demanda, Excel con Solver, R. Encima de eso aprendo haciendo. En octubre de 2026 empecé un juego de cartas para mis amigos y un dashboard personal, y los dos se han convertido en software real que funciona cada día.',
        'Trabajo con un asistente de IA para programar y lo digo: yo decido qué se construye, las reglas, el diseño y qué se publica, y lo pruebo con gente real. No soy ingeniero de software y no lo aparento.',
      ],
      expTitle: 'Experiencia',
      exp: [
        { role: 'Auxiliar administrativo-contable', org: 'MAS Servicios GESTEMCO, S.L.', when: 'jun.–jul. 2026', what: 'Prácticas curriculares. Contabilidad básica, IVA, nóminas e informes sencillos para pequeñas empresas y autónomos, con A3Con y A3Nom.' },
        { role: 'Ayudante de Gestión y Coordinación', org: 'ALEXCLA Facility Mgmt, S.L.', when: 'may.–jul. 2025', what: 'Gestión hotelera y coordinación de obras: supervisión de materiales, coordinación de proveedores y apoyo administrativo.' },
        { role: 'Responsable de Suministros', org: 'Pescados Océano Atlántico, S.L.U.', when: 'sept. 2024–ene. 2025', what: 'Coordinación de pedidos y reparto diario de pescado fresco, con foco en la puntualidad y el trato al cliente.' },
        { role: 'Camarero', org: 'Paca Hostelería, S.C.', when: 'jun.–sept. 2024', what: 'Atención al cliente, barra, reposición y apoyo en cocina.' },
      ],
      eduTitle: 'Formación',
      edu: [
        { title: 'Grado en Ingeniería de la Empresa', org: 'Universidad Intercontinental de la Empresa, A Coruña', when: '2023–2027' },
        { title: 'Intercambio Erasmus', org: 'Politechnika Poznańska, Polonia', when: 'feb.–jun. 2026' },
        { title: '2.º Bachillerato, Ciencias Sociales', org: 'Colegio Peleteiro, Santiago de Compostela', when: '2022–2023' },
        { title: '1.º Bachillerato', org: 'Monterey Bay Academy, California', when: '2021–2022' },
      ],
      toolsTitle: 'Herramientas y métodos',
      tools: [
        { label: 'Herramientas', items: 'Excel y Solver, Power BI, n8n, Microsoft Dynamics AX, A3Con, A3Nom, R' },
        { label: 'Métodos', items: 'Mejora de procesos (A3, Lean, 5S), MRP, Kanban, ABC/XYZ, EOQ/ROP, previsión de demanda' },
        { label: 'Idiomas', items: 'Español y gallego (nativo), inglés B2 (IELTS Academic 6.0, junio 2024)' },
      ],
      marketsTitle: 'Mercados',
      markets: 'Invierto desde los 18, con aportaciones mensuales a fondos indexados, y sigo los mercados a diario.',
      mapTitle: 'Lugares',
      mapText: '22 países por ahora, desde un curso escolar en Estados Unidos hasta un verano de Interrail y un Erasmus en Polonia.',
      mapNote: 'Marcados: los países en los que he estado.',
      outsideTitle: 'Fuera de la pantalla',
      outside: 'Surf, esquí y montaña, entrenar en el gimnasio, cocinar para mis amigos, música indie y el Dépor.',
      aiTitle: 'Cómo uso la IA',
      ai: 'Mis proyectos los construyo dirigiendo a Claude Code, y el arte de las cartas lo generé con ChatGPT. Lo mío: la idea, las reglas, las decisiones, las pruebas y las prioridades.',
    },
    contact: {
      title: 'Contacto',
      lede: 'Busco prácticas curriculares desde enero de 2027, sobre todo en gestión de proyectos, finanzas u operaciones.',
      email: 'Correo', linkedin: 'LinkedIn', cv: 'CV', cvNote: 'PDF en español. Versión en inglés bajo petición.',
      looking: 'Un café o una llamada, lo que te venga mejor.',
    },
    common: { status: 'Estado', role: 'Papel', stack: 'Tecnología', since: 'Desde', live: 'En vivo', back: 'Todos los proyectos', private: 'Privado', built: 'Hecho con' },
    ciclo: {
      title: 'CICLO Watches',
      lede: 'Un reloj inteligente que se repara por piezas. La empresa es inventada; la web y sus automatizaciones son trabajo real.',
      facts: {
        status: 'Proyecto de clase · web online',
        role: 'Grupo 6 (UIE). Web y automatizaciones en n8n, hechas con IA',
        stack: 'HTML, CSS y JavaScript; n8n y Google Sheets detrás de los formularios',
        since: '11 nov 2026',
      },
      imgAlt: 'Un reloj modular CICLO con sus piezas',
      visit: 'Ver la web', repo: 'Código en GitHub',
      piecesTitle: 'Cinco piezas, un reloj', piecesHint: 'Si se rompe la correa, cambias la correa.',
      pieces: [
        { img: 'pieza-caja', name: 'Caja', line: 'Aluminio reciclado' },
        { img: 'pieza-esfera', name: 'Bisel y trasera', line: 'Seis acabados reciclados' },
        { img: 'pieza-correas', name: 'Correa', line: 'Algodón, cuero vegano o neopreno' },
        { img: 'pieza-bateria', name: 'Batería', line: 'La cambias y sigues' },
      ],
      matsTitle: 'Materiales',
      mats: [
        { img: 'material-aluminio', name: 'Aluminio' },
        { img: 'material-plastico', name: 'Plástico' },
        { img: 'material-madera', name: 'Madera' },
        { img: 'material-correa', name: 'Tela de correa' },
      ],
      flowTitle: 'Las automatizaciones detrás de los formularios',
      flowHint: 'Elige un flujo y mira viajar la petición.',
      replay: 'Repetir',
      fallback: 'Si n8n tarda más de 6 s, la web usa su propio archivo',
      n8nNote: 'Prueba gratuita de n8n terminada: flujos guardados, formularios apagados',
      flows: [
        { id: 'cita', name: 'Cita de reparación', nodes: [
          { t: 'Formulario', s: 'Nombre, día, hora' },
          { t: '¿Datos válidos?', s: 'Con consentimiento' },
          { t: '¿Hueco libre?', s: 'Lee la hoja' },
          { t: 'Lo apunta', s: 'Google Sheets' },
          { t: 'Confirma', s: 'Correo por Gmail' },
        ], alt: { t: 'Hueco ocupado', s: 'Pide otra hora' } },
        { id: 'stock', name: 'Stock', nodes: [
          { t: 'Configurador', s: 'Pide el stock' },
          { t: 'n8n', s: 'Lee la hoja' },
          { t: 'Arma la respuesta', s: 'Unidades por pieza' },
          { t: 'En pantalla', s: 'Agotado marcado' },
        ] },
      ],
      siteTitle: 'En la web',
      site: ['Modelos y precios', 'Configurador', 'Trazabilidad por lote', 'Cita de reparación', 'Contacto y asistente'],
      decTitle: 'Detalles que cuidé',
      dec: ['Falla sin romperse', 'Lo inventado está marcado', 'Sin promesas vacías', 'Accesible, de 360 a 1440 px'],
      who: 'Proyecto de grupo. El modelo de negocio y el informe son del grupo; la web y las automatizaciones las hice yo con Claude Code.',
    },
    eng: {
      title: '¿Qué es la Ingeniería de la Empresa?',
      lede: 'En corto: ingeniería aplicada a cómo funciona una empresa.',
      paras: [
        'Ingeniería aplicada a cómo funciona una empresa: cómo un pedido llega a ser una entrega, cuánto stock tener, cómo producir sin desperdicio. Mitad ingeniería, mitad negocio.',
        'Está entre la ingeniería y los negocios. La ingeniería aporta método y números; los negocios, la pregunta: qué necesita la empresa. El objetivo es simple: una empresa que funcione mejor, cueste menos y no dé sorpresas.',
      ],
      learnTitle: 'Qué estudio, en cristiano',
      learn: [
        { t: 'Procesos', d: 'Dibujar cómo fluye de verdad el trabajo (BPMN, VSM) y encontrar la causa raíz de un problema.' },
        { t: 'Inventarios y almacenes', d: 'Cuánto tener y cuándo reponer (ABC/XYZ, EOQ), para que ni falte nada ni sobre.' },
        { t: 'Producción', d: 'Planificar materiales y flujo con MRP, Lean y simulación.' },
        { t: 'Datos e IA', d: 'SQL, previsión y automatización con n8n, incluidos agentes que preguntan a una persona antes de actuar.' },
        { t: 'Innovación', d: 'Convertir una idea en un modelo de negocio, como con CICLO.' },
      ],
      exTitle: 'Un ejemplo',
      ex: 'Una tienda se queda sin producto fresco y tira parte. Un ingeniero de la empresa mira los datos de ventas, prevé la demanda, decide cuándo reponer y rediseña el proceso en torno a eso.',
    },
    homeEng: '¿Qué es la Ingeniería de la Empresa?',
    cv: {
      title: 'Cinco Vidas',
      lede: 'La baraja española como juego online, desde el móvil.',
      facts: {
        status: 'En producción',
        role: 'Idea, reglas y diseño; código dirigido con IA',
        stack: 'Node.js sin dependencias, SQLite en la nube (Turso), front-end en JS puro, Render',
        since: '8 oct. 2026',
      },
      shotsTitle: 'En el móvil',
      shots: [
        { src: '/img/cv-home.jpg', alt: 'Pantalla de inicio de Cinco Vidas con el logo y el botón Jugar', cap: 'Inicio' },
        { src: '/img/cv-table.jpg', alt: 'Una mesa en una partida de práctica: tres jugadores, apuestas y la mano de cartas', cap: 'Una ronda: apuesta y juega' },
        { src: '/img/cv-games.jpg', alt: 'Menú que anuncia juegos nuevos: ajedrez, chinchón, mus y escoba', cap: 'Modos nuevos' },
      ],
      whatTitle: 'Qué es',
      what: [
        'Cada jugador apuesta cuántas bazas va a ganar. Quien reparte apuesta el último y no puede hacer que las apuestas sumen el número de cartas. Si fallas, pierdes tantas vidas como la diferencia. Las rondas son de 5, 4, 3, 2 y 1 cartas, y la de una carta se juega a ciegas.',
        'Empezó como un juego para jugar con mis amigos. Ahora tiene cuentas, amigos por QR, una tienda con moneda virtual (sin dinero real), regalo diario, cofres, logros y niveles, y siete modos: Cinco Vidas, brisca, culo, chinchón, mus, escoba y ajedrez. Algunos amigos ya han jugado más de 200 partidas cada uno.',
      ],
      decTitle: 'Decisiones que lo moldearon',
      dec: [
        { t: 'Un motor, muchos juegos', d: 'Una clase de sala común guarda jugadores, chat, voz y tiempos; cada juego solo cambia sus reglas. Añadir uno es un archivo y una línea.' },
        { t: 'Nunca fiarse del cliente', d: 'El servidor comprueba turno, fase y que la carta esté en tu mano. En la ronda a ciegas tu propia carta nunca te llega.' },
        { t: 'No echar a la gente', d: 'Las salas se guardan en la base de datos cada pocos segundos, así que una subida ya no acaba la partida. Los jugadores reconectan solos.' },
        { t: 'Primero, gratis', d: 'Todo funciona en planes gratuitos, y solo publico cuando no hay nadie jugando.' },
        { t: 'Una economía virtual con límites', d: 'Las apuestas nunca crean monedas: el bote es exactamente lo que han pagado los que pierden. Compras y cofres son atómicos en la base de datos.' },
      ],
      underTitle: 'Por dentro',
      under: [
        'Solo Node.js estándar, sin librerías.',
        'Aviso de turno por notificación push, con el cifrado y la firma escritos contra los estándares (RFC 8291 y VAPID).',
        'Pruebas automáticas de extremo a extremo con bots y cuentas, que deben pasar antes y después de cada cambio.',
        'Una máquina rival que sube de nivel y un motor de ajedrez que piensa en un hilo aparte.',
      ],
      aiTitle: 'Quién hizo qué',
      ai: 'Lo construyo con Claude Code y el arte lo generé con ChatGPT. Yo escribí las reglas y el encargo, elegí la dirección de arte, lo probé en móviles reales con amigos y decidí qué se publica.',
      origin: { title: 'De dónde sale', text: [
        'Salió de un problema sencillo. Mis amigos y yo queríamos volver a los juegos tradicionales, pero en cada vez más bares ya no hay cartas.',
        'Cinco Vidas es una alternativa para esos jóvenes: la baraja española y sus juegos de siempre, desde el móvil. Une lo antiguo y tradicional con la forma de jugar de la juventud de hoy, para que la tradición no dependa de que el bar todavía tenga una baraja.',
      ] },
      future: { title: 'Lo que viene', text: [
        'El siguiente objetivo es sacarlo en la App Store. Hoy funciona en el navegador y se puede instalar en la pantalla de inicio; el plan es una app de iOS de verdad.',
        'El código está en GitHub.',
      ], github: 'Código en GitHub' },
      play: 'Jugar',
      tryit: { title: 'Prueba la regla', lede: 'Una regla de Cinco Vidas: quien reparte apuesta el último y no puede hacer que las apuestas sumen el número de cartas. Tú repartes.', cards: 'Cartas en esta ronda', others: 'Los demás apuestan', you: 'Tu apuesta', bad: 'El {n} está bloqueado: las apuestas sumarían {c}, el número de cartas.', none: 'Nada bloqueado en esta ronda: los demás apuestan {s} y se reparten {c} cartas.', good: 'Permitido. Gana exactamente {b} {t} y no pierdes vidas.', trick: 'baza', tricks: 'bazas', again: 'Otra ronda' },
    },
    dash: {
      title: 'Dashboard personal',
      lede: 'Una app privada que junta mi día en un sitio, para abrir una sola cosa por la mañana y saber qué hay, qué se me escapa y qué toca hacer.',
      facts: {
        status: 'Privado, en uso diario',
        role: 'Producto, diseño de la información y automatización; desarrollo dirigido con IA',
        stack: 'Cloudflare Workers y KV tras Cloudflare Access, Python y shell en un Mac, tareas programadas con Claude',
        since: 'oct. 2026',
      },
      demoTitle: 'Todas las funciones, con datos inventados',
      demoNote: 'Solo datos de demostración. Nombres, importes y fechas son inventados. La app real, que sigue siendo privada, está también en español.',
      fnTitle: 'Funciones',
      fns: [
        { id: 'hoy', name: 'Hoy', line: 'Qué hay ahora, qué viene y qué es urgente, con una línea de horas de hoy y mañana.' },
        { id: 'listas', name: 'Listas', line: 'Recordatorios por lista, la compra por secciones y lo que me deben.' },
        { id: 'calendario', name: 'Calendario', line: 'Día, 15 días o un mes, con entregas y clases en su propio color.' },
        { id: 'dinero', name: 'Dinero', line: 'Cuentas, gasto e inversiones valoradas al precio del día.' },
        { id: 'salud', name: 'Salud', line: 'Hábitos diarios, pasos y comidas, de lunes a viernes.' },
        { id: 'entrenos', name: 'Entrenos', line: 'Qué toca hoy y las sesiones registradas en la app del gimnasio.' },
        { id: 'viajes', name: 'Viajes', line: 'Viajes próximos y pasados, y un mapa del mundo con donde he estado.' },
        { id: 'deseos', name: 'Deseos', line: 'Un muro de cosas que quizá quiera, con ideas nuevas cada noche.' },
        { id: 'contactos', name: 'Contactos', line: 'Personas a las que dar seguimiento.' },
        { id: 'apps', name: 'Apps', line: 'Accesos a mis otras apps, incluida Cinco Vidas.' },
        { id: 'equipo', name: 'Equipo', line: 'Una sala donde informan los agentes programados y donde les puedo pedir algo.' },
      ],
      howTitle: 'Cómo funciona',
      how: [
        'El Mac lee Recordatorios de Apple y el calendario cada quince minutos y sube una foto. La app del móvil es una web estática que la lee.',
        'Tareas programadas con Claude se ejecutan cada día: un resumen de la mañana, un cierre de la noche y la clasificación del correo. Escriben los datos que enseña la app.',
        'La app se mantiene en el plan gratuito, así que mido y recorto cuántas veces escribe.',
      ],
      privTitle: 'Por qué no puedes abrirla',
      priv: 'Guarda mi dinero, mi salud y mi correo. Está detrás de un acceso con código de un solo uso, y lo que ves aquí está rehecho con datos inventados.',
    },
  },
};

/** Mock screens for the Dashboard demo. Always Spanish, like the real app. All data is invented. */
export type Block =
  | { t: 'stats'; items: [string, string][] }
  | { t: 'next'; label: string; title: string; sub: string }
  | { t: 'list'; head?: string; rows: { a: string; b?: string; tag?: string; tone?: 'uie' | 'warn' | 'ok' | 'mute'; done?: boolean }[] }
  | { t: 'bars'; head?: string; rows: [string, number, string][] }
  | { t: 'chips'; items: string[] };

export const SCREENS: Record<string, { title: string; tab: string; blocks: Block[] }> = {
  hoy: { title: 'Hoy', tab: 'Hoy', blocks: [
    { t: 'next', label: 'Lo siguiente', title: 'Clase de Operaciones', sub: 'en 1 h 20 min · 15:00' },
    { t: 'stats', items: [['Hoy', '5'], ['Urgentes', '1'], ['Hábitos', '2/4'], ['Pasos', '6.200']] },
    { t: 'list', head: 'Tu día', rows: [
      { a: 'Entregar memoria de práctica', b: '12:00', tag: 'Campus', tone: 'uie' },
      { a: 'Comida con Lucía', b: '14:00' },
      { a: 'Clase de Operaciones', b: '15:00', tone: 'mute' },
      { a: 'Gimnasio · pierna', b: '19:30' },
      { a: 'Llamar al seguro', b: 'todo el día', done: true },
    ] },
  ] },
  listas: { title: 'Listas', tab: 'Listas', blocks: [
    { t: 'stats', items: [['Hoy', '5'], ['Programados', '9'], ['Todos', '31'], ['Vencidos', '0']] },
    { t: 'list', head: 'Compra', rows: [
      { a: 'Tomates', b: 'Fruta y verdura' }, { a: 'Merluza', b: 'Pescado' }, { a: 'Yogur natural', b: 'Lácteos' }, { a: 'Pan de masa madre', b: 'Panadería', done: true },
    ] },
    { t: 'list', head: 'Me deben', rows: [{ a: 'Cena del sábado · Pablo', b: '14 €' }] },
  ] },
  calendario: { title: 'Calendario', tab: 'Calendario', blocks: [
    { t: 'chips', items: ['Día', '15 días', '1 mes'] },
    { t: 'list', head: 'Esta semana', rows: [
      { a: 'Parcial de Operaciones', b: 'lun 15:00', tone: 'uie', tag: 'UIE' },
      { a: 'Defensa del proyecto', b: 'mar 11:30', tone: 'uie', tag: 'UIE' },
      { a: 'Cumpleaños de Iria', b: 'mié' },
      { a: 'Vuelo a Oporto', b: 'vie 07:10' },
    ] },
  ] },
  dinero: { title: 'Dinero', tab: 'Dinero', blocks: [
    { t: 'stats', items: [['Patrimonio', '12.480 €'], ['Gasto del mes', '640 €'], ['Ahorro', '+420 €'], ['Inversión', '+3,1 %']] },
    { t: 'bars', head: 'Gasto por categoría (demo)', rows: [['Comida', 38, '240 €'], ['Transporte', 18, '115 €'], ['Ocio', 27, '170 €'], ['Suscripciones', 12, '75 €']] },
  ] },
  salud: { title: 'Salud', tab: 'Más', blocks: [
    { t: 'stats', items: [['Hábitos', '2/4'], ['Pasos', '6.200'], ['Comidas', '3'], ['Media 7 d', '7.900']] },
    { t: 'list', head: 'Hábitos de hoy', rows: [
      { a: 'Entrenar', done: true }, { a: 'Leer 20 min', done: true }, { a: 'Creatina' }, { a: 'Dormir antes de las 24 h' },
    ] },
  ] },
  entrenos: { title: 'Entrenos', tab: 'Más', blocks: [
    { t: 'next', label: 'Hoy toca', title: 'Pierna', sub: 'Sentadilla · prensa · peso muerto rumano' },
    { t: 'list', head: 'Últimas sesiones', rows: [
      { a: 'Empuje', b: 'lun · 62 min' }, { a: 'Tirón', b: 'mié · 58 min' }, { a: 'Pierna', b: 'vie · 71 min' },
    ] },
  ] },
  viajes: { title: 'Viajes', tab: 'Más', blocks: [
    { t: 'stats', items: [['Países', '22'], ['Mundo', '11 %'], ['Continentes', '3'], ['Próximos', '1']] },
    { t: 'list', head: 'Próximos', rows: [{ a: 'Brasil', b: 'dic. 2026 – ene. 2027', tag: 'Próximo' }] },
    { t: 'list', head: 'Hechos', rows: [{ a: 'Polonia', b: '2026' }, { a: 'Países Bajos', b: '2025' }, { a: 'Portugal', b: '2022' }] },
  ] },
  deseos: { title: 'Deseos', tab: 'Más', blocks: [
    { t: 'chips', items: ['Ropa', 'Objetos', 'Casa'] },
    { t: 'list', head: 'Para ti', rows: [
      { a: 'Reloj clásico de acero', b: '≈ 600 €', tag: 'Idea' }, { a: 'Sudadera gris de algodón', b: '≈ 70 €', tag: 'Idea' }, { a: 'Cafetera italiana', b: '≈ 30 €', tag: 'Idea' },
    ] },
  ] },
  contactos: { title: 'Contactos', tab: 'Más', blocks: [
    { t: 'list', head: 'Para escribir esta semana', rows: [
      { a: 'Ana R. · antigua compañera', b: 'hace 3 sem.' }, { a: 'Carlos P. · empresa', b: 'hace 1 sem.', tag: 'Seguimiento', tone: 'warn' }, { a: 'Laura M. · UIE', b: 'hace 5 d' },
    ] },
  ] },
  apps: { title: 'Apps', tab: 'Más', blocks: [
    { t: 'list', head: 'Mis apps', rows: [{ a: 'Cinco Vidas', b: 'Juego' }, { a: 'Dividir ticket', b: 'Herramienta · en arreglo', tone: 'mute' }, { a: 'Piso', b: 'Casa' }] },
  ] },
  equipo: { title: 'Equipo', tab: 'Más', blocks: [
    { t: 'list', head: 'El equipo ahora', rows: [
      { a: 'Resumen de la mañana', b: 'hecho 07:32', tag: 'OK', tone: 'ok' },
      { a: 'Clasificar correo', b: 'hecho 21:05', tag: 'OK', tone: 'ok' },
      { a: 'Ideas de Deseos', b: 'esta noche 22:00', tone: 'mute' },
    ] },
    { t: 'list', head: 'Pedir al equipo', rows: [{ a: 'Escribe un encargo…', b: 'solo lectura', tone: 'mute' }] },
  ] },
};
