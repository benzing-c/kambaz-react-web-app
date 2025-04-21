import { useEffect, useState } from "react";
import { Button, Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import * as coursesClient from "../client";
import * as quizzesClient from "./client";
import * as questionsClient from "./Questions/client";
import { setQuizzes } from "./reducer";
import { setQuestions } from "./Questions/reducer";
import QuestionEditor from "./Questions/Editor";

export default function QuestionsEditor() {
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
        const questions = await quizzesClient.findQuestionsForQuiz(qid as string);
        questions.map((question: any) => (console.log(question.title)));
        dispatch(setQuestions(questions));
    }
    const addQuestion = async () => {
            const question = await quizzesClient.createQuestionForQuiz(qid as string);
            dispatch(setQuestions([...questions, question]));
    };
    const saveQuestions = async () => {
        await questions.map((question: any) => ( questionsClient.updateQuestion(question)));
    }
    useEffect(() => { fetchQuizzes(); fetchQuiz(); fetchQuestions();}, []);

    return (
        <div id="wd-quizzes-detail-editor">
            <Nav variant="tabs" id="wd-quizzes-editor-nav" defaultActiveKey="test">
            <Nav.Item>
                <Nav.Link as={Link} to={`/Kambaz/Courses/${cid}/Quizzes/${qid}/Editor`}>Details</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="test" as={Link} to={`/Kambaz/Courses/${cid}/Quizzes/${qid}/QuestionEditor`}>Questions</Nav.Link>
            </Nav.Item>
            </Nav>
            <br/>
            
            
            <h3>{quiz.title} ({questions.reduce((sum:number, q:any) => sum + q.points, 0)} Points)</h3>
            <br/>
            {questions.map((question: any) => (<QuestionEditor questionId={question._id}/>))}
            <hr/>
            <Button variant="light" size="lg" className="me-1" id="wd-add-question-btn"
                onClick={() => addQuestion()}>
                + New Question
            </Button>
            <Link to={`/Kambaz/Courses/${cid}/Quizzes`}>
                <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-question-btn"
                    onClick={() => saveQuestions()}>
                    Save Questions
                </Button>
            </Link>
            <Link to={`/Kambaz/Courses/${cid}/Quizzes`}>
                <Button variant="secondary" size="lg" className="me-1 float-end" id="wd-add-question-btn">
                    Cancel
                </Button>
            </Link>
        </div>
    );
}