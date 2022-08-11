import { IToken } from "./token.interface"

export interface IChain {
    chain: Array<IToken>,
    difficulty: number,
    createGenesis(): IToken,
    last(): IToken,
    add(t: IToken): void,
    mine(t: IToken): IToken,
    validate(): Boolean
}