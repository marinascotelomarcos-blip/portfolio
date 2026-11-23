// 3D objects for the portfolio. Plain ES module so it runs both in Astro (bundled) and in a bare test page.
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

const TEAL = 0x0f7077;
const INK = 0x0e1c26;
const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function roundedShape(w, h, r) {
  const s = new THREE.Shape();
  const x = -w / 2, y = -h / 2;
  s.moveTo(x + r, y);
  s.lineTo(x + w - r, y); s.quadraticCurveTo(x + w, y, x + w, y + r);
  s.lineTo(x + w, y + h - r); s.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  s.lineTo(x + r, y + h); s.quadraticCurveTo(x, y + h, x, y + h - r);
  s.lineTo(x, y + r); s.quadraticCurveTo(x, y, x + r, y);
  return s;
}

function rr(g, x, y, w, h, r) {
  g.beginPath();
  g.moveTo(x + r, y); g.arcTo(x + w, y, x + w, y + h, r); g.arcTo(x + w, y + h, x, y + h, r);
  g.arcTo(x, y + h, x, y, r); g.arcTo(x, y, x + w, y, r); g.closePath();
}

function tex(canvas) {
  const t = new THREE.CanvasTexture(canvas);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  return t;
}

/* ---------- Spanish deck: flat, bold, black outline, one colour per suit (as in the game) ---------- */
const SUIT = { oros: '#f2b705', copas: '#d8322c', espadas: '#2c63c8', bastos: '#2f9b4a' };

function drawSuit(g, suit) {
  g.save(); g.translate(240, 384);
  g.lineWidth = 9; g.strokeStyle = '#111'; g.lineJoin = 'round'; g.lineCap = 'round';
  g.fillStyle = SUIT[suit];
  if (suit === 'oros') {
    g.beginPath(); g.arc(0, 0, 128, 0, Math.PI * 2); g.fill(); g.stroke();
    g.lineWidth = 7; g.beginPath(); g.arc(0, 0, 84, 0, Math.PI * 2); g.stroke();
    g.fillStyle = '#ffd96a'; g.beginPath(); g.arc(0, 0, 58, 0, Math.PI * 2); g.fill(); g.stroke();
    for (let i = 0; i < 12; i++) { const a = (i / 12) * Math.PI * 2; g.beginPath(); g.moveTo(Math.cos(a) * 92, Math.sin(a) * 92); g.lineTo(Math.cos(a) * 118, Math.sin(a) * 118); g.stroke(); }
  } else if (suit === 'copas') {
    g.beginPath(); g.moveTo(-118, -110); g.lineTo(118, -110); g.bezierCurveTo(118, 20, 56, 70, 0, 70); g.bezierCurveTo(-56, 70, -118, 20, -118, -110); g.closePath(); g.fill(); g.stroke();
    g.fillStyle = '#ff7b6e'; g.beginPath(); g.moveTo(-78, -78); g.lineTo(-30, -78); g.bezierCurveTo(-30, -10, -50, 20, -78, 22); g.closePath(); g.fill();
    g.fillStyle = SUIT.copas; g.beginPath(); g.rect(-16, 70, 32, 70); g.fill(); g.stroke();
    g.beginPath(); rr(g, -78, 138, 156, 34, 14); g.fill(); g.stroke();
  } else if (suit === 'espadas') {
    g.save(); g.rotate(0.0);
    g.beginPath(); g.moveTo(0, -190); g.lineTo(38, -128); g.lineTo(38, 78); g.lineTo(-38, 78); g.lineTo(-38, -128); g.closePath(); g.fill(); g.stroke();
    g.beginPath(); g.moveTo(0, -170); g.lineTo(0, 70); g.lineWidth = 5; g.stroke(); g.lineWidth = 9;
    g.fillStyle = '#f2b705'; g.beginPath(); rr(g, -104, 78, 208, 38, 16); g.fill(); g.stroke();
    g.fillStyle = '#1b2a3a'; g.beginPath(); rr(g, -17, 116, 34, 64, 8); g.fill(); g.stroke();
    g.fillStyle = '#f2b705'; g.beginPath(); g.arc(0, 196, 25, 0, Math.PI * 2); g.fill(); g.stroke();
    g.restore();
  } else {
    g.save(); g.rotate(0.35);
    g.beginPath(); g.moveTo(-44, -176); g.bezierCurveTo(-64, -100, -52, 100, -32, 176); g.lineTo(32, 176); g.bezierCurveTo(52, 100, 66, -100, 44, -176); g.bezierCurveTo(22, -200, -22, -200, -44, -176); g.closePath(); g.fill(); g.stroke();
    g.fillStyle = '#d8322c';
    g.beginPath(); g.ellipse(70, -52, 46, 20, -0.7, 0, Math.PI * 2); g.fill(); g.stroke();
    g.beginPath(); g.ellipse(-70, 36, 46, 20, 0.7, 0, Math.PI * 2); g.fill(); g.stroke();
    g.fillStyle = '#7ccf8d'; g.beginPath(); g.arc(-8, -30, 10, 0, Math.PI * 2); g.fill(); g.stroke(); g.beginPath(); g.arc(8, 70, 10, 0, Math.PI * 2); g.fill(); g.stroke();
    g.restore();
  }
  g.restore();
}

function cardFace(suit, label) {
  const c = document.createElement('canvas'); c.width = 480; c.height = 768;
  const g = c.getContext('2d');
  g.fillStyle = '#fbf6e9'; rr(g, 0, 0, 480, 768, 40); g.fill();
  g.globalAlpha = 0.16; g.fillStyle = SUIT[suit]; rr(g, 22, 22, 436, 724, 26); g.fill(); g.globalAlpha = 1;
  g.lineWidth = 9; g.strokeStyle = '#111'; rr(g, 14, 14, 452, 740, 32); g.stroke();
  drawSuit(g, suit);
  g.fillStyle = '#111'; g.font = '800 76px system-ui, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
  g.fillText(label, 70, 84);
  g.save(); g.translate(410, 684); g.rotate(Math.PI); g.fillText(label, 0, 0); g.restore();
  return tex(c);
}

