import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import { OrbitControls, Stars } from "drei";
import { TextureLoader } from "three";
import * as THREE from "three";
import { useSpring, a } from "react-spring/three";
import "./Projects.css";
import Montserrat_Bold from "../Assets/fonts/Montserrat_Bold.json";

const expand_ = 1.0;
const normal = 0.7;

function Text({ position, size, height, text }) {
  const font = new THREE.FontLoader().parse(Montserrat_Bold);

  const textOptions = {
    font,
    size: size,
    height: height,
  };

  return (
    <mesh position={position}>
      <textGeometry attach="geometry" args={[text, textOptions]} />
      <meshStandardMaterial attach="material" />
    </mesh>
  );
}

function Sphere({ position, imageurl, link }) {
  const ref = useRef();
  const textureLoader = new TextureLoader();
  const texture = textureLoader.load(imageurl);

  const [expand, setExpand] = useState(false);
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => (ref.current.rotation.y += 0.01));
  const props = useSpring({
    scale: expand ? [expand_, expand_, expand_] : [normal, normal, normal],
  });
  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered]);

  return (
    <a.mesh
      position={position}
      onClick={() => window.open(link)}
      // onPointerDown={() => window.open(link)} --> for mobile version
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

// function SphereWithRing({ position, imageurl, link }) {
//   const ref = useRef();
//   const textureLoader = new TextureLoader();
//   const texture = textureLoader.load(imageurl);

//   const [expand, setExpand] = useState(false);
//   const [hovered, setHovered] = useState(false);

//   useFrame((state, delta) => (ref.current.rotation.y += 0.01));
//   const props = useSpring({
//     scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1],
//   });
//   useEffect(() => {
//     document.body.style.cursor = hovered ? "pointer" : "auto";
//   }, [hovered]);

//   return (
//     <a.mesh
//       position={position}
//       onClick={() => window.open(link)}
//       onPointerOver={() => {
//         setHovered(true);
//         setExpand(!expand);
//       }}
//       onPointerOut={() => {
//         setHovered(false);
//         setExpand(!expand);
//       }}
//       scale={props.scale}
//       ref={ref}
//     >
//       <sphereGeometry attach="geometry" args={[1, 32, 32]} />
//       <torusGeometry attach="geometry" args={[1, 0.4, 32, 64]} />
//       <meshStandardMaterial attach="material" map={texture} />
//     </a.mesh>
//   );
// }

function Torus({ position, imageurl, link }) {
  const ref = useRef();
  const textureLoader = new TextureLoader();
  const texture = textureLoader.load(imageurl);

  const [expand, setExpand] = useState(false);
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => (ref.current.rotation.y += 0.01));
  const props = useSpring({
    scale: expand ? [expand_, expand_, expand_] : [normal, normal, normal],
  });
  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered]);

  return (
    <a.mesh
      position={position}
      onClick={() => window.open(link)}
      // onPointerDown={() => window.open(link)} --> for mobile version
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
      <torusGeometry attach="geometry" args={[0.8, 0.3, 32, 64]} />
      <meshStandardMaterial attach="material" map={texture} />
    </a.mesh>
  );
}

function TorusKnot({ position, imageurl, link }) {
  const ref = useRef();
  const textureLoader = new TextureLoader();
  const texture = textureLoader.load(imageurl);

  const [expand, setExpand] = useState(false);
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => (ref.current.rotation.y += 0.01));
  const props = useSpring({
    scale: expand ? [expand_, expand_, expand_] : [normal, normal, normal],
  });
  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered]);

  return (
    <a.mesh
      position={position}
      onClick={() => window.open(link)}
      // onPointerDown={() => window.open(link)} --> for mobile version
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
      <torusKnotGeometry attach="geometry" args={[0.8, 0.3, 64, 8]} />
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
          <Text
            position={[-3, 2, -2]}
            size={0.3}
            height={0.03}
            text={"Rotate the space around :)"}
          />
          <Text
            position={[2, -2, -3]}
            size={0.3}
            height={0.03}
            text={"Click each planet"}
          />
          {/* <Sphere
            position={[-2, 0, -5]}
            imageurl={"/images/img-1.jpg"}
            link={"https://github.com/yeeunsong/tab-android-app"}
          /> */}
          <Torus
            position={[5, 0, -2]}
            imageurl={"/images/img-2.jpg"}
            link={"https://github.com/yeeunsong/yeeunsong-personal-website"}
          />
          <Sphere
            position={[0.7, 0.6, -2.5]}
            imageurl={"/images/img-8.jpg"}
            link={"https://github.com/yeeunsong/DATATON_Recommendation_System"}
          />
          <Sphere
            position={[1, -2, -1]}
            imageurl={"/images/img-4.jpg"}
            link={"https://github.com/yeeunsong/SinGAN"}
          />
          <Sphere
            position={[-3, 1, -1]}
            imageurl={"/images/img-5.jpg"}
            link={"https://github.com/yeeunsong/state-of-the-art-server"}
          />
          <TorusKnot
            position={[-4, -3, -5]}
            imageurl={"/images/img-6.jpg"}
            link={"https://github.com/yeeunsong/tab-android-app"}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
