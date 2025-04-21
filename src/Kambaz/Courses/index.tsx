import { Routes, Route, Navigate, useParams, useLocation } from "react-router";
import CourseNavigation from "./Naviagation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { FaAlignJustify } from "react-icons/fa";
import PeopleTable from "./People/Table";
import { useSelector } from "react-redux";
import * as client from "./client";
import { useEffect, useState } from "react";
import Quizzes from "./Quizzes";
import QuizDetails from "./Quizzes/Details";
import DetailsEditor from "./Quizzes/DetailsEditor";
import QuestionsEditor from "./Quizzes/QuestionsEditor";
import QuestionsView from "./Quizzes/QuestionsView";
import ProtectedComponent from "../Account/ProtectedComponent";
import ResponseView from "./Quizzes/ResponseView";

export default function Courses() {
    const { cid } = useParams();
    const { courses } = useSelector((state: any) => state.coursesReducer);
    const course = courses.find((course: { _id: string | undefined; }) => course._id === cid);
    const { pathname } = useLocation();
    const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const [users, setUsers] = useState<any[]>([]);
    const fetchUsers = async () => {
        const users = await client.findUsersForCourse(cid!);
        setUsers(users);
        setUsers(users.map((u: any) => (u.user)));
    }
    useEffect(() => {
            fetchUsers();
        }, []);

    if(!enrollments.some((enrollment: { user: any; course: any; }) => enrollment.user === currentUser._id 
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
                        <Route path="Quizzes" element={<Quizzes />} />
                        <Route path="Quizzes/:qid" element={<QuizDetails />} />
                        <Route path="Quizzes/:qid/Editor" element={<ProtectedComponent><DetailsEditor /></ProtectedComponent>} />
                        <Route path="Quizzes/:qid/QuestionEditor" element={<ProtectedComponent><QuestionsEditor /></ProtectedComponent>} />
                        <Route path="Quizzes/:qid/Attempt" element={<QuestionsView />} />
                        <Route path="Quizzes/:qid/Response" element={<ResponseView />} />
                        <Route path="People" element={<PeopleTable users={users}/>} />
                    </Routes>
                </div>
            </div>
        </div>
    );}
}