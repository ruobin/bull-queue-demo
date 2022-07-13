import { Controller, Post, HttpCode, HttpStatus, Body } from '@nestjs/common';
import { ProducerService } from './producer.service';

@Controller('queue')
export class ProducerController {
  constructor(private readonly producerService: ProducerService) {}

  @Post('/job')
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() data: any): Promise<any> {
    return this.producerService.addJob(data);
  }
}
