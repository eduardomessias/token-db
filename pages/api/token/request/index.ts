export interface TokenRequestEffectiveness {
    type: String,
    expires: String | Date | Number
}

export interface TokenRequest {
    id: String,
    timestamp: Date,
    content: any,
    effectiveness: TokenRequestEffectiveness,
    pushBack: String
}

export interface TokenRequestValidationResult {
    isValid: Boolean,
    reasons: Array<String>
}

export function parseBody(body: any): TokenRequest {
    const tokenRequest: TokenRequest = {
        id: body.tokenRequestId,
        timestamp: body.tokenRequestTimestamp,
        content: body.tokenRequestContent,
        effectiveness: {
            type: body.tokenRequestEffectivenessType,
            expires: body.tokenRequestEffectivenessExpires
        },
        pushBack: body.tokenRequestPushBack
    }

    return tokenRequest
}

export function validateBody(tokenRequest: TokenRequest): TokenRequestValidationResult {
    let validationResult: TokenRequestValidationResult = {
        isValid: true,
        reasons: []
    }

    if (!tokenRequest.id) {
        validationResult.isValid = false
        validationResult.reasons.push('ID was not assigned')
    }

    if (!tokenRequest.timestamp) {
        validationResult.isValid = false
        validationResult.reasons.push('Timestamp was not assigned')
    }

    if (!tokenRequest.content) {
        validationResult.isValid = false
        validationResult.reasons.push('Content was not assigned')
    }

    if (!tokenRequest.effectiveness.type) {
        validationResult.isValid = false
        validationResult.reasons.push('Effectiveness type was not assigned')
    }

    if (!tokenRequest.effectiveness.expires) {
        validationResult.isValid = false
        validationResult.reasons.push('Effectiveness expires was not assigned')
    }

    if (!tokenRequest.pushBack) {
        validationResult.isValid = false
        validationResult.reasons.push('Push-back was not assigned')
    }

    return validationResult
}

export default function handler(req, res) {
    const body = req.body
    const tokenRequest = parseBody(body)
    const validationResult = validateBody(tokenRequest)

    if (!validationResult.isValid) {
        return res.status(400).json({ reasons: validationResult.reasons })
    }

    console.log('Token request received: ', JSON.stringify(tokenRequest))

    // IF SUCCESS
    res.redirect("/token/request/confirm")

    // ELSE
    //res.status(200).json({ data: `Token request ${body.tokenRequestId} received at ${body.tokenRequestTimestamp} and added to the queue` })
}
