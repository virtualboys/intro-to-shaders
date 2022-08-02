
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.136/examples/jsm/controls/OrbitControls';
import { renderer, camera } from './app.js';

// add orbit controls
const controls = new OrbitControls(camera, renderer.domElement);