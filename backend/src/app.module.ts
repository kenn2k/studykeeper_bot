import { Module } from '@nestjs/common';

import { UserModule } from './user/user.module';

import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { TaskModule } from './task/task.module';
import { BotModule } from './bot/bot.module';

@Module({
  imports: [ConfigModule.forRoot(), UserModule, AuthModule, TaskModule, BotModule],
})
export class AppModule {}
