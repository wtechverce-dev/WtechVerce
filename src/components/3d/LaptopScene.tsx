"use client";

import { useRef, useMemo, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, Float, Environment, PresentationControls, MeshTransmissionMaterial } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";

const services = [
  { label: "Web Development", icon: "🌐", color: "#FF6B00", angle: 0 },
  { label: "SaaS Platforms", icon: "☁️", color: "#8A2BE2", angle: 60 },
  { label: "AI Solutions", icon: "🤖", color: "#FF8833", angle: 120 },
  { label: "UI/UX Design", icon: "🎨", color: "#6B21A8", angle: 180 },
  { label: "Custom Software", icon: "⚙️", color: "#FF6B00", angle: 240 },
  { label: "Automation", icon: "🔗", color: "#8A2BE2", angle: 300 },
];

function NodeOrb({ service, index }: { service: (typeof services)[0]; index: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  const radius = 3.2;
  const angleRad = (service.angle * Math.PI) / 180;
  const x = radius * Math.cos(angleRad);
  const y = radius * Math.sin(angleRad) * 0.5;
  const z = -0.5;

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = y + Math.sin(state.clock.elapsedTime * 0.8 + index) * 0.12;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group position={[x, y, z]}>
      {/* Glowing orb */}
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.3 : 1}
      >
        <sphereGeometry args={[0.22, 32, 32]} />
        <meshStandardMaterial
          color={service.color}
          emissive={service.color}
          emissiveIntensity={hovered ? 2.5 : 1.5}
          metalness={0.3}
          roughness={0.1}
        />
      </mesh>

      {/* Glow ring around orb */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.3, 0.02, 8, 64]} />
        <meshStandardMaterial
          color={service.color}
          emissive={service.color}
          emissiveIntensity={0.8}
          transparent
          opacity={0.6}
        />
      </mesh>

      {/* Label */}
      <Html
        position={[0, 0.55, 0]}
        center
        distanceFactor={6}
        style={{ pointerEvents: "none" }}
      >
        <div
          style={{
            background: `linear-gradient(135deg, ${service.color}30, ${service.color}10)`,
            border: `1px solid ${service.color}60`,
            borderRadius: "20px",
            padding: "6px 12px",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            whiteSpace: "nowrap",
            backdropFilter: "blur(10px)",
          }}
        >
          <span style={{ fontSize: "14px" }}>{service.icon}</span>
          <span style={{ fontSize: "11px", fontWeight: 700, color: "#fff", fontFamily: "Inter, sans-serif" }}>
            {service.label}
          </span>
        </div>
      </Html>
    </group>
  );
}

function ConnectionLines() {
  const linesRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
    }
  });

  const lines = useMemo(() => {
    const result: { points: THREE.Vector3[]; color: string }[] = [];
    services.forEach((svc, i) => {
      const angleRad = (svc.angle * Math.PI) / 180;
      const x = 3.2 * Math.cos(angleRad);
      const y = 3.2 * Math.sin(angleRad) * 0.5;

      // Line from center-ish (laptop screen) to node
      result.push({
        points: [
          new THREE.Vector3(0, 0.3, 0),
          new THREE.Vector3(x * 0.5, y * 0.5, 0),
          new THREE.Vector3(x, y, -0.5),
        ],
        color: svc.color,
      });
    });
    return result;
  }, []);

  return (
    <group ref={linesRef}>
      {lines.map((line, i) => {
        const curve = new THREE.CatmullRomCurve3(line.points);
        const points = curve.getPoints(30);
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        return (
          // @ts-ignore
          <line key={i} geometry={geometry}>
            <lineBasicMaterial
              color={line.color}
              transparent
              opacity={0.35}
              blending={THREE.AdditiveBlending}
            />
          </line>
        );
      })}
    </group>
  );
}