function cardBack() {
  const c = document.createElement('canvas'); c.width = 480; c.height = 768;
  const g = c.getContext('2d');
  g.fillStyle = '#0e1c26'; rr(g, 0, 0, 480, 768, 40); g.fill();
  g.strokeStyle = '#fbf6e9'; g.lineWidth = 6; rr(g, 22, 22, 436, 724, 26); g.stroke();
  g.strokeStyle = '#3bb8be'; g.lineWidth = 3;
  for (let i = -20; i < 40; i++) { g.beginPath(); g.moveTo(i * 36, 40); g.lineTo(i * 36 + 740, 780); g.stroke(); g.beginPath(); g.moveTo(i * 36 + 740, 40); g.lineTo(i * 36, 780); g.stroke(); }
  g.save(); rr(g, 22, 22, 436, 724, 26); g.clip(); g.restore();
  g.fillStyle = '#0e1c26'; g.fillRect(0, 0, 480, 22); g.fillRect(0, 746, 480, 22); g.fillRect(0, 0, 22, 768); g.fillRect(458, 0, 22, 768);
  g.strokeStyle = '#fbf6e9'; g.lineWidth = 6; rr(g, 22, 22, 436, 724, 26); g.stroke();
  g.fillStyle = '#0e1c26'; g.beginPath(); g.arc(240, 384, 78, 0, Math.PI * 2); g.fill(); g.stroke();
  g.fillStyle = '#3bb8be'; g.font = '800 64px system-ui, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('5', 240, 388);
  return tex(c);
}

function makeCard(suit, label, backTex) {
  const W = 1, H = 1.6, D = 0.02;
  const group = new THREE.Group();
  const geo = new THREE.ExtrudeGeometry(roundedShape(W, H, 0.07), { depth: D, bevelEnabled: false });
  geo.translate(0, 0, -D / 2);
  group.add(new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: 0xfbf6e9, roughness: 0.6 })));
  const faceMat = new THREE.MeshBasicMaterial({ map: cardFace(suit, label), transparent: true, alphaTest: 0.02, toneMapped: false });
  const face = new THREE.Mesh(new THREE.PlaneGeometry(W, H), faceMat); face.position.z = D / 2 + 0.0006; group.add(face);
  const back = new THREE.Mesh(new THREE.PlaneGeometry(W, H), new THREE.MeshBasicMaterial({ map: backTex, transparent: true, alphaTest: 0.02, toneMapped: false }));
  back.rotation.y = Math.PI; back.position.z = -D / 2 - 0.0006; group.add(back);
  return group;
}

function addLogo(parent, opts) {
  const group = new THREE.Group(); group.position.set(0, 0.95, 0); parent.add(group);
  new THREE.TextureLoader().load('/img/cinco-vidas-logo.webp', (t) => {
    t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8;
    const W = 1.6, H = (W * 512) / 754;
    for (let i = 0; i < 8; i++) { // stacked layers give the flat logo real thickness
      const m = new THREE.Mesh(new THREE.PlaneGeometry(W, H), new THREE.MeshBasicMaterial({ map: t, transparent: true, alphaTest: 0.08, toneMapped: false, color: i === 0 ? 0xffffff : 0x14222a }));
      m.position.z = -i * 0.014; group.add(m);
    }
    if (opts && opts.requestFrame) opts.requestFrame();
  });
  return group;
}

function buildCards(opts) {
  const root = new THREE.Group();
  const backTex = cardBack();
  const suits = ['oros', 'copas', 'espadas', 'bastos'];
  const fan = new THREE.Group(); root.add(fan);
  suits.forEach((s, i) => {
    const c = makeCard(s, '1', backTex);
    const t = i - 1.5;
    c.position.set(t * 0.62, -Math.abs(t) * 0.09, i * 0.03);
    c.rotation.z = -t * 0.2;
    c.userData.base = { y: c.position.y, phase: i * 0.9 };
    fan.add(c);
  });
  fan.position.y = -0.6; fan.scale.setScalar(1.05);
  const logo = addLogo(root, opts);
  root.userData.update = (t, ptr) => {
    logo.rotation.y = Math.sin(t * 0.0009) * 0.4; logo.position.y = 0.95 + Math.sin(t * 0.0012) * 0.05;
    fan.children.forEach((c) => { c.position.y = c.userData.base.y + Math.sin(t * 0.0011 + c.userData.base.phase) * 0.045; });
    root.rotation.y += ((ptr.x * 0.5) - root.rotation.y) * 0.06;
    root.rotation.x += ((-ptr.y * 0.25) - root.rotation.x) * 0.06;
  };
  return { object: root, camera: { z: 5.9, y: 0, fov: 34, fitAspect: 1.2 } };
}

/* ---------- Cinco Vidas: only the game's logo, in 3D ---------- */
function buildLogo(opts) {
  const root = new THREE.Group();
  const logo = addLogo(root, opts); logo.scale.setScalar(1.7);
  root.userData.update = (t, ptr) => {
    logo.rotation.y += ((Math.sin(t * 0.0009) * 0.35 + ptr.x * 0.5) - logo.rotation.y) * 0.06;
    logo.rotation.x += ((-ptr.y * 0.2) - logo.rotation.x) * 0.06;
    logo.position.y = Math.sin(t * 0.0012) * 0.06;
  };
  return { object: root, camera: { z: 4.6, y: 0, fov: 34, fitAspect: 1.1 } };
}

/* ---------- Globe: land from the site's own world map, visited countries in teal ---------- */
/* The source map (public/world.svg) is drawn in the Natural Earth projection: pixel = scale * projected + offset.
   Fitted from country centroids (rmse about 3 px in x and 1.6 px in y); the old linear guess put California in the sea.
   The texture is resampled pixel by pixel into the equirectangular layout a sphere needs. */
const NE = { sx: 181.91, ox: 500.16, sy: -182.83, oy: 259.39 };
function neRow(latDeg) { const f = (latDeg * Math.PI) / 180, p2 = f * f, p4 = p2 * p2; return { y: f * (1.007226 + p2 * (0.015085 + p4 * (-0.044475 + 0.028874 * p2 - 0.005916 * p4))), kx: 0.8707 - 0.131979 * p2 + p4 * (-0.013791 + p4 * (0.003971 * p2 - 0.001529 * p4)) }; }
export function mapPixel(latDeg, lonDeg) { const r = neRow(latDeg); return [NE.sx * ((lonDeg * Math.PI / 180) * r.kx) + NE.ox, NE.sy * r.y + NE.oy]; }

