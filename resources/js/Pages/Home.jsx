import { Link } from "@inertiajs/react";
import React, { useState } from "react";
import { Button, Modal } from "antd";
import Site from "@/components/atoms/Head";

const HomePage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <div>
            <Site title="Home" />
            <div>
                <div>oke</div>
            </div>
            <Link href="profile">Go to Profile</Link>
            <Button type="primary" onClick={showModal}>
                Open Modal
            </Button>
            <Modal
                title="Basic Modal"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </div>
    );
};

export default HomePage;
