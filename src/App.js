import { Canvas } from "@react-three/fiber";

import { Box } from "./Box";

function App() {
  return (
    <Canvas>
      <pointLight position={[10, 10, 10]} />
      <Box position={[-4, 0, 0]} />
      <Box position={[0, 0, 0]} rotation={[Math.PI / 4, Math.PI / 4, 0]} />
      <Box position={[4, 0, 0]} />
      <mesh position={[-4, 2, 0]}>
        <sphereGeometry />
        <meshStandardMaterial color="hotpink" />
      </mesh>
    </Canvas>
  );
}

export default App;
