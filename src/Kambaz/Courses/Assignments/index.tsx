import { Col, ListGroup, Row } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { Link, useParams } from "react-router";
import { MdOutlineAssignment } from "react-icons/md";
import AssignmentSearch from "./AssignmentSearch";
import { FaCaretDown } from "react-icons/fa";
import GroupControlButtons from "./GroupControlButtons";
import { useSelector } from "react-redux";
import AssignmentControlButtons from "./AssignmentControlButtons";

export default function Assignments() {
  const { cid } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  console.log(assignments);
  return (
    <div id="wd-assignments">
      <AssignmentSearch /><ListGroup className="rounded-0" id="wd-modules">
          <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" /> <FaCaretDown className="fs-5"/> <b>ASSIGNMENTS</b> <GroupControlButtons />
            </div>
      <ListGroup id="wd-assignments-list" className="wd-lessons rounded-0">
        {assignments
          .filter((assignment: any) => assignment.course === cid)
          .map((assignment: any) => (
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
  /**
   * <ListGroup className="rounded-0" id="wd-modules">
          <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" /> <FaCaretDown className="fs-5"/> <b>ASSIGNMENTS</b> <GroupControlButtons />
            </div>
            <ListGroup className="wd-lessons rounded-0">
                <Link to="/Kambaz/Courses/1234/Assignments/123" style={{ textDecoration: 'none' }}>
                    <ListGroup.Item className="wd-lesson p-3 ps-1">
                    <Row>
                        <Col sm={1}><BsGripVertical className="me-2 fs-3" /> <MdOutlineAssignment className="fs-3"/></Col> 
                        <Col sm={10}><b>A1</b> <p className="h6"><span className="text-danger">Multiple Modules</span> <span className="text-secondary">| <b>Not available until</b> May 13 at 12:00 am | <b>Due</b> May 20 at 11:59 pm | 100 pts</span></p></Col>
                        <Col sm={1}><LessonControlButtons /></Col>
                        </Row>
                    </ListGroup.Item>
                </Link>
                <Link to="/Kambaz/Courses/1234/Assignments/456" style={{ textDecoration: 'none' }}>
                    <ListGroup.Item className="wd-lesson p-3 ps-1">
                    <Row>
                        <Col sm={1}><BsGripVertical className="me-2 fs-3" /> <MdOutlineAssignment className="fs-3"/></Col> 
                        <Col sm={10}><b>A2</b> <p className="h6"><span className="text-danger">Multiple Modules</span> <span className="text-secondary">| <b>Not available until</b> May 13 at 12:00 am | <b>Due</b> May 20 at 11:59 pm | 100 pts</span></p></Col>
                        <Col sm={1}><LessonControlButtons /></Col>
                        </Row>
                    </ListGroup.Item>
                </Link>
                <Link to="/Kambaz/Courses/1234/Assignments/789" style={{ textDecoration: 'none' }}>
                    <ListGroup.Item className="wd-lesson p-3 ps-1">
                    <Row>
                        <Col sm={1}><BsGripVertical className="me-2 fs-3" /> <MdOutlineAssignment className="fs-3"/></Col> 
                        <Col sm={10}><b>A3</b> <p className="h6"><span className="text-danger">Multiple Modules</span> <span className="text-secondary">| <b>Not available until</b> May 20 at 12:00 am | <b>Due</b> May 27 at 11:59 pm | 100 pts</span></p></Col>
                        <Col sm={1}><LessonControlButtons /></Col>
                        </Row>
                    </ListGroup.Item>
                </Link>
            </ListGroup>
          </ListGroup.Item>
        </ListGroup>
   */