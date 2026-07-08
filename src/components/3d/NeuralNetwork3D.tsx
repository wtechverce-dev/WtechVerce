"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function Nodes() {
  const groupRef = useRef<THREE.Group>(null);
  
  const nodes = useMemo(() => {
    return Array.from({ length: 18 }, (_, i) => ({
      position: new THREE.Vector3(
        (Math.random() - 0.5) * 5,
        (Math.random() - 0.5) * 5,
        (Math.random() - 0.5) * 3
      ),
      color: i % 3 === 0 ? "#FD4F00" : i % 3 === 1 ? "#6C24FA" : "#a855f7",
      size: Math.random() * 0.06 + 0.04,
    }));
  }, []);

  const lines = useMemo(() => {
    const pairs: [number, number][] = [];
    nodes.forEach((n, i) => {
      nodes.forEach((m, j) => {
        if (i < j && n.position.distanceTo(m.position) < 2.2) {
          pairs.push([i, j]);
        }
      });
    });
    return pairs;
  }, [nodes]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.08;
      groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.05) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Nodes */}
      {nodes.map((node, i) => (
        <Float key={i} speed={1 + i * 0.1} floatIntensity={0.3} rotationIntensity={0}>
          <mesh position={node.position}>
            <sphereGeometry args={[node.size, 12, 12]} />
            <meshStandardMaterial color={node.color} emissive={node.color} emissiveIntensity={1.5} />
          </mesh>
        </Float>
      ))}

      {/* Connection lines */}
      {lines.map(([i, j], k) => {
        const start = nodes[i].position;
        const end = nodes[j].position;
        const mid = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5);
        const dist = start.distanceTo(end);
        const dir = new THREE.Vector3().subVectors(end, start).normalize();
        const quaternion = new THREE.Quaternion().setFromUnitVectors(
          new THREE.Vector3(0, 1, 0),
          dir
        );
        return (
          <mesh key={k} position={mid} quaternion={quaternion}>
            <cylinderGeometry args={[0.005, 0.005, dist, 4]} />
            <meshStandardMaterial
              color="#6C24FA"
              emissive="#6C24FA"
              emissiveIntensity={0.4}
              transparent
              opacity={0.3}
            />
          </mesh>
        );
      })}
    </group>
  );
}

export default function NeuralNetwork3D({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas camera={{ position: [0, 0, 6], fov: 55 }} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[5, 5, 5]} intensity={2} color="#6C24FA" />
        <pointLight position={[-5, -3, -5]} intensity={1.5} color="#FD4F00" />
        <Nodes />
      </Canvas>
    </div>
  );
}
