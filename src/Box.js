import { useBox } from "@react-three/cannon";

export const Box = ({ key, n, ...props }) => {
  const decade = Math.floor(n[1] / 10);

  const x = n[0];
  const z = (decade % 2 === 0 ? -1 : 1) + n[2] + n[2] * 0.2 - 20;
  const y = 0.7 + n[1] * 0.2 + n[1] + decade * 0.3;

  const [ref] = useBox(() => ({
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
      <boxBufferGeometry attach="geometry" args={[20, 1, 1]} />
      <meshLambertMaterial color={color} />
    </mesh>
  );
};
