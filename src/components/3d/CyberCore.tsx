"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import * as THREE from "three";

function CoreGeometry() {
  const coreRef = useRef<THREE.Mesh>(null);
  const outerWireframeRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const pointer = state.pointer;
    
    // Core rotation
    if (coreRef.current) {
      coreRef.current.rotation.y = t * 0.2 + (pointer.x * 0.5);
      coreRef.current.rotation.x = t * 0.1 + (pointer.y * 0.5);
    }
    
    // Wireframe counter-rotation
    if (outerWireframeRef.current) {
      outerWireframeRef.current.rotation.y = -t * 0.15 + (pointer.x * 0.3);
      outerWireframeRef.current.rotation.z = t * 0.05;
    }

    // Rings rotation
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = Math.PI / 2 + Math.sin(t * 0.5) * 0.2;
      ring1Ref.current.rotation.z = t * 0.3;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y = Math.PI / 4 + Math.cos(t * 0.4) * 0.2;
      ring2Ref.current.rotation.x = -t * 0.2;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.x = Math.sin(t * 0.3) * 0.3;
      ring3Ref.current.rotation.y = t * 0.4;
    }
  });

  return (
    <group>
      {/* 1. Inner Glowing Energy Core */}
      <mesh>
        <icosahedronGeometry args={[0.8, 2]} />
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={2} />
      </mesh>

      {/* 2. Glass Physical Icosahedron (The Main Crystal) */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh ref={coreRef}>
          <icosahedronGeometry args={[1.6, 0]} />
          <meshPhysicalMaterial 
            color="#8A2BE2" 
            transmission={0.9} 
            opacity={1} 
            metalness={0} 
            roughness={0.1} 
            ior={1.5} 
            thickness={2} 
            transparent 
          />
        </mesh>
      </Float>

      {/* 3. Outer Wireframe Cage */}
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.2}>
        <mesh ref={outerWireframeRef} scale={[1.9, 1.9, 1.9]}>
          <icosahedronGeometry args={[1, 1]} />
          <meshBasicMaterial color="#FF6B00" wireframe transparent opacity={0.15} />
        </mesh>
      </Float>

      {/* 4. Data Rings (Torus) */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[2.5, 0.015, 16, 100]} />
        <meshStandardMaterial color="#FF6B00" emissive="#FF6B00" emissiveIntensity={2} />
      </mesh>

      <mesh ref={ring2Ref}>
        <torusGeometry args={[3.2, 0.01, 16, 100]} />
        <meshStandardMaterial color="#8A2BE2" emissive="#8A2BE2" emissiveIntensity={2} />
      </mesh>

      <mesh ref={ring3Ref}>
        <torusGeometry args={[3.8, 0.03, 16, 100]} />
        <meshStandardMaterial color="#6B21A8" emissive="#6B21A8" emissiveIntensity={0.5} transparent opacity={0.4} />
      </mesh>

      {/* 5. Orbiting Data Nodes */}
      {[...Array(12)].map((_, i) => {
        const angle = (i / 12) * Math.PI * 2;
        const radius = i % 2 === 0 ? 2.5 : 3.2;
        const speed = i % 2 === 0 ? 0.3 : -0.2;
        const color = i % 3 === 0 ? "#FF6B00" : "#8A2BE2";
        
        return (
          <NodeOrb 
            key={i} 
            angle={angle} 
            radius={radius} 
            speed={speed} 
            color={color} 
            offset={i * 0.5} 
          />
        );
      })}
    </group>
  );
}

function NodeOrb({ angle, radius, speed, color, offset }: { angle: number, radius: number, speed: number, color: string, offset: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      const currentAngle = angle + t * speed;
      // Add some subtle up/down wave motion
      const yOffset = Math.sin(t * 2 + offset) * 0.3;
      meshRef.current.position.set(
        Math.cos(currentAngle) * radius,
        yOffset,
        Math.sin(currentAngle) * radius
      );
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.06, 16, 16]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={2} />
    </mesh>
  );
}

export default function CyberCore({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas camera={{ position: [0, 0, 7.5], fov: 50 }} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[5, 5, 5]} intensity={2.5} color="#8A2BE2" />
        <pointLight position={[-5, -5, -5]} intensity={1.5} color="#FF6B00" />
        <Environment preset="city" />
        <CoreGeometry />
      </Canvas>
    </div>
  );
}
