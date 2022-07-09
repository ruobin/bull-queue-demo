/* eslint-disable prettier/prettier */
import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { QUEUE_NAME } from 'src/config/bull.config';
import { ProducerController } from './producer.controller';
import { ProducerService } from './producer.service';

@Module({
  imports: [
    BullModule.registerQueue({
        name: QUEUE_NAME,
    }),
    ],
    providers: [ProducerService],
    controllers: [ProducerController],
})
export class ProducerModule { }
