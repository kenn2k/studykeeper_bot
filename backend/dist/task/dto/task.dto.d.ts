export declare class CreateTaskDto {
    task: string;
    note?: string;
    date: string;
    topic: string;
    teacher: string;
}
export declare class UpdateTaskDto {
    topic?: string;
    teacher?: string;
    task?: string;
    note?: string;
    date?: Date;
}
