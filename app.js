
import * as THREE from 'https://cdn.skypack.dev/three@0.136';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.136/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.136/examples/jsm/controls/OrbitControls';

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

function loadModel(modelPath, material) {
    const modelLoader = new GLTFLoader();
    modelLoader.load(modelPath, function (gltf) {
        gltf.scene.traverse(function (child) {
            if ((child).isMesh) {
                const m = child;
                m.material = material;
            }
        })
        scene.add(gltf.scene);
    }, undefined, function (error) {
        console.error(error);
    });    
}

// ------------------------------------------------
// BASIC SETUP
// ------------------------------------------------

// Create an empty scene
var scene = new THREE.Scene();

// Create a basic perspective camera
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 4;

// Create a renderer with Antialiasing
// var renderer = new THREE.WebGLRenderer({antialias:true, preserveDrawingBuffer: true});
var renderer = new THREE.WebGLRenderer();

// Configure renderer clear color
renderer.setClearColor("#000000");
renderer.autoClearColor = false;

// Configure renderer size
renderer.setSize(window.innerWidth, window.innerHeight);

// Append Renderer to DOM
document.body.appendChild(renderer.domElement);

// Create a Cube Mesh 
var geometry = new THREE.BoxGeometry( 1, 1, 1 );
// var geometry = new THREE.SphereGeometry(1, 32, 16);

var cube = new THREE.Mesh(geometry);
scene.add(cube);

loadShaders('shaders/basicVertShader.c', 'shaders/basicFragShader.c', {}, function (mat) {
    cube.material = mat;
});


// const controls = new OrbitControls(camera, renderer.domElement);


// // instantiate a loader
// const texLoader = new THREE.TextureLoader();
// // load a resource
// texLoader.load(
// 	// resource URL
// 	'resources/testPattern.png',
// 	// onLoad callback
// 	function ( texture ) {
//         var uniforms = {
//             tex: { type: 't', value: texture }
//         };

//         loadShaders('shaders/textureVertShader.c', 'shaders/textureFragShader.c', uniforms,
//         // loadShaders('shaders/basicVertShader.c', 'shaders/basicFragShader.c', uniforms,
//             function(mat) {
//                 cube.material = mat;
//                 loadModel('resources/lighthouse.glb', mat);
//         });
// 	},

// 	// onProgress callback currently not supported
// 	undefined,

// 	// onError callback
// 	function ( err ) {
// 		console.error( 'An error happened.' );
// 	}
// );

// var uniforms = {
//     Ka: { value: new THREE.Vector3(0.3, 0.5, 0.3) },
//     Kd: { value: new THREE.Vector3(0.9, 0.5, 0.3) },
//     Ks: { value: new THREE.Vector3(0.8, 0.8, 0.8) },
//     LightIntensity: { value: new THREE.Vector4(0.5, 0.5, 0.5, 1.0) },
//     LightPosition: { value: new THREE.Vector4(1000.0, 2000.0, 0.0, 1.0) },
//     Shininess: { value: 200.0 }
// };

// loadShaders('shaders/phongVertShader.c', 'shaders/phongFragShader.c', uniforms,
//     function(mat) {
//         cube.material = mat;
//         loadModel('resources/lighthouse.glb', mat);
// });





// Render Loop
var render = function () {
    requestAnimationFrame(render);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    // Render the scene
    renderer.render(scene, camera);
};

render();