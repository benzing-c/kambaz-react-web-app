import { Form } from "react-bootstrap";

export default function MultipleChoice({updateAnswer, id, title, question, points, answers}: {updateAnswer: any, id: string, title: string, question : string, points: Number, answers:[String]}) {
    return(
        <div id={`wd-question-${id}`}>
            <div className="card">
                <h4 className="card-header"> {title} ({points.toString()} points)</h4>
                <p className="card-body">{question}<hr/>
                <Form>
                    {answers.map((answer) => (
                        <Form.Check
                            type="radio"
                            name={`wd-question-${id}`}
                            label={answer}
                            onChange={(e) => updateAnswer(id, answer)}
                        />
                    ))}
                </Form></p>
            </div>
            <br/>
        </div>
    )
}