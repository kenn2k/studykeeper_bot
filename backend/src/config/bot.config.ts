import { ConfigService } from '@nestjs/config';

import { TelegrafModuleOptions } from 'nestjs-telegraf';

export const getBotConfig = (
  configService: ConfigService,
): TelegrafModuleOptions => ({
  token: configService.get('TELEGRAM_BOT_TOKEN'),
});
