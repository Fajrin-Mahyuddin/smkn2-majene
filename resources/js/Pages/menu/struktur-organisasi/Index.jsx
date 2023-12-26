import React from "react";
import Site from "@/components/atoms/Head";
import MainLayout from "@/components/templates/Layout";
import Header from "@/components/organisms/menus/Header";
import { Card, Image, Typography, Flex } from "antd";
import kepsek from "@/assets/images/kepsek.jpg";
import cardBg from "@/assets/images/card-bg.png";
import styled from "styled-components";
import Container from "@/components/templates/Container";
import { MobileView } from "@/constants/responsiveSize";
import { StrukturOrganisasiSvg } from "@/components/atoms/icons/StrukturOrganisasi";

const { Title } = Typography;
const Section = styled.section`
	background-color: #fff;
`;
const Layout = styled(Container)`
	gap: 20px;
	margin: 40px auto;
	display: grid;
	padding: 5vh 30px;
	background-color: #fff;
	grid-template-columns: repeat(2, 1fr);
	@media screen and (max-width: ${MobileView}) {
		grid-template-columns: repeat(1, 1fr);
	}
`;
const CardStyled = styled(Card)`
	background-color: #fff;
	display: flex !important;
	flex-direction: row !important;
	/* background-image: url(${cardBg});
	background-size: 100%;
	background-position: bottom;
	background-repeat: no-repeat; */
`;
const TitleStyled = styled(Title)`
	text-align: center;
`;
const CardDesc = styled.div`
	text-align: center;
	flex: 1;
`;

const StrukturOrtanisasiPage = () => {
	return (
		<MainLayout footerBg="#fff">
			<Site title="Struktur Organisasi" />
			<Header
				title="Struktur Organisasi"
				subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat alias impedit cupiditate mollitia quisquam repudiandae voluptatum asperiores voluptatem unde autem"
				Icon={StrukturOrganisasiSvg}
			/>
			<Section>
				<Layout>
					{Array.from({ length: 10 }).map((_, i) => (
						<a href="# " key={i}>
							<CardStyled hoverable>
								<Flex align="center">
									<Image
										width="20%"
										src={kepsek}
										alt="name"
									/>
									<CardDesc>
										<TitleStyled level={5}>
											Ketua Jurusan
										</TitleStyled>
										<CardDesc>
											Dr Shalihuddin Mp {i}
										</CardDesc>
									</CardDesc>
								</Flex>
							</CardStyled>
						</a>
					))}
				</Layout>
			</Section>
		</MainLayout>
	);
};

export default StrukturOrtanisasiPage;
