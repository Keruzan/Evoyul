'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, Lightformer } from '@react-three/drei';
import * as THREE from 'three';
import { MutableRefObject, useEffect, useMemo, useRef } from 'react';

type Ctx = CanvasRenderingContext2D;
type Draw = (c: Ctx, w: number, h: number) => void;

const NAVY = '#1d3a6b';
const DEEP = '#0a1630';
const WHITE = '#f4f6fa';
const CARD_W = 512;
const CARD_H = 640;

function makeTexture(w: number, h: number, draw: Draw) {
  const cv = document.createElement('canvas');
  cv.width = w;
  cv.height = h;
  const c = cv.getContext('2d')!;
  draw(c, w, h);
  const t = new THREE.CanvasTexture(cv);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}

function roundRect(c: Ctx, x: number, y: number, w: number, h: number, r: number) {
  c.beginPath();
  c.roundRect(x, y, w, h, r);
}

function heart(c: Ctx, x: number, y: number, s: number) {
  c.beginPath();
  c.moveTo(x, y + s * 0.3);
  c.bezierCurveTo(x, y - s * 0.1, x - s * 0.5, y - s * 0.1, x - s * 0.5, y + s * 0.25);
  c.bezierCurveTo(x - s * 0.5, y + s * 0.55, x, y + s * 0.75, x, y + s);
  c.bezierCurveTo(x, y + s * 0.75, x + s * 0.5, y + s * 0.55, x + s * 0.5, y + s * 0.25);
  c.bezierCurveTo(x + s * 0.5, y - s * 0.1, x, y - s * 0.1, x, y + s * 0.3);
  c.closePath();
}

function cardBase(c: Ctx, w: number, h: number) {
  c.clearRect(0, 0, w, h);
  roundRect(c, 6, 6, w - 12, h - 12, 44);
  c.fillStyle = DEEP;
  c.fill();
  c.lineWidth = 3;
  c.strokeStyle = 'rgba(255,255,255,0.22)';
  c.stroke();
}

const drawPost: Draw = (c, w, h) => {
  cardBase(c, w, h);
  c.fillStyle = NAVY;
  c.beginPath();
  c.arc(72, 80, 34, 0, Math.PI * 2);
  c.fill();
  c.fillStyle = '#fff';
  c.font = '700 34px Arial, sans-serif';
  c.textAlign = 'center';
  c.textBaseline = 'middle';
  c.fillText('E', 72, 82);
  c.textAlign = 'left';
  c.font = '700 28px Arial, sans-serif';
  c.fillText('evoyul', 122, 70);
  c.font = '400 20px Arial, sans-serif';
  c.fillStyle = 'rgba(255,255,255,0.55)';
  c.fillText('Phuntsholing', 122, 100);
  roundRect(c, 34, 140, w - 68, 330, 24);
  c.fillStyle = NAVY;
  c.fill();
  c.strokeStyle = 'rgba(255,255,255,0.35)';
  c.lineWidth = 3;
  [46, 92, 138].forEach((r) => {
    c.beginPath();
    c.arc(w / 2, 305, r, 0, Math.PI * 2);
    c.stroke();
  });
  c.fillStyle = WHITE;
  c.fillRect(w / 2 - 28, 277, 56, 56);
  c.fillStyle = '#fff';
  heart(c, 64, 508, 44);
  c.fill();
  c.strokeStyle = '#fff';
  c.lineWidth = 4;
  c.beginPath();
  c.arc(140, 532, 20, 0, Math.PI * 2);
  c.stroke();
  c.beginPath();
  c.moveTo(188, 514);
  c.lineTo(232, 534);
  c.lineTo(188, 554);
  c.closePath();
  c.stroke();
  c.fillStyle = '#fff';
  c.font = '700 30px Arial, sans-serif';
  c.fillText('12.4K likes', 34, 596);
};

