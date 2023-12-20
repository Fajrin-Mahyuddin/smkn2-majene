import React from "react";
import styled from "styled-components";
import Container from "@/components/templates/Container";
import footerSvgBg from "@/assets/images/footer-bg.svg";
import { Col, Divider, Row, Tag, Typography, Flex, Space } from "antd";
const { Title, Text } = Typography;

const Footer = styled.footer`
	/* width: 100%; */
	background-color: ${({ $bg }) => $bg};
	background-image: url(${footerSvgBg});
	background-position: top;
	background-repeat: no-repeat;
	background-size: cover;
`;

const Wrapper = styled(Container)`
	margin: auto;
	padding-top: 25vh;
	padding-bottom: 5vh;
	display: flex;
	justify-content: flex-end;
	align-items: flex-end;
`;

const Content = styled(Col)`
	display: flex;
	flex-direction: column;
	padding: 0 20px;
	& h4 {
		color: #fff;
	}
	& span {
		color: #fff;
	}
`;

const MainFooter = ({ footerBg = "#d9d9d9" }) => {
	return (
		<Footer $bg={footerBg}>
			<Wrapper>
				<Row>
					<Content span={8}>
						{/* <Content> */}
						<Title level={4}>Detail Kontak</Title>
						<Divider
							style={{
								borderColor: "#FFF",
								borderWidth: "2px",
								margin: "10px 0 5px",
							}}
						/>
						<Text>
							Jl. Dr. Ratulangi No. 9 Majene, Sulawesi Barat
						</Text>
						<Text>info@smkn2-maj.sch.id</Text>
						<Text>0422-21217</Text>
						{/* </Content> */}
					</Content>
					<Content span={8}>
						<Title level={4}>Kategori</Title>
						<Divider
							style={{
								borderColor: "#FFF",
								borderWidth: "2px",
								margin: "10px 0 5px",
							}}
						/>
						<Flex wrap="wrap" gap="5px">
							<Tag color="#014760">Pendidikan</Tag>
							<Tag color="#014760">Berita</Tag>
							<Tag color="#014760">Pengumuman</Tag>
							<Tag color="#014760">Siswa</Tag>
							<Tag color="#014760">Pendaftaran</Tag>
							<Tag color="#014760">Tahun Ajaran Baru</Tag>
							<Tag color="#014760">Beasiswa</Tag>
						</Flex>
					</Content>
					<Content span={8}>
						<Title level={4}>FAQ</Title>
						<Divider
							style={{
								borderColor: "#FFF",
								borderWidth: "2px",
								margin: "10px 0 5px",
							}}
						/>
						<Text
							underline
							style={{ fontSize: "12px", cursor: "pointer" }}
						>
							Berapa jurusan di sekolah menengah kejuruan negeri 2
							majene ?
						</Text>
						<Text
							underline
							style={{ fontSize: "12px", cursor: "pointer" }}
						>
							Lorem ipsum dolor sit amet.?
						</Text>
						<Text
							underline
							style={{ fontSize: "12px", cursor: "pointer" }}
						>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Pariatur, itaque.
						</Text>
					</Content>
				</Row>
			</Wrapper>
		</Footer>
	);
};

export default MainFooter;
