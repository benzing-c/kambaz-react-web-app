import { Link, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import * as coursesClient from "../client";
import { setQuizzes } from "./reducer";
import { useEffect, useState } from "react";
import * as quizzesClient from "./client";
import { setQuestions } from "./Questions/reducer";
import { Button } from "react-bootstrap";
import Response from "./Questions/Response"

export default function ResponseView() {
  const { cid, qid } = useParams();
  const { quizzes } = useSelector((state: any) => state.quizzesReducer);
  const { questions } = useSelector((state: any) => state.questionsReducer);
  const [quiz, setQuiz] = useState<any>({});
  const response = {
    "_id": "sample-response",
    "user": "id",
    "quiz": "Q1",
    "answers": [
      {
        "question": "qu1",
        "answer": "All of the above"
      },
      {
        "question": "qu2",
        "answer": "true"
      },
      {
        "question": "qu3",
        "answer": "correct answer"
      }
    ],
    "attempt": 1
  }
  const dispatch = useDispatch();
  const fetchQuizzes = async () => {
      const quizzes = await coursesClient.findQuizzesForCourse(cid as string);
      dispatch(setQuizzes(quizzes));
    };
    const fetchQuiz = () => {
      setQuiz(quizzes.find((q: { _id: string | undefined; }) => q._id === qid));
    }
  const fetchQuestions = async () => {
    console.log("view");
    console.log(qid as string);
    const questions = await quizzesClient.findQuestionsForQuiz(qid as string);
    dispatch(setQuestions(questions));
  }
  useEffect(() => { fetchQuizzes(); fetchQuiz(); fetchQuestions();}, []);

  return (
    <div id="wd-questions">
      <h1>{quiz.title}</h1>
      <br/>
      {/* TODO WHEN ATTEMPT */}
      <h2>Attempt: {response.attempt}</h2>
      <b>(TODO attempts remaining)<br/>
      Score: {questions.reduce((acc: number, q : any) => {
        const res = response.answers.find((ans) => (ans.question === q._id))?.answer!;
        const cor = q.type === "Fill in the Blank" ? q.answers.includes(res) ? 1 : 0 : response === q.correct ? 1 : 0;
        console.log(q.title);
        console.log(acc);
        console.log(cor);
        console.log(q.points);
        console.log(cor * q.points);
        acc + cor * q.points; }, 0)}</b><hr/>
        {questions.map((question: any) => (
            <Response 
                type={question.type} 
                question={question.question} 
                id={question._id} 
                title={question.title} 
                points={question.points} 
                answers={question.answers} 
                correct={question.correct} 
                response={response.answers.find((ans) => (ans.question === question._id))?.answer!} />
            ))}
      <Link to={`/Kambaz/Courses/${cid}/Quizzes/${qid}/Attempt`}>
        <Button variant="danger" size="lg" className="me-1 float-end" id="wd-retake-quiz-btn">
          Retake Quiz
        </Button>
      </Link>
      <Link to={`/Kambaz/Courses/${cid}/Quizzes`}>
        <Button variant="secondary" size="lg" className="me-1 float-end" id="wd-back-quiz-btn">
          Back
        </Button>
      </Link>
    </div>
  );}