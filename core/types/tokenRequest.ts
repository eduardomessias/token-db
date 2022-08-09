import { TokenRequestEffectiveness } from "./tokenRequestEffectiveness"


export interface TokenRequest {
    id: String,
    timestamp: Date,
    content: any,
    effectiveness: TokenRequestEffectiveness,
    pushBack: String
}