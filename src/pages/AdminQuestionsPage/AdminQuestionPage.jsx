import React, { useState } from "react";
import TabbleComponent from "../../components/Table";
import { Col, FloatButton, Form, Input, Row, Select } from "antd";
import {
  DownloadOutlined,
  PlusOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import FloatButtonGroup from "../../components/FloatButtonGroup";
import AddSchoolModal from "../../components/modals/AddSchoolModal";
import { exportToExcel, uploadFromExcel } from "../../components/helper/helper";
const columns = [
  {
    title: "Module name",
    dataIndex: "moduleName",
    sorter: (a, b) => a.age - b.age,
    width: "10%",
  },
  {
    title: "Question",
    dataIndex: "question",
    width: "30%",
  },
  {
    title: "Answer",
    dataIndex: "correctAnswer",
    width: "10%",
  },
];
const data = [
  {
    key: "1",
    moduleName: "Hindi",
    question: "What is your name",
    correctAnswer: "shubham",
  },
  {
    key: "2",
    moduleName: "Hindi",
    question: "What is your name",
    correctAnswer: "shubham",
  },
  {
    key: "3",
    moduleName: "Hindi",
    question: "What is your name",
    correctAnswer: "shubham",
  },
  {
    key: "4",
    moduleName: "Hindi",
    question: "What is your name",
    correctAnswer: "shubham",
  },
];
const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};
const AdminQuestionpage = () => {
  const [StudentOpen, setStudentOpen] = useState(false);
  return (
    <>
      <TabbleComponent columns={columns} data={data} onChange={onChange} />
      <FloatButtonGroup>
        <FloatButton
          onClick={() => setStudentOpen(true)}
          icon={<PlusOutlined />}
          type="primary"
          shape="circle"
        />
        <FloatButton
          icon={<UploadOutlined />}
          type="primary"
          shape="circle"
          onClick={() => uploadFromExcel(data)}
        />
        <FloatButton
          icon={<DownloadOutlined />}
          type="primary"
          shape="circle"
          onClick={() => exportToExcel(data)}
        />
      </FloatButtonGroup>
      <AddSchoolModal open={StudentOpen} setOpen={() => setStudentOpen(false)}>
        <Form name="trigger" layout="vertical" autoComplete="off">
          <Row gutter={16}>
            <Col md={8}>
              <Form.Item label="School Name" required name="schoolName">
                <Select allowClear placeholder="Select School">
                  <Select.Option>DPS</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col md={8}>
              <Form.Item label="Select Subject" required name="module">
                <Select allowClear placeholder="Select Subject">
                  <Select.Option>Science</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col md={4}>
              <Form.Item label="Select Class" required name="class">
                <Select allowClear placeholder="Select Class">
                  <Select.Option>10</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col md={4}>
              <Form.Item label="Select Section" required name="section">
                <Select allowClear placeholder="Select Section">
                  <Select.Option>A</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col md={24}>
              <Form.Item label="Enter Question" required name="question">
                <Input placeholder="Enter Question" />
              </Form.Item>
            </Col>
            <Col md={20}>
              <Form.Item hasFeedback label="Option 1" name="option1">
                <Input placeholder="Enter Option" />
              </Form.Item>
            </Col>
            <Col md={20}>
              <Form.Item hasFeedback label="Option 2" name="option2">
                <Input placeholder="Enter Option" />
              </Form.Item>
            </Col>
            <Col md={20}>
              <Form.Item hasFeedback label="Option 3" name="option3">
                <Input placeholder="Enter Option" />
              </Form.Item>
            </Col>
            <Col md={20}>
              <Form.Item hasFeedback label="Option 4" name="option4">
                <Input placeholder="Enter Option" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </AddSchoolModal>
    </>
  );
};

export default AdminQuestionpage;
