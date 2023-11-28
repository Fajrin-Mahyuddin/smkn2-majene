import { Head } from "@inertiajs/react";

const Site = ({ title }) => {
	return (
		<Head>
			<title>{`${title} - ` || ""}</title>
		</Head>
	);
};

export default Site;
