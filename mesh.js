const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');

// Use canvas to draw text here.

const texture = new THREE.Texture(canvas);
texture.needsUpdate = true;



const geometry = new THREE.PlaneGeometry(window.innerWidth, window.innerHeight, 32, 32); // The last two parameters decide the detail level of your mesh.



const material = new THREE.MeshPhongMaterial({
  map: texture,
  side: THREE.DoubleSide,
  transparent: true
});

const plane = new THREE.Mesh(geometry, material);



window.addEventListener('mousemove', (event) => {
  const x = (event.clientX / window.innerWidth) * 2 - 1;
  const y = -(event.clientY / window.innerHeight) * 2 + 1;
  const vector = new THREE.Vector3(x, y, 0.5);
  vector.unproject(camera);
  const dir = vector.sub(camera.position).normalize();
  const distance = -camera.position.z / dir.z;
  const pos = camera.position.clone().add(dir.multiplyScalar(distance));
  
  // Update the geometry positions here.
  plane.geometry.verticesNeedUpdate = true;
});
