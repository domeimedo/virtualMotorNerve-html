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

var MotionPrototype_pb = require('./MotionPrototype_pb.js');
goog.object.extend(proto, MotionPrototype_pb);
goog.exportSymbol('proto.com.domeime.vmn.Prototype', null, global);
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
proto.com.domeime.vmn.Prototype = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.com.domeime.vmn.Prototype.repeatedFields_, null);
};
goog.inherits(proto.com.domeime.vmn.Prototype, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.domeime.vmn.Prototype.displayName = 'proto.com.domeime.vmn.Prototype';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.com.domeime.vmn.Prototype.repeatedFields_ = [3];



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
proto.com.domeime.vmn.Prototype.prototype.toObject = function(opt_includeInstance) {
  return proto.com.domeime.vmn.Prototype.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.domeime.vmn.Prototype} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.domeime.vmn.Prototype.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    identity: jspb.Message.getFieldWithDefault(msg, 2, 0),
    motionsList: jspb.Message.toObjectList(msg.getMotionsList(),
    MotionPrototype_pb.MotionPrototype.toObject, includeInstance)
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
 * @return {!proto.com.domeime.vmn.Prototype}
 */
proto.com.domeime.vmn.Prototype.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.domeime.vmn.Prototype;
  return proto.com.domeime.vmn.Prototype.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.domeime.vmn.Prototype} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.domeime.vmn.Prototype}
 */
proto.com.domeime.vmn.Prototype.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setIdentity(value);
      break;
    case 3:
      var value = new MotionPrototype_pb.MotionPrototype;
      reader.readMessage(value,MotionPrototype_pb.MotionPrototype.deserializeBinaryFromReader);
      msg.addMotions(value);
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
proto.com.domeime.vmn.Prototype.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.domeime.vmn.Prototype.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.domeime.vmn.Prototype} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.domeime.vmn.Prototype.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIdentity();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getMotionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      MotionPrototype_pb.MotionPrototype.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.com.domeime.vmn.Prototype.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.com.domeime.vmn.Prototype.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 identity = 2;
 * @return {number}
 */
proto.com.domeime.vmn.Prototype.prototype.getIdentity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.com.domeime.vmn.Prototype.prototype.setIdentity = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * repeated MotionPrototype motions = 3;
 * @return {!Array<!proto.com.domeime.vmn.MotionPrototype>}
 */
proto.com.domeime.vmn.Prototype.prototype.getMotionsList = function() {
  return /** @type{!Array<!proto.com.domeime.vmn.MotionPrototype>} */ (
    jspb.Message.getRepeatedWrapperField(this, MotionPrototype_pb.MotionPrototype, 3));
};


/** @param {!Array<!proto.com.domeime.vmn.MotionPrototype>} value */
proto.com.domeime.vmn.Prototype.prototype.setMotionsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.com.domeime.vmn.MotionPrototype=} opt_value
 * @param {number=} opt_index
 * @return {!proto.com.domeime.vmn.MotionPrototype}
 */
proto.com.domeime.vmn.Prototype.prototype.addMotions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.com.domeime.vmn.MotionPrototype, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.com.domeime.vmn.Prototype.prototype.clearMotionsList = function() {
  this.setMotionsList([]);
};


goog.object.extend(exports, proto.com.domeime.vmn);
