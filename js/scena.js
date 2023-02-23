import * as THREE from "three";

// Создаем Сцену
const scene = new THREE.Scene();

//Создаем Камеру
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight
);

//Создаем Рендер
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//Создаем Куб
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
cube.position.set(0, 0, 0);
scene.add(cube);

//Настраиваем позицию камеры
camera.position.z = 5;

//Рендерим сцену
renderer.render(scene, camera);
