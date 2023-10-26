/* eslint-disable */
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial, Exact, Rpc } from "../../helpers";
export const protobufPackage = "kava.evmutil.v1beta1";
/** MsgConvertCoinToERC20 defines a conversion from sdk.Coin to Kava ERC20 for EVM-native assets. */
export interface MsgConvertCoinToERC20 {
  /** Kava bech32 address initiating the conversion. */
  initiator: string;
  /** EVM 0x hex address that will receive the converted Kava ERC20 tokens. */
  receiver: string;
  /** Amount is the sdk.Coin amount to convert. */
  amount?: Coin;
}
/** MsgConvertCoinToERC20Response defines the response value from Msg/ConvertCoinToERC20. */
export interface MsgConvertCoinToERC20Response {}
/** MsgConvertERC20ToCoin defines a conversion from Kava ERC20 to sdk.Coin for EVM-native assets. */
export interface MsgConvertERC20ToCoin {
  /** EVM 0x hex address initiating the conversion. */
  initiator: string;
  /** Kava bech32 address that will receive the converted sdk.Coin. */
  receiver: string;
  /** EVM 0x hex address of the ERC20 contract. */
  kavaErc20Address: string;
  /** ERC20 token amount to convert. */
  amount: string;
}
/**
 * MsgConvertERC20ToCoinResponse defines the response value from
 * Msg/MsgConvertERC20ToCoin.
 */
