import { createBlock } from '../factory/block.factory'
import { IChain } from '../interfaces/chain.interface'
import { IBlock } from '../interfaces/block.interface'
import { IToken } from '../interfaces/token.interface'
import { Token } from './token.class'
import { IRequest } from '../interfaces/request.interface'
import { Request } from './request.class'
import { Block } from './block.class'
import { TokenStatus } from '../enums/tokenStatus.enum'

export class Chain implements IChain {
    chain: Array<IBlock>
    difficulty: number
    queue: Array<IRequest>
    reward: number
    lastAt: Date
    lastIndex: number

    constructor(difficulty: number = 5) {
        this.difficulty = difficulty
        this.chain = [this.createGenesis()]
        this.queue = []
        this.reward = 1
    }

    createGenesis(): IBlock {
        let req: IRequest = new Request()
        req.content = "GENESIS"
        req.calcHash()
        const token: IToken = new Token(req)
        const tokens: Array<IToken> = [token]
        const genesis: IBlock = createBlock(new Date(), tokens, "")
        return genesis
    }

    last(): IBlock {
        return this.chain[this.chain.length - 1]
    }

    add(t: IBlock): void {
        t.previous = this.last().hash
        this.mine(t)
        this.chain.push(t)
    }

    size(): number {
        return this.chain.length
    }

    // This will be called assynchronously
    minePending() {
        let tokens: Array<IToken> = this.queue.map((request: IRequest) => {
            return new Token(request)
        })
        let block: IBlock = new Block(new Date(), tokens)
        this.add(block)

        for (let token of block.tokens) {
            token.status = TokenStatus.Success
        }

        this.resetQueue()
    }

    resetQueue() {
        this.queue = []
    }

    enqueue(r: IRequest) {
        this.queue.push(r)    
    }

    // TODO: RETURN THE REQUEST ENQUEUE CONFIRMATION
    // TODO: ASSYNCHRONOUSLY CALL MINE PENDING

    mine(t: IBlock): IBlock {

        // BLOCK HASH = 0eff2e4f4ce2411de17895026320f790
        // BLOCK LEFT HASH = "0eff2"
        let blockLeftHash: string = t.hash.substring(0, this.difficulty)
        
        // CHAIN LEFT HASH = 00000
        let chainLeftHash: string = new Array(this.difficulty).fill("0").join("") // "00000"
        
        
        while (blockLeftHash !== chainLeftHash) {
            t.nonce++
            t.hash = t.calcHash()
            blockLeftHash = t.hash.substring(0, this.difficulty)
        }

        this.lastIndex = this.size() - 1
        this.lastAt = new Date()

        console.log(`Block ${this.lastIndex} mined at ${this.lastAt}`)

        return t
    }

    validate(): Boolean {
        for (let cursor: number = 1; cursor < this.chain.length; cursor++) {
            const current = this.chain[cursor]
            const previous = this.chain[cursor - 1]
            if (current.validate() !== true) {
                return false
            }
            if (current.previous !== previous.hash) {
                return false
            }
        }
        return true
    }
}