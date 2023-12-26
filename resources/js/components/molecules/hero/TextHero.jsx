import React, { useState } from "react";
import styled from "styled-components";
import quoteIcon from "@/assets/icons/quote.svg";
import fbIcon from "@/assets/icons/fb.svg";
import xIcon from "@/assets/icons/x.svg";
import ytIcon from "@/assets/icons/yt.svg";
import igIcon from "@/assets/icons/ig.svg";
import Button from "@/components/atoms/Button";
import { MobileView } from "@/constants/responsiveSize";
import { AiOutlineSearch } from "react-icons/ai";
import { Flex } from "antd";

const Wrapper = styled("div")`
	width: 40%;
	min-width: 250px;
	@media screen and (max-width: ${MobileView}) {
		margin-top: 20px;
		width: 100%;
	}
`;
const Heading = styled("h1")`
	color: #107e57;
	font-weight: bold;
	font-size: 3.3rem;
	@media screen and (max-width: ${MobileView}) {
		text-align: center;
		font-size: 2.5rem;
	}
`;
const SubHeading = styled("span")`
	color: #014760;
`;
const FlexStyled = styled(Flex)`
	margin-top: ${(props) => props.$mt};
	& a {
		align-self: center;
	}
	@media screen and (max-width: ${MobileView}) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 10px;
	}
`;
const Box = styled(Flex)`
	background-color: #d9d9d9;
	border-radius: 10px;
	padding: 10px;
	position: relative;
	align-items: flex-start;
`;
const Image = styled("img")`
	transform: ${(props) =>
		props.$isflip ? "rotate(180deg)" : "rotate(0deg)"};
	width: ${(props) => props.$w};
	position: relative;
	top: ${(props) => props.$top};
	@media screen and (max-width: ${MobileView}) {
		top: 0;
	}
`;
const Text = styled("p")`
	font-style: ${({ $textStyle = "italic" }) => $textStyle};
	font-size: ${({ $fontSize = ".95rem" }) => $fontSize};
	margin: 0 30px;
	font-weight: 500;
	@media screen and (max-width: ${MobileView}) {
		margin: 0 10px;
	}
`;
const TextHighlight = styled(Text)`
	color: #014760;
	font-style: normal;
	font-size: large;
	font-weight: 500;
	margin-top: 15px;
`;

const Input = styled("input")`
	border: 2px solid #107e57;
	outline: none;
	font-size: 1rem;
	border-bottom-left-radius: 7px;
	border-top-left-radius: 7px;
	padding: 0px 10px;
	@media screen and (max-width: ${MobileView}) {
		width: 80vw;
		padding: 10px;
	}
`;
const ButtonGroup = styled(Button)`
	border-radius: 0;
	border-top-right-radius: 7px;
	border-bottom-right-radius: 7px;
`;

const TextHero = () => {
	const [q, setQ] = useState(null);

	return (
		<Wrapper>
			<Heading>
				SMKN 2 <SubHeading>Majene</SubHeading>
			</Heading>
			<Box>
				<Image $w="10%" $top="-10px" src={quoteIcon} alt="quote icon" />
				<div>
					<Text>
						Website ini merupakan pintu gerbang informasi terdepan
						sebagai sarana untuk menyebarluaskan berbagai publikasii
						terkait kemajuan pendidikan di SMK 2 Maneje.
					</Text>
					<br />
					<TextHighlight> - Drs. Nurdin Sanuddin</TextHighlight>
					<Text $textStyle="normal" $fontSize="13px">
						Kepala Sekolah
					</Text>
				</div>
				<Image $w="10%" $isflip src={quoteIcon} alt="quote icon" />
			</Box>
			<FlexStyled justify="space-between" $mt="10px">
				<Flex>
					<Input
						defaultValue={q}
						type="search"
						name="q"
						onChange={(e) => setQ(e.currentTarget.value)}
					/>
					<ButtonGroup onClick={() => console.log("oke", q)}>
						<AiOutlineSearch size={25} />
					</ButtonGroup>
				</Flex>
				<Flex align="center" justify="flex-end">
					<a href="# ">
						<Image $w="85%" src={fbIcon} alt="ig" />
					</a>
					<a href="# ">
						<Image $w="85%" src={xIcon} alt="ig" />
					</a>
					<a href="# ">
						<Image $w="85%" src={igIcon} alt="ig" />
					</a>
					<a href="# ">
						<Image $w="85%" src={ytIcon} alt="ig" />
					</a>
				</Flex>
			</FlexStyled>
		</Wrapper>
	);
};

export default TextHero;
