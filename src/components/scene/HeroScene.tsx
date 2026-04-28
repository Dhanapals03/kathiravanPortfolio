import { Float, Grid, MeshDistortMaterial, QuadraticBezierLine, Sparkles } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import type { Group, Mesh } from 'three';

type Vector3Tuple = [number, number, number];

function ServerBlade({ position, accent }: { position: Vector3Tuple; accent: string }) {
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (!groupRef.current) {
      return;
    }

    groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.42 + position[0]) * 0.22;
    groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 1.2 + position[2]) * 0.14;
  });

  return (
    <group position={position} ref={groupRef}>
      <mesh castShadow receiveShadow>
        <boxGeometry args={[1.2, 1.85, 0.52]} />
        <meshStandardMaterial color="#081121" metalness={0.78} roughness={0.18} />
      </mesh>
      <mesh position={[0, 0, 0.27]}>
        <planeGeometry args={[0.84, 1.24]} />
        <meshBasicMaterial color={accent} opacity={0.44} transparent />
      </mesh>
      {[-0.46, -0.16, 0.16, 0.46].map((yValue) => (
        <mesh key={yValue} position={[0, yValue, 0.275]}>
          <planeGeometry args={[0.72, 0.08]} />
          <meshBasicMaterial color="#dbeafe" opacity={0.82} transparent />
        </mesh>
      ))}
    </group>
  );
}

function CloudCore() {
  const coreRef = useRef<Group>(null);
  const haloRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (coreRef.current) {
      coreRef.current.rotation.y = state.clock.elapsedTime * 0.18;
    }

    if (haloRef.current) {
      haloRef.current.rotation.z = state.clock.elapsedTime * 0.24;
      haloRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 1.3) * 0.03);
    }
  });

  return (
    <group position={[0, 1.2, 0]} ref={coreRef}>
      <Float floatIntensity={0.9} rotationIntensity={0.2} speed={2}>
        <group>
          <mesh position={[-0.72, 0.02, 0]}>
            <sphereGeometry args={[0.58, 32, 32]} />
            <meshStandardMaterial color="#dbeafe" emissive="#22d3ee" emissiveIntensity={0.34} opacity={0.9} transparent />
          </mesh>
          <mesh position={[0, 0.22, 0.24]}>
            <sphereGeometry args={[0.78, 32, 32]} />
            <meshStandardMaterial color="#bfdbfe" emissive="#60a5fa" emissiveIntensity={0.36} opacity={0.9} transparent />
          </mesh>
          <mesh position={[0.76, -0.04, -0.06]}>
            <sphereGeometry args={[0.54, 32, 32]} />
            <meshStandardMaterial color="#dbeafe" emissive="#38bdf8" emissiveIntensity={0.34} opacity={0.88} transparent />
          </mesh>
          <mesh position={[0.12, -0.42, 0.06]}>
            <sphereGeometry args={[0.58, 32, 32]} />
            <meshStandardMaterial color="#93c5fd" emissive="#38bdf8" emissiveIntensity={0.3} opacity={0.84} transparent />
          </mesh>
        </group>
      </Float>

      <mesh ref={haloRef} rotation={[1.2, 0, 0]}>
        <torusGeometry args={[1.76, 0.05, 16, 140]} />
        <meshBasicMaterial color="#38bdf8" opacity={0.52} transparent />
      </mesh>
    </group>
  );
}

function DataCore() {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) {
      return;
    }

    meshRef.current.rotation.x = state.clock.elapsedTime * 0.55;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.78;
  });

  return (
    <Float floatIntensity={1.2} rotationIntensity={0.55} speed={2.4}>
      <mesh position={[0, -0.1, 0.2]} ref={meshRef}>
        <icosahedronGeometry args={[0.5, 0]} />
        <MeshDistortMaterial color="#a78bfa" distort={0.22} roughness={0.06} speed={2} transparent opacity={0.94} />
      </mesh>
    </Float>
  );
}

function OrbitRing({ position, color, scale }: { position: Vector3Tuple; color: string; scale: number }) {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) {
      return;
    }

    meshRef.current.rotation.x = 1.12 + state.clock.elapsedTime * 0.2;
    meshRef.current.rotation.z = state.clock.elapsedTime * 0.15;
  });

  return (
    <mesh position={position} ref={meshRef} scale={scale}>
      <torusGeometry args={[1.22, 0.035, 14, 120]} />
      <meshBasicMaterial color={color} opacity={0.56} transparent />
    </mesh>
  );
}

