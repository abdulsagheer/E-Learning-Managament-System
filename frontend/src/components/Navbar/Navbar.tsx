import { Menu } from "antd";
import Link from "next/link";
import {
	AppstoreOutlined,
	LoginOutlined,
	UserAddOutlined,
} from "@ant-design/icons";
import React from "react";
import { NavbarProps } from "@/interfaces/interfaces";

const { Item } = Menu;

const Navbar: React.FC<NavbarProps> = () => {
	const items = [
		{
			key: "app",
			icon: <AppstoreOutlined />,
			element: (
				<Link href="/">
					<span>App</span>
				</Link>
			),
		},
		{
			key: "login",
			icon: <LoginOutlined />,
			element: (
				<Link href="/login">
					<span>Login</span>
				</Link>
			),
		},
		{
			key: "register",
			icon: <UserAddOutlined />,
			element: (
				<Link href="/register">
					<span>Register</span>
				</Link>
			),
		},
	];

	return (
		<Menu mode="horizontal" style={{ justifyContent: "center" }}>
			{items.map(({ key, icon, element }) => (
				<Item key={key} icon={icon}>
					{element}
				</Item>
			))}
		</Menu>
	);
};

export default Navbar;
