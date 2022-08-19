import { Queue } from "../classes/queue.class";
import { IQueue } from "../interfaces/queue.interface";

export class QueueManager {
    static freeze(q: IQueue): void {
        let frozen: IQueue = new Queue()
        frozen = q
    }
}