import { PrismaService } from 'src/prisma.service';
import { CreateTaskDto } from './dto/task.dto';
export declare class TaskService {
    private prisma;
    constructor(prisma: PrismaService);
    getAll(userId: string): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        note: string | null;
        topic: string;
        teacher: string;
        task: string;
        userId: string;
    }[]>;
    create(dto: CreateTaskDto, userId: string): import(".prisma/client").Prisma.Prisma__TaskClient<{
        id: string;
        note: string | null;
        topic: string;
        teacher: string;
        task: string;
        userId: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    update(dto: Partial<CreateTaskDto>, taskId: string, userId: string): import(".prisma/client").Prisma.Prisma__TaskClient<{
        id: string;
        note: string | null;
        topic: string;
        teacher: string;
        task: string;
        userId: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    delete(taskId: string): import(".prisma/client").Prisma.Prisma__TaskClient<{
        id: string;
        note: string | null;
        topic: string;
        teacher: string;
        task: string;
        userId: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
