import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import bullConfig from './config/bull.config';
import { ConsumerModule } from './modules/consumer/consumer.module';
import { ProducerModule } from './modules/producer/producer.module';

const { NODE_ENV } = process.env;

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [`.env${NODE_ENV ? `.${NODE_ENV}` : ''}`],
    }),
    BullModule.forRoot(bullConfig()),
    ProducerModule,
    ConsumerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
