/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */
import * as beet from '@metaplex-foundation/beet';
import * as web3 from '@solana/web3.js';
/**
 * @category Instructions
 * @category Approve
 * @category generated
 */
export declare const approveStruct: beet.BeetArgsStruct<{
    instructionDiscriminator: number[];
}>;
/**
 * Accounts required by the _approve_ instruction
 *
 * @property [] policy
 * @property [] freezeAuthority
 * @property [] mint
 * @property [] metadata
 * @property [_writable_] mintState
 * @property [**signer**] from
 * @property [_writable_] fromAccount
 * @property [] to
 * @property [] cmtProgram
 * @property [] instructions
 * @category Instructions
 * @category Approve
 * @category generated
 */
export declare type ApproveInstructionAccounts = {
    policy: web3.PublicKey;
    freezeAuthority: web3.PublicKey;
    mint: web3.PublicKey;
    metadata: web3.PublicKey;
    mintState: web3.PublicKey;
    from: web3.PublicKey;
    fromAccount: web3.PublicKey;
    to: web3.PublicKey;
    tokenProgram?: web3.PublicKey;
    cmtProgram: web3.PublicKey;
    instructions: web3.PublicKey;
};
export declare const approveInstructionDiscriminator: number[];
/**
 * Creates a _Approve_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @category Instructions
 * @category Approve
 * @category generated
 */
export declare function createApproveInstruction(accounts: ApproveInstructionAccounts, programId?: web3.PublicKey): web3.TransactionInstruction;
