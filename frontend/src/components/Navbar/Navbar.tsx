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
	return (
		<Menu mode="horizontal">
			<Item icon={<AppstoreOutlined />}>
				<Link href="/">
					<span>App</span>
				</Link>
			</Item>

			<Item icon={<LoginOutlined />}>
				<Link href="/login">
					<span>Login</span>
				</Link>
			</Item>

			<Item icon={<UserAddOutlined />}>
				<Link href="/register">
					<span>Register</span>
				</Link>
			</Item>
		</Menu>
	);
};

export default Navbar;
