import { IValidationResult } from "../interfaces/validationResult.interface"

export class ValidationResult implements IValidationResult {
    isValid: Boolean
    reasons: Array<string>
}