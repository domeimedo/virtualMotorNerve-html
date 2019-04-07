// package: com.domeime.vmn
// file: MotionPrototype.proto

import * as jspb from "google-protobuf";
import * as ScalarMotionPrototype_pb from "./ScalarMotionPrototype_pb";
import * as Vector3MotionPrototype_pb from "./Vector3MotionPrototype_pb";

export class MotionPrototype extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getSerialid(): number;
  setSerialid(value: number): void;

  hasScalar(): boolean;
  clearScalar(): void;
  getScalar(): ScalarMotionPrototype_pb.ScalarMotionPrototype | undefined;
  setScalar(value?: ScalarMotionPrototype_pb.ScalarMotionPrototype): void;

  hasVector3(): boolean;
  clearVector3(): void;
  getVector3(): Vector3MotionPrototype_pb.Vector3MotionPrototype | undefined;
  setVector3(value?: Vector3MotionPrototype_pb.Vector3MotionPrototype): void;

  getImplCase(): MotionPrototype.ImplCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MotionPrototype.AsObject;
  static toObject(includeInstance: boolean, msg: MotionPrototype): MotionPrototype.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MotionPrototype, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MotionPrototype;
  static deserializeBinaryFromReader(message: MotionPrototype, reader: jspb.BinaryReader): MotionPrototype;
}

export namespace MotionPrototype {
  export type AsObject = {
    name: string,
    serialid: number,
    scalar?: ScalarMotionPrototype_pb.ScalarMotionPrototype.AsObject,
    vector3?: Vector3MotionPrototype_pb.Vector3MotionPrototype.AsObject,
  }

  export enum ImplCase {
    IMPL_NOT_SET = 0,
    SCALAR = 3,
    VECTOR3 = 4,
  }
}

