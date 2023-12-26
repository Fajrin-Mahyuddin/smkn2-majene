import React from "react";
import Site from "@/components/atoms/Head";
import MainLayout from "@/components/templates/Layout";
import styled from "styled-components";
import detailBg from "@/assets/images/detail-bg.svg";
import Container from "@/components/templates/Container";
import { Divider, Typography } from "antd";

import PostsList from "@/components/molecules/news/Posts";
import CarouselImage from "@/components/molecules/CarouselImage";

const { Title } = Typography;
const Section = styled.div`
	width: 100%;
	background-color: #fff;
`;
const Wrapper = styled(Container)`
	margin: auto;
	gap: 30px;
	display: flex;
	flex-direction: column;
`;
const DetailHeader = styled.div`
	width: 100%;
	height: 25vh;
	display: flex;
	align-items: flex-end;
	justify-content: center;
	color: #014760;
	text-align: center;
	background-image: url(${detailBg});
	background-repeat: no-repeat;
	background-position: top;
	background-size: cover;
	background-color: #d9d9d9;
	& h1 {
		font-weight: 600;
		font-size: 2.5rem;
		padding-bottom: 20px;
	}
`;

const PengumumanPage = ({ data }) => {
	console.log(data);

	return (
		<MainLayout footerBg="#fff">
			<Site title="Kompetensi Keahlian" />
			<DetailHeader>
				<h1>PENGUMUMAN</h1>
			</DetailHeader>
			<Section>
				<CarouselImage />
				<Wrapper>
					<Divider />
					<Title level={2}>Pengumuman Terbaru</Title>
					<PostsList labelBtn="Load More" />
					<Divider />
				</Wrapper>
			</Section>
		</MainLayout>
	);
};

export default PengumumanPage;
