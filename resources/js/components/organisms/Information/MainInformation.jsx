import React from "react";
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
	background-color: aqua;
`;
const CarouselBox = styled.div`
	/* display: inline-block; */
	width: inherit;
	background-color: salmon;
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
	background-size: 100% auto;
	background-repeat: no-repeat;
	background-color: rebeccapurple;

	& .additional-information {
		font-size: 12px;
		color: #d1d1d1;
		margin: 10px 0 20px;
		display: flex;
		align-items: center;
		gap: 5px;
	}
`;

const PaddingWrapper = styled.div`
	/* padding: 0 10px; */
	padding: 0 10px;
	& ~ div:first-child {
		padding-right: 0px;
	}
`;

const VStack = styled.div`
	display: flex;
	flex-direction: column;
`;
const HStack = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

const MainInformation = () => {
	const settings = {
		dots: false,
		arrows: false,
		infinite: false,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
	};
	return (
		<Section>
			<Wrapper>
				<HeadingMenu
					title="Pengumuman"
					subtitle="Informasi singkat terkait pengumuman"
				/>
				<CarouselContainer>
					<CarouselBox>
						<Slider {...settings}>
							<PaddingWrapper>
								<CarouselItem>
									<h3>
										Informasi penerimaan siswa baru tahun
										ajaran 2024...
									</h3>
									<div className="additional-information">
										<AiTwotoneCalendar />
										<span>Minggu, 25 Agustus 2020</span>
									</div>
									<div>
										Lorem ipsum dolor sit amet, consectetur
										adipisicing elit. Itaque, optio? Illum,
										assumenda? Lorem ipsum dolor sit, amet
										consectetur adipisicing elit. Tempore
										sint porro fugit.
									</div>
								</CarouselItem>
							</PaddingWrapper>
							<PaddingWrapper>
								<CarouselItem>
									<h3>
										Informasi penerimaan siswa baru tahun
										ajaran 2024...
									</h3>
									<div className="additional-information">
										<AiTwotoneCalendar />
										<span>Minggu, 25 Agustus 2020</span>
									</div>
									<div>
										Lorem ipsum dolor sit amet, consectetur
										adipisicing elit. Itaque, optio? Illum,
										assumenda? Lorem ipsum dolor sit, amet
										consectetur adipisicing elit. Tempore
										sint porro fugit.
									</div>
								</CarouselItem>
							</PaddingWrapper>
							<PaddingWrapper>
								<CarouselItem>
									<h3>
										Informasi penerimaan siswa baru tahun
										ajaran 2024...
									</h3>
									<div className="additional-information">
										<AiTwotoneCalendar />
										<span>Minggu, 25 Agustus 2020</span>
									</div>
									<div>
										Lorem ipsum dolor sit amet, consectetur
										adipisicing elit. Itaque, optio? Illum,
										assumenda? Lorem ipsum dolor sit, amet
										consectetur adipisicing elit. Tempore
										sint porro fugit.
									</div>
								</CarouselItem>
							</PaddingWrapper>
							<PaddingWrapper>
								<CarouselItem>
									<h3>
										Informasi penerimaan siswa baru tahun
										ajaran 2024...
									</h3>
									<div className="additional-information">
										<AiTwotoneCalendar />
										<span>Minggu, 25 Agustus 2020</span>
									</div>
									<div>
										Lorem ipsum dolor sit amet, consectetur
										adipisicing elit. Itaque, optio? Illum,
										assumenda? Lorem ipsum dolor sit, amet
										consectetur adipisicing elit. Tempore
										sint porro fugit.
									</div>
								</CarouselItem>
							</PaddingWrapper>
						</Slider>
					</CarouselBox>
					<HStack>
						<Button>Lihat Semua</Button>
						<HStack>
							<Button>Prev</Button>
							<Button>Next</Button>
						</HStack>
					</HStack>
				</CarouselContainer>
			</Wrapper>
		</Section>
	);
};

export default MainInformation;
