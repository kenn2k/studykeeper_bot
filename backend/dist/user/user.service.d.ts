import { AuthDto } from 'src/auth/dto/auth.dto';
import { PrismaService } from 'src/prisma.service';
import { UserDto } from 'src/user/dto/user.dto';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    getById(id: string): import(".prisma/client").Prisma.Prisma__UserClient<{
        tasks: {
            id: string;
            note: string | null;
            topic: string;
            teacher: string;
            task: string;
            userId: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        name: string | null;
        password: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    getByEmail(email: string): import(".prisma/client").Prisma.Prisma__UserClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        name: string | null;
        password: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    getProfile(id: string): Promise<{
        user: {
            tasks: {
                id: string;
                note: string | null;
                topic: string;
                teacher: string;
                task: string;
                userId: string;
            }[];
            id: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            name: string | null;
        };
        totalTasks: number;
    }>;
    create(dto: AuthDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        name: string | null;
        password: string;
    }>;
    update(id: string, dto: UserDto): Promise<{
        email: string;
        name: string;
    }>;
}
