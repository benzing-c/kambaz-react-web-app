import { Button, Modal } from "react-bootstrap";
import { deleteQuiz } from "./reducer";
import { useDispatch } from "react-redux";
import * as quizzesClient from "./client";

export default function QuizzDeleter({ show, handleClose, dialogTitle, quizId}: {
    show: boolean; handleClose: () => void; dialogTitle: string; quizId: string}) {
    const removeQuiz = async (quizId: string) => {
        await quizzesClient.deleteQuiz(quizId);
        dispatch(deleteQuiz(quizId));
    };
    const dispatch = useDispatch();
    return (
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>{dialogTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}> Cancel </Button>
            <Button variant="danger"
                onClick={() => {
                removeQuiz (quizId);
                handleClose();
                }} > Delete 
            </Button>
        </Modal.Footer>
        </Modal>
    );
}