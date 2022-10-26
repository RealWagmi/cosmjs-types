/* eslint-disable */
import { Params, Validator, Delegation, UnbondingDelegation, Redelegation } from "./staking";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes, Long } from "../../../helpers";
export const protobufPackage = "cosmos.staking.v1beta1";
/** GenesisState defines the staking module's genesis state. */

export interface GenesisState {
  /** params defines all the paramaters of related to deposit. */
  params?: Params;
  /**
   * last_total_power tracks the total amounts of bonded tokens recorded during
   * the previous end block.
   */

  lastTotalPower: Uint8Array;
  /**
   * last_validator_powers is a special index that provides a historical list
   * of the last-block's bonded validators.
   */

  lastValidatorPowers: LastValidatorPower[];
  /** delegations defines the validator set at genesis. */

  validators: Validator[];
  /** delegations defines the delegations active at genesis. */

  delegations: Delegation[];
  /** unbonding_delegations defines the unbonding delegations active at genesis. */

  unbondingDelegations: UnbondingDelegation[];
  /** redelegations defines the redelegations active at genesis. */

  redelegations: Redelegation[];
  exported: boolean;
}
/** LastValidatorPower required for validator set update logic. */

export interface LastValidatorPower {
  /** address is the address of the validator. */
  address: string;
  /** power defines the power of the validator. */

  power: Long;
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    lastTotalPower: new Uint8Array(),
    lastValidatorPowers: [],
    validators: [],
    delegations: [],
    unbondingDelegations: [],
    redelegations: [],
    exported: false,
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    if (message.lastTotalPower.length !== 0) {
      writer.uint32(18).bytes(message.lastTotalPower);
    }

    for (const v of message.lastValidatorPowers) {
      LastValidatorPower.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    for (const v of message.delegations) {
      Delegation.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    for (const v of message.unbondingDelegations) {
      UnbondingDelegation.encode(v!, writer.uint32(50).fork()).ldelim();
    }

    for (const v of message.redelegations) {
      Redelegation.encode(v!, writer.uint32(58).fork()).ldelim();
    }

    if (message.exported === true) {
      writer.uint32(64).bool(message.exported);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        case 2:
          message.lastTotalPower = reader.bytes();
          break;

        case 3:
          message.lastValidatorPowers.push(LastValidatorPower.decode(reader, reader.uint32()));
          break;

        case 4:
          message.validators.push(Validator.decode(reader, reader.uint32()));
          break;

        case 5:
          message.delegations.push(Delegation.decode(reader, reader.uint32()));
          break;

        case 6:
          message.unbondingDelegations.push(UnbondingDelegation.decode(reader, reader.uint32()));
          break;

        case 7:
          message.redelegations.push(Redelegation.decode(reader, reader.uint32()));
          break;

        case 8:
          message.exported = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      lastTotalPower: isSet(object.lastTotalPower)
        ? bytesFromBase64(object.lastTotalPower)
        : new Uint8Array(),
      lastValidatorPowers: Array.isArray(object?.lastValidatorPowers)
        ? object.lastValidatorPowers.map((e: any) => LastValidatorPower.fromJSON(e))
        : [],
      validators: Array.isArray(object?.validators)
        ? object.validators.map((e: any) => Validator.fromJSON(e))
        : [],
      delegations: Array.isArray(object?.delegations)
        ? object.delegations.map((e: any) => Delegation.fromJSON(e))
        : [],
      unbondingDelegations: Array.isArray(object?.unbondingDelegations)
        ? object.unbondingDelegations.map((e: any) => UnbondingDelegation.fromJSON(e))
        : [],
      redelegations: Array.isArray(object?.redelegations)
        ? object.redelegations.map((e: any) => Redelegation.fromJSON(e))
        : [],
      exported: isSet(object.exported) ? Boolean(object.exported) : false,
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.lastTotalPower !== undefined &&
      (obj.lastTotalPower = base64FromBytes(
        message.lastTotalPower !== undefined ? message.lastTotalPower : new Uint8Array(),
      ));

    if (message.lastValidatorPowers) {
      obj.lastValidatorPowers = message.lastValidatorPowers.map((e) =>
        e ? LastValidatorPower.toJSON(e) : undefined,
      );
    } else {
      obj.lastValidatorPowers = [];
    }

    if (message.validators) {
      obj.validators = message.validators.map((e) => (e ? Validator.toJSON(e) : undefined));
    } else {
      obj.validators = [];
    }

    if (message.delegations) {
      obj.delegations = message.delegations.map((e) => (e ? Delegation.toJSON(e) : undefined));
    } else {
      obj.delegations = [];
    }

    if (message.unbondingDelegations) {
      obj.unbondingDelegations = message.unbondingDelegations.map((e) =>
        e ? UnbondingDelegation.toJSON(e) : undefined,
      );
    } else {
      obj.unbondingDelegations = [];
    }

    if (message.redelegations) {
      obj.redelegations = message.redelegations.map((e) => (e ? Redelegation.toJSON(e) : undefined));
    } else {
      obj.redelegations = [];
    }

    message.exported !== undefined && (obj.exported = message.exported);
    return obj;
  },

  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params =
      object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.lastTotalPower = object.lastTotalPower ?? new Uint8Array();
    message.lastValidatorPowers =
      object.lastValidatorPowers?.map((e) => LastValidatorPower.fromPartial(e)) || [];
    message.validators = object.validators?.map((e) => Validator.fromPartial(e)) || [];
    message.delegations = object.delegations?.map((e) => Delegation.fromPartial(e)) || [];
    message.unbondingDelegations =
      object.unbondingDelegations?.map((e) => UnbondingDelegation.fromPartial(e)) || [];
    message.redelegations = object.redelegations?.map((e) => Redelegation.fromPartial(e)) || [];
    message.exported = object.exported ?? false;
    return message;
  },
};

function createBaseLastValidatorPower(): LastValidatorPower {
  return {
    address: "",
    power: Long.ZERO,
  };
}

export const LastValidatorPower = {
  encode(message: LastValidatorPower, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    if (!message.power.isZero()) {
      writer.uint32(16).int64(message.power);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LastValidatorPower {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLastValidatorPower();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.power = reader.int64() as Long;
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): LastValidatorPower {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      power: isSet(object.power) ? Long.fromValue(object.power) : Long.ZERO,
    };
  },

  toJSON(message: LastValidatorPower): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.power !== undefined && (obj.power = (message.power || Long.ZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<LastValidatorPower>): LastValidatorPower {
    const message = createBaseLastValidatorPower();
    message.address = object.address ?? "";
    message.power =
      object.power !== undefined && object.power !== null ? Long.fromValue(object.power) : Long.ZERO;
    return message;
  },
};
