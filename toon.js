//phong shading

import * as THREE from 'https://cdn.skypack.dev/three@0.136';
import { obj, scene } from './app.js';
import { loadShaders, loadModel } from './loaders.js';

// obj.geometry = new THREE.SphereGeometry(1, 32, 16);

var uniforms = {
    Color1: { value: new THREE.Vector3(227/255, 217/255, 135/255) },
    Color2: { value: new THREE.Vector3(71/255, 76/255, 79/255) },
    Color3: { value: new THREE.Vector3(11/255, 14/255, 19/255) },
    LightIntensity: { value: new THREE.Vector4(0.5, 0.5, 0.5, 1.0) },
    LightPosition: { value: new THREE.Vector4(-1000.0, 1000.0, 1000.0, 1.0) },
    Shininess: { value: 200.0 }
};

loadShaders('shaders/toonVertShader.c', 'shaders/toonFragShader.c', uniforms,
    function(mat) {
        loadModel('resources/pengu.glb', mat, function(model) {
            scene.add(model);
        });
});