import { Button, Col, Form, Row } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";

export default function AssignmentSearch() {
    return (
        <div id="wd-assignment-search">
            <Form.Group as={Row} className="mb-3" controlId="wd-assignment-searchbar">
                <Col sm={4}>
                    <Form.Control type="email" placeholder="🔎︎ Search..." />
                </Col>
                <Col sm={4} />
                <Col sm={4}>
                    <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-group-btn">
                        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                        Assignment
                    </Button>
                    <Button variant="secondary" size="lg" className="me-1 float-end" id="wd-add-group-btn">
                        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                        Group
                    </Button>
                </Col>
            </Form.Group>
        </div>
    )
}