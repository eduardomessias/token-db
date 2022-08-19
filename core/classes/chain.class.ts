import { createBlock } from '../factory/block.factory'
import { IChain } from '../interfaces/chain.interface'
import { IBlock } from '../interfaces/block.interface'
import { IToken } from '../interfaces/token.interface'
import { Token } from './token.class'
import { IRequest } from '../interfaces/request.interface'
import { Block } from './block.class'
import { IQueue } from '../interfaces/queue.interface'
import { Queue } from './queue.class'
import { createToken } from '../factory/token.factory'
import { createRequest } from '../factory/request.factory'

export class Chain implements IChain {
    chain: Array<IBlock>
    difficulty: number
    queue: IQueue
    reward: number
    lastAt: Date
    lastIndex: number

    constructor(difficulty: number = Number(process.env.DEFAULT_CHAIN_DIFFICULTY)) {
        this.difficulty = difficulty
        this.chain = [this.createGenesis()]
        this.queue = new Queue()
        this.reward = 1
    }

    createGenesis(): IBlock {
        const req: IRequest = createRequest("GENESIS")
        const token: IToken = createToken(req)
        const tokens: Array<IToken> = [token]
        const genesis: IBlock = createBlock(new Date(), tokens, "")
        return genesis
    }

    last(): IBlock {
        return this.chain[this.chain.length - 1]
    }

    add(t: IBlock): void {
        this.chain.push(t)
    }

    size(): number {
        return this.chain.length
    }

    calcBlockSize(): number {
        let blockSize: number
        if (this.queue.size() > Number(process.env.DEFAULT_BLOCK_SIZE)) {
            blockSize = Number(process.env.DEFAULT_BLOCK_SIZE)
        } else {
            blockSize = this.queue.size()
        }
        return blockSize
    }

    buildTokens(): Array<IToken> {
        let blockSize: number = this.calcBlockSize()
        let tokens: Array<IToken> = new Array<IToken>()
        while (tokens.length <= blockSize) {
            const request: IRequest = this.queue.dequeue()
            const token: IToken = new Token(request)
            tokens.push(token)
        }
        return tokens
    }

    // This will be called assynchronously
    minePending() {
        let block: IBlock = new Block(new Date(), this.buildTokens(), this.last().hash)
        this.mine(block)
        this.add(block)
    }

    // TODO: RETURN THE REQUEST ENQUEUE CONFIRMATION
    // TODO: ASSYNCHRONOUSLY CALL MINE PENDING

    mine(t: IBlock): IBlock {
        // BLOCK HASH = 0eff2e4f4ce2411de17895026320f790
        // BLOCK LEFT HASH = "0eff2"
        let blockLeftHash: string = t.hash.substring(0, this.difficulty)
        // CHAIN LEFT HASH = 00000
        let chainLeftHash: string = new Array(this.difficulty).fill("0").join("")
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