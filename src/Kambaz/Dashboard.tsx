import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4" container spacing={300}>
          <Col className="wd-dashboard-course" style={{ width: "260px" }}>
            <Card>
              <Link to="/Kambaz/Courses/1234/Home"
                  className="wd-dashboard-course-link text-decoration-none text-dark" >
                <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160}/>
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title">CS1234 React JS</Card.Title>
                  <Card.Text  className="wd-dashboard-course-description">Full Stack software developer</Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "260px" }}>
            <Card>
              <Link to="/Kambaz/Courses/4550/Home"
                  className="wd-dashboard-course-link text-decoration-none text-dark" >
                <Card.Img variant="top" src="/images/webdev.jpg" width="100%" height={160}/>
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title">CS4550 Web Development</Card.Title>
                  <Card.Text  className="wd-dashboard-course-description">Web development course</Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "260px" }}>
            <Card>
              <Link to="/Kambaz/Courses/2510/Home"
                  className="wd-dashboard-course-link text-decoration-none text-dark" >
                <Card.Img variant="top" src="/images/fundies2.jpg" width="100%" height={160}/>
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title">CS2510 Fundamentals 2</Card.Title>
                  <Card.Text  className="wd-dashboard-course-description">Fundies 2</Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "260px" }}>
            <Card>
              <Link to="/Kambaz/Courses/3000/Home"
                  className="wd-dashboard-course-link text-decoration-none text-dark" >
                <Card.Img variant="top" src="/images/algo.jpg" width="100%" height={160}/>
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title">CS3000 Algorithms & Data</Card.Title>
                  <Card.Text  className="wd-dashboard-course-description">Learn about algorithms</Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "260px" }}>
            <Card>
              <Link to="/Kambaz/Courses/3500/Home"
                  className="wd-dashboard-course-link text-decoration-none text-dark" >
                <Card.Img variant="top" src="/images/ood.jpg" width="100%" height={160}/>
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title">CS3500 OOD</Card.Title>
                  <Card.Text  className="wd-dashboard-course-description">Object oriented design</Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "260px" }}>
            <Card>
              <Link to="/Kambaz/Courses/4530/Home"
                  className="wd-dashboard-course-link text-decoration-none text-dark" >
                <Card.Img variant="top" src="/images/software.jpg" width="100%" height={160}/>
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title">CS4530 Fundamentals of Software Engineering</Card.Title>
                  <Card.Text  className="wd-dashboard-course-description">Fundamentals of Software Engineering</Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "260px" }}>
            <Card>
              <Link to="/Kambaz/Courses/2500/Home"
                  className="wd-dashboard-course-link text-decoration-none text-dark" >
                <Card.Img variant="top" src="/images/fundies1.jpg" width="100%" height={160}/>
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title">CS2500 Fundamentals 1</Card.Title>
                  <Card.Text  className="wd-dashboard-course-description">Fundies 1</Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
);}
