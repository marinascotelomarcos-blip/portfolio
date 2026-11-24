import type { Lang } from './content';

/** Plain-language notes shown when a tool or method tile is opened. Generic definitions only. */
export const EXPLAIN: Record<string, Record<Lang, string>> = {
  excel: {
    en: 'Spreadsheets for everything: tables, formulas, and Solver, which finds the best option (cheapest, fastest) given your limits.',
    es: 'Hojas de cálculo para todo: tablas, fórmulas y Solver, que busca la mejor opción (la más barata, la más rápida) dados unos límites.',
  },
  powerbi: {
    en: 'Turns raw data into dashboards: charts and figures that update by themselves and show at a glance how a business is doing.',
    es: 'Convierte datos en bruto en paneles: gráficos y cifras que se actualizan solos y enseñan de un vistazo cómo va un negocio.',
  },
  n8n: {
    en: 'A tool to connect apps and automate repetitive tasks, like "when an email arrives, save it here and notify me".',
    es: 'Una herramienta para conectar aplicaciones y automatizar tareas repetitivas, tipo «cuando llegue un correo, guárdalo aquí y avísame».',
  },
  r: {
    en: 'A programming language for statistics: cleaning data, finding patterns and drawing charts.',
    es: 'Un lenguaje de programación para estadística: limpiar datos, encontrar patrones y dibujar gráficos.',
  },
  dynamics: {
    en: 'An ERP, the program a company uses to run stock, purchases, sales and accounting in one place.',
    es: 'Un ERP: el programa con el que una empresa lleva almacén, compras, ventas y contabilidad en un solo sitio.',
  },
  a3soft: {
    en: 'Spanish accounting and payroll software, used for the books, VAT and monthly payslips of small companies.',
    es: 'Programas españoles de contabilidad y nóminas, para llevar los libros, el IVA y las nóminas mensuales de pequeñas empresas.',
  },
  a3: {
    en: 'A one-page way to solve a problem: what is wrong, why, what to change and how to check it worked. It forces you to be clear.',
    es: 'Una forma de resolver un problema en una sola hoja: qué falla, por qué, qué cambiar y cómo comprobar que funcionó. Obliga a ser claro.',
  },
  lean: {
    en: 'Doing the same with less waste: no waiting, no extra steps, no clutter. 5S is the tidy-workplace routine that goes with it.',
    es: 'Hacer lo mismo con menos desperdicio: sin esperas, sin pasos de más, sin desorden. 5S es la rutina de orden y limpieza que lo acompaña.',
  },
  mrp: {
    en: 'Planning what to buy or make, and when, so that materials arrive just before they are needed.',
    es: 'Planificar qué comprar o fabricar, y cuándo, para que los materiales lleguen justo antes de necesitarlos.',
  },
  kanban: {
    en: 'A board with cards that move from "to do" to "doing" to "done", so everyone sees the work and nothing piles up.',
    es: 'Un tablero con tarjetas que pasan de «pendiente» a «en curso» y a «hecho», para que todos vean el trabajo y nada se acumule.',
  },
  abc: {
    en: 'Sorting products by importance: the few that bring most of the money get the most attention (ABC), and by how predictable they are (XYZ).',
    es: 'Ordenar los productos por importancia: los pocos que dan la mayor parte del dinero reciben más atención (ABC), y por lo predecible que es su venta (XYZ).',
  },
  forecast: {
    en: 'Estimating how much customers will buy next, using past sales, so you do not run out or end up with too much stock.',
    es: 'Estimar cuánto van a comprar los clientes, usando las ventas pasadas, para no quedarse sin existencias ni acumular de más.',
  },
};
