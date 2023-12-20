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
`;
const Flex = styled.div`
	display: flex;
	width: 100%;
	max-width: 1540px;
	align-items: flex-start;
	justify-content: space-evenly;
`;
const Links = styled.a`
	cursor: pointer;
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
`;

const Item = styled(Center)`
	width: 200px;
	text-align: center;
`;

const Label = styled.div`
	font-size: 1.5rem;
	font-weight: 600;
`;

const MainMenus = () => {
	return (
		<Section>
			<Wrapper>
				<HeadingMenu
					title="Selamat Datang"
					subtitle="Menu pilihan utama"
				/>
				<Flex>
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
						<Links href="#">
							<Alumni colors="#107E57" />
						</Links>
						<Label>Alumni</Label>
					</Item>
				</Flex>

				<Flex>
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
						<Links href="#">
							<SiswaSvg colors="#107E57" />
						</Links>
						<Label>Siswa</Label>
					</Item>
				</Flex>
			</Wrapper>
		</Section>
	);
};

export default MainMenus;
