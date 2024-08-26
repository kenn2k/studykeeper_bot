import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { verify } from 'argon2';
import { Response } from 'express';
import { AuthDto } from 'src/auth/dto/auth.dto';

@Injectable()
export class AuthService {
  //! use .env
  EXPIRE_DAY_REFRESH_TOKEN = 1;
  REFRESH_TOKEN_NAME = 'refreshToken';
  //!

  constructor(
    private jwt: JwtService,

    //! decomposition for auth
    private userService: UserService,
  ) {}

  async login(dto: AuthDto) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...user } = await this.validation(dto);

    const tokens = this.issueToken(user.id);

    return {
      ...tokens,
      user,
    };
  }

  async register(dto: AuthDto) {
    const existingUser = await this.userService.getByEmail(dto.email);

    if (existingUser)
      throw new BadRequestException('User with the same email is exists');

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...user } = await this.userService.create(dto);

    const tokens = this.issueToken(user.id);

    return {
      ...tokens,
      user,
    };
  }

  async getNewToken(refreshToken: string) {
    const result = await this.jwt.verifyAsync(refreshToken);

    if (!result) throw new UnauthorizedException('invalid refresh token');
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...user } = await this.userService.getById(result.id);

    const tokens = this.issueToken(user.id);

    return {
      user,
      ...tokens,
    };
  }

  private issueToken(userId: string) {
    const data = { id: userId };
    const accessToken = this.jwt.sign(data, {
      expiresIn: '1h',
    });

    const refreshToken = this.jwt.sign(data, {
      expiresIn: '7d',
    });
    return { accessToken, refreshToken };
  }

  //? method for users' validation
  private async validation(dto: AuthDto) {
    //? method should check if users' e-mail exists
    const user = await this.userService.getByEmail(dto.email);

    if (!user) throw new NotFoundException('user ot found');

    //?hashing password for database
    const isValid = await verify(user.password, dto.password);

    if (!isValid) throw new UnauthorizedException('Invalid');

    return user;
  }

  addRefTokenToRes(res: Response, refreshToken: string) {
    const expiresIn = new Date();
    expiresIn.setDate(expiresIn.getDate() + this.EXPIRE_DAY_REFRESH_TOKEN);

    res.cookie(this.REFRESH_TOKEN_NAME, refreshToken, {
      //! server cookie
      httpOnly: true,

      //! get domain from .env for production
      domain: 'localhost',
      expires: expiresIn,
      secure: true,

      //! for production change into lax
      sameSite: 'none',
    });
  }

  //! https://chatgpt.com/c/d9e29f53-d86d-49b8-8989-e8032212495c
  removeRefTokenToRes(res: Response) {
    res.cookie(this.REFRESH_TOKEN_NAME, '', {
      httpOnly: true,
      domain: 'localhost',
      expires: new Date(0),
      secure: true,

      sameSite: 'none',
    });
  }
}
