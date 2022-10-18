import { useBox } from "@react-three/cannon";
import { useFrame } from "react-three-fiber";

export const Box = (props) => {
  const [ref, { position }] = useBox(() => ({
    mass: 1,
    position: [0, 5, 0],
    rotation: [0.4, 0.2, 0.5],
    ...props,
  }));

  // useFrame(({ clock }) => {
  //   const a = clock.getElapsedTime();
  //   console.log(a);
  //   position.x = a;
  // });
  // useFrame(({ clock }) =>
  //   position.set(Math.sin(clock.getElapsedTime()) * 5, 0, 0)
  // );

  // useFrame(({ mouse: { x, y }, viewport: { height, width } }) =>
  //   position.set((x * width) / 2, (y * height) / 2, 0)
  // );

  return (
    <mesh ref={ref}>
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial color="grey" />
    </mesh>
  );
};
