import React, { useState } from "react";
import TabbleComponent from "../../components/Table";
import { Col, FloatButton, Form, Input, Row, Select, Tag } from "antd";
import {
  BookOutlined,
  DownloadOutlined,
  HomeOutlined,
  PlusOutlined,
  TabletFilled,
  UploadOutlined,
} from "@ant-design/icons";
import FloatButtonGroup from "../../components/FloatButtonGroup";
import AddSchoolModal from "../../components/modals/AddSchoolModal";
import { exportToExcel, uploadFromExcel } from "../../components/helper/helper";
const columns = [
  {
    title: "Class",
    dataIndex: "class",
    width: "20%",
  },
  {
    title: "School Name",
    dataIndex: "schoolName",
    width: "20%",
  },
  {
    title: "Sections",
    // key: "section",
    dataIndex: "sections",
    width: "50%",
    render: (_, { sections }) => (
      <>
        {sections.map((section) => {
          return (
            <Tag color={"geekblue"} key={section}>
              {section.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
];
const data = [
  {
    key: "1",
    class: "10",
    schoolName: "D.P.S",
    sections: ["A", "B", "C", "D", "E"],
  },
  {
    key: "2",
    class: "8",
    schoolName: "D.A.V",
    sections: ["A", "B", "C", "D", "E", "F"],
  },
];
const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};
const AdminClassPage = () => {
  const [classOpen, setClassOpen] = useState(false);
  const [sectionOpen, setSectionOpen] = useState(false);
  return (
    <>
      <TabbleComponent columns={columns} data={data} onChange={onChange} />
      <FloatButtonGroup>
        <FloatButton
          onClick={() => setClassOpen(true)}
          icon={<HomeOutlined />}
          type="primary"
          shape="circle"
        />
        <FloatButton
          onClick={() => setSectionOpen(true)}
          icon={<TabletFilled />}
          type="primary"
          shape="circle"
        />
      </FloatButtonGroup>
      <AddSchoolModal
        width={600}
        open={classOpen}
        setOpen={() => setClassOpen(false)}
      >
        <Form name="trigger" layout="vertical" autoComplete="off">
          <Row gutter={16}>
            <Col md={12}>
              <Form.Item label="Enter Class" required name="class">
                <Input placeholder="Enter Class" />
              </Form.Item>
            </Col>
            <Col md={12}>
              <Form.Item label="School Name" required name="schoolName">
                <Select allowClear placeholder="Select School Name">
                  <Select.Option>D.P.S</Select.Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </AddSchoolModal>

      <AddSchoolModal
        width={600}
        open={sectionOpen}
        setOpen={() => setSectionOpen(false)}
      >
        <Form name="trigger" layout="vertical" autoComplete="off">
          <Row gutter={16}>
            <Col md={12}>
              <Form.Item label="Enter Section" required name="class">
                <Input placeholder="Enter Class" />
              </Form.Item>
            </Col>
            <Col md={12}>
              <Form.Item label="School Name" required name="schoolName">
                <Select allowClear placeholder="Select School Name">
                  <Select.Option>D.P.S</Select.Option>
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
          </Row>
        </Form>
      </AddSchoolModal>
    </>
  );
};

export default AdminClassPage;
