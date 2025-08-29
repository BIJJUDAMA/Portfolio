import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

//Animated Starfield
const Starfield = () => {
    return (
        <Canvas camera={{ position: [0, 0, 1] }}>
            <color attach="background" args={['#050816']} />
            <Stars radius={100} depth={50} count={5000} factor={7} saturation={0} fade speed={1} />
        </Canvas>
    );
};

export default Starfield;
