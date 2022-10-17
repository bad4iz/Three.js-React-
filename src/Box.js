import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export const Box = (props) => {
  const ref = useRef();

  useFrame((state, delta) => (ref.current.rotation.x += 0.01));
  return (
    <mesh {...props} ref={ref} onClick={() => console.log(2)}>
      <boxGeometry args={[2, 1, 2]} />
      <meshBasicMaterial color={"orange"} />
    </mesh>
  );
};
