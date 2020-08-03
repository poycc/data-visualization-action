import React, { useCallback, useRef } from 'react';
import * as THREE from 'three';

const Index: React.FC = () => {
  const { useEffect } = React;
  const threeRef = useRef<HTMLDivElement>(null);

  const draw = useCallback(() => {
    if (threeRef.current) {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / (window.innerHeight - 76),
        1,
        500,
      );
      camera.position.set(0, 0, 100);
      camera.lookAt(0, 0, 0);
      const material = new THREE.LineBasicMaterial({ color: 0x00ff00 });

      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight - 80);

      threeRef.current.appendChild(renderer.domElement);

      const points = [];
      points.push(new THREE.Vector3(-10, 0, 0));
      points.push(new THREE.Vector3(0, 10, 0));
      points.push(new THREE.Vector3(20, 0, 0));

      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(geometry, material);

      scene.add(line);
      renderer.render(scene, camera);
    }
  }, []);

  useEffect(() => {
    draw();
  }, [draw]);

  return <div ref={threeRef} />;
};

export default Index;
