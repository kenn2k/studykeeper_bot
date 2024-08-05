import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/task.dto';
export declare class TaskController {
    private readonly taskService;
    constructor(taskService: TaskService);
    getAll(userId: string): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        note: string | null;
        task: string;
        date: Date;
        topic: string;
        teacher: string;
        userId: string;
    }[]>;
    create(dto: CreateTaskDto, userId: string): import(".prisma/client").Prisma.Prisma__TaskClient<{
        id: string;
        note: string | null;
        task: string;
        date: Date;
        topic: string;
        teacher: string;
        userId: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    update(dto: CreateTaskDto, userId: string, id: string): import(".prisma/client").Prisma.Prisma__TaskClient<{
        id: string;
        note: string | null;
        task: string;
        date: Date;
        topic: string;
        teacher: string;
        userId: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    delete(id: string): import(".prisma/client").Prisma.Prisma__TaskClient<{
        id: string;
        note: string | null;
        task: string;
        date: Date;
        topic: string;
        teacher: string;
        userId: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
