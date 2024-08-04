import { IsDate, IsDateString, IsOptional, IsString } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  topic: string;

  @IsString()
  task: string;

  @IsString()
  note: string;

  @IsDateString()
  date: string;

  @IsString()
  teacher: string;
}

export class UpdateTaskDto {
  @IsOptional()
  @IsString()
  topic?: string;

  @IsOptional()
  @IsString()
  teacher?: string;

  @IsOptional()
  @IsString()
  task?: string;

  @IsOptional()
  @IsString()
  note?: string;

  @IsOptional()
  @IsDate()
  date?: Date;
}
