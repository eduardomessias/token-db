import { parseRequestBody } from '../../../../core/parse/request.parse'
import { validateBody } from '../../../../core/validate/request.validate'


export default function handler(req, res) {
    const body = req.body
    const tokenRequest = parseRequestBody(body)
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
