import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';
import { EVENT_NAME, QUEUE_NAME } from 'src/config/bull.config';

@Injectable()
export class ProducerService {
  constructor(@InjectQueue(QUEUE_NAME) private readonly bullQueue: Queue) {
    console.log('ProducerService initialized');
  }

  async addJob(job: any) {
    await this.bullQueue.add(EVENT_NAME, job);
    console.log(`add job ${JSON.stringify(job)}`);
  }
}
