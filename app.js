
import * as THREE from 'https://cdn.skypack.dev/three@0.136';

// ------------------------------------------------
// BASIC SETUP
// ------------------------------------------------

// Create an empty scene
var scene = new THREE.Scene();

// Create a basic perspective camera
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 4;

// Create a renderer with Antialiasing
var renderer = new THREE.WebGLRenderer();

// Configure renderer clear color
renderer.setClearColor("#000000");

// var renderer = new THREE.WebGLRenderer({antialias:true, preserveDrawingBuffer: true});
// renderer.autoClearColor = false;

// Configure renderer size
renderer.setSize(window.innerWidth, window.innerHeight);

// Append Renderer to DOM
document.body.appendChild(renderer.domElement);

var obj = new THREE.Mesh();
scene.add(obj);

// Render Loop
var render = function () {
    requestAnimationFrame(render);

    if(obj) {
        obj.rotation.x += 0.01;
        obj.rotation.y += 0.01;
    }

    // Render the scene
    renderer.render(scene, camera);
};

render();

export { obj, scene, camera, renderer };