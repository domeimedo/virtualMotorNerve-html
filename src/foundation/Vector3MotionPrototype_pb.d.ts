// package: com.domeime.vmn
// file: Vector3MotionPrototype.proto

import * as jspb from "google-protobuf";
import * as Vector3_pb from "./Vector3_pb";

export class Vector3MotionPrototype extends jspb.Message {
  hasMin(): boolean;
  clearMin(): void;
  getMin(): Vector3_pb.Vector3 | undefined;
  setMin(value?: Vector3_pb.Vector3): void;

  hasMax(): boolean;
  clearMax(): void;
  getMax(): Vector3_pb.Vector3 | undefined;
  setMax(value?: Vector3_pb.Vector3): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Vector3MotionPrototype.AsObject;
  static toObject(includeInstance: boolean, msg: Vector3MotionPrototype): Vector3MotionPrototype.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Vector3MotionPrototype, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Vector3MotionPrototype;
  static deserializeBinaryFromReader(message: Vector3MotionPrototype, reader: jspb.BinaryReader): Vector3MotionPrototype;
}

export namespace Vector3MotionPrototype {
  export type AsObject = {
    min?: Vector3_pb.Vector3.AsObject,
    max?: Vector3_pb.Vector3.AsObject,
  }
}

