import sha256 from 'crypt-js/sha256'
import EC from 'elliptic/lib/elliptic/ec'


export default class Token {
    constructor(id, timestamp, data) {
        this.id = id
        this.timestamp = timestamp
        this.data = data
    }


    calcHash() {
        return sha256(this.id + this.timestamp + this.data).toString()
    }


    sign(key) {
        if (key.getPublic('hex') !== this.id) {
            throw new Error("Cannot sign the tokens for third-party request")
        }
        const hash = this.calcHash()
        const signature = key.sign(hash, 'base64')
        this.signature = signature.toDER('hex')
    }


    isValid() {
        if (this.id === null) {
            return true
        }
        if (!this.signature || this.signature.length === 0) {
            throw new Error("No signature in this token")
        }
        const elliptic = new EC()
        const publicKey = elliptic.keyFromPublic(this.id, 'hex')
        return publicKey.verify(this.calcHash(), this.signature)
    }
}