export async function globeTexture(mapUrl, visited) {
  const W = 2048, H = 1024, S = 2, SW = 1000 * S, SH = 445 * S;
  const OCEAN = [13, 45, 56];
  const out = document.createElement('canvas'); out.width = W; out.height = H;
  const g = out.getContext('2d');
  g.fillStyle = '#0d2d38'; g.fillRect(0, 0, W, H);
  try {
    const svg = await (await fetch(mapUrl)).text();
    const src = document.createElement('canvas'); src.width = SW; src.height = SH;
    const sg = src.getContext('2d');
    sg.fillStyle = '#0d2d38'; sg.fillRect(0, 0, SW, SH);
    sg.setTransform(S, 0, 0, S, 0, 0);
    const re = /<path d="([^"]*)" data-c="([A-Z]{2})"/g; let m;
    const land = [], vis = [];
    while ((m = re.exec(svg))) (visited.includes(m[2]) ? vis : land).push(new Path2D(m[1]));
    sg.fillStyle = '#4b7b88'; sg.strokeStyle = '#0d2d38'; sg.lineWidth = 0.5;
    land.forEach((p) => { sg.fill(p); sg.stroke(p); });
    sg.fillStyle = '#3bb8be'; sg.strokeStyle = '#0c2630';
    vis.forEach((p) => { sg.fill(p); sg.stroke(p); });
    const sd = sg.getImageData(0, 0, SW, SH).data;
    const od = g.createImageData(W, H); const o = od.data;
    for (let r = 0; r < H; r++) {
      const lat = 90 - ((r + 0.5) / H) * 180; const row = neRow(lat);
      const py = (NE.sy * row.y + NE.oy) * S - 0.5;
      for (let c = 0; c < W; c++) {
        const lon = ((c + 0.5) / W) * 360 - 180;
        const px = (NE.sx * ((lon * Math.PI) / 180) * row.kx + NE.ox) * S - 0.5;
        const k = (r * W + c) * 4;
        if (px < 0 || py < 0 || px > SW - 1 || py > SH - 1) { o[k] = OCEAN[0]; o[k + 1] = OCEAN[1]; o[k + 2] = OCEAN[2]; o[k + 3] = 255; continue; }
        const x0 = px | 0, y0 = py | 0, fx = px - x0, fy = py - y0;
        const a = (y0 * SW + x0) * 4, b = a + 4, cc = a + SW * 4, d = cc + 4;
        for (let ch = 0; ch < 3; ch++) o[k + ch] = (sd[a + ch] * (1 - fx) + sd[b + ch] * fx) * (1 - fy) + (sd[cc + ch] * (1 - fx) + sd[d + ch] * fx) * fy;
        o[k + 3] = 255;
      }
    }
    g.putImageData(od, 0, 0);
  } catch (e) { /* the globe still shows as an empty sphere */ }
  g.strokeStyle = 'rgba(120,180,190,0.10)'; g.lineWidth = 1;
  for (let i = 0; i <= 24; i++) { g.beginPath(); g.moveTo(i * (W / 24), 0); g.lineTo(i * (W / 24), H); g.stroke(); }
  for (let i = 0; i <= 12; i++) { g.beginPath(); g.moveTo(0, i * (H / 12)); g.lineTo(W, i * (H / 12)); g.stroke(); }
  return tex(out);
}
function buildGlobe(opts) {
  const root = new THREE.Group();
  const mat = new THREE.MeshStandardMaterial({ roughness: 0.55, metalness: 0.05, color: 0xffffff });
  const sphere = new THREE.Mesh(new THREE.SphereGeometry(1.25, 96, 64), mat);
  root.add(sphere);
  globeTexture(opts.mapUrl || '/world.svg', opts.visited || []).then((t) => { mat.map = t; mat.emissiveMap = t; mat.emissive = new THREE.Color(0xffffff); mat.emissiveIntensity = 0.32; mat.needsUpdate = true; opts.requestFrame && opts.requestFrame(); });
  const halo = new THREE.Mesh(new THREE.SphereGeometry(1.31, 64, 48), new THREE.MeshBasicMaterial({ color: 0x3bb8be, transparent: true, opacity: 0.08, side: THREE.BackSide }));
  root.add(halo);
  sphere.rotation.y = -Math.PI * 0.52; // Europe faces the camera
  root.rotation.z = -0.2; root.rotation.x = 0.28;
  let drag = null, vel = 0.0016;
  root.userData.pointerDown = (p) => { drag = { x: p.x }; };
  root.userData.pointerMove = (p) => { if (!drag) return; const dx = p.x - drag.x; drag.x = p.x; sphere.rotation.y += dx * 0.012; vel = dx * 0.0007; };
  root.userData.pointerUp = () => { drag = null; };
  root.userData.update = () => { if (!drag) { sphere.rotation.y += vel; vel += (0.0016 - vel) * 0.02; } };
  root.userData.draggable = true;
  return { object: root, camera: { z: 5.2, y: 0, fov: 34 } };
}