const drawReel: Draw = (c, w, h) => {
  cardBase(c, w, h);
  roundRect(c, 30, 30, w - 60, h - 60, 32);
  c.fillStyle = NAVY;
  c.fill();
  roundRect(c, 56, 58, 110, 40, 20);
  c.fillStyle = 'rgba(255,255,255,0.16)';
  c.fill();
  c.fillStyle = '#fff';
  c.font = '700 20px Arial, sans-serif';
  c.textAlign = 'center';
  c.textBaseline = 'middle';
  c.fillText('REEL', 111, 79);
  c.beginPath();
  c.arc(w / 2, h / 2 - 20, 76, 0, Math.PI * 2);
  c.fillStyle = WHITE;
  c.fill();
  c.beginPath();
  c.moveTo(w / 2 - 20, h / 2 - 58);
  c.lineTo(w / 2 + 38, h / 2 - 20);
  c.lineTo(w / 2 - 20, h / 2 + 18);
  c.closePath();
  c.fillStyle = NAVY;
  c.fill();
  c.textAlign = 'left';
  c.fillStyle = '#fff';
  c.font = '700 40px Arial, sans-serif';
  c.fillText('+248% reach', 56, h - 150);
  roundRect(c, 56, h - 100, w - 112, 8, 4);
  c.fillStyle = 'rgba(255,255,255,0.25)';
  c.fill();
  roundRect(c, 56, h - 100, (w - 112) * 0.62, 8, 4);
  c.fillStyle = '#fff';
  c.fill();
};

const drawGrowth: Draw = (c, w, h) => {
  cardBase(c, w, h);
  c.fillStyle = 'rgba(255,255,255,0.6)';
  c.font = '400 26px Arial, sans-serif';
  c.textAlign = 'left';
  c.textBaseline = 'alphabetic';
  c.fillText('Followers, last 30 days', 44, 84);
  c.fillStyle = '#fff';
  c.font = '700 104px Arial, sans-serif';
  c.fillText('+312%', 40, 196);
  const heights = [60, 90, 120, 170, 210, 270, 340];
  const bw = 44;
  const gap = 20;
  heights.forEach((v, i) => {
    const x = 44 + i * (bw + gap);
    roundRect(c, x, h - 70 - v, bw, v, 8);
    c.fillStyle = i === heights.length - 1 ? '#fff' : 'rgba(255,255,255,' + (0.18 + i * 0.07) + ')';
    c.fill();
  });
  c.strokeStyle = 'rgba(255,255,255,0.3)';
  c.lineWidth = 2;
  c.beginPath();
  c.moveTo(40, h - 64);
  c.lineTo(w - 40, h - 64);
  c.stroke();
};

const drawAgent: Draw = (c, w, h) => {
  cardBase(c, w, h);
  c.fillStyle = '#fff';
  c.beginPath();
  c.arc(56, 72, 9, 0, Math.PI * 2);
  c.fill();
  c.font = '700 26px Arial, sans-serif';
  c.textAlign = 'left';
  c.textBaseline = 'middle';
  c.fillText('AI Agent  online', 80, 73);
  const bubble = (x: number, y: number, bw: number, bh: number, fill: string, color: string, text: string[]) => {
    roundRect(c, x, y, bw, bh, 26);
    c.fillStyle = fill;
    c.fill();
    c.fillStyle = color;
    c.font = '400 28px Arial, sans-serif';
    text.forEach((t, i) => c.fillText(t, x + 24, y + 38 + i * 38));
  };
  bubble(36, 130, 330, 100, 'rgba(255,255,255,0.14)', '#fff', ['Table for four', 'tonight?']);
  bubble(w - 36 - 380, 260, 380, 100, WHITE, NAVY, ['Booked for 7:30 pm.', 'See you then.']);
  bubble(36, 390, 330, 62, 'rgba(255,255,255,0.14)', '#fff', ['Can I bring a cake?']);
  roundRect(c, w - 36 - 300, 480, 300, 62, 26);
  c.fillStyle = WHITE;
  c.fill();
  c.fillStyle = NAVY;
  c.font = '400 28px Arial, sans-serif';
  c.fillText('Of course. Noted.', w - 36 - 276, 512);
  [0, 1, 2].forEach((i) => {
    c.beginPath();
    c.arc(60 + i * 26, 586, 7, 0, Math.PI * 2);
    c.fillStyle = 'rgba(255,255,255,' + (0.9 - i * 0.28) + ')';
    c.fill();
  });
};

