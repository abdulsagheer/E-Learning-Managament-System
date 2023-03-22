export interface NavbarProps {
	children: React.ReactNode;
}
export interface User {
	id: string;
	name: string;
	email: string;
}

export interface InitialState {
	user: User | null;
	loading: boolean;
	error: string | null;
}

export interface UserDetails {
	name: string;
	email: string;
	password: string;
}
