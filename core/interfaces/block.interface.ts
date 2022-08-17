import { IToken } from "./token.interface";

export interface IBlock {
    timestamp: Date,
    previous: string,
    hash: string,
    tokens: Array<IToken>,
    nonce: number
    calcHash(): string,
    validate(): boolean
}