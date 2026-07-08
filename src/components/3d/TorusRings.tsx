"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function Rings() {
  const ring1 = useRef<THREE.Mesh>(null);
  const ring2 = useRef<THREE.Mesh>(null);
  const ring3 = useRef<THREE.Mesh>(null);
  const sphere = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ring1.current) { ring1.current.rotation.x = t * 0.4; ring1.current.rotation.y = t * 0.15; }
    if (ring2.current) { ring2.current.rotation.y = -t * 0.3; ring2.current.rotation.z = t * 0.2; }
    if (ring3.current) { ring3.current.rotation.x = -t * 0.2; ring3.current.rotation.z = t * 0.35; }
    if (sphere.current) { sphere.current.rotation.y = t * 0.1; }
  });

  return (
    <group>
      {/* Central distorted sphere */}
      <Float speed={1.5} floatIntensity={0.4} rotationIntensity={0.2}>
        <mesh ref={sphere}>
          <sphereGeometry args={[0.9, 64, 64]} />
          <MeshDistortMaterial color="#6C24FA" emissive="#6C24FA" emissiveIntensity={0.4} distort={0.35} speed={2} roughness={0.1} />
        </mesh>
      </Float>

      {/* Ring 1 — orange */}
      <mesh ref={ring1}>
        <torusGeometry args={[1.8, 0.05, 16, 100]} />
        <meshStandardMaterial color="#FD4F00" emissive="#FD4F00" emissiveIntensity={1.2} />
      </mesh>

      {/* Ring 2 — purple */}
      <mesh ref={ring2} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[2.3, 0.035, 16, 100]} />
        <meshStandardMaterial color="#6C24FA" emissive="#6C24FA" emissiveIntensity={1.0} transparent opacity={0.8} />
      </mesh>

      {/* Ring 3 — white/light */}
      <mesh ref={ring3} rotation={[0, Math.PI / 4, Math.PI / 4]}>
        <torusGeometry args={[2.8, 0.02, 16, 100]} />
        <meshStandardMaterial color="#a855f7" emissive="#a855f7" emissiveIntensity={0.7} transparent opacity={0.5} />
      </mesh>

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        const r = 1.8;
        return (
          <mesh key={i} position={[Math.cos(angle) * r, Math.sin(angle) * 0.2, Math.sin(angle) * r]}>
            <sphereGeometry args={[0.06, 8, 8]} />
            <meshStandardMaterial color="#FD4F00" emissive="#FD4F00" emissiveIntensity={2} />
          </mesh>
        );
      })}
    </group>
  );
}

export default function TorusRings({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.1} />
        <pointLight position={[4, 4, 4]} intensity={2} color="#6C24FA" />
        <pointLight position={[-4, -4, -4]} intensity={1.5} color="#FD4F00" />
        <pointLight position={[0, 4, 0]} intensity={1} color="#ffffff" />
        <Rings />
      </Canvas>
    </div>
  );
}
