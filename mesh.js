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

  // Create WebGL renderer, camera and a scene.
  const renderer = new THREE.WebGLRenderer();
  const camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
  const scene = new THREE.Scene();

  // Add the camera to the scene.
  scene.add(camera);

  // Start the renderer.
  renderer.setSize(WIDTH, HEIGHT);

  // Attach the renderer-supplied DOM element.
  container.appendChild(renderer.domElement);

  // create a point light
  const pointLight = new THREE.PointLight(0xFFFFFF);

  // set its position
  pointLight.position.x = 10;
  pointLight.position.y = 50;
  pointLight.position.z = 130;

  // add to the scene
  scene.add(pointLight);

  // Create a cube with width, height and depth set to 1,
  // and set its material to be a mesh of lambert's type, with color white.
  const cube = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshLambertMaterial({color: 0xFFFFFF})
  );

  scene.add(cube);

  function update () {
    // draw scene
    renderer.render(scene, camera);

    // rotate the cube each frame
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    requestAnimationFrame(update);
  }

  // schedule the first frame.
  requestAnimationFrame(update);
});
