"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Environment, Float, Sphere } from "@react-three/drei";
import * as THREE from "three";

function ParticleSwarm() {
  const ref = useRef<THREE.Points>(null);
  const count = 5000;
  
  const positions = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 3 + Math.random() * 5;
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos((Math.random() * 2) - 1);
      
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      
      p[i * 3] = x;
      p[i * 3 + 1] = y;
      p[i * 3 + 2] = z;
    }
    return p;
  }, [count]);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#8A2BE2"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function FloatingCore() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1.5, 64, 64]}>
        <meshStandardMaterial 
          color="#111111" 
          roughness={0.1} 
          metalness={0.9} 
          emissive="#FF6B00"
          emissiveIntensity={0.5}
          wireframe={true}
        />
      </Sphere>
    </Float>
  );
}

export default function Hero3DScene() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <color attach="background" args={['#050505']} />
        
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} color="#8A2BE2" />
        <directionalLight position={[-10, -10, -5]} intensity={2} color="#FF6B00" />
        <pointLight position={[0, 0, 0]} intensity={5} color="#FF8833" distance={10} />

        <ParticleSwarm />
        <FloatingCore />
        
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
