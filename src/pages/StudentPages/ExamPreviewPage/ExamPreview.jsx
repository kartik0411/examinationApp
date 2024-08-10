import React from "react";
import { Button, Col, Collapse, Row } from "antd";
import { useNavigate, usenavigate } from "react-router-dom";
import { DownloadOutlined, FundViewOutlined } from "@ant-design/icons";
import { useLocation } from "react-router-dom";
import { showQuestions } from "../../../redux/questionSlice";
import { SET_TOAST_STATE } from "../../../constants/constants";
import { useDispatch, useSelector } from "react-redux";

const ExamPreview = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { state } = useLocation();
  const downloadReport = () => {
    // console.log(navigate);
  };
  console.log("finally yyyyy ="+JSON.stringify(state));
  // const tests = JSON.parse(localStorage.getItem("tests"));
  const viewReport = () => { 
    navigate("/exam/report");
  };


  // let { questions} = useSelector((state) => { 
  //   if(state.questionDetail) {
  //     console.log("hurrraaayyy"+JSON.stringify(state.questionDetail));
  //     // dispatch({
  //     //   type: SET_TOAST_STATE,
  //     //   payload: {
  //     //     showToast: true,
  //     //     message: "Welcome "+state,
  //     //     toastType: "success",
  //     //   },
  //     // });
  //     // navigate("/student/exam/preview",{state: state.testDetail});
  //   }

  //   if(state.questionDetail?.questions) {
  //     navigate("/student/exam/"+state.questionDetail?.questions._id,{state: state.questionDetail?.questions});
  //   }
  //   return state.questionDetail; 
  // });


  const onOpenQuestions = async (examId, studentId) => {
    console.log("yaha to aara bc"+examId+"   "+studentId);
    try {
      // const { data } = dispatch(loginUser(requestid));
      // console.log("hhttddddddddddd")
      // console.log("hhttddddd"+JSON.stringify(data))  
      // localStorage.setItem("studentid", JSON.stringify(data._id));
      // const { testsdata } = await dispatch(gettests(data._id));
      // console.log("testsdata"+JSON.stringify(testsdata));
      // data.tests = testsdata;
      // localStorage.setItem("tests", JSON.stringify(data?.tests));
      // console.log(data);
      navigate("/student/exam/"+examId,{state: {studentId: studentId,examId: examId }});

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
let items = [];
  for(let i=0;i<state.tests.response.length;i++) {
    let rows = [];
    state.tests.response[i].exams.forEach(element => {
      let timerText = ""; 
      // let buttonDisabled = buttonFlag;
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
            onClick={() => onOpenQuestions(element._id,state.tests._id)} 
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
      label: state.tests.response[i].testName,
      children: rows,
    };
    items.push(obj);
  }
  // const items = [
  //   {
  //     key: "1",
  //     label: state.tests.response[0].testName,
  //     children: (
  //       <><Row>
  //         <Col md={12}>
  //           <h5>MBTI</h5>
  //           <h6>Qusetions : 6</h6>
  //           <h6>Time : 260 Seconds</h6>
  //         </Col>
  //         <Col md={12}>
  //           <Button
  //             className="bg-success text-light btn-float"
  //             size="large"
  //             onClick={() => navigate("/student/exam/23456")}
  //           >
  //             Start Exam
  //           </Button>
  //         </Col>
  //       </Row><Row>
  //           <Col md={12}>
  //             <h5>MBTI</h5>
  //             <h6>Qusetions : 6</h6>
  //             <h6>Time : 260 Seconds</h6>
  //           </Col>
  //           <Col md={12}>
  //             <Button
  //               className="bg-success text-light btn-float"
  //               size="large"
  //               onClick={() => navigate("/student/exam/23456")}
  //             >
  //               Start Exam
  //             </Button>
  //           </Col>
  //         </Row></>
  //     ),
  //   },
  //   {
  //     key: "2",
  //     label: "Aptitude",
  //     children: (
  //       <Row>
  //         <Col md={12}>
  //           <h5>Aptitude</h5>
  //           <h6>Qusetions : 20</h6>
  //           <h6>Time : 260 Seconds</h6>
  //         </Col>
  //         <Col md={12}>
  //           <Button className="text-dark btn-float" size="large" disabled>
  //             Start Exam
  //           </Button>
  //         </Col>
  //       </Row>
  //     ),
  //   },
  // ];
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
            disabled = {!state.tests.finalReportFlag}
          >
            View Report
          </Button>
        </Row>
      </div>
    </>
  );
};
export default ExamPreview;
