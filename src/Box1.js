import { useBox } from "@react-three/cannon";
import { useFrame } from "react-three-fiber";
import { modelPosition } from "three/nodes";

export const Box1 = (props) => {
  const [ref, { position }] = useBox(() => ({
    mass: 1,
    position: [0, 5, 0],
    // rotation: [0.4, 0.2, 0.5],
    ...props,
  }));

  // useFrame(({ clock }) => {
  //   const a = clock.getElapsedTime();
  //   console.log(a);
  //   position.x = a;
  // });
  useFrame((args) => {
    position.set(Math.sin(args.clock.getElapsedTime()), 0, 0);
  });

  // useFrame(({ mouse: { x, y }, viewport: { height, width } }) =>
  //   position.set((x * width) / 2, (y * height) / 2, 0)
  // );

  return (
    <mesh receiveShadow castShadow ref={ref}>
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="grey" />
    </mesh>
  );
};
