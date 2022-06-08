import sha256 from "crypto-js/sha256"
import EC from "elliptic/lib/elliptic/ec"


import Block from "./block"


export default class Blockchain {
    constructor() {
        this.chain = []
    }

    createGenesisBlock() {
        return new Block()
    }
}