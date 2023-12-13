import React from "react";
import Site from "@/components/atoms/Head";
import MainLayout from "@/components/templates/Layout";
import MainHero from "@/components/organisms/hero/MainHero";
import MainMenus from "@/components/organisms/menus/MainMenus";

const HomePage = () => {
	return (
		<MainLayout>
			<Site title="Home" />
			<MainHero />
			<MainMenus />
		</MainLayout>
	);
};

export default HomePage;
