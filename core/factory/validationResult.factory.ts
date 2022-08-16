import { ValidationResult } from "../classes/validationResult.class"
import { IValidationResult } from "../interfaces/validationResult.interface"

export function createValidationResult(): IValidationResult {
    let validationResult = new ValidationResult()
    validationResult.isValid = true
    validationResult.reasons = []
    return validationResult
}