import { BullModuleOptions } from '@nestjs/bull';
import { registerAs } from '@nestjs/config';
import * as redis from 'ioredis';

export const REDIS_USERNAME = 'default';
export const QUEUE_NAME = 'analytics_queue';
export const EVENT_NAME = 'test_event_name';
export const JOB_DELAY = 30;

export default registerAs('bull', () => {
  let options: BullModuleOptions = {
    redis: {
      host: process.env.REDIS_HOST,
      port: parseInt(process.env.REDIS_PORT, 10),
      username: REDIS_USERNAME,
      // password: process.env.REDIS_PASSWORD || undefined,
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
      delay: JOB_DELAY,
    },
  };
  return redisOpt;
});
