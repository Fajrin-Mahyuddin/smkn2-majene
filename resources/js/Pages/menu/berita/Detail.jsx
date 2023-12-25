import React from "react";
import Site from "@/components/atoms/Head";
import MainLayout from "@/components/templates/Layout";
import styled from "styled-components";
import detailBg from "@/assets/images/detail-bg.svg";
import Container from "@/components/templates/Container";
import { Divider, Typography, Flex, Tag } from "antd";
import CarouselImage from "@/components/molecules/CarouselImage";
import { CalendarOutlined, UserOutlined } from "@ant-design/icons";
const { Title } = Typography;

const content = `
	Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
	<br />
	<br />
	Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
`;

const Section = styled.div`
	width: 100%;
	background-color: #fff;
`;
const Wrapper = styled(Container)`
	margin: ${({ m = "auto" }) => m};
	gap: 10px;
	display: flex;
	flex-direction: column;
	padding: ${({ p = "auto" }) => p};
`;
const DetailHeader = styled.div`
	width: 100%;
	height: 25vh;
	display: flex;
	align-items: flex-end;
	justify-content: flex-start;
	color: #014760;
	text-align: center;
	background-image: url(${detailBg});
	background-repeat: no-repeat;
	background-position: top;
	background-size: cover;
	background-color: #d9d9d9;
`;
const TitleStyled = styled(Title)`
	margin-bottom: 0 !important;
`;
const DetailInfo = styled.div`
	display: flex;
	gap: 5%;
	font-size: 0.8rem;
	color: #b1b1b1;
	margin-bottom: 30px;
`;
const Paragraph = styled.p`
	font-size: 1rem;
	line-height: 2;
`;

const Detail = ({ data }) => {
	return (
		<MainLayout footerBg="#fff">
			<Site title="Kompetensi Keahlian" />
			<DetailHeader>
				<Wrapper m="0 auto" p="20px 10px">
					<Flex wrap="wrap" gap="5px">
						<Tag color="#014760">Pendidikan</Tag>
						<Tag color="#014760">Berita</Tag>
						<Tag color="#014760">Pengumuman</Tag>
						<Tag color="#014760">Siswa</Tag>
						<Tag color="#014760">Pendaftaran</Tag>
						<Tag color="#014760">Tahun Ajaran Baru</Tag>
						<Tag color="#014760">Beasiswa</Tag>
					</Flex>
				</Wrapper>
			</DetailHeader>
			<Section>
				<CarouselImage />
				<Wrapper>
					<Divider />
					<TitleStyled level={1}>
						Informasi penerimaan siswa baru tahun ajaran 2024
					</TitleStyled>
					<DetailInfo>
						<div>
							<CalendarOutlined /> Senin, 27 Desember 2023
						</div>
						<div>
							<UserOutlined /> Administrator
						</div>
					</DetailInfo>
					<Paragraph dangerouslySetInnerHTML={{ __html: content }} />
					<Divider />
				</Wrapper>
			</Section>
		</MainLayout>
	);
};

export default Detail;
