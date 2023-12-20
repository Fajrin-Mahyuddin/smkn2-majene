import React from "react";
import styled from "styled-components";
import Container from "@/components/templates/Container";
import headerBg from "@/assets/images/header-bg.svg";
import quoteSvg from "@/assets/icons/quote.svg";
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
	margin: 70px auto;
	padding: 20px 120px;
	justify-content: center !important;
`;
const TitleStyled = styled(Title)`
	font-weight: 600 !important;
	color: #014760 !important;
`;
const Quote = styled.div`
	gap: 10px;
	width: 50%;
	padding: 20px;
	display: flex;
	border-radius: 10px;
	align-items: flex-start;
	background-color: #d9d9d9;
`;
const Img = styled.img`
	position: relative;
	top: 0;
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
				<div>
					<Icon />
				</div>
			</Wrapper>
		</Section>
	);
};

export default Header;
