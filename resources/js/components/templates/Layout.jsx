import React from "react";
import Navbar from "@/components/organisms/Navbar";
import { Layout } from "antd";

const MainLayout = ({ children }) => {
	return (
		<Layout>
			<Navbar />
			{children}
			<Navbar />
		</Layout>
	);
};

export default MainLayout;
