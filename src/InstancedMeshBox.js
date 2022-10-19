import { useBox } from "@react-three/cannon";

export const InstancedMeshBox = () => {
  const [ref] = useBox(() => ({
    mass: 1,
    // position: [
    //   4 - Math.random() * 8,
    //   viewport.height * Math.random(),
    //   4 - Math.random() * 8,
    // ],
  }));

  // useFrame(({ clock }) => {
  //   const a = clock.getElapsedTime();
  //   console.log(a);
  //   position.x = a;
  // });
  // useFrame(({ clock }) => {
  //   console.log(333);
  //   position.set(1, 1, 1);
  // });

  // useFrame(({ clock, mouse: { x, y }, viewport: { height, width } }) => {
  //   const elTime = clock.elapsedTime * 10 - 40;
  //   const timer = elTime > 0 ? Math.floor(elTime) : 0;
  //
  //   // if (timer < 10) {
  //   //   api.sleep();
  //   // } else if (timer === 10) {
  //   //   api.wakeUp();
  //   //   api.position.set(0, 0, 0);
  //   //   console.log("fire");
  //   // }
  // });

  return (
    <instancedMesh ref={ref} args={[null, null, 100]}>
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial color={"grey"} />
    </instancedMesh>
  );
};
