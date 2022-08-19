import { IRequest } from '../../../../core/interfaces/request.interface'
import { IValidationResult } from '../../../../core/interfaces/validationResult.interface'
import { parseRequestBody } from '../../../../core/parse/request.parse'
import { validateRequest } from '../../../../core/validate/request.validate'
import { NextApiRequest, NextApiResponse } from 'next'


const handler = (req: NextApiRequest, res: NextApiResponse) => {
    const body: Body = req.body
    const tokenRequest: IRequest = parseRequestBody(body)
    const validationResult: IValidationResult = validateRequest(tokenRequest)
    if (!validationResult.isValid) {
        return res.status(400).json({ validated: validationResult.isValid, reasons: validationResult.reasons })
    }
    console.log('Token request received: ', JSON.stringify(tokenRequest))
    // TODO: RETRIEVE THE CURRENT STATE OF THE CHAIN
    // TODO: ENQUEUE REQUEST (IN IT OWN QUEUE, NOT THE BLOCKCHAIN ONE)
    // IF SUCCESS
    res.redirect("/token/request/confirm")
    // ELSE
    //res.status(200).json({ data: `Token request ${body.tokenRequestId} received at ${body.tokenRequestTimestamp} and added to the queue` })
}


export default handler