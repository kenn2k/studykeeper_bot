import { Injectable } from '@nestjs/common';
import { hash } from 'argon2';
import { AuthDto } from 'src/auth/dto/auth.dto';
import { PrismaService } from 'src/prisma.service';
import { UserDto } from 'src/user/dto/user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  //! get user with all his tasks
  getById(id: string) {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
      include: {
        tasks: true,
      },
    });
  }

  getByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: {
        email,
      },
    });
  }

  async getProfile(id: string) {
    const profile = await this.getById(id);
    if (!profile) {
      throw new Error('Profile not found');
    }

    //!
    const totalTasks = profile.tasks.length;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...rest } = profile;

    return {
      user: rest,
      totalTasks: totalTasks,
    };
  }

  async create(dto: AuthDto) {
    const user = {
      email: dto.email,
      name: '',
      password: await hash(dto.password),
    };
    return this.prisma.user.create({
      data: user,
    });
  }

  async update(id: string, dto: UserDto) {
    //! we use this way to rewrite data
    let data = dto;
    if (dto.password) {
      data = { ...dto, password: await hash(dto.password) };
    }
    return this.prisma.user.update({
      where: {
        id,
      },
      data,
      select: {
        name: true,
        email: true,
      },
    });
  }
}
