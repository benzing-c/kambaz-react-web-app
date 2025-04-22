import { useEffect, useState } from "react";
import * as client from "./client";
import { Button, Col, Form, FormControl, FormGroup, FormLabel, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { removeQuestion, updateQuestion } from "./reducer";
import { FaTrash } from "react-icons/fa";
import MultipleChoice from "./MultipleChoice";
import TrueFalse from "./TrueFalse";
import FillInTheBlank from "./FillInTheBlank";
import { FaPencil } from "react-icons/fa6";

export default function QuestionEditor({questionId} : {questionId: string}) {
    const [question, setQuestion] = useState<any>({});
    const [editing, setEditing] = useState<any>({});
    const dispatch = useDispatch();
    const fetchQuestion = async () => {
        const question = await client.fetchQuestion(questionId);
        setQuestion(question);
    }
    const saveQuestion = async (question: any) => {
        dispatch(updateQuestion(question));
        setEditing(false);
    }
    const deleteQuestion = async (questionId: string) => {
        await client.deleteQuestion(questionId);
        dispatch(removeQuestion(questionId));
    }
    const changeAnswer = (index: number, answer: string) => {
        const answers = question.answers;
        let correct = question.correct;
        if(answers[index] === correct) {
            correct = answer;
        }
        answers[index] = answer;
        setQuestion({...question, answers: answers, correct: correct});
    }
    const addAnswer = () => {
        const answers = question.answers;
        answers.push(`Answer #${answers.length + 1}`);
        setQuestion({...question, answers: answers});
    }
    const removeAnswer = (index: number) => {
        const answers = question.answers;
        answers.splice(index, 1);
        setQuestion({...question, answers: answers});
    }
    const updateAnswer = (questionId: string, ans: string) => {
        console.log(questionId + ans);
    }
    useEffect(() => {fetchQuestion(); setEditing(false);}, []);

    return(
        editing ?
        <div id={`wd-question-edit-${questionId}`}>
            <div className="card">
                <h4 className="card-header">
                    <FormGroup as={Row} className="mb-3" controlId="wd-assignment-name">
                        <Col><FormControl value={question && question.title} 
                                onChange={(e) => setQuestion({ ...question, title:  e.target.value })}/></Col>
                        <Col><Form.Select onChange={(e) => setQuestion({ ...question, type:  e.target.value })}>
                            <option>Type</option>
                            <option value="Multiple Choice">Mulitple Choice</option>
                            <option value="True/False">True/False</option>
                            <option value="Fill in the Blank">Fill in the Blank</option>
                        </Form.Select></Col>
                        <Col sm={1}><FormLabel>Points:</FormLabel></Col>
                        <Col sm={2}><FormControl type="number" value={question && question.points}
                                onChange={(e) => setQuestion({ ...question, points:  parseInt(e.target.value) })}/></Col>
                    </FormGroup>
                </h4>
                <p className="card-body">
                    <b>Question:</b>
                    <FormGroup className="mb-3" controlId="wd-question-text">
                        <FormControl as="textarea" rows={5} value={question && question.question}
                        onChange={(e) => setQuestion({ ...question, question:  e.target.value })}/>
                    </FormGroup>
                    <hr/>
                    <b>Answer(s):</b>
                    {
                        question && question.type === "Multiple Choice" ?
                            <Form> {question.answers !=null && question.answers.map((answer: string, index: number) => (
                                <Row><Col sm={1}><Form.Check
                                    type="radio"
                                    name={`wd-question-${questionId}`}
                                    defaultChecked={question.correct === answer}
                                    onChange={() => setQuestion({ ...question, correct: answer })}
                                /></Col>
                                <Col><FormControl value={answer}
                                    onChange={(e) => changeAnswer(index, e.target.value)}/></Col>
                                <Col sm={1}><Button variant="danger" size="sm" className="me-1" id="wd-save-question-btn"
                                    onClick={() => removeAnswer(index)}>
                                    -
                                </Button></Col></Row>
                            ))}
                            <Button variant="secondary" size="sm" className="me-1" id="wd-save-question-btn"
                                onClick={() => addAnswer()}>
                                Add Answer
                              </Button>
                            </Form>
                            

                        : question && question.type === "True/False" ? 
                            <Form>
                                <Form.Check
                                    type="radio"
                                    name={`wd-question-${questionId}`}
                                    label="True"
                                    defaultChecked={question.correct}
                                    onChange={(e) => setQuestion({ ...question, correct: e.target.checked })}
                                />
                                <Form.Check
                                    type="radio"
                                    name={`wd-question-${questionId}`}
                                    label="False"
                                    defaultChecked={question.correct}
                                    onChange={(e) => setQuestion({ ...question, correct: !e.target.checked })}
                                />
                            </Form>
                        
                        :
                            <Form> {question && question.answers !=null && question.answers.map((answer: string, index: number) => (
                                <Row><Col><FormControl value={answer}
                                    onChange={(e) => changeAnswer(index, e.target.value)}/></Col>
                                <Col sm={1}><Button variant="danger" size="sm" className="me-1" id="wd-save-question-btn"
                                    onClick={() => removeAnswer(index)}>
                                    -
                                </Button></Col></Row>
                            ))}
                            <Button variant="secondary" size="sm" className="me-1" id="wd-save-question-btn"
                                onClick={() => addAnswer()}>
                                Add Answer
                            </Button>
                            </Form>
                    }
                    <hr/>
                    <Button variant="danger" size="lg" className="me-1" id="wd-save-question-btn"
                                onClick={() => deleteQuestion(question._id)}>
                                <FaTrash/> Delete
                              </Button>
                    <Button variant="danger" size="lg" className="me-1 float-end" id="wd-save-question-btn"
                                onClick={() => saveQuestion(question)}>
                                Save
                              </Button>
                    <Button variant="secondary" size="lg" className="me-1 float-end" id="wd-save-question-btn"
                                onClick={() => fetchQuestion()}>
                                Cancel
                              </Button>
                </p>
            </div>
            <br/>
        </div>:
        <div id={`wd-question-edit-${questionId}`}>
            <Row><Col>{question.type === "Multiple Choice" ? <MultipleChoice updateAnswer={(updateAnswer)} id={question._id} title={question.title} question={question.question} points={question.points} answers={question.answers} />
                    : question.type === "True/False" ? <TrueFalse updateAnswer={updateAnswer} id={question._id} title={question.title} question={question.question} points={question.points} />
                    :<FillInTheBlank updateAnswer={updateAnswer} id={question._id} question={question.question} title={question.title} points={question.points} />}
                </Col>
            <Col sm={2}><Button variant="secondary" size="lg" className="me-1 float-end" id="wd-add-group-btn" onClick={() => setEditing(true)}>
                    <FaPencil className="position-relative me-2" style={{ bottom: "1px" }} />
                    Edit
            </Button></Col></Row>
        </div>
    )
}