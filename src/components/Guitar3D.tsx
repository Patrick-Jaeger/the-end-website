import { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

// Simple 3D Guitar Component
const Guitar = ({ scrollY }: { scrollY: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    if (meshRef.current) {
      // Rotate based on scroll position
      meshRef.current.rotation.y = scrollY * 0.001;
      meshRef.current.rotation.x = Math.sin(scrollY * 0.002) * 0.1;
      meshRef.current.position.y = Math.sin(scrollY * 0.003) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]} rotation={[0.2, 0, 0]}>
      {/* Guitar Body */}
      <group>
        {/* Main body */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[0.8, 2, 0.2]} />
          <meshStandardMaterial color="#1a1a2e" metalness={0.8} roughness={0.2} />
        </mesh>
        
        {/* Neck */}
        <mesh position={[0, 1.5, 0]}>
          <boxGeometry args={[0.15, 1.5, 0.1]} />
          <meshStandardMaterial color="#8B4513" />
        </mesh>
        
        {/* Headstock */}
        <mesh position={[0, 2.8, 0]}>
          <boxGeometry args={[0.25, 0.6, 0.08]} />
          <meshStandardMaterial color="#654321" />
        </mesh>
        
        {/* Strings */}
        {Array.from({ length: 6 }, (_, i) => (
          <mesh key={i} position={[-0.075 + i * 0.03, 1.5, 0.05]}>
            <cylinderGeometry args={[0.002, 0.002, 3]} />
            <meshStandardMaterial color="#C0C0C0" metalness={1} roughness={0} />
          </mesh>
        ))}
        
        {/* Blue accent stripe */}
        <mesh position={[0, 0, 0.11]}>
          <boxGeometry args={[0.1, 1.8, 0.01]} />
          <meshStandardMaterial color="#3B82F6" emissive="#1E40AF" emissiveIntensity={0.3} />
        </mesh>
      </group>
    </mesh>
  );
};

const Guitar3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      scrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed top-1/2 right-8 w-48 h-64 pointer-events-none z-10"
      style={{ transform: "translateY(-50%)" }}
    >
      <Canvas camera={{ position: [3, 2, 3], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#3B82F6" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#FFFFFF" />
        <Guitar scrollY={scrollY.current} />
      </Canvas>
    </div>
  );
};

export default Guitar3D;