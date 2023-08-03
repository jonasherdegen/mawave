const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10);
      camera.position.z = 1;

      const scene = new THREE.Scene();
      const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
      const material = new THREE.MeshNormalMaterial();
      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setAnimationLoop(animation);

      // Instead of appending renderer to body, select the div and append it there.
      const container = document.querySelector('#WebGL-output');
      container.appendChild(renderer.domElement);

      function animation(time) {
        mesh.rotation.x = time / 2000;
        mesh.rotation.y = time / 1000;

        renderer.render(scene, camera);
      }
