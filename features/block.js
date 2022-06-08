import sha256 from "crypto-js/sha256"


export default class Block {
    constructor(timestamp, tokens, previousHash = "") {
        this.timestamp = timestamp
        this.tokens = tokens
        this.previousHash = previousHash
        this.hash = this.calcHash()
    }

    calcHash() {
        return sha256(this.previousHash + this.timestamp + JSON.stringify(this.data) + this.nonce).toString()
    }

    isValid() {
        for (const token of this.tokens) {
            if (!token.isValid()) {
                return false
            }
        }
        return true
    }
}