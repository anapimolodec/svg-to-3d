import React, { useRef } from "react";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader";

const Figure = () => {
  const svgData = useLoader(SVGLoader, "/oyu.svg");
  const meshRef = useRef();

  const shapes = svgData.paths.flatMap((path) => path.toShapes(true));

  const geometry = new THREE.ExtrudeGeometry(shapes, {
    depth: 10,
  });
  geometry.center();

  return (
    <mesh geometry={geometry} scale={0.07} ref={meshRef}>
      <meshPhongMaterial attach="material" color="red" />
    </mesh>
  );
};

export default Figure;
