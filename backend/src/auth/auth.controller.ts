import {
  Body,
  Controller,
  Post,
  Req,
  Res,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from './auth.service';

import { Request, Response } from 'express';
import { AuthDto } from 'src/auth/dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() dto: AuthDto, @Res({ passthrough: true }) res: Response) {
    //! receiving refresh token and save the rest
    const { refreshToken, ...response } = await this.authService.login(dto);
    this.authService.addRefTokenToRes(res, refreshToken);

    return response;
  }

  @Post('register')
  async register(
    @Body() dto: AuthDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { refreshToken, ...response } = await this.authService.register(dto);
    this.authService.addRefTokenToRes(res, refreshToken);

    return response;
  }

  @Post('logout')
  logout(@Res({ passthrough: true }) res: Response) {
    this.authService.removeRefTokenToRes(res);
    return true;
  }

  @Post('access-token')
  async getNewToken(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    //! check if REFRESH_TOKEN_NAME is exists
    const refreshTokenFromCookies =
      req.cookies[this.authService.REFRESH_TOKEN_NAME];

    if (!refreshTokenFromCookies) {
      this.authService.removeRefTokenToRes(res);
      throw new UnauthorizedException('Refresh token not passed');
    }

    //! if REFRESH_TOKEN_NAME is exists
    const { refreshToken, ...response } = await this.authService.getNewToken(
      refreshTokenFromCookies,
    );
    this.authService.addRefTokenToRes(res, refreshToken);

    return response;
  }
}
