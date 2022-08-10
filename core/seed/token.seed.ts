import { TokenStatus } from "../enums/tokenStatus.enum";
import { Token } from "../interfaces/token.interface";
import { seedRequest } from "./request.seed";

export function seedToken(): Token {
    return {
        req: seedRequest(),
        status: TokenStatus.Pending,
        isValid: false,
        identity: null
    }
}