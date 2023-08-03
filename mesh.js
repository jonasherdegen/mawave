document.addEventListener('DOMContentLoaded', (event) => {
  // Set the scene size.
  const WIDTH = window.innerWidth,
  HEIGHT = window.innerHeight;

  // Set camera attributes.
  const VIEW_ANGLE = 45,
  ASPECT = WIDTH / HEIGHT,
  NEAR = 0.1,
  FAR = 10000;

  // Get the WebGL holder.
  const container = document.querySelector('#WebGL-output');

  // Create WebGL renderer, camera, scene and light.
  const renderer = new THREE.WebGLRenderer({antialias: true}); // Antialiasing for smoother edges
  renderer.setClearColor("#000000"); // Set background color
  const camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
  const scene = new THREE.Scene();
  scene.add(camera);

  // Add colored point light.
  const pointLight = new THREE.PointLight(0xFF0040, 2, 50); // Pink light
  pointLight.position.set(10, 10, 10);
  scene.add(pointLight);

  // Create colored cube.
  const cubeGeometry = new THREE.BoxGeometry(2, 2, 2);
  const cubeMaterial = new THREE.MeshLambertMaterial({ color: Math.random() * 0xFFFFFF });
  const cube = new THREE.Mesh( cubeGeometry, cubeMaterial);
  cube.position.set(0, 0, 0);
  scene.add(cube);

  // Set renderer size and append to the container.
  renderer.setSize(WIDTH, HEIGHT);
  container.appendChild(renderer.domElement);

  camera.position.z = 5;

  // Function to update each frame.
  function update () {
    // Rotate cube
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    // Render scene with camera
    renderer.render(scene, camera);

    // Continue animation loop
    requestAnimationFrame(update);
  }

  // Schedule the first frame.
  requestAnimationFrame(update);
});
