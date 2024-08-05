import { AuthService } from './auth.service';
import { Request, Response } from 'express';
import { AuthDto } from 'src/auth/dto/auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(dto: AuthDto, res: Response): Promise<{
        user: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            name: string | null;
        };
        accessToken: string;
    }>;
    register(dto: AuthDto, res: Response): Promise<{
        user: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            name: string | null;
        };
        accessToken: string;
    }>;
    logout(res: Response): boolean;
    getNewToken(req: Request, res: Response): Promise<{
        accessToken: string;
        user: {
            tasks: {
                id: string;
                note: string | null;
                task: string;
                date: Date;
                topic: string;
                teacher: string;
                userId: string;
            }[];
            id: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            name: string | null;
        };
    }>;
}
