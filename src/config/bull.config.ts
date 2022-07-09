import { BullModuleOptions } from '@nestjs/bull';
import { registerAs } from '@nestjs/config';
import * as redis from 'ioredis';

export const QUEUE_NAME = 'analytics_queue';

export const EVENT_NAME = 'event_01';

export default registerAs('bull', () => {
  let options: BullModuleOptions = {
    redis: {
      host: process.env.REDIS_HOST,
      port: parseInt(process.env.REDIS_PORT, 10),
      username: 'default',
      password: process.env.REDIS_PASSWORD,
      tls: process.env.REDIS_TLS === 'true' ? {} : undefined,
    },
  };

  if (process.env.REDIS_CLUSTER === 'true') {
    options = {
      createClient: (): redis.Cluster => {
        return new redis.Cluster(
          [
            {
              host: process.env.REDIS_HOST,
              port: parseInt(process.env.REDIS_PORT, 10),
            },
          ],
          {
            redisOptions: {
              password: process.env.REDIS_PASSWORD,
            },
          },
        );
      },
    };
  }

  const redisOpt: BullModuleOptions = {
    ...options,
    defaultJobOptions: {
      delay: 30,
    },
  };
  return redisOpt;
});
