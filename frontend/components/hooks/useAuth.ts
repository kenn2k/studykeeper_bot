import { useEffect, useState } from "react";
import { tokenService } from "@/services/token";

export function useAuth() {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	useEffect(() => {
		const accessToken = tokenService.getAccessToken();
		console.log("Access Token:", accessToken);
		if (accessToken) {
			setIsAuthenticated(true);
		} else {
			setIsAuthenticated(false);
		}
	}, []);

	return isAuthenticated;
}
