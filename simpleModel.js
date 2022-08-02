//phong shading

import * as THREE from 'https://cdn.skypack.dev/three@0.136';
import { scene } from './app.js';
import { loadShaders, loadModel } from './loaders.js';

var uniforms = {
    Ka: { value: new THREE.Vector3(0.3, 0.5, 0.3) },
    Kd: { value: new THREE.Vector3(0.9, 0.5, 0.3) },
    Ks: { value: new THREE.Vector3(0.8, 0.8, 0.8) },
    LightIntensity: { value: new THREE.Vector4(0.5, 0.5, 0.5, 1.0) },
    LightPosition: { value: new THREE.Vector4(1000.0, 2000.0, 0.0, 1.0) },
    Shininess: { value: 200.0 }
};

loadShaders('shaders/phongVertShader.c', 'shaders/phongFragShader.c', uniforms,
    function(mat) {
        loadModel('resources/lighthouse.glb', mat, function(model) {
            scene.add(model);
        });
});
