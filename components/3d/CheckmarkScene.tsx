"use client";
import { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Check() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 1.5;
      groupRef.current.scale.setScalar(
        1 + Math.sin(state.clock.elapsedTime * 3) * 0.05
      );
    }
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <torusGeometry args={[0.8, 0.06, 8, 32]} />
        <meshBasicMaterial color="#00D4FF" />
      </mesh>
      <mesh position={[-0.1, 0, 0]} rotation={[0, 0, Math.PI / 4]}>
        <boxGeometry args={[0.08, 0.6, 0.08]} />
        <meshBasicMaterial color="#00D4FF" />
      </mesh>
      <mesh position={[0.25, -0.12, 0]} rotation={[0, 0, -Math.PI / 6]}>
        <boxGeometry args={[0.08, 0.35, 0.08]} />
        <meshBasicMaterial color="#00D4FF" />
      </mesh>
    </group>
  );
}

export default function CheckmarkScene() {
  return (
    <div className="w-32 h-32 mx-auto">
      <Canvas camera={{ position: [0, 0, 3], fov: 50 }} gl={{ alpha: true }}>
        <Check />
      </Canvas>
    </div>
  );
}
