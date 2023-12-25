import React from "react";
import { Space, Flex, Table, Tag } from "antd";
import styled from "styled-components";
import Button from "@/components/atoms/Button";
import { AiOutlineSearch } from "react-icons/ai";
const columns = [
	{
		title: "Name",
		dataIndex: "name",
		key: "name",
		// render: (text) => <a>{text}</a>,
	},
	{
		title: "Kelas",
		dataIndex: "kelas",
		key: "kelas",
	},
	{
		title: "Jurusan",
		dataIndex: "jurusan",
		key: "jurusan",
	},
	{
		title: "NIS",
		dataIndex: "nis",
		key: "nis",
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
		kelas: "I A",
		jurusan: "Akuntansi",
		nis: "123123123",
	},
	{
		key: "2",
		name: "Name here",
		kelas: "II B",
		jurusan: "Akuntansi",
		nis: "321321312",
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
`;
const ButtonGroup = styled(Button)`
	border-radius: 0;
	border-top-right-radius: 7px;
	border-bottom-right-radius: 7px;
`;
const TableSiswa = () => {
	return (
		<>
			<FlexStyled>
				<Input type="search" name="q" />
				<ButtonGroup onClick={() => console.log("oke", q)}>
					<AiOutlineSearch size={25} />
				</ButtonGroup>
			</FlexStyled>
			<Table columns={columns} dataSource={data} />
		</>
	);
};

export default TableSiswa;
