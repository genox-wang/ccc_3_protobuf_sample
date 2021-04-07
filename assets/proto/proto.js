/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.response = (function() {

    /**
     * Namespace response.
     * @exports response
     * @namespace
     */
    var response = {};

    response.UserInfo = (function() {

        /**
         * Properties of a UserInfo.
         * @memberof response
         * @interface IUserInfo
         * @property {string|null} [cellphone] UserInfo cellphone
         * @property {string|null} [nickName] UserInfo nickName
         * @property {number|Long|null} [credits] UserInfo credits
         * @property {number|Long|null} [age] UserInfo age
         * @property {number|Long|null} [gender] UserInfo gender
         * @property {number|Long|null} [id] UserInfo id
         * @property {boolean|null} [hasPassword] UserInfo hasPassword
         */

        /**
         * Constructs a new UserInfo.
         * @memberof response
         * @classdesc Represents a UserInfo.
         * @implements IUserInfo
         * @constructor
         * @param {response.IUserInfo=} [properties] Properties to set
         */
        function UserInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserInfo cellphone.
         * @member {string} cellphone
         * @memberof response.UserInfo
         * @instance
         */
        UserInfo.prototype.cellphone = "";

        /**
         * UserInfo nickName.
         * @member {string} nickName
         * @memberof response.UserInfo
         * @instance
         */
        UserInfo.prototype.nickName = "";

        /**
         * UserInfo credits.
         * @member {number|Long} credits
         * @memberof response.UserInfo
         * @instance
         */
        UserInfo.prototype.credits = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserInfo age.
         * @member {number|Long} age
         * @memberof response.UserInfo
         * @instance
         */
        UserInfo.prototype.age = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserInfo gender.
         * @member {number|Long} gender
         * @memberof response.UserInfo
         * @instance
         */
        UserInfo.prototype.gender = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserInfo id.
         * @member {number|Long} id
         * @memberof response.UserInfo
         * @instance
         */
        UserInfo.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserInfo hasPassword.
         * @member {boolean} hasPassword
         * @memberof response.UserInfo
         * @instance
         */
        UserInfo.prototype.hasPassword = false;

        /**
         * Creates a new UserInfo instance using the specified properties.
         * @function create
         * @memberof response.UserInfo
         * @static
         * @param {response.IUserInfo=} [properties] Properties to set
         * @returns {response.UserInfo} UserInfo instance
         */
        UserInfo.create = function create(properties) {
            return new UserInfo(properties);
        };

        /**
         * Encodes the specified UserInfo message. Does not implicitly {@link response.UserInfo.verify|verify} messages.
         * @function encode
         * @memberof response.UserInfo
         * @static
         * @param {response.IUserInfo} message UserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cellphone != null && Object.hasOwnProperty.call(message, "cellphone"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.cellphone);
            if (message.nickName != null && Object.hasOwnProperty.call(message, "nickName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.nickName);
            if (message.credits != null && Object.hasOwnProperty.call(message, "credits"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.credits);
            if (message.age != null && Object.hasOwnProperty.call(message, "age"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.age);
            if (message.gender != null && Object.hasOwnProperty.call(message, "gender"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.gender);
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.id);
            if (message.hasPassword != null && Object.hasOwnProperty.call(message, "hasPassword"))
                writer.uint32(/* id 9, wireType 0 =*/72).bool(message.hasPassword);
            return writer;
        };

        /**
         * Encodes the specified UserInfo message, length delimited. Does not implicitly {@link response.UserInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof response.UserInfo
         * @static
         * @param {response.IUserInfo} message UserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserInfo message from the specified reader or buffer.
         * @function decode
         * @memberof response.UserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {response.UserInfo} UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.response.UserInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cellphone = reader.string();
                    break;
                case 2:
                    message.nickName = reader.string();
                    break;
                case 3:
                    message.credits = reader.int64();
                    break;
                case 4:
                    message.age = reader.int64();
                    break;
                case 5:
                    message.gender = reader.int64();
                    break;
                case 6:
                    message.id = reader.int64();
                    break;
                case 9:
                    message.hasPassword = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof response.UserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {response.UserInfo} UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserInfo message.
         * @function verify
         * @memberof response.UserInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cellphone != null && message.hasOwnProperty("cellphone"))
                if (!$util.isString(message.cellphone))
                    return "cellphone: string expected";
            if (message.nickName != null && message.hasOwnProperty("nickName"))
                if (!$util.isString(message.nickName))
                    return "nickName: string expected";
            if (message.credits != null && message.hasOwnProperty("credits"))
                if (!$util.isInteger(message.credits) && !(message.credits && $util.isInteger(message.credits.low) && $util.isInteger(message.credits.high)))
                    return "credits: integer|Long expected";
            if (message.age != null && message.hasOwnProperty("age"))
                if (!$util.isInteger(message.age) && !(message.age && $util.isInteger(message.age.low) && $util.isInteger(message.age.high)))
                    return "age: integer|Long expected";
            if (message.gender != null && message.hasOwnProperty("gender"))
                if (!$util.isInteger(message.gender) && !(message.gender && $util.isInteger(message.gender.low) && $util.isInteger(message.gender.high)))
                    return "gender: integer|Long expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                    return "id: integer|Long expected";
            if (message.hasPassword != null && message.hasOwnProperty("hasPassword"))
                if (typeof message.hasPassword !== "boolean")
                    return "hasPassword: boolean expected";
            return null;
        };

        /**
         * Creates a UserInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof response.UserInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {response.UserInfo} UserInfo
         */
        UserInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.response.UserInfo)
                return object;
            var message = new $root.response.UserInfo();
            if (object.cellphone != null)
                message.cellphone = String(object.cellphone);
            if (object.nickName != null)
                message.nickName = String(object.nickName);
            if (object.credits != null)
                if ($util.Long)
                    (message.credits = $util.Long.fromValue(object.credits)).unsigned = false;
                else if (typeof object.credits === "string")
                    message.credits = parseInt(object.credits, 10);
                else if (typeof object.credits === "number")
                    message.credits = object.credits;
                else if (typeof object.credits === "object")
                    message.credits = new $util.LongBits(object.credits.low >>> 0, object.credits.high >>> 0).toNumber();
            if (object.age != null)
                if ($util.Long)
                    (message.age = $util.Long.fromValue(object.age)).unsigned = false;
                else if (typeof object.age === "string")
                    message.age = parseInt(object.age, 10);
                else if (typeof object.age === "number")
                    message.age = object.age;
                else if (typeof object.age === "object")
                    message.age = new $util.LongBits(object.age.low >>> 0, object.age.high >>> 0).toNumber();
            if (object.gender != null)
                if ($util.Long)
                    (message.gender = $util.Long.fromValue(object.gender)).unsigned = false;
                else if (typeof object.gender === "string")
                    message.gender = parseInt(object.gender, 10);
                else if (typeof object.gender === "number")
                    message.gender = object.gender;
                else if (typeof object.gender === "object")
                    message.gender = new $util.LongBits(object.gender.low >>> 0, object.gender.high >>> 0).toNumber();
            if (object.id != null)
                if ($util.Long)
                    (message.id = $util.Long.fromValue(object.id)).unsigned = false;
                else if (typeof object.id === "string")
                    message.id = parseInt(object.id, 10);
                else if (typeof object.id === "number")
                    message.id = object.id;
                else if (typeof object.id === "object")
                    message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
            if (object.hasPassword != null)
                message.hasPassword = Boolean(object.hasPassword);
            return message;
        };

        /**
         * Creates a plain object from a UserInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof response.UserInfo
         * @static
         * @param {response.UserInfo} message UserInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.cellphone = "";
                object.nickName = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.credits = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.credits = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.age = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.age = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.gender = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.gender = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.id = options.longs === String ? "0" : 0;
                object.hasPassword = false;
            }
            if (message.cellphone != null && message.hasOwnProperty("cellphone"))
                object.cellphone = message.cellphone;
            if (message.nickName != null && message.hasOwnProperty("nickName"))
                object.nickName = message.nickName;
            if (message.credits != null && message.hasOwnProperty("credits"))
                if (typeof message.credits === "number")
                    object.credits = options.longs === String ? String(message.credits) : message.credits;
                else
                    object.credits = options.longs === String ? $util.Long.prototype.toString.call(message.credits) : options.longs === Number ? new $util.LongBits(message.credits.low >>> 0, message.credits.high >>> 0).toNumber() : message.credits;
            if (message.age != null && message.hasOwnProperty("age"))
                if (typeof message.age === "number")
                    object.age = options.longs === String ? String(message.age) : message.age;
                else
                    object.age = options.longs === String ? $util.Long.prototype.toString.call(message.age) : options.longs === Number ? new $util.LongBits(message.age.low >>> 0, message.age.high >>> 0).toNumber() : message.age;
            if (message.gender != null && message.hasOwnProperty("gender"))
                if (typeof message.gender === "number")
                    object.gender = options.longs === String ? String(message.gender) : message.gender;
                else
                    object.gender = options.longs === String ? $util.Long.prototype.toString.call(message.gender) : options.longs === Number ? new $util.LongBits(message.gender.low >>> 0, message.gender.high >>> 0).toNumber() : message.gender;
            if (message.id != null && message.hasOwnProperty("id"))
                if (typeof message.id === "number")
                    object.id = options.longs === String ? String(message.id) : message.id;
                else
                    object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
            if (message.hasPassword != null && message.hasOwnProperty("hasPassword"))
                object.hasPassword = message.hasPassword;
            return object;
        };

        /**
         * Converts this UserInfo to JSON.
         * @function toJSON
         * @memberof response.UserInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserInfo;
    })();

    response.MyBattleChallengeConf = (function() {

        /**
         * Properties of a MyBattleChallengeConf.
         * @memberof response
         * @interface IMyBattleChallengeConf
         * @property {boolean|null} [allowBattleChallenge] MyBattleChallengeConf allowBattleChallenge
         */

        /**
         * Constructs a new MyBattleChallengeConf.
         * @memberof response
         * @classdesc Represents a MyBattleChallengeConf.
         * @implements IMyBattleChallengeConf
         * @constructor
         * @param {response.IMyBattleChallengeConf=} [properties] Properties to set
         */
        function MyBattleChallengeConf(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MyBattleChallengeConf allowBattleChallenge.
         * @member {boolean} allowBattleChallenge
         * @memberof response.MyBattleChallengeConf
         * @instance
         */
        MyBattleChallengeConf.prototype.allowBattleChallenge = false;

        /**
         * Creates a new MyBattleChallengeConf instance using the specified properties.
         * @function create
         * @memberof response.MyBattleChallengeConf
         * @static
         * @param {response.IMyBattleChallengeConf=} [properties] Properties to set
         * @returns {response.MyBattleChallengeConf} MyBattleChallengeConf instance
         */
        MyBattleChallengeConf.create = function create(properties) {
            return new MyBattleChallengeConf(properties);
        };

        /**
         * Encodes the specified MyBattleChallengeConf message. Does not implicitly {@link response.MyBattleChallengeConf.verify|verify} messages.
         * @function encode
         * @memberof response.MyBattleChallengeConf
         * @static
         * @param {response.IMyBattleChallengeConf} message MyBattleChallengeConf message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MyBattleChallengeConf.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.allowBattleChallenge != null && Object.hasOwnProperty.call(message, "allowBattleChallenge"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.allowBattleChallenge);
            return writer;
        };

        /**
         * Encodes the specified MyBattleChallengeConf message, length delimited. Does not implicitly {@link response.MyBattleChallengeConf.verify|verify} messages.
         * @function encodeDelimited
         * @memberof response.MyBattleChallengeConf
         * @static
         * @param {response.IMyBattleChallengeConf} message MyBattleChallengeConf message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MyBattleChallengeConf.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MyBattleChallengeConf message from the specified reader or buffer.
         * @function decode
         * @memberof response.MyBattleChallengeConf
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {response.MyBattleChallengeConf} MyBattleChallengeConf
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MyBattleChallengeConf.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.response.MyBattleChallengeConf();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.allowBattleChallenge = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MyBattleChallengeConf message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof response.MyBattleChallengeConf
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {response.MyBattleChallengeConf} MyBattleChallengeConf
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MyBattleChallengeConf.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MyBattleChallengeConf message.
         * @function verify
         * @memberof response.MyBattleChallengeConf
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MyBattleChallengeConf.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.allowBattleChallenge != null && message.hasOwnProperty("allowBattleChallenge"))
                if (typeof message.allowBattleChallenge !== "boolean")
                    return "allowBattleChallenge: boolean expected";
            return null;
        };

        /**
         * Creates a MyBattleChallengeConf message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof response.MyBattleChallengeConf
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {response.MyBattleChallengeConf} MyBattleChallengeConf
         */
        MyBattleChallengeConf.fromObject = function fromObject(object) {
            if (object instanceof $root.response.MyBattleChallengeConf)
                return object;
            var message = new $root.response.MyBattleChallengeConf();
            if (object.allowBattleChallenge != null)
                message.allowBattleChallenge = Boolean(object.allowBattleChallenge);
            return message;
        };

        /**
         * Creates a plain object from a MyBattleChallengeConf message. Also converts values to other types if specified.
         * @function toObject
         * @memberof response.MyBattleChallengeConf
         * @static
         * @param {response.MyBattleChallengeConf} message MyBattleChallengeConf
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MyBattleChallengeConf.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.allowBattleChallenge = false;
            if (message.allowBattleChallenge != null && message.hasOwnProperty("allowBattleChallenge"))
                object.allowBattleChallenge = message.allowBattleChallenge;
            return object;
        };

        /**
         * Converts this MyBattleChallengeConf to JSON.
         * @function toJSON
         * @memberof response.MyBattleChallengeConf
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MyBattleChallengeConf.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MyBattleChallengeConf;
    })();

    response.AutoVerifyLogin = (function() {

        /**
         * Properties of an AutoVerifyLogin.
         * @memberof response
         * @interface IAutoVerifyLogin
         * @property {response.IUserInfo|null} [userInfo] AutoVerifyLogin userInfo
         */

        /**
         * Constructs a new AutoVerifyLogin.
         * @memberof response
         * @classdesc Represents an AutoVerifyLogin.
         * @implements IAutoVerifyLogin
         * @constructor
         * @param {response.IAutoVerifyLogin=} [properties] Properties to set
         */
        function AutoVerifyLogin(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AutoVerifyLogin userInfo.
         * @member {response.IUserInfo|null|undefined} userInfo
         * @memberof response.AutoVerifyLogin
         * @instance
         */
        AutoVerifyLogin.prototype.userInfo = null;

        /**
         * Creates a new AutoVerifyLogin instance using the specified properties.
         * @function create
         * @memberof response.AutoVerifyLogin
         * @static
         * @param {response.IAutoVerifyLogin=} [properties] Properties to set
         * @returns {response.AutoVerifyLogin} AutoVerifyLogin instance
         */
        AutoVerifyLogin.create = function create(properties) {
            return new AutoVerifyLogin(properties);
        };

        /**
         * Encodes the specified AutoVerifyLogin message. Does not implicitly {@link response.AutoVerifyLogin.verify|verify} messages.
         * @function encode
         * @memberof response.AutoVerifyLogin
         * @static
         * @param {response.IAutoVerifyLogin} message AutoVerifyLogin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AutoVerifyLogin.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userInfo != null && Object.hasOwnProperty.call(message, "userInfo"))
                $root.response.UserInfo.encode(message.userInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AutoVerifyLogin message, length delimited. Does not implicitly {@link response.AutoVerifyLogin.verify|verify} messages.
         * @function encodeDelimited
         * @memberof response.AutoVerifyLogin
         * @static
         * @param {response.IAutoVerifyLogin} message AutoVerifyLogin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AutoVerifyLogin.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AutoVerifyLogin message from the specified reader or buffer.
         * @function decode
         * @memberof response.AutoVerifyLogin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {response.AutoVerifyLogin} AutoVerifyLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AutoVerifyLogin.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.response.AutoVerifyLogin();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userInfo = $root.response.UserInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AutoVerifyLogin message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof response.AutoVerifyLogin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {response.AutoVerifyLogin} AutoVerifyLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AutoVerifyLogin.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AutoVerifyLogin message.
         * @function verify
         * @memberof response.AutoVerifyLogin
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AutoVerifyLogin.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userInfo != null && message.hasOwnProperty("userInfo")) {
                var error = $root.response.UserInfo.verify(message.userInfo);
                if (error)
                    return "userInfo." + error;
            }
            return null;
        };

        /**
         * Creates an AutoVerifyLogin message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof response.AutoVerifyLogin
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {response.AutoVerifyLogin} AutoVerifyLogin
         */
        AutoVerifyLogin.fromObject = function fromObject(object) {
            if (object instanceof $root.response.AutoVerifyLogin)
                return object;
            var message = new $root.response.AutoVerifyLogin();
            if (object.userInfo != null) {
                if (typeof object.userInfo !== "object")
                    throw TypeError(".response.AutoVerifyLogin.userInfo: object expected");
                message.userInfo = $root.response.UserInfo.fromObject(object.userInfo);
            }
            return message;
        };

        /**
         * Creates a plain object from an AutoVerifyLogin message. Also converts values to other types if specified.
         * @function toObject
         * @memberof response.AutoVerifyLogin
         * @static
         * @param {response.AutoVerifyLogin} message AutoVerifyLogin
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AutoVerifyLogin.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.userInfo = null;
            if (message.userInfo != null && message.hasOwnProperty("userInfo"))
                object.userInfo = $root.response.UserInfo.toObject(message.userInfo, options);
            return object;
        };

        /**
         * Converts this AutoVerifyLogin to JSON.
         * @function toJSON
         * @memberof response.AutoVerifyLogin
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AutoVerifyLogin.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AutoVerifyLogin;
    })();

    return response;
})();

module.exports = $root;
