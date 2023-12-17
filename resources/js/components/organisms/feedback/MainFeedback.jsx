import React from "react";
import styled from "styled-components";
import Container from "@/components/templates/Container";
import HeadingMenu from "@/components/molecules/HeadingMenu";
import CarouselFeedback from "@/components/molecules/feedback/CarouselFeedback";

const Section = styled.section`
	background-color: #d9d9d9;
`;
const Wrapper = styled(Container)`
	margin: 30px auto;
	padding-bottom: 30px;
`;

const MainFeedback = () => {
	return (
		<Section>
			<Wrapper>
				<HeadingMenu
					title="Apa Kata Alumni"
					subtitle="Alumni SMKN 2 Majene"
				/>
				<CarouselFeedback />
			</Wrapper>
		</Section>
	);
};

export default MainFeedback;