/* ---------- Surfboard and skis ---------- */
function buildOutside() {
  const root = new THREE.Group();
  // surfboard
  const s = new THREE.Shape();
  s.moveTo(0, 1.55);
  s.bezierCurveTo(0.22, 1.25, 0.42, 0.6, 0.42, 0);
  s.bezierCurveTo(0.42, -0.7, 0.32, -1.25, 0.2, -1.55);
  s.lineTo(-0.2, -1.55);
  s.bezierCurveTo(-0.32, -1.25, -0.42, -0.7, -0.42, 0);
  s.bezierCurveTo(-0.42, 0.6, -0.22, 1.25, 0, 1.55);
  const bg = new THREE.ExtrudeGeometry(s, { depth: 0.06, bevelEnabled: true, bevelThickness: 0.05, bevelSize: 0.05, bevelSegments: 6, curveSegments: 48 });
  bg.translate(0, 0, -0.03);
  const board = new THREE.Group();
  board.add(new THREE.Mesh(bg, new THREE.MeshPhysicalMaterial({ color: 0x0f7077, roughness: 0.25, clearcoat: 1, clearcoatRoughness: 0.15 })));
  const stripe = new THREE.Mesh(new THREE.BoxGeometry(0.1, 2.5, 0.01), new THREE.MeshStandardMaterial({ color: 0xf4f5f3, roughness: 0.4 }));
  stripe.position.set(0, 0.05, 0.095); board.add(stripe);
  const stripe2 = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.08, 0.01), new THREE.MeshStandardMaterial({ color: 0xf4f5f3, roughness: 0.4 }));
  
  const fin = (x, y, h, tilt) => {
    const f = new THREE.Shape(); f.moveTo(0, 0); f.quadraticCurveTo(0.02, h * 0.6, 0.12 * Math.sign(tilt || 1) * 0.5, h); f.lineTo(0.05, 0); f.closePath();
    const m = new THREE.Mesh(new THREE.ExtrudeGeometry(f, { depth: 0.015, bevelEnabled: false }), new THREE.MeshStandardMaterial({ color: 0x0e1c26, roughness: 0.4 }));
    m.rotation.x = -Math.PI / 2; m.rotation.z = Math.PI / 2; m.position.set(x, y, -0.09); return m;
  };
  [-0.2, 0.2].forEach((x) => { const m = new THREE.Mesh(new THREE.BoxGeometry(0.012, 0.28, 0.2), new THREE.MeshStandardMaterial({ color: 0x0e1c26, roughness: 0.4 })); m.position.set(x, -1.15, -0.13); m.rotation.x = 0.0; board.add(m); });
  const centre = new THREE.Mesh(new THREE.BoxGeometry(0.012, 0.32, 0.24), new THREE.MeshStandardMaterial({ color: 0x0e1c26, roughness: 0.4 })); centre.position.set(0, -1.2, -0.15); board.add(centre);
  board.position.set(-1.0, 0, 0); board.rotation.set(0, 0, 0.18);
  root.add(board);

  // skis
  const skis = new THREE.Group();
  const ski = (x, color) => {
    const L = 3.1, segs = 90;
    const geo = new THREE.BoxGeometry(0.24, L, 0.04, 2, segs, 1);
    const p = geo.attributes.position;
    for (let i = 0; i < p.count; i++) {
      const y = p.getY(i);
      const tip = Math.max(0, y - (L / 2 - 0.55)) / 0.55; // upturned tip
      p.setZ(i, p.getZ(i) + tip * tip * 0.16);
      const tail = Math.max(0, -y - (L / 2 - 0.25)) / 0.25; // rounded tail
      p.setZ(i, p.getZ(i) + tail * tail * 0.04);
      const taper = 1 - Math.pow(Math.max(0, y - (L / 2 - 0.9)) / 0.9, 3) * 0.55;
      p.setX(i, p.getX(i) * taper);
    }
    geo.computeVertexNormals();
    const g = new THREE.Group();
    g.add(new THREE.Mesh(geo, new THREE.MeshPhysicalMaterial({ color, roughness: 0.3, clearcoat: 0.8 })));
    const bind = new THREE.Mesh(new THREE.BoxGeometry(0.19, 0.34, 0.07), new THREE.MeshStandardMaterial({ color: 0x0e1c26, roughness: 0.5 }));
    bind.position.set(0, -0.1, 0.05); g.add(bind);
    const heel = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.14, 0.08), new THREE.MeshStandardMaterial({ color: 0x3bb8be, roughness: 0.4 }));
    heel.position.set(0, -0.36, 0.055); g.add(heel);
    g.position.x = x; return g;
  };
  skis.add(ski(-0.17, 0xd8553f)); skis.add(ski(0.17, 0xd8553f));
  skis.children.forEach((k) => { const st = new THREE.Mesh(new THREE.BoxGeometry(0.08, 2.4, 0.004), new THREE.MeshStandardMaterial({ color: 0xf4f5f3 })); st.position.set(0, 0.2, 0.019); k.add(st); });
  skis.position.set(1.0, 0, 0); skis.rotation.set(0, 0, -0.14);
  root.add(skis);

  root.userData.update = (t, ptr) => {
    board.position.y = Math.sin(t * 0.0009) * 0.05;
    skis.position.y = Math.sin(t * 0.0009 + 1.7) * 0.05;
    root.rotation.y += ((ptr.x * 0.7) - root.rotation.y) * 0.05;
    root.rotation.x += ((-ptr.y * 0.2) - root.rotation.x) * 0.05;
  };
  return { object: root, camera: { z: 6.0, y: 0, fov: 34 } };
}

/* ---------- Phone with the Dashboard "Hoy" screen (invented data) ---------- */
function phoneScreen() {
  const c = document.createElement('canvas'); c.width = 390; c.height = 844;
  const g = c.getContext('2d');
  g.fillStyle = '#fff'; g.fillRect(0, 0, 390, 844);
  g.fillStyle = '#11181c'; g.font = '600 15px system-ui, sans-serif'; g.textAlign = 'left'; g.fillText('9:41', 28, 34);
  g.font = '700 34px system-ui, sans-serif'; g.fillText('Hoy', 22, 96);
  g.fillStyle = '#eef5fc'; rr(g, 18, 118, 354, 92, 18); g.fill();
  g.fillStyle = '#0a6fd6'; g.font = '600 13px system-ui, sans-serif'; g.fillText('Lo siguiente', 36, 144);
  g.fillStyle = '#11181c'; g.font = '700 22px system-ui, sans-serif'; g.fillText('Clase de Operaciones', 36, 174);
  g.fillStyle = '#667781'; g.font = '400 14px system-ui, sans-serif'; g.fillText('en 1 h 20 min · 15:00', 36, 196);
  const stats = [['5', 'Hoy'], ['1', 'Urgentes'], ['2/4', 'Hábitos'], ['6.200', 'Pasos']];
  stats.forEach((s, i) => { const x = 18 + i * 90; g.fillStyle = '#f5f7f8'; rr(g, x, 228, 84, 66, 14); g.fill(); g.fillStyle = '#11181c'; g.textAlign = 'center'; g.font = '700 19px system-ui, sans-serif'; g.fillText(s[0], x + 42, 258); g.fillStyle = '#667781'; g.font = '400 12px system-ui, sans-serif'; g.fillText(s[1], x + 42, 280); });
  g.textAlign = 'left'; g.fillStyle = '#667781'; g.font = '600 13px system-ui, sans-serif'; g.fillText('Tu día', 22, 330);
  const rows = [['Entregar memoria de práctica', '12:00', true], ['Comida con Lucía', '14:00'], ['Clase de Operaciones', '15:00'], ['Gimnasio · pierna', '19:30']];
  rows.forEach((r, i) => {
    const y = 350 + i * 58;
    g.strokeStyle = '#e6eaec'; g.lineWidth = 1; g.beginPath(); g.moveTo(18, y); g.lineTo(372, y); g.stroke();
    if (r[2]) { g.fillStyle = '#1b7fa8'; g.fillRect(18, y + 1, 3, 56); }
    g.strokeStyle = '#b9c4ca'; g.lineWidth = 2; g.beginPath(); g.arc(40, y + 29, 10, 0, Math.PI * 2); g.stroke();
    g.fillStyle = '#11181c'; g.font = '500 16px system-ui, sans-serif'; g.fillText(r[0].slice(0, 26), 62, y + 35);
    g.fillStyle = '#667781'; g.font = '400 14px system-ui, sans-serif'; g.textAlign = 'right'; g.fillText(r[1], 372, y + 35); g.textAlign = 'left';
  });
  g.fillStyle = '#fff'; g.fillRect(0, 760, 390, 84); g.strokeStyle = '#e6eaec'; g.beginPath(); g.moveTo(0, 760); g.lineTo(390, 760); g.stroke();
  ['Hoy', 'Listas', 'Calendario', 'Dinero', 'Más'].forEach((n, i) => { const x = 39 + i * 78; g.fillStyle = i === 0 ? '#0a6fd6' : '#d6dde1'; rr(g, x - 11, 778, 22, 22, 6); g.fill(); g.fillStyle = i === 0 ? '#0a6fd6' : '#667781'; g.font = '500 11px system-ui, sans-serif'; g.textAlign = 'center'; g.fillText(n, x, 818); });
  return tex(c);
}

