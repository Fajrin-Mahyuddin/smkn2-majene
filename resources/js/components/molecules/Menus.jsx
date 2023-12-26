import React from "react";
import { Flex } from "antd";
import { Link } from "@inertiajs/react";
import styled from "styled-components";
import { MobileView } from "@/constants/responsiveSize";

const LinkStyled = styled(Link)`
	color: #014760;
	&.active,
	&:hover {
		color: #fff;
		background-color: #014760;
	}
	@media screen and (max-width: ${MobileView}) {
		color: #014760;
		&.active,
		&:hover {
			color: #fff;
			background-color: #107e57;
		}
	}
`;

const Menus = ({ vertical = false }) => {
	return (
		<Flex vertical={vertical} className="menu-wrapper" gap="middle">
			<MenuItem href="/">Home</MenuItem>
			<MenuItem href="/visi-misi">Visi Misi</MenuItem>
			<MenuItem href="/pengumuman">Pengumuman</MenuItem>
		</Flex>
	);
};

const MenuItem = ({ href, children }) => {
	const isActive = href === window.location.pathname;
	return (
		<LinkStyled
			href={href}
			className={`link-item ${isActive ? "active" : ""}`}
		>
			{children}
		</LinkStyled>
	);
};

export default Menus;
