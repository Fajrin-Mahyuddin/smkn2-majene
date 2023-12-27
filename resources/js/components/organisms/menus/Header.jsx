import React from "react";
import styled from "styled-components";
import Container from "@/components/templates/Container";
import headerBg from "@/assets/images/header-bg.svg";
import quoteSvg from "@/assets/icons/quote.svg";
import { MobileView } from "@/constants/responsiveSize";
import { Space, Typography } from "antd";

const { Text, Title } = Typography;

const Section = styled.div`
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	background-image: url(${headerBg});
	background-color: rgba(217, 217, 217, 0.3);
`;
const Wrapper = styled(Container)`
	display: flex;
	margin: 100px auto 20px;
	padding: 20px 120px;
	justify-content: center !important;
	flex-direction: row;
	align-items: flex-start;
	@media screen and (max-width: ${MobileView}) {
		gap: 15px;
		margin: 80px auto 20px;
		flex-direction: column-reverse;
		align-items: center;
		padding: 20px 10px;
	}
`;
const TitleStyled = styled(Title)`
	font-weight: 600 !important;
	color: #014760 !important;
	text-align: left;
	@media screen and (max-width: ${MobileView}) {
		text-align: center;
	}
`;
const Quote = styled.div`
	gap: 10px;
	width: 65%;
	padding: 20px;
	display: flex;
	border-radius: 10px;
	align-items: flex-start;
	background-color: #d9d9d9;
	@media screen and (max-width: ${MobileView}) {
		width: 100%;
		padding: 15px 5px;
	}
`;
const Img = styled.img`
	position: relative;
	top: 0;
`;

const Box = styled.div`
	text-align: right;
	@media screen and (max-width: ${MobileView}) {
		text-align: center;
	}
`;

const Header = ({ title, Icon, subtitle }) => {
	return (
		<Section>
			<Wrapper>
				<Space direction="vertical">
					<TitleStyled level={1}>{title}</TitleStyled>
					<Quote>
						<Img src={quoteSvg} alt="img-quote" />
						<Text>{subtitle}</Text>
					</Quote>
				</Space>
				<Box>
					<Icon />
				</Box>
			</Wrapper>
		</Section>
	);
};

export default Header;
