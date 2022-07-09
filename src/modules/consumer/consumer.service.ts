/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';
import { QUEUE_NAME } from 'src/config/bull.config';

@Injectable()
export class ConsumerService {
  constructor(@InjectQueue(QUEUE_NAME) private readonly bullQueue: Queue) {
    console.log('ConsumerService initialized');
  }
}
