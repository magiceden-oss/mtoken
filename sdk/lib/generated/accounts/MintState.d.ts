/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */
/// <reference types="node" />
import * as web3 from '@solana/web3.js';
import * as beet from '@metaplex-foundation/beet';
import * as beetSolana from '@metaplex-foundation/beet-solana';
/**
 * Arguments used to create {@link MintState}
 * @category Accounts
 * @category generated
 */
export declare type MintStateArgs = {
    version: number;
    bump: number[];
    mint: web3.PublicKey;
    policy: web3.PublicKey;
    lockedBy: beet.COption<web3.PublicKey>;
    lastApprovedAt: beet.bignum;
    lastTransferredAt: beet.bignum;
    transferredCount: number;
};
export declare const mintStateDiscriminator: number[];
/**
 * Holds the data for the {@link MintState} Account and provides de/serialization
 * functionality for that data
 *
 * @category Accounts
 * @category generated
 */
export declare class MintState implements MintStateArgs {
    readonly version: number;
    readonly bump: number[];
    readonly mint: web3.PublicKey;
    readonly policy: web3.PublicKey;
    readonly lockedBy: beet.COption<web3.PublicKey>;
    readonly lastApprovedAt: beet.bignum;
    readonly lastTransferredAt: beet.bignum;
    readonly transferredCount: number;
    private constructor();
    /**
     * Creates a {@link MintState} instance from the provided args.
     */
    static fromArgs(args: MintStateArgs): MintState;
    /**
     * Deserializes the {@link MintState} from the data of the provided {@link web3.AccountInfo}.
     * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
     */
    static fromAccountInfo(accountInfo: web3.AccountInfo<Buffer>, offset?: number): [MintState, number];
    /**
     * Retrieves the account info from the provided address and deserializes
     * the {@link MintState} from its data.
     *
     * @throws Error if no account info is found at the address or if deserialization fails
     */
    static fromAccountAddress(connection: web3.Connection, address: web3.PublicKey): Promise<MintState>;
    /**
     * Provides a {@link web3.Connection.getProgramAccounts} config builder,
     * to fetch accounts matching filters that can be specified via that builder.
     *
     * @param programId - the program that owns the accounts we are filtering
     */
    static gpaBuilder(programId?: web3.PublicKey): beetSolana.GpaBuilder<{
        version: any;
        bump: any;
        mint: any;
        policy: any;
        lockedBy: any;
        lastApprovedAt: any;
        lastTransferredAt: any;
        transferredCount: any;
        accountDiscriminator: any;
    }>;
    /**
     * Deserializes the {@link MintState} from the provided data Buffer.
     * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
     */
    static deserialize(buf: Buffer, offset?: number): [MintState, number];
    /**
     * Serializes the {@link MintState} into a Buffer.
     * @returns a tuple of the created Buffer and the offset up to which the buffer was written to store it.
     */
    serialize(): [Buffer, number];
    /**
     * Returns the byteSize of a {@link Buffer} holding the serialized data of
     * {@link MintState} for the provided args.
     *
     * @param args need to be provided since the byte size for this account
     * depends on them
     */
    static byteSize(args: MintStateArgs): number;
    /**
     * Fetches the minimum balance needed to exempt an account holding
     * {@link MintState} data from rent
     *
     * @param args need to be provided since the byte size for this account
     * depends on them
     * @param connection used to retrieve the rent exemption information
     */
    static getMinimumBalanceForRentExemption(args: MintStateArgs, connection: web3.Connection, commitment?: web3.Commitment): Promise<number>;
    /**
     * Returns a readable version of {@link MintState} properties
     * and can be used to convert to JSON and/or logging
     */
    pretty(): {
        version: number;
        bump: number[];
        mint: string;
        policy: string;
        lockedBy: web3.PublicKey;
        lastApprovedAt: number | {
            toNumber: () => number;
        };
        lastTransferredAt: number | {
            toNumber: () => number;
        };
        transferredCount: number;
    };
}
/**
 * @category Accounts
 * @category generated
 */
export declare const mintStateBeet: beet.FixableBeetStruct<MintState, MintStateArgs & {
    accountDiscriminator: number[];
}>;