import { createValidationResult } from "../factory/validationResult.factory"
import { IRequest } from "../interfaces/request.interface"
import { IValidationResult } from "../interfaces/validationResult.interface"

export function validateBody(request: IRequest): IValidationResult {
    let validationResult: IValidationResult = createValidationResult()

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
        validationResult.reasons.push('Push-back was not assigned')
    }

    return validationResult
}