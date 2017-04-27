import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as THREE from 'three/build/three.js';

@Component({
  selector: 'page-tour',
  templateUrl: 'tour.html',
})

export class Tour {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tour');

    var manualControl = false;
    var longitude = 0;
    var latitude = 0;
    var savedX;
    var savedY;
    var savedLongitude;
    var savedLatitude;

    var scene = new THREE.Scene();
    var renderer = new THREE.WebGLRenderer();

    renderer.setSize( window.innerWidth, window.innerHeight );
    document.getElementById("row-tour").appendChild( renderer.domElement );

    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1000 );
    camera.target = new THREE.Vector3(0, 0, 0);

    var sphere = new THREE.SphereGeometry(100, 100, 40);
    sphere.applyMatrix(new THREE.Matrix4().makeScale(-1, 1, 1));

    var sphereMaterial = new THREE.MeshBasicMaterial();
    sphereMaterial.map = THREE.ImageUtils.loadTexture("../../assets/img/03.jpg");

    var sphereMesh = new THREE.Mesh(sphere, sphereMaterial);
    scene.add(sphereMesh);

    // listeners
    document.getElementById("row-tour").addEventListener("mousedown", onDocumentMouseDown, false);
    //document.getElementById("row-tour").addEventListener("mousemove", onDocumentMouseMove, false);
    document.getElementById("row-tour").addEventListener("mouseup", onDocumentMouseUp, false);

    render();

    function render() {
      requestAnimationFrame( render );

      // limiting latitude from -85 to 85 (cannot point to the sky or under your feet)
      latitude = Math.max(-85, Math.min(85, latitude));

      // moving the camera according to current latitude (vertical movement) and longitude (horizontal movement)
      camera.target.x = 500 * Math.sin(THREE.Math.degToRad(90 - latitude)) * Math.cos(THREE.Math.degToRad(longitude));
      camera.target.y = 500 * Math.cos(THREE.Math.degToRad(90 - latitude));
      camera.target.z = 500 * Math.sin(THREE.Math.degToRad(90 - latitude)) * Math.sin(THREE.Math.degToRad(longitude));
      camera.lookAt(camera.target);

      renderer.render(scene, camera);
    }
    // when the mouse is pressed, we switch to manual control and save current coordinates
    function onDocumentMouseDown(event){

      event.preventDefault();
      savedX = event.clientX;
      savedY = event.clientY;
      savedLongitude = longitude;
      savedLatitude = latitude;

    }

    // // when the mouse moves, if in manual we adjust coordinates
    // function onDocumentMouseMove(event){
    //
    //     longitude = (savedX - event.clientX) * 0.1 + savedLongitude;
    //     latitude = (event.clientY - savedY) * 0.1 + savedLatitude;
    //
    // }

    // when the mouse is released, we turn manual control off
    function onDocumentMouseUp(event){

    }

  }
}
