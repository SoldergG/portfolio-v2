"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const C_ACCENT  = new THREE.Color(0xc8ff6e);
const C_ACCENT2 = new THREE.Color(0x6e8fff);
const C_ACCENT3 = new THREE.Color(0xff6eb4);
const C_MUTED   = new THREE.Color(0x3a3a4a);

function WireframeMesh({
  geometry,
  color,
  position,
  scale = 1,
  rx = 0,
  ry = 0,
  rz = 0,
}: {
  geometry: THREE.BufferGeometry;
  color: THREE.Color;
  position: [number, number, number];
  scale?: number;
  rx?: number;
  ry?: number;
  rz?: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(() => {
    if (!ref.current) return;
    ref.current.rotation.x += rx;
    ref.current.rotation.y += ry;
    ref.current.rotation.z += rz;
  });
  return (
    <mesh ref={ref} position={position} scale={scale} geometry={geometry}>
      <meshBasicMaterial color={color} wireframe transparent opacity={0.35} />
    </mesh>
  );
}

function StarField() {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const pos = new Float32Array(800 * 3);
    for (let i = 0; i < 800; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * 200;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 120;
      pos[i * 3 + 2] = -20 - Math.random() * 80;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.rotation.y = t * 0.005;
    ref.current.rotation.x = t * 0.002;
  });

  const geo = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return g;
  }, [positions]);

  return (
    <points ref={ref} geometry={geo}>
      <pointsMaterial color={0xc8ff6e} size={0.08} transparent opacity={0.5} />
    </points>
  );
}

function GridPlane() {
  const grid = useMemo(() => {
    const g = new THREE.GridHelper(80, 30, 0x1a1a2e, 0x111118);
    g.position.set(0, -20, -10);
    (g.material as THREE.Material).transparent = true;
    (g.material as THREE.Material).opacity = 0.4;
    return g;
  }, []);

  const scrollRef = useRef(0);
  useEffect(() => {
    const onScroll = () => { scrollRef.current = window.scrollY; };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useFrame(() => {
    grid.position.z = -10 - scrollRef.current * 0.05;
  });

  return <primitive object={grid} />;
}

function CameraRig() {
  const { camera } = useThree();
  const mouseRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const scrollRef = useRef(0);

  useEffect(() => {
    const onMouse = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseRef.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    const onScroll = () => { scrollRef.current = window.scrollY; };
    window.addEventListener("mousemove", onMouse);
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useFrame(() => {
    targetRef.current.x += (mouseRef.current.x - targetRef.current.x) * 0.04;
    targetRef.current.y += (mouseRef.current.y - targetRef.current.y) * 0.04;
    camera.position.x = targetRef.current.x * 3;
    camera.position.y = -targetRef.current.y * 2 - scrollRef.current * 0.003;
    camera.lookAt(0, -scrollRef.current * 0.003, 0);
  });

  return null;
}

function Scene() {
  const phoneGeo  = useMemo(() => new THREE.BoxGeometry(3.5, 7, 0.5, 2, 4, 1), []);
  const torusGeo  = useMemo(() => new THREE.TorusGeometry(4, 0.5, 8, 24), []);
  const knotGeo   = useMemo(() => new THREE.TorusKnotGeometry(3, 0.6, 80, 12, 2, 3), []);
  const icoGeo    = useMemo(() => new THREE.IcosahedronGeometry(3, 0), []);
  const octGeo    = useMemo(() => new THREE.OctahedronGeometry(2.5, 0), []);

  const knotRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (knotRef.current) {
      const t = state.clock.getElapsedTime();
      (knotRef.current.material as THREE.MeshBasicMaterial).opacity = 0.2 + Math.sin(t * 0.8) * 0.15;
    }
  });

  return (
    <>
      <CameraRig />
      <StarField />
      <GridPlane />

      {/* Phone shapes */}
      <WireframeMesh geometry={phoneGeo} color={C_ACCENT}  position={[-22, 6, -10]} scale={1}   rx={0.003}  ry={0.007}  rz={0.001} />
      <WireframeMesh geometry={phoneGeo} color={C_ACCENT2} position={[20, -4, -15]} scale={0.8} rx={-0.005} ry={0.004}  rz={0.002} />

      {/* Tori */}
      <WireframeMesh geometry={torusGeo} color={C_ACCENT}  position={[18, 10, -18]} scale={1}   rx={0.006} ry={0.003} rz={0.004} />
      <WireframeMesh geometry={torusGeo} color={C_ACCENT3} position={[-18,-8,-20]}  scale={0.7} rx={-0.004} ry={0.008} rz={-0.003} />

      {/* Torus knot */}
      <mesh ref={knotRef} position={[0, 0, -25]} scale={1.1} geometry={knotGeo}>
        <meshBasicMaterial color={C_ACCENT2} wireframe transparent opacity={0.35} />
      </mesh>

      {/* Icosahedra */}
      <WireframeMesh geometry={icoGeo} color={C_ACCENT} position={[-10,-12,-12]} scale={1}   rx={0.005}  ry={0.006}  rz={0.002} />
      <WireframeMesh geometry={icoGeo} color={C_MUTED}  position={[14, 14, -22]} scale={0.8} rx={0.003}  ry={-0.004} rz={0.005} />

      {/* Octahedra */}
      <WireframeMesh geometry={octGeo} color={C_ACCENT3} position={[-6, 10, -8]}  scale={1}   rx={-0.006} ry={0.005}  rz={0.003} />
      <WireframeMesh geometry={octGeo} color={C_ACCENT2} position={[8, -10, -10]} scale={0.9} rx={0.004}  ry={-0.007} rz={-0.002} />
    </>
  );
}

export default function HeroScene() {
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}>
      <Canvas
        camera={{ position: [0, 0, 30], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        style={{ width: "100%", height: "100%", background: "transparent" }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
