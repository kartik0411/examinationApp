import React, { useState } from "react";
import TabbleComponent from "../../components/Table";
import {
  Col,
  DatePicker,
  FloatButton,
  Form,
  Input,
  Row,
  Select,
  TimePicker,
} from "antd";
import {
  BookOutlined,
  DownloadOutlined,
  PlusOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import FloatButtonGroup from "../../components/FloatButtonGroup";
import AddSchoolModal from "../../components/modals/AddSchoolModal";
import { exportToExcel, uploadFromExcel } from "../../components/helper/helper";
const columns = [
  {
    title: "Exam key",
    dataIndex: "examKey",
    width: "10%",
  },
  {
    title: "Module name",
    dataIndex: "moduleName",
    sorter: (a, b) => a.age - b.age,
    width: "10%",
  },
  {
    title: "Time Limit",
    dataIndex: "timeLimit",
    width: "10%",
  },
  {
    title: "Question",
    dataIndex: "questionsCount",
    width: "10%",
  },
];
const data = [
  {
    key: "1",
    examKey: "14012",
    moduleName: "Hindi",
    timeLimit: 60,
    questionsCount: 20,
  },
  {
    key: "2",
    examKey: "14012",
    moduleName: "Hindi",
    timeLimit: 60,
    questionsCount: 20,
  },
  {
    key: "3",
    examKey: "14012",
    moduleName: "Hindi",
    timeLimit: 60,
    questionsCount: 20,
  },
  {
    key: "4",
    examKey: "14012",
    moduleName: "Hindi",
    timeLimit: 60,
    questionsCount: 20,
  },
];
const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};
const AdminExamPage = () => {
  const [examOpen, setExamOpen] = useState(false);
  return (
    <>
      <TabbleComponent columns={columns} data={data} onChange={onChange} />
      <FloatButtonGroup>
        <FloatButton
          onClick={() => setExamOpen(true)}
          icon={<BookOutlined />}
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
      <AddSchoolModal
        width={1000}
        open={examOpen}
        setOpen={() => setExamOpen(false)}
      >
        <Form name="trigger" layout="vertical" autoComplete="off">
          <Row gutter={16}>
            <Col md={12}>
              <Form.Item label="School Name" required name="schoolName">
                <Select allowClear placeholder="Select School Name">
                  <Select.Option>D.P.S</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col md={12}>
              <Form.Item label="Select Subject" required name="module">
                <Select allowClear placeholder="Select Subject">
                  <Select.Option>Science</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col md={12}>
              <Form.Item label="Select Class" required name="class">
                <Select allowClear placeholder="Select Class">
                  <Select.Option>10</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col md={12}>
              <Form.Item label="Select Section" required name="section">
                <Select allowClear placeholder="Select Section">
                  <Select.Option>A</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col md={12}>
              <Form.Item label="Enter Exam Duration" required name="duration">
                <TimePicker style={{ width: "100%" }} showNow={false} />
              </Form.Item>
            </Col>
            <Col md={24}>
              <Form.Item label="Exam Description" required name="description">
                <Input.TextArea cols={10} rows={5} />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </AddSchoolModal>
    </>
  );
};

export default AdminExamPage;
