"use client";
import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

type IconType = "school" | "portal" | "landing" | "maintenance";

function Icon3D({ type, hovered }: { type: IconType; hovered: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += hovered ? 0.04 : 0.01;
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    const scale = hovered ? 1.2 : 1;
    meshRef.current.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.1);
  });

  const color = "#00D4FF";

  return (
    <mesh ref={meshRef}>
      {type === "school" && <octahedronGeometry args={[0.6, 0]} />}
      {type === "portal" && <torusGeometry args={[0.5, 0.2, 8, 16]} />}
      {type === "landing" && <coneGeometry args={[0.5, 1, 6]} />}
      {type === "maintenance" && <dodecahedronGeometry args={[0.6, 0]} />}
      <meshBasicMaterial color={color} wireframe />
    </mesh>
  );
}

export default function ServiceIcon({ type }: { type: IconType }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="w-16 h-16"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Canvas camera={{ position: [0, 0, 2.5], fov: 50 }} gl={{ alpha: true }}>
        <ambientLight intensity={1} />
        <Icon3D type={type} hovered={hovered} />
      </Canvas>
    </div>
  );
}
