import { Button, Col, Form, FormControl, FormGroup, FormLabel, Nav, Row } from "react-bootstrap";
import { Link, useParams } from "react-router";
import ProtectedComponent from "../../Account/ProtectedComponent";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addQuiz, updateQuiz } from "./reducer";
import * as coursesClient from "../client";
import * as quizzesClient from "./client";

export default function DetailsEditor() {
    const { cid, qid } = useParams();
    const { quizzes } = useSelector((state: any) => state.quizzesReducer);
    const [quiz, setQuiz] = useState<any>({});
    const dispatch = useDispatch();
    const saveQuiz = async (quiz: any) => {
      await quizzesClient.updateQuiz(quiz);
      dispatch(updateQuiz(quiz));
    };
    const createQuizForCourse = async (quiz: any) => {
        if (!cid) return;
      const q = await coursesClient.createQuizForCourse(cid, quiz);
      dispatch(addQuiz(q));
    };
    const fetchQuiz = () => {
      qid === "Editor" ? setQuiz({...quiz, course: cid}):
      setQuiz(quizzes.find((q: { _id: string | undefined; }) => q._id === qid));
    }

    useEffect(() => { fetchQuiz(); }, []);
    return (
      <div id="wd-quizzes-detail-editor">
        <Nav variant="tabs" id="wd-quizzes-editor-nav" defaultActiveKey="test">
          <Nav.Item>
            <Nav.Link href="test" as={Link} to={`/Kambaz/Courses/${cid}/Quizzes/${qid}/Editor`}>Details</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to={`/Kambaz/Courses/${cid}/Quizzes/${qid}/QuestionEditor`}>Questions</Nav.Link>
          </Nav.Item>
        </Nav><br/>

        <FormGroup className="mb-3" controlId="wd-quiz-name">
          <FormLabel>Quiz Name</FormLabel>
          <FormControl defaultValue={quiz && quiz.title} 
            onChange={(e) => setQuiz({ ...quiz, title:  e.target.value })}/>
        </FormGroup>
        <FormGroup className="mb-3" controlId="wd-quiz-desc">
          <FormControl as="textarea" rows={10} defaultValue={quiz && quiz.description}
           onChange={(e) => setQuiz({ ...quiz, description:  e.target.value })}/>
        </FormGroup>
        
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}> Points </Form.Label>
          <Col sm={10}>
            <Form.Control type="number" defaultValue={quiz && quiz.points} 
            onChange={(e) => setQuiz({ ...quiz, points:  e.target.value })}/>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Col sm={2}>
            <FormLabel> Quiz Type </FormLabel>
          </Col>
          <Col sm={10}>
            <Form.Select onChange={(e) => setQuiz({ ...quiz, type:  e.target.value })}>
              <option>Select Type</option>
              <option value="Graded Quiz">Graded Quiz</option>
              <option value="Practice Quiz">Practice Quiz</option>
              <option value="Graded Survey">Graded Survey</option>
              <option value="Ungraded Survey">Ungraded Survey</option>
            </Form.Select>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Col sm={2}>
            <FormLabel> Assignment Group </FormLabel>
          </Col>
          <Col sm={10}>
            <Form.Select onChange={(e) => setQuiz({ ...quiz, group:  e.target.value })}>
              <option>Select Group</option>
              <option value="Quizzes">Quizzes</option>
              <option value="Exams">Exams</option>
              <option value="Assignments">Assignments</option>
              <option value="Projects">Projects</option>
            </Form.Select>
            <br/>
            
            <b>Options</b><br/>
            <Form.Check defaultChecked={quiz.shuffle} label="Shuffle Answers"
                onChange={(e) => setQuiz({ ...quiz, shuffle:  e.target.checked })}/>
            <Form.Check defaultChecked={quiz.numAttempts > 1} label="Multiple Attempts"
                onChange={(e) => setQuiz({ ...quiz, numAttempts: e.target.checked ?  2 : 1 })}/>
            {quiz.numAttempts > 1 ? <Row>
              <Col sm={2}><FormLabel>Number of Attempts:</FormLabel></Col>
              <Col><FormControl type="number" defaultValue={quiz.numAttempts} 
                  onChange={(e) => setQuiz({...quiz, numAttempts: e.target.value})}/></Col>
            </Row> : ""}
            <Form.Check defaultChecked={quiz.oneAtATime} label="One Question At A Time"
                onChange={(e) => setQuiz({ ...quiz, oneAtATime:  e.target.checked })}/>
            <Form.Check defaultChecked={quiz.webcamRequired} label="Webcam Required"
                onChange={(e) => setQuiz({ ...quiz, webcamRequired:  e.target.checked })}/>
            <Form.Check defaultChecked={quiz.lockQuestions} label="Lock Questions On Answer"
                onChange={(e) => setQuiz({ ...quiz, lockQuestions:  e.target.checked })}/>
            <FormLabel> Show Answers </FormLabel>
              <FormControl type="date" defaultValue={quiz && quiz.showCorrectAnswers} 
              onChange={(e) => setQuiz({ ...quiz, showCorrectAnswers:  e.target.value })}/>
            <FormLabel>Time Limit (Minutes)</FormLabel>
            <FormControl type="number" defaultValue={quiz && quiz.time} 
                onChange={(e) => setQuiz({ ...quiz, time:  e.target.value })}/>
            <FormLabel>Access Code</FormLabel>
            <FormControl defaultValue={quiz && quiz.accessCode} 
                onChange={(e) => setQuiz({ ...quiz, accessCode:  e.target.value })}/>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Col sm={2}>
            <FormLabel> Assign </FormLabel>
          </Col>
          <Col sm={10}>
            <FormGroup className="mb-3" controlId="wd-due-date">
              <FormLabel> Due Date </FormLabel>
              <FormControl type="date" defaultValue={quiz && quiz.due} 
              onChange={(e) => setQuiz({ ...quiz, due:  e.target.value })}/>
            </FormGroup>
            <FormGroup className="mb-3" controlId="wd-available-from">
              <FormLabel> Available from </FormLabel>
              <FormControl type="date" defaultValue={quiz && quiz.available} 
              onChange={(e) => setQuiz({ ...quiz, available:  e.target.value })}/>
            </FormGroup>
            <FormGroup className="mb-3" controlId="wd-available-until">
              <FormLabel> until </FormLabel>
              <FormControl type="date" defaultValue={quiz && quiz.until} 
              onChange={(e) => setQuiz({ ...quiz, until:  e.target.value })}/>
            </FormGroup>
          </Col>
        </Form.Group>
        <hr/>
        <ProtectedComponent><Link to={`/Kambaz/Courses/${cid}/Quizzes`}>
          <Button variant="danger" size="lg" className="me-1 float-end" id="wd-save-quiz-btn"
            onClick={() => { qid === "Editor" ? createQuizForCourse({...quiz, published: true}) : saveQuiz({...quiz, published: true})}}>
            Save & Publish
          </Button>
        </Link></ProtectedComponent>
        <ProtectedComponent><Link to={`/Kambaz/Courses/${cid}/Quizzes/`}>
          <Button variant="danger" size="lg" className="me-1 float-end" id="wd-save-quiz-btn"
            onClick={() => qid === "Editor" ? createQuizForCourse(quiz) : saveQuiz(quiz)}>
            Save
          </Button>
        </Link></ProtectedComponent>
        <Link to={`/Kambaz/Courses/${cid}/Quizzes`}>
          <Button variant="secondary" size="lg" className="me-1 float-end" id="wd-canel-quiz-edit-btn">
            Cancel
          </Button>
        </Link>
      </div>
  );}