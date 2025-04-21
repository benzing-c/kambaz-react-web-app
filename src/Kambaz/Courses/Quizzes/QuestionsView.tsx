import { Link, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import * as coursesClient from "../client";
import { setQuizzes } from "./reducer";
import { useEffect, useState } from "react";
import * as quizzesClient from "./client";
import { setQuestions } from "./Questions/reducer";
import MultipleChoice from "./Questions/MultipleChoice";
import TrueFalse from "./Questions/TrueFalse";
import FillInTheBlank from "./Questions/FillInTheBlank";
import { Button } from "react-bootstrap";

export default function QuestionsView() {
  const { cid, qid } = useParams();
  const { quizzes } = useSelector((state: any) => state.quizzesReducer);
  const { questions } = useSelector((state: any) => state.questionsReducer);
  const [quiz, setQuiz] = useState<any>({});
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
      {/* TODO START TIME */}
      <h1>Quiz Instructions</h1><hr/>
        {questions.map((question: any) => (
            question.type === "Multiple Choice" ? <MultipleChoice id={question._id} title={question.title} question={question.question} points={question.points} answers={question.answers} />
            : question.type === "True/False" ? <TrueFalse id={question._id} title={question.title} question={question.question} points={question.points} />
            :<FillInTheBlank question={question.question} title={question.title} points={question.points} />))}
      <Link to={`/Kambaz/Courses/${cid}/Quizzes`}>
        <Button variant="danger" size="lg" className="me-1 float-end" id="wd-save-quiz-btn">
          Submit Quiz
        </Button>
      </Link>
    </div>
  );}