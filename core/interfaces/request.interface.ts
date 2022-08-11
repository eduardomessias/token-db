import { IEffectiveness } from "./effectiveness.interface"


export interface IRequest {
    id: string,
    timestamp: Date,
    content: any,
    effectiveness: IEffectiveness,
    pushBack: string,
    calcHash(): string
}