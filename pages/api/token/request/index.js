export default function handler(req, res) {
    const body = req.body

    console.log('Token request received: ', JSON.stringify(body))

    if (!body.tokenRequestContent) {
        return res.status(400).json({ data: 'Token data not properly filled' })
    }

    //TODO: add token request to chain at this point

    // IF SUCCESS
    res.redirect("/token/request/confirm")
    
    // ELSE
    //res.status(200).json({ data: `Token request ${body.tokenRequestId} received at ${body.tokenRequestTimestamp} and added to the queue` })
}
