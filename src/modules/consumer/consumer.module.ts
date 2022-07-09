/* eslint-disable prettier/prettier */
import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { QUEUE_NAME } from 'src/config/bull.config';
import { QueueProcessors } from './consumer.processor';

@Module({
    imports: [
        BullModule.registerQueue({
            name: QUEUE_NAME,
        }),
    ],
    providers: [QueueProcessors],
    controllers: [],
})
export class ConsumerModule { }
