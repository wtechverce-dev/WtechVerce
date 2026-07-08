"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

function Particles() {
  const meshRef = useRef<THREE.Points>(null);
  const { mouse } = useThree();

  const [positions, colors] = useMemo(() => {
    const count = 1800;
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const colorA = new THREE.Color("#6C24FA");
    const colorB = new THREE.Color("#FD4F00");

    for (let i = 0; i < count; i++) {
      // Distribute on a sphere surface
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = Math.random() * Math.PI * 2;
      const r = 2.2 + (Math.random() - 0.5) * 0.4;

      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.cos(phi);
      pos[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);

      const mixed = colorA.clone().lerp(colorB, Math.random());
      col[i * 3] = mixed.r;
      col[i * 3 + 1] = mixed.g;
      col[i * 3 + 2] = mixed.b;
    }
    return [pos, col];
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.y = t * 0.06 + mouse.x * 0.3;
    meshRef.current.rotation.x = mouse.y * 0.2;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.025} vertexColors sizeAttenuation transparent opacity={0.85} />
    </points>
  );
}

function CoreSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (meshRef.current) meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.12;
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1.1, 64, 64]} />
      <meshStandardMaterial
        color="#0a0a1a"
        emissive="#6C24FA"
        emissiveIntensity={0.15}
        roughness={0.3}
        metalness={0.8}
        wireframe={false}
      />
    </mesh>
  );
}

export default function ParticleSphere({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={2} color="#6C24FA" />
        <pointLight position={[-5, -5, -5]} intensity={1.5} color="#FD4F00" />
        <CoreSphere />
        <Particles />
      </Canvas>
    </div>
  );
}
