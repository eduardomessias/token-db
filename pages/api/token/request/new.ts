import { createRequest } from "../../../../core/factory/request.factory"
import { IRequest } from "../../../../core/interfaces/request.interface"
import { NextApiRequest, NextApiResponse } from "../../../../node_modules/next/dist/shared/lib/utils"

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const request: IRequest = createRequest()
    res.status(200).json({request: request})
}