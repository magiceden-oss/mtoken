"use strict";
/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createInitAccountInstruction = exports.initAccountInstructionDiscriminator = exports.initAccountStruct = void 0;
const splToken = __importStar(require("@solana/spl-token"));
const beet = __importStar(require("@metaplex-foundation/beet"));
const web3 = __importStar(require("@solana/web3.js"));
/**
 * @category Instructions
 * @category InitAccount
 * @category generated
 */
exports.initAccountStruct = new beet.BeetArgsStruct([['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)]], 'InitAccountInstructionArgs');
exports.initAccountInstructionDiscriminator = [
    169, 188, 158, 199, 9, 151, 101, 125,
];
/**
 * Creates a _InitAccount_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @category Instructions
 * @category InitAccount
 * @category generated
 */
function createInitAccountInstruction(accounts, programId = new web3.PublicKey('mtokYxNhZEihbDq3r6LX22pLKnpuQvXV5kwhgCDCWw4')) {
    var _a, _b;
    const [data] = exports.initAccountStruct.serialize({
        instructionDiscriminator: exports.initAccountInstructionDiscriminator,
    });
    const keys = [
        {
            pubkey: accounts.policy,
            isWritable: false,
            isSigner: false,
        },
        {
            pubkey: accounts.freezeAuthority,
            isWritable: false,
            isSigner: false,
        },
        {
            pubkey: accounts.mint,
            isWritable: false,
            isSigner: false,
        },
        {
            pubkey: accounts.metadata,
            isWritable: false,
            isSigner: false,
        },
        {
            pubkey: accounts.mintState,
            isWritable: true,
            isSigner: false,
        },
        {
            pubkey: accounts.payer,
            isWritable: true,
            isSigner: true,
        },
        {
            pubkey: accounts.from,
            isWritable: false,
            isSigner: false,
        },
        {
            pubkey: accounts.fromAccount,
            isWritable: true,
            isSigner: false,
        },
        {
            pubkey: (_a = accounts.tokenProgram) !== null && _a !== void 0 ? _a : splToken.TOKEN_PROGRAM_ID,
            isWritable: false,
            isSigner: false,
        },
        {
            pubkey: (_b = accounts.systemProgram) !== null && _b !== void 0 ? _b : web3.SystemProgram.programId,
            isWritable: false,
            isSigner: false,
        },
        {
            pubkey: accounts.associatedTokenProgram,
            isWritable: false,
            isSigner: false,
        },
        {
            pubkey: accounts.cmtProgram,
            isWritable: false,
            isSigner: false,
        },
        {
            pubkey: accounts.instructions,
            isWritable: false,
            isSigner: false,
        },
    ];
    const ix = new web3.TransactionInstruction({
        programId,
        keys,
        data,
    });
    return ix;
}
exports.createInitAccountInstruction = createInitAccountInstruction;