function LaptopBody() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.08;
    }
  });

  return (
    <group ref={groupRef}>
      {/* === BASE === */}
      <group position={[0, -0.08, 0]}>
        {/* Main base body */}
        <mesh castShadow receiveShadow>
          <boxGeometry args={[3.8, 0.09, 2.6]} />
          <meshStandardMaterial color="#111118" metalness={0.95} roughness={0.05} />
        </mesh>

        {/* Bottom edge chamfer effect */}
        <mesh position={[0, -0.05, 0]}>
          <boxGeometry args={[3.75, 0.02, 2.55]} />
          <meshStandardMaterial color="#1a1a28" metalness={0.9} roughness={0.1} />
        </mesh>

        {/* Keyboard area (recessed) */}
        <mesh position={[0, 0.052, 0.05]}>
          <boxGeometry args={[3.3, 0.01, 2.0]} />
          <meshStandardMaterial color="#0d0d18" metalness={0.7} roughness={0.3} />
        </mesh>

        {/* Trackpad */}
        <mesh position={[0, 0.052, 0.9]}>
          <boxGeometry args={[1.0, 0.008, 0.65]} />
          <meshStandardMaterial color="#0a0a15" metalness={0.9} roughness={0.02} />
        </mesh>

        {/* Keyboard rows (decorative) */}
        {[-0.6, -0.3, 0.0, 0.3].map((row, i) => (
          <mesh key={i} position={[0, 0.055, row]}>
            <boxGeometry args={[3.0, 0.005, 0.18]} />
            <meshStandardMaterial color="#161625" metalness={0.6} roughness={0.4} />
          </mesh>
        ))}

        {/* Apple-style logo area on base */}
        <mesh position={[0, 0.052, -1.1]}>
          <cylinderGeometry args={[0.15, 0.15, 0.005, 32]} />
          <meshStandardMaterial color="#1e1e30" metalness={1} roughness={0} />
        </mesh>
      </group>

      {/* === HINGE === */}
      <mesh position={[0, 0.0, -1.29]} rotation={[0, 0, 0]}>
        <boxGeometry args={[3.8, 0.06, 0.12]} />
        <meshStandardMaterial color="#0d0d18" metalness={0.95} roughness={0.05} />
      </mesh>

      {/* === SCREEN PANEL === */}
      <group position={[0, 1.52, -1.18]} rotation={[-0.32, 0, 0]}>
        {/* Screen back (lid) */}
        <mesh castShadow>
          <boxGeometry args={[3.8, 2.65, 0.07]} />
          <meshStandardMaterial color="#111118" metalness={0.95} roughness={0.05} />
        </mesh>

        {/* Screen bezel */}
        <mesh position={[0, 0, 0.042]}>
          <boxGeometry args={[3.6, 2.45, 0.01]} />
          <meshStandardMaterial color="#08080f" metalness={0.7} roughness={0.3} />
        </mesh>

        {/* Actual screen display */}
        <mesh position={[0, 0.05, 0.048]}>
          <boxGeometry args={[3.3, 2.2, 0.001]} />
          <meshStandardMaterial
            color="#000010"
            emissive="#050515"
            emissiveIntensity={1}
            roughness={0}
            metalness={0}
          />
        </mesh>

        {/* Screen HTML content */}
        <Html
          position={[0, 0.05, 0.08]}
          transform
          distanceFactor={3.8}
          style={{ width: "560px", height: "360px", pointerEvents: "none" }}
        >
          <div style={{
            width: "100%",
            height: "100%",
            background: "linear-gradient(135deg, #05050f 0%, #0d0d25 50%, #050515 100%)",
            borderRadius: "4px",
            overflow: "hidden",
            padding: "18px 20px",
            boxSizing: "border-box",
            fontFamily: "'Inter', system-ui, sans-serif",
            position: "relative",
          }}>
            {/* Top bar */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "14px" }}>
              <div style={{ display: "flex", gap: "6px" }}>
                {["#FF5F57", "#FEBC2E", "#28C840"].map((c, i) => (
                  <div key={i} style={{ width: "10px", height: "10px", borderRadius: "50%", background: c }} />
                ))}
              </div>
              <div style={{
                fontSize: "11px",
                fontWeight: "700",
                background: "linear-gradient(90deg, #FF6B00, #8A2BE2)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: "2px",
              }}>
                W TECHVERCE
              </div>
              <div style={{ fontSize: "9px", color: "#444" }}>v2.0</div>
            </div>

            {/* Terminal-style code lines */}
            <div style={{ marginBottom: "14px", fontSize: "9px", fontFamily: "monospace", lineHeight: "1.8" }}>
              <div style={{ color: "#4ade80" }}>▶ Building premium digital products...</div>
              <div style={{ color: "#666" }}>
                <span style={{ color: "#8A2BE2" }}>const </span>
                <span style={{ color: "#FF6B00" }}>agency</span>
                <span style={{ color: "#fff" }}> = </span>
                <span style={{ color: "#4ade80" }}>new WTechverce()</span>
              </div>
              <div style={{ color: "#666" }}>
                <span style={{ color: "#8A2BE2" }}>await </span>
                <span style={{ color: "#FF6B00" }}>agency</span>
                <span style={{ color: "#fff" }}>.build(</span>
                <span style={{ color: "#fbbf24" }}>"your dream"</span>
                <span style={{ color: "#fff" }}>)</span>
              </div>
            </div>

            {/* Services grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "8px" }}>
              {services.map((svc, i) => (
                <div key={i} style={{
                  background: `linear-gradient(135deg, ${svc.color}18, ${svc.color}05)`,
                  border: `1px solid ${svc.color}50`,
                  borderRadius: "10px",
                  padding: "8px 10px",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  animation: `popIn 0.4s ease ${i * 0.1}s both`,
                }}>
                  <span style={{ fontSize: "16px" }}>{svc.icon}</span>
                  <span style={{ fontSize: "9px", fontWeight: "700", color: "#d0d0ff", lineHeight: 1.2 }}>{svc.label}</span>
                </div>
              ))}
            </div>

            {/* Status bar */}
            <div style={{ position: "absolute", bottom: "12px", left: "20px", right: "20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ fontSize: "8px", color: "#333", fontFamily: "monospace" }}>
                <span style={{ color: "#4ade80" }}>●</span> All systems operational
              </div>
              <div style={{ fontSize: "8px", color: "#FF6B00" }}>99.9% uptime</div>
            </div>

            <style>{`
              @keyframes popIn {
                from { opacity: 0; transform: scale(0.8) translateY(6px); }
                to { opacity: 1; transform: scale(1) translateY(0); }
              }
            `}</style>
          </div>
        </Html>

        {/* Screen glow */}
        <pointLight position={[0, 0, 1.5]} intensity={2} color="#6B21A8" distance={6} />
        <pointLight position={[0, 0, 1.5]} intensity={1} color="#FF6B00" distance={3} />

        {/* Camera (notch) */}
        <mesh position={[0, 1.27, 0.04]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.04, 0.04, 0.015, 16]} />
          <meshStandardMaterial color="#0a0a15" metalness={0.9} roughness={0.1} />
        </mesh>
      </group>

      {/* === NODES + CONNECTION LINES === */}
      <ConnectionLines />
      {services.map((svc, i) => (
        <NodeOrb key={i} service={svc} index={i} />
      ))}

      {/* Floating ambient particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <FloatingDot key={i} index={i} />
      ))}
    </group>
  );
}

function FloatingDot({ index }: { index: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const initial = useMemo(() => ({
    x: (Math.random() - 0.5) * 8,
    y: (Math.random() - 0.5) * 4,
    z: (Math.random() - 0.5) * 3,
    speed: Math.random() * 0.5 + 0.3,
    offset: Math.random() * Math.PI * 2,
  }), []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = initial.y + Math.sin(state.clock.elapsedTime * initial.speed + initial.offset) * 0.3;
      meshRef.current.position.x = initial.x + Math.cos(state.clock.elapsedTime * initial.speed * 0.5 + initial.offset) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={[initial.x, initial.y, initial.z]}>
      <sphereGeometry args={[0.04, 8, 8]} />
      <meshStandardMaterial
        color={index % 2 === 0 ? "#FF6B00" : "#8A2BE2"}
        emissive={index % 2 === 0 ? "#FF6B00" : "#8A2BE2"}
        emissiveIntensity={2}
        transparent
        opacity={0.7}
      />
    </mesh>
  );
}

export default function HeroLaptopScene() {
  return (
    <Canvas
      camera={{ position: [0, 1.5, 9], fov: 42 }}
      shadows
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
    >
      <color attach="background" args={["#050505"]} />

      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 10, 5]} intensity={2} color="#8A2BE2" castShadow />
      <directionalLight position={[-5, 5, -5]} intensity={1.5} color="#FF6B00" />
      <pointLight position={[0, 4, 3]} intensity={3} color="#ffffff" distance={12} />

      <PresentationControls
        global
        rotation={[0.1, 0.2, 0]}
        polar={[-0.25, 0.25]}
        azimuth={[-0.6, 0.6]}
        snap={true}
      >
        <Float speed={1.2} rotationIntensity={0.05} floatIntensity={0.2}>
          <LaptopBody />
        </Float>
      </PresentationControls>

      <fog attach="fog" args={["#050505", 15, 30]} />
    </Canvas>
  );
}
