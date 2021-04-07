import * as $protobuf from "protobufjs";
/** Namespace response. */
export namespace response {

    /** Properties of a UserInfo. */
    interface IUserInfo {

        /** UserInfo cellphone */
        cellphone?: (string|null);

        /** UserInfo nickName */
        nickName?: (string|null);

        /** UserInfo credits */
        credits?: (number|Long|null);

        /** UserInfo age */
        age?: (number|Long|null);

        /** UserInfo gender */
        gender?: (number|Long|null);

        /** UserInfo id */
        id?: (number|Long|null);

        /** UserInfo hasPassword */
        hasPassword?: (boolean|null);
    }

    /** Represents a UserInfo. */
    class UserInfo implements IUserInfo {

        /**
         * Constructs a new UserInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: response.IUserInfo);

        /** UserInfo cellphone. */
        public cellphone: string;

        /** UserInfo nickName. */
        public nickName: string;

        /** UserInfo credits. */
        public credits: (number|Long);

        /** UserInfo age. */
        public age: (number|Long);

        /** UserInfo gender. */
        public gender: (number|Long);

        /** UserInfo id. */
        public id: (number|Long);

        /** UserInfo hasPassword. */
        public hasPassword: boolean;

        /**
         * Creates a new UserInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserInfo instance
         */
        public static create(properties?: response.IUserInfo): response.UserInfo;

        /**
         * Encodes the specified UserInfo message. Does not implicitly {@link response.UserInfo.verify|verify} messages.
         * @param message UserInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: response.IUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserInfo message, length delimited. Does not implicitly {@link response.UserInfo.verify|verify} messages.
         * @param message UserInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: response.IUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): response.UserInfo;

        /**
         * Decodes a UserInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): response.UserInfo;

        /**
         * Verifies a UserInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserInfo
         */
        public static fromObject(object: { [k: string]: any }): response.UserInfo;

        /**
         * Creates a plain object from a UserInfo message. Also converts values to other types if specified.
         * @param message UserInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: response.UserInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MyBattleChallengeConf. */
    interface IMyBattleChallengeConf {

        /** MyBattleChallengeConf allowBattleChallenge */
        allowBattleChallenge?: (boolean|null);
    }

    /** Represents a MyBattleChallengeConf. */
    class MyBattleChallengeConf implements IMyBattleChallengeConf {

        /**
         * Constructs a new MyBattleChallengeConf.
         * @param [properties] Properties to set
         */
        constructor(properties?: response.IMyBattleChallengeConf);

        /** MyBattleChallengeConf allowBattleChallenge. */
        public allowBattleChallenge: boolean;

        /**
         * Creates a new MyBattleChallengeConf instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MyBattleChallengeConf instance
         */
        public static create(properties?: response.IMyBattleChallengeConf): response.MyBattleChallengeConf;

        /**
         * Encodes the specified MyBattleChallengeConf message. Does not implicitly {@link response.MyBattleChallengeConf.verify|verify} messages.
         * @param message MyBattleChallengeConf message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: response.IMyBattleChallengeConf, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MyBattleChallengeConf message, length delimited. Does not implicitly {@link response.MyBattleChallengeConf.verify|verify} messages.
         * @param message MyBattleChallengeConf message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: response.IMyBattleChallengeConf, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MyBattleChallengeConf message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MyBattleChallengeConf
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): response.MyBattleChallengeConf;

        /**
         * Decodes a MyBattleChallengeConf message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MyBattleChallengeConf
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): response.MyBattleChallengeConf;

        /**
         * Verifies a MyBattleChallengeConf message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MyBattleChallengeConf message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MyBattleChallengeConf
         */
        public static fromObject(object: { [k: string]: any }): response.MyBattleChallengeConf;

        /**
         * Creates a plain object from a MyBattleChallengeConf message. Also converts values to other types if specified.
         * @param message MyBattleChallengeConf
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: response.MyBattleChallengeConf, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MyBattleChallengeConf to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AutoVerifyLogin. */
    interface IAutoVerifyLogin {

        /** AutoVerifyLogin userInfo */
        userInfo?: (response.IUserInfo|null);
    }

    /** Represents an AutoVerifyLogin. */
    class AutoVerifyLogin implements IAutoVerifyLogin {

        /**
         * Constructs a new AutoVerifyLogin.
         * @param [properties] Properties to set
         */
        constructor(properties?: response.IAutoVerifyLogin);

        /** AutoVerifyLogin userInfo. */
        public userInfo?: (response.IUserInfo|null);

        /**
         * Creates a new AutoVerifyLogin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AutoVerifyLogin instance
         */
        public static create(properties?: response.IAutoVerifyLogin): response.AutoVerifyLogin;

        /**
         * Encodes the specified AutoVerifyLogin message. Does not implicitly {@link response.AutoVerifyLogin.verify|verify} messages.
         * @param message AutoVerifyLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: response.IAutoVerifyLogin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AutoVerifyLogin message, length delimited. Does not implicitly {@link response.AutoVerifyLogin.verify|verify} messages.
         * @param message AutoVerifyLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: response.IAutoVerifyLogin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AutoVerifyLogin message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AutoVerifyLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): response.AutoVerifyLogin;

        /**
         * Decodes an AutoVerifyLogin message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AutoVerifyLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): response.AutoVerifyLogin;

        /**
         * Verifies an AutoVerifyLogin message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AutoVerifyLogin message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AutoVerifyLogin
         */
        public static fromObject(object: { [k: string]: any }): response.AutoVerifyLogin;

        /**
         * Creates a plain object from an AutoVerifyLogin message. Also converts values to other types if specified.
         * @param message AutoVerifyLogin
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: response.AutoVerifyLogin, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AutoVerifyLogin to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
