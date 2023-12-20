import { Flex } from "antd";
import React from "react";
import logo from "@/assets/images/logo.png";
import { Link } from "@inertiajs/react";
import styled from "styled-components";

const Nav = styled.nav`
	position: absolute;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 20px auto;
	padding: 0 30px;
`;

const LinkStyled = styled(Link)`
	color: #fff;
	&.active,
	&:hover {
		color: #fff;
		background-color: #014760;
	}
`;

const Navbar = () => {
	return (
		<Nav>
			<Link href="/" name="Halaman utama">
				<img src={logo} alt="logo" width="60px" />
			</Link>
			<Flex className="menu-wrapper" gap="middle">
				<LinkStyled href="/" className="link-item active">
					Home
				</LinkStyled>
				<LinkStyled href="/visi-misi" className="link-item">
					Visi Misi
				</LinkStyled>
				<LinkStyled href="/pengumuman" className="link-item">
					Pengumuman
				</LinkStyled>
			</Flex>
		</Nav>
	);
};

export default Navbar;
