import React from "react";
import styled from "styled-components";
import ExampleJpg from "@/assets/images/example-img.jpg";
import postBg from "@/assets/images/post-bg.svg";
import { AiOutlineUser, AiTwotoneCalendar } from "react-icons/ai";
import { Flex, Space, Tag, Typography } from "antd";
import DefaultButton from "@/components/atoms/DefaultButton";
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
	height: 300px;
	object-fit: cover;
	object-position: center;
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
				<Post>
					<ImagePost
						src="https://images.unsplash.com/photo-1579403124614-197f69d8187b?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt="post title"
					/>
					<DescriptionPost vertical={true} gap="5px">
						<Flex wrap="wrap" gap="3px">
							<Tag style={{ fontSize: "9px" }} color="#014760">
								Terbaru
							</Tag>
							<Tag style={{ fontSize: "9px" }} color="#014760">
								Information
							</Tag>
						</Flex>
						<TextCostume>
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Et quod illum consectetur? Et quod illum
							consectetur?
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
				<Post>
					<ImagePost src={ExampleJpg} alt="post title" />
					<DescriptionPost vertical={true} gap="5px">
						<Flex wrap="wrap" gap="3px">
							<Tag style={{ fontSize: "9px" }} color="#014760">
								Terbaru
							</Tag>
							<Tag style={{ fontSize: "9px" }} color="#014760">
								Information
							</Tag>
						</Flex>
						<TextCostume>
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Et quod illum consectetur? Et quod illum
							consectetur?
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
				<Post>
					<ImagePost src={ExampleJpg} alt="post title" />
					<DescriptionPost vertical={true} gap="5px">
						<Flex wrap="wrap" gap="3px">
							<Tag style={{ fontSize: "9px" }} color="#014760">
								Terbaru
							</Tag>
							<Tag style={{ fontSize: "9px" }} color="#014760">
								Information
							</Tag>
						</Flex>
						<TextCostume>
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Et quod illum consectetur? Et quod illum
							consectetur?
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
				<Post>
					<ImagePost
						src="https://images.unsplash.com/photo-1579403124614-197f69d8187b?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt="post title"
					/>
					<DescriptionPost vertical={true} gap="5px">
						<Flex wrap="wrap" gap="3px">
							<Tag style={{ fontSize: "9px" }} color="#014760">
								Terbaru
							</Tag>
							<Tag style={{ fontSize: "9px" }} color="#014760">
								Information
							</Tag>
						</Flex>
						<TextCostume>
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Et quod illum consectetur? Et quod illum
							consectetur?
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
				<Post>
					<ImagePost
						src="https://images.unsplash.com/photo-1587955415524-bb264e518428?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt="post title"
					/>
					<DescriptionPost vertical={true} gap="5px">
						<Flex wrap="wrap" gap="3px">
							<Tag style={{ fontSize: "9px" }} color="#014760">
								Terbaru
							</Tag>
							<Tag style={{ fontSize: "9px" }} color="#014760">
								Information
							</Tag>
						</Flex>
						<TextCostume>
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Et quod illum consectetur? Et quod illum
							consectetur?
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
				<Post>
					<ImagePost
						src="https://images.unsplash.com/photo-1579403124614-197f69d8187b?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt="post title"
					/>
					<DescriptionPost vertical={true} gap="5px">
						<Flex wrap="wrap" gap="3px">
							<Tag style={{ fontSize: "9px" }} color="#014760">
								Terbaru
							</Tag>
							<Tag style={{ fontSize: "9px" }} color="#014760">
								Information
							</Tag>
						</Flex>
						<TextCostume>
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Et quod illum consectetur? Et quod illum
							consectetur?
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
				<Post>
					<ImagePost
						src="https://images.unsplash.com/photo-1579403124614-197f69d8187b?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt="post title"
					/>
					<DescriptionPost vertical={true} gap="5px">
						<Flex wrap="wrap" gap="3px">
							<Tag style={{ fontSize: "9px" }} color="#014760">
								Terbaru
							</Tag>
							<Tag style={{ fontSize: "9px" }} color="#014760">
								Information
							</Tag>
						</Flex>
						<TextCostume>
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Et quod illum consectetur? Et quod illum
							consectetur?
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
				<Post>
					<ImagePost
						src="https://images.unsplash.com/photo-1587955415524-bb264e518428?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt="post title"
					/>
					<DescriptionPost vertical={true} gap="5px">
						<Flex wrap="wrap" gap="3px">
							<Tag style={{ fontSize: "9px" }} color="#014760">
								Terbaru
							</Tag>
							<Tag style={{ fontSize: "9px" }} color="#014760">
								Information
							</Tag>
						</Flex>
						<TextCostume>
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Et quod illum consectetur? Et quod illum
							consectetur?
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
				<Post>
					<ImagePost src={ExampleJpg} alt="post title" />
					<DescriptionPost vertical={true} gap="5px">
						<Flex wrap="wrap" gap="3px">
							<Tag style={{ fontSize: "9px" }} color="#014760">
								Terbaru
							</Tag>
							<Tag style={{ fontSize: "9px" }} color="#014760">
								Information
							</Tag>
						</Flex>
						<TextCostume>
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Et quod illum consectetur? Et quod illum
							consectetur?
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
			</Posts>
			<DefaultButton>Lihat Semua</DefaultButton>
		</Space>
	);
};

export default PostsList;
