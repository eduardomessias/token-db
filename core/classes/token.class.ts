import { TokenStatus } from "../enums/tokenStatus.enum";
import { createHash } from "../factory/hash.factory";
import { IRequest } from "../interfaces/request.interface";
import { IToken } from "../interfaces/token.interface";

export class Token implements IToken {
    timestamp: Date
    hash: string
    req: IRequest
    status: TokenStatus
    isValid: boolean
    identity: string

    constructor(req: IRequest) {
        this.req = req
        this.status = TokenStatus.Pending
        this.isValid = false
        this.hash = this.calcHash()
    }

    calcHash(): string {
        return createHash(JSON.stringify(this.req))
    }
    validate(): boolean {
        return this.hash === this.calcHash()
    }
}