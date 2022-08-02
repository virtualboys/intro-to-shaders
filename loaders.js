
import * as THREE from 'https://cdn.skypack.dev/three@0.136';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.136/examples/jsm/loaders/GLTFLoader.js';

function loadShaders(vertShaderPath, fragShaderPath, uniforms, onComplete) {
    var loader = new THREE.FileLoader();
    loader.load(vertShaderPath, function (vData) {
        var vShader = vData;
        loader.load(fragShaderPath, function (fData) {
            var fShader = fData;
            var shaderMaterial = new THREE.ShaderMaterial({
                uniforms: uniforms,
                vertexShader: vShader,
                fragmentShader: fShader
            });

            onComplete(shaderMaterial);
        });
    });
}

function loadModel(modelPath, material, onComplete) {
    const modelLoader = new GLTFLoader();
    modelLoader.load(modelPath, function (gltf) {
        gltf.scene.traverse(function (child) {
            if ((child).isMesh) {
                const m = child;
                m.material = material;
            }
        })
        onComplete(gltf.scene);
    }, undefined, function (error) {
        console.error(error);
    });    
}

export { loadShaders, loadModel };