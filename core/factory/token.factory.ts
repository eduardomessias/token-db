import { Token } from "../classes/token.class";
import { IRequest } from "../interfaces/request.interface";
import { IToken } from "../interfaces/token.interface";

export function createToken(req: IRequest): IToken {
    let token: IToken = new Token(req)
    return token
}

export function createTokens(requests: Array<IRequest>): IToken {
    let tokens: Array<IToken> = new Array<IToken>(requests.length)
    while (this.queue.size() > 0) {
        const request: IRequest = this.queue.dequeue()
        const token: IToken = new Token(request)
        tokens.push(token)
    }
}