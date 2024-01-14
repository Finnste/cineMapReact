import React from "react";
import { Canvas, useThree, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { View, PerspectiveCamera, OrbitControls } from "@react-three/drei";
import useRefs from "react-use-refs";
import "../styles/archiveModelStyles.css";

const Obj = (props) => {
  const url = "/" + props.gltfSrc + ".gltf";
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

const ArchiveModel = (props) => {
    console.log(props)
  const [container, view1] = useRefs();

  const cinemaModels = [
    {
      name: "Rio Cinema",
      position: [0, -2, 0],
      rotation: [0, -2, 0],
      scale: [0.1, 0.1, 0.1],
      view: view1,
      color: "white",
      gltfSrc: "riocinema",
    },
  ];

  return (
    <div ref={container} className="container">
      {cinemaModels.map((item, index) => {
        return (
          <div ref={item.view} className="view" key={index}>
            <div className="cinemaName">{item.name}</div>
          </div>
        );
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
                gltfSrc={props.url}
              />
              <OrbitControls makeDefault />
            </View>
          );
        })}
      </Canvas>
    </div>
  );
}

export default ArchiveModel;
