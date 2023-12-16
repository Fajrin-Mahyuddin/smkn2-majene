import React from "react";
import Site from "@/components/atoms/Head";
import MainLayout from "@/components/templates/Layout";
import MainHero from "@/components/organisms/hero/MainHero";
import MainMenus from "@/components/organisms/menus/MainMenus";
import MainInformation from "@/components/organisms/Information/MainInformation";
import MainNews from "@/components/organisms/news/MainNews";
import MainFeedback from "@/components/organisms/feedback/MainFeedback";

const HomePage = () => {
	return (
		<MainLayout>
			<Site title="Home" />
			<MainHero />
			<MainMenus />
			<MainInformation />
			<MainNews />
			<MainFeedback />
		</MainLayout>
	);
};

export default HomePage;
