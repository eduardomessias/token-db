import { createHash } from "../factory/hash.factory";
import { IBlock } from "../interfaces/block.interface";
import { IToken } from "../interfaces/token.interface";

export class Block implements IBlock {
    timestamp: Date
    previous: string
    hash: string
    tokens: Array<IToken>
    nonce: number

    constructor(timestamp: Date, tokens: Array<IToken>, previous: string = "") {
        this.timestamp = timestamp
        this.previous = previous
        this.tokens = tokens
        this.nonce = 0
        this.hash = this.calcHash()
    }

    calcHash(): string {
        return createHash(this.timestamp + this.previous + JSON.stringify(this.tokens) + this.nonce)
    }
    validate(): boolean {
        return this.hash === this.calcHash()
    }
}