import React from "react";
import styled from "styled-components";
import boxBg from "@/assets/images/box-bg.png";
import { AiTwotoneCalendar } from "react-icons/ai";

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

const ItemCarousel = () => {
	return (
		<PaddingWrapper className="carousel-item">
			<CarouselItem>
				<HeadingTitleBox href="# ">
					Informasi penerimaan siswa baru tahun ajaran 2024 yang akan
					segera dilaksanakan
				</HeadingTitleBox>
				<div className="additional-information">
					<AiTwotoneCalendar />
					<span>Minggu, 25 Agustus 2020</span>
				</div>
				<ParagraphBox>
					Lorem ipsum dolor sit amet, consectetu adipisicing elit.
					Itaque, optio? Illum, assume Lorem ipsum dolor sit, amet
					consectetur adipisicing elit. Tempore sint porro fugit.
					consectetur adipisicing elit.
				</ParagraphBox>
			</CarouselItem>
		</PaddingWrapper>
	);
};

export default ItemCarousel;
