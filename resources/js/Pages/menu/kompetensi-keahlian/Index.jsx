import React from "react";
import Site from "@/components/atoms/Head";
import MainLayout from "@/components/templates/Layout";
import Header from "@/components/organisms/menus/Header";
import { Card, Typography } from "antd";
import exampleImg2 from "@/assets/images/example-img2.png";
import cardBg from "@/assets/images/card-bg.png";
import styled from "styled-components";
import Container from "@/components/templates/Container";
import { KompetensiKeahlianSvg } from "@/components/atoms/icons/KompetensiKeahlian";

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
	grid-template-columns: repeat(3, 1fr);
`;
const CardStyled = styled(Card)`
	background-color: transparent;
	background-image: url(${cardBg});
	background-size: 100%;
	background-position: bottom;
	background-repeat: no-repeat;
`;
const TitleStyled = styled(Title)`
	text-align: center;
`;
const CardDesc = styled.div`
	text-align: center;
`;

const KompetensiKeahlian = () => {
	return (
		<MainLayout footerBg="#fff">
			<Site title="Kompetensi Keahlian" />
			<Header
				title="Kompetensi Keahlian"
				subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat alias impedit cupiditate mollitia quisquam repudiandae voluptatum asperiores voluptatem unde autem"
				Icon={KompetensiKeahlianSvg}
			/>
			<Section>
				<Layout>
					{Array(6)
						.fill("")
						.map((_, i) => (
							<a
								href="/kompetensi-keahlian/teknik-komputer-dan-jaringan"
								key={i}
							>
								<CardStyled
									bordered={false}
									hoverable
									cover={
										<img
											src={exampleImg2}
											alt="Kompetensi keahlian"
										/>
									}
								>
									<CardDesc>
										<TitleStyled level={3}>
											Teknik Komputer dan Jaringan
										</TitleStyled>
										<TitleStyled level={5}>
											Ketua Jurusan
										</TitleStyled>
										<CardDesc>Dr Shalihuddin Mp</CardDesc>
									</CardDesc>
								</CardStyled>
							</a>
						))}
				</Layout>
			</Section>
		</MainLayout>
	);
};

export default KompetensiKeahlian;
