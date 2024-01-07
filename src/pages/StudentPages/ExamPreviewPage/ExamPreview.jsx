import React from "react";
import { Button, Col, Collapse, Row } from "antd";
import { useNavigate, usenavigate } from "react-router-dom";
import { DownloadOutlined, FundViewOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";

const ExamPreview = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const downloadReport = () => {
    // console.log(navigate);
  };
  const viewReport = () => {
    navigate("/exam/report");
  };
  const items = [
    {
      key: "1",
      label: "Personality",
      children: (
        <Row>
          <Col md={12}>
            <h5>MBTI</h5>
            <h6>Qusetions : 6</h6>
            <h6>Time : 260 Seconds</h6>
          </Col>
          <Col md={12}>
            <Button
              className="bg-success text-light btn-float"
              size="large"
              onClick={() => navigate("/student/exam/23456")}
            >
              Start Exam
            </Button>
          </Col>
        </Row>
      ),
    },
    {
      key: "2",
      label: "Aptitude",
      children: (
        <Row>
          <Col md={12}>
            <h5>Aptitude</h5>
            <h6>Qusetions : 20</h6>
            <h6>Time : 260 Seconds</h6>
          </Col>
          <Col md={12}>
            <Button className="text-dark btn-float" size="large" disabled>
              Start Exam
            </Button>
          </Col>
        </Row>
      ),
    },
  ];
  return (
    <>
      <div className="container">
        <Row gutter={16} className="p-5">
          {items.map((collapse) => (
            <Col md={24} className="m-4">
              <Collapse
                size="large"
                items={[collapse]}
                defaultActiveKey={[collapse.key]}
              />
            </Col>
          ))}
          {/* <Button
            className="mx-5"
            type="primary"
            icon={<DownloadOutlined />}
            size="large"
            onClick={() => downloadReport()}
          >
            Report
          </Button> */}
          <Button
            className="mx-5"
            type="primary"
            icon={<FundViewOutlined />}
            size="large"
            onClick={() => viewReport()}
          >
            View Report
          </Button>
        </Row>
      </div>
    </>
  );
};
export default ExamPreview;
