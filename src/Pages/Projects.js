import { Canvas } from "react-three-fiber";
import {OrbitControls} from "@react-three/drei";
import {Stars} from "@react-three/drei";
import "./Projects.css";
import { BoxBufferGeometry, MeshLambertMaterial, SpotLight } from "three";

function Box() {
  return (
    <mesh>
      <BoxBufferGeometry attach="geometry" />
      <MeshLambertMaterial attach="material" color="blue" />
    </mesh>
  );
}

function Projects() {
  return (
    <Canvas>
      <OrbitControls />
      <Stars />
      <ambientLight intensity={0.5} />
      <SpotLight position={[10, 15, 10]} angle={0.3} />
      <Box />
    </Canvas>
  );
}

export default Projects;
