import React, { useRef, useState, useEffect, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Html, useTexture, Stars } from '@react-three/drei';
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing';
import { orbitingSections, contactPoints } from '../data/portfolioData.jsx';
import * as THREE from 'three';

// --- Contact Icons ---
const ContactIcons = ({ isMobile }) => {
    const [hoveredIcon, setHoveredIcon] = useState(null);

    const containerStyles = {
        root: {
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
        },
        linkedin: {
            position: 'fixed',
            top: isMobile ? '-20rem' : '-25rem',
            right: isMobile ? '3rem' : '15rem',
            pointerEvents: 'auto',
        },
        github: {
            position: 'fixed',
            top: isMobile ? '-20rem' : '-25rem',
            left: isMobile ? '3rem' : '15rem',
            pointerEvents: 'auto',
        }
    };

    const getLinkStyle = (isHovered) => ({
        transition: 'all 300ms ease-in-out',
        color: isHovered ? '#FFFFFF' : '#00FFE5',
        transform: `scale(${isHovered ? 1.2 : 1})`,
        filter: 'drop-shadow(0 0 3px #00FFE5) drop-shadow(0 0 8px #00FFE5)'
    });

    const iconSize = isMobile ? { width: 24, height: 24 } : { width: 32, height: 32 };

    return (
        <Html>
            <div style={containerStyles.root}>
                <div style={containerStyles.linkedin}>
                    <a href={contactPoints[0].link} target="_blank" rel="noopener noreferrer" onPointerOver={() => setHoveredIcon('linkedin')} onPointerOut={() => setHoveredIcon(null)} style={getLinkStyle(hoveredIcon === 'linkedin')}>
                        {contactPoints[0].logo(iconSize)}
                    </a>
                </div>
                <div style={containerStyles.github}>
                    <a href={contactPoints[1].link} target="_blank" rel="noopener noreferrer" onPointerOver={() => setHoveredIcon('github')} onPointerOut={() => setHoveredIcon(null)} style={getLinkStyle(hoveredIcon === 'github')}>
                        {contactPoints[1].logo(iconSize)}
                    </a>
                </div>
            </div>
        </Html>
    );
};

// --- Orbiting Text (Navigation) ---
const OrbitingText = ({ section, onSectionSelect, radius, angle, speed, fontSize }) => {
    const textRef = useRef();
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        document.body.style.cursor = isHovered ? 'pointer' : 'auto';
    }, [isHovered]);

    useFrame((state) => {
        if (textRef.current) {
            const t = state.clock.getElapsedTime() * speed;
            textRef.current.position.set(
                radius * Math.cos(angle + t),
                0,
                radius * Math.sin(angle + t)
            );
            textRef.current.lookAt(state.camera.position);
        }
    });

    return (
        <Text
            ref={textRef}
            font="https://cdn.jsdelivr.net/gh/google/fonts@main/ofl/quantico/Quantico-Regular.ttf"
            fontSize={fontSize}
            color={isHovered ? '#FFFFFF' : '#00FFE5'}
            anchorX="center"
            anchorY="middle"
            onPointerOver={() => setIsHovered(true)}
            onPointerOut={() => setIsHovered(false)}
            onClick={() => onSectionSelect(section.id)}
        >
            {section.title}
            <meshStandardMaterial
                emissive={isHovered ? '#FFFFFF' : '#00FFE5'}
                emissiveIntensity={isHovered ? 1.5 : 0.5}
                metalness={0.8}
                roughness={0.5}
            />
        </Text>
    );
};

