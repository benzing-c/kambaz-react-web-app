import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import ProtectedComponent from "../../Account/ProtectedComponent";
import { useState } from "react";
import QuizDeleter from "./QuizDeleter";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router";
import * as client from "./client";
import { FaBan } from "react-icons/fa";
export default function QuizControlButtons({quiz} : { quiz : any}) {
  const [ published, setPublished ] = useState(quiz.published);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="float-end">
      <QuizDeleter show={show} 
        handleClose={handleClose} 
        dialogTitle={`Delete ${quiz.title}?`}
        quizId={quiz._id} />

      <ProtectedComponent><Dropdown>
        <Dropdown.Toggle variant="link">
          {published ? <GreenCheckmark /> : <FaBan className="fs-5"/>}<IoEllipsisVertical className="fs-4" />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item as={Link} to={quiz._id}>Edit</Dropdown.Item>
          <Dropdown.Item onClick={() => handleShow()}>Delete</Dropdown.Item>
          <Dropdown.Item onClick={() => { client.updateQuiz({...quiz, published: !published}); setPublished(!published);}}>{published ? "Unpublish" : "Publish"}</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown></ProtectedComponent>
    </div> );}