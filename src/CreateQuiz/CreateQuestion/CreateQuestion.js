import React, { useState, useEffect } from 'react';
import environment from '../../environments/index';
import './CreateQuestion.scss';

const CreateQuestion = () => {

    const [value, setValue] = useState('')
    const [questionValue, setQuestionValue] = useState('');
    // const [answerBody, setAnswerBody] = useState('');
    const [answers, setAnswers] = useState([
        { body: '', isCorrect: false, id: '' },
        { body: '', isCorrect: false, id: '' },
        { body: '', isCorrect: false, id: '' },
        { body: '', isCorrect: false, id: '' },
    ]);

    // const answers = [
    //     { body: answerBody, isCorrect: false, id: answerBody.hashCode() },
    //     { body: answerBody, isCorrect: false, id: answerBody.hashCode() },
    //     { body: answerBody, isCorrect: false, id: answerBody.hashCode() },
    //     { body: answerBody, isCorrect: false, id: answerBody.hashCode() },
    // ]


    // const sortAnswers = (i, value) => {
    //     let answerToBeChanged = answers[i];
    //     answerToBeChanged.body += value;
    // }

    const sortAnswers = (answer, value) => {
        let answerToBeChanged = answers[answer];
        setValue(answerToBeChanged.body = value);
        answerToBeChanged.id = answerToBeChanged.body.hashCode()
    }


    const sortCorrectAnswer = (answer) => {
        let answerToBeChanged = answers[answer];
        answerToBeChanged.isCorrect = !answerToBeChanged.isCorrect;
    }

    async function submit(e) {
        e.preventDefault();
        // const { answer1, answer2, answer3, answer4 } = answers;
        // const submitedAnswers = [answer1, answer2, answer3, answer4]
        const data = {
            question: questionValue,
            answers: answers
        }
        console.log(data)
        try {
            const res = await fetch(environment.apiUrl + '/create-question', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
            });
            const result = await res.json();
            return result;
        }
        catch (err) {
            console.log(err)
        }
        // console.log(data);
        // console.log(questionValue);
        // console.log(answers);
    }


    // useEffect(() => {
    //     setAnswers(answers)
    // }, [answers]);



    return (
        <div className="CreateQuestion">

            <h1>Create Your Question</h1>


            <form className="create-question-form"
                onSubmit={(e) => submit(e)}
            >

                <div className="input-group">
                    <label>Question</label>
                    <input type="text"
                        onChange={(e) => setQuestionValue(e.target.value)}
                        value={questionValue} />
                </div>


                {answers.map((answer, index) => {
                    return <div className="input-group">
                        <label>Answer {index + 1}</label>
                        <div className="inputs">
                            <input type="text"
                                onChange={(e) => sortAnswers(index, e.target.value)}
                                value={answers[index].body}
                                name={`Answer ${index + 1}`}
                            />
                            <input className="checkbox" type="checkbox"
                                onClick={() => {
                                    sortCorrectAnswer(index);
                                }}
                            />
                        </div>
                    </div>
                })}


                {/* 
                <div className="input-group">
                    <label>Answer 1</label>
                    <div className="inputs">
                        <input type="text"
                            onChange={(e) => sortAnswers('answer1', e.target.value)}
                            value={answers.answer1.body} />
                        <input className="checkbox" type="checkbox"
                            onClick={() => {
                                sortCorrectAnswer('answer1');
                            }}
                        />
                    </div>
                </div>

                <div className="input-group">
                    <label>Answers 2</label>
                    <div className="inputs">
                        <input type="text"
                            onChange={(e) => sortAnswers('answer2', e.target.value)}
                            value={answers.answer2.body} />
                        <input className="checkbox" type="checkbox"
                            onClick={() => {
                                sortCorrectAnswer('answer2');
                            }} />
                    </div>
                </div>

                <div className="input-group">
                    <label>Answers 3</label>
                    <div className="inputs">
                        <input type="text"
                            onChange={(e) => sortAnswers('answer3', e.target.value)}
                            value={answers.answer3.body} />
                        <input className="checkbox" type="checkbox"
                            onClick={() => {
                                sortCorrectAnswer('answer3');
                            }} />
                    </div>

                </div>

                <div className="input-group">
                    <label>Answers 4</label>
                    <div className="inputs">
                        <input type="text"
                            onChange={(e) => sortAnswers('answer4', e.target.value)}
                            value={answers.answer4.body} />
                        <input className="checkbox" type="checkbox"
                            onClick={() => {
                                sortCorrectAnswer('answer4');
                            }} />
                    </div>
                </div> */}

                <button className="btn"
                    onClick={submit}
                >Submit</button>
            </form>
            {/* {console.log(answers)} */}

        </div>
    );


}

export default CreateQuestion;
