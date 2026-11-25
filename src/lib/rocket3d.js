// Marcos's rocket, rendered live from his own 3D model (mmc_rocket_3d.glb).
// One small transparent canvas that the lift-off sequence moves around the page. Because it is a real 3D model,
// it can come toward the camera nose-first, pitch over, bank through a loop and land, with true perspective and lighting.
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

export const BODY_LEN = 3.4;          // world units, nose to nozzle
const CAM_Z = 15.5, FOV = 26;
export const UNITS_PER_CANVAS = 2 * Math.tan(THREE.MathUtils.degToRad(FOV / 2)) * CAM_Z; // world units visible across the canvas at z = 0

let glbPromise = null;
const loadGLB = (url) => (glbPromise ||= new GLTFLoader().loadAsync(url));

const UP = new THREE.Vector3(0, 1, 0);

export async function createRocket({ url = '/models/mmc_rocket_3d.glb', size = 180, dpr = Math.min(2, window.devicePixelRatio || 1) } = {}) {
  const gltf = await loadGLB(url);
  const canvas = document.createElement('canvas');
  const px = Math.round(size * dpr);
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'low-power' });
  renderer.setPixelRatio(1);
  renderer.setSize(px, px, false);
  renderer.setClearColor(0x000000, 0);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 0.85;

  const scene = new THREE.Scene();
  const pm = new THREE.PMREMGenerator(renderer);
  scene.environment = pm.fromScene(new RoomEnvironment(), 0.04).texture;
  scene.environmentIntensity = 0.55;
  pm.dispose();
  const key = new THREE.DirectionalLight(0xffffff, 1.9); key.position.set(-3, 4, 6); scene.add(key);
  const rim = new THREE.DirectionalLight(0x3bb8be, 1.5); rim.position.set(4, 1, -3); scene.add(rim);
  const fill = new THREE.DirectionalLight(0xffd9b0, 0.5); fill.position.set(2, -3, 4); scene.add(fill);

  const camera = new THREE.PerspectiveCamera(FOV, 1, 0.1, 80);
  camera.position.set(0, 0, CAM_Z);

  // ---- the model: centred on the body, scaled to BODY_LEN, own flame ----
  const model = gltf.scene.clone(true);
  const flameMeshes = [], bodyMeshes = [];
  model.traverse((o) => { if (o.isMesh) (/^1[45]_/.test(o.name) ? flameMeshes : bodyMeshes).push(o); });
  model.updateMatrixWorld(true);
  const box = new THREE.Box3();
  bodyMeshes.forEach((m) => box.expandByObject(m));
  const center = box.getCenter(new THREE.Vector3()), height = box.getSize(new THREE.Vector3()).y;
  const holder = new THREE.Group();
  model.position.sub(center);
  holder.add(model);
  holder.scale.setScalar(BODY_LEN / height);
  const pivot = new THREE.Group();
  pivot.add(holder);
  scene.add(pivot);

  // The model ships two flame cones. Keep their shape but make them glow, and let them flicker from the nozzle.
  const flame = new THREE.Group(); // wraps the cones; scale.y is the flame length, anchored at the nozzle
  const fb = new THREE.Box3(); flameMeshes.forEach((m) => fb.expandByObject(m));
  const anchor = new THREE.Vector3((fb.min.x + fb.max.x) / 2, fb.max.y, (fb.min.z + fb.max.z) / 2);
  flame.position.copy(anchor).sub(center);
  flameMeshes.forEach((m, i) => {
    m.parent.remove(m);
    m.position.sub(anchor);
    m.material = new THREE.MeshBasicMaterial({ color: i === 0 ? 0xff7a1a : 0xfff0b8, transparent: true, opacity: i === 0 ? 0.78 : 0.96, blending: THREE.AdditiveBlending, depthWrite: false });
    flame.add(m);
  });
  holder.add(flame);

  // ---- pose: orientation is a quaternion (no angle wrap-around, no gimbal), eased toward its target ----
  const cur = new THREE.Quaternion(), tgt = new THREE.Quaternion(), qa = new THREE.Quaternion(), qr = new THREE.Quaternion();
  const dirTmp = new THREE.Vector3();
  let flameAmt = 1, flameSeed = Math.random() * 10, disposed = false;

  const api = {
    canvas,
    size,
    /** direction the nose points (world: x right, y up, z toward the viewer) and spin around the rocket's own axis */
    setPose(dir, roll = 0, immediate = false) {
      dirTmp.copy(dir).normalize();
      qa.setFromUnitVectors(UP, dirTmp);
      qr.setFromAxisAngle(dirTmp, roll);
      tgt.copy(qr).multiply(qa);
      if (immediate) cur.copy(tgt);
    },
    /** ease the current orientation toward the target; tau is the time constant in seconds */
    update(dt, tau = 0.16) {
      cur.slerp(tgt, 1 - Math.exp(-dt / tau));
      pivot.quaternion.copy(cur);
    },
    setDepth(z) { pivot.position.z = z; },
    setFlame(a) { flameAmt = a; },
    /** unit vector of the nose direction as currently shown */
    nose(out = new THREE.Vector3()) { return out.copy(UP).applyQuaternion(cur); },
    render(tMs) {
      if (disposed) return;
      const f = flameAmt;
      flame.visible = f > 0.02;
      if (flame.visible) {
        const t = tMs * 0.001 + flameSeed;
        const flick = 0.88 + 0.16 * Math.sin(t * 38) + 0.1 * Math.sin(t * 61 + 1.3);
        flame.scale.set(1 + 0.06 * Math.sin(t * 47), Math.max(0.02, f * flick), 1 + 0.06 * Math.cos(t * 53));
      }
      renderer.render(scene, camera);
    },
    /** still image of the rocket standing nose-up with the engine off (used for the parked rocket) */
    snapshot(roll = -0.5) {
      const keepC = cur.clone(), keepT = tgt.clone(), keepZ = pivot.position.z, keepF = flameAmt;
      api.setPose(new THREE.Vector3(0, 1, 0), roll, true);
      pivot.quaternion.copy(cur); pivot.position.z = 0; flameAmt = 0;
      api.render(0);
      const url = canvas.toDataURL('image/png');
      cur.copy(keepC); tgt.copy(keepT); pivot.quaternion.copy(cur); pivot.position.z = keepZ; flameAmt = keepF;
      return url;
    },
    dispose() {
      disposed = true;
      renderer.dispose();
      try { renderer.forceContextLoss(); } catch (e) { /* already gone */ }
      canvas.remove();
    },
  };
  api.setPose(new THREE.Vector3(0, 1, 0), 0, true);
  pivot.quaternion.copy(cur);
  return api;
}
