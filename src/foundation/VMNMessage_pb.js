/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var Vector3_pb = require('./Vector3_pb.js');
goog.object.extend(proto, Vector3_pb);
goog.exportSymbol('proto.com.domeime.vmn.VMNMessage', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.domeime.vmn.VMNMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.com.domeime.vmn.VMNMessage.oneofGroups_);
};
goog.inherits(proto.com.domeime.vmn.VMNMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.domeime.vmn.VMNMessage.displayName = 'proto.com.domeime.vmn.VMNMessage';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.com.domeime.vmn.VMNMessage.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.com.domeime.vmn.VMNMessage.ValueCase = {
  VALUE_NOT_SET: 0,
  SCALAR: 2,
  VECTOR3: 3
};

/**
 * @return {proto.com.domeime.vmn.VMNMessage.ValueCase}
 */
proto.com.domeime.vmn.VMNMessage.prototype.getValueCase = function() {
  return /** @type {proto.com.domeime.vmn.VMNMessage.ValueCase} */(jspb.Message.computeOneofCase(this, proto.com.domeime.vmn.VMNMessage.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.domeime.vmn.VMNMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.com.domeime.vmn.VMNMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.domeime.vmn.VMNMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.domeime.vmn.VMNMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    serialid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    scalar: jspb.Message.getFieldWithDefault(msg, 2, 0),
    vector3: (f = msg.getVector3()) && Vector3_pb.Vector3.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.domeime.vmn.VMNMessage}
 */
proto.com.domeime.vmn.VMNMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.domeime.vmn.VMNMessage;
  return proto.com.domeime.vmn.VMNMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.domeime.vmn.VMNMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.domeime.vmn.VMNMessage}
 */
proto.com.domeime.vmn.VMNMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSerialid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setScalar(value);
      break;
    case 3:
      var value = new Vector3_pb.Vector3;
      reader.readMessage(value,Vector3_pb.Vector3.deserializeBinaryFromReader);
      msg.setVector3(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.domeime.vmn.VMNMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.domeime.vmn.VMNMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.domeime.vmn.VMNMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.domeime.vmn.VMNMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSerialid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getVector3();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      Vector3_pb.Vector3.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 serialId = 1;
 * @return {number}
 */
proto.com.domeime.vmn.VMNMessage.prototype.getSerialid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.com.domeime.vmn.VMNMessage.prototype.setSerialid = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 scalar = 2;
 * @return {number}
 */
proto.com.domeime.vmn.VMNMessage.prototype.getScalar = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.com.domeime.vmn.VMNMessage.prototype.setScalar = function(value) {
  jspb.Message.setOneofField(this, 2, proto.com.domeime.vmn.VMNMessage.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 */
proto.com.domeime.vmn.VMNMessage.prototype.clearScalar = function() {
  jspb.Message.setOneofField(this, 2, proto.com.domeime.vmn.VMNMessage.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.domeime.vmn.VMNMessage.prototype.hasScalar = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Vector3 vector3 = 3;
 * @return {?proto.com.domeime.vmn.Vector3}
 */
proto.com.domeime.vmn.VMNMessage.prototype.getVector3 = function() {
  return /** @type{?proto.com.domeime.vmn.Vector3} */ (
    jspb.Message.getWrapperField(this, Vector3_pb.Vector3, 3));
};


/** @param {?proto.com.domeime.vmn.Vector3|undefined} value */
proto.com.domeime.vmn.VMNMessage.prototype.setVector3 = function(value) {
  jspb.Message.setOneofWrapperField(this, 3, proto.com.domeime.vmn.VMNMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.com.domeime.vmn.VMNMessage.prototype.clearVector3 = function() {
  this.setVector3(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.domeime.vmn.VMNMessage.prototype.hasVector3 = function() {
  return jspb.Message.getField(this, 3) != null;
};


goog.object.extend(exports, proto.com.domeime.vmn);