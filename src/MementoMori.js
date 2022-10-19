import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/cannon";

import { Plane } from "./Plane";
import { Box } from "./Box";
import { Box1 } from "./Box1";
import { InstancedMeshBox } from "./InstancedMeshBox";

export function MementoMori() {
  const y = 72;
  const n = 54;
  const years = new Array(y).fill(0).map((item, idxY) =>
    new Array(n).fill(1).map((item, idxN) => {
      return [0, idxY, idxN];
    })
  );

  return (
    <Canvas camera={{ position: [200, 100, 0], zoom: 1 }}>
      <OrbitControls />
      <Physics>
        <color attach="background" args={["lightblue"]} />
        <hemisphereLight intensity={0.35} />
        <spotLight
          position={[200, 200, 0]}
          angle={0.3}
          penumbra={1}
          intensity={2}
          castShadow
        />
        {/*<Box />*/}
        <Plane />
        {years.map((item) => item.map((n) => <Box key={n.toString()} n={n} />))}
      </Physics>
    </Canvas>
  );
}
