"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import * as THREE from "three";

function Crystal() {
  const meshRef = useRef<THREE.Mesh>(null);
  const mesh2Ref = useRef<THREE.Mesh>(null);
  const mesh3Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.3;
      meshRef.current.rotation.x = Math.sin(t * 0.2) * 0.15;
    }
    if (mesh2Ref.current) {
      mesh2Ref.current.rotation.y = -t * 0.2;
      mesh2Ref.current.rotation.z = t * 0.1;
    }
    if (mesh3Ref.current) {
      mesh3Ref.current.rotation.x = t * 0.15;
      mesh3Ref.current.rotation.z = -t * 0.25;
    }
  });

  return (
    <group>
      {/* Main crystal */}
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
        <mesh ref={meshRef} castShadow>
          <octahedronGeometry args={[1.2, 0]} />
          <meshPhysicalMaterial 
            color="#a855f7" 
            transmission={0.9} 
            opacity={1} 
            metalness={0} 
            roughness={0.05} 
            ior={1.5} 
            thickness={2} 
            transparent 
          />
        </mesh>
      </Float>

      {/* Outer ring */}
      <Float speed={1} rotationIntensity={0.5} floatIntensity={0.3}>
        <mesh ref={mesh2Ref}>
          <torusGeometry args={[2.0, 0.04, 16, 80]} />
          <meshStandardMaterial color="#FD4F00" emissive="#FD4F00" emissiveIntensity={0.8} transparent opacity={0.6} />
        </mesh>
      </Float>

      {/* Second ring perpendicular */}
      <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.4}>
        <mesh ref={mesh3Ref} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[2.4, 0.03, 16, 80]} />
          <meshStandardMaterial color="#6C24FA" emissive="#6C24FA" emissiveIntensity={0.6} transparent opacity={0.5} />
        </mesh>
      </Float>

      {/* Small floating orbs */}
      {[...Array(6)].map((_, i) => {
        const angle = (i / 6) * Math.PI * 2;
        return (
          <mesh key={i} position={[Math.cos(angle) * 2.1, Math.sin(angle * 0.5) * 0.3, Math.sin(angle) * 2.1]}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshStandardMaterial color={i % 2 === 0 ? "#FD4F00" : "#6C24FA"} emissive={i % 2 === 0 ? "#FD4F00" : "#6C24FA"} emissiveIntensity={2} />
          </mesh>
        );
      })}
    </group>
  );
}

export default function FloatingCrystal({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={1.5} color="#6C24FA" />
        <pointLight position={[-5, -5, -5]} intensity={1} color="#FD4F00" />
        <pointLight position={[0, 5, 0]} intensity={0.8} color="#ffffff" />
        <Environment preset="night" />
        <Crystal />
      </Canvas>
    </div>
  );
}
