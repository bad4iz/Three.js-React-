import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/cannon";

import { Plane } from "./Plane";
import { Box } from "./Box";
import { Box1 } from "./Box1";

function App() {
  return (
    <Canvas camera={{ position: [0, 2, 5], zoom: 1 }}>
      <OrbitControls />
      <Physics>
        <color attach="background" args={["lightblue"]} />
        <hemisphereLight intensity={0.35} />
        <spotLight
          position={[10, 100, 10]}
          angle={0.3}
          penumbra={1}
          intensity={2}
          castShadow
        />
        <Plane />
        <Box1 />
        <Box position={[1, 5, 0]} />
        <Box position={[1, 6, 0]} />
        <Box position={[1, 7, 0]} />
        <Box position={[1, 8, 0]} />
        <Box position={[1, 9, 0]} />
        <Box position={[1, 10, 0]} />
      </Physics>
    </Canvas>
  );
}

export default App;
