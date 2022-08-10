import { TokenStatus } from "../enums/tokenStatus.enum";
import { Request } from "./request.interface";

export interface Token {
    previous: string,
    hash: string,
    req: Request,
    status: TokenStatus,
    isValid: boolean,
    identity: string,
    nonce: number

    calcHash(): string,
    validate(): boolean
}