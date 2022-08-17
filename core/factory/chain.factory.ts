import { IChain } from "../interfaces/chain.interface"
import { Chain } from "../classes/chain.class"

export function createChain(difficulty: number = 5): IChain {
    let chain: IChain = new Chain(difficulty)
    return chain
}