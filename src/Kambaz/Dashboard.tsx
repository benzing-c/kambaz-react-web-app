import { Link } from "react-router-dom";
import { Row, Col, Card, Button, FormControl } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import ProtectedComponent from "./Account/ProtectedComponent";
import { addCourse, deleteCourse, updateCourse } from "./Courses/reducer";
import { useState } from "react";
import { addEnrollment, deleteEnrollment } from "./Courses/enrollmentsReducer";
export default function Dashboard() {

  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { courses } = useSelector((state: any) => state.coursesReducer);
  const [course, setCourse] = useState<any>({
    _id: "0", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    image: "/images/reactjs.jpg", description: "New Description"});
  const [showAll, setShowAll] = useState<boolean>(false);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const dispatch = useDispatch();
  
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">
        Dashboard
        <button className="btn btn-primary float-end" onClick={(e) => setShowAll(!showAll)}>Enrollments</button> 
      </h1><hr />

      <ProtectedComponent><h5>New Course
        <button className="btn btn-primary float-end"
          id="wd-add-new-course-click"
            onClick={(e) => dispatch(addCourse(course))} > Add 
        </button>
        <button className="btn btn-warning float-end me-2"
          onClick={(e) => dispatch(updateCourse(course))} 
          id="wd-update-course-click">
            Update
        </button>
        </h5><br />
        <FormControl value={course.name} className="mb-2"
          onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
        <FormControl value={course.description}
          onChange={(e) => setCourse({ ...course, description: e.target.value }) } />
      </ProtectedComponent>

      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses.filter((course: { _id: string; }) =>
            enrollments.some(
              (enrollment) =>
                showAll ||
                enrollment.user === currentUser._id &&
                enrollment.course === course._id
              ))
          .map((course: {_id: string; name: string; description: string}) => (
            <Col className="wd-dashboard-course" style={{ width: "300px" }}>
              <Card>
                <Link to={`/Kambaz/Courses/${course._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark" >
                    <Card.Img src="/images/reactjs.jpg" variant="top" width="100%" height={160} />
                    <Card.Body className="card-body">
                    <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {course.name} </Card.Title>
                    <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                      {course.description} </Card.Text>
                    <Button variant="primary"> Go </Button>
                    
                    {enrollments.some((enrollment) =>
                      enrollment.user === currentUser._id &&
                      enrollment.course === course._id) ?
                    <Button variant="danger" onClick={(e) => {dispatch(deleteEnrollment({user: currentUser._id, course: course._id}))}}>Unenroll</Button> :
                    <Button variant="success" onClick={(e) => {dispatch(addEnrollment({user: currentUser._id, course: course._id})); console.log(enrollments)}}>Enroll</Button>}
                    <ProtectedComponent>
                      <button onClick={(event) => {
                        event.preventDefault();
                        dispatch(deleteCourse(course._id));
                        }} className="btn btn-danger float-end"
                        id="wd-delete-course-click">
                          Delete
                      </button>
                      <button id="wd-edit-course-click"
                        onClick={(event) => {
                          event.preventDefault();
                          setCourse(course);
                        }}
                      className="btn btn-warning me-2 float-end" >
                        Edit
                      </button>
                    </ProtectedComponent>

                  </Card.Body>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>);}