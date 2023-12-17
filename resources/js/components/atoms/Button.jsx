import React from "react";
import styled, { css } from "styled-components";

const ButtonStyled = styled.button`
	border-radius: 7px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	${({ $variants }) => {
		switch ($variants) {
			case "second":
				return css`
					border: 1.2px solid #107e57;
					background-color: transparent;
					color: #107e57;
				`;
			default:
				return css`
					border: none;
					background-color: #107e57;
					color: #fff;
				`;
		}
	}}
`;

const Button = ({ children, variants, ...rest }) => {
	return (
		<ButtonStyled {...rest} $variants={variants}>
			{children}
		</ButtonStyled>
	);
};

export default Button;
