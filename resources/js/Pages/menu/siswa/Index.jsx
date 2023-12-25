import React from "react";
import Site from "@/components/atoms/Head";
import MainLayout from "@/components/templates/Layout";
import Header from "@/components/organisms/menus/Header";
import styled from "styled-components";
import Container from "@/components/templates/Container";
import { SiswaSvg } from "@/components/atoms/icons/Siswa";
import TableSiswa from "@/components/organisms/siswa/table";

const Section = styled.section`
	background-color: #fff;
`;
const Layout = styled(Container)`
	gap: 20px;
	width: 100%;
	margin: 40px auto;
	/* display: grid; */
	/* grid-template-columns: repeat(2, 1fr); */
	padding: 5vh 30px;
`;

const SiswaPage = () => {
	return (
		<MainLayout footerBg="#fff">
			<Site title="Siswa" />
			<Header
				title="Siswa Aktif"
				subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat alias impedit cupiditate mollitia quisquam repudiandae voluptatum asperiores voluptatem unde autem"
				Icon={SiswaSvg}
			/>
			<Section>
				<Layout>
					<TableSiswa />
				</Layout>
			</Section>
		</MainLayout>
	);
};

export default SiswaPage;
