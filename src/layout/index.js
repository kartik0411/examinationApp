import React from "react";
import AdminLayout from "./AdminLayout";
import AuthLayout from "./AuthLayout";
import StudentLayout from "./StudentLayout";
import MainLayout from "./MainLayout";

const Layouts = {
  admin: AdminLayout,
  auth: AuthLayout,
  student: StudentLayout,
  main: MainLayout,
};

const getLayout = () => {
  if (window.location.pathname.startsWith("/admin")) {
    return "admin";
  } else if (window.location.pathname.startsWith("/auth")) {
    return "auth";
  } else if (window.location.pathname.startsWith("/student")) {
    return "student";
  } else {
    console.log("reached");
    return "main";
  }
};

const Container = Layouts[getLayout()];
const Layout = ({ children }) => {
  console.log(children);
  return <Container>{children}</Container>;
};

export default Layout;