const drawContent: Draw = (c, w, h) => {
  cardBase(c, w, h);
  c.fillStyle = '#fff';
  c.font = '700 32px Arial, sans-serif';
  c.textAlign = 'left';
  c.textBaseline = 'alphabetic';
  c.fillText('Content calendar', 44, 88);
  c.font = '400 20px Arial, sans-serif';
  c.fillStyle = 'rgba(255,255,255,0.55)';
  ['Mon', 'Wed', 'Fri'].forEach((d, i) => c.fillText(d, 56 + i * 148, 140));
  const kinds = [1, 2, 0, 2, 1, 1, 0, 1, 2, 1, 0, 1];
  kinds.forEach((k, i) => {
    const col = i % 3;
    const row = Math.floor(i / 3);
    const x = 44 + col * 148;
    const y = 160 + row * 108;
    roundRect(c, x, y, 128, 90, 16);
    if (k === 1) {
      c.fillStyle = NAVY;
      c.fill();
    } else if (k === 2) {
      c.fillStyle = WHITE;
      c.fill();
    } else {
      c.strokeStyle = 'rgba(255,255,255,0.3)';
      c.lineWidth = 2;
      c.stroke();
    }
  });
};

function faceTexture(kind: 'E' | 'V' | 'sq' | 'blank') {
  return makeTexture(512, 512, (c, w, h) => {
    c.fillStyle = WHITE;
    c.fillRect(0, 0, w, h);
    c.fillStyle = NAVY;
    if (kind === 'sq') {
      c.fillRect(150, 150, 212, 212);
    } else if (kind !== 'blank') {
      c.font = '700 360px Arial, Helvetica, sans-serif';
      c.textAlign = 'center';
      c.textBaseline = 'middle';
      c.fillText(kind, w / 2, h / 2 + 16);
    }
    c.strokeStyle = 'rgba(29,58,107,0.25)';
    c.lineWidth = 10;
    c.strokeRect(5, 5, w - 10, h - 10);
  });
}

type SculptureProps = {
  progress: MutableRefObject<number>;
  reduced: boolean;
};

const CARD_COUNT = 5;
const CARD_Y = [0.55, -0.35, 0.95, -0.8, 0.1];

