import { TokenStatus } from "../enums/tokenStatus.enum";
import { IRequest } from "./request.interface";

export interface IToken {
    previous: string,
    hash: string,
    req: IRequest,
    status: TokenStatus,
    isValid: boolean,
    identity: string,
    nonce: number
    calcHash(): string,
    validate(): boolean
}