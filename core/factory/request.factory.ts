import { Request } from "../classes/request.class";
import { IRequest } from "../interfaces/request.interface";

export function createRequest(content: any = null): IRequest {
    let request: IRequest = new Request()
    request.content = content
    return request
}