import React, { useEffect, useState } from "react";
import { Button, Col, Collapse, Row } from "antd";
import { useNavigate, usenavigate } from "react-router-dom";
import { DownloadOutlined, FundViewOutlined } from "@ant-design/icons";
import { useLocation } from "react-router-dom";
import { showQuestions } from "../../../redux/questionSlice";
import { SET_TOAST_STATE } from "../../../constants/constants";
import { useDispatch, useSelector } from "react-redux";
import axios from "../../../axiosConfig";
import Report from "./../Report";

const ExamPreview = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { state } = useLocation();
  const [ state1, setState1 ] = useState();
  const [reportOpen, setReportOpen] = useState(false);
  const [reportValue, setReportValue] = useState({});
  const downloadReport = () => {
    // console.log(navigate);
  };
  const viewReport = () => {
    let report = state;
    setReportValue(report);
    setReportOpen(true);
  };


  const fetchStudentExamData = async () => { 
    const { data } = await axios.get("/getAllTestsExams/"+state._id);
    setState1(data);
  }

  window.onpopstate = () => {
    navigate("/");
    window.location.reload();
  }

  useEffect(() => {
    fetchStudentExamData();
  }, []);

  const onOpenQuestions = async (examId, studentId) => {
    try {
      navigate("/student/exam/"+examId,{state: {studentId: studentId,examId: examId }});
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
  const handleReportClose = (value) => {
    setReportOpen(false);

  };
let items = [];
  for(let i=0;i<state1?.response.length;i++) {
    let rows = [];
    state1?.response[i].exams.forEach(element => {
      let timerText = ""; 
      if(element.timer===true) {
        timerText = "Time : "+element.duration+" Seconds";
      }
      let row = new Object();
    if(element.buttonFlag===true) { 
      row = (<Row>
        <Col md={12}>
          <h5>{element.name}</h5>
          <h6>Qusetions : {element.countQuestions}</h6>
          <h6>{timerText}</h6>
        </Col> 
        <Col md={12}>
          <Button
            className="bg-success text-light btn-float"
            size="large"
            onClick={() => onOpenQuestions(element._id,state1?._id)}
          >
            {element.buttonText}
          </Button>
        </Col>
      </Row>);
    } else {
      row= (<Row>
        <Col md={12}>
          <h5>{element.name}</h5>
          <h6>Qusetions : {element.countQuestions}</h6>
          <h6>{timerText}</h6>
        </Col> 
        <Col md={12}>
          <Button
            className="text-dark btn-float"
            size="large"
            onClick={() => navigate("/student/exam/23456")}
            disabled
          >
            {element.buttonText}
          </Button>
        </Col> 
      </Row>);
    }
    rows.push(row);
    });

    let obj =  {
      key: "1",
      label: state1?.response[i].testName,
      children: rows,
    };
    items.push(obj);
  }
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
          <Button
            className="mx-5"
            type="primary"
            icon={<FundViewOutlined />}
            size="large"
            onClick={() => viewReport()}
            disabled = {!state1?.resultPublish}
          >
            View Report
          </Button>
        </Row>
      </div>
      <Report
                    selectedValue={reportValue}
                    open={reportOpen}
                    onClose={handleReportClose} />
    </>
  );
};
export default ExamPreview;
