// package: com.domeime.vmn
// file: VMNMessage.proto

import * as jspb from "google-protobuf";
import * as Vector3_pb from "./Vector3_pb";

export class VMNMessage extends jspb.Message {
  getSerialid(): number;
  setSerialid(value: number): void;

  hasScalar(): boolean;
  clearScalar(): void;
  getScalar(): number;
  setScalar(value: number): void;

  hasVector3(): boolean;
  clearVector3(): void;
  getVector3(): Vector3_pb.Vector3 | undefined;
  setVector3(value?: Vector3_pb.Vector3): void;

  getValueCase(): VMNMessage.ValueCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VMNMessage.AsObject;
  static toObject(includeInstance: boolean, msg: VMNMessage): VMNMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VMNMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VMNMessage;
  static deserializeBinaryFromReader(message: VMNMessage, reader: jspb.BinaryReader): VMNMessage;
}

export namespace VMNMessage {
  export type AsObject = {
    serialid: number,
    scalar: number,
    vector3?: Vector3_pb.Vector3.AsObject,
  }

  export enum ValueCase {
    VALUE_NOT_SET = 0,
    SCALAR = 2,
    VECTOR3 = 3,
  }
}

