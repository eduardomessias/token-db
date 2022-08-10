import { createToken } from '../factory/token.factory'
import {Chain as IChain} from '../interfaces/chain.interface'
import { Token } from '../interfaces/token.interface'

export class Chain implements IChain {
    chain: Array<Token>
    difficulty: number

    constructor(difficulty: number = 5) {
        this.difficulty = difficulty
        this.chain = [this.createGenesis()]
    }

    createGenesis(): Token {
        return createToken()
    }

    last(): Token {
        return this.chain[this.chain.length - 1]
    }

    add(t: Token): void {
        t.previous = this.last().hash
        this.mineToken(t)
        this.chain.push(t)
    }

    mineToken(t: Token): Token {
        let tokenDiffSet: string = t.hash.substring(0, this.difficulty)
        let chainDiffSet: string = new Array(this.difficulty + 1).join(tokenDiffSet)
        while (tokenDiffSet !== chainDiffSet) {
            t.nonce++
            t.hash = t.calcHash()
            tokenDiffSet = t.hash.substring(0, this.difficulty)
        }
        return t
    }

    validate(): Boolean {
        for (let tokenCursor: number = 1; tokenCursor < this.chain.length; tokenCursor++) {
            const currentToken = this.chain[tokenCursor]
            const previousToken = this.chain[tokenCursor - 1]
            if (currentToken.validate() !== true) {
                return false
            }
            if (currentToken.previous !== previousToken.hash) {
                return false
            }
        }
        return true
    }
}