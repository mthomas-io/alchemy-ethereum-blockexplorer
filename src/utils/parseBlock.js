import { Utils } from "alchemy-sdk";

export const parseBlock = (block) => ({
    baseFeePerGas: Utils.formatEther(block.baseFeePerGas),
    gasLimit: Utils.formatEther(block.gasLimit),
    gasUsed: Utils.formatEther(block.gasUsed),
    hash: block.hash,
    miner: block.miner,
    nonce: block.nonce,
    number: block.number,
    parentHash: block.parentHash,
    timestamp: (new Date(block.timestamp * 1000)).toISOString(),
    transactions: block.transactions,
})