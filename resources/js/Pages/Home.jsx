import { Link } from "@inertiajs/react";
import React from "react";
import Site from "@/components/atoms/Head";
import MainLayout from "@/components/templates/Layout";
import MainHero from "@/components/organisms/MainHero";

const HomePage = () => {

	return (
		<MainLayout>
			<Site title="Home" />
			<MainHero />
		</MainLayout>
	);
};

export default HomePage;
