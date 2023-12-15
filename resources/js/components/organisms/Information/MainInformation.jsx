import React, { useRef } from "react";
import styled from "styled-components";
import HeadingMenu from "@/components/organisms/menus/HeadingMenu";
import boxBg from "@/assets/images/box-bg.png";
import Container from "@/components/templates/Container";
import { Button } from "antd";
import { AiTwotoneCalendar } from "react-icons/ai";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Section = styled.section`
	background-color: #eaeaea;
`;
const Wrapper = styled(Container)`
	margin: 30px auto;
`;
const CarouselContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	margin-top: 30px;
`;
const CarouselBox = styled.div`
	width: inherit;
`;
const CarouselItem = styled.div`
	display: flex;
	width: auto;
	height: auto;
	justify-content: space-between;
	padding: 20px;
	flex-direction: column;
	border: 3px solid #107e57;
	border-radius: 10px;

	background-image: url(${boxBg});
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;

	& .additional-information {
		font-size: 12px;
		font-style: italic;
		font-weight: 300;
		color: #b0b0b0;
		margin: 5px 0 20px;
		display: flex;
		align-items: center;
		gap: 5px;
	}
`;

const PaddingWrapper = styled.div`
	padding: 0 10px;
	/* &:not(:first-child) {
	} */
`;

const HeadingTitleBox = styled.a`
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
	font-style: normal;
	font-size: 1.2rem;
	font-weight: 500;
	color: inherit;
	padding: 1px 0;
	&:hover {
		color: #107e57;
	}
`;

const ParagraphBox = styled.p`
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 4;
	font-style: normal;
	color: inherit;
	margin: 0;
	text-indent: 25px;
	line-height: 1.3;
`;

const VStack = styled.div`
	display: flex;
	flex-direction: column;
`;

const HStack = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding-left: ${(props) => props.$paddingX};
	padding-right: ${(props) => props.$paddingX};
	gap: ${(props) => props.$gap};
`;

const MainInformation = () => {
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
		console.log(e, SlideRef?.current);
		if (SlideRef && SlideRef.current) {
			SlideRef.current.slickNext();
		}
	};

	const prev = (e) => {
		e.preventDefault();
		console.log(e, SlideRef?.current);
		if (SlideRef && SlideRef.current) {
			SlideRef.current.slickPrev();
		}
	};

	return (
		<Section>
			<Wrapper>
				<HeadingMenu
					title="Pengumuman"
					subtitle="Informasi singkat terkait pengumuman"
				/>
				<CarouselContainer>
					<CarouselBox className="carousel-box">
						<Slider ref={SlideRef} {...settings}>
							{Array(5)
								.fill("")
								.map((_, i) => {
									return (
										<PaddingWrapper
											key={i}
											className="carousel-item"
										>
											<CarouselItem>
												<HeadingTitleBox href="# ">
													Informasi penerimaan siswa
													baru tahun ajaran 2024 yang
													akan segera dilaksanakan
												</HeadingTitleBox>
												<div className="additional-information">
													<AiTwotoneCalendar />
													<span>
														Minggu, 25 Agustus 2020
													</span>
												</div>
												<ParagraphBox>
													Lorem ipsum dolor sit amet,
													consectetu adipisicing elit.
													Itaque, optio? Illum, assume
													Lorem ipsum dolor sit, amet
													consectetur adipisicing
													elit. Tempore sint porro
													fugit. consectetur
													adipisicing elit.
												</ParagraphBox>
											</CarouselItem>
										</PaddingWrapper>
									);
								})}
						</Slider>
					</CarouselBox>
					<HStack $paddingX="10px">
						<Button>Lihat Semua</Button>
						<HStack $gap="10px">
							<Button onClick={prev}>Prev</Button>
							<Button onClick={next}>Next</Button>
						</HStack>
					</HStack>
				</CarouselContainer>
			</Wrapper>
		</Section>
	);
};

export default MainInformation;
