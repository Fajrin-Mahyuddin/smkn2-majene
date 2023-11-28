import { Flex, Image } from "antd";
import React from "react";
import logo from '@/assets/images/logo.png';
import { Link } from "@inertiajs/react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href="/" name="Halaman utama">
        <img src="./assets/logo.png" alt="logo" width="60px" />
      </Link>
      <Flex className="menu-wrapper" gap="middle">
        <Link href="/" className="link-item active">Home</Link>
        <Link href="/visi-misi" className="link-item">Visi Misi</Link>
        <Link href="/pengumuman" className="link-item">Pengumuman</Link>
      </Flex>
    </nav>
  );
};

export default Navbar;
