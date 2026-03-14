"use client";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

type SceneType = "website" | "portal" | "landing" | "maintenance" | "seo";

function Shape({ type }: { type: SceneType }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.1;
  });

  return (
    <mesh ref={meshRef}>
      {type === "website" && <icosahedronGeometry args={[1, 1]} />}
      {type === "portal" && <torusKnotGeometry args={[0.7, 0.25, 64, 8]} />}
      {type === "landing" && <octahedronGeometry args={[1, 0]} />}
      {type === "maintenance" && <dodecahedronGeometry args={[1, 0]} />}
      {type === "seo" && <sphereGeometry args={[0.9, 16, 16]} />}
      <meshBasicMaterial color="#00D4FF" wireframe transparent opacity={0.6} />
    </mesh>
  );
}

export default function ServiceScene({ type }: { type: SceneType }) {
  return (
    <div className="w-40 h-40">
      <Canvas camera={{ position: [0, 0, 3], fov: 50 }} gl={{ alpha: true }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} color="#00D4FF" intensity={2} />
        <Shape type={type} />
      </Canvas>
    </div>
  );
}
