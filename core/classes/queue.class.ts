import { IQueue } from "../interfaces/queue.interface";
import { IRequest } from "../interfaces/request.interface";

export class Queue implements IQueue {
    requests: Array<IRequest>
    constructor() {
        this.reset()
    }
    enqueue(r: IRequest): number {
        return this.requests.push(r)
    }
    dequeue(): IRequest {
        return this.requests.shift()
    }
    rear(): IRequest {
        return this.requests[this.size()]
    }
    front(): IRequest {
        return this.requests[0]
    }
    size(): number {
        return this.requests.length
    }
    clear(): void {
        this.reset()
    }
    reset(): void {
        this.requests = new Array<IRequest>(Number(process.env.DEFAULT_QUEUE_SIZE))
    }
}