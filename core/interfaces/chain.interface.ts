import { IBlock } from "./block.interface"
import { IQueue } from "./queue.interface"

export interface IChain {
    chain: Array<IBlock>,
    difficulty: number,
    queue: IQueue,
    reward: number,
    lastAt: Date,
    lastIndex: number,
    createGenesis(): IBlock,
    last(): IBlock,
    add(t: IBlock): void,
    mine(t: IBlock): IBlock,
    validate(): Boolean
}