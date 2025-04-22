import { Col, ListGroup, Row } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { Link, useParams } from "react-router";
import { MdOutlineAssignment } from "react-icons/md";
import QuizSearch from "./QuizSearch";
import { FaCaretDown } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import QuizControlButtons from "./QuizControlButtons";
import * as coursesClient from "../client";
import * as questionsClient from "./Questions/client";
import * as responsesClient from "./Responses/client";
import { setQuizzes } from "./reducer";
import { useEffect } from "react";
import { setQuestions } from "./Questions/reducer";
import { setResponses } from "./Responses/reducer";

export default function Quizzes() {
  const { cid } = useParams();
  const { quizzes } = useSelector((state: any) => state.quizzesReducer);
  const { questions } = useSelector((state: any) => state.questionsReducer);
  const { responses } = useSelector((state: any) => state.responseReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const dispatch = useDispatch();
  const fetchQuizzes = async () => {
    const quizzes = await coursesClient.findQuizzesForCourse(cid as string);
    dispatch(setQuizzes(quizzes));
  };
  const fetchQuestions = async () => {
    const questions = await questionsClient.fetchQuestions();
    dispatch(setQuestions(questions));
  };
  const fetchResponses = async () => {
    const responses = await responsesClient.fetchUserResponses(currentUser._id);
    dispatch(setResponses(responses));
  };
  useEffect(() => {
    fetchQuizzes();
    fetchQuestions();
    fetchResponses();
  }, []);

  return (
    <div id="wd-assignments">
      <QuizSearch /><ListGroup className="rounded-0" id="wd-quizzes">
          <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" /> <FaCaretDown className="fs-5"/> <b>QUIZZES</b>
            </div>
      <ListGroup id="wd-quizzes-list" className="wd-lessons rounded-0">
        {quizzes
        .filter((quiz: { published: boolean; }) => currentUser.role==="FACULTY" || quiz.published)
        .map((quiz: any) => (
          <ListGroup.Item className="wd-lesson p-3 ps-1">
            <Row>
              <Col sm={1}><BsGripVertical className="me-2 fs-3" /> <MdOutlineAssignment className="fs-3"/></Col> 
              <Col sm={10}><Link to={`/Kambaz/Courses/${cid}/Quizzes/${quiz._id}`} style={{ textDecoration: 'none', color: 'black' }}>
                <b>{quiz.title}</b> <p className="h6"> <span className="text-secondary">
                  {new Date().toJSON() > quiz.until ? <b>Closed </b> 
                      : new Date().toJSON() >= quiz.available ? <span><b> Available until </b> {quiz.until && quiz.until.slice(0, 10)} </span> 
                      : <span><b>Not available until</b> {quiz.available && quiz.available.slice(0, 10)} </span> } 
                  | <b>Due</b> {quiz.due && quiz.due.slice(0, 10)} | {quiz.points} pts | {questions.filter((q:any) => q.quiz === quiz._id).length} Questions </span></p> 
              </Link></Col>
              <Col sm={1}><QuizControlButtons quiz={quiz}/></Col>
            </Row>
          </ListGroup.Item>))}
        </ListGroup></ListGroup.Item></ListGroup>
      </div>
  );}