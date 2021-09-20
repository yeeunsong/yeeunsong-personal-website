import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls, Stars } from "drei";
import { TextureLoader } from "three";
import "./Projects.css";

function Box1() {
  const textureLoader = new TextureLoader();
  const texture1 = textureLoader.load("/images/img-1.jpg");

  return (
    <mesh
      position={[-2, 1, -5]}
      onClick={(event) => window.open("https://google.com")}
    >
      <boxBufferGeometry attach="geometry" />
      <meshStandardMaterial attach="material" map={texture1} />
    </mesh>
  );
}

function Box2() {
  const textureLoader = new TextureLoader();
  const texture2 = textureLoader.load("/images/img-2.jpg");

  return (
    <mesh
      position={[-10, 0, -20]}
      onClick={(event) =>
        window.open("https://github.com/wrongakram/react-three-fiber")
      }
    >
      <boxBufferGeometry attach="geometry" />
      <meshStandardMaterial attach="material" map={texture2} />
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
          <Box1 />
          <Box2 />
        </Suspense>
      </Canvas>
    </div>
  );
}
