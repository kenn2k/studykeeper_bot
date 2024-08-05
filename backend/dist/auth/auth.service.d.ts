import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { Response } from 'express';
import { AuthDto } from 'src/auth/dto/auth.dto';
export declare class AuthService {
    private jwt;
    private userService;
    EXPIRE_DAY_REFRESH_TOKEN: number;
    REFRESH_TOKEN_NAME: string;
    constructor(jwt: JwtService, userService: UserService);
    login(dto: AuthDto): Promise<{
        user: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            name: string | null;
        };
        accessToken: string;
        refreshToken: string;
    }>;
    register(dto: AuthDto): Promise<{
        user: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            name: string | null;
        };
        accessToken: string;
        refreshToken: string;
    }>;
    getNewToken(refreshToken: string): Promise<{
        accessToken: string;
        refreshToken: string;
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
    private issueToken;
    private validation;
    addRefTokenToRes(res: Response, refreshToken: string): void;
    removeRefTokenToRes(res: Response): void;
}
