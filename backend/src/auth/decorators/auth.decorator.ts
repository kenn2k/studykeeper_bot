import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guard/jwt.guard';

//! validation
export const Auth = () => UseGuards(JwtAuthGuard);
