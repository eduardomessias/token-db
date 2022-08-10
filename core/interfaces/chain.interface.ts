import { Token } from "./token.interface"

export interface Chain {
    chain: Array<Token>,
    difficulty: number,

    createGenesis(): Token,
    last(): Token,
    add(t: Token): void,
    mineToken(t: Token): Token,
    validate(): Boolean
}