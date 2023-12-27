import React from "react";
import { Flex, Table } from "antd";
import styled from "styled-components";
import Button from "@/components/atoms/Button";
import { AiOutlineSearch } from "react-icons/ai";
import { MobileView } from "@/constants/responsiveSize";

const columns = [
	{
		title: "Name",
		dataIndex: "name",
		key: "name",
		// render: (text) => <a>{text}</a>,
	},
	{
		title: "Angkatan",
		dataIndex: "angkatan",
		key: "angkatan",
	},
	{
		title: "Pekerjaan",
		dataIndex: "pekerjaan",
		key: "pekerjaan",
	},
	{
		title: "Alamant",
		dataIndex: "alamat",
		key: "alamat",
	},
	// {
	// 	title: 'Tags',
	// 	key: 'tags',
	// 	dataIndex: 'tags',
	// 	render: (_, { tags }) => (
	// 		<>
	// 			{tags.map((tag) => {
	// 				let color = tag.length > 5 ? 'geekblue' : 'green';
	// 				if (tag === 'loser') {
	// 					color = 'volcano';
	// 				}
	// 				return (
	// 					<Tag color={color} key={tag}>
	// 						{tag.toUpperCase()}
	// 					</Tag>
	// 				);
	// 			})}
	// 		</>
	// 	),
	// },
	// {
	// 	title: 'Action',
	// 	key: 'action',
	// 	render: (_, record) => (
	// 		<Space size="middle">
	// 			<a>Invite {record.name}</a>
	// 			<a>Delete</a>
	// 		</Space>
	// 	),
	// },
];
const data = [
	{
		key: "1",
		name: "Name here",
		angkatan: 2010,
		pekerjaan: "occupation here",
		alamat: "Address here",
	},
	{
		key: "2",
		name: "Name here",
		angkatan: 2010,
		pekerjaan: "occupation here",
		alamat: "Address here",
	},
];

const FlexStyled = styled(Flex)`
	margin-top: ${(props) => props.$mt};
	margin-bottom: 20px;
`;
const Input = styled("input")`
	border: 2px solid #107e57;
	outline: none;
	font-size: 1rem;
	border-bottom-left-radius: 7px;
	border-top-left-radius: 7px;
	padding: 5px 10px;
	@media screen and (max-width: ${MobileView}) {
		width: 100%;
	}
`;
const ButtonGroup = styled(Button)`
	border-radius: 0;
	border-top-right-radius: 7px;
	border-bottom-right-radius: 7px;
`;
const Box = styled.div`
	width: 100%;
	overflow: auto;
`;

const TableAlumni = () => {
	return (
		<>
			<FlexStyled>
				<Input type="search" name="q" />
				<ButtonGroup onClick={() => console.log("oke", q)}>
					<AiOutlineSearch size={25} />
				</ButtonGroup>
			</FlexStyled>
			<Box>
				<Table columns={columns} dataSource={data} />
			</Box>
		</>
	);
};

export default TableAlumni;
