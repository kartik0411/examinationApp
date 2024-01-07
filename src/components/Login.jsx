import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Avatar, Segmented, Form, Row, Col, Input, Button } from "antd";
import { loginUser } from "../actions/userActions";
import { SET_TOAST_STATE } from "../constants/constants";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUserSelection = (e) => {
    console.log(e);
  };
  const onFinish = async (values) => {
    try {
      const { data } = await dispatch(loginUser(values));

      console.log(data);
      if (data?.userObj?.role === "student") {
        navigate("/student/exam/preview");
      }
      if (data?.userObj?.role === "admin") {
        navigate("/admin/school");
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
                              <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
                              <div>Admin</div>
                            </div>
                          ),
                          value: "admin",
                        },
                        {
                          label: (
                            <div
                              style={{
                                padding: 4,
                              }}
                            >
                              <Avatar src="https://img.icons8.com/?size=512&id=17605&format=png"></Avatar>
                              <div>Institution</div>
                            </div>
                          ),
                          value: "subAdmin",
                        },
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
                <Col md={15} className="form-outline mt-3 ">
                  <Form.Item
                    label="Usernane"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your username!",
                      },
                    ]}
                    name="userName"
                  >
                    <Input type="text" placeholder="Eneter Username" />
                  </Form.Item>
                </Col>
              </Row>
              <Row className="d-flex justify-content-center">
                <Col md={15} className="form-outline">
                  <Form.Item
                    label="Enter Password"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your password!",
                      },
                    ]}
                    name="password"
                  >
                    <Input.Password placeholder="Enter Password" />
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
