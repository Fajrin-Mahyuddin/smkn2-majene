import React, { useRef, useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Flex } from "antd";

import example2Img from "@/assets/images/example-img2.png";
import example3Img from "@/assets/images/example-img3.jpg";

const CarouselContainer = styled.div`
	width: 100%;
	margin: auto;
	position: relative;
	max-width: 1540px;
`;
const CarauselItem = styled.div`
	height: 70vh;
	width: 100%;
	/* width: 100%; */
`;
const Img = styled.img`
	background-color: #2c2c2c;
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: center;
`;

const DotWrapper = styled(Flex)`
	position: absolute;
	bottom: 5%;
	width: 100%;
	padding: 5px 0;
	z-index: 29999;
	gap: 10px;
`;
const Dots = styled.div`
	cursor: pointer;
	background-color: #fff;
	opacity: ${({ $isIndex }) => ($isIndex ? 1 : 0.5)};
	width: 2.5%;
	border-radius: 5px;
	height: 5px;
`;

const CarouselImage = () => {
	const SlideRef = useRef(null);
	const [index, setIndex] = useState(0);
	const settings = {
		dots: false,
		arrows: false,
		infinite: true,
		autoplay: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		swipeToSlide: true,
	};
	const handleClick = (i) => {
		if (SlideRef && SlideRef.current) {
			SlideRef.current.slickGoTo(i);
		}
	};
	return (
		<CarouselContainer>
			<Slider
				ref={SlideRef}
				{...settings}
				afterChange={(i) => setIndex(i)}
			>
				{/* {Array.from({ length: 4 })
					.map((_, i) => ( */}
				<CarauselItem>
					<Img src={example2Img} alt="example image slide 1" />
				</CarauselItem>
				<CarauselItem>
					<Img
						src="https://images.unsplash.com/photo-1579403124614-197f69d8187b?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt="example image slide 2"
					/>
				</CarauselItem>
				<CarauselItem>
					<Img
						src="https://images.unsplash.com/photo-1587955415524-bb264e518428?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt="example image slide 3"
					/>
				</CarauselItem>
				<CarauselItem>
					<Img src={example3Img} alt="example image slide4" />
				</CarauselItem>
				{/* ))} */}
			</Slider>
			<DotWrapper align="center" justify="center">
				{Array.from({ length: 4 }).map((_, i) => (
					<Dots
						$isIndex={i === index}
						onClick={() => handleClick(i)}
						key={i}
					/>
				))}
			</DotWrapper>
		</CarouselContainer>
	);
};

export default CarouselImage;