function buildPhone() {
  const root = new THREE.Group();
  const W = 0.8, H = 1.74, D = 0.1;
  const body = new THREE.ExtrudeGeometry(roundedShape(W, H, 0.13), { depth: D, bevelEnabled: true, bevelThickness: 0.015, bevelSize: 0.015, bevelSegments: 4, curveSegments: 24 });
  body.translate(0, 0, -D / 2);
  const phone = new THREE.Group();
  phone.add(new THREE.Mesh(body, new THREE.MeshPhysicalMaterial({ color: 0x1b2227, roughness: 0.3, metalness: 0.6, clearcoat: 0.5 })));
  const screen = new THREE.Mesh(new THREE.ShapeGeometry(roundedShape(W - 0.07, H - 0.07, 0.1), 24), new THREE.MeshBasicMaterial({ map: phoneScreen(), toneMapped: false }));
  // remap UVs of the screen shape to 0..1
  const sw = W - 0.07, sh = H - 0.07; const uv = screen.geometry.attributes.uv; const pos = screen.geometry.attributes.position;
  for (let i = 0; i < uv.count; i++) uv.setXY(i, (pos.getX(i) + sw / 2) / sw, (pos.getY(i) + sh / 2) / sh);
  screen.position.z = D / 2 + 0.017; phone.add(screen);
  phone.rotation.set(0.08, -0.2, 0.04);
  root.add(phone);
  root.userData.update = (t, ptr) => {
    phone.position.y = Math.sin(t * 0.001) * 0.05;
    root.rotation.y += ((ptr.x * 0.4) - root.rotation.y) * 0.06;
    root.rotation.x += ((-ptr.y * 0.2) - root.rotation.x) * 0.06;
  };
  return { object: root, camera: { z: 3.3, y: 0, fov: 34 } };
}


/* ---------- Helpers for latitude/longitude on the sphere ---------- */
function latLonToLocal(lat, lon, R) {
  const phi = ((lon + 180) / 360) * Math.PI * 2;
  const theta = ((90 - lat) / 180) * Math.PI;
  return new THREE.Vector3(-R * Math.cos(phi) * Math.sin(theta), R * Math.cos(theta), R * Math.sin(phi) * Math.sin(theta));
}
const wrapPi = (a) => ((a + Math.PI) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2) - Math.PI;

