import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FeedbackItem from "@/components/atoms/feedback/Item";
import { MobileView } from "@/constants/responsiveSize";

const Feedback = styled.div`
	margin-top: 50px;
	& .wrapper-slider {
		padding: 0 10px;
	}
`;

const CarouselFeedback = () => {
	const settings = {
		dots: false,
		arrows: false,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 1,
		swipeToSlide: true,
		autoplay: true,
		responsive: [
			{
				breakpoint: MobileView,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};
	return (
		<Feedback>
			<Slider {...settings}>
				{Array(5)
					.fill("")
					.map((_, i) => (
						<FeedbackItem key={i} />
					))}
			</Slider>
		</Feedback>
	);
};

export default CarouselFeedback;
