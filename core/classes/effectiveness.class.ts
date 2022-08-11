import { EffectivenessType } from '../enums/effectivenessType.enum'
import { IEffectiveness } from '../interfaces/effectiveness.interface'

export class Effectiveness implements IEffectiveness {
    type: EffectivenessType
    expires: any

    constructor(type: EffectivenessType = EffectivenessType.Unlimited, expires: any) {
        this.type = type
        this.expires = expires
    }
}