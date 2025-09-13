import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function AnimatedCube() {
  const mesh = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

   
    mesh.current.rotation.x = t;
    mesh.current.rotation.y = t * 0.7;


    mesh.current.position.x = Math.sin(t) * 2;
    mesh.current.position.y = Math.cos(t) * 2;


    const scale = 1 + 0.3 * Math.sin(t * 2);
    mesh.current.scale.set(scale, scale, scale);
  });

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

export default function App() {
  return (
    <Canvas camera={{ position: [5, 5, 5], fov: 60 }}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <AnimatedCube />
      <OrbitControls />
    </Canvas>
  );
}
