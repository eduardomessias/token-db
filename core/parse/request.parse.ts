import { Request } from "../interfaces/request.interface"

export function parseRequestBody(body: any): Request {
    const request: Request = {
        id: body.id,
        timestamp: body.timestamp,
        content: body.content,
        effectiveness: {
            type: body.effectivenessType,
            expires: body.effectivenessExpires
        },
        pushBack: body.pushBack
    }
    return request
}