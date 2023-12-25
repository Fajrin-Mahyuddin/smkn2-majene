import React from "react";
import styled from "styled-components";
import Container from "@/components/templates/Container";
import HeadingMenu from "@/components/molecules/HeadingMenu";
import { Space } from "antd";
import PostsList from "@/components/molecules/news/Posts";

const Section = styled.section`
	background-color: #fff;
	padding-top: 20px;
	padding-bottom: 30px;
`;

const Wrapper = styled(Container)`
	margin: auto;
`;

const MainNews = () => {
	return (
		<Section>
			<Wrapper>
				<Space direction="vertical">
					<HeadingMenu
						title="Berita Terbaru"
						subtitle="Daftar Berita Teratas"
					/>
					<PostsList />
				</Space>
			</Wrapper>
		</Section>
	);
};

export default MainNews;
