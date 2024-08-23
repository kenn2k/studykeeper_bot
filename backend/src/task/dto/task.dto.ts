import { IsDateString, IsNotEmpty, IsString } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  task: string;

  @IsString()
  @IsNotEmpty()
  note: string;

  @IsDateString()
  @IsNotEmpty()
  date: Date;

  @IsString()
  @IsNotEmpty()
  topic: string;

  @IsString()
  @IsNotEmpty()
  teacher: string;
}

export class UpdateTaskDto {
  @IsString()
  topic?: string;

  @IsString()
  teacher?: string;

  @IsString()
  task?: string;

  @IsString()
  note?: string;

  @IsDateString()
  date?: Date;
}
