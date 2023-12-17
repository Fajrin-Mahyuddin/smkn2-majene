import React from "react";
import styled from "styled-components";
import HeadingMenu from "@/components/molecules/HeadingMenu";
import Container from "@/components/templates/Container";
import CarouselInformation from "@/components/molecules/information/CarouselInformation";

const Section = styled.section`
	background-color: #d9d9d9;
`;
const Wrapper = styled(Container)`
	margin: 30px auto;
`;

const MainInformation = () => {
	return (
		<Section>
			<Wrapper>
				<HeadingMenu
					title="Pengumuman"
					subtitle="Informasi singkat terkait pengumuman"
				/>
				<CarouselInformation />
			</Wrapper>
		</Section>
	);
};

export default MainInformation;
