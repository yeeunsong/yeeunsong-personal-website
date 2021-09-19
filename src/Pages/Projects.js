import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls, Stars } from "drei";
import { TextureLoader } from "three";
import "./Projects.css";

function Box() {
  const textureLoader = new TextureLoader();
  const texture1 = textureLoader.load("/images/img-1.jpg");
  const texture2 = textureLoader.load("/images/img-2.jpg");
  const texture3 = textureLoader.load("/images/img-3.jpg");
  const texture4 = textureLoader.load("/images/img-4.jpg");
  const texture5 = textureLoader.load("/images/img-5.jpg");
  const texture6 = textureLoader.load("/images/img-6.jpg");

  return (
    <mesh>
      <boxBufferGeometry attach="geometry" />
      <meshStandardMaterial attachArray="material" map={texture1} />
      <meshStandardMaterial attachArray="material" map={texture2} />
      <meshStandardMaterial attachArray="material" map={texture3} />
      <meshStandardMaterial attachArray="material" map={texture4} />
      <meshStandardMaterial attachArray="material" map={texture5} />
      <meshStandardMaterial attachArray="material" map={texture6} />
    </mesh>
  );
}

export default function Projects() {
  return (
    <div className="Projects">
      <Canvas>
        <OrbitControls />
        <Stars />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 10]} angle={0.3} />
        <Suspense fallback={null}>
          <Box />
        </Suspense>
      </Canvas>
    </div>
  );
}
