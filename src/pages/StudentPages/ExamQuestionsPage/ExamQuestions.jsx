import {
  Button,
  Col,
  Row,
  Card,
  Radio,
  Divider,
  Watermark,
  Statistic,
  Form,
} from "antd";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import SubmitButton from "../../../components/Buttons/SubmitButton";
import axios from "../../../axiosConfig";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SET_TOAST_STATE } from "../../../constants/constants";

function ExamQuestions() {
  const { Countdown } = Statistic;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [mbtiQuestions, setMbtiQuestions] = useState();
  const [answers, setAnswers] = useState([]);
  const [submits, setSubmits] = useState(false);
  const [answeredques, setAnsweredques] = useState();
  // const countdownValue = Date.now() + 210000;
  const { state } = useLocation();
  const goNext = () => {};
  const goPrevious = () => {};
  // const onChange = (val) => {
  //   if (typeof val === "number" && 4.95 * 1000 < val && val < 5 * 1000) {
  //     console.log("changed!");
  //   }
  // };



  const fetchMBtiQuestions = async () => { 
    const { data } = await axios.get("/questionsForExam/"+state.studentId+"/"+state.examId);
    let answersarray = [];
    for(let i=0;i<data?.questions.length;i++) {
      answersarray.push(data.questions[i].optionSelected);
    }
    setAnsweredques(data?.answeredques);
    setAnswers(answersarray);
    console.log("aagya daTA VBC"+JSON.stringify(data));
    setMbtiQuestions(data);
    if(data?.answeredques===data?.questions.length) {
      setSubmits(true);
    } else {
      setSubmits(false);
    }
  };

  useEffect(() => {
    fetchMBtiQuestions();
  }, []);

  useEffect(() => {
    if(answeredques===mbtiQuestions?.questions.length) {
      setSubmits(true);
    } else {
      setSubmits(false);
    }
  }, [answeredques]);

  const selectedOption = async (e, _id, questionNumber) => {
    console.log("bc option hai"+e.target.value, _id, questionNumber);
    let liveResponse = {studentId: state.studentId, examId: state.examId, questionId: _id, option: e.target.value}
    await axios.post("/liveresponse",liveResponse);
    if(answers[questionNumber]==0) {
      setAnsweredques(answeredques+1);
    }
    let answerss = [];
    Object.assign(answerss,answers);
    answerss[questionNumber] = e.target.value;
    setAnswers(answerss);
    console.log("answers ="+JSON.stringify(answers)+answeredques+submits);
    // setAnswers((prev) => {
    //   const isDifferentQuestion = !prev.some(
    //     (previousAnswer) => previousAnswer.questionNumber === questionNumber
    //   );
    //   if (isDifferentQuestion) {
    //     return [
    //       ...prev,
    //       {
    //         value: e.target.value,
    //         id: _id,
    //         questionNumber,
    //       },
    //     ];
    //   } else {
    //     return prev.map((previousAnswer) =>
    //       previousAnswer.questionNumber === questionNumber
    //         ? { ...previousAnswer, value: e.target.value }
    //         : previousAnswer
    //     );
    //   }
    // });
  };

  const handleSubmit = async () => {
    let submitbody = {studentId: state.studentId,examId: state.examId}
    await axios.post("/submitExam",submitbody);
    let homepagedata = await axios.get("getAllTestsExams/"+state.studentId);
    // answers.sort((a, b) => a.questionNumber - b.questionNumber);
    // if (mbtiQuestions.length !== answers.length) {
    //   console.log("golgappa", mbtiQuestions.length);
    //   dispatch({
    //     type: SET_TOAST_STATE,
    //     payload: {
    //       showToast: true,
    //       message: "Please anwers all the questions",
    //       toastType: "warning",
    //     },
    //   });
    // } else {
    //   dispatch({ type: "ANSWER_SUBMITTED", payload: { answers } });
    //   localStorage.setItem("answers", JSON.stringify(answers));
      navigate("/student/exam/preview",{state: {tests: JSON.parse(JSON.stringify(homepagedata.data))}});
    // }
    // console.log(answers, "....");
  };
  const handleQuestionSelection = (e) => {
    console.log(e);
  };
  return (
    <>
      <Row gutter={16} className="h-100"> 
        <Col md={16} className="p-3">
          <Card className="h-100">
            <h3 className="font-weight-bold text-center">Questions</h3>
            <hr />
            <Watermark content="MYNDKARE EXAMS">
              {mbtiQuestions && mbtiQuestions?.questions.map((question, index) => (
                <Form.Item key={question._id}>
                  <p className="pt-4 px-4">
                    {index + 1}. {question.name}
                  </p>
                  <Radio.Group
                    name="radiogroup"
                    className="p-2 px-5"
                    onChange={(e) => selectedOption(e, question._id, index)}
                    value={answers[index]}
                  >
                    {question.options.map((option, index) => (
                      <Radio
                        value={index+1}
                        name="radio1"
                        key={option}
                        className="my-3"
                      >
                        <div value={index + 1} className="p-2 px-5">
                        {/* <Divider plain> */}

                          {/* {option.map((mbtiText, index) => ( */}
                          <p key={option}>{(index + 1)+". "+option}</p>
                          {/* ))} */}
                          {/* </Divider> */}
                        </div>
                      </Radio>
                    ))}
                  </Radio.Group>
                  <hr />
                </Form.Item>
              ))}
            </Watermark>
            {/* <center className="p-2">
              <Button className="mx-2" onClick={() => goPrevious()}>
                Previous
              </Button>
              <Button className="" onClick={() => goNext()}>
                Next
              </Button>
            </center> */}
          </Card>
        </Col>
        <Col md={8} className="p-3">
          <Card className="h-100">
            <Row gutter={24} className="h-100">
              <Col md={24}> 
                <h3 className="font-weight-bold">ANSWER STATUS</h3>
                <hr />
              </Col>
              {mbtiQuestions && mbtiQuestions?.questions.map((question, index) => (
                <Col md={3} key={question._id} className="p-2">
                  <Button
                    shape="circle"
                    value={index + 1} 
                    onClick={(e) => handleQuestionSelection(e.target.value)}
                  >
                    {index + 1}
                  </Button>
                </Col>
              ))}
            </Row>
            {/* <Countdown
              title="Countdown"
              value={countdownValue}
              onChange={onChange}
            /> */}
            <div className="submit_btn">
              <Button
                type="primary"
                htmlType="submit"
                onClick={() => handleSubmit()}
                disabled={!submits}
              >
                Submit
              </Button>
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default ExamQuestions;
