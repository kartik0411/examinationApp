import React, { useEffect, useState } from "react";
import TabbleComponent from "../../components/Table";
import {
  FloatButton,
  Input,
  DatePicker,
  Form,
  Space,
  Select,
  Col,
  Row,
  Button,
  Radio,
} from "antd";
import {
  DownloadOutlined,
  UserAddOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import FloatButtonGroup from "../../components/FloatButtonGroup";
import AddSchoolModal from "../../components/modals/AddSchoolModal";
import { exportToExcel, uploadFromExcel } from "../../components/helper/helper";
import { useDispatch } from "react-redux";
import { getAllSchoolsAction, registerSchool } from "../../actions/userActions";
import { SET_TOAST_STATE } from "../../constants/constants";

const { Option } = Select;

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    width: "2%",
  },
  {
    title: "Name",
    dataIndex: "name",
    width: "4%",
  },
  {
    title: "Gaurdian Name",
    dataIndex: "gaurdianName",
    width: "4%",
  },
  {
    title: "Age",
    dataIndex: "age",
    width: "3%",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Admission No.",
    dataIndex: "admissionNo",
    width: "3%",
  },
  {
    title: "School",
    dataIndex: "school",
    width: "2%",
  },
  {
    title: "School Class",
    dataIndex: "schoolClass",
    width: "2%",
  },
  {
    title: "Section",
    dataIndex: "section",
    width: "2%",
  },
  {
    title: "Exam Key",
    dataIndex: "examKey",
    width: "3%",
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    gaurdianName: "Bhola Pandit",
    age: 23,
    admissionNo: "12323",
    passPercentage: 32,
    school: "New York School",
    schoolClass: "X",
    section: "B",
    examKey: "ahkhdi",
  },
  {
    key: "2",
    name: "John Brown",
    gaurdianName: "Bhola Pandit",
    age: 23,
    admissionNo: "12323",
    passPercentage: 32,
    school: "New York School",
    schoolClass: "X",
    section: "B",
    examKey: "ahkhdi",
  },
  {
    key: "3",
    name: "John Brown",
    gaurdianName: "Bhola Pandit",
    age: 23,
    admissionNo: "12323",
    passPercentage: 32,
    school: "New York School",
    schoolClass: "X",
    section: "B",
    examKey: "ahkhdi",
  },
  {
    key: "4",
    name: "John Brown",
    gaurdianName: "Bhola Pandit",
    age: 23,
    admissionNo: "12323",
    passPercentage: 32,
    school: "New York School",
    schoolClass: "X",
    section: "B",
    examKey: "ahkhdi",
  },
];
const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};
const AdminStudentPage = () => {
  const [StudentOpen, setStudentOpen] = useState(false);
  const [schoolDropdown, setSchoolDropdown] = useState([]);
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const getAllSchoolDropdown = async () => {
    const data = await dispatch(getAllSchoolsAction());
    setSchoolDropdown(data);
  };
  useEffect(() => {
    getAllSchoolDropdown();
  }, []);

  const onFinish = async (values) => {
    try {
      if (values.password === values.confirmPassword) {
        delete values.confirmPassword;
        await dispatch(registerSchool(values));
        form.resetFields();
        setStudentOpen(false);
      } else {
        dispatch({
          type: SET_TOAST_STATE,
          payload: {
            showToast: true,
            message: "Password does not match",
            toastType: "error",
          },
        });
      }
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
    <>
      <TabbleComponent columns={columns} data={data} onChange={onChange} />
      <FloatButtonGroup>
        <FloatButton
          onClick={() => setStudentOpen(true)}
          icon={<UserAddOutlined />}
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
        <Form
          name="trigger"
          layout="vertical"
          autoComplete="off"
          form={form}
          onFinish={onFinish}
          initialValues={{ role: "student" }}
        >
          <Row gutter={16}>
            <Col md={12}>
              <Form.Item label="Name" required name="fullName">
                <Input placeholder="Enter student name" />
              </Form.Item>
            </Col>
            <Col md={12}>
              <Form.Item label="Father Name" required name="fathersName">
                <Input placeholder="Enter father name" />
              </Form.Item>
            </Col>

            <Col md={6}>
              <Form.Item
                label="Admission Number"
                required
                name="admissionNumber"
              >
                <Input type="number" placeholder="Enter admission number" />
              </Form.Item>
            </Col>
            <Col md={6}>
              <Form.Item label="DOB" required name="dob">
                <DatePicker
                  placeholder="Enter admission number"
                  className="w-100"
                />
              </Form.Item>
            </Col>

            <Col md={6}>
              <Form.Item label="Select Class" required name="classId">
                <Select allowClear placeholder="Select Class">
                  <Select.Option>10</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col md={6}>
              <Form.Item label="Select Section" required name="sectionId">
                <Select allowClear placeholder="Select Section">
                  <Select.Option>A</Select.Option>
                  <Select.Option>B</Select.Option>
                  <Select.Option>C</Select.Option>
                  <Select.Option>D</Select.Option>
                  <Select.Option>E</Select.Option>
                </Select>
              </Form.Item>
            </Col>

            <Col md={10}>
              <Form.Item label="Select School" required name="schoolName">
                <Select allowClear placeholder="Select School">
                  {schoolDropdown.map((school) => (
                    <Select.Option key={school._id} value={school.schoolName}>
                      {school.schoolName}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>

            <Col md={6}>
              <Form.Item label="Gender" required name="gender">
                <Radio.Group>
                  <Radio value="male"> Male </Radio>
                  <Radio value="female"> Female </Radio>
                </Radio.Group>
              </Form.Item>
            </Col>

            <Col md={8}>
              <Form.Item label="Contact Number" required name="contactNumber">
                <Space direction="vertical" size="middle">
                  <Space.Compact>
                    <Input
                      style={{ width: "20%" }}
                      defaultValue="+91"
                      disabled
                    />
                    <Input style={{ width: "80%" }} />
                  </Space.Compact>
                </Space>
              </Form.Item>
            </Col>
            <Col md={8}>
              <Form.Item label="Enter Username" required name="userName">
                <Input placeholder="Enter Username" />
              </Form.Item>
            </Col>
            <Col md={8}>
              <Form.Item label="Enter Password" required name="password">
                <Input.Password placeholder="Enter Password" />
              </Form.Item>
            </Col>
            <Col md={8}>
              <Form.Item
                label="Enter Confirm Password"
                required
                name="confirmPassword"
              >
                <Input.Password placeholder="Confirm Your Password" />
              </Form.Item>
            </Col>
            <Col md={8} className="d-none">
              <Form.Item label="Role" name="role">
                <Input disabled type="password" value="student" />
              </Form.Item>
            </Col>
            <Col md={24}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
              <Button className="bg-danger text-white mx-2">Cancel</Button>
            </Col>
          </Row>
        </Form>
      </AddSchoolModal>
    </>
  );
};

export default AdminStudentPage;
