import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
	width: inherit;
	max-width: 1540px;
	text-align: center;
`;
const Heading = styled.h1`
	text-transform: uppercase;
	margin: 10px 0;
	font-size: 2.5rem;
	font-weight: 700;
`;
const SubHeading = styled.p`
	font-size: 1rem;
`;

const HeadingMenu = ({ title, subtitle }) => {
	return (
		<Wrapper>
			<Heading>{title}</Heading>
			<SubHeading>{subtitle}</SubHeading>
		</Wrapper>
	);
};

export default HeadingMenu;