/* ---------- Route globe: a world tour. Study stops fly to their place; work stops keep the globe travelling ---------- */
function buildRoute(opts) {
  const root = new THREE.Group();
  const R = 1.25;
  const mat = new THREE.MeshStandardMaterial({ roughness: 0.55, metalness: 0.05 });
  const sphere = new THREE.Mesh(new THREE.SphereGeometry(R, 96, 64), mat);
  root.add(sphere);
  globeTexture(opts.mapUrl || '/world.svg', opts.visited || []).then((t) => { mat.map = t; mat.emissiveMap = t; mat.emissive = new THREE.Color(0xffffff); mat.emissiveIntensity = 0.32; mat.needsUpdate = true; opts.requestFrame && opts.requestFrame(); });
  root.add(new THREE.Mesh(new THREE.SphereGeometry(R * 1.05, 64, 48), new THREE.MeshBasicMaterial({ color: 0x3bb8be, transparent: true, opacity: 0.08, side: THREE.BackSide })));
  const stops = JSON.parse(opts.el.dataset.stops || '[]');
  const kinds = JSON.parse(opts.el.dataset.kinds || '[]');
  const markers = stops.map((s) => {
    if (!s) return null;
    const g = new THREE.Group();
    const p = latLonToLocal(s.lat, s.lon, R * 1.004);
    g.position.copy(p); sphere.add(g); g.lookAt(p.clone().multiplyScalar(2));
    const dot = new THREE.Mesh(new THREE.SphereGeometry(0.028, 16, 12), new THREE.MeshBasicMaterial({ color: 0xffffff, toneMapped: false }));
    const ring = new THREE.Mesh(new THREE.RingGeometry(0.05, 0.062, 40), new THREE.MeshBasicMaterial({ color: 0x3bb8be, side: THREE.DoubleSide, transparent: true, opacity: 0.95, toneMapped: false }));
    g.add(dot, ring);
    return { g, ring, p: latLonToLocal(s.lat, s.lon, 1), lat: s.lat };
  });
  // great-circle arcs between consecutive places (work stops have no place and are skipped)
  const places = []; stops.forEach((s, i) => { if (s) places.push(i); });
  const arcs = [];
  for (let k = 0; k < places.length - 1; k++) {
    const a = markers[places[k]], b = markers[places[k + 1]];
    const va = a.p.clone().normalize(), vb = b.p.clone().normalize(); const ang = va.angleTo(vb); if (ang < 0.01) continue;
    const n = 64, pos = [];
    for (let s = 0; s <= n; s++) {
      const u = s / n;
      const p = va.clone().multiplyScalar(Math.sin((1 - u) * ang) / Math.sin(ang)).add(vb.clone().multiplyScalar(Math.sin(u * ang) / Math.sin(ang)));
      p.multiplyScalar(R * (1.004 + Math.sin(Math.PI * u) * 0.18 * Math.min(1, ang / 1.2))); pos.push(p.x, p.y, p.z);
    }
    const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); geo.setDrawRange(0, 0);
    const line = new THREE.Line(geo, new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.9, toneMapped: false }));
    sphere.add(line); arcs.push({ to: places[k + 1], line, n: n + 1, prog: 0 });
  }
  // a dotted orbit with a small traveller going round the world
  const orbit = new THREE.Group(); orbit.rotation.set(1.12, 0, 0.4); root.add(orbit);
  const op = []; for (let i = 0; i < 180; i++) { const a = (i / 180) * Math.PI * 2; op.push(Math.cos(a) * 1.62, 0, Math.sin(a) * 1.62); }
  const og = new THREE.BufferGeometry(); og.setAttribute('position', new THREE.Float32BufferAttribute(op, 3));
  orbit.add(new THREE.Points(og, new THREE.PointsMaterial({ color: 0x3bb8be, size: 0.024, transparent: true, opacity: 0.75, sizeAttenuation: true })));
  const traveller = new THREE.Mesh(new THREE.SphereGeometry(0.055, 16, 12), new THREE.MeshBasicMaterial({ color: 0xd8553f, toneMapped: false })); orbit.add(traveller);
  let mo = null, still = false;
  root.userData.update = (t) => {
    const i = parseInt(opts.el.dataset.step || '0', 10);
    const m = markers[i];
    const work = kinds[i] === 'work';
    const ease = still ? 1 : 0.11;
    arcs.forEach((a) => { const goal = i >= a.to ? 1 : 0; a.prog += (goal - a.prog) * (still ? 1 : 0.07); a.line.geometry.setDrawRange(0, Math.floor(a.prog * a.n)); });
    if (m) {
      const psi = Math.atan2(-m.p.x, m.p.z);
      sphere.rotation.y += wrapPi(psi - sphere.rotation.y) * ease;
      root.rotation.x += ((m.lat * Math.PI) / 180 * 0.9 - root.rotation.x) * ease;
    } else {
      sphere.rotation.y += work ? 0.006 : 0.0025;
      root.rotation.x += (0.28 - root.rotation.x) * ease;
    }
    markers.forEach((mk, k) => { if (!mk) return; const on = k === i; mk.ring.scale.setScalar(on ? 1.7 + Math.sin(t * 0.005) * 0.25 : 0.9); mk.g.scale.setScalar(on ? 1.5 : 1); mk.ring.material.opacity = on ? 0.95 : 0.45; });
    const ang = (still ? 0.8 : t * 0.0009) + (work ? Math.sin(t * 0.002) * 0.1 : 0);
    traveller.position.set(Math.cos(ang) * 1.62, 0, Math.sin(ang) * 1.62);
  };
  return {
    object: root, camera: { z: 4.9, y: 0, fov: 32 },
    init(ctx) { still = ctx.still; mo = new MutationObserver(() => ctx.requestFrame()); mo.observe(opts.el, { attributes: true, attributeFilter: ['data-step'] }); },
    dispose() { mo && mo.disconnect(); },
  };
}

/* ---------- Contact: a paper plane ---------- */
function buildMail() {
  const root = new THREE.Group(); const g = new THREE.Group(); root.add(g);
  const N = [0, 0, 1.15], L = [-0.9, 0.14, -0.8], R = [0.9, 0.14, -0.8], T = [0, -0.02, -0.55], K = [0, -0.45, -0.8];
  const face = (pts, color) => {
    const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.Float32BufferAttribute(pts.flat(), 3)); geo.computeVertexNormals();
    return new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color, roughness: 0.45, side: THREE.DoubleSide, flatShading: true }));
  };
  g.add(face([N, L, T], 0xf4f5f3), face([N, T, R], 0xe0e7e5), face([N, T, K], 0x0f7077), face([T, L, K], 0x0b5a60), face([T, K, R], 0x0b5a60));
  const trail = new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, -0.2, -1.1), new THREE.Vector3(0, -0.3, -1.6), new THREE.Vector3(0, -0.5, -2.2)]), new THREE.LineDashedMaterial({ color: 0x3bb8be, dashSize: 0.12, gapSize: 0.1 }));
  trail.computeLineDistances(); g.add(trail);
  g.rotation.x = -0.35; g.scale.setScalar(0.9);
  root.userData.update = (t) => { g.rotation.y = 0.7 + Math.sin(t * 0.0007) * 0.25; g.rotation.z = Math.sin(t * 0.0011) * 0.2; g.position.y = Math.sin(t * 0.0012) * 0.08; };
  return { object: root };
}

