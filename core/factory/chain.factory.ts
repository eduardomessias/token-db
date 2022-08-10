import { Chain } from "../interfaces/chain.interface"
import { Token } from "../interfaces/token.interface"
import { createToken } from "./token.factory"

export function createChain(difficulty: number = 5): Chain {
    let chain: Chain
    chain.difficulty = difficulty
    chain.createGenesis = (): Token => {
        return createToken()
    }
}