// --- Dotted Orbit Path Component ---
const OrbitPath = ({ radius }) => {
    const lineRef = useRef();

    useEffect(() => {
        if (lineRef.current) {
            lineRef.current.computeLineDistances();
        }
    }, [radius]);

    const points = useMemo(() => {
        const p = [];
        for (let i = 0; i <= 360; i += 5) {
            const angleRad = (i * Math.PI) / 180;
            p.push(new THREE.Vector3(radius * Math.cos(angleRad), 0, radius * Math.sin(angleRad)));
        }
        return new THREE.BufferGeometry().setFromPoints(p);
    }, [radius]);

    return (
        <line ref={lineRef} geometry={points}>
            <lineDashedMaterial color="#00FFE5" dashSize={0.15} gapSize={0.1} scale={1} transparent opacity={0.3} />
        </line>
    );
};

// --- Globe ---
const Globe = ({ scale }) => {
    const globeRef = useRef();
    const [continentMap, dataStreamMap] = useTexture(['/continent-map.png', '/data-stream.png']);

    useEffect(() => {
        if (continentMap) continentMap.anisotropy = 16;
        if (dataStreamMap) {
            dataStreamMap.anisotropy = 16;
            dataStreamMap.wrapS = dataStreamMap.wrapT = THREE.RepeatWrapping;
        }
    }, [continentMap, dataStreamMap]);

    useFrame((state, delta) => {
        if (globeRef.current) globeRef.current.rotation.y += delta * 0.05;
        if (dataStreamMap) {
            dataStreamMap.offset.x -= delta * 0.1;
            dataStreamMap.offset.y += delta * 0.05;
        }
    });

    return (
        <group ref={globeRef} scale={scale}>
            <mesh>
                <sphereGeometry args={[2.5, 200, 200]} />
                <meshStandardMaterial
                    color="#050816"
                    emissive="#00FFE5"
                    emissiveMap={continentMap}
                    map={dataStreamMap}
                    transparent={true}
                    opacity={0.8}
                    metalness={0.5}
                    roughness={0.7}
                />
            </mesh>
            <mesh>
                <sphereGeometry args={[2.51, 200, 200]} />
                <meshStandardMaterial
                    color="#00FFE5"
                    emissive="#00FFE5"
                    emissiveIntensity={0.3}
                    wireframe={true}
                    transparent
                    opacity={0.15}
                />
            </mesh>
        </group>
    );
};

// --- Scene Content ---
const SceneContent = ({ onSectionSelect, isMobile }) => {
    const orbitRadius = isMobile ? 3.2 : 4.0;
    const textFontSize = isMobile ? 0.4 : 0.5;
    const globeScale = isMobile ? 0.8 : 1.0;
    const angleStep = (2 * Math.PI) / orbitingSections.length;

    return (
        <>
            <Stars radius={100} depth={50} count={5000} factor={7} saturation={0} fade speed={1} />

            <ambientLight intensity={0.1} />
            <pointLight position={[10, 10, 10]} intensity={0.5} />
            <pointLight position={[-10, -5, -10]} color="#FFFFFF" intensity={1.5} />

            <Globe scale={globeScale} />
            <OrbitPath radius={orbitRadius} />

            {orbitingSections.map((section, index) => (
                <OrbitingText
                    key={section.id}
                    section={section}
                    onSectionSelect={onSectionSelect}
                    radius={orbitRadius}
                    angle={index * angleStep}
                    speed={0.2}
                    fontSize={textFontSize}
                />
            ))}

            <ContactIcons isMobile={isMobile} />

            <OrbitControls enableZoom={false} enablePan={false} autoRotate={true} autoRotateSpeed={-0.4} />

            <EffectComposer>
                <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} intensity={0.8} />
                <Vignette eskil={false} offset={0.1} darkness={0.5} />
            </EffectComposer>
        </>
    );
};

// --- Main Scene Component ---
const Scene = ({ onSectionSelect, isPanelVisible }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const sceneContainerStyle = {
        width: '100%',
        height: '100%',
        transition: 'all 500ms ease-in-out',
        pointerEvents: isPanelVisible ? 'none' : 'auto'
    };

    return (
        <div style={sceneContainerStyle}>
            <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
                <SceneContent onSectionSelect={onSectionSelect} isMobile={isMobile} />
            </Canvas>
        </div>
    );
};

export default Scene;

