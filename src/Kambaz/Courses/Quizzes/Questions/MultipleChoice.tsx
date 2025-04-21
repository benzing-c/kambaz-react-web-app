import { Form } from "react-bootstrap";

export default function MultipleChoice({id, title, question, points, answers}: {id: string, title: string, question : string, points: Number, answers:[String]}) {
    return(
        <div id={`wd-question-${title}`}>
            <div className="card">
                <h4 className="card-header"> {title} ({points.toString()} points)</h4>
                <p className="card-body">{question}<hr/>
                <Form>
                    {answers.map((answer) => (
                        <Form.Check
                            type="radio"
                            name={`wd-question-${id}`}
                            label={answer}
                        />
                    ))}
                </Form></p>
            </div>
            <br/>
        </div>
    )
}