function FloatingNode({
  color,
  offset,
  radius,
  verticalOffset,
}: {
  color: string;
  offset: number;
  radius: number;
  verticalOffset: number;
}) {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) {
      return;
    }

    const angle = state.clock.elapsedTime * 0.6 + offset;
    meshRef.current.position.x = Math.cos(angle) * radius;
    meshRef.current.position.z = Math.sin(angle) * radius * 0.55;
    meshRef.current.position.y = verticalOffset + Math.sin(angle * 1.8) * 0.24;
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.08, 24, 24]} />
      <meshBasicMaterial color={color} />
    </mesh>
  );
}

function BasePlatform() {
  const ringRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (!ringRef.current) {
      return;
    }

    ringRef.current.rotation.y = state.clock.elapsedTime * 0.3;
  });

  return (
    <group position={[0, -1.6, 0]}>
      <mesh>
        <cylinderGeometry args={[1.6, 1.92, 0.3, 48]} />
        <meshStandardMaterial color="#081121" metalness={0.78} roughness={0.16} />
      </mesh>
      <mesh position={[0, 0.16, 0]}>
        <cylinderGeometry args={[1.38, 1.58, 0.06, 48]} />
        <meshBasicMaterial color="#38bdf8" opacity={0.22} transparent />
      </mesh>
      <mesh position={[0, 0.22, 0]} ref={ringRef} rotation={[0, 0, 0]}>
        <torusGeometry args={[1.72, 0.03, 16, 120]} />
        <meshBasicMaterial color="#67e8f9" opacity={0.46} transparent />
      </mesh>
    </group>
  );
}

function SceneCluster() {
  const clusterRef = useRef<Group>(null);

  useFrame((state) => {
    if (!clusterRef.current) {
      return;
    }

    clusterRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.18) * 0.24;
  });

  return (
    <group position={[0, 0.1, 0]} ref={clusterRef}>
      <ServerBlade accent="#22d3ee" position={[-2.15, -0.2, -0.78]} />
      <ServerBlade accent="#60a5fa" position={[2.18, -0.1, -0.68]} />
      <ServerBlade accent="#a78bfa" position={[0.18, -1.24, -1.05]} />
      <BasePlatform />
      <CloudCore />
      <DataCore />
      <OrbitRing color="#22d3ee" position={[0, -0.35, 0]} scale={1.22} />
      <OrbitRing color="#a78bfa" position={[0, -0.35, 0]} scale={1.56} />
      <FloatingNode color="#67e8f9" offset={0} radius={2.18} verticalOffset={0.9} />
      <FloatingNode color="#93c5fd" offset={2.1} radius={2.34} verticalOffset={0.68} />
      <FloatingNode color="#c4b5fd" offset={4.2} radius={1.96} verticalOffset={1.04} />
      <QuadraticBezierLine
        color="#22d3ee"
        end={[0, 1.18, 0.12]}
        lineWidth={1.6}
        mid={[-1.2, 1.4, -0.22]}
        opacity={0.7}
        start={[-2.12, -0.2, -0.62]}
        transparent
      />
      <QuadraticBezierLine
        color="#60a5fa"
        end={[0, 1.18, 0.12]}
        lineWidth={1.6}
        mid={[1.22, 1.42, -0.2]}
        opacity={0.7}
        start={[2.18, -0.1, -0.55]}
        transparent
      />
      <QuadraticBezierLine
        color="#a78bfa"
        end={[0, 0, 0.05]}
        lineWidth={1.4}
        mid={[0.32, -0.65, 0.45]}
        opacity={0.68}
        start={[0.16, -1.02, -0.82]}
        transparent
      />
    </group>
  );
}

export function HeroScene() {
  return (
    <div className="relative h-[440px] w-full overflow-hidden rounded-[30px] sm:h-[580px]">
      <Canvas
        camera={{ fov: 40, position: [0, 0.8, 8.3] }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
      >
        <color args={['#020617']} attach="background" />
        <fog args={['#020617', 7, 18]} attach="fog" />
        <ambientLight intensity={1.15} />
        <hemisphereLight args={['#7dd3fc', '#020617', 1.22]} />
        <spotLight angle={0.48} castShadow intensity={28} penumbra={1} position={[0, 8, 6]} />
        <pointLight color="#22d3ee" intensity={16} position={[-3, 2, 2]} />
        <pointLight color="#a78bfa" intensity={13} position={[3, 1, 3]} />
        <Grid
          args={[16, 10]}
          cellColor="#163056"
          cellSize={0.7}
          fadeDistance={18}
          fadeStrength={1}
          infiniteGrid
          position={[0, -2.2, 0]}
          sectionColor="#2dd4bf"
          sectionSize={2.4}
        />
        <SceneCluster />
        <Sparkles color="#67e8f9" count={110} opacity={0.82} scale={[9, 7, 6]} size={2.2} speed={0.55} />
      </Canvas>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.1),transparent_26%),radial-gradient(circle_at_bottom,rgba(96,165,250,0.12),transparent_30%)]" />
    </div>
  );
}
