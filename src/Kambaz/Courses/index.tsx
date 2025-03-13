import { Routes, Route, Navigate, useParams, useLocation } from "react-router";
import CourseNavigation from "./Naviagation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { FaAlignJustify } from "react-icons/fa";
import PeopleTable from "./People/Table";
import { useSelector } from "react-redux";

export default function Courses() {
    const { cid } = useParams();
    const { courses } = useSelector((state: any) => state.coursesReducer);
    const course = courses.find((course: { _id: string | undefined; }) => course._id === cid);
    const { pathname } = useLocation();
    const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
    const { currentUser } = useSelector((state: any) => state.accountReducer);

    if(!enrollments.some((enrollment) => enrollment.user === currentUser._id 
    && enrollment.course === course._id)) {
        return <Navigate to="/Kambaz/Dashboard" />;
    }
    else {
        return (
        <div id="wd-courses">
            <h2 className="text-danger">
            <FaAlignJustify className="me-4 fs-4 mb-1" />
            {course && course.name} &gt; {pathname.split("/")[4]}
            </h2> <hr />
            <div className="d-flex">
                <div className="d-none d-md-block">
                    <CourseNavigation />
                </div>
                <div className="flex-fill">
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home />} />
                        <Route path="Modules" element={<Modules />} />
                        <Route path="Assignments" element={<Assignments />} />
                        <Route path="Assignments/:aid" element={<AssignmentEditor />} />
                        <Route path="People" element={<PeopleTable />} />
                    </Routes>
                </div>
            </div>
        </div>
    );}
}