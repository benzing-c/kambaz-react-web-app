import { Link, Navigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import * as coursesClient from "../client";
import { setQuizzes } from "./reducer";
import { useEffect, useState } from "react";
import * as quizzesClient from "./client";
import * as responsesClient from "./Responses/client";
import { setQuestions } from "./Questions/reducer";
import MultipleChoice from "./Questions/MultipleChoice";
import TrueFalse from "./Questions/TrueFalse";
import FillInTheBlank from "./Questions/FillInTheBlank";
import { Button } from "react-bootstrap";
import { addResponse, removeUserResponses, setResponses } from "./Responses/reducer";

export default function QuestionsView() {
  const { cid, qid } = useParams();
  const { quizzes } = useSelector((state: any) => state.quizzesReducer);
  const { questions } = useSelector((state: any) => state.questionsReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { responses } = useSelector((state: any) => state.responseReducer);
  const [quiz, setQuiz] = useState<any>({});
  const [answers, setAnswers] = useState<any>({});
  const dispatch = useDispatch();
  const fetchQuizzes = async () => {
    const quizzes = await coursesClient.findQuizzesForCourse(cid as string);
    dispatch(setQuizzes(quizzes));
  };
  const fetchResponses = async () => {
    if(currentUser.role === "FACULTY") { await deleteUserAnswers(); }
    const responses = await responsesClient.fetchUserResponses(currentUser._id);
    dispatch(setResponses(responses));
  };
  const fetchQuiz = () => {
    setQuiz(quizzes.find((q: { _id: string | undefined; }) => q._id === qid));
  }
  const fetchQuestions = async () => {
    const questions = await quizzesClient.findQuestionsForQuiz(qid as string);
    dispatch(setQuestions(questions));
  }
  const makeResponse = () => {
      setAnswers([]);
  }
  const updateAnswer = (questionId: string, ans: string) => {
    answers.findIndex((a: any) => (a.question === questionId)) === -1
      ? answers.push(JSON.parse(`{"question":"${questionId}", "answer":"${ans}"}`))
      : answers.splice(
        answers.findIndex((a: any) => (a.question === questionId)),
        1, 
        JSON.parse(`{"question":"${questionId}", "answer":"${ans}"}`)
      );
  }
  const deleteUserAnswers = async () => {
    await responsesClient.deleteUserResponses(currentUser._id); 
    dispatch(removeUserResponses(currentUser._id));
  }
  const logAnswers = async () => {
    const response = await responsesClient.createResponse({
      user: currentUser._id, 
      quiz: quiz._id, 
      answers: answers,
      attempt: responses.filter((r: any) => r.quiz === quiz._id)
      .reduce((acc: number, cur: any) => Math.max(acc, cur.attempt), 0)+1
    });
    dispatch(addResponse(response));
  }
  useEffect(() => { fetchQuizzes(); fetchQuiz(); fetchQuestions(); fetchResponses(); makeResponse();}, []);

  return (
    responses.filter((r: any) => r.quiz === qid)
          .reduce((acc: any, cur: any) => (cur.attempt > acc.attempt ? cur : acc), {attempt: 0}).attempt 
    >= quiz.numAttempts && currentUser.role !== "FACULTY"
    ? <Navigate to={`/Kambaz/Courses/${cid}/Quizzes/${qid}`} /> :
    <div id="wd-questions">
      <h1>{quiz.title}</h1>
      <br/>
      <h1>Quiz Instructions</h1><hr/>
        {questions.map((question: any) => (
            question.type === "Multiple Choice" ? <MultipleChoice updateAnswer={updateAnswer} id={question._id} title={question.title} question={question.question} points={question.points} answers={question.answers} />
            : question.type === "True/False" ? <TrueFalse updateAnswer={updateAnswer} id={question._id} title={question.title} question={question.question} points={question.points} />
            :<FillInTheBlank updateAnswer={updateAnswer} id={question._id} question={question.question} title={question.title} points={question.points} />))}
      <Link to={`/Kambaz/Courses/${cid}/Quizzes/${qid}`}>
        <Button variant="danger" size="lg" className="me-1 float-end" id="wd-save-quiz-btn"
            onClick={() => logAnswers()}>
          Submit Quiz
        </Button>
      </Link>
    </div>
  );}