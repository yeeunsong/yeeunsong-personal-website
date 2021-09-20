import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import { OrbitControls, Stars } from "drei";
import { TextureLoader } from "three";
import { useSpring, a } from "react-spring/three";
import "./Projects.css";

function Sphere({ position, imageurl, link }) {
  const ref = useRef();
  const textureLoader = new TextureLoader();
  const texture = textureLoader.load(imageurl);

  const [expand, setExpand] = useState(false);
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => (ref.current.rotation.y += 0.01));
  const props = useSpring({
    scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1],
  });
  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered]);

  return (
    <a.mesh
      position={position}
      onClick={() => window.open(link)}
      onPointerOver={() => {
        setHovered(true);
        setExpand(!expand);
      }}
      onPointerOut={() => {
        setHovered(false);
        setExpand(!expand);
      }}
      scale={props.scale}
      ref={ref}
    >
      <sphereGeometry attach="geometry" args={[1, 32, 32]} />
      <meshStandardMaterial attach="material" map={texture} />
    </a.mesh>
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
          <Sphere
            position={[-2, 1, -5]}
            imageurl={"/images/img-1.jpg"}
            link={"https://github.com/yeeunsong/tab-android-app"}
          />
          <Sphere
            position={[5, 1, -2]}
            imageurl={"/images/img-2.jpg"}
            link={"https://github.com/yeeunsong/DATATON_Recommendation_System"}
          />
          <Sphere
            position={[0, 1, -2.5]}
            imageurl={"/images/img-3.jpg"}
            link={"https://github.com/yeeunsong/SinGAN"}
          />
          <Sphere
            position={[1, -1, 0]}
            imageurl={"/images/img-4.jpg"}
            link={"https://github.com/yeeunsong/state-of-the-art-server"}
          />
          <Sphere
            position={[-3, 2, -1]}
            imageurl={"/images/img-5.jpg"}
            link={"https://github.com/KU-BIG/nipa-connection-guide/wiki"}
          />
          <Sphere
            position={[-4, -2, -5]}
            imageurl={"/images/img-6.jpg"}
            link={"https://github.com/yeeunsong/2019_Spring_novelty_detection"}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
