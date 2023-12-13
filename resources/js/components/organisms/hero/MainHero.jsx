import React from "react";
import TextHero from "@/components/molecules/hero/TextHero";
import bg from "@/assets/images/bg.png";
import styled from "styled-components";
import Container from "@/components/templates/Container";

const Section = styled.section`
	background-image: url(${bg});
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	height: 100vh;
	width: 100%;
`;
const Wrapper = styled(Container)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: inherit;
	margin: auto;
`;

const MainHero = () => {
	return (
		<Section>
			<Wrapper>
				<TextHero />
				<div className="image-hero">
					<div className="hero-frame">
						<img
							src="./assets/hero-img.png"
							alt="frame-image-hero"
							width="100%"
						/>
					</div>
				</div>
			</Wrapper>
		</Section>
	);
};

export default MainHero;
