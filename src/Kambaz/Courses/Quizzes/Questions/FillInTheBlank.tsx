import { FormControl } from "react-bootstrap";

export default function FillInTheBlank({updateAnswer, id, title, question, points}: {updateAnswer: any, id: string, title: string, question : string, points: Number}) {
    return(
        <div id={`wd-question-${id}`}>
            <div className="card">
                <h4 className="card-header"> {title} ({points.toString()} points)</h4>
                <p className="card-body">{question}<hr/>
                    <FormControl onChange={(e) => updateAnswer(id, e.target.value)}/>
                </p>
            </div>
            <br/>
        </div>
    )
}