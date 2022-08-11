import { EffectivenessType } from "../enums/effectivenessType.enum"
import { createHash } from "../factory/hash.factory"
import { IRequest } from "../interfaces/request.interface"
import { Effectiveness } from "./effectiveness.class"


export class Request implements IRequest {
    id: string
    timestamp: Date
    content: any
    effectiveness: Effectiveness
    pushBack: string
    receipt: string

    constructor() {
        this.timestamp = new Date()
        this.effectiveness = new Effectiveness(EffectivenessType.Unlimited, 'never')
        this.id = this.calcHash()
    }

    calcHash(): string {
        return createHash(this.id + JSON.stringify(this.content) + this.timestamp + JSON.stringify(this.effectiveness) + this.pushBack)
    }

    confirm(): string {
        this.receipt = this.calcHash()
        return this.receipt
    }
}