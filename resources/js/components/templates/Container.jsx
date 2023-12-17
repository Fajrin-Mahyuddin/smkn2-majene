import React from "react";
import styled from "styled-components";

const ContainerStyled = styled.div`
	width: 100%;
	max-width: 1540px;
	padding-right: 4%;
	padding-left: 4%;
`;

const Container = ({ className, children }) => {
	return <ContainerStyled className={className}>{children}</ContainerStyled>;
};

export default Container;
