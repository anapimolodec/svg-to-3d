import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import Figure from "./Figure";
import { Suspense } from "react";

const Loading = () => {
  return <Text>Loading</Text>;
};

const Scene = () => (
  <>
    <OrbitControls enableZoom={true} enablePan={true} />
    <ambientLight intensity={0.5} />
    <directionalLight position={[10, 10, 5]} intensity={1} />
    <Figure position={[0, 0, 0]} />
  </>
);

export const CustomCanvas = () => (
  <Canvas camera={{ position: [0, 0, 20] }}>
    <Suspense fallback={<Loading />}>
      <Scene />
    </Suspense>
  </Canvas>
);
