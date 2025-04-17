import { Button, Col, Form, FormControl, FormGroup, FormLabel, Row } from "react-bootstrap";
import { Link, useParams } from "react-router";
import ProtectedComponent from "../../Account/ProtectedComponent";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";
import * as coursesClient from "../client";
import * as assignmentsClient from "./client";

export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    const { assignments } = useSelector((state: any) => state.assignmentsReducer);
    const [assignment, setAssignment] = useState<any>({});
    const dispatch = useDispatch();
    const saveAssignment = async (assignment: any) => {
      await assignmentsClient.updateAssignment(assignment);
      dispatch(updateAssignment(assignment));
    };
    const createAssignmentForCourse = async (assignment: any) => {
      if (!cid) return;
      await coursesClient.createAssignmentForCourse(cid, assignment);
      dispatch(addAssignment(assignment));
    };
    const fetchAssignment = () => {
      aid === "Editor" ? setAssignment({...assignment, course: cid}):
      setAssignment(assignments.find((a: { _id: string | undefined; }) => a._id === aid));
    }

    useEffect(() => { fetchAssignment(); }, []);
    return (
      <div id="wd-assignments-editor">
        <FormGroup className="mb-3" controlId="wd-assignment-name">
          <FormLabel>Assignment Name</FormLabel>
          <FormControl defaultValue={assignment && assignment.title} 
            onChange={(e) => setAssignment({ ...assignment, title:  e.target.value })}/>
        </FormGroup>
        <FormGroup className="mb-3" controlId="wd-assignment-desc">
          <FormControl as="textarea" rows={10} defaultValue={assignment && assignment.description}
           onChange={(e) => setAssignment({ ...assignment, description:  e.target.value })}/>
        </FormGroup>
        
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}> Points </Form.Label>
          <Col sm={10}>
            <Form.Control type="number" defaultValue={assignment && assignment.points} 
            onChange={(e) => setAssignment({ ...assignment, points:  e.target.value })}/>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Col sm={2}>
            <FormLabel> Assign </FormLabel>
          </Col>
          <Col sm={10}>
            <FormGroup className="mb-3" controlId="wd-due-date">
              <FormLabel> Due Date </FormLabel>
              <FormControl type="date" defaultValue={assignment && assignment.due} 
              onChange={(e) => setAssignment({ ...assignment, due:  e.target.value })}/>
            </FormGroup>
            <FormGroup className="mb-3" controlId="wd-available-from">
              <FormLabel> Available from </FormLabel>
              <FormControl type="date" defaultValue={assignment && assignment.available} 
              onChange={(e) => setAssignment({ ...assignment, available:  e.target.value })}/>
            </FormGroup>
            <FormGroup className="mb-3" controlId="wd-available-until">
              <FormLabel> until </FormLabel>
              <FormControl type="date" defaultValue={assignment && assignment.until} 
              onChange={(e) => setAssignment({ ...assignment, until:  e.target.value })}/>
            </FormGroup>
          </Col>
        </Form.Group>
        <hr/>
        <ProtectedComponent><Link to={`/Kambaz/Courses/${cid}/Assignments`}>
          <Button variant="danger" size="lg" className="me-1 float-end" id="wd-save-assignment-btn"
            onClick={() => aid === "Editor" ? createAssignmentForCourse(assignment) : saveAssignment(assignment)}>
            Save
          </Button>
        </Link></ProtectedComponent>
        <Link to={`/Kambaz/Courses/${cid}/Assignments`}>
          <Button variant="secondary" size="lg" className="me-1 float-end" id="wd-canel-assignment-edit-btn">
            Cancel
          </Button>
        </Link>
      </div>
  );}