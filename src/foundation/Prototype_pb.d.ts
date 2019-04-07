// package: com.domeime.vmn
// file: Prototype.proto

import * as jspb from "google-protobuf";
import * as MotionPrototype_pb from "./MotionPrototype_pb";

export class Prototype extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getIdentity(): number;
  setIdentity(value: number): void;

  getSerialid(): number;
  setSerialid(value: number): void;

  clearMotionsList(): void;
  getMotionsList(): Array<MotionPrototype_pb.MotionPrototype>;
  setMotionsList(value: Array<MotionPrototype_pb.MotionPrototype>): void;
  addMotions(value?: MotionPrototype_pb.MotionPrototype, index?: number): MotionPrototype_pb.MotionPrototype;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Prototype.AsObject;
  static toObject(includeInstance: boolean, msg: Prototype): Prototype.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Prototype, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Prototype;
  static deserializeBinaryFromReader(message: Prototype, reader: jspb.BinaryReader): Prototype;
}

export namespace Prototype {
  export type AsObject = {
    name: string,
    identity: number,
    serialid: number,
    motionsList: Array<MotionPrototype_pb.MotionPrototype.AsObject>,
  }
}

