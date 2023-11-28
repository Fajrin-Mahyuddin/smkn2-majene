import React from "react";
import Navbar from "@/components/organisms/Navbar";
import { Layout } from "antd";
import Footer from "@/components/organisms/Footer";

const MainLayout = ({ children }) => {
  return (
    <Layout>
      <Navbar />
      {children}
      <Footer />
    </Layout>
  );
};

export default MainLayout;
