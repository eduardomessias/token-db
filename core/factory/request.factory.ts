import { Request } from "../classes/request.class";
import { IRequest } from "../interfaces/request.interface";

export function createRequest(): IRequest {
    return new Request()
}