import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

  getAll(userId: string) {
    return this.prisma.task.findMany({
      where: {
        userId,
      },
    });
  }

  create(dto: CreateTaskDto, userId: string) {
    return this.prisma.task.create({
      data: {
        ...dto,
        date: new Date(dto.date),
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });
  }
  //! ----------------------------
  update(dto: UpdateTaskDto, taskId: string, userId: string) {
    const updateData: any = { ...dto };

    if (dto.date !== undefined) {
      const parsedDate = new Date(dto.date);
      if (!isNaN(parsedDate.getTime())) {
        updateData.date = parsedDate.toISOString();
      } else {
        console.error('Invalid date format');
      }
    }

    return this.prisma.task.update({
      where: {
        userId,
        id: taskId,
      },
      data: updateData,
    });
  }
  //! ----------------------------
  delete(taskId: string) {
    return this.prisma.task.delete({
      where: {
        id: taskId,
      },
    });
  }
}
