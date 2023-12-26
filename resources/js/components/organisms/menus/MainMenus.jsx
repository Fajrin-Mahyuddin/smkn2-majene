import React from "react";
import styled from "styled-components";
import HeadingMenu from "@/components/molecules/HeadingMenu";
import Container from "@/components/templates/Container";
import Center from "@/components/atoms/Center";
import { PpdbSvg } from "@/components/atoms/icons/Ppdb";
import { KompetensiKeahlianSvg } from "@/components/atoms/icons/KompetensiKeahlian";
import { Alumni } from "@/components/atoms/icons/Alumni";
import { StrukturOrganisasiSvg } from "@/components/atoms/icons/StrukturOrganisasi";
import { BeritaSvg } from "@/components/atoms/icons/Berita";
import { SiswaSvg } from "@/components/atoms/icons/Siswa";
import { MobileView } from "@/constants/responsiveSize";

const Section = styled.section`
	background-color: #fff;
`;
const Wrapper = styled(Container)`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin: 30px auto;
	gap: 30px;
	width: 100%;
`;
const Grid = styled.div`
	display: grid;
	width: 35vw;
	max-width: 1540px;
	align-items: flex-start;
	justify-content: center;
	grid-template-columns: repeat(3, 1fr);
	gap: 100px;
	@media screen and (max-width: ${MobileView}) {
		width: 100vw;
		gap: 20px 10px;
		grid-template-columns: repeat(2, 1fr);
	}
`;
const Links = styled.a`
	cursor: pointer;
	& svg {
		margin-bottom: 10px;
		height: auto;
		width: auto;
	}
	& path,
	& svg {
		transition: all 0.3s linear;
	}
	&:hover {
		& svg {
			transform: scale(1.05);
		}
		& .main-color {
			fill: #fff;
		}
		& .bg {
			fill: #107e57;
		}
	}
	@media screen and (max-width: ${MobileView}) {
		& svg {
			width: 100%;
			margin-bottom: 0;
		}
	}
`;

const Item = styled(Center)`
	text-align: center;
	justify-self: center;
	width: auto;
	@media screen and (max-width: ${MobileView}) {
		width: 140px;
	}
`;

const Label = styled.div`
	font-size: 1.5rem;
	font-weight: 600;
	@media screen and (max-width: ${MobileView}) {
		font-size: 1.2rem;
	}
`;

const MainMenus = () => {
	return (
		<Section>
			<Wrapper>
				<HeadingMenu
					title="Selamat Datang"
					subtitle="Menu pilihan utama"
				/>
				<Grid>
					<Item>
						<Links href="#">
							<PpdbSvg colors="#107E57" />
						</Links>
						<Label>PPDB Online</Label>
					</Item>
					<Item>
						<Links href="/kompetensi-keahlian">
							<KompetensiKeahlianSvg colors="#107E57" />
						</Links>
						<Label>Kompetensi Keahlian</Label>
					</Item>
					<Item>
						<Links href="/alumni">
							<Alumni colors="#107E57" />
						</Links>
						<Label>Alumni</Label>
					</Item>
					<Item>
						<Links href="/struktur-organisasi">
							<StrukturOrganisasiSvg colors="#107E57" />
						</Links>
						<Label>Struktur Organisasi</Label>
					</Item>
					<Item>
						<Links href="/berita">
							<BeritaSvg colors="#107E57" />
						</Links>
						<Label>Berita</Label>
					</Item>
					<Item>
						<Links href="/siswa">
							<SiswaSvg colors="#107E57" />
						</Links>
						<Label>Siswa</Label>
					</Item>
				</Grid>
			</Wrapper>
		</Section>
	);
};

export default MainMenus;
