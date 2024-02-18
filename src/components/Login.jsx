import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Avatar, Segmented, Form, Row, Col, Input, Button } from "antd";
import { loginUser } from "../actions/userActions";
import { gettests } from "../actions/userActions";
import { SET_TOAST_STATE } from "../constants/constants";
import { showoneStudent } from "../redux/studentSlice";
import { showTest } from "../redux/testSlice";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleUserSelection = (e) => {
    console.log(e);
  };
  // let { student} = useSelector((state) => {   
  //   // console.log("state.studentDetail = "+JSON.stringify(state.studentDetail)); 
  //   if(state.studentDetail?.students?._id) {
  //     dispatch({
  //       type: SET_TOAST_STATE,
  //       payload: {
  //         showToast: true,
  //         message: "Welcome "+state.studentDetail?.students?.name,
  //         toastType: "success",
  //       },
  //     });

  //   }
  //   return state.studentDetail; 
  // });
  let { studenttests} = useSelector((state) => { 
    if(state.testDetail?.tests?.name) {
      dispatch({
        type: SET_TOAST_STATE,
        payload: {
          showToast: true,
          message: "Welcome "+state.testDetail?.tests?.name,
          toastType: "success",
        },
      });
      navigate("/student/exam/preview",{state: state.testDetail});
    }
    return state.testDetail; 
  });
  const onFinish = async (values) => {
    try {
      console.log("value hai "+JSON.stringify(values))
      let requestid = values.password;
      // const { data } = dispatch(loginUser(requestid));
      // console.log("hhttddddddddddd")
      // console.log("hhttddddd"+JSON.stringify(data))
      // localStorage.setItem("studentid", JSON.stringify(data._id));
      // const { testsdata } = await dispatch(gettests(data._id));
      // console.log("testsdata"+JSON.stringify(testsdata));
      // data.tests = testsdata;
      // localStorage.setItem("tests", JSON.stringify(data?.tests));
      // console.log(data);
      if(requestid) {
        console.log("jjjjjjj")
        dispatch(showTest(requestid));
      }
      // if (data?.userObj?.role === "subAdmin") { // navigate to SubAdmin pages
      //   navigate("/student/exam/preview");
      // }
    } catch (error) {
      dispatch({
        type: SET_TOAST_STATE,
        payload: {
          showToast: true,
          message: error,
          toastType: "error",
        },
      });
    }
  };
  return (
    <section className="h-100 d-flex align-items-center justify-content-center">
      <div className="container-fluid h-100">
        <Row gutter={16} className="h-100">
          <Col
            md={12}
            className="d-flex align-items-center justify-content-center"
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
              alt="Sample image"
            />
          </Col>
          <Col md={12} className="d-flex justify-content-center flex-column">
            <Row gutter={16}>
              <Col md={24} className="d-flex align-items-center flex-column">
                <h1 className="mb-0">
                  <b>MYNDKARE</b>
                </h1>
                <p>
                  <u>CAREER ASSESSMENT PLATFORM</u>
                </p>
              </Col>
            </Row>
            <Form
              name="trigger"
              onFinish={onFinish}
              layout="vertical"
              autoComplete="off"
              initialValues={{ role: "student" }}
            >
              <Row>
                <Col md={24} className="d-flex align-items-center flex-column">
                  <Form.Item name="role">
                    <Segmented
                      onChange={handleUserSelection}
                      defaultValue="student"
                      name="role"
                      options={[
                      
                        {
                          label: (
                            <div
                              style={{
                                padding: 4,
                              }}
                            >
                              <Avatar src="	https://img.icons8.com/?size=512&id=23319&format=png" />
                              <div>Student</div>
                            </div>
                          ),
                          value: "student",
                        },
                      ]}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row className="d-flex justify-content-center">
                <Col md={15} className="form-outline">
                  <Form.Item
                    label="Enter Exam Key"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your exam key!",
                      },
                    ]}
                    name="password"
                  >
                    <Input.Password placeholder="Enter ExamKey" />
                  </Form.Item>
                </Col>
              </Row>
              <Row className="d-flex justify-content-center">
                <Col md={15}>
                  <Button
                    size="middle"
                    type="primary"
                    htmlType="submit"
                    loading={false}
                  >
                    Login
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default Login;
