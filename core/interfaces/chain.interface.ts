import { IBlock } from "./block.interface"
import { IRequest } from "./request.interface"

export interface IChain {
    chain: Array<IBlock>,
    difficulty: number,
    queue: Array<IRequest>,
    reward: number,
    lastAt: Date,
    lastIndex: number,
    createGenesis(): IBlock,
    last(): IBlock,
    add(t: IBlock): void,
    mine(t: IBlock): IBlock,
    validate(): Boolean
}