export interface MsgConvertERC20ToCoinResponse {}
/** MsgConvertCosmosCoinToERC20 defines a conversion from cosmos sdk.Coin to ERC20 for cosmos-native assets. */
export interface MsgConvertCosmosCoinToERC20 {
  /** Kava bech32 address initiating the conversion. */
  initiator: string;
  /** EVM hex address that will receive the ERC20 tokens. */
  receiver: string;
  /** Amount is the sdk.Coin amount to convert. */
  amount?: Coin;
}
/** MsgConvertCosmosCoinToERC20Response defines the response value from Msg/MsgConvertCosmosCoinToERC20. */
export interface MsgConvertCosmosCoinToERC20Response {}
/** MsgConvertCosmosCoinFromERC20 defines a conversion from ERC20 to cosmos coins for cosmos-native assets. */
export interface MsgConvertCosmosCoinFromERC20 {
  /** EVM hex address initiating the conversion. */
  initiator: string;
  /** Kava bech32 address that will receive the cosmos coins. */
  receiver: string;
  /** Amount is the amount to convert, expressed as a Cosmos coin. */
  amount?: Coin;
}
/** MsgConvertCosmosCoinFromERC20Response defines the response value from Msg/MsgConvertCosmosCoinFromERC20. */
export interface MsgConvertCosmosCoinFromERC20Response {}
function createBaseMsgConvertCoinToERC20(): MsgConvertCoinToERC20 {
  return {
    initiator: "",
    receiver: "",
    amount: undefined,
  };
}
export const MsgConvertCoinToERC20 = {
  typeUrl: "/kava.evmutil.v1beta1.MsgConvertCoinToERC20",
  encode(message: MsgConvertCoinToERC20, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.initiator !== "") {
      writer.uint32(10).string(message.initiator);
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgConvertCoinToERC20 {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgConvertCoinToERC20 {
    const obj = createBaseMsgConvertCoinToERC20();
    if (isSet(object.initiator)) obj.initiator = String(object.initiator);
    if (isSet(object.receiver)) obj.receiver = String(object.receiver);
    if (isSet(object.amount)) obj.amount = Coin.fromJSON(object.amount);
    return obj;
  },
  toJSON(message: MsgConvertCoinToERC20): unknown {
    const obj: any = {};
    message.initiator !== undefined && (obj.initiator = message.initiator);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgConvertCoinToERC20>, I>>(object: I): MsgConvertCoinToERC20 {
    const message = createBaseMsgConvertCoinToERC20();
    message.initiator = object.initiator ?? "";
    message.receiver = object.receiver ?? "";
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromPartial(object.amount);
    }
    return message;
  },
};
function createBaseMsgConvertCoinToERC20Response(): MsgConvertCoinToERC20Response {
  return {};
}
export const MsgConvertCoinToERC20Response = {
  typeUrl: "/kava.evmutil.v1beta1.MsgConvertCoinToERC20Response",
  encode(_: MsgConvertCoinToERC20Response, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgConvertCoinToERC20Response {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromJSON(_: any): MsgConvertCoinToERC20Response {
    const obj = createBaseMsgConvertCoinToERC20Response();
    return obj;
  },
  toJSON(_: MsgConvertCoinToERC20Response): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgConvertCoinToERC20Response>, I>>(
    _: I,
  ): MsgConvertCoinToERC20Response {
    const message = createBaseMsgConvertCoinToERC20Response();
    return message;
  },
};
function createBaseMsgConvertERC20ToCoin(): MsgConvertERC20ToCoin {
  return {
    initiator: "",
    receiver: "",
    kavaErc20Address: "",
    amount: "",
  };
}
export const MsgConvertERC20ToCoin = {
  typeUrl: "/kava.evmutil.v1beta1.MsgConvertERC20ToCoin",
  encode(message: MsgConvertERC20ToCoin, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgConvertERC20ToCoin {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromJSON(object: any): MsgConvertERC20ToCoin {
    const obj = createBaseMsgConvertERC20ToCoin();
    if (isSet(object.initiator)) obj.initiator = String(object.initiator);
    if (isSet(object.receiver)) obj.receiver = String(object.receiver);
    if (isSet(object.kavaErc20Address)) obj.kavaErc20Address = String(object.kavaErc20Address);
    if (isSet(object.amount)) obj.amount = String(object.amount);
    return obj;
  },
  toJSON(message: MsgConvertERC20ToCoin): unknown {
    const obj: any = {};
    message.initiator !== undefined && (obj.initiator = message.initiator);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.kavaErc20Address !== undefined && (obj.kavaErc20Address = message.kavaErc20Address);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgConvertERC20ToCoin>, I>>(object: I): MsgConvertERC20ToCoin {
    const message = createBaseMsgConvertERC20ToCoin();
    message.initiator = object.initiator ?? "";
    message.receiver = object.receiver ?? "";
    message.kavaErc20Address = object.kavaErc20Address ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};
function createBaseMsgConvertERC20ToCoinResponse(): MsgConvertERC20ToCoinResponse {
  return {};
}
export const MsgConvertERC20ToCoinResponse = {
  typeUrl: "/kava.evmutil.v1beta1.MsgConvertERC20ToCoinResponse",
  encode(_: MsgConvertERC20ToCoinResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgConvertERC20ToCoinResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromJSON(_: any): MsgConvertERC20ToCoinResponse {
    const obj = createBaseMsgConvertERC20ToCoinResponse();
    return obj;
  },
  toJSON(_: MsgConvertERC20ToCoinResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgConvertERC20ToCoinResponse>, I>>(
    _: I,
  ): MsgConvertERC20ToCoinResponse {
    const message = createBaseMsgConvertERC20ToCoinResponse();
    return message;
  },
};
function createBaseMsgConvertCosmosCoinToERC20(): MsgConvertCosmosCoinToERC20 {
  return {
    initiator: "",
    receiver: "",
    amount: undefined,
  };
}
export const MsgConvertCosmosCoinToERC20 = {
  typeUrl: "/kava.evmutil.v1beta1.MsgConvertCosmosCoinToERC20",
  encode(message: MsgConvertCosmosCoinToERC20, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.initiator !== "") {
      writer.uint32(10).string(message.initiator);
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgConvertCosmosCoinToERC20 {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgConvertCosmosCoinToERC20 {
    const obj = createBaseMsgConvertCosmosCoinToERC20();
    if (isSet(object.initiator)) obj.initiator = String(object.initiator);
    if (isSet(object.receiver)) obj.receiver = String(object.receiver);
    if (isSet(object.amount)) obj.amount = Coin.fromJSON(object.amount);
    return obj;
  },
  toJSON(message: MsgConvertCosmosCoinToERC20): unknown {
    const obj: any = {};
    message.initiator !== undefined && (obj.initiator = message.initiator);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgConvertCosmosCoinToERC20>, I>>(
    object: I,
  ): MsgConvertCosmosCoinToERC20 {
    const message = createBaseMsgConvertCosmosCoinToERC20();
    message.initiator = object.initiator ?? "";
    message.receiver = object.receiver ?? "";
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromPartial(object.amount);
    }
    return message;
  },
};
function createBaseMsgConvertCosmosCoinToERC20Response(): MsgConvertCosmosCoinToERC20Response {
  return {};
}
export const MsgConvertCosmosCoinToERC20Response = {
  typeUrl: "/kava.evmutil.v1beta1.MsgConvertCosmosCoinToERC20Response",
  encode(_: MsgConvertCosmosCoinToERC20Response, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgConvertCosmosCoinToERC20Response {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromJSON(_: any): MsgConvertCosmosCoinToERC20Response {
    const obj = createBaseMsgConvertCosmosCoinToERC20Response();
    return obj;
  },
  toJSON(_: MsgConvertCosmosCoinToERC20Response): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgConvertCosmosCoinToERC20Response>, I>>(
    _: I,
  ): MsgConvertCosmosCoinToERC20Response {
    const message = createBaseMsgConvertCosmosCoinToERC20Response();
    return message;
  },
};
function createBaseMsgConvertCosmosCoinFromERC20(): MsgConvertCosmosCoinFromERC20 {
  return {
    initiator: "",
    receiver: "",
    amount: undefined,
  };
}
export const MsgConvertCosmosCoinFromERC20 = {
  typeUrl: "/kava.evmutil.v1beta1.MsgConvertCosmosCoinFromERC20",
  encode(message: MsgConvertCosmosCoinFromERC20, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.initiator !== "") {
      writer.uint32(10).string(message.initiator);
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgConvertCosmosCoinFromERC20 {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgConvertCosmosCoinFromERC20 {
    const obj = createBaseMsgConvertCosmosCoinFromERC20();
    if (isSet(object.initiator)) obj.initiator = String(object.initiator);
    if (isSet(object.receiver)) obj.receiver = String(object.receiver);
    if (isSet(object.amount)) obj.amount = Coin.fromJSON(object.amount);
    return obj;
  },
  toJSON(message: MsgConvertCosmosCoinFromERC20): unknown {
    const obj: any = {};
    message.initiator !== undefined && (obj.initiator = message.initiator);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgConvertCosmosCoinFromERC20>, I>>(
    object: I,
  ): MsgConvertCosmosCoinFromERC20 {
    const message = createBaseMsgConvertCosmosCoinFromERC20();
    message.initiator = object.initiator ?? "";
    message.receiver = object.receiver ?? "";
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromPartial(object.amount);
    }
    return message;
  },
};
function createBaseMsgConvertCosmosCoinFromERC20Response(): MsgConvertCosmosCoinFromERC20Response {
  return {};
}
export const MsgConvertCosmosCoinFromERC20Response = {
  typeUrl: "/kava.evmutil.v1beta1.MsgConvertCosmosCoinFromERC20Response",
  encode(
    _: MsgConvertCosmosCoinFromERC20Response,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgConvertCosmosCoinFromERC20Response {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromJSON(_: any): MsgConvertCosmosCoinFromERC20Response {
    const obj = createBaseMsgConvertCosmosCoinFromERC20Response();
    return obj;
  },
  toJSON(_: MsgConvertCosmosCoinFromERC20Response): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgConvertCosmosCoinFromERC20Response>, I>>(
    _: I,
  ): MsgConvertCosmosCoinFromERC20Response {
    const message = createBaseMsgConvertCosmosCoinFromERC20Response();
    return message;
  },
};
/** Msg defines the evmutil Msg service. */
export interface Msg {
  /** ConvertCoinToERC20 defines a method for converting sdk.Coin to Kava ERC20. */
  ConvertCoinToERC20(request: MsgConvertCoinToERC20): Promise<MsgConvertCoinToERC20Response>;
  /** ConvertERC20ToCoin defines a method for converting Kava ERC20 to sdk.Coin. */
  ConvertERC20ToCoin(request: MsgConvertERC20ToCoin): Promise<MsgConvertERC20ToCoinResponse>;
  /** ConvertCosmosCoinToERC20 defines a method for converting a cosmos sdk.Coin to an ERC20. */
  ConvertCosmosCoinToERC20(
    request: MsgConvertCosmosCoinToERC20,
  ): Promise<MsgConvertCosmosCoinToERC20Response>;
  /** ConvertCosmosCoinFromERC20 defines a method for converting a cosmos sdk.Coin to an ERC20. */
  ConvertCosmosCoinFromERC20(
    request: MsgConvertCosmosCoinFromERC20,
  ): Promise<MsgConvertCosmosCoinFromERC20Response>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.ConvertCoinToERC20 = this.ConvertCoinToERC20.bind(this);
    this.ConvertERC20ToCoin = this.ConvertERC20ToCoin.bind(this);
    this.ConvertCosmosCoinToERC20 = this.ConvertCosmosCoinToERC20.bind(this);
    this.ConvertCosmosCoinFromERC20 = this.ConvertCosmosCoinFromERC20.bind(this);
  }
  ConvertCoinToERC20(request: MsgConvertCoinToERC20): Promise<MsgConvertCoinToERC20Response> {
    const data = MsgConvertCoinToERC20.encode(request).finish();
    const promise = this.rpc.request("kava.evmutil.v1beta1.Msg", "ConvertCoinToERC20", data);
    return promise.then((data) => MsgConvertCoinToERC20Response.decode(new BinaryReader(data)));
  }
  ConvertERC20ToCoin(request: MsgConvertERC20ToCoin): Promise<MsgConvertERC20ToCoinResponse> {
    const data = MsgConvertERC20ToCoin.encode(request).finish();
    const promise = this.rpc.request("kava.evmutil.v1beta1.Msg", "ConvertERC20ToCoin", data);
    return promise.then((data) => MsgConvertERC20ToCoinResponse.decode(new BinaryReader(data)));
  }
  ConvertCosmosCoinToERC20(
    request: MsgConvertCosmosCoinToERC20,
  ): Promise<MsgConvertCosmosCoinToERC20Response> {
    const data = MsgConvertCosmosCoinToERC20.encode(request).finish();
    const promise = this.rpc.request("kava.evmutil.v1beta1.Msg", "ConvertCosmosCoinToERC20", data);
    return promise.then((data) => MsgConvertCosmosCoinToERC20Response.decode(new BinaryReader(data)));
  }
  ConvertCosmosCoinFromERC20(
    request: MsgConvertCosmosCoinFromERC20,
  ): Promise<MsgConvertCosmosCoinFromERC20Response> {
    const data = MsgConvertCosmosCoinFromERC20.encode(request).finish();
    const promise = this.rpc.request("kava.evmutil.v1beta1.Msg", "ConvertCosmosCoinFromERC20", data);
    return promise.then((data) => MsgConvertCosmosCoinFromERC20Response.decode(new BinaryReader(data)));
  }
}
