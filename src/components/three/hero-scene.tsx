"use client";

import { Float, Sphere, TorusKnot, Environment } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function FloatingCore() {
  const core = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!core.current) {
      return;
    }

    // The 3D group eases toward the pointer and slowly spins to keep the hero alive.
    core.current.rotation.x = THREE.MathUtils.lerp(core.current.rotation.x, state.pointer.y * 0.35, 0.08);
    core.current.rotation.y = THREE.MathUtils.lerp(core.current.rotation.y, state.pointer.x * 0.55, 0.08);
    core.current.position.y = Math.sin(state.clock.elapsedTime * 1.2) * 0.15;
  });

  return (
    <group ref={core}>
      <Float speed={1.4} rotationIntensity={1.2} floatIntensity={1.3}>
        <TorusKnot args={[1, 0.28, 220, 18]} scale={0.85}>
          <meshStandardMaterial color="#60a5fa" metalness={0.95} roughness={0.08} emissive="#1d4ed8" emissiveIntensity={0.65} />
        </TorusKnot>
      </Float>

      <Float speed={2} rotationIntensity={1.6} floatIntensity={0.8}>
        <Sphere args={[0.66, 64, 64]} position={[1.45, 0.85, -0.2]}>
          <meshStandardMaterial color="#c084fc" metalness={0.9} roughness={0.1} emissive="#7c3aed" emissiveIntensity={0.35} />
        </Sphere>
      </Float>

      <Float speed={1.8} rotationIntensity={2} floatIntensity={1.1}>
        <Sphere args={[0.35, 48, 48]} position={[-1.55, -0.6, 0.5]}>
          <meshStandardMaterial color="#67e8f9" metalness={0.92} roughness={0.14} emissive="#06b6d4" emissiveIntensity={0.5} />
        </Sphere>
      </Float>
    </group>
  );
}

export function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5.5], fov: 45 }} dpr={[1, 1.8]} className="!h-full !w-full">
      <ambientLight intensity={0.8} />
      <directionalLight position={[3, 4, 5]} intensity={2} color="#93c5fd" />
      <pointLight position={[-4, -2, 2]} intensity={28} color="#c084fc" />
      <FloatingCore />
      <Environment preset="city" />
    </Canvas>
  );
}