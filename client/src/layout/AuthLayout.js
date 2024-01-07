import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
const { Header, Content, Footer } = Layout;
const AuthLayout = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
          // height: "10vh",
        }}
      ></Header>
      <Content
        className="site-layout"
        style={{
          backgroundColor: "#ffffff",
          height: "80vh",
        }}
      >
        {children}
      </Content>
      <Footer
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
      </Footer>
    </Layout>
  );
};
export default AuthLayout;
