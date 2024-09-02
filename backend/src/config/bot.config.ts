import { ConfigService } from '@nestjs/config';

import { TelegrafModuleOptions } from 'nestjs-telegraf';

export const getBotConfig = async (
  configService: ConfigService,
): Promise<TelegrafModuleOptions> => ({
  //` receive from .env
  token: configService.get('TELEGRAM_BOT_TOKEN'),
});
