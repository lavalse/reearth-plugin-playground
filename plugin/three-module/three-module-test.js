const html = `
  <h1>test</h1>
  <div>
    <canvas class="webgl"></canvas>
  </div>
  <div>
    <button id="button">this is a button</button>
  </div>
  <script type="module">
    import * as THREE from 'https://cdn.skypack.dev/three@0.135.0';
    import { OrbitControls } from 'https://cdn.skypack.dev/three@0.135.0/examples/jsm/controls/OrbitControls.js';
    import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.135.0/examples/jsm/loaders/GLTFLoader.js';

    console.log(THREE);
    const sizes = {
      width: 200,
      height: 150
    }
    const canvas = document.querySelector('canvas.webgl')
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000);

    const controls = new OrbitControls(camera, canvas);
    // controls.target.y = 2

    const renderer = new THREE.WebGLRenderer({ canvas: canvas });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setClearColor( 0xffffff, 0);
    document.body.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);

    const gltfLoader = new GLTFLoader();

    camera.position.z = 8;

    const animate = function () {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.00;
      cube.rotation.y += 0.00;

      controls.update()

      renderer.render(scene, camera);
    };

    animate();
    

    const cb = (widget) => {
      console.log(widget.image);
      
      gltfLoader.load(widget.image, (gltf) => {
        console.log(gltf);
        scene.add(gltf.scene)
      })

    };

    addEventListener("message", e => {
      if (e.source !== parent) return;
      cb(e.data);
    });
    

    cb(${JSON.stringify(reearth.widget)});

  </script>
`;

reearth.ui.show(html);
reearth.on("update", send);
send();

function send() {
  if (reearth.widget?.property?.default) {
    reearth.ui.postMessage(reearth.widget.property.default);
  }
}
