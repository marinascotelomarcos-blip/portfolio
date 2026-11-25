import { siN8n, siR, siCloudflare, siNodedotjs, siPython, siRender, siTurso, siClaude, siGithub, siInstagram } from 'simple-icons';
import type { Lang } from './content';

type Brand = { kind: 'brand'; path: string; hex: string };
type Glyph = { kind: 'glyph'; paths: string[]; hex: string };
type Mono = { kind: 'mono'; text: string; hex: string };
export type Logo = { name: Record<Lang, string> } & (Brand | Glyph | Mono);

const brand = (i: { path: string; hex: string }) => ({ kind: 'brand' as const, path: i.path, hex: '#' + i.hex });

/** Brand logos come from Simple Icons. Where no official mark is available (Excel, Power BI, Dynamics, A3, ChatGPT), a neutral drawn glyph or monogram stands in; none of those pretend to be the official logo. */
export const LOGOS: Record<string, Logo> = {
  n8n: { name: { en: 'n8n', es: 'n8n' }, ...brand(siN8n) },
  r: { name: { en: 'R', es: 'R' }, ...brand(siR) },
  cloudflare: { name: { en: 'Cloudflare', es: 'Cloudflare' }, ...brand(siCloudflare) },
  node: { name: { en: 'Node.js', es: 'Node.js' }, ...brand(siNodedotjs) },
  python: { name: { en: 'Python', es: 'Python' }, ...brand(siPython) },
  render: { name: { en: 'Render', es: 'Render' }, ...brand(siRender) },
  turso: { name: { en: 'Turso', es: 'Turso' }, ...brand(siTurso) },
  claude: { name: { en: 'Claude Code', es: 'Claude Code' }, ...brand(siClaude) },

  github: { name: { en: 'GitHub', es: 'GitHub' }, ...brand(siGithub) },
  instagram: { name: { en: 'Instagram', es: 'Instagram' }, ...brand(siInstagram) },
  linkedin: { name: { en: 'LinkedIn', es: 'LinkedIn' }, kind: 'mono', hex: '#0a66c2', text: 'in' },
  portfolio: { name: { en: 'Portfolio', es: 'Portafolio' }, kind: 'mono', hex: '#0f7077', text: 'M' },
  cv: { name: { en: 'CV (PDF)', es: 'CV (PDF)' }, kind: 'glyph', hex: '#0f7077', paths: ['M6 3.5h8l4 4v13H6z', 'M14 3.5v4h4', 'M9 12h6', 'M9 15.5h6'] },
  mail: { name: { en: 'Email', es: 'Correo' }, kind: 'glyph', hex: '#d8553f', paths: ['M3.5 6.5h17v11h-17z', 'M3.5 7.2l8.5 6.3 8.5-6.3'] },
  phone: { name: { en: 'Phone', es: 'Teléfono' }, kind: 'glyph', hex: '#1f7a4d', paths: ['M7 3.5h3l1.5 4-2 1.3a10 10 0 0 0 5.2 5.2l1.3-2 4 1.5v3a2 2 0 0 1-2 2A15 15 0 0 1 5 5.5a2 2 0 0 1 2-2z'] },

  excel: { name: { en: 'Excel and Solver', es: 'Excel y Solver' }, kind: 'glyph', hex: '#1f7a4d', paths: ['M4 5h16v14H4z', 'M4 10h16', 'M4 14.5h16', 'M9.5 5v14', 'M14.8 5v14'] },
  powerbi: { name: { en: 'Power BI', es: 'Power BI' }, kind: 'glyph', hex: '#c58b00', paths: ['M6 19v-6', 'M12 19V6', 'M18 19v-9'] },
  dynamics: { name: { en: 'Dynamics AX', es: 'Dynamics AX' }, kind: 'mono', hex: '#0b5a8f', text: 'AX' },
  a3soft: { name: { en: 'A3Con and A3Nom', es: 'A3Con y A3Nom' }, kind: 'mono', hex: '#a3361f', text: 'A3' },
  chatgpt: { name: { en: 'ChatGPT (card art)', es: 'ChatGPT (arte de cartas)' }, kind: 'glyph', hex: '#2f9b78', paths: ['M12 3v5', 'M12 16v5', 'M3 12h5', 'M16 12h5', 'M6 6l3 3', 'M15 15l3 3', 'M18 6l-3 3', 'M9 15l-3 3'] },

  a3: { name: { en: 'A3 and process improvement', es: 'A3 y mejora de procesos' }, kind: 'glyph', hex: '#0f7077', paths: ['M5 3.5h14v17H5z', 'M8.5 8h7', 'M8.5 12h7', 'M8.5 16h4'] },
  lean: { name: { en: 'Lean and 5S', es: 'Lean y 5S' }, kind: 'glyph', hex: '#0f7077', paths: ['M3.5 12h13', 'M13 7.5l4.5 4.5-4.5 4.5', 'M3.5 6h7', 'M3.5 18h7'] },
  mrp: { name: { en: 'MRP', es: 'MRP' }, kind: 'glyph', hex: '#0f7077', paths: ['M12 3.5v5', 'M6 8.5h12', 'M6 8.5v4', 'M18 8.5v4', 'M12 8.5v4', 'M3.5 12.5h5v5h-5z', 'M9.5 12.5h5v5h-5z', 'M15.5 12.5h5v5h-5z'] },
  kanban: { name: { en: 'Kanban', es: 'Kanban' }, kind: 'glyph', hex: '#0f7077', paths: ['M4 4.5h4.5v15H4z', 'M9.8 4.5h4.5v9H9.8z', 'M15.5 4.5H20v12h-4.5z'] },
  abc: { name: { en: 'ABC/XYZ', es: 'ABC/XYZ' }, kind: 'glyph', hex: '#0f7077', paths: ['M5 19V6', 'M10 19v-9', 'M15 19v-5', 'M20 19v-2.5'] },
  eoq: { name: { en: 'EOQ and ROP', es: 'EOQ y ROP' }, kind: 'glyph', hex: '#0f7077', paths: ['M3.5 6l5.5 12V6l5.5 12V6l5.5 12'] },
  forecast: { name: { en: 'Demand forecasting', es: 'Previsión de demanda' }, kind: 'glyph', hex: '#0f7077', paths: ['M3.5 17l5-5 3.5 2.5 4.5-6.5', 'M16.5 8l4-2.5', 'M3.5 20.5h17'] },
};

export const TOOL_IDS = ['excel', 'powerbi', 'n8n', 'r', 'dynamics', 'a3soft'];
export const METHOD_IDS = ['a3', 'lean', 'mrp', 'kanban', 'abc', 'forecast'];
export const STACK: Record<string, string[]> = {
  'cinco-vidas': ['node', 'turso', 'render', 'claude', 'chatgpt'],
  dashboard: ['cloudflare', 'python', 'claude'],
  'ciclo-watches': ['n8n', 'github', 'claude'],
};