/* ---------- The room: each object is a way into the site ---------- */
function buildRoom(opts) {
  const root = new THREE.Group();
  const target = new THREE.Vector3(0, 0.55, 0);
  const slabMat = new THREE.MeshStandardMaterial({ color: 0xe6eae8, roughness: 0.85 });
  const slabGeo = new THREE.ExtrudeGeometry(roundedShape(9.8, 5.4, 0.5), { depth: 0.45, bevelEnabled: true, bevelThickness: 0.04, bevelSize: 0.04, bevelSegments: 3, curveSegments: 16 });
  slabGeo.rotateX(-Math.PI / 2); slabGeo.translate(0, -0.45, 0);
  root.add(new THREE.Mesh(slabGeo, slabMat));
  const outline = new THREE.LineLoop(
    new THREE.BufferGeometry().setFromPoints(roundedShape(9.1, 4.7, 0.4).getPoints(24).map((p) => new THREE.Vector3(p.x, 0.045, -p.y))),
    new THREE.LineBasicMaterial({ color: 0x3bb8be, transparent: true, opacity: 0.55 }));
  root.add(outline);
  const plinthMat = new THREE.MeshStandardMaterial({ color: 0xcfd8d6, roughness: 0.7 });

  const defs = [
    { id: 'cards', make: () => buildLogo(opts), pos: [-2.9, 0.5], scale: 0.6, lift: 1.05, rot: 0.25, top: 2.35 },
    { id: 'phone', make: () => buildPhone(), pos: [-0.9, -1.1], scale: 1.05, lift: 1.05, rot: 0.15, top: 2.7 },
    { id: 'mail', make: () => buildMail(), pos: [0.7, 1.6], scale: 1.1, lift: 0.8, rot: 0.15, top: 1.7 },
    { id: 'globe', make: () => buildGlobe(opts), pos: [2.4, -0.4], scale: 0.85, lift: 1.2, rot: 0, top: 2.7 },
  ];
  const hits = [];
  const st = defs.map((d) => {
    const group = new THREE.Group(); group.position.set(d.pos[0], 0, d.pos[1]); root.add(group);
    const plinth = new THREE.Mesh(new THREE.CylinderGeometry(1.15, 1.22, 0.14, 48), plinthMat); plinth.position.y = 0.07; group.add(plinth);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x3bb8be, transparent: true, opacity: 0.35 });
    const ring = new THREE.Mesh(new THREE.TorusGeometry(1.17, 0.014, 8, 80), ringMat); ring.rotation.x = Math.PI / 2; ring.position.y = 0.145; group.add(ring);
    const made = d.make();
    const inner = new THREE.Group(); inner.rotation.y = d.rot; inner.scale.setScalar(d.scale); inner.position.y = 0.14 + d.lift; group.add(inner);
    inner.add(made.object);
    const hit = new THREE.Mesh(new THREE.CylinderGeometry(1.3, 1.3, 2.8, 16), new THREE.MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false }));
    hit.position.y = 1.2; hit.userData.id = d.id; group.add(hit); hits.push(hit);
    return { ...d, group, inner, ringMat, made, h: 0, vel: 0, baseY: inner.position.y };
  });

  let ctx = null, camera = null, dir = new THREE.Vector3(0.22, 0.6, 0.85).normalize(), dist = 16;
  let canvasHover = null, labelHover = null, yawT = 0, drag = null, dragged = false, dragSt = null, fly = null, labels = {}, cleanup = [];
  const ray = new THREE.Raycaster(); const m = new THREE.Vector2(); const v = new THREE.Vector3();

  function place(zoom = 1) { if (!camera) return; camera.position.copy(dir).multiplyScalar(dist * zoom).add(target); camera.lookAt(target); }
  function go(href) { if (ctx.still) { location.href = href; return; } if (!fly) fly = { t0: performance.now(), href }; }

  root.userData.update = (t, ptr) => {
    if (!ctx) return;
    const dark = document.documentElement.dataset.mode === 'dark';
    slabMat.color.setHex(dark ? 0x16222a : 0xe6eae8); plinthMat.color.setHex(dark ? 0x25363f : 0xcfd8d6);
    const sway = ctx.still ? 0 : Math.sin(t * 0.00035) * 0.07 + ptr.x * 0.1;
    root.rotation.y += ((yawT + sway) - root.rotation.y) * (ctx.still ? 1 : 0.08);
    const hover = canvasHover || labelHover;
    st.forEach((s) => {
      const goal = s.id === hover ? 1 : 0;
      s.h += (goal - s.h) * (ctx.still ? 1 : 0.16);
      s.inner.scale.setScalar(s.scale * (1 + 0.12 * s.h)); s.inner.position.y = s.baseY + 0.14 * s.h;
      s.ringMat.opacity = 0.3 + 0.7 * s.h;
      if (s !== dragSt) { // a dragged object keeps spinning, then settles back to its pose
        s.inner.rotation.y += s.vel; s.vel *= 0.94;
        if (Math.abs(s.vel) < 0.0004) { s.vel = 0; s.inner.rotation.y += wrapPi(s.rot - s.inner.rotation.y) * 0.03; }
      }
      const u = s.made.object.userData.update; if (u) u(t, { x: ptr.x * 0.4, y: ptr.y * 0.4 });
    });
    let zoom = 1;
    if (fly) {
      const k = Math.min(1, (performance.now() - fly.t0) / 480); zoom = 1 - 0.32 * (1 - Math.pow(1 - k, 3));
      ctx.canvas.style.opacity = String(1 - k * 0.7);
      if (k >= 1 && fly.href) { const h = fly.href; fly.href = null; location.href = h; }
    }
    place(zoom);
    root.updateMatrixWorld(true); camera.updateMatrixWorld(true);
    const w = ctx.el.clientWidth, h = ctx.el.clientHeight;
    st.forEach((s) => {
      const a = labels[s.id]; if (!a) return;
      v.set(s.pos[0], s.top, s.pos[1]).applyMatrix4(root.matrixWorld).project(camera);
      a.style.transform = 'translate(' + ((v.x * 0.5 + 0.5) * w) + 'px,' + ((-v.y * 0.5 + 0.5) * h) + 'px) translate(-50%,-100%)';
      a.classList.toggle('hot', s.id === hover);
    });
    ctx.el.style.cursor = canvasHover ? 'pointer' : (drag ? 'grabbing' : 'grab');
  };

  return {
    object: root, camera: { fov: 28 },
    fit(cam, aspect) { camera = cam; const half = Math.tan(THREE.MathUtils.degToRad(cam.fov / 2)); dist = Math.max(12, 10.6 / (2 * half * aspect)); place(); },
    init(c) {
      ctx = c; camera = c.camera;
      c.el.querySelectorAll('[data-station]').forEach((a) => {
        labels[a.dataset.station] = a;
        const on = () => { labelHover = a.dataset.station; c.requestFrame(); }, off = () => { labelHover = null; c.requestFrame(); };
        a.addEventListener('mouseenter', on); a.addEventListener('mouseleave', off); a.addEventListener('focus', on); a.addEventListener('blur', off);
        a.addEventListener('click', (e) => { if (e.metaKey || e.ctrlKey || e.shiftKey) return; e.preventDefault(); go(a.getAttribute('href')); });
      });
      const canvas = c.canvas;
      const pick = (e) => { const r = canvas.getBoundingClientRect(); m.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1); ray.setFromCamera(m, camera); const h = ray.intersectObjects(hits, false)[0]; return h ? h.object.userData.id : null; };
      const down = (e) => { drag = { x: e.clientX }; dragged = false; const id = pick(e); dragSt = !c.still && id ? st.find((s) => s.id === id) : null; if (dragSt) dragSt.vel = 0; canvas.setPointerCapture(e.pointerId); };
      const move = (e) => {
        if (drag) {
          const dx = e.clientX - drag.x; if (Math.abs(dx) > 3) dragged = true; drag.x = e.clientX;
          if (dragSt) { if (!c.still) { dragSt.inner.rotation.y += dx * 0.015; dragSt.vel = dx * 0.015; } }
          else if (!c.still) yawT = Math.max(-1, Math.min(1, yawT + dx * 0.006));
        }
        const id = pick(e); if (id !== canvasHover) { canvasHover = id; } c.requestFrame();
      };
      const up = (e) => { const id = pick(e); const was = dragged; drag = null; dragSt = null; if (!was && id) go(labels[id] ? labels[id].getAttribute('href') : null); c.requestFrame(); };
      const leave = () => { canvasHover = null; c.requestFrame(); };
      canvas.style.touchAction = 'pan-y';
      canvas.addEventListener('pointerdown', down); canvas.addEventListener('pointermove', move); canvas.addEventListener('pointerup', up); canvas.addEventListener('pointerleave', leave);
      cleanup.push(() => { canvas.removeEventListener('pointerdown', down); });
      c.requestFrame();
    },
    dispose() { cleanup.forEach((f) => f()); },
  };
}

