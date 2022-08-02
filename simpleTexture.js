// simple texture shader

import * as THREE from 'https://cdn.skypack.dev/three@0.136';
import { obj, scene } from './app.js';
import { loadShaders } from './loaders.js';

obj.geometry = new THREE.SphereGeometry(1, 32, 16);

// instantiate a loader
const texLoader = new THREE.TextureLoader();
// load a resource
texLoader.load(
	// resource URL
	'resources/testPattern.png',
	// onLoad callback
	function ( texture ) {
        var uniforms = {
            tex: { type: 't', value: texture }
        };

        loadShaders('shaders/textureVertShader.c', 'shaders/textureFragShader.c', uniforms,
            function(mat) {
                obj.material = mat;
        });
	},

	// onProgress callback currently not supported
	undefined,

	// onError callback
	function ( err ) {
		console.error( 'An error happened.' );
	}
);