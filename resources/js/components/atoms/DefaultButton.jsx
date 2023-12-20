import { Button } from "antd";
import React from "react";
import { styled } from "styled-components";

const ButtonStyled = styled(Button)`
	background-color: ${({ $bg = "#107e57" }) => $bg};
	color: ${({ $colors = "#fff" }) => $colors};
	border: none;
	display: flex;
	justify-content: center;
	align-items: center;
	outline: none;
	& .ant-wave {
		color: ${({ $bg = "#107e57" }) => $bg};
	}
	&:hover {
		background-color: #107e57;
		color: #fff !important;
	}
`;
const DefaultButton = ({ children }) => {
	return <ButtonStyled>{children}</ButtonStyled>;
};

export default DefaultButton;
