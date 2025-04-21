import { Form } from "react-bootstrap"

export default function TrueFalse({updateAnswer, id, title, question, points}: {updateAnswer: any, id:string, title: string, question : string, points: Number}) {
    return(
        <div id={`wd-question-${id}`}>
            <div className="card">
                <h4 className="card-header"> {title} ({points.toString()} points)</h4>
                <p className="card-body">{question}<hr/>
                <Form>
                    <Form.Check
                        type="radio"
                        name={`wd-question-${id}`}
                        label="True"
                        onChange={() => updateAnswer(id, "true")}
                    />
                    <Form.Check
                        type="radio"
                        name={`wd-question-${id}`}
                        label="False"
                        onChange={() => updateAnswer(id, "false")}
                    />
                </Form></p>
            </div><br/>
        </div>
    )
}