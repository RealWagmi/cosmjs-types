import { Coin } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Rpc } from "../../helpers";
export declare const protobufPackage = "kava.evmutil.v1beta1";
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
export interface MsgConvertCoinToERC20Response {
}
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
export interface MsgConvertERC20ToCoinResponse {
}
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
export interface MsgConvertCosmosCoinToERC20Response {
}
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
export interface MsgConvertCosmosCoinFromERC20Response {
}
export declare const MsgConvertCoinToERC20: {
    typeUrl: string;
    encode(message: MsgConvertCoinToERC20, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgConvertCoinToERC20;
    fromJSON(object: any): MsgConvertCoinToERC20;
    toJSON(message: MsgConvertCoinToERC20): unknown;
    fromPartial<I extends {
        initiator?: string | undefined;
        receiver?: string | undefined;
        amount?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
    } & {
        initiator?: string | undefined;
        receiver?: string | undefined;
        amount?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["amount"], keyof Coin>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof MsgConvertCoinToERC20>, never>>(object: I): MsgConvertCoinToERC20;
};
export declare const MsgConvertCoinToERC20Response: {
    typeUrl: string;
    encode(_: MsgConvertCoinToERC20Response, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgConvertCoinToERC20Response;
    fromJSON(_: any): MsgConvertCoinToERC20Response;
    toJSON(_: MsgConvertCoinToERC20Response): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgConvertCoinToERC20Response;
};
export declare const MsgConvertERC20ToCoin: {
    typeUrl: string;
    encode(message: MsgConvertERC20ToCoin, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgConvertERC20ToCoin;
    fromJSON(object: any): MsgConvertERC20ToCoin;
    toJSON(message: MsgConvertERC20ToCoin): unknown;
    fromPartial<I extends {
        initiator?: string | undefined;
        receiver?: string | undefined;
        kavaErc20Address?: string | undefined;
        amount?: string | undefined;
    } & {
        initiator?: string | undefined;
        receiver?: string | undefined;
        kavaErc20Address?: string | undefined;
        amount?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgConvertERC20ToCoin>, never>>(object: I): MsgConvertERC20ToCoin;
};
export declare const MsgConvertERC20ToCoinResponse: {
    typeUrl: string;
    encode(_: MsgConvertERC20ToCoinResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgConvertERC20ToCoinResponse;
    fromJSON(_: any): MsgConvertERC20ToCoinResponse;
    toJSON(_: MsgConvertERC20ToCoinResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgConvertERC20ToCoinResponse;
};
export declare const MsgConvertCosmosCoinToERC20: {
    typeUrl: string;
    encode(message: MsgConvertCosmosCoinToERC20, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgConvertCosmosCoinToERC20;
    fromJSON(object: any): MsgConvertCosmosCoinToERC20;
    toJSON(message: MsgConvertCosmosCoinToERC20): unknown;
    fromPartial<I extends {
        initiator?: string | undefined;
        receiver?: string | undefined;
        amount?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
    } & {
        initiator?: string | undefined;
        receiver?: string | undefined;
        amount?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["amount"], keyof Coin>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof MsgConvertCosmosCoinToERC20>, never>>(object: I): MsgConvertCosmosCoinToERC20;
};
export declare const MsgConvertCosmosCoinToERC20Response: {
    typeUrl: string;
    encode(_: MsgConvertCosmosCoinToERC20Response, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgConvertCosmosCoinToERC20Response;
    fromJSON(_: any): MsgConvertCosmosCoinToERC20Response;
    toJSON(_: MsgConvertCosmosCoinToERC20Response): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgConvertCosmosCoinToERC20Response;
};
export declare const MsgConvertCosmosCoinFromERC20: {
    typeUrl: string;
    encode(message: MsgConvertCosmosCoinFromERC20, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgConvertCosmosCoinFromERC20;
    fromJSON(object: any): MsgConvertCosmosCoinFromERC20;
    toJSON(message: MsgConvertCosmosCoinFromERC20): unknown;
    fromPartial<I extends {
        initiator?: string | undefined;
        receiver?: string | undefined;
        amount?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
    } & {
        initiator?: string | undefined;
        receiver?: string | undefined;
        amount?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["amount"], keyof Coin>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof MsgConvertCosmosCoinFromERC20>, never>>(object: I): MsgConvertCosmosCoinFromERC20;
};
export declare const MsgConvertCosmosCoinFromERC20Response: {
    typeUrl: string;
    encode(_: MsgConvertCosmosCoinFromERC20Response, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgConvertCosmosCoinFromERC20Response;
    fromJSON(_: any): MsgConvertCosmosCoinFromERC20Response;
    toJSON(_: MsgConvertCosmosCoinFromERC20Response): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgConvertCosmosCoinFromERC20Response;
};
/** Msg defines the evmutil Msg service. */
export interface Msg {
    /** ConvertCoinToERC20 defines a method for converting sdk.Coin to Kava ERC20. */
    ConvertCoinToERC20(request: MsgConvertCoinToERC20): Promise<MsgConvertCoinToERC20Response>;
    /** ConvertERC20ToCoin defines a method for converting Kava ERC20 to sdk.Coin. */
    ConvertERC20ToCoin(request: MsgConvertERC20ToCoin): Promise<MsgConvertERC20ToCoinResponse>;
    /** ConvertCosmosCoinToERC20 defines a method for converting a cosmos sdk.Coin to an ERC20. */
    ConvertCosmosCoinToERC20(request: MsgConvertCosmosCoinToERC20): Promise<MsgConvertCosmosCoinToERC20Response>;
    /** ConvertCosmosCoinFromERC20 defines a method for converting a cosmos sdk.Coin to an ERC20. */
    ConvertCosmosCoinFromERC20(request: MsgConvertCosmosCoinFromERC20): Promise<MsgConvertCosmosCoinFromERC20Response>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    ConvertCoinToERC20(request: MsgConvertCoinToERC20): Promise<MsgConvertCoinToERC20Response>;
    ConvertERC20ToCoin(request: MsgConvertERC20ToCoin): Promise<MsgConvertERC20ToCoinResponse>;
    ConvertCosmosCoinToERC20(request: MsgConvertCosmosCoinToERC20): Promise<MsgConvertCosmosCoinToERC20Response>;
    ConvertCosmosCoinFromERC20(request: MsgConvertCosmosCoinFromERC20): Promise<MsgConvertCosmosCoinFromERC20Response>;
}
