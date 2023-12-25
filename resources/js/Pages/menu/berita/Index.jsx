import React from "react";
import Site from "@/components/atoms/Head";
import MainLayout from "@/components/templates/Layout";
import Header from "@/components/organisms/menus/Header";
import { Typography, Divider } from "antd";
import styled from "styled-components";
import Container from "@/components/templates/Container";
import { BeritaSvg } from "@/components/atoms/icons/Berita";
import CarouselImage from "@/components/molecules/CarouselImage";
import PostsList from "@/components/molecules/news/Posts";

const { Title } = Typography;

const Section = styled.section`
	background-color: #fff;
`;
const Wrapper = styled(Container)`
	margin: 0 auto 40px;
`;

const NewsPage = () => {
	return (
		<MainLayout footerBg="#fff">
			<Site title="Berita" />
			<Header
				title="Berita"
				subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat alias impedit cupiditate mollitia quisquam repudiandae voluptatum asperiores voluptatem unde autem"
				Icon={BeritaSvg}
			/>
			<Section>
				<CarouselImage />
				<Wrapper>
					<Divider />
					<Title level={2}>Berita Terbaru</Title>
					<PostsList />
				</Wrapper>
			</Section>
		</MainLayout>
	);
};

export default NewsPage;
