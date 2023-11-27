import React, { useEffect, useRef, useState } from "react";
import { Canvas, useThree, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { View, PerspectiveCamera, OrbitControls } from "@react-three/drei";
import useRefs from "react-use-refs";
import styled from "styled-components";
import "../pages/styles.css";

const Obj = (props) => {
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
        <lineBasicMaterial attach="material" color={props.color} />
      </lineSegments>
    </>
  );
};

export default function Modelindex(props) {
  const [
    container,
    view1,
    view2,
    view3,
    view4,
    view5,
    view6,
    view7,
    view8,
    view9,
    view10,
    view11,
    view12,
    view13,
    view14,
    view15,
    view16,
    view17,
    view18,
    view19,
    view20,
    view21,
    view22,
    view23,
    view24,
    view25
  ] = useRefs();

  const cinemaModels = [
    {
      name: "riocinema",
      position: [0, -2, 0],
      rotation: [0, -2, 0],
      scale: [0.1, 0.1, 0.1],
      view: view1,
      color: "red",
    },
    {
      name: "act2",
      position: [0, 0, 0],
      rotation: [0, 3, 0],
      scale: [1, 1, 1],
      view: view2,
      color: "red",
    },
    {
      name: "arthouse",
      position: [0, 0, 0],
      rotation: [0, 0, 0],
      scale: [0.7, 0.7, 0.7],
      view: view3,
      color: "red",
    },
    {
      name: "chiswick",
      position: [0, -1, 0],
      rotation: [-1.5, 0, 0],
      scale: [0.1, 0.1, 0.1],
      view: view4,
      color: "red",
    },
    {
      name: "peckhamplex",
      position: [0, 0, 0],
      rotation: [1.5, 0, 0],
      scale: [5,5,5],
      view: view5,
      color: "green",
    },
    {
      name: "act2",
      position: [-4, -2, 0],
      rotation: [0, -2, 0],
      scale: [1, 1, 1],
      view: view6,
      color: "red",
    },
    {
      name: "act2",
      position: [-4, -2, 0],
      rotation: [0, -2, 0],
      scale: [1, 1, 1],
      view: view7,
      color: "red",
    },
    {
      name: "act2",
      position: [-4, -2, 0],
      rotation: [0, -2, 0],
      scale: [1, 1, 1],
      view: view8,
      color: "red",
    },
    {
      name: "act2",
      position: [-4, -2, 0],
      rotation: [0, -2, 0],
      scale: [1, 1, 1],
      view: view9,
      color: "red",
    },
    {
      name: "closeup",
      position: [0, 0, 0],
      rotation: [-1.5, 0, 3],
      scale: [-20, -20, -20],
      view: view10,
      color: "black",
    },
    {
      name: "genesis",
      position: [0, -1, 0],
      rotation: [-1.5, 0, 0],
      scale: [0.5, 0.5, 0.5],
      view: view11,
      color: "blue",
    },
    {
      name: "castle",
      position: [0, 0, 0],
      rotation: [-1.5, 0, 0],
      scale: [-0.4, -0.4, -0.4],
      view: view12,
      color: "green",
    },
    {
      name: "castle",
      position: [0, 0, 0],
      rotation: [-1.5, 0, 0],
      scale: [-0.4, -0.4, -0.4],
      view: view13,
      color: "green",
    },
    {
      name: "castle",
      position: [0, 0, 0],
      rotation: [-1.5, 0, 0],
      scale: [-0.4, -0.4, -0.4],
      view: view14,
      color: "green",
    },
    {
      name: "castle",
      position: [0, 0, 0],
      rotation: [-1.5, 0, 0],
      scale: [-0.4, -0.4, -0.4],
      view: view15,
      color: "green",
    },
    {
      name: "castle",
      position: [0, 0, 0],
      rotation: [-1.5, 0, 0],
      scale: [-0.4, -0.4, -0.4],
      view: view16,
      color: "green",
    },
    {
      name: "castle",
      position: [0, 0, 0],
      rotation: [-1.5, 0, 0],
      scale: [-0.4, -0.4, -0.4],
      view: view17,
      color: "green",
    },
    {
      name: "castle",
      position: [0, 0, 0],
      rotation: [-1.5, 0, 0],
      scale: [-0.4, -0.4, -0.4],
      view: view18,
      color: "green",
    },
    {
      name: "castle",
      position: [0, 0, 0],
      rotation: [-1.5, 0, 0],
      scale: [-0.4, -0.4, -0.4],
      view: view19,
      color: "green",
    },
    {
      name: "castle",
      position: [0, 0, 0],
      rotation: [-1.5, 0, 0],
      scale: [-0.4, -0.4, -0.4],
      view: view20,
      color: "green",
    },
    {
      name: "castle",
      position: [0, 0, 0],
      rotation: [-1.5, 0, 0],
      scale: [-0.4, -0.4, -0.4],
      view: view21,
      color: "green",
    },
    {
      name: "castle",
      position: [0, 0, 0],
      rotation: [-1.5, 0, 0],
      scale: [-0.4, -0.4, -0.4],
      view: view22,
      color: "green",
    },
    {
      name: "castle",
      position: [0, 0, 0],
      rotation: [-1.5, 0, 0],
      scale: [-0.4, -0.4, -0.4],
      view: view23,
      color: "green",
    },
    {
      name: "castle",
      position: [0, 0, 0],
      rotation: [-1.5, 0, 0],
      scale: [-0.4, -0.4, -0.4],
      view: view24,
      color: "green",
    },
    {
      name: "castle",
      position: [0, 0, 0],
      rotation: [-1.5, 0, 0],
      scale: [-0.4, -0.4, -0.4],
      view: view25,
      color: "green",
    }
  ];

  return (
    <div ref={container} className="container">
      {cinemaModels.map((item, index) => {
        console.log(item.view);
        return <div ref={item.view} className="view" key={index}>
          <h2 class="cinemaName">{item.name}</h2>
        </div>;
      })}

      <Canvas eventSource={container} className="canvas">
        {cinemaModels.map((item, index) => {
          return (
            <View track={item.view} className="view" key={index}>
              <PerspectiveCamera makeDefault fov={40} position={[0, 0, 6]} />
              <Obj
                color={item.color}
                name={item.name}
                position={item.position}
                rotation={item.rotation}
                scale={item.scale}
              />
              <OrbitControls makeDefault />
            </View>
          );
        })}
      </Canvas>
    </div>
  );
}
