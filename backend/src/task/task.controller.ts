import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Put,
  Post,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/task.dto';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { CurrentUser } from 'src/auth/decorators/user.decorator';

@Controller('/tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  @Auth()
  getAll(@CurrentUser('id') userId: string) {
    return this.taskService.getAll(userId);
  }

  @HttpCode(200)
  @Post()
  @Auth()
  create(@Body() dto: CreateTaskDto, @CurrentUser('id') userId: string) {
    return this.taskService.create(dto, userId);
  }

  @HttpCode(200)
  @Put(':id')
  @Auth()
  update(
    @Body() dto: CreateTaskDto,
    @CurrentUser('id') userId: string,
    @Param('id') id: string,
  ) {
    return this.taskService.update(dto, id, userId);
  }

  @HttpCode(200)
  @Delete(':id')
  @Auth()
  delete(@Param('id') id: string) {
    return this.taskService.delete(id);
  }
}
