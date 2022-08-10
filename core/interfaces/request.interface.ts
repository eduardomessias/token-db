import { Effectiveness } from "./effectiveness.interface"


export interface Request {
    id: string,
    timestamp: Date,
    content: any,
    effectiveness: Effectiveness,
    pushBack: string,

    calcHash(): string
}