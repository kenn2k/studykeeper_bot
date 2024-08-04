import { apiProtected } from "../app/api/interceptors";

class UserService {
	private readonly BASE_URL = "/user";

	async getProfile() {
		const result = await apiProtected.get(`${this.BASE_URL}/profile`);

		return result.data;
	}

	async getUser() {
		const result = await apiProtected.get(this.BASE_URL);

		return result.data;
	}
}

export const userService = new UserService();
