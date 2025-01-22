import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/4550/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/webdev.jpg" width={200} />
            <div>
              <h5> CS4550 Web Devlopment </h5>
              <p className="wd-dashboard-course-title">
                Web development course  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/2510/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/fundies2.jpg" width={200} />
            <div>
              <h5> CS2510 Fundamentals 2 </h5>
              <p className="wd-dashboard-course-title">
                Fundies 2  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/3000/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/algo.jpg" width={200} />
            <div>
              <h5> CS3000 Algorithms & Data </h5>
              <p className="wd-dashboard-course-title">
                Learn about algorithms  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/3500/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/ood.jpg" width={200} />
            <div>
              <h5> CS3500 OOD </h5>
              <p className="wd-dashboard-course-title">
                Object oriented design  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/4530/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/software.jpg" width={200} />
            <div>
              <h5> CS4530 Fundamentals of Software Engineering </h5>
              <p className="wd-dashboard-course-title">
              Fundamentals of Software Engineering  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/2500/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/fundies1.jpg" width={200} />
            <div>
              <h5> CS2500 Fundamentals 1 </h5>
              <p className="wd-dashboard-course-title">
                Fundies 1  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
);}
