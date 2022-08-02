// simple solid color shader
import * as THREE from 'https://cdn.skypack.dev/three@0.136';
import { obj, scene } from './app.js';
import { loadShaders } from './loaders.js';

// Create a Cube Mesh 
var geometry = new THREE.BoxGeometry( 1, 1, 1 );

// obj.mesh = new THREE.Mesh(geometry);
obj.geometry = geometry;

loadShaders('shaders/basicVertShader.c', 'shaders/basicFragShader.c', {}, function (mat) {
    obj.material = mat;
});
