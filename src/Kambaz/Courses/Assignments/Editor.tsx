import { Button, Col, Form, FormCheck, FormControl, FormGroup, FormLabel, FormSelect, Row } from "react-bootstrap";
import { Link, useParams } from "react-router";
import {assignments} from "../../Database";

export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    const assignment = assignments.find((assignment) => assignment._id === aid);

    return (
      <div id="wd-assignments-editor">
        <FormGroup className="mb-3" controlId="wd-assignment-name">
          <FormLabel>Assignment Name</FormLabel>
          <FormControl value={assignment && assignment.title} />
        </FormGroup>
        <FormGroup className="mb-3" controlId="wd-assignment-desc">
          <FormControl as="textarea" rows={10} value={assignment && assignment.description} />
        </FormGroup>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}> Points </Form.Label>
          <Col sm={10}>
            <Form.Control value={assignment && assignment.points} />
          </Col>
        </Form.Group>
        
        <Row>
          <Col sm={2}>
            <FormLabel> Assignment Group </FormLabel>
          </Col>
          <Col sm={10}>
            <FormSelect>
              <option selected>ASSIGNMENTS</option>
              <option>QUIZZES</option>
              <option>EXAMS</option>
            </FormSelect>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col sm={2}>
            <FormLabel> Display Grade as </FormLabel>
          </Col>
          <Col sm={10}>
            <FormSelect>
              <option selected>Percentage</option>
              <option>Points</option>
              <option>Letter</option>
            </FormSelect>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col sm={2}>
            <FormLabel> Submission Type </FormLabel>
          </Col>
          <Col sm={10}>
            <FormSelect>
              <option selected>Online</option>
              <option>In Person</option>
            </FormSelect>
            <br/>
            <h6>Online Entry Options</h6>
            <FormCheck id="wd-check" label="Text Entry"/>
            <FormCheck id="wd-check" label="Website URL"/>
            <FormCheck id="wd-check" label="Media Recording"/>
            <FormCheck id="wd-check" label="Student Annotations"/>
            <FormCheck id="wd-check" label="File Uploads"/>
          </Col>
        </Row>

        <br/>
        <Row>
          <Col sm={2}>
            <FormLabel> Assign </FormLabel>
          </Col>
          <Col sm={10}>
            <FormGroup className="mb-3" controlId="wd-assign-to">
              <FormLabel>Assign To</FormLabel>
              <FormControl value="Everyone" />
            </FormGroup>
            <FormGroup className="mb-3" controlId="wd-due-date">
              <FormLabel> Due Date </FormLabel>
              <FormControl value={assignment && assignment.due} />
            </FormGroup>
            <FormGroup className="mb-3" controlId="wd-available-from">
              <FormLabel> Available from </FormLabel>
              <FormControl value={assignment && assignment.available} />
            </FormGroup>
            <FormGroup className="mb-3" controlId="wd-available-until">
              <FormLabel> until </FormLabel>
              <FormControl value="05 / 20 / 2024" />
            </FormGroup>
          </Col>
        </Row>
        <hr/>
        <Link to={`/Kambaz/Courses/${cid}/Assignments`}>
          <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-module-btn">
            Save
          </Button>
        </Link>
        <Link to={`/Kambaz/Courses/${cid}/Assignments`}>
          <Button variant="secondary" size="lg" className="me-1 float-end" id="wd-add-module-btn">
            Cancel
          </Button>
        </Link>
      </div>
  );}