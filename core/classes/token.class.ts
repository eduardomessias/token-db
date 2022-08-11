import { TokenStatus } from "../enums/tokenStatus.enum";
import { createHash } from "../factory/hash.factory";
import { IToken } from "../interfaces/token.interface";
import { IRequest } from "../interfaces/request.interface";

export class Token implements IToken {
    previous: string
    hash: string
    req: IRequest
    status: TokenStatus
    isValid: boolean
    identity: string
    nonce: number

    constructor(previous: string = "", req: IRequest = null) {
        this.previous = previous
        this.req = req
        this.status = TokenStatus.Pending
        this.isValid = false
        this.identity = null
        this.nonce = 0
        this.hash = this.calcHash()
    }

    calcHash(): string {
        return createHash(JSON.stringify(this.req) + this.previous + this.nonce)
    }
    validate(): boolean {
        return this.hash === this.calcHash()
    }
}