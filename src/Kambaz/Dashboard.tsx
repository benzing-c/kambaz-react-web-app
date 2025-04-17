import { Link } from "react-router-dom";
import { Row, Col, Card, Button, FormControl } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import ProtectedComponent from "./Account/ProtectedComponent";
import { addCourse, deleteCourse, updateCourse, setCourses } from "./Courses/reducer";
import { useEffect, useState } from "react";
import { addEnrollment, deleteEnrollment, setEnrollments } from "./Courses/enrollmentsReducer";
import * as courseClient from "./Courses/client";
import * as userClient from "./Account/client";
export default function Dashboard() {

  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { courses } = useSelector((state: any) => state.coursesReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const [course, setCourse] = useState<any>({
    _id: "0", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    image: "/images/reactjs.jpg", description: "New Description"});
  const [showAll, setShowAll] = useState<boolean>(false);
  const dispatch = useDispatch();

  const saveCourse = async (course: any) => {
    await courseClient.updateCourse(course);
    dispatch(updateCourse(course));    
  };
  const removeCourse = async (courseId: string) => {
    await courseClient.deleteCourse(courseId);
    dispatch(deleteCourse(courseId));
  };
  const addNewCourse = async () => {
    await userClient.createCourse(course);
    dispatch(addCourse(course));
  };
  const fetchCourses = async () => {
    const courses = await courseClient.fetchAllCourses();
    dispatch(setCourses(courses));
  };
  const fetchEnrollments = async () => {
    const enrollments = await courseClient.fetchAllEnrollments();
    dispatch(setEnrollments(enrollments));
  }
  const unenroll = async (courseId: string) => {
    await courseClient.unenroll(currentUser._id, courseId);
    dispatch(deleteEnrollment({user: currentUser._id, course: courseId}));
  };
  const enroll = async (courseId: string) => {
    await courseClient.enroll(currentUser._id, courseId);
    dispatch(addEnrollment({user: currentUser._id, course: courseId}));
  };
  useEffect(() => {
    fetchCourses();
    fetchEnrollments();
  }, [currentUser]);
  
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">
        Dashboard
        <button className="btn btn-primary float-end" onClick={(_e) => setShowAll(!showAll)}>Enrollments</button> 
      </h1><hr />

      <ProtectedComponent><h5>New Course
        <button className="btn btn-primary float-end"
          id="wd-add-new-course-click"
            onClick={(_e) => addNewCourse()} > Add 
        </button>
        <button className="btn btn-warning float-end me-2"
          onClick={(_e) => saveCourse(course)} 
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
          {courses
          .filter((course: { _id: string; }) =>
            enrollments.some(
              (enrollment: { user: any; course: string; }) =>
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
                    
                    {enrollments.some((enrollment: { user: any; course: string; }) =>
                      enrollment.user === currentUser._id &&
                      enrollment.course === course._id) ?
                    <Button variant="danger" onClick={(_e) => unenroll(course._id)}>Unenroll</Button> :
                    <Button variant="success" onClick={(_e) => enroll(course._id)}>Enroll</Button>}
                    <ProtectedComponent>
                      <button onClick={(event) => {
                        event.preventDefault();
                        removeCourse(course._id);
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