import { Request } from "../classes/request.class";
import { Request as IRequest } from "../interfaces/request.interface";

export function createRequest(): IRequest {
    return new Request()
}

export function createRequestString(): string {
    return JSON.stringify(new Request())
}