import { Button, Modal } from "react-bootstrap";
import { deleteAssignment } from "./reducer";
import { useDispatch } from "react-redux";

export default function AssignmentDeleter({ show, handleClose, dialogTitle, assignmentId}: {
    show: boolean; handleClose: () => void; dialogTitle: string; assignmentId: string}) {
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
                dispatch(deleteAssignment(assignmentId));
                handleClose();
                }} > Delete 
            </Button>
        </Modal.Footer>
        </Modal>
    );
}