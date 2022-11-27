/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */
import * as web3 from '@solana/web3.js';
import * as beet from '@metaplex-foundation/beet';
export declare type UpdatePolicyArg = {
    jsonRule: string;
    authority: web3.PublicKey;
};
/**
 * @category userTypes
 * @category generated
 */
export declare const updatePolicyArgBeet: beet.FixableBeetArgsStruct<UpdatePolicyArg>;