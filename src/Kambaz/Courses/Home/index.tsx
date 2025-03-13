import ProtectedComponent from "../../Account/ProtectedComponent";
import Modules from "../Modules";
import CourseStatus from "./Status";
export default function Home() {
  return (
    <div className="d-flex" id="wd-home">
      <div className="flex-fill me-3">
         <Modules />
      </div>
      <ProtectedComponent><div className="d-none d-xl-block">
        <CourseStatus />
      </div></ProtectedComponent>
    </div>
);}
