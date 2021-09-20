import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import { OrbitControls, Stars } from "drei";
import { TextureLoader } from "three";
import { useSpring, a } from "react-spring/three";
import "./Projects.css";

function Box({ position, imageurl, link }) {
  const textureLoader = new TextureLoader();
  const texture = textureLoader.load(imageurl);
  const mesh = useRef();

  //useFrame allows us to re-render/update rotation on each frame
  // useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  const [expand, setExpand] = useState(false);
  const props = useSpring({
    scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1],
  });

  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered]);
  
  return (
    <a.mesh
      position={position}
      onClick={(event) => window.open(link)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={props.scale}
    >
      <boxBufferGeometry attach="geometry" />
      <meshStandardMaterial attach="material" map={texture} />
    </a.mesh>
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
          <Box
            position={[-2, 1, -5]}
            imageurl={"/images/img-1.jpg"}
            link={"https://google.com"}
          />
          <Box2 />
        </Suspense>
      </Canvas>
    </div>
  );
}
