"use client";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, Line } from "@react-three/drei";
import * as THREE from "three";

function Globe() {
  const groupRef = useRef<THREE.Group>(null);
  const particlesRef = useRef<THREE.Points>(null);

  // Generate lat/lon lines for wireframe globe
  const lines: number[][] = [];
  for (let lat = -80; lat <= 80; lat += 20) {
    const pts: number[] = [];
    for (let lon = 0; lon <= 360; lon += 5) {
      const phi = (lat * Math.PI) / 180;
      const theta = (lon * Math.PI) / 180;
      pts.push(
        1.8 * Math.cos(phi) * Math.cos(theta),
        1.8 * Math.sin(phi),
        1.8 * Math.cos(phi) * Math.sin(theta)
      );
    }
    lines.push(pts);
  }
  for (let lon = 0; lon < 360; lon += 30) {
    const pts: number[] = [];
    for (let lat = -90; lat <= 90; lat += 5) {
      const phi = (lat * Math.PI) / 180;
      const theta = (lon * Math.PI) / 180;
      pts.push(
        1.8 * Math.cos(phi) * Math.cos(theta),
        1.8 * Math.sin(phi),
        1.8 * Math.cos(phi) * Math.sin(theta)
      );
    }
    lines.push(pts);
  }

  // Particle positions
  const count = 200;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const phi = Math.random() * Math.PI * 2;
    const theta = Math.random() * Math.PI;
    const r = 1.8 + Math.random() * 0.8;
    positions[i * 3] = r * Math.sin(theta) * Math.cos(phi);
    positions[i * 3 + 1] = r * Math.sin(theta) * Math.sin(phi);
    positions[i * 3 + 2] = r * Math.cos(theta);
  }

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.08;
    }
  });

  return (
    <group ref={groupRef}>
      {lines.map((pts, i) => {
        const points: [number, number, number][] = [];
        for (let j = 0; j < pts.length; j += 3) {
          points.push([pts[j], pts[j + 1], pts[j + 2]]);
        }
        return (
          <Line
            key={i}
            points={points}
            color="#00D4FF"
            lineWidth={0.5}
            transparent
            opacity={0.3}
          />
        );
      })}

      {/* Core sphere */}
      <Sphere args={[1.78, 32, 32]}>
        <meshBasicMaterial color="#00D4FF" transparent opacity={0.03} />
      </Sphere>

      {/* Particles */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial color="#00D4FF" size={0.04} transparent opacity={0.7} />
      </points>
    </group>
  );
}

export default function WireframeGlobe() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }} gl={{ alpha: true }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00D4FF" />
      <Globe />
    </Canvas>
  );
}
