export declare class CreateTaskDto {
    topic: string;
    task: string;
    note: string;
    date: string;
    teacher: string;
}
export declare class UpdateTaskDto {
    topic?: string;
    teacher?: string;
    task?: string;
    note?: string;
    date?: Date;
}
