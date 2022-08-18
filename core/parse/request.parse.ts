import { createRequest } from "../factory/request.factory"
import { IRequest } from "../interfaces/request.interface"

export function parseRequestBody(body: any): IRequest {
    const request: IRequest = createRequest()
    request.id = body.id
    request.timestamp = body.timestamp
    request.content = body.content
    request.effectiveness = {
        type: body.effectivenessType,
        expires: body.effectivenessExpires
    }
    request.pushBack = body.pushBack
    return request
}