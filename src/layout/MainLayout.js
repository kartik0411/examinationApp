import React from "react";
import { Avatar, Image, Layout, Menu, Popover, theme } from "antd";
const { Header, Content, Footer } = Layout;

function MainLayout({ children }) {
  return <>
      <Layout>
      <Header
        className="d-flex justify-content-between"
        style={{
          backgroundColor: "#813867",
          backgroundImage: "linear-gradient(315deg, #813867 0%, #ebebeb 74%)",
        }}
      >
      </Header>
      <Content
        className="site-layout"
        style={{
          backgroundColor: "#ffffff",
          height: "80vh",
        }}
      >
        {children}
      </Content>
      {/* <Footer
        style={{
          textAlign: "center",
          position: "fixed",
          left: 0,
          bottom: 0,
          width: "100%",
          color: "black",
        }}
      >
        MyndKare ©2023 Created by MyndKare UED
      </Footer> */}
    </Layout></>;
}

export default MainLayout;
