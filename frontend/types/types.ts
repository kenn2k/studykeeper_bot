export interface IAuthForm {
	name: string;
	email: string;
	password: string;
}

export interface IUser {
	id: number;
	name?: string;
	email: string;
}

export interface IAuthResponse {
	accessToken: string;
	user: IUser;
}

export interface IAuthFields {
	name?: string;
	email: string;
	password: string;
}

export interface ITaskForm {
	note: string;
	teacher: string;
	task: string;
	topic: string;
	id: string;
}
