var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry();
var material = new THREE.MeshBasicMaterial({
    color:0xf0ff00
});
var pyramid = new THREE.Mesh(geometry, material);
scene.add(pyramix);

camera.position.z = 5;

function animate() {
    requestAnimationFrame( animate );
    pyramix.rotation.x += 0.05;
pyramid.rotation.y += 0.05;
    renderer.render( scene, camera );
}
animate();
