var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
camera.position.set( 0, 0, 100 );
camera.lookAt( 0, 0, 0 );

var scene = new THREE.Scene();
var material = new THREE.LineBasicMaterial( { color: 0x00ff00 } );
var points = [];
points.push( new THREE.Vector3( - 25, 10, 4 ) );
points.push( new THREE.Vector3( 1, 25, 2 ) );
points.push( new THREE.Vector3( 30, -5, 4 ) );
points.push( new THREE.Vector3( 22, -10, -15 ));
points.push( new THREE.Vector3( 50, -10, -10 ));

var geometry = new THREE.BufferGeometry().setFromPoints( points );
var line = new THREE.Line( geometry, material );
scene.add( line );
renderer.render( scene, camera );