import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { UserService } from 'src/user/user.service';
import { ConfigService } from '@nestjs/config';
@Injectable()

//! Strategy: how validation will take place for token
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    //! helps us to get jwt-token from .env file
    private configService: ConfigService,

    //! decomposition for auth
    private userService: UserService,
  ) {
    super({
      //! getting jwt-token from Bearer
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true,
      secretOrKey: configService.get('JWT_SECRET'),
    });
  }
  async validate({ id }: { id: string }) {
    return this.userService.getById(id);
  }
}