function Sculpture({ progress, reduced }: SculptureProps) {
  const group = useRef<THREE.Group>(null);
  const cube = useRef<THREE.Mesh>(null);
  const orbit = useRef<THREE.Group>(null);
  const ring = useRef<THREE.Mesh>(null);
  const dust = useRef<THREE.Points>(null);
  const cards = useRef<(THREE.Mesh | null)[]>([]);
  const mouse = useRef({ x: 0, y: 0, sx: 0, sy: 0 });
  const size = useThree((s) => s.size);
  const mobile = size.width < 820;

  const faces = useMemo(
    () => [faceTexture('V'), faceTexture('E'), faceTexture('sq'), faceTexture('blank'), faceTexture('E'), faceTexture('V')],
    []
  );
  const faceMats = useMemo(
    () => faces.map((t) => new THREE.MeshStandardMaterial({ map: t, roughness: 0.28, metalness: 0.05 })),
    [faces]
  );
  const cardTex = useMemo(
    () => [drawPost, drawReel, drawGrowth, drawAgent, drawContent].map((d) => makeTexture(CARD_W, CARD_H, d)),
    []
  );
  const dustGeo = useMemo(() => {
    const n = mobile ? 120 : 360;
    const a = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      const r = 3.6 + Math.random() * 3.6;
      const th = Math.random() * Math.PI * 2;
      const ph = Math.acos(2 * Math.random() - 1);
      a[i * 3] = r * Math.sin(ph) * Math.cos(th);
      a[i * 3 + 1] = r * Math.sin(ph) * Math.sin(th) * 0.7;
      a[i * 3 + 2] = r * Math.cos(ph);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(a, 3));
    return g;
  }, [mobile]);

  useEffect(() => {
    return () => {
      faceMats.forEach((m) => m.dispose());
      faces.forEach((t) => t.dispose());
      cardTex.forEach((t) => t.dispose());
    };
  }, [faces, faceMats, cardTex]);
  useEffect(() => () => dustGeo.dispose(), [dustGeo]);

  useEffect(() => {
    if (reduced) return;
    const onMove = (e: PointerEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, [reduced]);

  useFrame((state, dt) => {
    const g = group.current;
    const cb = cube.current;
    const ob = orbit.current;
    if (!g || !cb || !ob) return;
    const t = reduced ? 0 : state.clock.elapsedTime;
    const p = reduced ? 0 : THREE.MathUtils.clamp(progress.current, 0, 1);
    const m = mouse.current;
    m.sx = THREE.MathUtils.damp(m.sx, m.x, 3, dt);
    m.sy = THREE.MathUtils.damp(m.sy, m.y, 3, dt);

    const cam = state.camera as THREE.PerspectiveCamera;
    const hh = Math.tan(THREE.MathUtils.degToRad(cam.fov / 2)) * cam.position.z;
    const hw = hh * (state.size.width / state.size.height);
    const tx = mobile ? 0 : hw * 0.46 * (1 - p * 0.85);
    const ty = (mobile ? hh * 0.32 : 0) + Math.sin(t * 0.8) * 0.05;
    const ts = (mobile ? 0.52 : 1.05) * (1 - p * 0.38);
    g.position.x = THREE.MathUtils.damp(g.position.x, tx, 4, dt);
    g.position.y = THREE.MathUtils.damp(g.position.y, ty, 4, dt);
    g.scale.setScalar(THREE.MathUtils.damp(g.scale.x, ts, 4, dt));

    cb.rotation.y = t * 0.22 + p * Math.PI * 1.4 + m.sx * 0.4;
    cb.rotation.x = 0.42 + p * 0.5 - m.sy * 0.25;
    cb.rotation.z = Math.sin(t * 0.5) * 0.04;

    const spread = 1 + p * 0.6;
    ob.rotation.y = t * 0.12 + p * 1.2;
    if (ring.current) ring.current.scale.setScalar(spread);
    for (let i = 0; i < CARD_COUNT; i++) {
      const m3 = cards.current[i];
      if (!m3) continue;
      const a = (i / CARD_COUNT) * Math.PI * 2;
      const r = 2.9 * spread;
      m3.position.set(Math.sin(a) * r, CARD_Y[i] + Math.sin(t * 0.7 + i * 1.7) * 0.08, Math.cos(a) * r);
      m3.lookAt(cam.position);
    }
    if (dust.current) dust.current.rotation.y = t * 0.02 + p * 0.4;
  });

  return (
    <group ref={group}>
      <mesh ref={cube} material={faceMats}>
        <boxGeometry args={[1.7, 1.7, 1.7]} />
      </mesh>
      <group ref={orbit}>
        <mesh ref={ring} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[2.9, 0.006, 8, 160]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.16} />
        </mesh>
        {cardTex.map((tx, i) => (
          <mesh
            key={i}
            ref={(el) => {
              cards.current[i] = el;
            }}
          >
            <planeGeometry args={[1.5, 1.875]} />
            <meshBasicMaterial map={tx} transparent toneMapped={false} side={THREE.DoubleSide} />
          </mesh>
        ))}
      </group>
      <points ref={dust} geometry={dustGeo}>
        <pointsMaterial color="#ffffff" size={0.03} sizeAttenuation transparent opacity={0.55} depthWrite={false} />
      </points>
    </group>
  );
}

type Props = {
  progress: MutableRefObject<number>;
  active: boolean;
  mobile: boolean;
  reduced: boolean;
};

export default function EvoScene({ progress, active, mobile, reduced }: Props) {
  return (
    <Canvas
      frameloop={active ? 'always' : 'never'}
      dpr={[1, mobile ? 1.5 : 2]}
      camera={{ position: [0, 0, 8], fov: 35, near: 0.1, far: 40 }}
      gl={{ antialias: !mobile, alpha: true, powerPreference: 'high-performance' }}
      onCreated={({ gl }) => {
        gl.toneMapping = THREE.ACESFilmicToneMapping;
        gl.toneMappingExposure = 1.05;
      }}
    >
      <ambientLight intensity={0.35} />
      <directionalLight position={[4, 5, 5]} intensity={1.6} />
      <pointLight position={[-5, -2, 3]} intensity={30} color="#6f93ff" />
      <Environment frames={1} resolution={256}>
        <Lightformer form="rect" intensity={4} position={[0, 5, 3]} scale={[10, 3, 1]} />
        <Lightformer form="rect" intensity={2.5} position={[-6, 1, -2]} rotation-y={Math.PI / 2} scale={[8, 4, 1]} color="#8fb0ff" />
        <Lightformer form="rect" intensity={2} position={[6, 0, 2]} rotation-y={-Math.PI / 2} scale={[6, 4, 1]} />
      </Environment>
      <Sculpture progress={progress} reduced={reduced} />
    </Canvas>
  );
}
