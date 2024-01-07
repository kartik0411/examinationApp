import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Avatar, Image, Layout, Menu, Popover, theme } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { FEMALE_AVATAR_ICON, MALE_AVATAR_ICON } from "../constants/constants";
const { Header, Content, Footer } = Layout;
const StudentLayout = ({ children }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.userLogin);

  const handleLogout = () => {
    setOpen(false);
    localStorage.clear();
    navigate("/auth/login");
  };
  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };
  // const originalDate = new Date(userInfo?.userObj?.dob);
  // const dobFormat = new Intl.DateTimeFormat("en-US", {
  //   year: "numeric",
  //   month: "2-digit",
  //   day: "2-digit",
  // }).format(originalDate);
  const Title = userInfo?.userObj?.fullName;
  const content = (
    <div>
      <p className="m-0">
        <b>Roll No: </b>
        {userInfo?.userObj?.admissionNumber}
      </p>
      <p className="m-0">
        <b>DOB: </b>
        23rd Oct 1998
      </p>
      <p className="m-0">
        <b>Father's Name: </b>
        {userInfo?.userObj?.fathersName}
      </p>
      <p className="m-0">
        <b>Contact No: </b>
        {userInfo?.userObj?.contactNumber}
      </p>
      <p className="m-0">
        <b>School Name: </b>
        {userInfo?.userObj?.schoolName}
      </p>
      <center>
        <a className="btn btn-primary my-2" onClick={() => handleLogout()}>
          Logout &nbsp;
          <LogoutOutlined />
        </a>
      </center>
    </div>
  );
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        className="d-flex justify-content-between"
        style={{
          backgroundColor: "#813867",
          backgroundImage: "linear-gradient(315deg, #813867 0%, #ebebeb 74%)",
        }}
      >
        <Image
          className="img_display"
          width={100}
          height={50}
          src="https://www.myndkare.com/wp-content/uploads/2021/05/cropped-myndkare-logo-115x57.png"
        />
        <div>
          <Popover
            content={content}
            title={Title}
            trigger="click"
            open={open}
            onOpenChange={handleOpenChange}
          >
            <Avatar
              src={
                userInfo.role == "student" && userInfo.gender == "female"
                  ? FEMALE_AVATAR_ICON
                  : MALE_AVATAR_ICON
              }
            >
              {/* {userInfo?.userObj?.fullName.split(" ")[0][0]} */}
            </Avatar>
            <span className="text-white mx-2">{Title}</span>
          </Popover>
        </div>
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
    </Layout>
  );
};
export default StudentLayout;
