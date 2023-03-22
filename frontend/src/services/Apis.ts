import { AxiosRequest } from "./ApiCall";

const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL as string;
console.log(process.env.NEXT_PUBLIC_SERVER_URL);

export const api = {
	user: {
		register: async (body: any) => {
			const { data } = await AxiosRequest("POST", `${baseUrl}/register`, body);
			return data;
		},
		login: async (body: any, header: any) => {
			const { data } = await AxiosRequest(
				"POST",
				`${baseUrl}/login`,
				body,
				header
			);
			return data;
		},
		logout: async () => {
			const { data } = await AxiosRequest("POST", `${baseUrl}/logout`);
			return data;
		},
	},
};
