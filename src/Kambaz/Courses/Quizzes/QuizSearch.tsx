import { Button, Col, Form, Row } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import ProtectedComponent from "../../Account/ProtectedComponent";
import { Link } from "react-router-dom";

export default function QuizSearch() {
    return (
        <div id="wd-quiz-search">
            <Form.Group as={Row} className="mb-3" controlId="wd-quiz-searchbar">
                <Col sm={4}>
                    <Form.Control type="email" placeholder="🔎︎ Search..." />
                </Col>
                <Col sm={4} />
                <Col sm={4}>
                    <ProtectedComponent><Link to="Editor"><Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-group-btn">
                        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                        Quiz
                    </Button></Link></ProtectedComponent>
                </Col>
            </Form.Group>
        </div>
    )
}