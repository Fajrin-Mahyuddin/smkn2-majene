import React from "react";
import styled from "styled-components";
import Container from "@/components/templates/Container";
import HeadingMenu from "@/components/organisms/menus/HeadingMenu";
import ExampleJpg from "@/assets/images/example-img.jpg";
import postBg from "@/assets/images/post-bg.svg";

const Section = styled.section`
	background-color: #fff;
`;

const Wrapper = styled(Container)`
	margin: auto;
`;

const Posts = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 15px;
`;
const Post = styled.div`
	position: relative;
	cursor: pointer;
	overflow: hidden;
	&:hover div {
		transform: translateY(0);
	}
`;
const ImagePost = styled.img`
	width: 100%;
`;
const DescriptionPost = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	transition: all 0.3s linear;
	padding: 60px 20px 10px;
	transform: translateY(100%);

	background-image: url(${postBg});
	background-repeat: no-repeat;
	background-position: top;
	background-size: 100%;
`;

const MainNews = () => {
	return (
		<Section>
			<Wrapper>
				<HeadingMenu
					title="Berita Terbaru"
					subtitle="Daftar Berita Teratas"
				/>
				<Posts>
					<Post>
						<ImagePost src={ExampleJpg} alt="post title" />
						<DescriptionPost>
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Et quod illum consectetur?
						</DescriptionPost>
					</Post>
					<Post>
						<ImagePost src={ExampleJpg} alt="post title" />
						<DescriptionPost>
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Et quod illum consectetur?
						</DescriptionPost>
					</Post>
					<Post>
						<ImagePost src={ExampleJpg} alt="post title" />
						<DescriptionPost>
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Et quod illum consectetur?
						</DescriptionPost>
					</Post>
					<Post>
						<ImagePost src={ExampleJpg} alt="post title" />
						<DescriptionPost>
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Et quod illum consectetur?
						</DescriptionPost>
					</Post>
					<Post>
						<ImagePost src={ExampleJpg} alt="post title" />
						<DescriptionPost>
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Et quod illum consectetur?
						</DescriptionPost>
					</Post>
					<Post>
						<ImagePost src={ExampleJpg} alt="post title" />
						<DescriptionPost>
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Et quod illum consectetur?
						</DescriptionPost>
					</Post>
				</Posts>
			</Wrapper>
		</Section>
	);
};

export default MainNews;
