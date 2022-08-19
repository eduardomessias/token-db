import { IRequest } from "./request.interface";

export interface IQueue {
    requests: Array<IRequest>,
    enqueue(r: IRequest): number,
    dequeue(): IRequest,
    rear(): IRequest,
    front(): IRequest,
    size(): number,
    reset(): void
}