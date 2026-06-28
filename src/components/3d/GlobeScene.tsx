"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Html, Float, Line } from "@react-three/drei";
import * as THREE from "three";

function Globe() {
  const ref = useRef<THREE.Points>(null);
  const count = 8000;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 3.2;
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);
    }
    return pos;
  }, [count]);

  const ringPositions = useMemo(() => {
    const pos = new Float32Array(3000 * 3);
    for (let i = 0; i < 3000; i++) {
      const radius = 3.2 + Math.random() * 1.5;
      const theta = Math.random() * 2 * Math.PI;
      const tilt = Math.PI / 6;
      pos[i * 3] = radius * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(tilt);
      pos[i * 3 + 2] = radius * Math.sin(theta) * Math.cos(tilt);
    }
    return pos;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.08;
    }
  });

  return (
    <group ref={ref}>
      <Points positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#6C24FA"
          size={0.018}
          sizeAttenuation
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
      <Points positions={ringPositions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#FD4F00"
          size={0.022}
          sizeAttenuation
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

function InnerCore() {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.3;
      meshRef.current.rotation.x += delta * 0.1;
    }
  });
  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.8, 2]} />
      <meshStandardMaterial
        color="#0a0a0a"
        wireframe
        emissive="#FD4F00"
        emissiveIntensity={0.8}
      />
    </mesh>
  );
}

function ServiceNodes() {
  const groupRef = useRef<THREE.Group>(null);
  const services = [
    "Web Development",
    "SaaS Products",
    "App Development",
    "UI/UX Design",
    "AI Solutions"
  ];
  
  const radius = 3.0;

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Rotate 360 continuously around the globe
      groupRef.current.rotation.y += delta * 0.15;
      // Add a slight wobble so it doesn't look completely flat
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {services.map((svc, i) => {
        const angle = (i / services.length) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        const z = Math.sin(angle * 2) * 1.2;
        return (
          <group key={i}>
            <Line points={[[0, 0, 0], [x, y, z]]} color="#FD4F00" lineWidth={1.5} transparent opacity={0.4} />
            <group position={[x, y, z]}>
              <mesh>
                <sphereGeometry args={[0.05, 16, 16]} />
                <meshBasicMaterial color="#FD4F00" />
              </mesh>
              <Html position={[0, 0, 0]} center>
                <div style={{ 
                  color: '#ffffff', 
                  fontSize: '0.65rem', 
                  fontWeight: 'bold', 
                  fontFamily: 'sans-serif', 
                  whiteSpace: 'nowrap',
                  background: 'rgba(7, 12, 18, 0.7)',
                  padding: '4px 8px',
                  borderRadius: '6px',
                  border: '1px solid rgba(108, 36, 250, 0.5)',
                  boxShadow: '0 0 10px rgba(253, 79, 0, 0.3)'
                }}>
                  {svc}
                </div>
              </Html>
            </group>
          </group>
        );
      })}
    </group>
  );
}

export default function GlobeScene() {
  return (
    <Canvas camera={{ position: [0, 0, 12], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={3} color="#6C24FA" />
      <pointLight position={[-5, -5, 5]} intensity={3} color="#FD4F00" />
      <Globe />
      <InnerCore />
      <ServiceNodes />
    </Canvas>
  );
}
