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
  const [questions, setQuestions] = useState();
  const [answers, setAnswers] = useState([]);
  const [answering, setAnswering] = useState(false);
  const [submits, setSubmits] = useState(false);
  const [answeredques, setAnsweredques] = useState();
  const [timeLeft, setTimeLeft] = useState(-1);
  const { state } = useLocation();
  const [isDBDA, setIsDBDA] = useState(false);
  const [answersStatus, setAnswersStatus] = useState(new Map());
  const goNext = () => {};
  const goPrevious = () => {};



  const fetchMBtiQuestions = async () => { 
    const { data } = await axios.get("/questionsForExam/"+state.studentId+"/"+state.examId);
    let editTSBody = {studentId: state.studentId, examId: state.examId}
    let examStatus = await axios.put("/editStartTimestamp",editTSBody);
    if(data?.dbdaId && data?.dbdaId!="") {
      setIsDBDA(true);
    }
    if(data?.timer) {
      if(examStatus.data.startTime!= null) {
        let startDateTime = Date.parse(examStatus.data.startTime);
        const timeleft = data?.duration - ((Date.now()-startDateTime)/1000);
        if(timeleft>0) {
          setTimeLeft(parseInt(timeleft));
        } else {
          setTimeLeft(0);
        }
      } else {
        setTimeLeft(parseInt(data?.duration));
      }
     } 
    let answersarray = [];
    let ansstatus = new Map();
    for(let i=0;i<data?.questions.length;i++) {
      if(data.questions[i].optionSelected && data.questions[i].optionSelected!=0) {
        ansstatus.set(i+1,true);
      } else {
        ansstatus.set(i+1,false);
      }
      answersarray.push(data.questions[i].optionSelected);
    }
    setAnswersStatus(ansstatus);
    setAnsweredques(data?.answeredques);
    setAnswers(answersarray);
    console.log("aagya daTA VBC"+JSON.stringify(data));
    setQuestions(data);
    if(isDBDA || data?.answeredques===data?.questions.length) {
      setSubmits(true);
    } else {
      setSubmits(false);
    }
  };

  useEffect(()=> {

    if(timeLeft==0) {
      setAnswering(false);
    }
    else if(timeLeft>0) {
      setTimeout(function () {
       setTimeLeft(timeLeft-1);
      }, 1000);
      setAnswering(true);
    }
    else {
      setAnswering(true);
    }
  }, [timeLeft])

  useEffect(() => {
    fetchMBtiQuestions();
  }, []);

  useEffect(() => { 
    if(isDBDA || answeredques===questions?.questions.length) { 
      setSubmits(true);
    } else {
      setSubmits(false);
    }
  }, [answeredques]);

  const selectedOption = async (e, _id, questionNumber) => {
    let liveResponse = {studentId: state.studentId, examId: state.examId, questionId: _id, option: e.target.value}
    await axios.post("/liveresponse",liveResponse);
    if(answers[questionNumber]==0) {  
      setAnsweredques(answeredques+1);
    }
    let answerss = [];
    Object.assign(answerss,answers);
    answerss[questionNumber] = e.target.value;
    setAnswers(answerss);
    let ansstatus = answersStatus;
    ansstatus.set(questionNumber+1,true);
    setAnswersStatus(ansstatus);
  };

  const handleSubmit = async () => {
    let submitbody = {studentId: state.studentId,examId: state.examId}
    await axios.post("/submitExam",submitbody);
    // let homepagedata = await axios.get("getAllTestsExams/"+state.studentId);
    let testDetails = await axios.get("/students/"+state.studentId);
    // answers.sort((a, b) => a.questionNumber - b.questionNumber);
    // if (questions.length !== answers.length) {
    //   console.log("golgappa", questions.length);
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
      // navigate("/student/exam/preview",{state: {tests: JSON.parse(JSON.stringify(homepagedata.data))}});
      navigate("/student/exam/preview",{state: testDetails?.data});

      

  };
  const handleQuestionSelection = (e) => {
  };
  return (
    <>
      <Row gutter={16} className="h-100"> 
        <Col md={16} className="p-3">
          <Card className="h-100">
            <h3 className="font-weight-bold text-center">Questions</h3>
            <hr />
            <Watermark content="MYNDKARE EXAMS">
              {questions && questions?.questions.map((question, index) => (
                <Form.Item key={question._id}>
                  {question.images && question.images.length > 0 ?
                    <div>
                      <p className="pt-4 px-4">
                        {index + 1}.
                      </p>
                      <p className="pt-4 px-4">
                        {question.images.map((image, i) =>
                          <img
                            src={
                              image
                            }
                            alt=""
                          />
                        )}
                      </p>
                      <p className="pt-4 px-4">
                        {question.name}
                      </p>
                    </div>
                    :
                    <p className="pt-4 px-4">
                      {index + 1}. {question.name}
                    </p>
                  }
                  
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
                        disabled = {!answering}
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
                <h3 className="font-weight-bold">{questions?.name}</h3>
                <hr />
              </Col>
              <Col md={24}> 
              {timeLeft>=0 && (
                <>
                  <h4 className="font-weight-bold">
                    Time Left : <span style={{ color: 'red' }}>{timeLeft}</span> Seconds
                  </h4>
                  <hr />
                </>
              )}
              </Col>
              <Col md={24}> 
                <h5 className="font-weight-bold">Answer Status</h5>
              </Col>
              {questions && questions?.questions.map((question, index) => (
                <Col md={3} key={question._id} className="p-2">
                  <Button
                    shape="circle"
                    value={index + 1} 
                    onClick={(e) => handleQuestionSelection(e.target.value)}
                    style={answersStatus.has(index + 1) && answersStatus.get(index + 1)==true && { backgroundColor: 'green', color: 'white' }} // Customize as needed
                    // disabled
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
