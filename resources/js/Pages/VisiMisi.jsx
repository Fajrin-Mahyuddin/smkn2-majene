import React from "react";
import Site from "@/components/atoms/Head";
import MainLayout from "@/components/templates/Layout";
import Header from "@/components/organisms/menus/Header";
import { Card, Image, Typography, Flex } from "antd";
import kepsek from "@/assets/images/kepsek.jpg";
import heroImg from "@/assets/images/hero-img.png";
import cardBg from "@/assets/images/card-bg.png";
import styled from "styled-components";
import Container from "@/components/templates/Container";
import { MobileView } from "@/constants/responsiveSize";
import { StrukturOrganisasiSvg } from "@/components/atoms/icons/StrukturOrganisasi";

const { Title } = Typography;
const Section = styled.section`
	background-color: #fff;
`;
const Content = styled(Container)`
	gap: 20px;
	margin: 40px auto;
	display: grid;
	padding: 5vh 30px;
	background-color: #fff;
	@media screen and (max-width: ${MobileView}) {
		grid-template-columns: repeat(1, 1fr);
	}
`;
const CardStyled = styled(Card)`
	border: 2px solid #105710;
`;
const TitleStyled = styled(Title)`
	text-align: center;
`;
const CardDesc = styled.div`
	text-align: center;
	flex: 1;
`;

const VisiMisiPage = () => {
	return (
		<MainLayout footerBg="#fff">
			<Site title="Visi Misi" />
			<Header
				title="Visi, Misi dan Tujuan"
				subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat alias impedit cupiditate mollitia quisquam repudiandae voluptatum asperiores voluptatem unde autem"
				Icon={() => (
					<img src={heroImg} width="70%" alt="kepala sekolah" />
				)}
			/>
			<Section>
				<Content>
					<CardStyled>
						<TitleStyled>Visi</TitleStyled>
						<CardDesc>
							{" "}
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Molestiae aliquam aspernatur culpa! Lorem
							ipsum dolor sit amet consectetur adipisicing elit.
							In tenetur sit quis iusto dolores ad possimus nobis
							sed, aut qui eligendi dolor voluptas cupiditate fuga
							doloribus cum quia dicta voluptatem? Animi provident
							sequi accusamus officia dignissimos eaque assumenda!
							Animi, consectetur error repellat, nostrum excepturi
							architecto.
						</CardDesc>
					</CardStyled>
					<CardStyled>
						<TitleStyled>Misi</TitleStyled>
						<CardDesc>
							{" "}
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Molestiae aliquam aspernatur culpa! Lorem
							ipsum dolor sit amet consectetur adipisicing elit.
							In tenetur sit quis iusto dolores ad possimus nobis
							sed, aut qui eligendi dolor voluptas cupiditate fuga
							doloribus cum quia dicta voluptatem? Animi provident
							sequi accusamus officia dignissimos eaque assumenda!
							Animi, consectetur error repellat, nostrum excepturi
							architecto.
						</CardDesc>
					</CardStyled>
					<CardStyled>
						<TitleStyled>Tujuan</TitleStyled>
						<CardDesc>
							{" "}
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Molestiae aliquam aspernatur culpa! Lorem
							ipsum dolor sit amet consectetur adipisicing elit.
							In tenetur sit quis iusto dolores ad possimus nobis
							sed, aut qui eligendi dolor voluptas cupiditate fuga
							doloribus cum quia dicta voluptatem? Animi provident
							sequi accusamus officia dignissimos eaque assumenda!
							Animi, consectetur error repellat, nostrum excepturi
							architecto.
						</CardDesc>
					</CardStyled>
				</Content>
			</Section>
		</MainLayout>
	);
};

export default VisiMisiPage;
