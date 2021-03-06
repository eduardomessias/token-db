export default function handler(req, res) {
    const body = req.body

    console.log('Token request received: ', JSON.stringify(body))

    if (!body.tdata) {
        return res.status(400).json({ data: 'Token data not properly filled' })
    }

    //TODO: add token request to chain at this point

    res.status(200).json({ data: `Token request ${body.treqid} received at ${body.treqts} and added to the queue` })
}
