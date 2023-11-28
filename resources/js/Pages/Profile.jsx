import { router } from "@inertiajs/react";
import { Button } from "antd";
import Layout from "@/components/templates/Layout";
import React from "react";

const ProfilePage = ({ name }) => {
	const handleClick = (e) => {
		e.preventDefault();
		router.visit("/user", {
			method: "post",
			data: {
				id: 1,
				name: "fajrin",
			},
			onStart: () => {},
		});
	};
	return (
		<Layout>
			<div>Profile {name}</div>
			<Button type="default" onClick={handleClick}>
				Send
			</Button>
		</Layout>
	);
};

export default ProfilePage;
