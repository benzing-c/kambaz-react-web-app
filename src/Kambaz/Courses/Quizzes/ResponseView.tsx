import { Link, Navigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import * as coursesClient from "../client";
import { setQuizzes } from "./reducer";
import { useEffect, useState } from "react";
import * as quizzesClient from "./client";
import * as responsesClient from "./Responses/client";
import { setQuestions } from "./Questions/reducer";
import { Button } from "react-bootstrap";
import Response from "./Questions/Response"
import { setResponses } from "./Responses/reducer";

export default function ResponseView() {
  const { cid, qid } = useParams();
  const { quizzes } = useSelector((state: any) => state.quizzesReducer);
  const { questions } = useSelector((state: any) => state.questionsReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { responses } = useSelector((state: any) => state.responseReducer);
  const [quiz, setQuiz] = useState<any>({});
  const [response, setResponse] = useState<any>({});
  const dispatch = useDispatch();
  const fetchQuizzes = async () => {
      const quizzes = await coursesClient.findQuizzesForCourse(cid as string);
      dispatch(setQuizzes(quizzes));
    };
    const fetchQuiz = () => {
      setQuiz(quizzes.find((q: { _id: string | undefined; }) => q._id === qid));
    }
  const fetchResponses = async () => {
      const responses = await responsesClient.fetchUserResponses(currentUser._id);
      dispatch(setResponses(responses));
    };
  const fetchResponse = () => {
    setResponse(
      responses.filter((r: any) => r.quiz === qid)
          .reduce((acc: any, cur: any) => (cur.attempt > acc.attempt ? cur : acc), {attempt: 0})
    );
  }
  const fetchQuestions = async () => {
    const questions = await quizzesClient.findQuestionsForQuiz(qid as string);
    dispatch(setQuestions(questions));
  }
  useEffect(() => { fetchQuizzes(); fetchQuiz(); fetchQuestions(); fetchResponses(); fetchResponse();}, []);

  return ( response.attempt === 0 ? 
    <Navigate to={`/Kambaz/Courses/${cid}/Quizzes/${qid}/Attempt`} /> : response.attempt > 0 &&
    <div id="wd-questions">
      <h1>{quiz.title}</h1>
      <br/>
      <h2>Attempt: {response.attempt}</h2>
      <b>
        {quiz.numAttempts - response.attempt} Attempt(s) Remaining<br/>
        Score: {questions.reduce((acc: number, q : any) => {
        const res = response.answers.find((ans: any) => (ans.question === q._id))?.answer!;
        const cor = q.type === "Fill in the Blank" ? q.answers.includes(res) ? 1 : 0 : res === q.correct ? 1 : 0;
        return acc + cor * q.points; }, 0)}
        /{questions.reduce((acc: number, q:any) => {return acc + q.points}, 0)}
      </b><hr/>
        {questions.map((question: any) => (
            <Response 
                type={question.type} 
                question={question.question} 
                id={question._id} 
                title={question.title} 
                points={question.points} 
                answers={question.answers} 
                correct={question.correct} 
                response={response.answers.find((ans: any) => (ans.question === question._id))?.answer!} />
            ))}
      {response.attempt >= quiz.numAttempts ? "" : <Link to={`/Kambaz/Courses/${cid}/Quizzes/${qid}/Attempt`}>
        <Button variant="danger" size="lg" className="me-1 float-end" id="wd-retake-quiz-btn">
          Retake Quiz
        </Button>
      </Link>}
      <Link to={`/Kambaz/Courses/${cid}/Quizzes`}>
        <Button variant="secondary" size="lg" className="me-1 float-end" id="wd-back-quiz-btn">
          Back to Quizzes
        </Button>
      </Link>
    </div>
  );}