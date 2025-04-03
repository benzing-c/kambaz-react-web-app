import { Col, ListGroup, Row } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { Link, useParams } from "react-router";
import { MdOutlineAssignment } from "react-icons/md";
import AssignmentSearch from "./AssignmentSearch";
import { FaCaretDown } from "react-icons/fa";
import GroupControlButtons from "./GroupControlButtons";
import { useDispatch, useSelector } from "react-redux";
import AssignmentControlButtons from "./AssignmentControlButtons";
import * as coursesClient from "../client";
import { setAssignments } from "./reducer";
import { useEffect } from "react";

export default function Assignments() {
  const { cid } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const dispatch = useDispatch();
  const fetchAssignments = async () => {
    const assignments = await coursesClient.findAssignmentsForCourse(cid as string);
    dispatch(setAssignments(assignments));
  };
  useEffect(() => {
    fetchAssignments();
  }, []);

  return (
    <div id="wd-assignments">
      <AssignmentSearch /><ListGroup className="rounded-0" id="wd-modules">
          <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" /> <FaCaretDown className="fs-5"/> <b>ASSIGNMENTS</b> <GroupControlButtons />
            </div>
      <ListGroup id="wd-assignments-list" className="wd-lessons rounded-0">
        {assignments.map((assignment: any) => (
          <ListGroup.Item className="wd-lesson p-3 ps-1">
            <Row>
              <Col sm={1}><BsGripVertical className="me-2 fs-3" /> <MdOutlineAssignment className="fs-3"/></Col> 
              <Col sm={10}><Link to={`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`} style={{ textDecoration: 'none', color: 'black' }}>
                <b>{assignment.title}</b> <p className="h6"><span className="text-danger">Multiple Modules</span> <span className="text-secondary">| <b>Not available until</b> {assignment.available} | <b>Due</b> {assignment.due} | {assignment.points} pts</span></p>
              </Link></Col>
              <Col sm={1}><AssignmentControlButtons assignmentId={assignment._id} assignmentTitle={assignment.title} /></Col>
            </Row>
          </ListGroup.Item>))}
        </ListGroup></ListGroup.Item></ListGroup>
      </div>
  );}