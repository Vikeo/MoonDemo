//import "./style.css";

import * as THREE from "https://unpkg.com/three@0.127.0/build/three.module.js";
import { OrbitControls } from "https://unpkg.com/three@0.127.0/examples/jsm/controls/OrbitControls.js";
// import { SplineCurve } from "three";
// import { randFloatSpread } from "three/src/math/MathUtils";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene, camera);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight);

const lightHelper = new THREE.PointLightHelper(pointLight);
const gridHelper = new THREE.GridHelper(200, 50);
//scene.add(lightHelper, gridHelper);

const controls = new OrbitControls(camera, renderer.domElement);

function addStar() {
  const geometry = new THREE.SphereGeometry(0.015, 24, 24);
  const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x, y, z);
  scene.add(star);
}

Array(500).fill().forEach(addStar);

const moonTexture = new THREE.TextureLoader().load("moon.jpg");
const moonNormalTexture = new THREE.TextureLoader().load("moonnormal.jpg");

const moon = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: moonTexture,
    normalMap: moonNormalTexture,
  })
);

scene.add(moon);

moon.position.z = -10;
moon.position.x = -10;

//function moveCamera() {
//const t = document.body.getBoundingClientRect().top;
// moon.rotation.x += 0.05;
// moon.rotation.y += 0.075;
// moon.rotation.z += 0.05;
// camera.position.x = t * -0.01;
// camera.position.y = t * -0.0002;
// camera.position.z = t * -0.0002;
//}

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

var t = 0;
function animate() {
  requestAnimationFrame(animate);
  t += 0.001;

  moon.position.x = -33 * Math.cos(t) + 0;
  moon.position.z = -33 * Math.sin(t) + 0;
  moon.position.y = -20 * Math.cos(t) + 0;

  moon.rotation.y -= 0.001;
  moon.rotation.x += 0.0005;

  controls.update();

  renderer.render(scene, camera);
}

animate();
