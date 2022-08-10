import { Token } from "../classes/token.class"
import { Request } from "../interfaces/request.interface"


export function createToken(previous: string = null, request: Request = null): Token {
    let token: Token = new Token(previous, request)
    return token
}