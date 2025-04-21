import { Col, Row } from "react-bootstrap";

export default function Response({id, title, question, points, answers, correct, response, type}: {id: string, type: string, title: string, question : string, points: Number, answers:[String], response: string, correct: string}) {
    return(
        <div id={`wd-question-${id}`}>
            <div className="card">
                <h4 className={`card-header text-white ${type === "Fill in the Blank" ? answers.includes(response) ? "bg-success" : "bg-danger" : response === correct ? "bg-success" : "bg-danger"}`}> {title} ({points.toString()} points)</h4>
                <p className="card-body">{question}<hr/>
                    {type === "Multiple Choice" ?
                        answers.map((answer) => (
                            <Row>
                                <Col sm={2}>{answer === response ? <b className="float-end">Your Answer:</b> : ""}</Col>
                                <Col>{answer}</Col>
                            </Row>
                        ))
                    : type === "True/False" ?
                        <div><Row>
                            <Col sm={2}>{response === "true" ? <b className="float-end">Your Answer:</b> : ""}</Col>
                            <Col>True</Col>
                        </Row>
                        <Row>
                            <Col sm={2}>{response === "false" ? <b className="float-end">Your Answer:</b> : ""}</Col>
                            <Col>False</Col>
                        </Row></div>
                    : 
                    <Row>
                        <Col sm={2}>{<b className="float-end">Your Answer:</b>}</Col>
                        <Col>{response}</Col>
                    </Row>
                    }
                </p>
            </div>
            <br/>
        </div>
    )
}