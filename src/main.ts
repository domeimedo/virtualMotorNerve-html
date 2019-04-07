import * as THREE from 'three';
import { VRM, VRMLoader } from 'three-vrm';
import {MEDVRMInterpreter, MEDVRMPrototype, MEDVRMController} from './VirtualMotorNerve'
import { VMNMessage } from './foundation/VMNMessage_pb';
import { Vector3 } from './foundation/Vector3_pb';

declare function require(x: string): any;
const THREE_OrbitControls = require("three-orbitcontrols");

window.addEventListener('load', () => {
    var camera, scene, controls, renderer;

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.25, 20);
    camera.position.set(0, 1.6, -2.2);

    controls = new THREE_OrbitControls(camera);
    controls.target.set(0, 0.9, 0);
    controls.update();

    const directionalLight = new THREE.DirectionalLight(0xffffff);
    directionalLight.position.set(0, 1, -2);
    scene.add(directionalLight);

    const vrmLoader = new VRMLoader();
    vrmLoader.load('Sample.vrm',
        (vrm: VRM) => {
            console.log(vrm);
            let interpreter = new MEDVRMInterpreter();
            let proto = interpreter.prototypeFromVrm(vrm);
            scene.add(vrm.scene);
        },
        (progress: ProgressEvent) => {
            console.log(progress.loaded +"/"+ progress.total);
        },
        (error: ErrorEvent) => {
            console.error(error);
        }
    );     
    renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.gammaOutput = true;
    document.body.appendChild(renderer.domElement);

    let onWindowResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onWindowResize);


    let animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

});