import React from "react";
import styled from "styled-components";

const CenterChild = styled.div`
	display: flex;
	flex-direction: ${({ $flexDir = "column" }) => $flexDir};
	justify-content: center;
	align-items: center;
`;

const Center = ({ className, children, flexdir }) => {
	return (
		<CenterChild $flexDir={flexdir} className={className}>
			{children}
		</CenterChild>
	);
};

export default Center;
