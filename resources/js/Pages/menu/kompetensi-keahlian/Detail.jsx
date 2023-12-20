import React, { useRef } from "react";
import Site from "@/components/atoms/Head";
import MainLayout from "@/components/templates/Layout";
import styled from "styled-components";
import exampleImg from "@/assets/images/example-img2.png";
import detailBg from "@/assets/images/detail-bg.svg";
import Container from "@/components/templates/Container";
import { Flex, Divider } from "antd";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PostsList from "@/components/molecules/news/Posts";

const Section = styled.div`
	width: 100%;
	background-color: #fff;
`;
const Wrapper = styled(Container)`
	margin: auto;
	gap: 30px;
	display: flex;
	flex-direction: column;
`;
const DetailHeader = styled.div`
	width: 100%;
	height: 25vh;
	display: flex;
	align-items: flex-end;
	justify-content: center;
	color: #014760;
	text-align: center;
	background-image: url(${detailBg});
	background-repeat: no-repeat;
	background-position: top;
	background-size: cover;
	background-color: #d9d9d9;
	& h1 {
		font-weight: 600;
		font-size: 2.5rem;
		padding-bottom: 20px;
	}
`;
const CarouselContainer = styled.div`
	width: 100%;
	position: relative;
`;
const CarauselItem = styled.div`
	height: 70vh;
	width: 100%;
	/* width: 100%; */
`;
const Img = styled.img`
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
	background-color: #eaeaea;
	width: 2.5%;
	border-radius: 5px;
	height: 5px;
`;

const Detail = ({ data }) => {
	console.log(data);
	const SlideRef = useRef(null);
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
	return (
		<MainLayout footerBg="#fff">
			<Site title="Kompetensi Keahlian" />
			<DetailHeader>
				<h1>Teknik Komputer dan Jaringan</h1>
			</DetailHeader>
			<Section>
				<Wrapper>
					<CarouselContainer>
						<Slider ref={SlideRef} {...settings}>
							{Array(4)
								.fill("")
								.map((_, i) => (
									<CarauselItem key={i}>
										<Img
											src={exampleImg}
											alt="example image slide"
										/>
									</CarauselItem>
								))}
						</Slider>
						<DotWrapper align="center" justify="center">
							{Array(4)
								.fill("")
								.map((_, i) => (
									<Dots key={i} />
								))}
						</DotWrapper>
					</CarouselContainer>
					<Divider />
					<PostsList />
					<Divider />
				</Wrapper>
			</Section>
		</MainLayout>
	);
};

export default Detail;
