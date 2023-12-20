import { Button } from "antd";
import React, { useRef } from "react";
import styled from "styled-components";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import ItemCarousel from "@/components/atoms/information/ItemCarousel";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	margin-top: 30px;
`;
const CarouselBox = styled.div`
	width: inherit;
`;

const HStack = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding-left: ${(props) => props.$paddingX};
	padding-right: ${(props) => props.$paddingX};
	gap: ${(props) => props.$gap};
`;

const ButtonStyled = styled(Button)`
	background-color: ${({ $bg = "#107e57" }) => $bg};
	color: ${({ $colors = "#fff" }) => $colors};
	border: none;
	display: flex;
	justify-content: center;
	align-items: center;
	outline: none;
	& .ant-wave {
		color: #107e57;
	}
	&:hover {
		background-color: #107e57;
		color: #fff !important;
	}
`;

const CarouselInformation = () => {
	const SlideRef = useRef(null);
	const settings = {
		dots: false,
		arrows: false,
		infinite: false,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		swipeToSlide: true,
	};

	const next = (e) => {
		e.preventDefault();
		if (SlideRef && SlideRef.current) {
			SlideRef.current.slickNext();
		}
	};

	const prev = (e) => {
		e.preventDefault();
		if (SlideRef && SlideRef.current) {
			SlideRef.current.slickPrev();
		}
	};

	return (
		<CarouselContainer>
			<CarouselBox className="carousel-box">
				<Slider ref={SlideRef} {...settings}>
					{Array(5)
						.fill("")
						.map((_, i) => {
							return <ItemCarousel key={i} />;
						})}
				</Slider>
			</CarouselBox>
			<HStack $paddingX="10px">
				<ButtonStyled>Lihat Semua</ButtonStyled>
				<HStack $gap="10px">
					<ButtonStyled
						$bg="#fff"
						$colors="#105e57"
						onClick={prev}
						icon={<MdChevronLeft size={20} />}
					/>
					<ButtonStyled
						$bg="#fff"
						$colors="#105e57"
						onClick={next}
						icon={<MdChevronRight size={20} />}
					/>
				</HStack>
			</HStack>
		</CarouselContainer>
	);
};

export default CarouselInformation;
