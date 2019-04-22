import { VRM, VRMHumanBone, VRMBlendShapeGroup, VRMVector3 } from 'three-vrm';
import * as THREE from 'three';
import SerialGenerator from './SerialGenerator';

import {Prototype} from './foundation/Prototype_pb'
import {ScalarMotionPrototype} from './foundation/ScalarMotionPrototype_pb'
import {Vector3MotionPrototype} from './foundation/Vector3MotionPrototype_pb'
import {MotionPrototype} from './foundation/MotionPrototype_pb'
import { Vector3 } from './foundation/Vector3_pb';
import { VMNMessage } from './foundation/VMNMessage_pb';

export class MEDVRMInterpreter {
    public prototypeFromVrm(vrm : VRM) : MEDVRMPrototype {
        let serialGen = new GlobalSerial();
        var bonesMap : {[index: number]: THREE.Object3D} = {};
        var shapesMap : {[index: number]: number} = {};
        var motions : Array<MotionPrototype> = [];
        
        vrm.humanoid.humanBones.forEach((humanBone: VRMHumanBone, index: number) => {
            let boneMotion = new MotionPrototype();
            boneMotion.setName(humanBone.bone);

            let serialId = serialGen.getSerialId();
            boneMotion.setSerialid(serialId);

            let vectorMotion = this.vector3MotionPrototypeFromVrmHumanBone(humanBone);
            boneMotion.setVector3(vectorMotion);

            motions.push(boneMotion);

            let node = vrm.getNode(humanBone.node);
            bonesMap[serialId] = node;
        });
        vrm.blendShapeMaster.blendShapeGroups.forEach((group : VRMBlendShapeGroup, index: number) => {
            let shapeMotion = new MotionPrototype();
            shapeMotion.setName(group.name);

            let serialId = serialGen.getSerialId();
            shapeMotion.setSerialid(serialId);

            let scalarMotion = new ScalarMotionPrototype();
            scalarMotion.setMin(0.0);
            scalarMotion.setMax(1.0);

            shapeMotion.setScalar(scalarMotion);

            motions.push(shapeMotion);
            shapesMap[serialId] = index;
        });

        let prototype = new MEDVRMPrototype(vrm, bonesMap, shapesMap);
        prototype.setMotionsList(motions);

        return prototype;
    }

    private vector3MotionPrototypeFromVrmHumanBone(bone: VRMHumanBone): Vector3MotionPrototype {
        let prototype = new Vector3MotionPrototype();

        let min = this.vector3FromVrmVector3(bone.min, 0.0);
        prototype.setMin(min);

        let max = this.vector3FromVrmVector3(bone.max, 1.0);
        prototype.setMin(max);

        return prototype;
    }
    private vector3FromVrmVector3(vector: VRMVector3, fallback: number): Vector3 {
        let obj = new Vector3();
        if(vector) {
            obj.setX(vector.x);
            obj.setY(vector.y);
            obj.setZ(vector.z);
        } else {
            obj.setX(fallback);
            obj.setY(fallback);
            obj.setZ(fallback);
        }
        return obj;
    }
}

class GlobalSerial implements SerialGenerator {
    static serialId : number = 0;
    public getSerialId() : number {
        return GlobalSerial.serialId ++;
    }
}

export class MEDVRMPrototype extends Prototype {
    constructor(vrm: VRM, bonesMap: {[index: number] : THREE.Object3D}, shapesMap: {[index: number] : number}) {
        super();
        this.vrm = vrm;
        this._bonesSerialIdMap = bonesMap;
        this._shapesSerialIdMap = shapesMap;
    }

    public getBone(serialId: number): THREE.Object3D {
        if(this._bonesSerialIdMap.hasOwnProperty(serialId)) {
            return this._bonesSerialIdMap[serialId];
        }
        return null;
    }
    public getShape(serialId: number): number {
        if(this._shapesSerialIdMap.hasOwnProperty(serialId)) {
            return this._shapesSerialIdMap[serialId];
        }
        return null;
    }

    vrm : VRM;
    private _bonesSerialIdMap : {[index: number] : THREE.Object3D};
    private _shapesSerialIdMap : {[index: number] : number};
}

export class MEDVRMController {
    public order(prototype: MEDVRMPrototype, message: VMNMessage): void {
        let serialId = message.getSerialid();

        let bone = prototype.getBone(serialId);
        if(bone !== null && message.hasVector3()) {
            let vec = message.getVector3();
            bone.rotation.x = vec.getX();
            bone.rotation.y = vec.getY();
            bone.rotation.z = vec.getZ();
        } else if(prototype.getShape(serialId) !== null && message.hasScalar()) {
            prototype.vrm.setBlendShapeGroupWeight(prototype.getShape(serialId), message.getScalar());
        }
    }
}