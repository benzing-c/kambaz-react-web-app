import { Form } from "react-bootstrap"

export default function TrueFalse({id, title, question, points}: {id:string, title: string, question : string, points: Number}) {
    return(
        <div id={`wd-question-${title}`}>
            <div className="card">
                <h4 className="card-header"> {title} ({points.toString()} points)</h4>
                <p className="card-body">{question}<hr/>
                <Form>
                    <Form.Check
                        type="radio"
                        name={`wd-question-${id}`}
                        label="True"
                    />
                    <Form.Check
                        type="radio"
                        name={`wd-question-${id}`}
                        label="False"
                    />
                </Form></p>
            </div><br/>
        </div>
    )
}