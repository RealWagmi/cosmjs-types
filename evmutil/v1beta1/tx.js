"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.MsgConvertCosmosCoinFromERC20Response = exports.MsgConvertCosmosCoinFromERC20 = exports.MsgConvertCosmosCoinToERC20Response = exports.MsgConvertCosmosCoinToERC20 = exports.MsgConvertERC20ToCoinResponse = exports.MsgConvertERC20ToCoin = exports.MsgConvertCoinToERC20Response = exports.MsgConvertCoinToERC20 = exports.protobufPackage = void 0;
/* eslint-disable */
const coin_1 = require("../../cosmos/base/v1beta1/coin");
const binary_1 = require("../../binary");
const helpers_1 = require("../../helpers");
exports.protobufPackage = "kava.evmutil.v1beta1";
function createBaseMsgConvertCoinToERC20() {
    return {
        initiator: "",
        receiver: "",
        amount: undefined,
    };
}
exports.MsgConvertCoinToERC20 = {
    typeUrl: "/kava.evmutil.v1beta1.MsgConvertCoinToERC20",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.initiator !== "") {
            writer.uint32(10).string(message.initiator);
        }
        if (message.receiver !== "") {
            writer.uint32(18).string(message.receiver);
        }
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgConvertCoinToERC20();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.initiator = reader.string();
                    break;
                case 2:
                    message.receiver = reader.string();
                    break;
                case 3:
                    message.amount = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgConvertCoinToERC20();
        if ((0, helpers_1.isSet)(object.initiator))
            obj.initiator = String(object.initiator);
        if ((0, helpers_1.isSet)(object.receiver))
            obj.receiver = String(object.receiver);
        if ((0, helpers_1.isSet)(object.amount))
            obj.amount = coin_1.Coin.fromJSON(object.amount);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.initiator !== undefined && (obj.initiator = message.initiator);
        message.receiver !== undefined && (obj.receiver = message.receiver);
        message.amount !== undefined && (obj.amount = message.amount ? coin_1.Coin.toJSON(message.amount) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgConvertCoinToERC20();
        message.initiator = object.initiator ?? "";
        message.receiver = object.receiver ?? "";
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = coin_1.Coin.fromPartial(object.amount);
        }
        return message;
    },
};
function createBaseMsgConvertCoinToERC20Response() {
    return {};
}
exports.MsgConvertCoinToERC20Response = {
    typeUrl: "/kava.evmutil.v1beta1.MsgConvertCoinToERC20Response",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgConvertCoinToERC20Response();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const obj = createBaseMsgConvertCoinToERC20Response();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgConvertCoinToERC20Response();
        return message;
    },
};
function createBaseMsgConvertERC20ToCoin() {
    return {
        initiator: "",
        receiver: "",
        kavaErc20Address: "",
        amount: "",
    };
}
exports.MsgConvertERC20ToCoin = {
    typeUrl: "/kava.evmutil.v1beta1.MsgConvertERC20ToCoin",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.initiator !== "") {
            writer.uint32(10).string(message.initiator);
        }
        if (message.receiver !== "") {
            writer.uint32(18).string(message.receiver);
        }
        if (message.kavaErc20Address !== "") {
            writer.uint32(26).string(message.kavaErc20Address);
        }
        if (message.amount !== "") {
            writer.uint32(34).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgConvertERC20ToCoin();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.initiator = reader.string();
                    break;
                case 2:
                    message.receiver = reader.string();
                    break;
                case 3:
                    message.kavaErc20Address = reader.string();
                    break;
                case 4:
                    message.amount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgConvertERC20ToCoin();
        if ((0, helpers_1.isSet)(object.initiator))
            obj.initiator = String(object.initiator);
        if ((0, helpers_1.isSet)(object.receiver))
            obj.receiver = String(object.receiver);
        if ((0, helpers_1.isSet)(object.kavaErc20Address))
            obj.kavaErc20Address = String(object.kavaErc20Address);
        if ((0, helpers_1.isSet)(object.amount))
            obj.amount = String(object.amount);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.initiator !== undefined && (obj.initiator = message.initiator);
        message.receiver !== undefined && (obj.receiver = message.receiver);
        message.kavaErc20Address !== undefined && (obj.kavaErc20Address = message.kavaErc20Address);
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgConvertERC20ToCoin();
        message.initiator = object.initiator ?? "";
        message.receiver = object.receiver ?? "";
        message.kavaErc20Address = object.kavaErc20Address ?? "";
        message.amount = object.amount ?? "";
        return message;
    },
};
function createBaseMsgConvertERC20ToCoinResponse() {
    return {};
}
exports.MsgConvertERC20ToCoinResponse = {
    typeUrl: "/kava.evmutil.v1beta1.MsgConvertERC20ToCoinResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgConvertERC20ToCoinResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const obj = createBaseMsgConvertERC20ToCoinResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgConvertERC20ToCoinResponse();
        return message;
    },
};
function createBaseMsgConvertCosmosCoinToERC20() {
    return {
        initiator: "",
        receiver: "",
        amount: undefined,
    };
}
exports.MsgConvertCosmosCoinToERC20 = {
    typeUrl: "/kava.evmutil.v1beta1.MsgConvertCosmosCoinToERC20",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.initiator !== "") {
            writer.uint32(10).string(message.initiator);
        }
        if (message.receiver !== "") {
            writer.uint32(18).string(message.receiver);
        }
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgConvertCosmosCoinToERC20();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.initiator = reader.string();
                    break;
                case 2:
                    message.receiver = reader.string();
                    break;
                case 3:
                    message.amount = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgConvertCosmosCoinToERC20();
        if ((0, helpers_1.isSet)(object.initiator))
            obj.initiator = String(object.initiator);
        if ((0, helpers_1.isSet)(object.receiver))
            obj.receiver = String(object.receiver);
        if ((0, helpers_1.isSet)(object.amount))
            obj.amount = coin_1.Coin.fromJSON(object.amount);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.initiator !== undefined && (obj.initiator = message.initiator);
        message.receiver !== undefined && (obj.receiver = message.receiver);
        message.amount !== undefined && (obj.amount = message.amount ? coin_1.Coin.toJSON(message.amount) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgConvertCosmosCoinToERC20();
        message.initiator = object.initiator ?? "";
        message.receiver = object.receiver ?? "";
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = coin_1.Coin.fromPartial(object.amount);
        }
        return message;
    },
};
function createBaseMsgConvertCosmosCoinToERC20Response() {
    return {};
}
exports.MsgConvertCosmosCoinToERC20Response = {
    typeUrl: "/kava.evmutil.v1beta1.MsgConvertCosmosCoinToERC20Response",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgConvertCosmosCoinToERC20Response();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const obj = createBaseMsgConvertCosmosCoinToERC20Response();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgConvertCosmosCoinToERC20Response();
        return message;
    },
};
function createBaseMsgConvertCosmosCoinFromERC20() {
    return {
        initiator: "",
        receiver: "",
        amount: undefined,
    };
}
exports.MsgConvertCosmosCoinFromERC20 = {
    typeUrl: "/kava.evmutil.v1beta1.MsgConvertCosmosCoinFromERC20",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.initiator !== "") {
            writer.uint32(10).string(message.initiator);
        }
        if (message.receiver !== "") {
            writer.uint32(18).string(message.receiver);
        }
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgConvertCosmosCoinFromERC20();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.initiator = reader.string();
                    break;
                case 2:
                    message.receiver = reader.string();
                    break;
                case 3:
                    message.amount = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgConvertCosmosCoinFromERC20();
        if ((0, helpers_1.isSet)(object.initiator))
            obj.initiator = String(object.initiator);
        if ((0, helpers_1.isSet)(object.receiver))
            obj.receiver = String(object.receiver);
        if ((0, helpers_1.isSet)(object.amount))
            obj.amount = coin_1.Coin.fromJSON(object.amount);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.initiator !== undefined && (obj.initiator = message.initiator);
        message.receiver !== undefined && (obj.receiver = message.receiver);
        message.amount !== undefined && (obj.amount = message.amount ? coin_1.Coin.toJSON(message.amount) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgConvertCosmosCoinFromERC20();
        message.initiator = object.initiator ?? "";
        message.receiver = object.receiver ?? "";
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = coin_1.Coin.fromPartial(object.amount);
        }
        return message;
    },
};
function createBaseMsgConvertCosmosCoinFromERC20Response() {
    return {};
}
exports.MsgConvertCosmosCoinFromERC20Response = {
    typeUrl: "/kava.evmutil.v1beta1.MsgConvertCosmosCoinFromERC20Response",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgConvertCosmosCoinFromERC20Response();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const obj = createBaseMsgConvertCosmosCoinFromERC20Response();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgConvertCosmosCoinFromERC20Response();
        return message;
    },
};
class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.ConvertCoinToERC20 = this.ConvertCoinToERC20.bind(this);
        this.ConvertERC20ToCoin = this.ConvertERC20ToCoin.bind(this);
        this.ConvertCosmosCoinToERC20 = this.ConvertCosmosCoinToERC20.bind(this);
        this.ConvertCosmosCoinFromERC20 = this.ConvertCosmosCoinFromERC20.bind(this);
    }
    ConvertCoinToERC20(request) {
        const data = exports.MsgConvertCoinToERC20.encode(request).finish();
        const promise = this.rpc.request("kava.evmutil.v1beta1.Msg", "ConvertCoinToERC20", data);
        return promise.then((data) => exports.MsgConvertCoinToERC20Response.decode(new binary_1.BinaryReader(data)));
    }
    ConvertERC20ToCoin(request) {
        const data = exports.MsgConvertERC20ToCoin.encode(request).finish();
        const promise = this.rpc.request("kava.evmutil.v1beta1.Msg", "ConvertERC20ToCoin", data);
        return promise.then((data) => exports.MsgConvertERC20ToCoinResponse.decode(new binary_1.BinaryReader(data)));
    }
    ConvertCosmosCoinToERC20(request) {
        const data = exports.MsgConvertCosmosCoinToERC20.encode(request).finish();
        const promise = this.rpc.request("kava.evmutil.v1beta1.Msg", "ConvertCosmosCoinToERC20", data);
        return promise.then((data) => exports.MsgConvertCosmosCoinToERC20Response.decode(new binary_1.BinaryReader(data)));
    }
    ConvertCosmosCoinFromERC20(request) {
        const data = exports.MsgConvertCosmosCoinFromERC20.encode(request).finish();
        const promise = this.rpc.request("kava.evmutil.v1beta1.Msg", "ConvertCosmosCoinFromERC20", data);
        return promise.then((data) => exports.MsgConvertCosmosCoinFromERC20Response.decode(new binary_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
//# sourceMappingURL=tx.js.map