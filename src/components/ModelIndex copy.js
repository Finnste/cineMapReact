import React, { useEffect, useRef, useState } from "react";
import { Canvas, useThree, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { View, OrbitControls } from "@react-three/drei";
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
  /* border: 4px solid black; */
  width: min-content;
`;

const Obj = (props) => {
  console.log(props.name);
  const url = "/" + props.name + ".gltf";
  const gltf = useLoader(GLTFLoader, url);
  var model = gltf.scene;
  const geo = [model.children[0].geometry];
  return (
    <>
      <lineSegments
        position={props.position}
        rotation={props.rotation}
        scale={props.scale}
      >
        <edgesGeometry attach="geometry" args={geo} />
        <lineBasicMaterial attach="material" color={props.colors[1]} />
      </lineSegments>
    </>
  );
};

export default function Modelindex(props) {
  const cinemaModels = [
    {
      name: "riocinema",
      position: [0, -2, 0],
      rotation: [0, -2, 0],
      scale: [0.1, 0.1, 0.1],
    }
    // {
    //   name: "act2",
    //   position: [-4, 3, 0],
    //   rotation: [0, -2, 0],
    //   scale: [1, 1, 1],
    // },
  ];

  const view1 = useRef();
  const cont = useRef();

  return (
    <ModelWrapper ref={cont}>
      <div ref={view1} style={{ width: "50vw", height: "50vh", zIndex: 10}} />
      <Canvas
        style={{ height: "100vh", width: "100vw", margin: "0" }}
        eventSource={cont}
      >
        {cinemaModels.map((item, index) => {
          return (
            <View track={view1}>
              {/* <CameraController /> */}
              <Obj
                key={index}
                colors={props.colors}
                name={item.name}
                position={item.position}
                rotation={item.rotation}
                scale={item.scale}
              />
            </View>
          );
        })}
      </Canvas>
    </ModelWrapper>
  );
}
