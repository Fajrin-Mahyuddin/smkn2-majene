import { Flex } from "antd";
import React from "react";
import logo from "@/assets/images/logo.png";
import { Link } from "@inertiajs/react";
import styled from "styled-components";
import Container from "@/components/templates/Container";

const Nav = styled.nav`
	position: absolute;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 20px auto;
	padding: 0 30px;
`;
const Wrapper = styled(Container)``;

const Navbar = () => {
	return (
		<Nav>
			<Link href="/" name="Halaman utama">
				<img src="./assets/logo.png" alt="logo" width="60px" />
			</Link>
			<Flex className="menu-wrapper" gap="middle">
				<Link href="/" className="link-item active">
					Home
				</Link>
				<Link href="/visi-misi" className="link-item">
					Visi Misi
				</Link>
				<Link href="/pengumuman" className="link-item">
					Pengumuman
				</Link>
			</Flex>
		</Nav>
	);
};

export default Navbar;
