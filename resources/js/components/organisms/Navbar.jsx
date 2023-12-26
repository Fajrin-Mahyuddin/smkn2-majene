import { Flex, Drawer, Menu } from "antd";
import React, { useState } from "react";
import logo from "@/assets/images/logo.png";
import { Link } from "@inertiajs/react";
import styled from "styled-components";
import { MdGridView } from "react-icons/md";
import { MobileView } from "@/constants/responsiveSize";
import Menus from "../molecules/Menus";

const Nav = styled.nav`
	position: absolute;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 20px auto;
	z-index: auto;
	padding: 0 30px;
	& .menu-btn {
		display: none;
	}
	@media screen and (max-width: ${MobileView}) {
		padding: 10px;
		margin-top: 0;
		z-index: 99;
		position: fixed;
		& .menu-wrapper {
			display: none;
		}
		& .menu-btn {
			display: flex;
			/* right: 10px;
			z-index: 99;
			top: 10px; */
		}
	}
`;

const Button = styled.button`
	background-color: #107e57;
	display: flex;
	justify-content: center;
	align-items: center;
	border: none;
	padding: 5px;
	color: #fff;
	border-radius: 5px;
`;

const Navbar = () => {
	const [open, setOpen] = useState(false);

	return (
		<Nav>
			<Link className="logo" href="/" name="Halaman utama">
				<img src={logo} alt="logo" width="60px" />
			</Link>
			<Button className="menu-btn" onClick={() => setOpen(!open)}>
				<MdGridView size={30} />
			</Button>
			<Drawer
				title="Menu"
				placement="right"
				onClose={() => setOpen(false)}
				open={open}
			>
				<Menus vertical={true} />
			</Drawer>
			<Menus />
		</Nav>
	);
};

export default Navbar;
