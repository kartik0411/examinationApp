import React from "react";
import AdminLayout from "./AdminLayout";
import AuthLayout from "./AuthLayout";
import StudentLayout from "./StudentLayout";
import MainLayout from "./MainLayout";
import { useLocation } from 'react-router-dom';  // Import useLocation from react-router-dom


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
  const location = useLocation();
  console.log(children);
  console.log("path hai:"+location.pathname)
  if(location.pathname.includes("/student/exam/preview")) {
    return <Container>{children}</Container>;
  }
  else if (location.pathname.includes("/student/exam/")) {
    return children;
  } else {
     return <Container>{children}</Container>;
  }
};



export default Layout;
