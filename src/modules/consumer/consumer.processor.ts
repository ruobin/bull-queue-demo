/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { Processor, Process } from "@nestjs/bull";
import { Job } from "bull";
import { EVENT_NAME, QUEUE_NAME } from "src/config/bull.config";

@Processor(QUEUE_NAME)
export class QueueProcessors {
    constructor(

    ) {}

    @Process(EVENT_NAME)
    async handleEvent(job: Job<any>): Promise<void> {
        console.log(`consuming ${JSON.stringify(job.data)}`);
    }

    @Process('track')
    async handleTrackEvent(job: Job<any>): Promise<void> {
        console.log(`consuming ${JSON.stringify(job.data)}`);
    }
}