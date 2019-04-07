// package: com.domeime.vmn
// file: ScalarMotionPrototype.proto

import * as jspb from "google-protobuf";

export class ScalarMotionPrototype extends jspb.Message {
  getMin(): number;
  setMin(value: number): void;

  getMax(): number;
  setMax(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScalarMotionPrototype.AsObject;
  static toObject(includeInstance: boolean, msg: ScalarMotionPrototype): ScalarMotionPrototype.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScalarMotionPrototype, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScalarMotionPrototype;
  static deserializeBinaryFromReader(message: ScalarMotionPrototype, reader: jspb.BinaryReader): ScalarMotionPrototype;
}

export namespace ScalarMotionPrototype {
  export type AsObject = {
    min: number,
    max: number,
  }
}