const BUILDERS = { cards: buildCards, logo: buildLogo, globe: buildGlobe, outside: buildOutside, phone: buildPhone, route: buildRoute, room: buildRoom };

export function mount(el, kind, opts = {}) {
  const canvas = el.querySelector('canvas');
  let renderer;
  try { renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'low-power' }); }
  catch (e) { el.hidden = true; return () => {}; }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.05;
  renderer.setClearColor(0x000000, 0);

  const scene = new THREE.Scene();
  const pm = new THREE.PMREMGenerator(renderer);
  scene.environment = pm.fromScene(new RoomEnvironment(), 0.04).texture;
  scene.environmentIntensity = 0.9;
  const key = new THREE.DirectionalLight(0xffffff, 1.6); key.position.set(2.5, 3, 4); scene.add(key);
  const rim = new THREE.DirectionalLight(0x3bb8be, 1.2); rim.position.set(-3, 1, -2); scene.add(rim);

  let requestFrame = () => {};
  const built = BUILDERS[kind]({ ...opts, el, requestFrame: () => requestFrame() });
  const pivot = new THREE.Group(); pivot.add(built.object); scene.add(pivot);
  const spinnable = ['logo', 'phone', 'cards', 'outside'].includes(kind);
  let spin = null, vx = 0;
  const camera = new THREE.PerspectiveCamera(built.camera.fov, 1, 0.1, 80);
  camera.position.set(0, built.camera.y || 0, built.camera.z || 6);

  const ptr = { x: 0, y: 0 };
  const still = reduceMotion();
  let visible = false, raf = 0, last = 0;

  function resize() {
    const r = el.getBoundingClientRect();
    const w = Math.max(1, Math.round(r.width)), h = Math.max(1, Math.round(r.height));
    renderer.setSize(w, h, false); camera.aspect = w / h;
    if (built.fit) built.fit(camera, camera.aspect);
    else { const narrow = camera.aspect < 0.9; const fit = built.camera.fitAspect ? Math.max(1, built.camera.fitAspect / camera.aspect) : (narrow ? 1.18 : 1); camera.position.z = built.camera.z * fit; }
    camera.updateProjectionMatrix();
  }
  function frame(t) {
    raf = 0;
    if (spinnable && !spin) { // inertia after a drag, then a soft return to the front
      pivot.rotation.y += vx; vx *= 0.94;
      if (Math.abs(vx) < 0.0004) { vx = 0; pivot.rotation.y += wrapPi(-pivot.rotation.y) * 0.03; pivot.rotation.x += -pivot.rotation.x * 0.05; }
    }
    if (built.object.userData.update) built.object.userData.update(t, ptr);
    renderer.render(scene, camera);
    if (visible && !still) raf = requestAnimationFrame(frame);
  }
  requestFrame = () => { if (!raf) raf = requestAnimationFrame(frame); };

  const ro = new ResizeObserver(() => { resize(); requestFrame(); }); ro.observe(el);
  const io = new IntersectionObserver((es) => { visible = es[0].isIntersecting; if (visible) requestFrame(); }, { rootMargin: '80px' });
  io.observe(el);
  resize(); if (built.init) built.init({ el, canvas, camera, ptr, still, requestFrame: () => requestFrame(), resize }); requestFrame();

  if (!still) {
    const move = (e) => { ptr.x = (e.clientX / window.innerWidth) * 2 - 1; ptr.y = (e.clientY / window.innerHeight) * 2 - 1; };
    window.addEventListener('pointermove', move, { passive: true });
    if (spinnable) {
      canvas.style.touchAction = 'pan-y'; canvas.style.cursor = 'grab';
      canvas.addEventListener('pointerdown', (e) => { spin = { x: e.clientX, y: e.clientY }; vx = 0; canvas.setPointerCapture(e.pointerId); canvas.style.cursor = 'grabbing'; requestFrame(); });
      canvas.addEventListener('pointermove', (e) => {
        if (!spin) return;
        const dx = e.clientX - spin.x, dy = e.clientY - spin.y; spin.x = e.clientX; spin.y = e.clientY;
        pivot.rotation.y += dx * 0.012; pivot.rotation.x = Math.max(-0.7, Math.min(0.7, pivot.rotation.x + dy * 0.008)); vx = dx * 0.012; requestFrame();
      });
      const end = () => { spin = null; canvas.style.cursor = 'grab'; requestFrame(); };
      canvas.addEventListener('pointerup', end); canvas.addEventListener('pointercancel', end);
    }
    if (built.object.userData.draggable) {
      canvas.style.touchAction = 'pan-y'; canvas.style.cursor = 'grab';
      canvas.addEventListener('pointerdown', (e) => { canvas.setPointerCapture(e.pointerId); built.object.userData.pointerDown({ x: e.clientX }); canvas.style.cursor = 'grabbing'; });
      canvas.addEventListener('pointermove', (e) => built.object.userData.pointerMove({ x: e.clientX }));
      const up = () => { built.object.userData.pointerUp(); canvas.style.cursor = 'grab'; };
      canvas.addEventListener('pointerup', up); canvas.addEventListener('pointercancel', up);
    }
  }
  return () => { ro.disconnect(); io.disconnect(); cancelAnimationFrame(raf); if (built.dispose) built.dispose(); renderer.dispose(); };
}
