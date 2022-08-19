import { EffectivenessType } from "../enums/effectivenessType.enum"
import { createValidationResult } from "../factory/validationResult.factory"
import { IEffectiveness } from "../interfaces/effectiveness.interface"
import { IToken } from "../interfaces/token.interface"
import { IValidationResult } from "../interfaces/validationResult.interface"


export function validateEffectiveness(e: IEffectiveness, t: IToken): IValidationResult {
    let validationResult: IValidationResult = createValidationResult()

    switch (e.type) {
        case EffectivenessType.Unlimited:
            validationResult.isValid = true
            return validationResult
        case EffectivenessType.LimitedByTime:
            if (new Date() > e.expires) {
                validationResult.isValid = false
                validationResult.reasons.push(`Token request effectiveness expired at ${e.expires}`)
            }
            return validationResult
        case EffectivenessType.LimitedByUsage:
            if (t.usageCount > e.expires) {
                validationResult.isValid = false
                validationResult.reasons.push(`Token request effectiveness expired in usage number ${e.expires}`)
            }
            return validationResult
    }
}