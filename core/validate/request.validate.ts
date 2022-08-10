import { Request } from "../interfaces/request.interface"
import { ValidationResult } from "../interfaces/validationResult.interface"

export function validateBody(request: Request): ValidationResult {
    let validationResult: ValidationResult = {
        isValid: true,
        reasons: []
    }

    if (!request.id) {
        validationResult.isValid = false
        validationResult.reasons.push('ID was not assigned')
    }

    if (!request.timestamp) {
        validationResult.isValid = false
        validationResult.reasons.push('Timestamp was not assigned')
    }

    if (!request.content) {
        validationResult.isValid = false
        validationResult.reasons.push('Content was not assigned')
    }

    if (!request.effectiveness.type) {
        validationResult.isValid = false
        validationResult.reasons.push('Effectiveness type was not assigned')
    }

    if (!request.effectiveness.expires) {
        validationResult.isValid = false
        validationResult.reasons.push('Effectiveness expires was not assigned')
    }

    if (!request.pushBack) {
        validationResult.isValid = false
        validationResult.reasons.push('Push-back was not assigned')
    }

    return validationResult
}