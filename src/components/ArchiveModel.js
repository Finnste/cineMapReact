import React from "react";
import { Link } from "gatsby";
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
    view25,
  ] = useRefs();

  const cinemaModels = [
    {
      name: "Rio Cinema",
      position: [0, -2, 0],
      rotation: [0, -2, 0],
      scale: [0.1, 0.1, 0.1],
      view: view1,
      color: "red",
      gltfSrc: "riocinema",
    },
    {
      name: "Act One Cinema",
      position: [0, 0, 0],
      rotation: [0, 3, 0],
      scale: [0.5, 0.5, 0.5],
      view: view2,
      color: "red",
      gltfSrc: "actonecinema",
    },
    {
      name: "Art House Cinema",
      position: [0, 0, 0],
      rotation: [0, 0, 0],
      scale: [0.7, 0.7, 0.7],
      view: view3,
      color: "red",
      gltfSrc: "arthouse",
    },
    {
      name: "Chiswick Cinema",
      position: [0, -1, 0],
      rotation: [-1.5, 0, 0],
      scale: [0.1, 0.1, 0.1],
      view: view4,
      color: "purple",
      gltfSrc: "chiswick",
    },
    {
      name: "Peckhamplex Cinema",
      position: [0, 0, 0],
      rotation: [1.5, 0, 0],
      scale: [5, 5, 5],
      view: view5,
      color: "green",
      gltfSrc: "peckhamplex",
    },
    {
      name: "Lumiere Cinema",
      position: [0, -0.3, 3],
      rotation: [0, -1.5, 0],
      scale: [1, 1, 1],
      view: view6,
      color: "red",
      gltfSrc: "lumiere",
    },
    {
      name: "Phoenix Cinema",
      position: [0, 0, 0],
      rotation: [1.5, 0, 1.5],
      scale: [0.1, 0.1, 0.1],
      view: view7,
      color: "red",
      gltfSrc: "phoenixcinema",
    },
    {
      name: "Watermans Cinema",
      position: [0, -1, 0],
      rotation: [-0.4, 3, 0.7],
      scale: [2, 2, 2],
      view: view8,
      color: "red",
      gltfSrc: "watermans",
    },
    {
      name: "Lexi Cinema",
      position: [0, 0, 0],
      rotation: [1.5, 0, 0],
      scale: [2, 2, 2],
      view: view9,
      color: "red",
      gltfSrc: "lexi",
    },
    {
      name: "Closeup Cinema",
      position: [0, 0, 0],
      rotation: [-1.5, 0, 3],
      scale: [-20, -20, -20],
      view: view10,
      color: "black",
      gltfSrc: "closeup",
    },
    {
      name: "Genesis Cinema",
      position: [0, -1, 0],
      rotation: [-1.5, 0, 0],
      scale: [0.5, 0.5, 0.5],
      view: view11,
      color: "blue",
      gltfSrc: "genesis",
    },
    {
      name: "The Castle Cinema",
      position: [0, 0, 0],
      rotation: [-1.5, 0, 0],
      scale: [-0.4, -0.4, -0.4],
      view: view12,
      color: "green",
      gltfSrc: "thecastlecinema",
    },
    {
      name: "Jw3 Cinema",
      position: [0, 0, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
      view: view13,
      color: "green",
      gltfSrc: "jw3",
    },
    {
      name: "The Castle Cinema",
      position: [0, 0, 0],
      rotation: [-1.5, 0, 0],
      scale: [-0.4, -0.4, -0.4],
      view: view14,
      color: "green",
      gltfSrc: "thecastlecinema",
    },
    {
      name: "The Castle Cinema",
      position: [0, 0, 0],
      rotation: [-1.5, 0, 0],
      scale: [-0.4, -0.4, -0.4],
      view: view15,
      color: "green",
      gltfSrc: "thecastlecinema",
    },
    {
      name: "The Castle Cinema",
      position: [0, 0, 0],
      rotation: [-1.5, 0, 0],
      scale: [-0.4, -0.4, -0.4],
      view: view16,
      color: "green",
      gltfSrc: "thecastlecinema",
    },
    {
      name: "The Castle Cinema",
      position: [0, 0, 0],
      rotation: [-1.5, 0, 0],
      scale: [-0.4, -0.4, -0.4],
      view: view17,
      color: "green",
      gltfSrc: "thecastlecinema",
    },
    {
      name: "The Castle Cinema",
      position: [0, 0, 0],
      rotation: [-1.5, 0, 0],
      scale: [-0.4, -0.4, -0.4],
      view: view18,
      color: "green",
      gltfSrc: "thecastlecinema",
    },
    {
      name: "The Castle Cinema",
      position: [0, 0, 0],
      rotation: [-1.5, 0, 0],
      scale: [-0.4, -0.4, -0.4],
      view: view19,
      color: "green",
      gltfSrc: "thecastlecinema",
    },
    {
      name: "The Castle Cinema",
      position: [0, 0, 0],
      rotation: [-1.5, 0, 0],
      scale: [-0.4, -0.4, -0.4],
      view: view20,
      color: "green",
      gltfSrc: "thecastlecinema",
    },
    {
      name: "The Castle Cinema",
      position: [0, 0, 0],
      rotation: [-1.5, 0, 0],
      scale: [-0.4, -0.4, -0.4],
      view: view21,
      color: "green",
      gltfSrc: "thecastlecinema",
    },
    {
      name: "The Castle Cinema",
      position: [0, 0, 0],
      rotation: [-1.5, 0, 0],
      scale: [-0.4, -0.4, -0.4],
      view: view22,
      color: "green",
      gltfSrc: "thecastlecinema",
    },
    {
      name: "The Castle Cinema",
      position: [0, 0, 0],
      rotation: [-1.5, 0, 0],
      scale: [-0.4, -0.4, -0.4],
      view: view23,
      color: "green",
      gltfSrc: "thecastlecinema",
    },
    {
      name: "The Castle Cinema",
      position: [0, 0, 0],
      rotation: [-1.5, 0, 0],
      scale: [-0.4, -0.4, -0.4],
      view: view24,
      color: "green",
      gltfSrc: "thecastlecinema",
    },
    {
      name: "The Castle Cinema",
      position: [0, 0, 0],
      rotation: [-1.5, 0, 0],
      scale: [-0.4, -0.4, -0.4],
      view: view25,
      color: "green",
      gltfSrc: "thecastlecinema",
    },
  ];

  return (
    <div ref={container} className="container">
      <div className="archiveModelColumn">
        {cinemaModels.map((item, index) => {
          if (item.name === "Rio Cinema") {
            return (
              <Link
                to="/cinema-new"
                state={{ cinemaName: item.name }}
                className="LinkStyle"
              >
                <div ref={item.view} className="view" key={index}>
                  <h2 className="cinemaName">{item.name}</h2>
                </div>
              </Link>
            );
          } else {
            return (
              <div ref={item.view} className="view" key={index}>
                <h2 className="cinemaName">{item.name}</h2>
              </div>
            );
          }
        })}
      </div>

      <Canvas eventSource={container} className="canvas">
        {cinemaModels.map((item, index) => {
          if (item.name === "Rio Cinema") {
            return (
              <View track={item.view} className="view" key={index}>
                <PerspectiveCamera makeDefault fov={40} position={[0, 0, 6]} />
                <Obj
                  color="white"
                  name={item.name}
                  position={item.position}
                  rotation={item.rotation}
                  scale={item.scale}
                  gltfSrc={item.gltfSrc}
                />
                {/* <OrbitControls makeDefault /> */}
              </View>
            );
          } else {
            return (
              <View track={item.view} className="view" key={index}>
                <PerspectiveCamera makeDefault fov={40} position={[0, 0, 6]} />
                <Obj
                  color="white"
                  name={item.name}
                  position={item.position}
                  rotation={item.rotation}
                  scale={item.scale}
                  gltfSrc={item.gltfSrc}
                />
                <OrbitControls makeDefault />
              </View>
            );
          }
        })}
      </Canvas>
    </div>
  );
}
