import React from "react";
import Navbar from "@/components/organisms/Navbar";
import { Layout } from "antd";
import Footer from "@/components/organisms/Footer";
import styled from "styled-components";

const BaseLayout = styled(Layout)`
	width: 100%;
`;

const MainLayout = ({ children }) => {
	return (
		<BaseLayout>
			<Navbar />
			{children}
			<Footer />
		</BaseLayout>
	);
};

export default MainLayout;
