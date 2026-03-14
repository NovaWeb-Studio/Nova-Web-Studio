"use client";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function WaveMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  const geomRef = useRef<THREE.PlaneGeometry | null>(null);

  const seg = 60;

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (meshRef.current) {
      const geo = meshRef.current.geometry as THREE.BufferGeometry;
      const pos = geo.attributes.position;
      for (let i = 0; i <= seg; i++) {
        for (let j = 0; j <= seg; j++) {
          const idx = i * (seg + 1) + j;
          const x = pos.getX(idx);
          const y = pos.getY(idx);
          const z = Math.sin(x * 0.8 + t * 0.5) * 0.4 + Math.cos(y * 0.6 + t * 0.3) * 0.3;
          pos.setZ(idx, z);
        }
      }
      pos.needsUpdate = true;
      geo.computeVertexNormals();
    }
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 3, 0, 0]} position={[0, -1, 0]}>
      <planeGeometry ref={geomRef} args={[20, 20, seg, seg]} />
      <meshBasicMaterial
        color="#00D4FF"
        wireframe
        transparent
        opacity={0.12}
      />
    </mesh>
  );
}

export default function HeroMesh() {
  return (
    <Canvas camera={{ position: [0, 2, 8], fov: 60 }} gl={{ alpha: true }}>
      <WaveMesh />
    </Canvas>
  );
}
