import React from "react";
import Site from "@/components/atoms/Head";
import MainLayout from "@/components/templates/Layout";
import MainHero from "@/components/organisms/hero/MainHero";
import MainMenus from "@/components/organisms/menus/MainMenus";
import MainInformation from "@/components/organisms/Information/MainInformation";
import MainNews from "@/components/organisms/news/MainNews";

const HomePage = () => {
	return (
		<MainLayout>
			<Site title="Home" />
			<MainHero />
			<MainMenus />
			<MainInformation />
			<MainNews />
		</MainLayout>
	);
};

export default HomePage;
