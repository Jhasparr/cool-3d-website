'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Robot_1 } from '../models/robot-1'

export default function Scene_1() {
  return (
    <div className='w-full h-full'>
    <Canvas camera={{ position: [3, 2, 5], fov: 65 }}>
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} />

      <Robot_1 scale={0.6} />

      <OrbitControls />
    </Canvas>
    </div>
  )
}