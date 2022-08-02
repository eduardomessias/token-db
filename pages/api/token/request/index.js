export function validateBody(body) {
    let isValid = true
    let log = []

    if (!body.tokenRequestId) {
        isValid = false
        log.push('ID was not assigned')
    }

    if (isValid && !body.tokenRequestTimestamp) {
        isValid = false
        log.push('Timestamp was not assigned')
    }

    if (isValid && !body.tokenRequestContent) {
        isValid = false
        log.push('Content was not assigned')
    }

    if (isValid && !body.tokenRequestEffectivenessType) {
        isValid = false
        log.push('Effectiveness type was not assigned')
    }

    if (isValid && !body.tokenRequestEffectivenessExpires) {
        isValid = false
        log.push('Effectiveness expires was not assigned')
    }

    if (isValid && !body.tokenRequestPushBack) {
        isValid = false
        log.push('Push-back was not assigned')
    }

    return {isValid, log}
}

export default function handler(req, res) {
    const body = req.body

    console.log('Token request received: ', JSON.stringify(body))

    const validationBodyResult = validateBody(body)

    if (!validationBodyResult.isValid) {
        return res.status(400).json({ data: validationBodyResult.log })
    }

    //TODO: add token request to chain at this point
    const tokenRequest = {
        id: body.tokenRequestId,
        timestamp: body.tokenRequestTimestamp,
        content: body.tokenRequestContent,
        effectiveness: {
            type: body.tokenRequestEffectivenessType,
            expires: body.tokenRequestEffectivenessExpires
        },
        pushBack: body.tokenRequestPushBack
    }


    // IF SUCCESS
    res.redirect("/token/request/confirm")
    
    // ELSE
    //res.status(200).json({ data: `Token request ${body.tokenRequestId} received at ${body.tokenRequestTimestamp} and added to the queue` })
}
