import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['cheerful-amoeba-5579-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'Y2hlZXJmdWwtYW1vZWJhLTU1NzkksvXoeuOw_-Ku0xrdTFuqAGToavfIixI4wo4',
          password:
            'tnwFqreDVrgu1j56tjqlUNELT0aMpMTBx7KPltqA41XesEPaS3ayrcs7YEruRdKV_38t_w==',
        },
        ssl: true,
      },
    });
  }
  async onModuleDestroy() {
    await this.close();
  }
}
