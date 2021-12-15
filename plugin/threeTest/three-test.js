const html = `
  <h1>test</h1>
    <div>
      <canvas class="webgl"></canvas>
    </div>
    <script id="three" src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.js"></script>
    <script>
      document.getElementById("three").addEventListener("load", function () {
        const sizes = {
          width: 200,
          height: 150
        }

        const canvas = document.querySelector('canvas.webgl')
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000);

        const renderer = new THREE.WebGLRenderer({ canvas: canvas });
        renderer.setSize(sizes.width, sizes.height);
        document.body.appendChild(renderer.domElement);

        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        camera.position.z = 5;

        const animate = function () {
          requestAnimationFrame(animate);

          cube.rotation.x += 0.01;
          cube.rotation.y += 0.01;

          renderer.render(scene, camera);
        };

        animate();
      })
      console.log("hello");
    </script>
`;

reearth.ui.show(html);
