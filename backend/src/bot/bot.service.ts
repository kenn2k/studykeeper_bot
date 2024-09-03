import { Injectable } from '@nestjs/common';

@Injectable()
export class BotService {
  getHello() {
    return `This action returns all bot`;
  }
}
