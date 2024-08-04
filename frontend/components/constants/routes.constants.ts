class Auth {
	readonly BASE_URL = "/auth";

	readonly REGISTER = `${this.BASE_URL}/register`;
	readonly LOGIN = `${this.BASE_URL}/login`;
}

export const AUTH = new Auth();

class Dashboard {
	readonly BASE_URL = "/tasks";

	readonly TASKS = `${this.BASE_URL}`;
}

export const DASHBOARD = new Dashboard();
