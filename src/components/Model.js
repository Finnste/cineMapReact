import React, { useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import styled from "styled-components";

const CameraController = () => {
  const { camera, gl } = useThree();

  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);
    controls.minDistance = 0.00001;
    controls.maxDistance = 80;
    return () => {
      controls.dispose();
    };
  }, [camera, gl]);
  return null;
};

const ModelWrapper = styled.div`
`;

const Obj = (props) => {
  const gltf = useLoader(GLTFLoader, "../rio.gltf");
  var model = gltf.scene;
  const geo = [model.children[0].geometry];

  return (
    <>
      <lineSegments position={[0, 1, -2]} rotation={[0, 4, 0]} scale={[0.2,0.2,0.2]}>
        <edgesGeometry attach="geometry" args={geo} />
        <lineBasicMaterial attach="material" color={props.colors[1]} />
      </lineSegments>
    </>
  );
};

export default function Model(props) {
  return (
    <ModelWrapper>
      <Canvas style={{height: "100vh", width: "100vw", margin: "0" }}>
        <CameraController />
        <Obj colors={props.colors} />
      </Canvas>
    </ModelWrapper>
  );
}