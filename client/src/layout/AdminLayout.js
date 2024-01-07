import React, { Children, useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  TeamOutlined,
  HomeOutlined,
  BookOutlined,
  QuestionCircleFilled,
  ProfileOutlined,
  LogoutOutlined,
  SettingOutlined,
  TabletFilled,
} from "@ant-design/icons";
import { NavLink, useNavigate } from "react-router-dom";
import { Layout, Menu, Button, theme, Image } from "antd";

const { Header, Sider, Content } = Layout;

const AdminLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const navigate = useNavigate();
  const logout = () => {
    console.log("clicked");
    localStorage.removeItem("token");
    navigate("/auth/login");
  };
  return (
    <Layout>
      <Sider
        style={{ height: "100vh" }}
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[window.location.pathname.split("/")[2]]}
          items={[
            {
              key: "school",
              icon: (
                <NavLink to="/admin/school">
                  <HomeOutlined />
                </NavLink>
              ),
              label: "School",
            },
            {
              key: "student",
              icon: (
                <NavLink to="/admin/student">
                  <TeamOutlined />
                </NavLink>
              ),
              label: "Student",
            },
            {
              key: "exam",
              icon: (
                <NavLink to="/admin/exam">
                  <BookOutlined />
                </NavLink>
              ),
              label: "Exams",
            },
            {
              key: "question",
              icon: (
                <NavLink to="/admin/question">
                  <QuestionCircleFilled />
                </NavLink>
              ),
              label: "Questions",
            },
            {
              key: "class",
              icon: (
                <NavLink to="/admin/class">
                  <TabletFilled />
                </NavLink>
              ),
              label: "Classes & Sections",
            },
            {
              key: "settings",
              icon: <SettingOutlined />,
              label: "Settings",
              children: [
                {
                  key: "logout",
                  icon: <LogoutOutlined />,
                  label: "Logout",
                  onClick: () => {
                    logout();
                  },
                },
                {
                  key: "profile",
                  icon: <UserOutlined />,
                  label: "profile",
                },
              ],
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          MyndKare Career Assessment Platform
          <div className="admin_img">
            <Image
              width={100}
              height={50}
              src="https://www.myndkare.com/wp-content/uploads/2021/05/cropped-myndkare-logo-115x57.png"
            />
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
export default AdminLayout;
