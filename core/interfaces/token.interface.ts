import { TokenStatus } from "../enums/tokenStatus.enum";
import { IRequest } from "./request.interface";

export interface IToken {
    hash: string,
    req: IRequest,
    status: TokenStatus,
    isValid: boolean,
    identity: string,
    calcHash(): string,
    validate(): boolean
}