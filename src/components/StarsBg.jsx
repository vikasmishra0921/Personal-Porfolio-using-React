import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

function StarField() {
  const ref = useRef();
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.02; // slow yaw
    ref.current.rotation.x += delta * 0.005; // subtle pitch
  });
  return (
    <group ref={ref}>
      <Stars radius={50} depth={20} count={2000} factor={4} fade speed={0.05} />
    </group>
  );
}

export default function StarsBg() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 1] }} dpr={[1, 1.5]}>
        <Suspense fallback={null}>
          <StarField />
        </Suspense>
      </Canvas>
    </div>
  );
}