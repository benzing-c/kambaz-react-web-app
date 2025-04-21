import { FormControl } from "react-bootstrap";

export default function FillInTheBlank({title, question, points}: {title: string, question : string, points: Number}) {
    return(
        <div id={`wd-question-${title}`}>
            <div className="card">
                <h4 className="card-header"> {title} ({points.toString()} points)</h4>
                <p className="card-body">{question}<hr/>
                    <FormControl/>
                </p>
            </div>
            <br/>
        </div>
    )
}