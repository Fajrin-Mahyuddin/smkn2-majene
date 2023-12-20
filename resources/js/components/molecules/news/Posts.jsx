import React from "react";
import styled from "styled-components";
import ExampleJpg from "@/assets/images/example-img.jpg";
import postBg from "@/assets/images/post-bg.svg";
import { AiOutlineUser, AiTwotoneCalendar } from "react-icons/ai";
import { Button, Flex, Space, Tag, Typography } from "antd";
const { Text } = Typography;

const TextCostume = styled(Text)`
	font-size: 1.2rem;
	line-height: 1.2;
	font-weight: 400;
	color: #fff;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
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

const DescriptionPost = styled(Flex)`
	position: absolute;
	bottom: 0;
	left: 0;
	height: auto;
	width: 100%;
	transition: all 0.3s linear;
	padding: 16% 20px 10px;
	transform: translateY(100%);

	background-image: url(${postBg});
	background-repeat: no-repeat;
	background-position: top;
	background-size: cover;
`;

const Span = styled.span`
	font-size: 11px;
	font-weight: 300;
	color: #fff;
	display: flex;
	align-items: center;
	gap: 3px;
`;

const PostsList = () => {
	return (
		<Space direction="vertical">
			<Posts>
				{Array.from({ length: 6 }).map((_, i) => (
					<Post key={i}>
						<ImagePost src={ExampleJpg} alt="post title" />
						<DescriptionPost vertical={true} gap="5px">
							<Flex wrap="wrap" gap="3px">
								<Tag
									style={{ fontSize: "9px" }}
									color="#014760"
								>
									Terbaru
								</Tag>
								<Tag
									style={{ fontSize: "9px" }}
									color="#014760"
								>
									Information
								</Tag>
							</Flex>
							<TextCostume>
								Lorem ipsum dolor sit, amet consectetur
								adipisicing elit. Et quod illum consectetur? Et
								quod illum consectetur?
							</TextCostume>
							<Flex justify="space-between">
								<Span>
									<AiTwotoneCalendar />
									Senin, 10 November 2020
								</Span>
								<Span>
									<AiOutlineUser /> Administrator
								</Span>
							</Flex>
						</DescriptionPost>
					</Post>
				))}
			</Posts>
			<Button>Lihat Semua</Button>
		</Space>
	);
};

export default PostsList;
