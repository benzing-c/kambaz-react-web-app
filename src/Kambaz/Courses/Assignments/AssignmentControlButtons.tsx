import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import ProtectedComponent from "../../Account/ProtectedComponent";
import { FaTrash } from "react-icons/fa";
import { useState } from "react";
import AssignmentDeleter from "./AssignmentDeleter";
export default function LessonControlButtons({assignmentId, assignmentTitle} : {assignmentId : string, assignmentTitle : string}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="float-end">
      <AssignmentDeleter show={show} 
        handleClose={handleClose} 
        dialogTitle={`Delete ${assignmentTitle}?`}
        assignmentId={assignmentId} />

      <ProtectedComponent><FaTrash className="text-danger me-2 mb-1" onClick={() => handleShow()}/></ProtectedComponent>
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
    </div> );}