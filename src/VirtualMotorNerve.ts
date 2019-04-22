import * as THREE from 'three';
import { VRM, VRMLoader } from 'three-vrm';
import {MEDVRMInterpreter} from './VRMModule'

declare function require(x: string): any;
const THREE_OrbitControls = require("three-orbitcontrols");

export interface WindowInterface {
    innerWidth: number
    innerHeight: number
    devicePixelRatio: number
}
export interface WindowDelegate {
    windowDidResize(): void
    windowDidLoad(): void
}

export class VirtualMotorNerveHTML implements WindowDelegate {
    private window: WindowInterface
    private camera: THREE.PerspectiveCamera
    private scene: THREE.Scene
    private controls: any
    private renderer: THREE.WebGLRenderer
    private loadCallback: (domElement: any)=>void

    constructor (window: WindowInterface, loadCallback: (domElement: any)=> void) {
        this.window = window
        this.loadCallback = loadCallback
    }

    public windowDidResize = () => {
        this.camera.aspect = this.window.innerWidth / this.window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.window.innerWidth, this.window.innerHeight);
    }
    public windowDidLoad = () => {
        this.scene = new THREE.Scene()
        this.camera = new THREE.PerspectiveCamera(45, this.window.innerWidth / this.window.innerHeight, 0.25, 20)
        this.camera.position.set(0, 1.6, -2.2)

        this.controls = new THREE_OrbitControls(this.camera)
        this.controls.target.set(0, 0.9, 0)
        this.controls.update()

        const directionalLight = new THREE.DirectionalLight(0xffffff)
        directionalLight.position.set(0, 1, -2)
        this.scene.add(directionalLight)

        const vrmLoader = new VRMLoader();
        vrmLoader.load('Sample.vrm',
            (vrm: VRM) => {
                console.log(vrm);
                let interpreter = new MEDVRMInterpreter();
                let proto = interpreter.prototypeFromVrm(vrm);
                this.scene.add(vrm.scene);
            },
            (progress: ProgressEvent) => {
                console.log(progress.loaded +"/"+ progress.total);
            },
            (error: ErrorEvent) => {
                console.error(error);
            }
        );  

        this.renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
        this.renderer.setPixelRatio(this.window.devicePixelRatio);
        this.renderer.setSize(this.window.innerWidth, this.window.innerHeight);
        this.renderer.gammaOutput = true;
        this.loadCallback(this.renderer.domElement)

        this.animate()
    }
    private animate = () => {
        requestAnimationFrame(this.animate);
        this.renderer.render(this.scene, this.camera);
    }
}