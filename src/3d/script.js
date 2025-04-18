import '../style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'
import {Plane} from 'three'
// src/3d/script.js

import '../desktop/number_count.js';
import '../desktop/navbar.js';
import '../desktop/buttons.js';
import '../desktop/image_rendering.js';
import '../desktop/about.js';
import '../mobile/navbar-mobile.js';
import crossUrl from '../assets/star.png';
import backgroundUrl from '../assets/8.svg';


const loader = new THREE.TextureLoader()
const cross = loader.load(crossUrl);
const backgroundTexture = loader.load(backgroundUrl)
// Debug
const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Criar um plano para a imagem de fundo
const backgroundGeometry = new THREE.PlaneGeometry(10, 10); // Ajuste os valores conforme necessário
const backgroundMaterial = new THREE.MeshBasicMaterial({ 
    map: backgroundTexture, 
    side: THREE.DoubleSide,
    opacity: 0.4,
    transparent: true
});

// Criar o Mesh do plano
const backgroundMesh = new THREE.Mesh(backgroundGeometry, backgroundMaterial);

// Posicionar o plano um pouco atrás da cena
backgroundMesh.position.set(0, 0, -26.3); // Ajuste a posição no eixo Z




// Adicionar à cena
scene.add(backgroundMesh);
// Objects
const geometry = new THREE.TorusGeometry( .7, .2, 16, 100 );

const particlesGeometry = new THREE.BufferGeometry;
const particlesCnt = 5000;

const posArray = new Float32Array(particlesCnt * 3);

for (let i = 0; i < particlesCnt; i ++){
    posArray[i] = (Math.random() -0.5) * 5.5;
} 

particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3))


// Materials

const material = new THREE.PointsMaterial({
    size: 0.007, 
    color: 'gray'

})

const particlesMaterial = new THREE.PointsMaterial({
    size: 0.004, 
    map: cross,
    color: 'white',

})


// Mesh
const sphere = new THREE.Points(geometry,material)
const particlesMesh = new THREE.Points(particlesGeometry,particlesMaterial)
scene.add(sphere, particlesMesh)

// Lights

const pointLight = new THREE.PointLight(0xffffff, 0.1)
pointLight.position.x = 2
pointLight.position.y = 3
pointLight.position.z = 4
scene.add(pointLight)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 0
camera.position.y = 0
camera.position.z = 2
scene.add(camera)

// Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.setClearColor(new THREE.Color('#000000'))

// Mouse

document.addEventListener('mousemove', animateParticles)

let mouseX = 0;
let mouseY = 0;

function animateParticles(event){
    mouseY = event.clientY
    mouseX = event.clientX
}

/**
 * Animate
 */

const clock = new THREE.Clock()

const tick = () =>
{

    const elapsedTime = clock.getElapsedTime()

    // Update objects
    sphere.rotation.y = .5 * elapsedTime
    particlesMesh.rotation.y = -.1 * elapsedTime;
    backgroundMesh.rotation.y = .5 * elapsedTime; // Rotação no eixo Y
    

    if(mouseX > 0){
        particlesMesh.rotation.x = mouseY * (elapsedTime * 0.00007) 
        particlesMesh.rotation.y = mouseX * (elapsedTime * 0.00007) 
    }
    // Update Orbital Controls
    // controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()

