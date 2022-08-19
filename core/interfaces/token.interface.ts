import { TokenStatus } from "../enums/tokenStatus.enum";
import { IRequest } from "./request.interface";

export interface IToken {
    hash: string,
    req: IRequest,
    status: TokenStatus,
    isValid: boolean,
    identity: string,
    usageCount: number,
    calcHash(): string,
    validate(): boolean
}