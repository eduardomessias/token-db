import { Block } from "../classes/block.class"
import { IBlock } from "../interfaces/block.interface"
import { IToken } from "../interfaces/token.interface"


export function createBlock(timestamp, tokens: Array<IToken>, previous: string = null): IBlock {
    let block: IBlock = new Block(timestamp, tokens, previous)
    return block
}