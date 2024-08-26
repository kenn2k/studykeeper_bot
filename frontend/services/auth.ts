import { IAuthForm, IAuthResponse } from "@/types/types";
import { apiClassic } from "../app/api/interceptors";
import { tokenService } from "@/services/token";

export const authService = {
	async main(type: "login" | "register", data: IAuthForm) {
		const response = await apiClassic.post<IAuthResponse>(
			`/auth/${type}`,
			data,
		);

		if (response.data.accessToken)
			tokenService.saveAccessTokenInCookies(response.data.accessToken);
		return response;
	},

	async getNewTokens() {
		const response = await apiClassic.post<IAuthResponse>("/auth/access-token");
		if (response.data.accessToken)
			tokenService.saveAccessTokenInCookies(response.data.accessToken);
		return response;
	},
	async logout() {
		try {
			await apiClassic.post("/auth/logout");
			tokenService.removeAccessTokenFromCookies();
		} catch (error) {
			console.error("Logout failed:", error);
		}
	},
};
