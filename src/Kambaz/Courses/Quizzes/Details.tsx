import { useEffect, useState } from "react";
import { Button, Col, Row, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import ProtectedComponent from "../../Account/ProtectedComponent";
import { FaPencil } from "react-icons/fa6";

export default function QuizDetails() {
    const { cid, qid } = useParams();
    const { quizzes } = useSelector((state: any) => state.quizzesReducer);
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const [quiz, setQuiz] = useState<any>({});
    const fetchQuiz = () => {
        qid === "Editor" ? setQuiz({...quiz, course: cid}):
        setQuiz(quizzes.find((q: { _id: string | undefined; }) => q._id === qid));
    }
    useEffect(() => { fetchQuiz(); }, []);
    
    return (
        <div id="wd-quiz-details">
            <h1>
                {quiz.title}
                <ProtectedComponent>
                    <Link to="Editor"><Button variant="secondary" size="lg" className="me-1 float-end" id="wd-add-group-btn">
                        <FaPencil className="position-relative me-2" style={{ bottom: "1px" }} />
                        Edit
                    </Button></Link>
                </ProtectedComponent>
                <ProtectedComponent>
                    <Link to="Attempt"><Button variant="secondary" size="lg" className="me-1 float-end" id="wd-add-group-btn">
                        Preview
                    </Button></Link>
                </ProtectedComponent>
                <ProtectedComponent>
                    <Link to="Response"><Button variant="secondary" size="lg" className="me-1 float-end" id="wd-add-group-btn">
                        View Results
                    </Button></Link>
                </ProtectedComponent>
                {currentUser.role === "STUDENT" ? 
                  <Link to="Response"><Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-group-btn">
                     View Quiz
                  </Button></Link> :
                  ""}
            </h1><br/>
            <Table>
            <Row>
               <Col sm={3}><b >Quiz Type</b></Col><Col sm={9}>{quiz.type}</Col> 
            </Row>
            <Row>
               <Col sm={3}><b >Points</b></Col><Col sm={9}>{quiz.points}</Col> 
            </Row>
            <Row>
               <Col sm={3}><b >Assignment Group</b></Col><Col sm={9}>{quiz.group}</Col> 
            </Row><hr/>
            <ProtectedComponent><Row>
               <Col sm={3}><b >Shuffle Answers</b></Col><Col sm={9}>{quiz.shuffle != null && quiz.shuffle.toString()}</Col> 
            </Row></ProtectedComponent>
            <Row>
               <Col sm={3}><b >Time Limit</b></Col><Col sm={9}>{quiz.time} minutes</Col> 
            </Row>
            <Row>
               <Col sm={3}><b >Multiple Attempts</b></Col><Col sm={9}>{quiz.numAttempts != null && (quiz.numAttempts > 1).toString()}</Col> 
            </Row>
            <Row>
               <Col sm={3}><b >How Many Attempts</b></Col><Col sm={9}>{quiz.numAttempts != null && quiz.numAttempts}</Col> 
            </Row>
            <ProtectedComponent><Row>
               <Col sm={3}><b >Show Correct Answers</b></Col><Col sm={9}>{quiz.showCorrectAnswers != null ? new Date().toJSON() >= quiz.showCorrectAnswers ? "Immediately" : quiz.showCorrectAnswers.slice(0, 10) : ""}</Col> 
            </Row></ProtectedComponent>
            <ProtectedComponent><Row>
               <Col sm={3}><b >Access Code</b></Col><Col sm={9}>{quiz.accessCode}</Col> 
            </Row></ProtectedComponent>
            <ProtectedComponent><Row>
               <Col sm={3}><b >One Question At A Time</b></Col><Col sm={9}>{quiz.oneAtATime != null && quiz.oneAtATime.toString()}</Col> 
            </Row></ProtectedComponent>
            <Row>
               <Col sm={3}><b >Webcam Required</b></Col><Col sm={9}>{quiz.webcamRequired != null && quiz.webcamRequired.toString()}</Col> 
            </Row>
            <Row>
               <Col sm={3}><b >Lock Questions After Answering</b></Col><Col sm={9}>{quiz.lockQuestions != null && quiz.lockQuestions.toString()}</Col> 
            </Row><hr/>
            <Row>
               <Col sm={3}><b >Due</b></Col><Col sm={9}>{quiz.due}</Col> 
            </Row>
            <Row>
               <Col sm={3}><b >Available</b></Col><Col sm={9}>{quiz.available}</Col> 
            </Row>
            <Row>
               <Col sm={3}><b >Until</b></Col><Col sm={9}>{quiz.until}</Col> 
            </Row></Table>
        </div>
    );
}