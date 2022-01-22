//import "./style.css";

import * as THREE from "https://unpkg.com/three@0.127.0/build/three.module.js";
import { OrbitControls } from "https://unpkg.com/three@0.127.0/examples/jsm/controls/OrbitControls.js";
// import { SplineCurve } from "three";
// import { randFloatSpread } from "three/src/math/MathUtils";

//Scene
const scene = new THREE.Scene();

//Camera
const camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

//Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
});

//Controls
//const controls = new OrbitControls(camera, renderer.domElement);

//Auto resize renderer
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

//Lights
const pointLight = new THREE.PointLight(0xffffff);
const ambientLight = new THREE.AmbientLight(0xffffff);

//Helpers
// const lightHelper = new THREE.PointLightHelper(pointLight);
// const gridHelper = new THREE.GridHelper(200, 50);
// const axesHelper = new THREE.AxesHelper(5);
// scene.add(axesHelper);
// scene.add(lightHelper);
// scene.add(gridHelper);

//Objects
var starcount = 0;

const moonTexture = new THREE.TextureLoader().load("moon.jpg");
const moonNormalTexture = new THREE.TextureLoader().load("moonnormal.jpg");
const moon = new THREE.Mesh(
  new THREE.SphereGeometry(0.8, 32, 32),
  new THREE.MeshStandardMaterial({
    map: moonTexture,
    normalMap: moonNormalTexture,
  })
);

renderer.render(scene, camera);

//Add objects
Array(2500).fill().forEach(addStar);
scene.add(moon);
scene.add(pointLight);

//Positions
camera.position.setZ(3);
pointLight.position.set(40, 20, 10);
moon.rotation.y = 100;
moon.rotation.x = 100;
moon.rotation.z = 500;

//Functions

var t = 7.285;
function animate() {
  requestAnimationFrame(animate);
  t += 0.0005;

  moon.position.x = -11 * Math.cos(t) + 0;
  moon.position.z = -11 * Math.sin(t) + 0;
  moon.position.y = -11 * Math.cos(t) + 0;

  moon.rotation.y -= 0.0007;
  moon.rotation.x += 0.0005;

  //controls.update();

  renderer.render(scene, camera);
}

function addStar() {
  var radius = THREE.MathUtils.randFloat(0.0015, 0.009);

  if (starcount < 100) {
    radius = THREE.MathUtils.randFloat(0.015, 0.03);
  }

  // //3d-star
  // const geometry = new THREE.SphereGeometry(radius, 8, 4);
  // const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
  // const star = new THREE.Mesh(geometry, material);

  //Make "2d-star" object
  const geometry = new THREE.CircleGeometry(radius, 8); //(radius, segments)
  const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);

  // const [x, y, z] = Array(3)
  //   .fill()
  //   .map(() => THREE.MathUtils.randFloatSpread(100));

  const x = THREE.MathUtils.randFloatSpread(50);
  const y = THREE.MathUtils.randFloatSpread(25);
  const z = THREE.MathUtils.randFloat(-12, -12);

  star.position.set(x, y, z);
  scene.add(star);
  starcount++;
}

//function moveCamera() {
//const t = document.body.getBoundingClientRect().top;
// moon.rotation.x += 0.05;
// moon.rotation.y += 0.075;
// moon.rotation.z += 0.05;
// camera.position.x = t * -0.01;
// camera.position.y = t * -0.0002;
// camera.position.z = t * -0.0002;
//}

animate();
