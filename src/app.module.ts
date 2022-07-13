import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import bullConfig from './config/bull.config';
import { ConsumerModule } from './modules/consumer/consumer.module';
import { ProducerModule } from './modules/producer/producer.module';

const { NODE_ENV } = process.env;

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: NODE_ENV ? `.env.${NODE_ENV}` : '.env',
    }),
    BullModule.forRoot(bullConfig()),
    ProducerModule,
    ConsumerModule,
  ],
})
export class AppModule {}
