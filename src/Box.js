import { useBox } from "@react-three/cannon";
import { useFrame } from "react-three-fiber";

export const Box = ({ key, n, ...props }) => {
  const decade = Math.floor(n[1] / 10);

  const x = n[0];
  const z = n[2] - 20 + n[2] * 0.2;
  const y = 0.7 + n[1] * 0.2 + n[1] + decade * 0.3;

  const [ref, api] = useBox(() => ({
    ...props,
    mass: 0,
    position: [x, y, z],
  }));

  const nA = n.map(Math.floor);
  const number = nA[1] * 54 + nA[2];

  let color = "blue";
  if (number < 54 * 27.4) {
    color = "red";
  }
  if (number >= 54 * 60) {
    color = "white";
  }

  return (
    <mesh ref={ref}>
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial color={color} />
    </mesh>
  );
};
