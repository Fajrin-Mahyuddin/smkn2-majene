import { Avatar, Flex } from "antd";
import React from "react";
import styled from "styled-components";
import ExampleAvatar from "@/assets/images/example-user.jpg";
import quoteIcon from "@/assets/icons/quote.svg";

const CardStyled = styled("div")`
	display: flex !important;
	background-color: #fff;
	padding: 20px;
	border-radius: 10px;
	flex-direction: row;
	width: 100%;
	gap: 10%;
`;

const FlexStyled = styled(Flex)`
	justify-content: center;
	align-items: center;
	& .occupation {
		font-size: 11px;
		color: #c0c0c0;
		font-weight: 300;
		letter-spacing: 0.8px;
		font-style: italic;
	}
`;
const Img = styled.img`
	align-self: ${({ $alignSelf = "flex-start" }) => $alignSelf};
	transform: ${(props) =>
		props.$isflip ? "rotate(180deg)" : "rotate(0deg)"};
	width: ${(props) => props.$w};
	position: relative;
	top: ${(props) => props.$top};
`;

const Text = styled.p`
	font-size: 0.9rem;
	line-height: 1.4;
	font-style: italic;
`;

const FeedbackItem = () => {
	return (
		<div className="wrapper-slider">
			<CardStyled>
				<FlexStyled vertical={true} gap="10px">
					<div>
						<Avatar src={ExampleAvatar} size={150} />
					</div>
					<FlexStyled vertical={true}>
						<div className="name">Name of</div>
						<div className="occupation">kepala dinas</div>
					</FlexStyled>
				</FlexStyled>
				<Flex align="center">
					<Img src={quoteIcon} $w="30px" alt="quote left" />
					<Text>
						Lorem ipsum, dolor sit amet consectetur adipisicing
						elit. Ipsa, perferendis! Id esse fugit eius deleniti
						praesentium nihil minus molestias a.
					</Text>
					<Img
						src={quoteIcon}
						$isflip
						$alignSelf="flex-end"
						$w="30px"
						alt="quote right"
					/>
				</Flex>
			</CardStyled>
		</div>
	);
};

export default FeedbackItem;
