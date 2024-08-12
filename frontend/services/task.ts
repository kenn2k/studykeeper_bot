import { ITaskForm } from "@/types/types";
import { apiProtected } from "@/app/api/interceptors";

class TaskService {
	private BASE_URL = "/tasks";

	async getTasks() {
		const res = await apiProtected.get(this.BASE_URL);
		return res;
	}

	async getTask(id: string) {
		const res = await apiProtected.get(`${this.BASE_URL}/${id}`);
		return res;
	}

	async createTask(data: ITaskForm) {
		const res = await apiProtected.post(this.BASE_URL, data);
		return res;
	}

	async updateTask(id: string, data: ITaskForm) {
		const res = await apiProtected.put(`${this.BASE_URL}/${id}`, data);
		return res;
	}

	async deleteTask(id: string) {
		const res = await apiProtected.delete(`${this.BASE_URL}/${id}`);
		return res;
	}
}

export const taskService = new TaskService();
