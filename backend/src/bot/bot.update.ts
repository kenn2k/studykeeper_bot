import { BotService } from './bot.service';

import {
  Action,
  Command,
  Ctx,
  InjectBot,
  Start,
  Update,
} from 'nestjs-telegraf';
import { Context, Markup, Telegraf } from 'telegraf';

@Update()
export class BotUpdate {
  constructor(
    @InjectBot() private readonly bot: Telegraf<Context>,
    private readonly botService: BotService,
  ) {}

  @Start()
  async start(ctx: Context) {
    await ctx.telegram.sendMessage(
      ctx.message.chat.id,
      `Привіт, ${ctx.from.first_name}! 👋\n\n` +
        `Щоб почати працювати з ботом, натисніть /openApp.\n\n` +
        `✨ *Основні переваги використання бота:*\n\n` +
        `✅ Зручний формат створення та перегляду завдань.\n\n` +
        `📅 Можливість перегляду усіх доданих завдань у календарі.\n\n` +
        `🚀 Швидкий доступ до потрібної інформації.\n\n` +
        `🔔 Нагадування про важливі завдання та події.\n\n` +
        `Розпочніть ефективно керувати своїм часом вже зараз! 🎯`,
      { parse_mode: 'Markdown' },
    );
  }

  @Command('openApp')
  async setMenu(ctx: Context) {
    try {
      await ctx.setChatMenuButton({
        text: 'Open',
        type: 'web_app',
        web_app: { url: process.env.WEB_APP_URL },
      });
      await ctx.reply('Menu button has been set!');
    } catch (error) {
      console.error('Failed to set menu button:', error);
      await ctx.reply('Failed to set menu button.');
    }
  }

  @Action('plain')
  async plains(@Ctx() ctx: Context) {
    await ctx.answerCbQuery();
    await ctx.editMessageCaption(
      'Caption',
      Markup.inlineKeyboard([
        Markup.button.callback('Plain', 'plain'),
        Markup.button.callback('Italic', 'italic'),
      ]),
    );
  }

  @Command('button')
  async sendInitialMessage(@Ctx() ctx: Context) {
    await ctx.reply(
      'Initial Caption',
      Markup.inlineKeyboard([
        Markup.button.callback('Plain', 'plain'),
        Markup.button.callback('Italic', 'italic'),
      ]),
    );
  }
}
