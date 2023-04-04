import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { useRouter } from "next/router";
import { AxiosError } from "axios";
import { InitialState, User } from "@/interfaces/interfaces";
import { api } from "@/services/Apis";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";

const initialState: InitialState = {
	user: null,
	loading: false,
	error: null,
};

export const login = createAsyncThunk<User, User, { rejectValue: string }>(
	"auth/login",
	async (details: User, { rejectWithValue }) => {
		try {
			const data = await api.user.login(details, {
				"Access-Control-Allow-Origin": process.env
					.NEXT_PUBLIC_CLIENT_URL as string,
			});
			window.localStorage.setItem("user", data);
			return data;
		} catch (error) {
			const err = error as AxiosError;
			if (err.response?.status === 401) {
				return rejectWithValue("Unauthorized");
			}
			return rejectWithValue("Something went wrong");
		}
	}
);

export const logout = createAsyncThunk("auth/logout", async () => {
	await api.user.logout();
	window.localStorage.removeItem("user");
});

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(login.pending, (state) => {
				state.loading = true;
			})
			.addCase(login.fulfilled, (state, action: PayloadAction<User>) => {
				state.loading = false;
				state.user = action.payload;
			})
			.addCase(login.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload as string;
			})
			.addCase(logout.pending, (state) => {
				state.loading = true;
			})
			.addCase(logout.fulfilled, (state) => {
				state.loading = false;
				state.user = null;
			});
	},
});

export const { actions } = authSlice;

export const useAuth = () => {
	const router = useRouter();
	const dispatch = useAppDispatch();

	const loginHandler = async (data: User) => {
		await dispatch(login(data));
		router.push("/");
	};

	const logoutHandler = async () => {
		await dispatch(logout());
		router.push("/login");
	};

	const user = useAppSelector(
		(state: { auth: InitialState }) => state.auth.user
	);
	const loading = useAppSelector(
		(state: { auth: InitialState }) => state.auth.loading
	);
	const error = useAppSelector(
		(state: { auth: InitialState }) => state.auth.error
	);

	return { user, loading, error, loginHandler, logoutHandler };
};

export const authReducer = authSlice.reducer;
