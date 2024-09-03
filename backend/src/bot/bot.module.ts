import { Module } from '@nestjs/common';
import { BotService } from './bot.service';

import { TelegrafModule } from 'nestjs-telegraf';

import { BotUpdate } from 'src/bot/bot.update';
import * as LocalSession from 'telegraf-session-local';

const sessions = new LocalSession({ database: 'session_db.json' });

@Module({
  imports: [
    TelegrafModule.forRoot({
      middlewares: [sessions.middleware()],
      token: process.env.TELEGRAM_BOT_TOKEN,
    }),
  ],

  providers: [BotService, BotUpdate],
})
export class BotModule {}
