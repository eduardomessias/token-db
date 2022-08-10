import { TokenStatus } from "../enums/tokenStatus.enum";
import { Request } from "./request.interface";

export interface Token {
    req: Request,
    status: TokenStatus,
    isValid: Boolean,
    identity: String
}