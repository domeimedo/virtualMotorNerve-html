// package: com.domeime.vmn
// file: Manifest.proto

import * as jspb from "google-protobuf";
import * as Prototype_pb from "./Prototype_pb";

export class Manifest extends jspb.Message {
  clearObjectsList(): void;
  getObjectsList(): Array<Prototype_pb.Prototype>;
  setObjectsList(value: Array<Prototype_pb.Prototype>): void;
  addObjects(value?: Prototype_pb.Prototype, index?: number): Prototype_pb.Prototype;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Manifest.AsObject;
  static toObject(includeInstance: boolean, msg: Manifest): Manifest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Manifest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Manifest;
  static deserializeBinaryFromReader(message: Manifest, reader: jspb.BinaryReader): Manifest;
}

export namespace Manifest {
  export type AsObject = {
    objectsList: Array<Prototype_pb.Prototype.AsObject>,
  }
}

