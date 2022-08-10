// const token = {
//     req: {
//         id: <hash>,
//         timestamp: <utc datetime>,
//         content: <any>,
//         effectiveness: {
//             type: 'unlimited'|'usage'|'period',
//             expires: 'never'|<int>|<utc datetime>
//         },
//         pushBack: <URL>
//     },
//     status: pending,
//     valid: false,
//     identity: null|<hash>
// }
import { TokenStatus } from '../enums/tokenStatus.enum'
import { Request } from '../interfaces/request.interface'
import {Token as IToken} from '../interfaces/token.interface'
const SHA256 = require('crypto-js/sha256')

class Token implements IToken {
    req: Request
    previous: string
    hash: string
    nonce: number
    status: TokenStatus
    isValid: boolean

    constructor(req, previousHash = '') {
        this.req = req
        this.previous = previousHash
        this.hash = this.calcHash()
        this.nonce = 0
        this.status = TokenStatus.Pending
        this.valid = false
        this.identity = null
    }

    calcHash() {
        return SHA256(JSON.stringify(this.req) + this.previous + this.nonce).toString()
    }

    isValid() {
        return this.hash === this.calcHash()
    }
}

class TokenChain {
    constructor() {
        this.chain = [this.createGenesis()]
        this.difficulty = 5
    }

    createGenesis() {
        return new Token('GENESIS', 0)
    }

    lastToken() {
        return this.chain[this.chain.length - 1]
    }

    addToken(token) {
        token.previousHash = this.lastToken().hash
        this.createToken(token)
        this.chain.push(token)
    }

    createToken(token) {
        let tokenHashDifficulty = token.hash.substring(0, this.difficulty) // 'e.g: '00000'
        const difficultyArray = new Array(this.difficulty + 1).join('0') // e.g:'00000'

        while (tokenHashDifficulty !== difficultyArray) {
            token.nonce++
            token.hash = token.calcHash()

            tokenHashDifficulty = token.hash.substring(0, this.difficulty)
        }

        console.log("Token created: " + token.hash)
	return token
    }

    isValidChain() {
        for (let i = 1; i < this.chain.length; i++) {
            const currentToken = this.chain[i]
            const previousToken = this.chain[i - 1]

            if (currentToken.isValid() !== true) {
                return false
            }

            if (currentToken.previousHash !== previousToken.hash) {
                return false
            }
        }

        return true
    }
}

module.exports = {
    Token,
    TokenChain
}
