import React, { useMemo, useRef } from "react";
import * as THREE from 'three'
import { useFrame } from "react-three-fiber";
function Stars(){
    const meshRef = useRef<THREE.Mesh>(null)
    useFrame(()=>{
        if (meshRef.current) {
          meshRef.current.rotation.z += 0.005; // Góc quay x
        }
      })
      const points = useMemo(() => {
        const vertices = [];
        const color = new THREE.Color();
        const colorsArray = [];
        const numSpirals = 6; // Số hình xoắn ốc
        const segments = 20000;

        for (let j = 0; j < numSpirals; j++) {
          for (let i = 0; i < segments; i++) {
            const t = i / (segments - 1);
            const x1 = Math.cos(2 * Math.PI/j*24 * t) * t * 2;
            const y1 = Math.sin(2 * Math.PI/j*24 * t) * t * 2;
            const z1 = Math.random() * 0.25 - 0.1; // Thay đổi tùy ý
            const distanceFromCenter = Math.sqrt(x1 * x1 + y1 * y1); // Khoảng cách từ tâm
            const density = 1 - Math.pow(distanceFromCenter, 2); // Điều chỉnh độ dày
        
            const noiseX = (Math.random() - 0.5) * 0.5;
            const noiseY = (Math.random() - 0.5) * 0.5;
            const noiseZ = (Math.random() - 0.5) * 0.5;
        
            const newX = (x1 + noiseX) * density; // Đặt cách nhau theo trục x
            const newY = (y1 + noiseY) * density;
            const newZ = (z1 + noiseZ) * density;
            if (distanceFromCenter < 0.5) {
              color.setRGB(1, 1, 2); // Màu cam sáng
            } else if (distanceFromCenter < 1.7) {
              color.setRGB(0, 0, 3); // Xanh
            }else if (distanceFromCenter < 1.8) {
              color.setRGB(0.2, 0, 2); // Xanh 
            }else {
              color.setRGB(0.5, 0, 1); // Tím nhạt
            }
    
            colorsArray.push(color.r, color.g, color.b);
            vertices.push(newX, newY, newZ);
          }
        }

        return {points:new THREE.BufferAttribute(new Float32Array(vertices), 3),colors:new Float32Array(colorsArray)}
      }, []);
    return (
        <mesh ref={meshRef} rotation={[Math.PI / 2, Math.PI / 12, 0]} position={[0, 1, 0]}>
        <points>
          <bufferGeometry >
            <bufferAttribute attach={"attributes-position"} {...points.points} />
            <bufferAttribute attach={'attributes-color'} array={points.colors} itemSize={3} />
          </bufferGeometry>
          <pointsMaterial vertexColors={true} size={0.03}/> {/* Điều chỉnh kích thước điểm */}
        </points>
      </mesh>
    )
}
export default Stars;