import axios, { CreateAxiosDefaults } from "axios";
import { authService } from "../../services/auth";
import { tokenService } from "../../services/token";

const options: CreateAxiosDefaults = {
	baseURL: process.env.NEXT_PUBLIC_BASE_URL,
	headers: {
		"Content-Type": "application/json",
	},
	withCredentials: true,
};

console.log(process.env.NEXT_PUBLIC_BASE_URL);
console.log(process.env.NEXT_PUBLIC_DOMAIN);

export const axiosPublic = axios.create(options);

const apiClassic = axios.create(options);

const apiProtected = axios.create(options);

//! By making a request, we add a token to it
apiProtected.interceptors.request.use((config) => {
	const accessToken = tokenService.getAccessToken();
	if (config.headers && accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`;
	}

	return config;
});

//! We have to handle the response when the token expired
apiProtected.interceptors.response.use(
	(config) => config,
	async (error) => {
		if (error.response.status === 401) {
			await authService.getNewTokens();

			return apiProtected.request(error.config);
		}
		throw error;
	},
);

export { apiClassic, apiProtected };
